"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  gradient: string;
  image: string;
  alt: string;
}

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="border-x border-border max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-14"
    >
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-black">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work and creative endeavors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="group relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transform transition-transform duration-700 scale-100 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1.5 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
                      {project.category}
                    </span>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                    <span className="text-sm text-muted-foreground font-medium">
                      #{(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center text-gray-900 font-medium group/link">
                    <span className="mr-2">View Project</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
