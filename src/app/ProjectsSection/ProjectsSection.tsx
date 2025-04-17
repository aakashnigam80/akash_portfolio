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
  // Helper function to determine if gradient is dark
  const isDarkGradient = (gradient: string) => {
    return (
      gradient.includes("from-black") ||
      gradient.includes("from-gray-900") ||
      gradient.includes("from-zinc-900") ||
      gradient.includes("from-slate-900") ||
      gradient.includes("to-black") ||
      gradient.includes("to-gray-900")
    );
  };

  return (
    <section
      id="work"
      className="border-x border-border max-w-6xl mx-auto py-12 sm:py-16 md:py-24"
    >
      <div className="px-4 sm:px-6 md:px-12 lg:px-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-medium tracking-tight mb-12 md:mb-16">
          Latest <span className="text-muted-foreground">Projects</span>
        </h2>

        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24">
          {projects.map((project, index) => {
            const isGradientDark = isDarkGradient(project.gradient);

            return (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-10 sm:gap-8 group cursor-pointer items-center`}
                >
                  {/* Image Container */}
                  <div className="flex-1 relative w-full">
                    <motion.div
                      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg transform-gpu transition-all duration-700 ease-out group-hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700 z-10" />
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        className={`object-cover transition-transform duration-700 will-change-transform group-hover:scale-105 ${
                          project.id === "1" ? "object-left" : ""
                        }`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      <div
                        className={`absolute inset-0  opacity-70 group-hover:opacity-60 transition-all duration-700`}
                      />
                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] z-20" />
                    </motion.div>
                    {/* Project Number with Adaptive Styling */}
                    <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 z-20">
                      <div className="relative">
                        {/* Background number for depth */}
                        <span
                          className={`absolute -inset-1 text-6xl sm:text-7xl md:text-8xl font-bold blur-[1px] select-none
                            ${isGradientDark ? "text-white/20" : "text-black/10"}`}
                        >
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        {/* Main number with adaptive colors */}
                        <span
                          className={`relative text-6xl sm:text-7xl md:text-8xl font-bold select-none
                            ${
                              isGradientDark ? "text-white/80" : "text-black/20"
                            }`}
                          style={{
                            textShadow: isGradientDark
                              ? "2px 2px 4px rgba(0, 0, 0, 0.3)"
                              : "2px 2px 4px rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <span className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-normal bg-border text-black rounded-full inline-block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                      <div className="">
                        <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-full text-xs sm:text-sm font-medium hover:bg-black transition-colors group-hover:gap-4">
                          View Project
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
