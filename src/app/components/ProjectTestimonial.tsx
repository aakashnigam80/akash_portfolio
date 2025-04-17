import Image from "next/image";

interface ProjectTestimonialProps {
  quote: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

const ProjectTestimonial: React.FC<ProjectTestimonialProps> = ({
  quote,
  author,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-36 pt-16 sm:pt-32 pb-8 sm:pb-12 border-x border-border">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight mb-8 sm:mb-12">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 relative rounded-full overflow-hidden">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 40px, 48px"
            />
          </div>
          <div className="text-left">
            <div className="font-medium text-sm sm:text-base">
              {author.name}
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm">
              {author.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTestimonial;
