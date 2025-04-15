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
    <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-36 pt-32 pb-12 border-x border-border ">
      {sections.map((section, index) => (
        <div key={index} className="space-y-8">
          {/* Section Title */}
          <h2 className="text-4xl font-medium tracking-tight">
            {section.title}
          </h2>

          {/* Section Description */}
          <p className="text-lg text-muted-foreground max-w-3xl">
            {section.description}
          </p>

          {/* Images */}
          <div
            className={`grid ${
              section.layout === "double" ? "grid-cols-1" : "grid-cols-1"
            } gap-8 mt-12`}
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
