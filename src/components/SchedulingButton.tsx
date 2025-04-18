"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Calendar1 } from "lucide-react";

interface SchedulingButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  showProfileImage?: boolean;
  showPlusYou?: boolean;
  text?: string;
  showCalendarIcon?: boolean;
}

export function SchedulingButton({
  className = "",
  variant = "default",
  size = "sm",
  showProfileImage = true,
  showPlusYou = true,
  showCalendarIcon = false,
  text = "Book a call with me",
}: SchedulingButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={`w-fit rounded-full bg-black border text-white hover:text-black hover:bg-white hover:border hover:border-black shadow-md text-sm transition-all duration-300 ease-in-out group overflow-hidden ${className}`}
      data-cal-namespace="30min"
      data-cal-link="akash-nigam09/30min"
      data-cal-config='{"layout":"month_view","theme":"light"}'
    >
      <Link href="#" className="flex items-center">
        {showProfileImage && (
          <Image
            src="/images/profile.png"
            alt="Your profile picture"
            width={28}
            height={28}
            className="rounded-full flex-shrink-0"
          />
        )}
        {showPlusYou && (
          <div className="flex items-center max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-800 ease-in-out overflow-hidden whitespace-nowrap">
            <span className="mr-2 text-white group-hover:text-black font-medium">
              +
            </span>
            <span className="bg-black text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-semibold mr-2">
              You
            </span>
          </div>
        )}

        {showCalendarIcon && (
          <>
            <Calendar1
              className="shrink-0 absolute left-2"
              style={{
                transform: text ? "translateX(14px)" : "translateX(3px)",
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
            <span
              className="text-sm font-medium pl-7"
              style={{
                opacity: text ? 1 : 0,
                transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {text}
            </span>
          </>
        )}
        {!showCalendarIcon && (
          <span className="group-hover:ml-0 group-hover:text-black  transition-all duration-300 ease-in-out whitespace-nowrap">
            {text}
          </span>
        )}
      </Link>
    </Button>
  );
}
