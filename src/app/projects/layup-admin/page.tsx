import ProjectDetail from "@/app/components/ProjectDetail";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectTestimonial from "@/app/components/ProjectTestimonial";
import ProjectCTA from "@/app/components/ProjectCTA";
import { Header } from "@/components/Header/header";
import { FooterSection } from "@/app/FooterSection/FooterSection";

export default function LayupAdminPage() {
  const projectData = {
    title: "Layup Admin Panel",
    client: "Layup",
    year: "2024",
    description:
      "I developed the admin panel for Layup's AI-powered user guidance platform. This comprehensive management interface enables companies to create and manage interactive user experiences, from onboarding flows to feature tours. The platform helps businesses guide their users effectively while reducing support tickets, all through a simple one-line code integration.",
    scopeOfWork: [
      "UI/UX Design",
      "Frontend Development",
      "Content Management",
      "Audience Segmentation",
      "Analytics Dashboard",
      "Feature Tour Builder",
      "Onboarding Flow Creator",
    ],
    liveSiteUrl: "#",
  };

  const contentData = {
    sections: [
      {
        title: "Central Management Dashboard",
        description:
          "The home dashboard provides a comprehensive overview of user engagement, feature adoption, and support ticket reduction. Administrators can quickly access key metrics and manage various aspects of their user guidance strategy.",
        images: [
          {
            src: "/images/layup-admin-panel/Home.png",
            alt: "Layup Admin Panel Dashboard",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Audience Planning & Segmentation",
        description:
          "Create targeted user experiences by segmenting audiences based on roles, permissions, and behavior. The platform's sophisticated planning tools help deliver the right content to the right users at the right time.",
        images: [
          {
            src: "/images/layup-admin-panel/AudiancePlan.png",
            alt: "Audience Planning Interface",
          },
          {
            src: "/images/layup-admin-panel/AudiancePlanDetail.png",
            alt: "Audience Plan Details",
          },
        ],
        layout: "double" as const,
      },
      {
        title: "Knowledge Base & Documentation",
        description:
          "Build and maintain a comprehensive knowledge base that integrates seamlessly with your product. The system supports rich content creation and connects with existing documentation, making it easy to provide users with the information they need.",
        images: [
          {
            src: "/images/layup-admin-panel/knowledgebase.png",
            alt: "Knowledge Base Management",
          },
        ],
        layout: "single" as const,
      },
      {
        title: "Announcement & Feature Tour Management",
        description:
          "Create and manage announcements and feature tours that showcase your product's capabilities. The system allows for flexible content creation and precise targeting, ensuring users discover and understand new features effectively.",
        images: [
          {
            src: "/images/layup-admin-panel/announcements.png",
            alt: "Announcements Management",
          },
          {
            src: "/images/layup-admin-panel/createAnnouncements.png",
            alt: "Create Announcement Interface",
          },
        ],
        layout: "double" as const,
      },
      {
        title: "User Onboarding & Activity Analytics",
        description:
          "Design engaging onboarding experiences and track user engagement through detailed analytics. The platform provides insights into user behavior, helping optimize the guidance experience and reduce support tickets.",
        images: [
          {
            src: "/images/layup-admin-panel/onboarding.png",
            alt: "User Onboarding Interface",
          },
          {
            src: "/images/layup-admin-panel/Activity.jpg",
            alt: "Activity Tracking Dashboard",
          },
        ],
        layout: "double" as const,
      },
    ],
  };

  const testimonialData = {
    quote:
      "The admin panel's intuitive interface and powerful features have transformed how we manage user guidance. The developer's attention to detail and understanding of user experience made it incredibly easy for our team to create and manage engaging user journeys.",
    author: {
      name: "Ryan Xue",
      role: "Co-founder of Layup Labs",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQFtvyYy_UdW7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689006445726?e=1750291200&v=beta&t=zBSGl0ifK8VsEjVGiu28qXDWd0XXupkHpTwdLeRVBsQ",
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
