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
      className="border-x border-border max-w-6xl mx-auto py-24"
    >
      <div className="px-6 md:px-12 lg:px-14">
        <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-12">
          Latest <span className="text-black">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-[400px] relative overflow-hidden rounded-2xl group cursor-pointer"
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
                    className={`absolute inset-0 bg-gradient-to-br backdrop-blur-sm ${project.gradient} opacity-80`}
                  />
                  {/* Content */}
                  <div className="absolute bottom-0 inset-0 p-6 flex flex-col justify-between">
                    <div className="flex flex-col items-start gap-4">
                      <div>
                        <span className="px-2 py-1 text-xs font-semibold bg-white/10 backdrop-blur-md text-white rounded-full">
                          {project.category}
                        </span>
                        <h3 className="text-3xl font-bold text-white mt-2">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-white/90">{project.description}</p>
                      <span className="px-4 py-2 text-nowrap bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                        View Project
                      </span>
                    </div>
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
