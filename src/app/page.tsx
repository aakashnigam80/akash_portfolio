import { Header } from "@/components/Header/header";
import { HeroSection } from "@/app/HeroSection/HeroSection";
import Companies from "./companies/companies";
import { ProjectsSection } from "@/app/ProjectsSection/ProjectsSection";
import { TestimonialsSection } from "@/app/TestimonialsSection/TestimonialsSection";
import { SkillsSection } from "./SkillsSection/SkillsSection";
import { FigmaSection } from "./FigmaSection/FigmaSection";
import { AboutSection } from "./AboutSection/AboutSection";
import { FAQSection } from "./FAQSection/FAQSection";
import { BlogSection } from "./BlogSection/BlogSection";
import { FooterSection } from "./FooterSection/FooterSection";

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
        <AboutSection />
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
      <div className="border-border border-b">
        <FigmaSection />
      </div>

      <div className="border-border border-b">
        <FAQSection />
      </div>
      <div className="border-border border-b">
        <BlogSection />
      </div>
      <FooterSection />
    </div>
  );
}
