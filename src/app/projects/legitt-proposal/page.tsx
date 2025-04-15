import ProjectDetail from "@/app/components/ProjectDetail";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectTestimonial from "@/app/components/ProjectTestimonial";
import ProjectCTA from "@/app/components/ProjectCTA";
import { Header } from "@/components/Header/header";
import { FooterSection } from "@/app/FooterSection/FooterSection";

export default function LegittProposalPage() {
  const projectData = {
    title: "Legitt AI Proposal & Contract",
    client: "Legitt AI",
    year: "2024",
    description:
      "Developed an AI-powered proposal and contract management system for streamlined document creation and tracking.",
    scopeOfWork: [
      "Smart Templates",
      "Approval Workflow",
      "Version Control",
      "Analytics Dashboard",
      "Integration Hub",
    ],
    liveSiteUrl: "#",
  };

  const contentData = {
    sections: [
      {
        title: "Proposal Management",
        description:
          "Intelligent system for creating and managing business proposals.",
        images: [
          {
            src: "/images/legitt-proposal.png",
            alt: "Proposal Management Interface",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Contract Lifecycle",
        description:
          "Complete contract lifecycle management with version control.",
        images: [
          {
            src: "/images/legitt-contracts.png",
            alt: "Contract Management System",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Analytics Dashboard",
        description:
          "Comprehensive analytics for tracking contract performance and metrics.",
        images: [
          {
            src: "/images/legitt-analytics.png",
            alt: "Contract Analytics Dashboard",
          },
        ],
        layout: "single" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The AI-powered proposal and contract management system has streamlined our entire document workflow. The automated templates and analytics have given us unprecedented insights into our contract performance.",
    author: {
      name: "Legal Operations",
      role: "Legitt AI",
      image: "/images/legitt-proposal.png",
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
