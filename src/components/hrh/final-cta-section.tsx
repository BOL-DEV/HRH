"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function FinalCtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,241,232,0.08),transparent_28%),linear-gradient(180deg,rgba(9,9,9,0.2),rgba(5,5,5,0.92)_40%,#050505_100%)]" />
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                backgroundPosition: ["0% 0%", "100% 100%"],
              }
        }
        transition={{
          duration: 24,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "linear",
        }}
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(245,241,232,0.12), transparent 26%), radial-gradient(circle at 80% 35%, rgba(212,195,163,0.08), transparent 24%), radial-gradient(circle at 50% 85%, rgba(245,241,232,0.05), transparent 32%)",
          backgroundSize: "140% 140%",
        }}
      />
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-24 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-7"
        >
          <p className="eyebrow">Final Invitation</p>
          <h2 className="font-display text-balance text-5xl leading-[0.92] tracking-[-0.08em] text-[var(--color-ink-soft)] sm:text-6xl lg:text-[6.8rem]">
            Come Feel The Session
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--color-mist)] sm:text-xl">
            Step into a session of music, reflection, and intimate cultural
            presence. Let the room hold you for a while.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.18, ease: "easeOut" }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="mailto:argyrworldwise@gmail.com?subject=HRH%20Ticket%20Request"
            className="inline-flex min-h-14 min-w-52 items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-8 text-sm font-medium uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-transparent hover:text-[var(--color-ink-soft)]"
          >
            Book Tickets
          </Link>
          <Link
            href="mailto:argyrworldwise@gmail.com?subject=Join%20HRH%20Community"
            className="inline-flex min-h-14 min-w-52 items-center justify-center rounded-full border border-white/15 bg-black/20 px-8 text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-ink-soft)] transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
          >
            Join Community
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
