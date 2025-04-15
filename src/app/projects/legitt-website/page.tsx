import ProjectDetail from "@/app/components/ProjectDetail";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectTestimonial from "@/app/components/ProjectTestimonial";
import ProjectCTA from "@/app/components/ProjectCTA";
import { Header } from "@/components/Header/header";
import { FooterSection } from "@/app/FooterSection/FooterSection";

export default function LegittWebsitePage() {
  const projectData = {
    title: "Legitt AI Website",
    client: "Legitt AI",
    year: "2024",
    description:
      "Designed and developed a modern website showcasing Legitt AI's innovative legal technology solutions and services.",
    scopeOfWork: [
      "Brand Identity",
      "UI/UX Design",
      "Responsive Development",
      "Product Showcase",
      "Lead Generation",
    ],
    liveSiteUrl: "#",
  };

  const contentData = {
    sections: [
      {
        title: "Homepage Design",
        description:
          "Modern and engaging homepage highlighting Legitt AI's core offerings and value proposition.",
        images: [
          {
            src: "/images/legitt-home.png",
            alt: "Legitt AI Homepage",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Product Features",
        description:
          "Interactive showcase of Legitt AI's key products and features.",
        images: [
          {
            src: "/images/legitt-features.png",
            alt: "Legitt AI Product Features",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Solutions Overview",
        description:
          "Comprehensive overview of legal technology solutions offered by Legitt AI.",
        images: [
          {
            src: "/images/legitt-solutions.png",
            alt: "Legitt AI Solutions",
          },
        ],
        layout: "single" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The new website perfectly captures our vision and has significantly improved our online presence. The modern design and intuitive navigation have helped us better connect with our target audience.",
    author: {
      name: "Marketing Team",
      role: "Legitt AI",
      image: "/images/legitt-team.png",
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
