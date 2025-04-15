import ProjectDetail from "@/app/components/ProjectDetail";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectTestimonial from "@/app/components/ProjectTestimonial";
import ProjectCTA from "@/app/components/ProjectCTA";
import { Header } from "@/components/Header/header";
import { FooterSection } from "@/app/FooterSection/FooterSection";

export default function LegittRepoAnalyzerPage() {
  const projectData = {
    title: "Legitt AI Repo Analyzer",
    client: "Legitt AI",
    year: "2024",
    description:
      "Built an AI-powered platform for analyzing and visualizing contract repositories and legal documents.",
    scopeOfWork: [
      "AI Analysis",
      "Visual Analytics",
      "Pattern Detection",
      "Risk Assessment",
      "Batch Processing",
    ],
    liveSiteUrl: "#",
  };

  const contentData = {
    sections: [
      {
        title: "Document Analysis",
        description:
          "AI-powered analysis of legal documents with pattern recognition.",
        images: [
          {
            src: "/images/legitt-analyzer.png",
            alt: "Document Analysis Interface",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Insights Dashboard",
        description: "Visual representation of contract analysis and insights.",
        images: [
          {
            src: "/images/legitt-insights.png",
            alt: "Contract Insights Dashboard",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Visualization Tools",
        description:
          "Interactive tools for visualizing document relationships and patterns.",
        images: [
          {
            src: "/images/legitt-visualization.png",
            alt: "Document Visualization Tools",
          },
        ],
        layout: "single" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The repository analyzer has revolutionized how we understand our contract portfolio. The AI-powered insights and visualization tools have helped us identify patterns and risks we never knew existed.",
    author: {
      name: "Analytics Team",
      role: "Legitt AI",
      image: "/images/legitt-analyzer.png",
    },
  };

  return (
    <>
      <Header />
      <div className="border-b border-border">
        <ProjectDetail {...projectData} />
      </div>
      <div className="border-b border-border">
        <ProjectContent {...contentData} />
      </div>
      <div className="border-b border-border">
        <ProjectTestimonial {...testimonialData} />
      </div>
      <div className="border-b border-border">
        <ProjectCTA />
      </div>
      <div className="border-b border-border">
        <FooterSection />
      </div>
    </>
  );
}
