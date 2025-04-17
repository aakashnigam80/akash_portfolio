import ProjectDetail from "@/app/components/ProjectDetail";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectTestimonial from "@/app/components/ProjectTestimonial";
import ProjectCTA from "@/app/components/ProjectCTA";
import { Header } from "@/components/Header/header";
import { FooterSection } from "@/app/FooterSection/FooterSection";

export default function LegittEsignPage() {
  const projectData = {
    title: "Legitt AI E-Signature Platform",
    client: "Legitt AI",
    year: "2024",
    description:
      "Engineered a sophisticated electronic signature platform with AI-powered document analysis, smart signature placement, and secure multi-party signing workflows. The platform streamlines document signing processes while ensuring legal compliance and security.",
    scopeOfWork: [
      "Full-Stack Development",
      "AI Integration",
      "Blockchain Implementation",
      "Security Architecture",
      "Smart Contract Design",
      "UI/UX Development",
      "API Development",
      "Cloud Infrastructure",
    ],
    liveSiteUrl: "https://legittai.com/electronic-signature",
  };

  const contentData = {
    sections: [
      {
        title: "Modern E-Signature Platform",
        description:
          "Developed a state-of-the-art electronic signature platform that combines advanced security features with an intuitive user interface. The platform supports multiple signing methods, document types, and automated workflows.",
        images: [
          {
            src: "/images/legitt-esign/hero.png",
            alt: "Legitt E-Signature Platform Overview",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Smart Document Upload & Analysis",
        description:
          "Developed an intelligent document upload system with real-time AI analysis. Implemented secure file handling, automatic document type detection, and smart field recognition for efficient processing.",
        images: [
          {
            src: "/images/legitt-esign/document-upload.png",
            alt: "Smart Document Upload Interface",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Multi-Party Signing Workflow",
        description:
          "Engineered a secure and intuitive multi-party signing workflow with role-based access control. Implemented real-time status tracking, automated notifications, and blockchain-based audit trails for enhanced security.",
        images: [
          {
            src: "/images/legitt-esign/singee-detail-redirect.png",
            alt: "Multi-Party Signing Workflow",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Advanced Signature Editor",
        description:
          "Built a sophisticated signature editor with AI-guided placement suggestions. Integrated drawing capabilities, signature validation, and multiple signing methods including digital certificates and biometric verification.",
        images: [
          {
            src: "/images/legitt-esign/sign-editor.png",
            alt: "Advanced Signature Editor Interface",
          },
          {
            src: "/images/legitt-esign/sign-block.png",
            alt: "Signature Block Configuration",
          },
        ],
        layout: "double" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The e-signature platform showcases exceptional technical innovation. The integration of AI for smart document analysis, blockchain for security, and an intuitive user interface has significantly improved our document signing efficiency and security compliance.",
    author: {
      name: "Legitt AI Leadership",
      role: "Executive Team",
      image: "/images/legitt-esign/hero.png",
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
