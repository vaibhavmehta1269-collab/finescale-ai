import { HeroSection } from "@/components/sections/HeroSection";
import { TechStackTicker } from "@/components/sections/TechStackTicker";
import { SystemsOverview } from "@/components/sections/SystemsOverview";
import { WhyFineScale } from "@/components/sections/WhyFineScale";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { CaseStudyTeaser } from "@/components/sections/CaseStudyTeaser";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TechStackTicker />
      <SystemsOverview />
      <WhyFineScale />
      <WorkflowSection />
      <CaseStudyTeaser />
      <ROICalculator />
      <CTASection />
    </div>
  );
}
