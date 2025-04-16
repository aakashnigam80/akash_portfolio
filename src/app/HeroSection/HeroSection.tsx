"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion, useTransform } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { SchedulingButton } from "@/components/SchedulingButton";

// Define the type for project images
interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  initialStyle: {
    rotate: number;
    originX?: string;
    originY?: string;
    translateX?: number;
    translateY?: number;
    zIndex?: number;
  };
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Using our custom hook for more accurate positions
  const { scrollY, elementPositions } = useScrollPosition();

  // Project images data
  const projectImages: ProjectImage[] = [
    {
      id: "gradient-bg",
      src: "",
      alt: "",
      initialStyle: {
        rotate: -6,
        originX: "bottom",
        originY: "left",
        zIndex: 5,
      },
    },
    {
      id: "palisades-dashboard",
      src: "/images/palisades-dashboard.png",
      alt: "Palisades Dashboard",
      initialStyle: {
        rotate: -12,
        originX: "bottom",
        originY: "right",
        translateX: 4,
        translateY: 6,
        zIndex: 10,
      },
    },
    {
      id: "layup",
      src: "/images/Layup.png",
      alt: "Layup Project",
      initialStyle: {
        rotate: -4,
        translateX: -10,
        translateY: -5,
        zIndex: 20,
      },
    },
    {
      id: "legitt",
      src: "/images/legitt.png",
      alt: "Legitt Project",
      initialStyle: {
        rotate: 2,
        originX: "top",
        originY: "right",
        translateX: 4,
        translateY: -25,
        zIndex: 15,
      },
    },
    {
      id: "palisades",
      src: "/images/Palisades.png",
      alt: "Palisades Project",
      initialStyle: {
        rotate: 8,
        originX: "top",
        originY: "left",
        translateX: -15,
        translateY: -45,
        zIndex: 10,
      },
    },
  ];

  // We'll use these to create scroll-linked animations
  const imageYRangeStart = useTransform(
    scrollY,
    [0, elementPositions.companies, elementPositions.projects],
    [0, 0, 0]
  );

  const imageScaleRange = useTransform(
    scrollY,
    [0, elementPositions.companies, elementPositions.projects],
    [1, 0.9, 0.8]
  );

  const imageOpacityRange = useTransform(
    scrollY,
    [
      0,
      elementPositions.companies,
      elementPositions.companies + 200,
      elementPositions.projects - 200,
      elementPositions.projects,
    ],
    [1, 1, 0.7, 0.7, 1]
  );

  return (
    // Section container with top/left border applied
    <section
      ref={sectionRef}
      className="border-x border-border max-w-6xl mx-auto"
    >
      {/* Main content grid (Text on left, Image on right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 md:px-12 md:py-16 lg:px-14 lg:py-32">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <Badge
            variant="outline"
            className="w-fit border-border py-1.5 px-3 font-semibold rounded-full shadow-sm"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available Immediate
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-black">
            <span className="text-muted-foreground">Design that</span> delivers
            results.
          </h1>
          <div className="text-base text-black max-w-md font-semibold">
            Strategic design that drives growth, not just looks good.
            <div className="text-muted-foreground font-medium">
              I create everything your brand needs to attract customers and turn
              them into sales.
            </div>
          </div>
          <SchedulingButton
            className="w-fit rounded-full bg-black text-white hover:bg-gray-900 shadow-md text-sm transition-all duration-300 ease-in-out group overflow-hidden"
            showProfileImage={true}
            showPlusYou={true}
          />
        </div>

        {/* Right Column: Image Composition */}
        <div className="relative flex items-center justify-center min-h-[300px] md:min-h-0 lg:min-h-[400px] -mr-6 md:-mr-12 lg:-mr-20">
          {/* Bottom Layer - Blue gradient background */}
          <motion.div
            className="absolute w-[70%] sm:w-[75%] aspect-[16/10] bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-500 rounded-2xl shadow-xl origin-bottom-left"
            style={{
              y: imageYRangeStart,
              scale: imageScaleRange,
              opacity: imageOpacityRange,
              rotate: projectImages[0].initialStyle.rotate,
              originX: projectImages[0].initialStyle.originX,
              originY: projectImages[0].initialStyle.originY,
            }}
          />

          {/* Project Image Layers - Staggered and Rotated */}
          {/* Layer 1 */}
          <motion.div
            className="absolute w-[65%] aspect-[16/10] bg-white rounded-2xl shadow-lg origin-bottom-right overflow-hidden"
            style={{
              y: imageYRangeStart,
              x: projectImages[1].initialStyle.translateX,
              scale: imageScaleRange,
              opacity: imageOpacityRange,
              rotate: useTransform(
                scrollY,
                [0, elementPositions.companies, elementPositions.projects],
                [
                  projectImages[1].initialStyle.rotate,
                  projectImages[1].initialStyle.rotate + 5,
                  0,
                ]
              ),
              originX: projectImages[1].initialStyle.originX,
              originY: projectImages[1].initialStyle.originY,
              zIndex: projectImages[1].initialStyle.zIndex,
            }}
          >
            <Image
              src={projectImages[1].src}
              layout="fill"
              objectFit="cover"
              alt={projectImages[1].alt}
            />
          </motion.div>

          {/* Layer 2 */}
          <motion.div
            className="absolute w-[68%] aspect-[16/10] bg-white rounded-2xl shadow-lg origin-center overflow-hidden"
            style={{
              y: projectImages[2].initialStyle.translateY || 0,
              x: projectImages[2].initialStyle.translateX,
              scale: imageScaleRange,
              opacity: imageOpacityRange,
              rotate: useTransform(
                scrollY,
                [0, elementPositions.companies, elementPositions.projects],
                [
                  projectImages[2].initialStyle.rotate,
                  projectImages[2].initialStyle.rotate + 5,
                  0,
                ]
              ),
              zIndex: projectImages[2].initialStyle.zIndex,
            }}
          >
            <Image
              src={projectImages[2].src}
              layout="fill"
              objectFit="cover"
              alt={projectImages[2].alt}
            />
          </motion.div>

          {/* Layer 3 */}
          <motion.div
            className="absolute w-[72%] aspect-[16/10] bg-white rounded-2xl shadow-xl origin-top-right overflow-hidden"
            style={{
              y: projectImages[3].initialStyle.translateY || 0,
              x: projectImages[3].initialStyle.translateX,
              scale: imageScaleRange,
              opacity: imageOpacityRange,
              rotate: useTransform(
                scrollY,
                [0, elementPositions.companies, elementPositions.projects],
                [
                  projectImages[3].initialStyle.rotate,
                  projectImages[3].initialStyle.rotate + 5,
                  0,
                ]
              ),
              originX: projectImages[3].initialStyle.originX,
              originY: projectImages[3].initialStyle.originY,
              zIndex: projectImages[3].initialStyle.zIndex,
            }}
          >
            <Image
              src={projectImages[3].src}
              layout="fill"
              objectFit="cover"
              alt={projectImages[3].alt}
            />
          </motion.div>

          {/* Top Layer */}
          <motion.div
            className="absolute w-[75%] bg-black aspect-[16/10] rounded-2xl shadow-2xl origin-top-left overflow-hidden"
            style={{
              y: projectImages[4].initialStyle.translateY || 0,
              x: projectImages[4].initialStyle.translateX,
              scale: imageScaleRange,
              opacity: imageOpacityRange,
              rotate: useTransform(
                scrollY,
                [0, elementPositions.companies, elementPositions.projects],
                [
                  projectImages[4].initialStyle.rotate,
                  projectImages[4].initialStyle.rotate + 5,
                  0,
                ]
              ),
              originX: projectImages[4].initialStyle.originX,
              originY: projectImages[4].initialStyle.originY,
              zIndex: projectImages[4].initialStyle.zIndex,
            }}
          >
            <Image
              src={projectImages[4].src}
              layout="fill"
              objectFit="contain"
              alt={projectImages[4].alt}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
