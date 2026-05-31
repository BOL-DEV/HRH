"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  quote: string;
  heightClass: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/images/KFS.jpg",
    alt: "Monochrome editorial scene with soft stage light",
    caption: "The room settles before the first voice enters.",
    quote: "We came to listen, not to perform healing.",
    heightClass: "h-[22rem] sm:h-[24rem]",
  },
  {
    src: "/images/GUEST.jpg",
    alt: "Abstract documentary frame with seated silhouettes",
    caption: "Silence becomes part of the composition.",
    quote: "Sometimes the gentlest note is the one that unlocks memory.",
    heightClass: "h-[28rem] sm:h-[32rem]",
  },
  {
    src: "/images/ADUNNI.jpg",
    alt: "Blurred monochrome portrait atmosphere",
    caption: "Faces remain present even when details soften.",
    quote: "The room felt like permission to be tender in public.",
    heightClass: "h-[20rem] sm:h-[23rem]",
  },
  {
    src: "/images/band.jpg",
    alt: "Late-session lounge texture in grayscale",
    caption: "Music holds what language almost reaches.",
    quote: "Highlife carried the conversation further than words could.",
    heightClass: "h-[26rem] sm:h-[30rem]",
  },
  {
    src: "/images/samnmi.jpg",
    alt: "Documentary-inspired monochrome crowd scene",
    caption: "Collective reflection, quietly shared.",
    quote: "Belonging can sound like a room breathing together.",
    heightClass: "h-[22rem] sm:h-[25rem]",
  },
  {
    src: "/images/seun%20olota.jpg",
    alt: "Noir abstract performance atmosphere",
    caption: "After the applause, the feeling remains.",
    quote: "What lingered most was the softness after the music ended.",
    heightClass: "h-[30rem] sm:h-[34rem]",
  },
];

export function GallerySection() {
  const reduceMotion = useReducedMotion();
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!activeItem) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return (
    <Section
      className="border-t border-white/10 bg-[var(--color-surface-alt)]"
      containerClassName="pt-20 sm:pt-24 lg:pt-28"
    >
      <Reveal className="space-y-5">
        <p className="eyebrow">Gallery</p>
        <h2 className="font-display max-w-4xl text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-ink-soft)] sm:text-5xl lg:text-6xl">
          Fragments of an atmosphere shaped like memory.
        </h2>
        <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
          Inspired by the black-and-white documentary rhythm of the HRH
          universe, this gallery keeps the emotional texture close and the
          presentation editorial.
        </p>
      </Reveal>

      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {galleryItems.map((item, index) => (
          <Reveal
            key={item.src}
            delay={index * 0.05}
            className="mb-5 break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              className="group section-frame block w-full overflow-hidden rounded-[1.75rem] p-3 text-left transition-colors duration-300 hover:border-white/20"
            >
              <div className={`relative overflow-hidden rounded-[1.25rem] ${item.heightClass}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.04),rgba(5,5,5,0.14)_52%,rgba(5,5,5,0.74)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="max-w-[18rem] font-display text-xl leading-tight text-[var(--color-ink-soft)]">
                    {item.caption}
                  </p>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(5,5,5,0.88)] px-4 py-8 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={
                reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }
              }
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="section-frame relative grid w-full max-w-6xl gap-6 overflow-hidden rounded-[2rem] p-4 sm:p-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/30 text-[var(--color-ink-soft)] transition-colors duration-300 hover:bg-white/10"
                aria-label="Close gallery preview"
              >
                ×
              </button>

              <div className="relative min-h-[18rem] overflow-hidden rounded-[1.5rem] sm:min-h-[28rem]">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="100vw"
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.05),rgba(5,5,5,0.55)_100%)]" />
              </div>

              <div className="flex flex-col justify-end gap-6 p-3 sm:p-5">
                <p className="eyebrow">Session Reflection</p>
                <p className="font-display text-3xl leading-tight text-[var(--color-ink-soft)] sm:text-4xl">
                  {activeItem.caption}
                </p>
                <blockquote className="max-w-xl text-lg leading-8 text-[var(--color-mist)] sm:text-xl">
                  &ldquo;{activeItem.quote}&rdquo;
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
