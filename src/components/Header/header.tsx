"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export function Header() {
  const navItems = [
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center">
      <div className="bg-white rounded-full px-3 py-3 flex items-center justify-between max-w-fit mx-auto border border-gray-200">
        <div className="flex items-center gap-3 pr-16">
          <div className="w-8 h-8 relative overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
            <Image
              src="/images/profile.png"
              width={100}
              height={100}
              alt="Logo"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="text-sm font-semibold">Akash Nigam</div>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`text-sm text-black font-medium ${
                    item.name === "Contact"
                      ? "px-2 py-1.5 shadow-sm bg-white rounded-full border border-gray-200"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
