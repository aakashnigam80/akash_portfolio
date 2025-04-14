"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is your current role and experience?",
    answer:
      "I'm currently working as a Founding Design Engineer at Layup Labs (Y-Combinator backed), where I lead end-to-end UI/UX design and development. Previously, I worked at Palisades Security and Legitt AI, combining my expertise in both design and frontend development to create sophisticated enterprise solutions.",
  },
  {
    question: "What makes your design-to-development approach unique?",
    answer:
      "I specialize in the complete design-to-code workflow. I start with UI/UX design in Figma, then translate these designs into pixel-perfect implementations using Next.js and React. My background in both design and development allows me to create solutions that are not only visually appealing but also technically optimized and performant.",
  },
  {
    question: "What types of projects have you worked on?",
    answer:
      "I've worked on diverse enterprise projects including Palisades Security's AI-powered threat modeling platform, Legitt AI's contract management system, and Layup Labs' admin panel. These projects involved complex dashboards, AI integrations, and sophisticated user interfaces. I've also integrated various AI capabilities using models from Anthropic, OpenAI, and DeepSeek.",
  },
  {
    question: "What technologies and tools do you use?",
    answer:
      "I work with modern frontend technologies including Next.js, React, TypeScript, and Tailwind CSS. For design, I primarily use Figma and Framer. I'm also experienced with UI libraries like Shadcn UI, Material UI, and animation libraries such as GSAP and Framer Motion. For data visualization, I work with Nivo charts and Recharts.",
  },
  {
    question: "How do you approach complex product features?",
    answer:
      "I take a systematic approach to complex features. For instance, at Legitt AI, I developed an end-to-end user journey for creating sales proposals and contracts, incorporating AI-driven automation and e-signature solutions. I focus on breaking down complex requirements into manageable components while ensuring seamless user experience and technical efficiency.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 items-start md:grid-cols-2 gap-8 px-6 py-12 md:px-12 md:py-16 lg:px-14">
        {/* Left Column: FAQ Questions */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold tracking-tight">
              Your questions
            </h2>
            <h3 className="text-5xl text-gray-400">answered.</h3>
          </div>

          <div className="mt-8 space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xs border border-border overflow-hidden"
              >
                <button
                  className={`w-full p-3 px-4 text-left flex justify-between items-center ${
                    openIndex === index ? "border-b border-border" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-sm font-semibold">{item.question}</span>
                  <span className="transform transition-transform duration-200">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Plus className="h-5 w-5 text-muted-foreground" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 py-4">
                      <p className="text-sm text-black">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Booking Section */}
        <div className="flex items-center">
          <div className="bg-white border-border border rounded-2xl p-8 shadow-lg w-full">
            <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
              <img
                src="/images/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <h3 className="text-2xl text-muted-foreground">
                  Still not sure?
                </h3>
                <h4 className="text-3xl font-medium">
                  Book a free discovery call.
                </h4>
                <p className="text-black text-sm mt-2">
                  Learn more about how I work and how I can help you and your
                  business take the next step.
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
