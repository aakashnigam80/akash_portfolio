"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  gradient: string;
  image: string;
  alt: string;
}

const projects: Project[] = [
  {
    id: "layup-admin",
    title: "Layup Admin Panel",
    category: "Admin Dashboard",
    description: "Comprehensive admin interface for managing Layup operations",
    gradient: "from-blue-500 via-indigo-400 to-purple-500",
    image: "/images/Layup.png",
    alt: "Layup Project",
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

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="border-x border-border max-w-6xl mx-auto py-24"
    >
      <div className="px-6 md:px-12 lg:px-14">
        <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-12">
          Latest <span className="text-black">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-[400px] relative overflow-hidden rounded-2xl group"
            >
              {/* Image Container */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                />
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <span className="px-2 py-1 text-xs font-semibold bg-white/10 backdrop-blur-md text-white rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-white/90">{project.description}</p>
                    <button className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
