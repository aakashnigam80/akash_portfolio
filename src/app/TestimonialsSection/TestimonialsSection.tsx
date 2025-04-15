import Image from "next/image";

export const TestimonialsSection = () => {
  return (
    <div className="border-x border-border max-w-6xl mx-auto py-24">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-2xl font-semibold leading-tight mb-8">
          &ldquo;Working with Akash felt like having a seasoned development
          partner who truly understood our vision for Layup Labs and brought it
          to life in ways we hadn&apos;t even imagined.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 relative rounded-full overflow-hidden">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQFtvyYy_UdW7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689006445726?e=1750291200&v=beta&t=zBSGl0ifK8VsEjVGiu28qXDWd0XXupkHpTwdLeRVBsQ"
              alt="Ryan Xue"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-medium">Ryan Xue</div>
            <div className="text-muted-foreground">
              Co-founder of Layup Labs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
