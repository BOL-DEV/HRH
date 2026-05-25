import { Reveal } from "@/components/ui/reveal";

type PlaceholderItem = {
  title: string;
  description: string;
};

type PagePlaceholderGridProps = {
  items: PlaceholderItem[];
};

export function PagePlaceholderGrid({ items }: PagePlaceholderGridProps) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal
          key={item.title}
          className="surface-card p-8 sm:p-10"
          delay={index * 0.08}
        >
          <p className="text-[0.7rem] uppercase tracking-[0.26em] text-[var(--color-gold)]">
            Module 0{index + 1}
          </p>
          <h2 className="mt-8 font-display text-3xl leading-tight text-[var(--color-ink-soft)]">
            {item.title}
          </h2>
          <p className="mt-4 max-w-sm text-base leading-7 text-[var(--color-mist)]">
            {item.description}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
