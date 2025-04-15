import ProjectDetail from "@/app/components/ProjectDetail";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectTestimonial from "@/app/components/ProjectTestimonial";
import ProjectCTA from "@/app/components/ProjectCTA";
import { Header } from "@/components/Header/header";
import { FooterSection } from "@/app/FooterSection/FooterSection";

export default function PalisadesSecurityPage() {
  const projectData = {
    title: "Palisades Security Review",
    client: "Palisades Security",
    year: "2024",
    description:
      "Developed a robust security assessment platform that enables teams to conduct, track, and manage security reviews efficiently.",
    scopeOfWork: [
      "Assessment Dashboard",
      "Risk Scoring",
      "Compliance Tracking",
      "Report Generation",
      "Team Collaboration",
    ],
    liveSiteUrl: "#",
  };

  const contentData = {
    sections: [
      {
        title: "Security Dashboard",
        description:
          "Comprehensive dashboard providing real-time overview of security assessments and risk metrics.",
        images: [
          {
            src: "/images/palisades-dashboard.png",
            alt: "Palisades Security Dashboard",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Assessment Interface",
        description:
          "Interactive interface for conducting and managing security assessments.",
        images: [
          {
            src: "/images/palisades-assessment.png",
            alt: "Security Assessment Interface",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Reports and Analytics",
        description:
          "Detailed reporting system with customizable templates and analytics.",
        images: [
          {
            src: "/images/palisades-reports.png",
            alt: "Security Reports and Analytics",
          },
        ],
        layout: "single" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The security review platform has revolutionized how we conduct and manage assessments. The automated risk scoring and reporting features have significantly improved our efficiency.",
    author: {
      name: "Security Operations Team",
      role: "Palisades Security",
      image: "/images/palisades-dashboard.png",
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
