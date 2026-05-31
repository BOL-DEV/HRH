import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const reflections = [
  {
    type: "Attendee Reflection",
    title: "I left feeling quieter in the best possible way.",
    body: "The music did not rush me. The conversation did not demand anything from me. It simply made room for parts of myself I had been speaking over.",
  },
  {
    type: "Journal Excerpt",
    title: "Some sessions remind you that softness is also a discipline.",
    body: "I wrote in the car before driving home because I did not want to lose the feeling. It was the first event in a long time that asked me to be present instead of impressive.",
  },
  {
    type: "Audience Quote",
    title: "It felt like a listening room built for the inner life.",
    body: "The highlife set held the tenderness of the conversation. Nothing felt disconnected. The whole session moved like one long breath.",
  },
  {
    type: "Emotional Testimony",
    title: "I did not expect to feel seen by a room full of strangers.",
    body: "There was something deeply human about sitting in shared silence, then hearing the music answer what nobody had fully said aloud.",
  },
];

export function AudienceReflectionsSection() {
  return (
    <Section
      className="border-t border-white/10 bg-[var(--color-surface-alt)]"
      containerClassName="pt-20 sm:pt-24 lg:pt-28"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Audience Experience</p>
          <h2 className="font-display max-w-3xl text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl lg:text-6xl">
            Reflections that read like margin notes from a tender session.
          </h2>
          <p className="max-w-xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
            These fragments are designed to feel personal rather than
            promotional: the kind of words people write down after something
            shifts quietly inside them.
          </p>
        </Reveal>

        <div className="space-y-6">
          {reflections.map((reflection, index) => (
            <Reveal
              key={reflection.title}
              delay={index * 0.08}
              className="section-frame rounded-[1.75rem] p-6 sm:p-8"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
                {reflection.type}
              </p>
              <h3 className="mt-5 font-display max-w-2xl text-2xl leading-tight text-[var(--color-ink-soft)] sm:text-[2rem]">
                {reflection.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
                {reflection.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
