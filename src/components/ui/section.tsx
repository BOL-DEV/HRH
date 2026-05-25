import type { ReactNode } from "react";
import { Container } from "./container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section className={["section-space", className ?? ""].filter(Boolean).join(" ")}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
