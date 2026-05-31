import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const philosophyPoints = [
  {
    title: "Music as emotional architecture",
    body: "HRH treats sound as more than accompaniment. Highlife shapes the room, steadies the breath, and opens reflective space without force.",
  },
  {
    title: "Conversation as care",
    body: "Therapeutic dialogue is not used as spectacle. It is held with gentleness, cultural sensitivity, and respect for the pace of real feeling.",
  },
  {
    title: "Atmosphere as ritual",
    body: "Lighting, spacing, silence, and curation are all part of the healing language. The environment itself participates in the work.",
  },
];

const culturalReferences = [
  "Vintage highlife lounges and bandstand elegance",
  "Black-and-white documentary photography",
  "Late-session listening culture",
  "Therapy spaces built around slowness and trust",
];

const links = [
  {
    label: "Instagram (@hrh.session)",
    href: "https://instagram.com/hrh.session",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/album/45aiolDF5jrhCwnHaNQQlK?si=QUjxI95SR_W7t3oFq3hPVQ",
  },
  { label: "Press Inquiries", href: "mailto:argyrworldwise@gmail.com" },
  { label: "Community", href: "mailto:argyrworldwise@gmail.com" },
];

export function AboutPage() {
  return (
    <>
      <Section
        className="first:pt-0"
        containerClassName="pt-20 sm:pt-24 lg:pt-28"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <div className="section-frame relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/ADUNNI.jpg"
                  alt="Editorial founder portrait for HRH"
                  width={1200}
                  height={1500}
                  className="h-[26rem] w-full object-cover grayscale sm:h-[34rem] lg:h-[42rem]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.04),rgba(5,5,5,0.18)_52%,rgba(5,5,5,0.78)_100%)]" />
              </div>
            </div>
          </Reveal>

          <div className="order-1 space-y-8 lg:order-2">
            <Reveal className="space-y-5">
              <p className="eyebrow">About HRH</p>
              <h1 className="font-display max-w-4xl text-5xl leading-[0.92] tracking-[-0.07em] text-[var(--color-ink-soft)] sm:text-6xl lg:text-[6rem]">
                Built for people who need beauty, honesty, and room to feel.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-mist)]">
                HRH exists at the intersection of cultural memory, therapeutic
                conversation, and the emotional generosity of highlife music. It
                is both a gathering and a philosophy of how people can be held
                more carefully.
              </p>
            </Reveal>

            <Reveal
              className="section-frame rounded-[1.75rem] p-6 sm:p-8"
              delay={0.12}
            >
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
                Founder Story
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
                HRH began from a simple question: what if an event could feel
                less like performance and more like emotional shelter? The idea
                grew from a love of vintage African music culture, a deep
                respect for therapeutic spaces, and a desire to create rooms
                where people could arrive as they are and leave more connected
                to themselves.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section
        className="border-t border-white/10 bg-[var(--color-surface-alt)]"
        containerClassName="pt-20 sm:pt-24 lg:pt-28"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:gap-14">
          <Reveal className="space-y-5">
            <p className="eyebrow">Vision and Mission</p>
            <h2 className="font-display max-w-3xl text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl lg:text-6xl">
              To build a cultural practice where rhythm and reflection belong in
              the same room.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
              The vision of HRH is a future where emotionally intelligent
              cultural experiences are not rare luxuries but living rituals. Its
              mission is to create intimate gatherings that use music,
              storytelling, and therapeutic conversation to restore depth,
              softness, and presence.
            </p>
          </Reveal>

          <Reveal
            className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10"
            delay={0.12}
          >
            <div className="surface-card p-6 sm:p-8">
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
                Vision
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-mist)] sm:text-lg">
                A world where cultural events can also be spaces of emotional
                repair, memory, and belonging.
              </p>
            </div>
            <div className="surface-card p-6 sm:p-8">
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
                Mission
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-mist)] sm:text-lg">
                To stage intimate, beautifully paced encounters between music,
                healing, and thoughtful community.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        className="border-t border-white/10"
        containerClassName="pt-20 sm:pt-24 lg:pt-28"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <Reveal className="space-y-5">
            <p className="eyebrow">Philosophy</p>
            <h2 className="font-display max-w-3xl text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl lg:text-6xl">
              Emotional grounding, cultural intelligence, and artistic
              restraint.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
              HRH is guided by the belief that people respond most deeply to
              experiences that respect complexity. It does not chase spectacle.
              It creates atmosphere, holds silence carefully, and lets meaning
              unfold with patience.
            </p>
          </Reveal>

          <div className="space-y-5">
            {philosophyPoints.map((point, index) => (
              <Reveal
                key={point.title}
                delay={index * 0.08}
                className="section-frame rounded-[1.75rem] p-6 sm:p-8"
              >
                <h3 className="font-display text-2xl leading-tight text-[var(--color-ink-soft)] sm:text-[2rem]">
                  {point.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
                  {point.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="border-t border-white/10 bg-[var(--color-surface-alt)]"
        containerClassName="pt-20 sm:pt-24 lg:pt-28"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-start lg:gap-14">
          <Reveal className="space-y-5">
            <p className="eyebrow">Cultural Inspiration</p>
            <h2 className="font-display max-w-3xl text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl lg:text-6xl">
              Drawn from archives, lounges, therapy rooms, and city-session
              tenderness.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
              The aesthetic and emotional language of HRH comes from layered
              sources: old record sleeves, documentary portraiture, the warmth
              of live highlife rooms, and the kind of therapeutic environments
              where honesty can breathe.
            </p>
          </Reveal>

          <Reveal
            className="section-frame rounded-[1.75rem] p-6 sm:p-8"
            delay={0.12}
          >
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
              Reference Points
            </p>
            <div className="mt-5 space-y-4">
              {culturalReferences.map((item) => (
                <div
                  key={item}
                  className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <p className="text-base leading-8 text-[var(--color-mist)] sm:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        className="border-t border-white/10"
        containerClassName="pt-20 sm:pt-24 lg:pt-28"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <Reveal className="space-y-5">
            <p className="eyebrow">Press and Social</p>
            <h2 className="font-display max-w-3xl text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl lg:text-6xl">
              Stay close to the archive, the music, and the next room we build.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
              For collaborations, editorial features, and community updates, HRH
              remains open to thoughtful conversation.
            </p>
          </Reveal>

          <Reveal
            className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 sm:grid-cols-2"
            delay={0.12}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="surface-card flex min-h-32 items-end p-6 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.05)] sm:p-8"
              >
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
                    Link
                  </p>
                  <p className="mt-3 font-display text-2xl leading-tight text-[var(--color-ink-soft)]">
                    {link.label}
                  </p>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
