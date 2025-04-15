import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Why Product Thinking is the Secret to Great UX",
    date: "Aug 13, 2024",
    author: "Akash Nigam",
    image: "/images/Blog1.png",
    href: "/blog/product-thinking-secret-to-great-ux",
  },
  {
    id: 2,
    title: "How Airbnb Became a Leader in UX Design",
    date: "Aug 12, 2024",
    author: "Akash Nigam",
    image: "/images/Blog2.png",
    href: "/blog/airbnb-leader-ux-design",
  },
  {
    id: 3,
    title: "UI/UX Design with AI: The Future is Now (And It's Pretty Cool)",
    date: "Aug 11, 2024",
    author: "Akash Nigam",
    image: "/images/Blog3.png",
    href: "/blog/ui-ux-design-with-ai",
  },
];

export function BlogSection() {
  return (
    <div id="blog" className="border-x border-border max-w-6xl mx-auto">
      <div className="px-6 py-12 md:px-12 md:py-16 lg:px-14">
        <div className="mb-12">
          <h2 className="text-2xl md:text-5xl font-normal text-muted-foreground mb-2">
            From my blog,
          </h2>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-5xl font-bold">design insights.</h2>
            <Link
              href="/blog"
              className="text-base hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              View All <span className="text-lg">↗</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="group rounded-2xl overflow-hidden bg-white shadow-xs border-border border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] relative bg-[#E8EFF3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                  <time>{post.date}</time>
                  <span className="mx-2">·</span>
                  <span>By {post.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
