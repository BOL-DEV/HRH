"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type VoiceCard = {
  name: string;
  quote: string;
  legacy: string;
  image: string;
  alt: string;
};

const highlifeLegends: VoiceCard[] = [
  {
    name: "Victor Olaiya",
    quote: "A horn line can carry both elegance and ache.",
    legacy:
      "His highlife legacy taught generations how sophistication and warmth can live in the same arrangement.",
    image: "/voices/highlife-1.svg",
    alt: "Monochrome portrait inspired by a highlife legend",
  },
  {
    name: "Sir Victor Uwaifo",
    quote: "Rhythm can remember what a city forgets.",
    legacy:
      "A restless innovator whose music expanded the emotional and visual language of Nigerian performance culture.",
    image: "/voices/highlife-2.svg",
    alt: "Monochrome portrait inspired by an influential musician",
  },
  {
    name: "Christy Essien-Igbokwe",
    quote: "Tenderness becomes louder when the song is honest.",
    legacy:
      "Her voice remains a reference point for intimacy, grace, and feminine emotional intelligence in sound.",
    image: "/voices/highlife-3.svg",
    alt: "Monochrome portrait inspired by a legendary singer",
  },
];

const reflectiveVoices: VoiceCard[] = [
  {
    name: "Dr. Amina Okonkwo",
    quote: "People soften when a room stops asking them to be impressive.",
    legacy:
      "Brings trauma-aware facilitation that helps emotional reflection feel held, not exposed.",
    image: "/voices/reflective-1.svg",
    alt: "Monochrome portrait inspired by a therapeutic speaker",
  },
  {
    name: "Chidera Eze",
    quote: "Conversation can become care when silence is allowed to stay in the room.",
    legacy:
      "Known for guiding group reflection with clarity, gentleness, and deep cultural sensitivity.",
    image: "/voices/reflective-2.svg",
    alt: "Monochrome portrait inspired by a reflective speaker",
  },
  {
    name: "Tobi Banjoko",
    quote: "Belonging often begins when someone names what everyone else is carrying.",
    legacy:
      "Works at the intersection of emotional literacy, identity, and restorative communal dialogue.",
    image: "/voices/reflective-3.svg",
    alt: "Monochrome portrait inspired by a conversation facilitator",
  },
];

function VoiceRow({
  title,
  items,
}: {
  title: string;
  items: VoiceCard[];
}) {
  return (
    <div className="space-y-6">
      <Reveal className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">{title}</p>
          <h3 className="mt-3 font-display text-3xl leading-tight text-[var(--color-ink-soft)] sm:text-4xl">
            {title === "Highlife Legends"
              ? "A living lineage of musical memory."
              : "Voices that turn reflection into ritual."}
          </h3>
        </div>
        <p className="hidden text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-mist)] md:block">
          Horizontal Archive
        </p>
      </Reveal>

      <div className="hide-scrollbar -mx-5 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
        <div className="flex min-w-max gap-5 pb-2">
          {items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06} className="w-[19rem] sm:w-[22rem]">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="section-frame overflow-hidden rounded-[1.75rem] p-3"
              >
                <div className="relative overflow-hidden rounded-[1.25rem]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={960}
                    className="h-[18rem] w-full object-cover grayscale transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.06),rgba(5,5,5,0.18)_50%,rgba(5,5,5,0.82)_100%)]" />
                </div>

                <div className="space-y-4 p-4 sm:p-5">
                  <div>
                    <p className="font-display text-2xl leading-tight text-[var(--color-ink-soft)]">
                      {item.name}
                    </p>
                    <blockquote className="mt-3 text-base leading-7 text-[var(--color-mist)]">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>
                  <p className="border-t border-white/10 pt-4 text-sm leading-7 text-[var(--color-ink)]">
                    {item.legacy}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeaturedVoicesSection() {
  return (
    <Section
      className="border-t border-white/10"
      containerClassName="pt-20 sm:pt-24 lg:pt-28"
    >
      <Reveal className="space-y-5">
        <p className="eyebrow">Featured Voices</p>
        <h2 className="font-display max-w-4xl text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl lg:text-6xl">
          Part cultural archive, part emotional journal.
        </h2>
        <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
          HRH draws strength from musicians who shaped the emotional language of
          highlife and from speakers who know how to hold a room with care,
          honesty, and presence.
        </p>
      </Reveal>

      <div className="mt-14 space-y-16">
        <VoiceRow title="Highlife Legends" items={highlifeLegends} />
        <VoiceRow title="Reflective Voices" items={reflectiveVoices} />
      </div>
    </Section>
  );
}
