import { Header } from "@/components/Header/header";
import { HeroSection } from "@/app/HeroSection/HeroSection";
import Companies from "./companies/companies";

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
    </div>
  );
}
