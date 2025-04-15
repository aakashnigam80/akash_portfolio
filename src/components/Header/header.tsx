"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FloatingActions } from "../FloatingActions/FloatingActions";
import { ContactForm } from "@/components/ContactForm";

export function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const navItems = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Blog",
      link: "#blog",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    if (link === "#contact") {
      setIsContactFormOpen(true);
      return;
    }
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const firstSectionHeight = window.innerHeight;
      setIsCollapsed(scrollPosition > firstSectionHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-6 left-0 w-full z-50 flex justify-center">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            width: isCollapsed && !isHovered ? "230px" : "600px",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          className="backdrop-blur-md bg-white/70 rounded-full px-4 py-2 border border-border flex items-center justify-between mx-auto overflow-hidden shadow-lg hover:shadow-xl hover:bg-white/80 transition-all"
        >
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 relative overflow-hidden rounded-full bg-gray-200/50 flex items-center justify-center shrink-0 backdrop-blur-sm">
              <Image
                src="/images/profile.png"
                width={100}
                height={100}
                alt="Logo"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="text-sm font-semibold whitespace-nowrap text-gray-800">
              Akash Nigam
            </div>
            {isCollapsed && !isHovered && (
              <div className="flex gap-1.5 ml-2">
                <div
                  className="w-1.5 h-1.5 rounded-full bg-gray-500/70 animate-bounce"
                  style={{ animationDelay: "0s" }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full bg-gray-500/70 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full bg-gray-500/70 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            )}
          </div>
          <nav
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              width: isCollapsed && !isHovered ? "0" : "auto",
              opacity: isCollapsed && !isHovered ? "0" : "1",
              marginLeft: isCollapsed && !isHovered ? "0" : "64px",
            }}
          >
            <ul className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`whitespace-nowrap
                  h-[35px] flex items-center justify-center
                `}
                >
                  {item.name === "Contact" ? (
                    <button
                      onClick={(e) => handleNavClick(e, item.link)}
                      className="px-4 py-1.5 rounded-full border bg-black hover:border-muted-foreground hover:bg-white  hover:shadow-lg text-sm font-medium transition-all duration-300 text-white cursor-pointer hover:text-black"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      onClick={(e) => handleNavClick(e, item.link)}
                      className={`text-sm font-medium transition-all duration-300 text-muted-foreground hover:text-black`}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <FloatingActions isVisible={isCollapsed && !isHovered} />
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </>
  );
}
