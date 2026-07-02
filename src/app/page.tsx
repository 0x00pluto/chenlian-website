import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteNav } from "@/components/layout/site-nav";
import { CommunitySection } from "@/components/sections/community-section";
import { CtaSection } from "@/components/sections/cta-section";
import { GuideSection } from "@/components/sections/guide-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JourneySection } from "@/components/sections/journey-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { StoriesSection } from "@/components/sections/stories-section";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <SiteNav />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <JourneySection />
        <StoriesSection />
        <GuideSection />
        <CommunitySection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
