import ProjectDetail from "@/app/components/ProjectDetail";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectTestimonial from "@/app/components/ProjectTestimonial";
import ProjectCTA from "@/app/components/ProjectCTA";
import { Header } from "@/components/Header/header";
import { FooterSection } from "@/app/FooterSection/FooterSection";

export default function PalisadesSecurityPage() {
  const projectData = {
    title: "Palisades Security Review Platform",
    client: "Palisades Security",
    year: "2024",
    description:
      "Developed a sophisticated security review platform that revolutionizes how organizations conduct and manage security assessments. The platform features automated threat modeling, security review workflows, and seamless GitHub integration, enabling teams to implement security by design principles effectively.",
    scopeOfWork: [
      "Interactive Dashboard",
      "Security Review Workflow",
      "Threat Modeling System",
      "GitHub Integration",
      "Knowledge Base",
      "Attack Scenario Modeling",
      "Team Collaboration Tools",
      "LLM Integration",
      "Automated Reporting",
    ],
    liveSiteUrl: "https://app.getpalisades.com",
  };

  const contentData = {
    sections: [
      {
        title: "Centralized Security Dashboard",
        description:
          "Engineered an intuitive dashboard that provides a comprehensive overview of all security reviews, threat assessments, and team activities. The dashboard enables quick access to key metrics and ongoing security reviews.",
        images: [
          {
            src: "/images/palisades-app/dashboard.png",
            alt: "Palisades Security Dashboard",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "New Security Review Initiation",
        description:
          "Developed an efficient and user-friendly process for initiating new security reviews, enabling teams to quickly start assessments with predefined templates and automated setup workflows.",
        images: [
          {
            src: "/images/palisades-app/initiate-new-security-review.png",
            alt: "New Security Review Initiation",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Security Review Management",
        description:
          "Implemented a powerful security review system with both list and table views, allowing teams to efficiently track and manage multiple security assessments. The interface provides detailed insights into each review's status and progress.",
        images: [
          {
            src: "/images/palisades-app/security-reviews-list.png",
            alt: "Security Reviews List View",
          },
          {
            src: "/images/palisades-app/security-reviews-list-table-view.png",
            alt: "Security Reviews Table View",
          },
        ],
        layout: "double" as const,
      },
      {
        title: "Comprehensive Review Process",
        description:
          "Developed an end-to-end security review workflow that includes detailed overview pages, flowchart visualization, and attack scenario modeling. This ensures thorough security assessment at every stage of development.",
        images: [
          {
            src: "/images/palisades-app/security-review-overview.png",
            alt: "Security Review Overview",
          },
          {
            src: "/images/palisades-app/security-review-flowchart.png",
            alt: "Security Review Flowchart",
          },
          {
            src: "/images/palisades-app/security-review-attack-scenerios.png",
            alt: "Attack Scenarios Modeling",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Threat Assessment System",
        description:
          "Created a sophisticated threat assessment module that allows teams to review, analyze, and acknowledge potential security threats. The system includes detailed threat analysis and acknowledgment workflows.",
        images: [
          {
            src: "/images/palisades-app/review-threats-list.png",
            alt: "Threats Review List",
          },
          {
            src: "/images/palisades-app/review-threats-detail.png",
            alt: "Threat Review Details",
          },
          {
            src: "/images/palisades-app/review-threats-aknowledged.png",
            alt: "Acknowledged Threats",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Ticket Management & GitHub Integration",
        description:
          "Implemented a comprehensive ticket management system with direct GitHub pull request integration, enabling seamless coordination between security reviews and code changes.",
        images: [
          {
            src: "/images/palisades-app/security-reviews-tickets.png",
            alt: "Security Review Tickets",
          },
          {
            src: "/images/palisades-app/security-reviews-ticket-detail.png",
            alt: "Ticket Details",
          },
          {
            src: "/images/palisades-app/security-reviews-code-review-linked-with-github-pr.png",
            alt: "GitHub PR Integration",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Advanced Integrations & AI Capabilities",
        description:
          "Integrated advanced features including LLM-powered analysis and various third-party security tool integrations, enhancing the platform's capabilities and automation potential.",
        images: [
          {
            src: "/images/palisades-app/llm-keys.png",
            alt: "LLM Integration",
          },
          {
            src: "/images/palisades-app/integrations.png",
            alt: "Platform Integrations",
          },
        ],
        layout: "double" as const,
      },
      {
        title: "Comprehensive Security Knowledge Base",
        description:
          "Built an extensive knowledge base system that serves as a central repository for security best practices, guidelines, and reference materials, empowering teams with the information they need for effective security reviews.",
        images: [
          {
            src: "/images/palisades-app/scurity-review-knowledge-base.png",
            alt: "Security Review Knowledge Base",
          },
        ],
        layout: "single" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The Palisades security review platform has transformed our security assessment process. The integration with GitHub, automated threat modeling, and comprehensive reporting capabilities have significantly reduced our review time while improving the quality of our security assessments.",
    author: {
      name: "Security Engineering Team",
      role: "Palisades Security",
      image: "/images/palisades-app/dashboard.png",
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
