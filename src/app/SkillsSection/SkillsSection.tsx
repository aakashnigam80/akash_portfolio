import { Code2, Palette, Zap, Cpu, Layers } from "lucide-react";
import Image from "next/image";

export const SkillsSection = () => {
  const techStack = [
    { name: "Next.js", image: "/images/stack/nextjs.svg" },
    { name: "React", image: "/images/stack/react.svg" },
    { name: "Vue.js", image: "/images/stack/vuejs.svg" },
    { name: "Vite", image: "/images/stack/vite.svg" },
    { name: "Node.js", image: "/images/stack/node-js.svg" },
    { name: "TypeScript", image: "/images/stack/typescript.svg" },
    { name: "JavaScript", image: "/images/stack/javascript.svg" },
    { name: "HTML5", image: "/images/stack/html-5.svg" },
    { name: "CSS3", image: "/images/stack/css-3.svg" },
    { name: "Tailwind CSS", image: "/images/stack/tailwind-css.svg" },
    { name: "Git", image: "/images/stack/git.svg" },
    { name: "GitHub", image: "/images/stack/github.svg" },
    { name: "Figma", image: "/images/stack/figma.svg" },
    { name: "Framer", image: "/images/stack/framer.svg" },
  ];

  const services = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Front-End & UI Development",
      description:
        "Next.js, React, Vue, Angular, TypeScript, JavaScript, Shadcn UI, Material UI, Tailwind CSS",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Design & Animation",
      description:
        "Figma, Framer, Adobe Illustrator, GSAP, Framer Motion, interactive UI components",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "AI & API Integration",
      description:
        "Anthropic, OpenAI, DeepSeek models, Backend APIs, Nivo charts, Recharts",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance & Optimization",
      description:
        "Frontend optimization, accessibility, responsive design, scalable solutions",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Product Engineering",
      description:
        "End-to-end development, user-centric design, cross-functional team leadership",
    },
  ];

  return (
    <div className="border-x border-border max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 py-12 sm:py-16 md:px-12 lg:px-14 lg:py-24">
        {/* Left side - Heading */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
          <h2 className="relative">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-semibold text-muted-foreground">
                  Professional
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-semibold text-black">
                  Skills & Expertise
                </span>
              </div>
            </div>
            <div className="absolute -bottom-2 left-0 w-36 sm:w-48 h-1">
              <div className="w-full h-full bg-gradient-to-r from-black/20 via-black to-black/20 rounded-full"></div>
            </div>
          </h2>

          <div className="">
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center relative group"
                >
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className={`object-contain sm:w-8 sm:h-8 ${
                      tech.name === "Tailwind CSS"
                        ? "[filter:invert(67%)_sepia(72%)_saturate(4032%)_hue-rotate(182deg)_brightness(98%)_contrast(98%)]"
                        : ""
                    }`}
                  />
                  <div className="absolute text-nowrap -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-[10px] sm:text-xs py-1 sm:py-1.5 px-2 sm:px-3 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out pointer-events-none shadow-lg">
                    {tech.name}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black/90"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Services list */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:pl-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-3 sm:gap-4 group cursor-pointer p-2 sm:p-3 rounded-lg hover:bg-border transition-all"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black shadow-2xl flex items-center justify-center flex-shrink-0">
                <div className="text-white scale-75 sm:scale-100">
                  {service.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-medium group-hover:translate-x-1 transition-transform">
                  {service.title}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 group-hover:translate-x-1 transition-transform">
                  {service.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
