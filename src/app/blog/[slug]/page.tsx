import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "the-role-of-prototyping-in-product-design",
    title: "The Role of Prototyping in Product Design",
    category: "Product Design",
    date: "Jun 25, 2024",
    image: "/images/blog-prototyping.jpg",
    excerpt:
      "This iterative process is crucial for addressing potential issues, validating design choices, and ensuring the final product meets user needs effectively.",
    sections: [
      {
        heading: "Transforming Concepts into Tangible Forms",
        body: "Prototyping bridges the gap between abstract ideas and concrete products. By creating physical or digital representations of a concept, designers can visualize how a product will look, feel, and function in real-world scenarios. This tangible approach allows teams to explore possibilities that sketches and wireframes alone cannot convey, making it an indispensable step in the product design journey.",
      },
      {
        heading: "Facilitating User Feedback and Validation",
        body: "One of the most significant advantages of prototyping is the ability to gather early user feedback. By placing a working model in front of real users, designers can observe how people interact with the product, identify pain points, and validate assumptions about user behavior. This feedback loop ensures that the final product is not just functional but genuinely resonates with its intended audience.",
      },
      {
        heading: "Exploring and Refining Design Options",
        body: "Prototyping encourages experimentation by allowing designers to test multiple variations quickly. Whether it is a different layout, interaction pattern, or visual style, prototypes make it possible to compare options side by side and determine which approach best serves the user. This iterative refinement leads to more polished and well-considered design solutions.",
      },
      {
        heading: "Enhancing Communication and Collaboration",
        body: "A prototype serves as a shared reference point for cross-functional teams. Developers, stakeholders, and marketers can all interact with the same artifact, reducing miscommunication and aligning everyone around a common vision. This collaborative dynamic accelerates decision-making and ensures that technical constraints are addressed early in the design process.",
      },
      {
        heading: "Identifying and Addressing Design Flaws",
        body: "Testing a prototype under realistic conditions reveals flaws that might otherwise go unnoticed until after launch. From usability issues to structural weaknesses, early detection saves significant time and resources. By addressing these problems during the design phase, teams can deliver a more robust and reliable product to market.",
      },
      {
        heading: "Conclusion",
        body: "Prototyping is far more than a preliminary step in product design; it is a strategic practice that drives innovation, reduces risk, and centers the development process around real user needs. Teams that embrace prototyping consistently deliver products that are more intuitive, more resilient, and better aligned with the expectations of their audience.",
      },
    ],
  },
  {
    slug: "designing-for-user-experience-key-considerations",
    title: "Designing for User Experience: Key Considerations",
    category: "UX Design",
    date: "Jun 24, 2024",
    image: "/images/blog-ux.jpg",
    excerpt:
      "Methods such as user interviews, surveys, and persona development help in gaining insights into user behaviors and preferences.",
    sections: [
      {
        heading: "Understanding Your Users",
        body: "Effective UX design begins with a deep understanding of who your users are and what they need. Conducting user research through interviews, surveys, and behavioral analysis provides invaluable insights that inform every subsequent design decision. Without this foundation, even the most visually appealing interface risks failing its audience.",
      },
      {
        heading: "Creating Intuitive Navigation",
        body: "Navigation is the backbone of any digital experience. Users should be able to find what they need without confusion or frustration. Clear labeling, consistent patterns, and logical information architecture work together to create pathways that feel natural and effortless to follow.",
      },
      {
        heading: "Prioritizing Accessibility",
        body: "Designing for accessibility ensures that your product serves the widest possible audience, including users with disabilities. Following established guidelines such as WCAG and testing with assistive technologies are essential practices that make your product more inclusive and often improve the experience for all users.",
      },
      {
        heading: "Measuring and Iterating",
        body: "Great UX design is never finished. Tracking key metrics like task completion rates, time on task, and user satisfaction scores reveals where improvements are needed. Combining quantitative data with qualitative feedback creates a continuous improvement cycle that keeps the experience aligned with evolving user expectations.",
      },
    ],
  },
  {
    slug: "the-future-of-product-design-trends-to-watch-in-2024",
    title: "The Future of Product Design: Trends to Watch in 2024",
    category: "Product Design",
    date: "Jun 23, 2024",
    image: "/images/blog-future.jpg",
    excerpt:
      "Designers are increasingly focusing on creating products with minimal environmental impact by using sustainable materials and processes.",
    sections: [
      {
        heading: "AI-Driven Design Tools",
        body: "Artificial intelligence is reshaping the design landscape by automating repetitive tasks and generating creative options at scale. From layout suggestions to color palette generation, AI-powered tools allow designers to focus on strategic thinking and user empathy rather than manual execution.",
      },
      {
        heading: "Sustainable and Ethical Design",
        body: "Consumers are increasingly demanding products that reflect their values. Designers are responding by prioritizing sustainable materials, reducing waste in the production process, and considering the full lifecycle of their products. This shift toward ethical design is not just a trend but a fundamental change in how we approach product creation.",
      },
      {
        heading: "Immersive Experiences with AR and VR",
        body: "Augmented and virtual reality technologies are opening new frontiers for product interaction. From virtual try-ons in retail to immersive training environments, these technologies allow users to engage with products in ways that were previously impossible, creating richer and more memorable experiences.",
      },
    ],
  },
  {
    slug: "10-essential-web-design-principles-for-2024",
    title: "10 Essential Web Design Principles for 2024",
    category: "Web Design",
    date: "Jun 22, 2024",
    image: "/images/blog-webdesign.jpg",
    excerpt:
      "Start by conducting thorough user research to understand what your audience values and how they interact with digital products.",
    sections: [
      {
        heading: "Performance as a Design Priority",
        body: "Page speed and performance are no longer afterthoughts. Users expect near-instant load times, and search engines reward fast sites with better rankings. Optimizing images, minimizing JavaScript, and leveraging modern caching strategies are design decisions that directly impact user retention and conversion rates.",
      },
      {
        heading: "Embracing Minimalist Aesthetics",
        body: "Clean layouts with generous whitespace continue to dominate modern web design. By stripping away unnecessary elements, designers can direct user attention to the content and actions that matter most. Minimalism is not about doing less; it is about being intentional with every element on the page.",
      },
      {
        heading: "Typography as a Design System",
        body: "Typography has evolved from a stylistic choice to a structural design system. Thoughtful type hierarchies, variable fonts, and responsive sizing create visual rhythm and improve readability across devices. A strong typographic foundation elevates the entire design without adding visual complexity.",
      },
      {
        heading: "Designing for Dark Mode",
        body: "Dark mode is no longer a niche preference. Offering a well-designed dark theme reduces eye strain, saves battery on OLED screens, and gives users control over their viewing experience. Designing for both light and dark contexts from the start ensures consistency and avoids costly retrofitting.",
      },
    ],
  },
  {
    slug: "responsive-web-design-best-practices-and-tips",
    title: "Responsive Web Design: Best Practices and Tips",
    category: "Web Design",
    date: "Jun 21, 2024",
    image: "/images/blog-responsive.jpg",
    excerpt:
      "With the proliferation of smartphones, tablets, and other mobile devices, responsive design ensures your site works everywhere.",
    sections: [
      {
        heading: "Mobile-First Development",
        body: "Starting with the smallest screen and progressively enhancing for larger viewports leads to cleaner code and better performance. A mobile-first approach forces designers to prioritize content and functionality, resulting in experiences that are focused and efficient across all devices.",
      },
      {
        heading: "Fluid Grids and Flexible Images",
        body: "Rigid pixel-based layouts break on unfamiliar screen sizes. Using relative units like percentages and viewport-based measurements ensures that layouts adapt smoothly. Similarly, images should scale proportionally within their containers, maintaining visual integrity without causing layout shifts.",
      },
      {
        heading: "Testing Across Real Devices",
        body: "Emulators and browser tools are useful for quick checks, but nothing replaces testing on actual devices. Touch targets, scroll behavior, and font rendering can vary significantly between platforms. A thorough testing strategy that includes real hardware catches issues that simulated environments often miss.",
      },
    ],
  },
];

