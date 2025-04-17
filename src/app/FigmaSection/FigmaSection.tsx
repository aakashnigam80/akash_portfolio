"use client";

import Image from "next/image";
import React from "react";

export const FigmaSection = () => {
  return (
    <div id="figma" className="border-x border-border max-w-6xl mx-auto">
      <div className="px-4 sm:px-6 py-8 sm:py-12 md:px-12 md:py-16 lg:px-14 lg:py-16">
        <h2 className="text-2xl flex items-center gap-4 sm:text-4xl font-medium tracking-tight mb-8">
          <Image
            src="/images/stack/figma.svg"
            alt="Figma"
            width={70}
            height={70}
            className="-ml-4"
          />
          Latest Design Work
        </h2>
        <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mb-12">
          Explore my design process and UI/UX work directly in Figma. This
          showcase demonstrates my approach to creating intuitive, beautiful,
          and functional user interfaces.
        </p>
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          {/* Replace the src URL with your actual Figma file embed URL */}
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="550"
            src="https://embed.figma.com/design/UCnyP3n2g9kqEUQf2hTcgo/Some-Latest-Admin-Panel-Designs-Of-current-company?node-id=0-1&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
