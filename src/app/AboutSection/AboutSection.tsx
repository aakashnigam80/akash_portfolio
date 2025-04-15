"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface WorkHistoryItem {
  company: string;
  role: string;
  period: string;
}

export const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const workHistory: WorkHistoryItem[] = [
    {
      company: "Layup Labs (Backed by Y-Combinator)",
      role: "Founding Design Engineer",
      period: "Feb 2025 - Present",
    },
    {
      company: "Palisades Security, SF Bay Area",
      role: "Front End Product Engineer",
      period: "Oct 2024 - Jan 2025",
    },
    {
      company: "Legitt AI",
      role: "Front End Developer & UI/UX Lead",
      period: "Jan 2023 - Sep 2024",
    },
  ];

  return (
    <div id="about" className="border-x border-border max-w-6xl mx-auto">
      <div className="px-6 py-12 md:px-12 md:py-16 lg:px-14 lg:py-16">
        {/* Main heading at top */}
        <h1 className="text-5xl leading-[1.1] font-medium mb-16">
          <span className="text-muted-foreground">
            Innovative Product Design Engineer
          </span>
          <br />
          <span className="text-black">
            crafting seamless digital experiences.
          </span>
        </h1>

        {/* Two column layout below heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col w-[450px]">
            {/* Profile Image Container */}
            <div className="rounded-3xl shadow-2xl  h-[400px] overflow-hidden bg-teal-600 aspect-square relative">
              <Image
                src="/images/akash.jpeg"
                alt="Profile picture"
                fill
                className="object-cover object-bottom"
              />
              {/* Social Icons Overlay */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <a
                  href="https://x.com/akashnigam0911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/30 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 text-white fill-current"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-nigam-29590b207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/30 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white fill-current"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/aakashnigam80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/30 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white fill-current"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/akash.nigam09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/30 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white fill-current"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Name and Title */}
            <div className="mt-6">
              <h2 className="text-2xl font-medium">Akash Nigam</h2>
              <p className="text-muted-foreground text-sm">
                Product Design Engineer
              </p>
            </div>

            {/* Work History Section */}
            <div className="mt-4">
              <h3 className="text-base font-medium mb-4">My work history</h3>
              <div
                className="relative"
                style={{
                  height: isExpanded
                    ? workHistory.length * 100 + "px"
                    : "130px",
                }}
              >
                {workHistory.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute w-full bg-white rounded-xl p-4 transition-all duration-300 ease-in-out`}
                    style={{
                      top: 0,
                      transform:
                        !isExpanded && index > 0
                          ? `translateY(${index * 8}px) scale(${
                              1 - index * 0.02
                            }) translateX(${index * 4}px)`
                          : `translateY(${isExpanded ? index * 88 : 0}px)`,
                      transformOrigin: "center top",
                      zIndex: workHistory.length - index,
                      height: "auto",
                      opacity: 1,
                      pointerEvents: !isExpanded && index > 0 ? "none" : "auto",
                      overflow: "hidden",
                      background: "white",
                      border: "1px solid rgb(229, 231, 235)",
                      boxShadow: !isExpanded
                        ? "0 1px 2px rgba(0, 0, 0, 0.1), 0 6px 20px -12px rgba(0, 0, 0, 0.1)"
                        : "0 1px 3px rgba(0, 0, 0, 0.1)",
                      width:
                        !isExpanded && index > 0
                          ? `calc(100% - ${index * 8}px)`
                          : "100%",
                      marginLeft:
                        !isExpanded && index > 0 ? `${index * 4}px` : "0",
                    }}
                  >
                    <div
                      className="flex justify-between items-center"
                      style={{
                        opacity: 1,
                        transform: "none",
                      }}
                    >
                      <div className="w-full">
                        <h4 className="text-base mb-1 font-medium text-black">
                          {item.company}
                        </h4>
                        <p className="text-sm flex justify-between text-muted-foreground">
                          {item.role}
                          <span className="text-sm text-muted-foreground">
                            {item.period}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mx-auto flex text-sm text-black font-medium cursor-pointer transition-colors bg-white rounded-full px-4 py-2 shadow-sm border border-border"
              >
                {isExpanded ? "Hide" : "Show all"}
              </Button>
            </div>
          </div>

          {/* Right Column - Bio Text */}
          <div className="space-y-8">
            <div>
              <p className="text-xl font-medium mb-2">
                Transforming designs into pixel-perfect, high-performance web
                apps.
              </p>
              <p className="text-muted-foreground">
                As an Innovative Product Design Engineer, I specialize in
                designing with Figma and implementing those designs using
                Next.js, React, and FastAPI to create seamless digital
                experiences.
              </p>
            </div>

            <div>
              <p className="text-xl font-medium mb-2">
                Optimizing user experiences and engineering scalable solutions
              </p>
              <p className="text-muted-foreground">
                I focus on creating interfaces that not only look great but
                solve real problems. Whether I&apos;m working on AI-powered
                features, performance tuning, or crafting seamless digital
                products, my goal is to deliver exceptional user experiences.
              </p>
            </div>

            <div>
              <p className="text-xl font-medium mb-2">
                Passionate about design-to-code workflows
              </p>
              <p className="text-muted-foreground">
                My expertise spans from UI/UX design in Figma to frontend
                development with Next.js, React, and TypeScript. I&apos;m
                skilled in integrating AI capabilities, optimizing performance,
                and ensuring accessibility across all devices.
              </p>
            </div>

            {/* Signature */}
            <div>
              <Image
                src="/images/signature.png"
                alt="Signature"
                width={350}
                height={350}
                className="-ml-22 -mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
