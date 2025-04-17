"use client";

import React from "react";

interface ProjectDetailProps {
  title: string;
  client: string;
  year: string;
  description: string;
  scopeOfWork: string[];
  liveSiteUrl?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  client,
  year,
  description,
  scopeOfWork,
  liveSiteUrl = "#",
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-36 pt-16 sm:pt-32 pb-8 sm:pb-12 border-x border-border">
      {/* Hero Section */}
      <div className="space-y-6 sm:space-y-8">
        {/* Title */}
        <h1 className="mt-10 sm:mt-0 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
          {title}
        </h1>

        {/* Client & Year */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-black text-sm sm:text-base">
          <span>Company: {client}</span>
          <span className="hidden sm:inline mx-4">|</span>
          <span>Year: {year}</span>
        </div>

        {/* Description */}
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Scope of Work */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-xl text-black">Scope of Work</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {scopeOfWork.map((item, index) => (
              <span
                key={index}
                className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white border border-border rounded-full text-sm sm:text-base"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* View Live Site Link */}
        <div className="pt-4">
          <a
            href={liveSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-2xl sm:text-3xl font-medium hover:opacity-70 transition-opacity"
          >
            View Live Site
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 sm:w-6 sm:h-6"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
