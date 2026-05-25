"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { primaryNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

function navItemClass(isActive: boolean) {
  return [
    "transition-colors duration-300",
    isActive ? "text-[var(--color-ink-soft)]" : "text-[var(--color-mist)] hover:text-[var(--color-ink-soft)]",
  ].join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,5,5,0.82)] backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl tracking-[-0.06em] text-[var(--color-ink-soft)]">
            {siteConfig.name}
          </span>
          <span className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-[var(--color-mist)]">
            {siteConfig.longName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.22em] md:flex">
          {primaryNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={navItemClass(isActive)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 px-4 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-ink-soft)] md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          Menu
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <Container className="flex flex-col gap-4 py-5 text-sm uppercase tracking-[0.22em]">
              {primaryNavigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={navItemClass(isActive)}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
