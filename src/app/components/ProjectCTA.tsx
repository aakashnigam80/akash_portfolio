"use client";

import React from "react";
import { SchedulingButton } from "@/components/SchedulingButton";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const happyClients = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
];

const ProjectCTA = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-36 py-24 border-x border-border">
      <div className="bg-white shadow-2xl rounded-3xl p-12 text-center space-y-8">
        {/* Happy Clients Section */}
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="flex justify-center">
            <AnimatedTooltip items={happyClients} />
          </div>
          <div className="flex flex-col items-center gap-2">
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
            <span className="ml-2 text-sm font-medium text-gray-600">
              99+ Happy clients
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