function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

function getAdjacentPosts(slug: string): { prev: BlogPost; next: BlogPost } {
  const index = blogPosts.findIndex((post) => post.slug === slug);
  const prev = blogPosts[(index - 1 + blogPosts.length) % blogPosts.length];
  const next = blogPosts[(index + 1) % blogPosts.length];
  return { prev, next };
}

function getRelatedPosts(slug: string): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, 3);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} — Compose`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(post.slug);
  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <>
      {/* Title */}
      <section className="w-full flex justify-center px-10 pt-[140px] pb-6 max-md:px-5 max-md:pt-[100px]">
        <h1 className="text-[42px] font-medium leading-[1.2] text-[#101010] text-center max-w-[800px] max-md:text-[28px]">
          {post.title}
        </h1>
      </section>

      {/* Meta Row */}
      <section className="w-full flex justify-center px-10 pb-10 max-md:px-5">
        <div className="flex items-center gap-3 text-[13px]">
          <span className="text-[#595959]">Posted on</span>
          <span className="font-medium text-[#101010]">{post.category}</span>
          <span className="w-[5px] h-[5px] rounded-full bg-[#b3ff00] inline-block" />
          <span className="text-[#595959]">Posted at</span>
          <span className="font-medium text-[#101010]">{post.date}</span>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full flex justify-center px-10 pb-16 max-md:px-5">
        <div className="relative w-full max-w-[1000px] aspect-[16/9] overflow-hidden rounded-[10px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1000px"
            priority
          />
        </div>
      </section>

      {/* Body Content */}
      <section className="w-full flex justify-center px-10 pb-20 max-md:px-5">
        <div className="max-w-[800px] w-full flex flex-col gap-8">
          {/* Intro paragraph */}
          <p className="text-base leading-[1.7] text-[#595959]">
            {post.excerpt}
          </p>

          {/* Sections */}
          {post.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-4">
              <h2 className="text-[24px] font-medium leading-[1.3] text-[#101010]">
                {section.heading}
              </h2>
              <p className="text-base leading-[1.7] text-[#595959]">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="w-full flex justify-center px-10 pb-20 max-md:px-5">
        <div className="max-w-[800px] w-full border-t border-[#e5e5e5] pt-10 flex justify-between gap-8 max-md:flex-col">
          {/* Prev */}
          <Link
            href={`/blog/${prev.slug}`}
            className="flex flex-col gap-2 group max-w-[360px]"
          >
            <span className="text-[13px] uppercase tracking-[0.05em] text-[#595959]">
              Prev
            </span>
            <span className="text-[13px] text-[#595959]">{prev.date}</span>
            <span className="text-base font-medium text-[#101010] group-hover:opacity-70 transition-opacity">
              {prev.title}
            </span>
          </Link>

          {/* Next */}
          <Link
            href={`/blog/${next.slug}`}
            className="flex flex-col gap-2 group max-w-[360px] text-right max-md:text-left"
          >
            <span className="text-[13px] uppercase tracking-[0.05em] text-[#595959]">
              Next
            </span>
            <span className="text-[13px] text-[#595959]">{next.date}</span>
            <span className="text-base font-medium text-[#101010] group-hover:opacity-70 transition-opacity">
              {next.title}
            </span>
          </Link>
        </div>
      </section>

      {/* More Blog Section */}
      <section className="w-full flex justify-center px-10 pb-[100px] max-md:px-5 max-md:pb-[60px]">
        <div className="max-w-[1360px] w-full flex flex-col gap-10">
          <h2 className="text-[42px] font-medium leading-[1.2] text-[#101010] max-md:text-[28px]">
            More Blog
          </h2>

          <div className="grid grid-cols-3 gap-[20px] max-lg:grid-cols-2 max-md:grid-cols-1">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="flex flex-col group"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[10px]">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="pt-5 flex flex-col gap-2">
                  <span className="text-[13px] text-[#595959]">
                    {related.date}
                  </span>
                  <h3 className="text-[24px] font-medium leading-[1.2] text-[#101010]">
                    {related.title}
                  </h3>
                  <p className="text-[14px] leading-[1.5] text-[#595959] line-clamp-2">
                    {related.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
