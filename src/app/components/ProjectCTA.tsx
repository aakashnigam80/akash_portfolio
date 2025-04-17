"use client";

import React from "react";
import { SchedulingButton } from "@/components/SchedulingButton";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const happyClients = [
  {
    id: 1,
    name: "Ryan Xue",
    designation: "Cofounder of Layup Labs",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFtvyYy_UdW7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689006445726?e=1750291200&v=beta&t=zBSGl0ifK8VsEjVGiu28qXDWd0XXupkHpTwdLeRVBsQ",
  },
  {
    id: 2,
    name: "Badal Jain",
    designation: "Cofounder of Layup Labs",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQErLa_6Pqgkew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660841752766?e=1750291200&v=beta&t=sUdH8wl9knXMGj2S5sul7NSIS_VlwtNJdBOxVQmyuRo",
  },
  {
    id: 3,
    name: "Srajan Gupta",
    designation: "Founder of Palisades Security",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHuM47vss8PHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699121502675?e=1750291200&v=beta&t=Oc9q280b6aET3ITb89GQxblsW8AmWUJLSBFhO0IwSEg",
  },
  {
    id: 4,
    name: "Aman Singh",
    designation: "Backend Developer at Layup Labs",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGrhTtRUr1Vbw/profile-displayphoto-shrink_800_800/B56ZW4nMfeHoAg-/0/1742559038340?e=1750291200&v=beta&t=4Jw66b2YSAD398EclruNdeNW6HN92InYKA76psn6118",
  },
  {
    id: 5,
    name: "Ravi Baranwal",
    designation: "CTO at Legitt AI",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQHqZzckzM07oQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516284984158?e=1750291200&v=beta&t=rpkUT88Ub2JeHk387-sLYYrDCENXsd25WaZnFND8osU",
  },
];

const ProjectCTA = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-36 py-24 border-x border-border">
      <div className="bg-white shadow-2xl rounded-3xl p-12 text-center space-y-8">
        {/* Happy Clients Section */}
        <div className="flex flex-row justify-center items-center gap-6">
          <div className="flex justify-center">
            <AnimatedTooltip items={happyClients} />
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-black"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">
              Happy Team Members
            </span>
          </div>
        </div>

        {/* CTA Text */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-medium text-muted-foreground">
            Like what you see?
          </h2>
          <h3 className="text-3xl sm:text-4xl font-medium text-black">
            Book a free discovery call.
          </h3>
        </div>

        {/* Schedule Button */}
        <div className="flex justify-center">
          <SchedulingButton
            variant="default"
            size="lg"
            showProfileImage={true}
            showPlusYou={true}
            text="Schedule Now"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCTA;
