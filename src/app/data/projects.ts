export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  gradient: string;
  image: string;
  alt: string;
}

export const projects: Project[] = [
  {
    id: "layup-admin",
    title: "Layup Admin Panel",
    category: "Admin Dashboard",
    description:
      "The central management interface for Layup's AI-powered user guidance platform. This admin panel enables companies to create and manage interactive user experiences, including onboarding flows, feature tours, and support content. With features for audience segmentation, content management, and analytics, it helps businesses guide their users effectively while reducing support tickets.",
    gradient: "from-blue-500 via-indigo-400 to-purple-500",
    image: "/images/layup-admin-panel/Home.png",
    alt: "Layup Admin Panel Dashboard",
  },
  {
    id: "layup-website",
    title: "Layup Website",
    category: "Website",
    description: "Official website for Layup platform",
    gradient: "from-purple-500 via-indigo-500 to-blue-600",
    image: "/images/Layup.png",
    alt: "Layup Project",
  },
  {
    id: "palisades-website",
    title: "Palisades Security Website",
    category: "Website",
    description: "Official website for Palisades Security",
    gradient: "from-blue-400 to-indigo-500",
    image: "/images/Palisades.png",
    alt: "Palisades Project",
  },
  {
    id: "palisades-security",
    title: "Palisades Security Review",
    category: "Security Application",
    description: "Security review and management application",
    gradient: "from-gray-700 to-gray-900",
    image: "/images/palisades-dashboard.png",
    alt: "Palisades Dashboard",
  },
  {
    id: "legitt-website",
    title: "Legitt AI Website",
    category: "Website",
    description: "Official website for Legitt platform",
    gradient: "from-green-500 to-teal-600",
    image: "/images/legitt.png",
    alt: "Legitt Project",
  },
  {
    id: "legitt-esign",
    title: "Legitt AI Esign",
    category: "E-Signature",
    description: "Electronic signature solution",
    gradient: "from-orange-500 to-red-600",
    image: "/images/legitt.png",
    alt: "Legitt Project",
  },
  {
    id: "legitt-proposal",
    title: "Legitt AI Proposal & Contract",
    category: "Contract Management",
    description: "Proposal and contract management application",
    gradient: "from-pink-500 to-purple-600",
    image: "/images/legitt.png",
    alt: "Legitt Project",
  },
  {
    id: "legitt-repo-analyzer",
    title: "Legitt AI Repo Analyzer",
    category: "AI Contract Analysis",
    description: "AI-powered contract analysis and visualization platform",
    gradient: "from-indigo-500 to-violet-600",
    image: "/images/legitt.png",
    alt: "Legitt AI Repo Analyzer",
  },
];
