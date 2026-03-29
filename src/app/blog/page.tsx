import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog — Compose",
  description:
    "Our team shares valuable insights, expert advice, and practical tips to keep you ahead in the ever-evolving digital landscape.",
};

const blogs = [
  {
    date: "Jun 25, 2024",
    title: "The Role of Prototyping in Product Design",
    excerpt:
      "This iterative process is crucial for addressing potential issues, validating design choices, and",
    image: "/images/blog-prototyping.jpg",
  },
  {
    date: "Jun 24, 2024",
    title: "Designing for User Experience: Key Considerations",
    excerpt:
      "Methods such as user interviews, surveys, and persona development help in gaining insights into user",
    image: "/images/blog-ux.jpg",
  },
  {
    date: "Jun 23, 2024",
    title: "The Future of Product Design: Trends to Watch in 2024",
    excerpt:
      "Designers are increasingly focusing on creating products with minimal environmental impact by using",
    image: "/images/blog-future.jpg",
  },
  {
    date: "Jun 22, 2024",
    title: "10 Essential Web Design Principles for 2024",
    excerpt:
      "Start by conducting thorough user research to understand what your audience values and how they",
    image: "/images/blog-webdesign.jpg",
  },
  {
    date: "Jun 21, 2024",
    title: "Responsive Web Design: Best Practices and Tips",
    excerpt:
      "With the proliferation of smartphones, tablets, and other mobile devices, responsive design ensures",
    image: "/images/blog-responsive.jpg",
  },
] as const;

const socialPlaceholders = [0, 1, 2, 3] as const;

export default function BlogPage() {
  const topRow = blogs.slice(0, 3);
  const bottomRow = blogs.slice(3, 5);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex justify-center items-center px-10 pt-[140px] pb-[80px] max-md:px-5 max-md:pt-[100px] max-md:pb-[60px]">
        <div className="max-w-[1360px] w-full flex flex-col gap-6">
          <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
            INSIGHTS &amp; INNOVATIONS
          </p>
          <h1 className="text-[42px] font-medium leading-[1.2] text-[#101010] max-w-[700px] max-md:text-[28px]">
            Dive into the Latest in Digital Marketing
          </h1>
          <p className="text-base leading-[1.6] text-[#595959] max-w-[720px]">
            Our team shares valuable insights, expert advice, and practical tips
            to keep you ahead in the ever-evolving digital landscape. Whether
            you&apos;re looking to boost your SEO, enhance your brand, or master
            social media, we&apos;ve got you covered!
          </p>

          {/* Social icons row + Scroll to Explore */}
          <div className="flex items-center justify-between mt-4 border-t border-[#e5e5e5] pt-6">
            <div className="flex items-center gap-3">
              {socialPlaceholders.map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border border-[#e5e5e5] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-4 h-4 rounded-full bg-[#d9d9d9]" />
                </div>
              ))}
            </div>
            <a
              href="#blog-grid"
              className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010] hover:opacity-70 transition-opacity"
            >
              Scroll to Explore
            </a>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section
        id="blog-grid"
        className="w-full flex justify-center items-center px-10 pb-[80px] max-md:px-5 max-md:pb-[60px]"
      >
        <div className="max-w-[1360px] w-full flex flex-col gap-[20px]">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-3 gap-[20px] max-lg:grid-cols-2 max-md:grid-cols-1">
            {topRow.map((blog) => (
              <a
                key={blog.title}
                href="#"
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[10px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="pt-5 flex flex-col gap-2">
                  <span className="text-[13px] text-[#595959]">
                    {blog.date}
                  </span>
                  <h2 className="text-[24px] font-medium leading-[1.2] text-[#101010]">
                    {blog.title}
                  </h2>
                  <p className="text-[14px] leading-[1.5] text-[#595959] line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom row: 2 wider cards */}
          <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
            {bottomRow.map((blog) => (
              <a
                key={blog.title}
                href="#"
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[10px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="pt-5 flex flex-col gap-2">
                  <span className="text-[13px] text-[#595959]">
                    {blog.date}
                  </span>
                  <h2 className="text-[24px] font-medium leading-[1.2] text-[#101010]">
                    {blog.title}
                  </h2>
                  <p className="text-[14px] leading-[1.5] text-[#595959] line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-12">
            <button
              type="button"
              className="bg-[#101010] text-white px-8 py-3 rounded-full text-[14px] font-medium hover:bg-[#2a2a2a] transition-colors"
            >
              Load More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
