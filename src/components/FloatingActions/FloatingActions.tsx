"use client";
import React, { useState, useEffect } from "react";
import { ContactForm } from "../ContactForm";
import { SchedulingButton } from "../SchedulingButton";

interface FloatingActionsProps {
  isVisible: boolean;
}

export function FloatingActions({ isVisible }: FloatingActionsProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [, setIsExiting] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsExiting(false);
      setShouldRender(true);
    } else {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500); // Match this with animation duration
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <>
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50">
        <div
          className={`${isVisible ? "animate-slide-up" : "animate-slide-down"}`}
        >
          <div
            className="backdrop-blur-md bg-white/70 rounded-full border border-border shadow-lg hover:shadow-xl hover:bg-white/80 transition-all overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              width: isHovered ? "280px" : "100px",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              padding: "4px",
            }}
          >
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setIsContactOpen(true)}
                className="flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-all overflow-hidden relative"
                style={{
                  width: isHovered ? "130px" : "38px",
                  height: "38px",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 absolute left-2"
                  style={{
                    transform: isHovered
                      ? "translateX(14px)"
                      : "translateX(0.5px)",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <path d="M21 5h-18v14h18v-14z" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <span
                  className="text-sm font-medium pl-7"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  Contact
                </span>
              </button>
              <div
                className="flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-all overflow-hidden relative"
                style={{
                  width: isHovered ? "140px" : "38px",
                  height: "38px",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <SchedulingButton
                  className="w-full h-full"
                  showProfileImage={false}
                  showPlusYou={false}
                  showCalendarIcon={true}
                  text={isHovered ? "Book a call" : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
