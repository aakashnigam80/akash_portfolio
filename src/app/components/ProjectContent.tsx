"use client";

import React from "react";
import Image from "next/image";

interface ImageSection {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  layout?: "single" | "double";
}

interface ProjectContentProps {
  sections: ImageSection[];
}

const ProjectContent: React.FC<ProjectContentProps> = ({ sections }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-36 pt-16 sm:pt-32 pb-8 sm:pb-12 border-x border-border">
      {sections.map((section, index) => (
        <div key={index} className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
            {section.title}
          </h2>

          {/* Section Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
            {section.description}
          </p>

          {/* Images */}
          <div
            className={`grid ${
              section.layout === "double" ? "sm:grid-cols-2" : "grid-cols-1"
            } gap-4 sm:gap-8 mt-8 sm:mt-12`}
          >
            {section.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectContent;
