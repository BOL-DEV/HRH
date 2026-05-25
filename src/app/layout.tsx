import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.longName}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[var(--color-bg)]">
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
