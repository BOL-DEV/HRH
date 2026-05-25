import { Reveal } from "@/components/ui/reveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <Reveal className="space-y-6">
      <p className="eyebrow">{eyebrow}</p>
      <div className="space-y-5">
        <h1 className="font-display max-w-4xl text-balance text-5xl leading-[0.95] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[var(--color-mist)]">
          {description}
        </p>
      </div>
    </Reveal>
  );
}
