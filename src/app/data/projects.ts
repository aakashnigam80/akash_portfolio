export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  gradient: string;
  image: string;
  alt: string;
  details?: {
    overview?: string;
    features?: string[];
    technologies?: string[];
    images?: {
      src: string;
      alt: string;
    }[];
    sections?: {
      title: string;
      content: string;
      images?: {
        src: string;
        alt: string;
      }[];
    }[];
  };
}

export const projects: Project[] = [
  {
    id: "layup-admin",
    title: "Layup Admin Panel",
    category: "Admin Dashboard",
    description:
      "A central admin dashboard for managing Layup's AI-powered user guidance platform, enabling interactive onboarding and feature tours.",
    gradient: "from-blue-500 via-indigo-400 to-purple-500",
    image: "/images/layup-admin-panel/Home.png",
    alt: "Layup Admin Panel Dashboard",
    details: {
      overview:
        "I developed the admin panel for Layup's AI-powered user guidance platform. This comprehensive management interface enables companies to create and manage interactive user experiences, from onboarding flows to feature tours. The platform helps businesses guide their users effectively while reducing support tickets, all through a simple one-line code integration.",
      features: [
        "UI/UX Design: Created intuitive interface for managing user guidance",
        "Frontend Development: Built responsive dashboard with React",
        "Content Management System: Developed system for managing guidance content",
        "Audience Segmentation: Implemented tools for targeting specific user groups",
        "Analytics Dashboard: Built real-time analytics for tracking engagement",
        "Feature Tour Builder: Created interface for building interactive tours",
        "Onboarding Flow Creator: Developed tool for creating user onboarding",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Material UI",
        "Node.js",
        "PostgreSQL",
      ],
      sections: [
        {
          title: "Central Management Dashboard",
          content:
            "The home dashboard provides a comprehensive overview of user engagement, feature adoption, and support ticket reduction. Administrators can quickly access key metrics and manage various aspects of their user guidance strategy.",
          images: [
            {
              src: "/images/layup-admin-panel/Home.png",
              alt: "Layup Admin Panel Dashboard",
            },
          ],
        },
        {
          title: "Audience Planning & Segmentation",
          content:
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
        },
        {
          title: "Knowledge Base & Documentation",
          content:
            "Build and maintain a comprehensive knowledge base that integrates seamlessly with your product. The system supports rich content creation and connects with existing documentation, making it easy to provide users with the information they need.",
          images: [
            {
              src: "/images/layup-admin-panel/knowledgebase.png",
              alt: "Knowledge Base Management",
            },
          ],
        },
        {
          title: "Announcement & Feature Tour Management",
          content:
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
        },
        {
          title: "User Onboarding & Activity Analytics",
          content:
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
        },
      ],
    },
  },
  {
    id: "layup-website",
    title: "Layup Website",
    category: "Website Development",
    description:
      "Developed Layup's marketing website showcasing their AI-powered user guidance platform that helps companies onboard users and showcase features effectively.",
    gradient: "from-purple-500 via-indigo-500 to-blue-600",
    image: "/images/layup-website/hero-image.png",
    alt: "Layup Website Homepage",
    details: {
      overview:
        "Guide every user, right in your product. Layup onboards your users, shows off your features and deflects support tickets with AI-powered guidance - all with just one line of code.",
      features: [
        "AI-Powered Guidance: Implemented interactive demo showcasing how Layup guides users with an AI-powered second cursor",
        "Zero-Effort Onboarding: Built sections highlighting accelerated time-to-value with interactive, in-app onboarding",
        "Feature Tours: Developed interactive demonstrations of always-on feature tours",
        "Security Section: Integrated security compliance badges (HIPAA, GDPR, SOC2) with clean design",
        "Testimonials: Created customer success stories section featuring CEOs from Zero and Truewind",
        "Product Integration: Showcased one-line code deployment and universal stack compatibility",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "React",
        "Responsive Design",
      ],
      sections: [
        {
          title: "AI that guides every user",
          content:
            "As if you were sitting next to them. Guide users with an AI-powered second cursor, anywhere in your product effortlessly while reducing support tickets.",
          images: [
            {
              src: "/images/layup-website/hero-image.png",
              alt: "Layup AI Guidance Hero Section",
            },
          ],
        },
        {
          title: "Zero effort onboarding",
          content:
            "Accelerate time to value with interactive, in-app onboarding—no manual effort or 1:1 sessions required.",
          images: [
            {
              src: "/images/layup-website/image-two.png",
              alt: "Layup Zero Effort Onboarding",
            },
          ],
        },
        {
          title: "Always-on feature tours",
          content:
            "Seamlessly showcase features to the right users at the right time—turn every update into measurable ROI.",
          images: [
            {
              src: "/images/layup-website/image3.png",
              alt: "Layup Feature Tours",
            },
          ],
        },
        {
          title: "Pricing and Plans",
          content:
            "Flexible pricing plans designed to fit every company's needs, from startups to enterprises.",
          images: [
            {
              src: "/images/layup-website/pricing.png",
              alt: "Layup Pricing Plans",
            },
          ],
        },
      ],
    },
  },
  {
    id: "palisades-website",
    title: "Palisades Security Website",
    category: "Website Development",
    description:
      "Designed and developed the official website for Palisades Security, showcasing their cybersecurity solutions and services.",
    gradient: "from-blue-400 to-indigo-500",
    image: "/images/Palisades.png",
    alt: "Palisades Project",
    details: {
      overview:
        "Created a professional and secure website for Palisades Security that effectively communicates their cybersecurity expertise and service offerings.",
      features: [
        "Service Showcase: Built interactive sections highlighting security services",
        "Case Studies: Implemented portfolio section featuring success stories",
        "Contact Integration: Developed secure contact forms with encryption",
        "Resource Center: Created blog and documentation section",
        "Team Section: Designed profiles highlighting security experts",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Contentful CMS",
        "SendGrid",
      ],
      sections: [
        {
          title: "Homepage and Services",
          content:
            "A modern, professional homepage showcasing Palisades Security's comprehensive cybersecurity services and expertise.",
          images: [
            {
              src: "/images/Palisades.png",
              alt: "Palisades Security Homepage",
            },
          ],
        },
        {
          title: "Service Offerings",
          content:
            "Detailed presentation of security services with interactive elements to engage potential clients.",
          images: [
            {
              src: "/images/palisades-services.png",
              alt: "Palisades Security Services",
            },
          ],
        },
        {
          title: "Team and Expertise",
          content:
            "Highlighting the expert team behind Palisades Security and their extensive cybersecurity experience.",
          images: [
            {
              src: "/images/palisades-team.png",
              alt: "Palisades Security Team",
            },
          ],
        },
      ],
    },
  },
  {
    id: "palisades-security",
    title: "Palisades Security Review",
    category: "Security Application",
    description:
      "Built a comprehensive security review and management application for conducting and tracking security assessments.",
    gradient: "from-gray-700 to-gray-900",
    image: "/images/palisades-dashboard.png",
    alt: "Palisades Dashboard",
    details: {
      overview:
        "Developed a robust security assessment platform that enables teams to conduct, track, and manage security reviews efficiently.",
      features: [
        "Assessment Dashboard: Created interactive dashboard for security reviews",
        "Risk Scoring: Implemented automated risk assessment scoring",
        "Compliance Tracking: Built compliance monitoring system",
        "Report Generation: Developed automated security report generation",
        "Team Collaboration: Added real-time collaboration features",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      sections: [
        {
          title: "Security Dashboard",
          content:
            "Comprehensive dashboard providing real-time overview of security assessments and risk metrics.",
          images: [
            {
              src: "/images/palisades-dashboard.png",
              alt: "Palisades Security Dashboard",
            },
          ],
        },
        {
          title: "Assessment Interface",
          content:
            "Interactive interface for conducting and managing security assessments.",
          images: [
            {
              src: "/images/palisades-assessment.png",
              alt: "Security Assessment Interface",
            },
          ],
        },
        {
          title: "Reports and Analytics",
          content:
            "Detailed reporting system with customizable templates and analytics.",
          images: [
            {
              src: "/images/palisades-reports.png",
              alt: "Security Reports and Analytics",
            },
          ],
        },
      ],
    },
  },
  // {
  //   id: "legitt-website",
  //   title: "Legitt AI Website",
  //   category: "Website Development",
  //   description:
  //     "Developed the official website for Legitt AI platform, showcasing their AI-powered legal document analysis and management solutions.",
  //   gradient: "from-green-500 to-teal-600",
  //   image: "/images/legitt.png",
  //   alt: "Legitt Project",
  //   details: {
  //     overview:
  //       "Created an engaging website for Legitt AI that demonstrates their innovative approach to legal document management and analysis using artificial intelligence.",
  //     features: [
  //       "Product Demo: Implemented interactive AI features showcase",
  //       "Use Cases: Developed industry-specific solution sections",
  //       "Integration Guide: Created technical documentation section",
  //       "Pricing Plans: Built dynamic pricing comparison tool",
  //       "Blog Platform: Integrated content management system",
  //     ],
  //     technologies: [
  //       "Next.js",
  //       "TypeScript",
  //       "Tailwind CSS",
  //       "Strapi CMS",
  //       "Stripe",
  //     ],
  //     sections: [
  //       {
  //         title: "Platform Overview",
  //         content:
  //           "Showcasing Legitt AI's innovative approach to legal document management.",
  //         images: [
  //           {
  //             src: "/images/legitt.png",
  //             alt: "Legitt AI Platform Overview",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Features and Capabilities",
  //         content:
  //           "Detailed presentation of AI-powered features and document analysis capabilities.",
  //         images: [
  //           {
  //             src: "/images/legitt-features.png",
  //             alt: "Legitt AI Features",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Pricing and Plans",
  //         content:
  //           "Transparent pricing structure with various plans for different business needs.",
  //         images: [
  //           {
  //             src: "/images/legitt-pricing.png",
  //             alt: "Legitt AI Pricing Plans",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: "legitt-esign",
  //   title: "Legitt AI Esign",
  //   category: "E-Signature",
  //   description:
  //     "Built a secure and intelligent electronic signature solution with AI-powered document analysis.",
  //   gradient: "from-orange-500 to-red-600",
  //   image: "/images/legitt.png",
  //   alt: "Legitt Project",
  //   details: {
  //     overview:
  //       "Developed an advanced e-signature platform that combines secure document signing with AI-powered contract analysis and validation.",
  //     features: [
  //       "Smart Signing: Implemented AI-guided signature placement",
  //       "Document Analysis: Built automated document verification",
  //       "Multi-party Signing: Created workflow for multiple signers",
  //       "Template Management: Developed reusable template system",
  //       "Audit Trail: Implemented detailed signing activity logs",
  //     ],
  //     technologies: ["React", "Python", "TensorFlow", "AWS", "Blockchain"],
  //     sections: [
  //       {
  //         title: "E-Signature Interface",
  //         content:
  //           "Intuitive interface for secure document signing with AI-guided placement.",
  //         images: [
  //           {
  //             src: "/images/legitt-esign.png",
  //             alt: "Legitt E-Signature Interface",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Signing Workflow",
  //         content:
  //           "Streamlined process for multi-party document signing and verification.",
  //         images: [
  //           {
  //             src: "/images/legitt-signing.png",
  //             alt: "Document Signing Workflow",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Template Management",
  //         content:
  //           "System for creating and managing reusable document templates.",
  //         images: [
  //           {
  //             src: "/images/legitt-templates.png",
  //             alt: "Template Management System",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: "legitt-proposal",
  //   title: "Legitt AI Proposal & Contract",
  //   category: "Contract Management",
  //   description:
  //     "Developed an AI-powered proposal and contract management system for streamlined document creation and tracking.",
  //   gradient: "from-pink-500 to-purple-600",
  //   image: "/images/legitt.png",
  //   alt: "Legitt Project",
  //   details: {
  //     overview:
  //       "Created an intelligent contract management platform that automates proposal creation, contract generation, and document lifecycle management.",
  //     features: [
  //       "Smart Templates: Built AI-powered document generation",
  //       "Approval Workflow: Implemented review and approval system",
  //       "Version Control: Developed document versioning system",
  //       "Analytics Dashboard: Created contract performance metrics",
  //       "Integration Hub: Built connections with popular CRM systems",
  //     ],
  //     technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Docker"],
  //     sections: [
  //       {
  //         title: "Proposal Management",
  //         content:
  //           "Intelligent system for creating and managing business proposals.",
  //         images: [
  //           {
  //             src: "/images/legitt-proposal.png",
  //             alt: "Proposal Management Interface",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Contract Lifecycle",
  //         content:
  //           "Complete contract lifecycle management with version control.",
  //         images: [
  //           {
  //             src: "/images/legitt-contracts.png",
  //             alt: "Contract Management System",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Analytics Dashboard",
  //         content:
  //           "Comprehensive analytics for tracking contract performance and metrics.",
  //         images: [
  //           {
  //             src: "/images/legitt-analytics.png",
  //             alt: "Contract Analytics Dashboard",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: "legitt-repo-analyzer",
  //   title: "Legitt AI Repo Analyzer",
  //   category: "AI Contract Analysis",
  //   description:
  //     "Built an AI-powered platform for analyzing and visualizing contract repositories and legal documents.",
  //   gradient: "from-indigo-500 to-violet-600",
  //   image: "/images/legitt.png",
  //   alt: "Legitt AI Repo Analyzer",
  //   details: {
  //     overview:
  //       "Developed an advanced contract analysis platform that uses AI to extract insights, identify patterns, and visualize relationships across large document repositories.",
  //     features: [
  //       "AI Analysis: Implemented deep learning for document analysis",
  //       "Visual Analytics: Created interactive visualization tools",
  //       "Pattern Detection: Built anomaly detection system",
  //       "Risk Assessment: Developed risk scoring algorithm",
  //       "Batch Processing: Implemented large-scale document processing",
  //     ],
  //     technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
  //     sections: [
  //       {
  //         title: "Document Analysis",
  //         content:
  //           "AI-powered analysis of legal documents with pattern recognition.",
  //         images: [
  //           {
  //             src: "/images/legitt-analyzer.png",
  //             alt: "Document Analysis Interface",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Insights Dashboard",
  //         content: "Visual representation of contract analysis and insights.",
  //         images: [
  //           {
  //             src: "/images/legitt-insights.png",
  //             alt: "Contract Insights Dashboard",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Visualization Tools",
  //         content:
  //           "Interactive tools for visualizing document relationships and patterns.",
  //         images: [
  //           {
  //             src: "/images/legitt-visualization.png",
  //             alt: "Document Visualization Tools",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
];
