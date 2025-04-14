"use client";

import { useEffect, useState } from "react";
import { useTransform, useMotionValue } from "framer-motion";

export function useScrollPosition() {
  // Create a motion value to track scroll position
  const scrollY = useMotionValue(0);

  const [elementPositions, setElementPositions] = useState<{
    companies: number;
    projects: number;
  }>({
    companies: 500, // Default fallback values
    projects: 1200, // Default fallback values
  });

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    const calculatePositions = () => {
      const companiesSection = document.querySelector("#companies");
      const projectsSection = document.querySelector("#projects");

      const positions = {
        companies: companiesSection
          ? companiesSection.getBoundingClientRect().top + window.scrollY - 100
          : 500,
        projects: projectsSection
          ? projectsSection.getBoundingClientRect().top + window.scrollY - 300
          : 1200,
      };

      setElementPositions(positions);
    };

    // Set positions on mount and window resize
    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    window.addEventListener("scroll", handleScroll);

    // Initialize scrollY on mount
    scrollY.set(window.scrollY);

    return () => {
      window.removeEventListener("resize", calculatePositions);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return { scrollY, elementPositions };
}
