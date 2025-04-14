import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    // Section container with top/left border applied
    <section className="border-x border-border max-w-6xl mx-auto">
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
          <Button
            asChild
            size="sm"
            className="w-fit rounded-full bg-black text-white hover:bg-gray-900 shadow-md text-sm  transition-all duration-300 ease-in-out group overflow-hidden"
          >
            <Link href="/contact" className="flex items-center">
              <Image
                src="/images/profile.png"
                alt="Your profile picture"
                width={28}
                height={28}
                className="rounded-full flex-shrink-0"
              />
              <div className="flex items-center max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-800 ease-in-out overflow-hidden whitespace-nowrap">
                <span className="mr-2 text-white font-medium">+</span>
                <span className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center text-xs font-semibold mr-2">
                  You
                </span>
              </div>
              <span className="group-hover:ml-0 transition-all duration-300 ease-in-out whitespace-nowrap">
                Book a call with me
              </span>
            </Link>
          </Button>
        </div>

        {/* Right Column: Image Composition */}
        <div className="relative flex items-center justify-center min-h-[300px] md:min-h-0 lg:min-h-[400px] -mr-6 md:-mr-12 lg:-mr-20">
          {/* Bottom Layer - Blue gradient background */}
          <div className="absolute w-[70%] sm:w-[75%] aspect-[16/10] bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-500 rounded-2xl shadow-xl transform rotate-[-6deg] origin-bottom-left"></div>

          {/* Project Image Layers - Staggered and Rotated */}
          {/* Layer 1 */}
          <div className="absolute w-[65%] aspect-[16/10] bg-white rounded-2xl shadow-lg transform rotate-[-12deg] origin-bottom-right translate-x-4 translate-y-6 overflow-hidden">
            <Image
              src="/images/palisades-dashboard.png"
              layout="fill"
              objectFit="cover"
              alt="Palisades Dashboard"
            />
          </div>

          {/* Layer 2 */}
          <div className="absolute w-[68%] aspect-[16/10] bg-white rounded-2xl shadow-lg transform rotate-[-4deg] origin-center translate-x-[-10px] translate-y-[-5px] overflow-hidden z-20">
            <Image
              src="/images/Layup.png"
              layout="fill"
              objectFit="cover"
              alt="Layup Project"
            />
          </div>

          {/* Layer 3 */}
          <div className="absolute w-[72%]  aspect-[16/10] bg-white rounded-2xl shadow-xl transform rotate-[2deg] origin-top-right translate-x-4 translate-y-[-25px] overflow-hidden">
            <Image
              src="/images/legitt.png"
              layout="fill"
              objectFit="cover"
              alt="Legitt Project"
            />
          </div>

          {/* Top Layer */}
          <div className="absolute w-[75%] bg-black aspect-[16/10] rounded-2xl shadow-2xl transform rotate-[8deg] origin-top-left translate-x-[-15px] translate-y-[-45px] overflow-hidden z-10">
            <Image
              src="/images/Palisades.png"
              layout="fill"
              objectFit="contain"
              alt="Palisades Project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
