"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/KFS.jpg"
          alt=""
          fill
          priority
          aria-hidden
          className="object-cover object-center grayscale"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.38),rgba(5,5,5,0.68)_35%,rgba(5,5,5,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(5,5,5,0.18)_42%,rgba(5,5,5,0.82)_100%)]" />
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-20 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={reduceMotion ? undefined : fadeUp.initial}
          animate={reduceMotion ? undefined : fadeUp.animate}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="eyebrow">HRH</p>
          <h1 className="font-display text-balance text-6xl leading-[0.92] tracking-[-0.08em] text-[var(--color-ink-soft)] sm:text-7xl lg:text-[7.5rem]">
            Healing. Rhythm. Highlife.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--color-mist)] sm:text-xl">
            A cultural experience blending therapeutic conversations and
            highlife music.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/sessions"
            className="inline-flex min-h-13 min-w-48 items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-7 text-sm font-medium uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-transparent hover:text-[var(--color-ink-soft)]"
          >
            Enter Session
          </Link>
          <Link
            href="/sessions#upcoming-event"
            className="inline-flex min-h-13 min-w-48 items-center justify-center rounded-full border border-white/15 bg-black/20 px-7 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-ink-soft)] transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
          >
            Upcoming Event
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#home-overview"
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.68rem] uppercase tracking-[0.3em] text-[var(--color-mist)]"
      >
        <span>Scroll</span>
        <span className="flex h-14 w-8 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 14, 0],
                    opacity: [0.5, 1, 0.5],
                  }
            }
            transition={{
              duration: 2.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]"
          />
        </span>
      </motion.a>
    </section>
  );
}
