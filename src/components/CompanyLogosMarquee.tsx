"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const companies = [
  {
    id: 1,
    name: "Layup",
    logo: "/images/layup-logo.svg",
  },
  {
    id: 2,
    name: "Palisades",
    logo: "/images/palisades-logo.png",
  },
  {
    id: 3,
    name: "Legitt",
    logo: "/images/legitt-logo.png",
  },
];

const CompanyLogo = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <div
      className={cn(
        "relative h-24 w-32 mx-8 flex items-center grayscale-100 justify-center",
        "border-gray-950/[.1] rounded-lg p-4",
        "dark:border-gray-50/[.1]",
        {
          "h-24 w-24": name === "Legitt",
        },
        {
          "h-24 w-44": name === "Palisades",
        }
      )}
    >
      <div className="relative w-full h-full">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export function CompanyLogosMarquee() {
  // Split companies in two rows for alternating directions
  const firstRow = companies;

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((company) => (
          <CompanyLogo
            key={company.id}
            logo={company.logo}
            name={company.name}
          />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
