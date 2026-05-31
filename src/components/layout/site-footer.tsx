import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";
import type { SVGProps } from "react";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M15.5 11.9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="M7.5 10.2c3.9-1.1 8-.6 11.4 1.3" />
      <path d="M8.2 13c3.3-.8 6.8-.3 9.6 1.3" />
      <path d="M8.9 15.7c2.7-.5 5.5-.1 7.6 1.1" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(7,7,7,0.85)]">
      <Container className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:py-16">
        <div className="space-y-4">
          <p className="font-display text-3xl tracking-[-0.05em] text-[var(--color-ink-soft)]">
            {siteConfig.name}
          </p>
          <p className="max-w-md text-base leading-7 text-[var(--color-mist)]">
            Healing, Rhythm &amp; Highlife. A cultural space for therapeutic
            conversation, music, and emotional presence worldwide.
          </p>
          <p className="text-sm leading-7 text-[var(--color-mist)]">
            Contact:
            <br />
            argyrworldwise@gmail.com
            <br />
            +2348171128520
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Connect
            </p>
            <div className="flex items-center gap-4 text-sm text-[var(--color-mist)]">
              <a
                href="https://instagram.com/hrh.session"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 hover:border-white/20 hover:text-[var(--color-ink-soft)]"
              >
                <span className="sr-only">Instagram (@hrh.session)</span>
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://open.spotify.com/album/45aiolDF5jrhCwnHaNQQlK?si=QUjxI95SR_W7t3oFq3hPVQ"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 hover:border-white/20 hover:text-[var(--color-ink-soft)]"
              >
                <span className="sr-only">Spotify</span>
                <SpotifyIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:argyrworldwise@gmail.com?subject=HRH%20Ticket%20Request"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 hover:border-white/20 hover:text-[var(--color-ink-soft)]"
              >
                <span className="sr-only">Ticket Request</span>
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Information
            </p>
            <div className="flex flex-col gap-3 text-sm text-[var(--color-mist)]">
              <p>{siteConfig.longName}</p>
              <p>Worldwide</p>
              <p>© 2026 HRH. All rights reserved.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
