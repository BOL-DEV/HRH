import type { ReactNode } from "react";
import { AmbientAudioPlayer } from "@/components/hrh/ambient-audio-player";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-clip">
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(245,241,232,0.08),transparent_48%)]" />
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </div>
      <AmbientAudioPlayer />
    </div>
  );
}
