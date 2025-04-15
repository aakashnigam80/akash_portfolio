import ProjectDetail from "@/app/components/ProjectDetail";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectTestimonial from "@/app/components/ProjectTestimonial";
import ProjectCTA from "@/app/components/ProjectCTA";
import { Header } from "@/components/Header/header";
import { FooterSection } from "@/app/FooterSection/FooterSection";

export default function LegittEsignPage() {
  const projectData = {
    title: "Legitt AI Esign",
    client: "Legitt AI",
    year: "2024",
    description:
      "Built a secure and intelligent electronic signature solution with AI-powered document analysis and validation capabilities.",
    scopeOfWork: [
      "Smart Signing",
      "Document Analysis",
      "Multi-party Signing",
      "Template Management",
      "Audit Trail",
    ],
    liveSiteUrl: "#",
  };

  const contentData = {
    sections: [
      {
        title: "E-Signature Interface",
        description:
          "Intuitive interface for secure document signing with AI-guided placement.",
        images: [
          {
            src: "/images/legitt-esign.png",
            alt: "Legitt E-Signature Interface",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Signing Workflow",
        description:
          "Streamlined process for multi-party document signing and verification.",
        images: [
          {
            src: "/images/legitt-signing.png",
            alt: "Document Signing Workflow",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Template Management",
        description:
          "System for creating and managing reusable document templates.",
        images: [
          {
            src: "/images/legitt-templates.png",
            alt: "Template Management System",
          },
        ],
        layout: "single" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The AI-powered e-signature platform has transformed our document signing process. The smart features and intuitive interface have made it incredibly efficient for all parties involved.",
    author: {
      name: "Operations Team",
      role: "Legitt AI",
      image: "/images/legitt-esign.png",
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
