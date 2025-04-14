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
      icon: <Code2 className="w-6 h-6" />,
      title: "Front-End & UI Development",
      description:
        "Next.js, React, Vue, Angular, TypeScript, JavaScript, Shadcn UI, Material UI, Tailwind CSS",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design & Animation",
      description:
        "Figma, Framer, Adobe Illustrator, GSAP, Framer Motion, interactive UI components",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI & API Integration",
      description:
        "Anthropic, OpenAI, DeepSeek models, Backend APIs, Nivo charts, Recharts",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance & Optimization",
      description:
        "Frontend optimization, accessibility, responsive design, scalable solutions",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Product Engineering",
      description:
        "End-to-end development, user-centric design, cross-functional team leadership",
    },
  ];

  return (
    <div className="border-x border-border max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 md:px-12 md:py-16 lg:px-14 lg:py-24">
        {/* Left side - Heading */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-muted-foreground text-4xl sm:text-4xl lg:text-5xl leading-tight font-medium">
            Services that
            <span className="text-4xl text-black ml-3 sm:text-4xl lg:text-5xl font-medium leading-tight">
              supercharge your business.
            </span>
          </h2>

          <div className="">
            <h3 className="text-lg font-medium mb-6">My tech stack</h3>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center relative group"
                >
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className={`object-contain ${
                      tech.name === "Tailwind CSS"
                        ? "[filter:invert(67%)_sepia(72%)_saturate(4032%)_hue-rotate(182deg)_brightness(98%)_contrast(98%)]"
                        : ""
                    }`}
                  />
                  <div className="absolute text-nowrap -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out pointer-events-none shadow-lg">
                    {tech.name}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black/90"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Services list */}
        <div className="flex flex-col gap-4 md:pl-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 group cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <div className="text-white">{service.icon}</div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-medium group-hover:translate-x-1 transition-transform">
                  {service.title}
                </span>
                <span className="text-sm text-muted-foreground mt-1">
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
