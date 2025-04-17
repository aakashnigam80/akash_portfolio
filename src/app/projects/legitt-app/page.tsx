import ProjectDetail from "@/app/components/ProjectDetail";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectTestimonial from "@/app/components/ProjectTestimonial";
import ProjectCTA from "@/app/components/ProjectCTA";
import { Header } from "@/components/Header/header";
import { FooterSection } from "@/app/FooterSection/FooterSection";

export default function LegittAppPage() {
  const projectData = {
    title: "Legitt AI Application",
    client: "Legitt AI",
    year: "2024",
    description:
      "I developed Legitt AI's core application platform, a sophisticated contract lifecycle management system powered by artificial intelligence. This comprehensive solution streamlines contract creation, management, and analysis while incorporating advanced AI features for automated contract generation, review, and insights.",
    scopeOfWork: [
      "Full-Stack Development",
      "AI Integration",
      "Real-time Analytics",
      "Document Management",
      "User Authentication",
      "Dashboard Development",
      "Contract Automation",
      "API Development",
    ],
    liveSiteUrl: "https://app.legittai.com",
  };

  const contentData = {
    sections: [
      {
        title: "Smart Dashboard & Analytics",
        description:
          "Engineered an intuitive dashboard that provides real-time insights into contract status, pending tasks, and key metrics. Implemented advanced data visualization components and real-time updates using WebSocket technology.",
        images: [
          {
            src: "/images/legitt-app/dashboard.png",
            alt: "Legitt AI Dashboard Interface",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "AI-Powered Contract Creation",
        description:
          "Developed an advanced AI-powered contract generation system that allows users to create contracts intelligently. Integrated OpenAI's GPT models for smart contract drafting and implemented a user-friendly interface for template customization.",
        images: [
          {
            src: "/images/legitt-app/create-contract-with-ai.png",
            alt: "AI Contract Creation Interface",
          },
          {
            src: "/images/legitt-app/create.png",
            alt: "Contract Creation Flow",
          },
        ],
        layout: "double" as const,
      },
      {
        title: "Lead Management & Workflow",
        description:
          "Built a comprehensive lead management system with automated workflow capabilities. Implemented features for lead creation, tracking, and conversion optimization with real-time notifications and status updates.",
        images: [
          {
            src: "/images/legitt-app/create-lead.png",
            alt: "Lead Management Interface",
          },
          {
            src: "/images/legitt-app/my-work.png",
            alt: "Work Management Dashboard",
          },
        ],
        layout: "double" as const,
      },
      {
        title: "Contract Repository & Analytics",
        description:
          "Designed and implemented a sophisticated contract repository with advanced search and filtering capabilities. Integrated analytics tools for contract performance monitoring and automated alerts system for critical updates.",
        images: [
          {
            src: "/images/legitt-app/repository.png",
            alt: "Contract Repository",
          },
          {
            src: "/images/legitt-app/alerts.png",
            alt: "Alerts System",
          },
        ],
        layout: "double" as const,
      },
      {
        title: "Reporting & Insights",
        description:
          "Developed a comprehensive reporting system with customizable dashboards and exportable reports. Implemented data visualization components and real-time analytics for business intelligence.",
        images: [
          {
            src: "/images/legitt-app/reports.png",
            alt: "Reports and Analytics Dashboard",
          },
        ],
        layout: "single" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The application development showcases exceptional technical expertise and attention to detail. The integration of AI features, robust contract management capabilities, and intuitive user interface has transformed our business operations and exceeded our expectations.",
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
