"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TRACK_TITLE = "Midnight Reflection";

type AudioNodes = {
  context: AudioContext;
  masterGain: GainNode;
  pulseGain: GainNode;
  droneOscillator: OscillatorNode;
  pulseOscillator: OscillatorNode;
  filter: BiquadFilterNode;
};

function createAudioNodes(): AudioNodes {
  const context = new AudioContext();
  const masterGain = context.createGain();
  const pulseGain = context.createGain();
  const droneOscillator = context.createOscillator();
  const pulseOscillator = context.createOscillator();
  const filter = context.createBiquadFilter();

  droneOscillator.type = "sine";
  droneOscillator.frequency.value = 174;

  pulseOscillator.type = "triangle";
  pulseOscillator.frequency.value = 261.63;

  filter.type = "lowpass";
  filter.frequency.value = 720;
  filter.Q.value = 0.8;

  masterGain.gain.value = 0.0001;
  pulseGain.gain.value = 0.0001;

  droneOscillator.connect(filter);
  pulseOscillator.connect(pulseGain);
  pulseGain.connect(filter);
  filter.connect(masterGain);
  masterGain.connect(context.destination);

  droneOscillator.start();
  pulseOscillator.start();

  return {
    context,
    masterGain,
    pulseGain,
    droneOscillator,
    pulseOscillator,
    filter,
  };
}

export function AmbientAudioPlayer() {
  const reduceMotion = useReducedMotion();
  const audioRef = useRef<AudioNodes | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      const nodes = audioRef.current;

      if (!nodes) {
        return;
      }

      nodes.droneOscillator.stop();
      nodes.pulseOscillator.stop();
      void nodes.context.close();
    };
  }, []);

  async function togglePlayback() {
    if (!audioRef.current) {
      audioRef.current = createAudioNodes();
    }

    const nodes = audioRef.current;
    const now = nodes.context.currentTime;

    if (nodes.context.state === "suspended") {
      await nodes.context.resume();
    }

    if (isPlaying) {
      nodes.masterGain.gain.cancelScheduledValues(now);
      nodes.pulseGain.gain.cancelScheduledValues(now);
      nodes.masterGain.gain.setTargetAtTime(0.0001, now, 0.35);
      nodes.pulseGain.gain.setTargetAtTime(0.0001, now, 0.25);
      setIsPlaying(false);
      return;
    }

    nodes.masterGain.gain.cancelScheduledValues(now);
    nodes.pulseGain.gain.cancelScheduledValues(now);
    nodes.masterGain.gain.setTargetAtTime(0.08, now, 1.2);
    nodes.pulseGain.gain.setTargetAtTime(0.015, now, 0.9);
    setIsPlaying(true);
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 sm:inset-x-auto sm:right-5 sm:justify-end lg:bottom-6 lg:right-6">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="pointer-events-auto flex w-full max-w-[22rem] items-center gap-4 rounded-[1.6rem] border border-white/12 bg-[rgba(8,8,8,0.84)] px-4 py-3 shadow-[0_22px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:max-w-[20rem]"
      >
        <button
          type="button"
          onClick={togglePlayback}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pause ambient audio" : "Play ambient audio"}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)] bg-[rgba(212,195,163,0.12)] text-[var(--color-ink-soft)] transition-colors duration-300 hover:bg-[rgba(212,195,163,0.2)]"
        >
          {isPlaying ? (
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-4 w-1 rounded-full bg-[var(--color-ink-soft)]" />
              <span className="h-4 w-1 rounded-full bg-[var(--color-ink-soft)]" />
            </span>
          ) : (
            <span
              aria-hidden
              className="ml-0.5 block h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-[var(--color-ink-soft)]"
            />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <p className="text-[0.64rem] uppercase tracking-[0.28em] text-[var(--color-gold)]">
            Now Playing
          </p>
          <div className="mt-1 flex items-center gap-3">
            <p className="truncate font-display text-lg tracking-[-0.03em] text-[var(--color-ink-soft)]">
              {TRACK_TITLE}
            </p>
            <div className="flex h-6 items-end gap-1">
              {[0, 1, 2, 3].map((bar) => (
                <motion.span
                  key={bar}
                  animate={
                    isPlaying && !reduceMotion
                      ? {
                          height: ["0.4rem", `${1.1 + (bar % 2) * 0.45}rem`, "0.5rem"],
                          opacity: [0.4, 1, 0.5],
                        }
                      : {
                          height: "0.45rem",
                          opacity: 0.35,
                        }
                  }
                  transition={{
                    duration: 1.4,
                    repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                    delay: bar * 0.12,
                    ease: "easeInOut",
                  }}
                  className="w-0.5 rounded-full bg-[var(--color-gold)]"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
