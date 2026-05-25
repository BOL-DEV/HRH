import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type ArchiveEntry = {
  year: string;
  city: string;
  title: string;
  description: string;
  performers: string[];
  therapists: string[];
  highlights: string[];
  gallery: {
    src: string;
    alt: string;
    heightClass: string;
  }[];
};

const archiveEntries: ArchiveEntry[] = [
  {
    year: "2026",
    city: "Lagos",
    title: "The Quiet Between Notes",
    description:
      "An edition shaped around softness, urban fatigue, and the emotional afterlife of memory. The room moved from guided reflection into a patient highlife set that felt almost devotional.",
    performers: ["The Cavemen.", "Somadina", "Jazzhole Horn Circle"],
    therapists: ["Dr. Amina Okonkwo", "Chidera Eze"],
    highlights: [
      "An opening circle on rest, longing, and modern city overstimulation.",
      "A candlelit performance sequence that let silence remain part of the score.",
      "Handwritten audience reflections collected at the close of the night.",
    ],
    gallery: [
      {
        src: "/archive/archive-2026-1.svg",
        alt: "Monochrome archive image from HRH Lagos 2026",
        heightClass: "h-[18rem] sm:h-[22rem]",
      },
      {
        src: "/archive/archive-2026-2.svg",
        alt: "Monochrome documentary frame from HRH Lagos 2026",
        heightClass: "h-[24rem] sm:h-[28rem]",
      },
    ],
  },
  {
    year: "2025",
    city: "Accra",
    title: "Rooms for Return",
    description:
      "This edition explored what it means to come back to oneself through sound, ancestral texture, and emotionally literate conversation. The atmosphere stayed close, minimal, and deeply human.",
    performers: ["Adomaa", "Bessa Simons Tribute Ensemble"],
    therapists: ["Tobi Banjoko", "Akosua Mensah"],
    highlights: [
      "A reflective prompt sequence on migration, identity, and inherited resilience.",
      "A stripped-back highlife performance with guitar, vocal harmony, and brass.",
      "An archive wall where attendees left fragments of advice for their younger selves.",
    ],
    gallery: [
      {
        src: "/archive/archive-2025-1.svg",
        alt: "Monochrome archive image from HRH Accra 2025",
        heightClass: "h-[22rem] sm:h-[26rem]",
      },
      {
        src: "/archive/archive-2025-2.svg",
        alt: "Monochrome documentary frame from HRH Accra 2025",
        heightClass: "h-[18rem] sm:h-[22rem]",
      },
    ],
  },
  {
    year: "2024",
    city: "Ibadan",
    title: "Night Music for Tender People",
    description:
      "An early HRH gathering centered on intergenerational conversation, emotional inheritance, and the healing intelligence of familiar melodies. It established the tone that future editions would deepen.",
    performers: ["Beautiful Nubia", "Femi Leye Circle"],
    therapists: ["Bolanle Akinyemi", "Dr. Kelechi Nwosu"],
    highlights: [
      "A community dialogue on masculinity, grief, and permission to feel.",
      "A closing sing-along that turned the entire venue into a living chorus.",
      "A slower, documentary-style pacing that made presence feel ceremonial.",
    ],
    gallery: [
      {
        src: "/archive/archive-2024-1.svg",
        alt: "Monochrome archive image from HRH Ibadan 2024",
        heightClass: "h-[20rem] sm:h-[24rem]",
      },
      {
        src: "/archive/archive-2024-2.svg",
        alt: "Monochrome documentary frame from HRH Ibadan 2024",
        heightClass: "h-[24rem] sm:h-[28rem]",
      },
    ],
  },
];

function ArchiveEntryBlock({
  entry,
  index,
}: {
  entry: ArchiveEntry;
  index: number;
}) {
  return (
    <div className="relative pl-0 lg:pl-20">
      <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 lg:block" />
      <div className="absolute left-[1.18rem] top-2 hidden h-3.5 w-3.5 rounded-full border border-[var(--color-gold)] bg-[var(--color-bg)] lg:block" />

      <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.34fr)_minmax(0,0.66fr)] lg:gap-14">
        <Reveal className="space-y-5 lg:sticky lg:top-28 lg:self-start" delay={index * 0.04}>
          <div className="space-y-2">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-gold)]">
              {entry.year}
            </p>
            <p className="font-display text-4xl leading-none text-[var(--color-ink-soft)] sm:text-5xl">
              {entry.city}
            </p>
          </div>
          <h2 className="font-display text-3xl leading-tight text-[var(--color-ink-soft)] sm:text-4xl">
            {entry.title}
          </h2>
          <p className="text-base leading-8 text-[var(--color-mist)] sm:text-lg">
            {entry.description}
          </p>
        </Reveal>

        <div className="space-y-8">
          <Reveal className="grid gap-5 sm:grid-cols-2" delay={0.08 + index * 0.04}>
            {entry.gallery.map((image) => (
              <div
                key={image.src}
                className="section-frame overflow-hidden rounded-[1.75rem] p-3"
              >
                <div className={`relative overflow-hidden rounded-[1.25rem] ${image.heightClass}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.03),rgba(5,5,5,0.12)_45%,rgba(5,5,5,0.72)_100%)]" />
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal
            className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 sm:grid-cols-2"
            delay={0.12 + index * 0.04}
          >
            <div className="surface-card p-6 sm:p-7">
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
                Performers
              </p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[var(--color-ink-soft)]">
                {entry.performers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="surface-card p-6 sm:p-7">
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
                Therapists
              </p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-[var(--color-ink-soft)]">
                {entry.therapists.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="section-frame rounded-[1.75rem] p-6 sm:p-8" delay={0.16 + index * 0.04}>
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
              Memorable Highlights
            </p>
            <div className="mt-5 space-y-4">
              {entry.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <p className="max-w-3xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export function SessionsArchivePage() {
  return (
    <>
      <Section className="first:pt-0" containerClassName="pt-20 sm:pt-24 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end">
          <Reveal className="space-y-6">
            <p className="eyebrow">Sessions Archive</p>
            <h1 className="font-display max-w-5xl text-5xl leading-[0.92] tracking-[-0.07em] text-[var(--color-ink-soft)] sm:text-6xl lg:text-[6.5rem]">
              Previous HRH editions, remembered like documentary scenes.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-mist)]">
              A cinematic record of gatherings shaped by conversation, highlife,
              and emotional presence. Each entry holds a city, a year, and the
              atmosphere people carried home with them.
            </p>
          </Reveal>

          <Reveal className="section-frame rounded-[1.75rem] p-6 sm:p-8" delay={0.12}>
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
              Archive Notes
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--color-mist)] sm:text-lg">
              Built as a cultural timeline rather than a conventional events
              list, this page preserves the emotional residue of each session:
              who gathered, what was felt, and what still lingers.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-white/10 bg-[var(--color-surface-alt)]" containerClassName="pt-20 sm:pt-24 lg:pt-28">
        <div className="space-y-24 lg:space-y-28">
          {archiveEntries.map((entry, index) => (
            <ArchiveEntryBlock key={`${entry.year}-${entry.city}`} entry={entry} index={index} />
          ))}
        </div>
      </Section>
    </>
  );
}
