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
    <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-36 pt-32 pb-12 border-x border-border ">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-xl sm:text-2xl font-medium tracking-tight mb-12">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 relative rounded-full overflow-hidden">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-medium">{author.name}</div>
            <div className="text-muted-foreground">{author.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTestimonial;
