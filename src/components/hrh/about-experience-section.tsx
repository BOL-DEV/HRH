import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const storyPoints = [
  {
    title: "The meaning of HRH",
    description:
      "Healing, Rhythm & Highlife is an invitation into emotional presence, where softness and cultural memory are given equal importance.",
  },
  {
    title: "Healing through music",
    description:
      "Music becomes more than accompaniment. It slows the room, steadies the breath, and creates space for reflection without performance.",
  },
  {
    title: "Conversation as care",
    description:
      "Therapeutic dialogue sits beside live sound, offering a way to process identity, fatigue, tenderness, and belonging in community.",
  },
];

export function AboutExperienceSection() {
  return (
    <Section
      className="border-t border-white/10 bg-[var(--color-surface-alt)]"
      containerClassName="pt-20 sm:pt-24 lg:pt-28"
    >
      <div
        id="home-overview"
        className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14"
      >
        <Reveal className="order-2 lg:order-1">
          <div className="section-frame relative overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.06),rgba(5,5,5,0.2)_58%,rgba(5,5,5,0.76)_100%)]" />
            <Image
              src="/images/GUEST.jpg"
              alt="Abstract monochrome atmosphere for the HRH experience"
              width={1200}
              height={1500}
              className="h-[26rem] w-full object-cover object-center grayscale sm:h-[34rem] lg:h-[42rem]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="eyebrow">About the Experience</p>
              <p className="mt-3 max-w-md font-display text-2xl leading-tight text-[var(--color-ink-soft)] sm:text-3xl">
                An intimate language of stillness, sound, memory, and return.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 space-y-10 lg:order-2">
          <Reveal className="space-y-5">
            <p className="eyebrow">Reflective Frame</p>
            <h2 className="font-display max-w-3xl text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl lg:text-6xl">
              A space where cultural identity, emotional honesty, and highlife
              move in the same direction.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
              HRH is designed as a session of inward attention. It treats music
              as medicine, conversation as ritual, and atmosphere as a form of
              care. The experience unfolds slowly enough for people to hear
              themselves again.
            </p>
          </Reveal>

          <div className="space-y-6">
            {storyPoints.map((point, index) => (
              <Reveal
                key={point.title}
                delay={index * 0.08}
                className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
              >
                <h3 className="font-display text-2xl leading-tight text-[var(--color-ink-soft)] sm:text-[2rem]">
                  {point.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-[var(--color-mist)]">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
