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
      "I designed and developed a comprehensive website for Legitt AI, an innovative legal technology company. The project showcased my expertise in modern web development, responsive design, and creating engaging user experiences. The website effectively communicates Legitt AI's AI-powered contract management solutions while maintaining a professional and trustworthy aesthetic.",
    scopeOfWork: [
      "Modern UI/UX Design",
      "Responsive Development",
      "Next.js Implementation",
      "Interactive Features",
      "Performance Optimization",
      "SEO Implementation",
      "Integration Setup",
    ],
    liveSiteUrl: "https://legittai.com",
  };

  const contentData = {
    sections: [
      {
        title: "Hero Section & Navigation",
        description:
          "Developed a striking hero section featuring Legitt AI's core value proposition with an intuitive navigation system. Implemented smooth animations and responsive design to ensure optimal viewing across all devices.",
        images: [
          {
            src: "/images/legittai/hero.png",
            alt: "Legitt AI Hero Section Design",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Product Features Showcase",
        description:
          "Created an engaging product features section using modern design principles and interactive elements. Implemented custom animations and transitions to highlight key features and benefits.",
        images: [
          {
            src: "/images/legittai/image2.png",
            alt: "Product Features Section",
          },
          {
            src: "/images/legittai/image3.png",
            alt: "Features Showcase",
          },
        ],
        layout: "double" as const,
      },
      {
        title: "Solutions & Integration Section",
        description:
          "Designed and developed a comprehensive solutions section showcasing Legitt AI's various offerings. Built custom components for partner integrations and security certifications display.",
        images: [
          {
            src: "/images/legittai/image4.png",
            alt: "Solutions Section",
          },
          {
            src: "/images/legittai/image5.png",
            alt: "Integration Section",
          },
        ],
        layout: "double" as const,
      },
      {
        title: "Lead Generation & Contact",
        description:
          "Implemented conversion-optimized contact forms and demo request sections. Created an interactive FAQ section and testimonials showcase to build trust and credibility.",
        images: [
          {
            src: "/images/legittai/image6.png",
            alt: "Contact and Lead Generation Section",
          },
        ],
        layout: "single" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The website perfectly embodies our vision and has significantly enhanced our online presence. The developer's attention to detail, technical expertise, and understanding of our needs resulted in a modern, high-performing website that effectively communicates our value proposition.",
    author: {
      name: "Ravi Baranwal",
      role: "Founder of Legitt AI",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQHqZzckzM07oQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516284984158?e=1750291200&v=beta&t=rpkUT88Ub2JeHk387-sLYYrDCENXsd25WaZnFND8osU",
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
