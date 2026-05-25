import { AboutExperienceSection } from "@/components/hrh/about-experience-section";
import { FinalCtaSection } from "@/components/hrh/final-cta-section";
import { GallerySection } from "@/components/hrh/gallery-section";
import { HomeHero } from "@/components/hrh/home-hero";
import { UpcomingSessionSection } from "@/components/hrh/upcoming-session-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutExperienceSection />
      <UpcomingSessionSection />
      <GallerySection />
      <FinalCtaSection />
    </>
  );
}
