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
      "Developed a comprehensive website for Palisades Security that showcases their innovative automated security review platform. The website effectively communicates their value proposition of scaling security through automated design reviews and threat modeling, ensuring security from design to deployment.",
    scopeOfWork: [
      "Landing Page Design",
      "Product Features Showcase",
      "Interactive UI Components",
      "Responsive Design",
      "Security Integration",
      "Demo Request System",
      "Blog Section",
      "User Authentication",
    ],
    liveSiteUrl: "https://getpalisades.com",
  };

  const contentData = {
    sections: [
      {
        title: "Hero Section & Value Proposition",
        description:
          "Created an engaging hero section that immediately communicates Palisades' core value proposition of automated security reviews and threat modeling, complete with clear call-to-action buttons for getting started and requesting demos.",
        images: [
          {
            src: "/images/palisades-website/Hero.png",
            alt: "Palisades Security Hero Section",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Product Features & Benefits",
        description:
          "Designed comprehensive sections highlighting key features including threat analysis, security design reviews, and automated GitHub checks. Each feature is presented with clear visuals and explanatory text to demonstrate the platform's capabilities.",
        images: [
          {
            src: "/images/palisades-website/palisades-image2.png",
            alt: "Palisades Security Features",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Blog & Resource Center",
        description:
          "Implemented a dynamic blog section to showcase thought leadership content and provide valuable resources to potential clients, enhancing the platform's authority in the security automation space.",
        images: [
          {
            src: "/images/palisades-website/blog-palisades.png",
            alt: "Palisades Security Blog",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Security Workflow Integration",
        description:
          "Developed interactive sections demonstrating how Palisades integrates with existing development workflows, from user stories to deployment, with special emphasis on the automated security review process.",
        images: [
          {
            src: "/images/palisades-website/palisades-image3.png",
            alt: "Palisades Security Workflow",
          },
        ],
        layout: "single" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The website perfectly captures our vision of modernizing security reviews through automation. The clear presentation of our features and benefits has significantly improved user engagement and demo requests.",
    author: {
      name: "Palisades Security Team",
      role: "Leadership Team",
      image: "/images/palisades-website/Hero.png",
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
