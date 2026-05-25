"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const sessionDate = new Date("2026-07-18T19:30:00+01:00");

const details = [
  { label: "Venue", value: "The Listening Room, Victoria Island, Lagos" },
  { label: "Session Time", value: "7:30 PM WAT" },
  { label: "Featured Guests", value: "Nse Ikpe-Etim, Seyi Shay" },
  {
    label: "Therapist Lineup",
    value: "Dr. Amina Okonkwo, Chidera Eze, Tobi Banjoko",
  },
  { label: "Featured Musician", value: "The Cavemen." },
];

function getTimeRemaining() {
  const difference = sessionDate.getTime() - Date.now();

  if (difference <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export function UpcomingSessionSection() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <Section
      className="border-t border-white/10"
      containerClassName="pt-20 sm:pt-24 lg:pt-28"
    >
      <div
        id="upcoming-event"
        className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14"
      >
        <div className="space-y-10">
          <Reveal className="space-y-5">
            <p className="eyebrow">Upcoming Session</p>
            <h2 className="font-display max-w-3xl text-4xl leading-[0.95] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl lg:text-6xl">
              A night of soft truth, live memory, and highlife after dark.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
              The next HRH session gathers listeners, therapists, and musicians
              inside one emotionally generous room. Every detail is paced for
              presence rather than spectacle.
            </p>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-4" delay={0.08}>
            {[
              { label: "Days", value: timeRemaining.days },
              { label: "Hours", value: timeRemaining.hours },
              { label: "Minutes", value: timeRemaining.minutes },
              { label: "Seconds", value: timeRemaining.seconds },
            ].map((item) => (
              <div key={item.label} className="section-frame rounded-[1.5rem] p-4">
                <p className="font-display text-4xl leading-none text-[var(--color-ink-soft)] sm:text-5xl">
                  {item.value}
                </p>
                <p className="mt-3 text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-mist)]">
                  {item.label}
                </p>
              </div>
            ))}
          </Reveal>

          <div className="space-y-5">
            {details.map((detail, index) => (
              <Reveal
                key={detail.label}
                delay={0.1 + index * 0.06}
                className="grid gap-2 border-t border-white/10 pt-5 sm:grid-cols-[168px_minmax(0,1fr)] sm:gap-6"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
                  {detail.label}
                </p>
                <p className="text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg">
                  {detail.value}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex flex-col items-start gap-4 pt-2 sm:flex-row" delay={0.25}>
            <a
              href="mailto:reservations@hrhlagos.com?subject=HRH%20Premium%20Ticket"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-7 text-sm font-medium uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-transparent hover:text-[var(--color-ink-soft)]"
            >
              Secure Premium Ticket
            </a>
            <p className="text-sm leading-7 text-[var(--color-mist)]">
              Saturday, July 18, 2026. Limited seating. Intentionally intimate.
            </p>
          </Reveal>
        </div>

        <Reveal className="lg:justify-self-end" delay={0.16}>
          <div className="section-frame relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,241,232,0.08),transparent_36%)]" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src="/hrh-session-poster.svg"
                alt="Upcoming HRH session poster"
                width={960}
                height={1280}
                className="h-auto w-full object-cover grayscale transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
