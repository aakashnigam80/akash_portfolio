import Link from "next/link";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { WordRotate } from "@/components/magicui/word-rotate";
import { SchedulingButton } from "@/components/SchedulingButton";

export function FooterSection() {
  return (
    <footer className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-14">
        {/* Header Text */}
        <div className="mb-24">
          <h2 className="text-4xl flex items-center gap-4 md:text-6xl lg:text-7xl font-normal mb-2">
            Lets
            <WordRotate words={["design", "build", "create"]} />
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal text-muted-foreground">
            incredible work together.
          </h2>
        </div>

        {/* Contact and Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Email */}
          <div>
            <h3 className="text-muted-foreground mb-2">Email</h3>
            <Link
              href="mailto:akashnigam0911@gmail.com"
              className="text-xl hover:text-gray-300 transition-colors"
            >
              akashnigam0911@gmail.com
            </Link>
          </div>

          {/* Call Me */}
          <div>
            <h3 className="text-muted-foreground mb-2">Call Me</h3>
            <SchedulingButton
              size="sm"
              variant="outline"
              className="w-fit rounded-full bg-white text-black hover:bg-gray-200 shadow-md text-sm transition-all duration-300 ease-in-out"
              showProfileImage={false}
              showPlusYou={false}
              text="Book Now"
            />
          </div>

          {/* Social */}
          <div>
            <h3 className="text-muted-foreground mb-2">Social</h3>
            <div className="flex gap-4">
              <Link
                href="https://x.com/akashnigam0911"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-black" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/akash-nigam-29590b207/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-black" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/aakashnigam80"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors"
                aria-label="Github"
              >
                <Github className="w-5 h-5 text-black" />
                <span className="sr-only">Github</span>
              </Link>
              <Link
                href="https://www.instagram.com/akash.nigam09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-black" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center border-t border-gray-800 justify-center pt-8">
          <h1 className="text-[12rem] md:text-[14rem] font-bold tracking-tighter leading-none">
            AKASH<span className="text-white">.</span>
          </h1>
        </div>
      </div>
    </footer>
  );
}
