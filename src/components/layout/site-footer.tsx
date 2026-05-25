import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

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
            conversation, music, and emotional presence in Lagos.
          </p>
          <p className="text-sm leading-7 text-[var(--color-mist)]">
            Contact:
            <br />
            reservations@hrhlagos.com
            <br />
            +234 (0) 800 HRH LAGOS
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Connect
            </p>
            <div className="flex flex-col gap-3 text-sm text-[var(--color-mist)]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-[var(--color-ink-soft)]"
              >
                Instagram
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-[var(--color-ink-soft)]"
              >
                Spotify
              </a>
              <a
                href="mailto:reservations@hrhlagos.com?subject=HRH%20Ticket%20Request"
                className="transition-colors duration-300 hover:text-[var(--color-ink-soft)]"
              >
                Ticket Request
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Information
            </p>
            <div className="flex flex-col gap-3 text-sm text-[var(--color-mist)]">
              <p>{siteConfig.longName}</p>
              <p>Lagos, Nigeria</p>
              <p>© 2026 HRH. All rights reserved.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
