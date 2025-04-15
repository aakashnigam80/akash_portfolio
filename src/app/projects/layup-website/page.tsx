import ProjectDetail from "@/app/components/ProjectDetail";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectTestimonial from "@/app/components/ProjectTestimonial";
import ProjectCTA from "@/app/components/ProjectCTA";
import { Header } from "@/components/Header/header";
import { FooterSection } from "@/app/FooterSection/FooterSection";

export default function LayupWebsitePage() {
  const projectData = {
    title: "Layup Website",
    client: "Layup",
    year: "2024",
    description:
      "Guide every user, right in your product. Layup onboards your users, shows off your features and deflects support tickets with AI-powered guidance - all with just one line of code.",
    scopeOfWork: [
      "AI-Powered Guidance",
      "Zero-Effort Onboarding",
      "Feature Tours",
      "Security Integration",
      "Testimonials",
      "Product Integration",
    ],
    liveSiteUrl: "#",
  };

  const contentData = {
    sections: [
      {
        title: "AI that guides every user",
        description:
          "As if you were sitting next to them. Guide users with an AI-powered second cursor, anywhere in your product effortlessly while reducing support tickets.",
        images: [
          {
            src: "/images/layup-website/hero-image.png",
            alt: "Layup AI Guidance Hero Section",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Zero effort onboarding",
        description:
          "Accelerate time to value with interactive, in-app onboarding—no manual effort or 1:1 sessions required.",
        images: [
          {
            src: "/images/layup-website/image-two.png",
            alt: "Layup Zero Effort Onboarding",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Always-on feature tours",
        description:
          "Seamlessly showcase features to the right users at the right time—turn every update into measurable ROI.",
        images: [
          {
            src: "/images/layup-website/image3.png",
            alt: "Layup Feature Tours",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Pricing and Plans",
        description:
          "Flexible pricing plans designed to fit every company's needs, from startups to enterprises. Our plans include features like HIPAA compliance, GDPR compliance, and SOC2 certification.",
        images: [
          {
            src: "/images/layup-website/pricing.png",
            alt: "Layup Pricing Plans",
          },
        ],
        layout: "single" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The website perfectly captures our vision and effectively communicates our product's value proposition. The attention to detail and user experience is exceptional.",
    author: {
      name: "Ryan Xue",
      role: "Co-founder of Layup Labs",
      image: "/images/layup-website/hero-image.png",
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
