import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const highlifeLegends = [
  {
    name: "Victor Olaiya",
    note: "His arrangements gave highlife an urban elegance that still feels ceremonial, romantic, and emotionally precise.",
    image: "/voices/highlife-1.svg",
  },
  {
    name: "Sir Victor Uwaifo",
    note: "An architect of experimentation, memory, and movement whose work expanded what highlife could sound and feel like.",
    image: "/voices/highlife-2.svg",
  },
  {
    name: "Christy Essien-Igbokwe",
    note: "Her voice remains a study in grace, intimacy, and the emotional intelligence of song.",
    image: "/voices/highlife-3.svg",
  },
];

const therapeuticVoices = [
  {
    name: "Dr. Amina Okonkwo",
    note: "Centers healing as a communal practice, where listening becomes a form of repair and dignity.",
    image: "/voices/reflective-1.svg",
  },
  {
    name: "Chidera Eze",
    note: "Works at the edge of silence and speech, helping people re-enter their own emotional vocabulary.",
    image: "/voices/reflective-2.svg",
  },
  {
    name: "Tobi Banjoko",
    note: "Frames reflection as cultural survival, not private indulgence, especially in overstretched modern life.",
    image: "/voices/reflective-3.svg",
  },
];

const rhythmNotes = [
  {
    title: "From ballroom elegance to intimate listening rooms",
    body: "Highlife has always carried atmosphere with it. From formal halls to improvised lounges, it has held celebration, ache, memory, and social intelligence in the same melodic space.",
  },
  {
    title: "Reflection as rhythm",
    body: "HRH treats conversation the way great bandleaders treat timing: not as interruption, but as structure. Silence, breath, and emotional honesty become part of the arrangement.",
  },
  {
    title: "A living, evolving archive",
    body: "This legacy is not sealed in nostalgia. It keeps moving through new rooms, new listeners, and new therapeutic languages that continue the work of cultural repair.",
  },
];

const healingNotes = [
  "Music helps people reach feelings they cannot always narrate directly.",
  "Shared listening can create a temporary community of emotional permission.",
  "Highlife holds warmth, wit, and melancholy together without forcing resolution.",
  "Healing often begins in atmospheres that allow dignity, softness, and memory to coexist.",
];

function PortraitPanel({
  title,
  eyebrow,
  entries,
}: {
  title: string;
  eyebrow: string;
  entries: { name: string; note: string; image: string }[];
}) {
  return (
    <div className="space-y-8">
      <Reveal className="space-y-4">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display max-w-3xl text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl">
          {title}
        </h2>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        {entries.map((entry, index) => (
          <Reveal key={entry.name} delay={index * 0.08}>
            <article className="section-frame overflow-hidden rounded-[1.75rem] p-3">
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <Image
                  src={entry.image}
                  alt={entry.name}
                  width={800}
                  height={960}
                  className="h-[18rem] w-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.04),rgba(5,5,5,0.18)_52%,rgba(5,5,5,0.74)_100%)]" />
              </div>
              <div className="space-y-4 p-4 sm:p-5">
                <h3 className="font-display text-2xl leading-tight text-[var(--color-ink-soft)]">
                  {entry.name}
                </h3>
                <p className="text-base leading-7 text-[var(--color-mist)]">
                  {entry.note}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function LegacyPage() {
  return (
    <>
      <Section className="first:pt-0" containerClassName="pt-20 sm:pt-24 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-end">
          <Reveal className="space-y-6">
            <p className="eyebrow">Legacy</p>
            <h1 className="font-display max-w-5xl text-5xl leading-[0.92] tracking-[-0.07em] text-[var(--color-ink-soft)] sm:text-6xl lg:text-[6.4rem]">
              Highlife, reflection, and the long intelligence of healing.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-mist)]">
              A digital museum page for the lineages that shape HRH: legendary
              musicians, therapeutic voices, and the enduring relationship
              between rhythm and emotional restoration.
            </p>
          </Reveal>

          <Reveal className="section-frame rounded-[1.75rem] p-6 sm:p-8" delay={0.12}>
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
              Museum Note
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--color-mist)] sm:text-lg">
              This page is arranged like an exhibition catalogue: part archive,
              part reflection, part living theory of what music can do for the
              human interior.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-white/10 bg-[var(--color-surface-alt)]" containerClassName="pt-20 sm:pt-24 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <div className="section-frame relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/band.jpg"
                  alt="Abstract monochrome museum-style composition inspired by highlife culture"
                  width={1200}
                  height={1500}
                  className="h-[26rem] w-full object-cover grayscale sm:h-[34rem] lg:h-[42rem]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.02),rgba(5,5,5,0.18)_52%,rgba(5,5,5,0.76)_100%)]" />
              </div>
            </div>
          </Reveal>

          <div className="order-1 space-y-6 lg:order-2">
            <Reveal className="space-y-5">
              <p className="eyebrow">Evolution of Rhythm and Reflection</p>
              <h2 className="font-display max-w-3xl text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl lg:text-6xl">
                The sound evolves, but the emotional task remains.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
                Highlife has always known how to hold complexity: elegance and
                earthiness, joy and ache, wit and lament. HRH inherits that
                layered emotional grammar and places it beside therapeutic
                conversation as a contemporary ritual of care.
              </p>
            </Reveal>

            <div className="space-y-5">
              {rhythmNotes.map((note, index) => (
                <Reveal
                  key={note.title}
                  delay={index * 0.08}
                  className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
                >
                  <h3 className="font-display text-2xl leading-tight text-[var(--color-ink-soft)] sm:text-[2rem]">
                    {note.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-mist)] sm:text-lg">
                    {note.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/10" containerClassName="pt-20 sm:pt-24 lg:pt-28">
        <PortraitPanel
          eyebrow="Legendary Highlife Musicians"
          title="Artists who taught rhythm how to remember."
          entries={highlifeLegends}
        />
      </Section>

      <Section className="border-t border-white/10 bg-[var(--color-surface-alt)]" containerClassName="pt-20 sm:pt-24 lg:pt-28">
        <PortraitPanel
          eyebrow="Influential Therapeutic Voices"
          title="People who give reflection a public language."
          entries={therapeuticVoices}
        />
      </Section>

      <Section className="border-t border-white/10" containerClassName="pt-20 sm:pt-24 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <Reveal className="space-y-5">
            <p className="eyebrow">Music as Emotional Healing</p>
            <h2 className="font-display max-w-3xl text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl lg:text-6xl">
              Sometimes the body understands melody before the mind finds a sentence.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
              Healing through music is not abstract here. It is social, sensory,
              and embodied. It lives in what returns to the chest after a horn
              line, what loosens after an honest lyric, and what shared rhythm
              makes possible between strangers.
            </p>
          </Reveal>

          <Reveal className="section-frame rounded-[1.75rem] p-6 sm:p-8" delay={0.12}>
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
              Healing Principles
            </p>
            <div className="mt-5 space-y-4">
              {healingNotes.map((item) => (
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
    </>
  );
}
