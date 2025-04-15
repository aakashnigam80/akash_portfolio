import ProjectDetail from "@/app/components/ProjectDetail";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectTestimonial from "@/app/components/ProjectTestimonial";
import ProjectCTA from "@/app/components/ProjectCTA";
import { Header } from "@/components/Header/header";
import { FooterSection } from "@/app/FooterSection/FooterSection";

export default function PalisadesWebsitePage() {
  const projectData = {
    title: "Palisades Security Website",
    client: "Palisades Security",
    year: "2024",
    description:
      "Created a professional and secure website for Palisades Security that effectively communicates their cybersecurity expertise and service offerings.",
    scopeOfWork: [
      "Service Showcase",
      "Case Studies",
      "Contact Integration",
      "Resource Center",
      "Team Section",
    ],
    liveSiteUrl: "#",
  };

  const contentData = {
    sections: [
      {
        title: "Homepage and Services",
        description:
          "A modern, professional homepage showcasing Palisades Security's comprehensive cybersecurity services and expertise.",
        images: [
          {
            src: "/images/Palisades.png",
            alt: "Palisades Security Homepage",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Service Offerings",
        description:
          "Detailed presentation of security services with interactive elements to engage potential clients.",
        images: [
          {
            src: "/images/palisades-services.png",
            alt: "Palisades Security Services",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Team and Expertise",
        description:
          "Highlighting the expert team behind Palisades Security and their extensive cybersecurity experience.",
        images: [
          {
            src: "/images/palisades-team.png",
            alt: "Palisades Security Team",
          },
        ],
        layout: "single" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The website perfectly represents our brand and effectively communicates our security expertise to potential clients. The modern design and intuitive navigation have significantly improved our online presence.",
    author: {
      name: "Palisades Security Team",
      role: "Leadership Team",
      image: "/images/Palisades.png",
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
