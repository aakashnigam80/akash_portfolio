import { Header } from "@/components/Header/header";
import { HeroSection } from "@/app/HeroSection/HeroSection";
import Companies from "./companies/companies";
import { ProjectsSection } from "@/app/ProjectsSection/ProjectsSection";
import { TestimonialsSection } from "@/app/TestimonialsSection/TestimonialsSection";
import { SkillsSection } from "./SkillsSection/SkillsSection";

export default function Home() {
  return (
    <div>
      <div className="border-border border-b">
        <Header />
        <HeroSection />
      </div>
      <div className="border-border border-b">
        <Companies />
      </div>
      <div className="border-border border-b">
        <ProjectsSection />
      </div>
      <div className="border-border border-b">
        <TestimonialsSection />
      </div>
      <div className="border-border border-b">
        <SkillsSection />
      </div>
    </div>
  );
}
