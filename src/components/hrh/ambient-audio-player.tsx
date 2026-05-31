"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/voices/King_Sunny_Ade_-_Samba_(mp3.pm).mp3";
const TRACK_TITLE = "King Sunny Ade — Samba";

export function AmbientAudioPlayer() {
  const reduceMotion = useReducedMotion();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.7;
    audioRef.current = audio;

    void audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setIsPlaying(false);
      });

    return () => {
      const current = audioRef.current;

      if (!current) {
        return;
      }

      current.pause();
      current.src = "";
      audioRef.current = null;
    };
  }, []);

  async function togglePlayback() {
    if (!audioRef.current) {
      const audio = new Audio(AUDIO_SRC);
      audio.loop = true;
      audio.preload = "auto";
      audio.volume = 0.7;
      audioRef.current = audio;
    }

    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
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
