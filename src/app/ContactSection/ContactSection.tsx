import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      description: "Get in touch via email",
      action: "Send email",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      description: "Call for quick inquiries",
      action: "Call now",
      link: "tel:+1234567890",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      description: "Based in San Francisco, CA",
      action: "View map",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div className="border-x border-border max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 md:px-12 md:py-16 lg:px-14 lg:py-24">
        {/* Left side - Heading */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="relative">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-4xl lg:text-5xl leading-tight font-semibold text-muted-foreground">
                  Let&apos;s work
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-4xl sm:text-4xl lg:text-5xl leading-tight font-semibold text-black">
                  together
                </span>
              </div>
            </div>
            <div className="absolute -bottom-2 left-0 w-48 h-1">
              <div className="w-full h-full bg-gradient-to-r from-black/20 via-black to-black/20 rounded-full"></div>
            </div>
          </h2>
          <p className="text-muted-foreground">
            Ready to start your next project? Get in touch and let&apos;s create
            something amazing together.
          </p>
          <Button className="w-fit rounded-full bg-black text-white hover:bg-gray-900 shadow-md text-sm transition-all duration-300 ease-in-out">
            Schedule a call
          </Button>
        </div>

        {/* Right side - Contact options */}
        <div className="flex flex-col gap-4 md:pl-8">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="flex items-start gap-4 group cursor-pointer p-3 rounded-lg hover:bg-border transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-black shadow-2xl flex items-center justify-center flex-shrink-0">
                <div className="text-white">{info.icon}</div>
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-xl font-medium group-hover:translate-x-1 transition-transform">
                  {info.title}
                </span>
                <span className="text-sm text-muted-foreground mt-1 group-hover:translate-x-1 transition-transform">
                  {info.description}
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
