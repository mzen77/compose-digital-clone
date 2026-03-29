import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const projects = [
  {
    company: "FreshNest",
    year: "2023",
    title: "Digital Strategy for a Leading Home Decor Brand",
    description:
      "The digital strategy this agency provided was exactly what we needed to grow FreshNest's presence and connect with customers who care about sustainability. Their innovative content and campaigns have elevated our brand and significantly boosted our sales!",
    author: "\u2013 Kimberly Rogers",
    role: "Marketing Director, FreshNest",
    image: "/images/project-freshnest.jpg",
  },
  {
    company: "LuxeFit",
    year: "2022",
    title: "Enhancing Brand Engagement for a Premium Fitness Brand",
    description:
      "This agency transformed LuxeFit's digital footprint! The branding and influencer partnerships created an invaluable connection with our audience, and we've seen outstanding growth in our brand recognition and sales. LuxeFit is now a top choice in the luxury fitness market.",
    author: "\u2013 Michael Peterson",
    role: "CMO, LuxeFit",
    image: "/images/project-luxefit.jpg",
  },
  {
    company: "Tech Innovators",
    year: "2023",
    title: "Building a Digital Presence to Drive Product Adoption",
    description:
      "This team brought a fresh perspective to our digital marketing. Their expertise in paid ads and social media made a measurable impact on our user acquisition, and we're thrilled with the results. They've set us up for ongoing success!",
    author: "\u2013 Laura Stevens",
    role: "CEO, Tech Innovators",
    image: "/images/project-techinnovators.jpg",
  },
  {
    company: "GreenLeaf Organics",
    year: "2022",
    title: "Growing Brand Awareness Through Content and Social Media",
    description:
      "Working with this agency has been a game-changer. Their ability to connect us with our audience through content and influencer partnerships has exceeded our expectations. We've seen remarkable growth in brand visibility and customer engagement.",
    author: "\u2013 David Thompson",
    role: "Marketing Manager, GreenLeaf Organics",
    image: "/images/project-greenleaf.jpg",
  },
  {
    company: "Bright Horizons",
    year: "2023",
    title: "Elevating Education Through Digital Marketing",
    description:
      "Their tailored strategies were key in boosting our online presence and connecting with our community. Enrollments have never been higher!",
    author: "\u2013 Jessica Williams",
    role: "Marketing Director, Bright Horizons",
    image: "/images/project-brighthorizons.jpg",
  },
] as const;

export function ProjectsSection() {
  return (
    <section className="w-full flex justify-center items-center px-10 py-[100px] overflow-hidden max-md:px-5 max-md:py-16">
      <div className="max-w-[1360px] w-full flex flex-col gap-[60px]">
        {/* Header */}
        <AnimateOnScroll>
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
              Our Projects
            </p>
            <h2 className="text-[42px] font-medium leading-[1.2] text-[#101010] max-md:text-[28px]">
              Showcasing Our Success Stories
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Project Cards */}
        {projects.map((project, i) => (
          <AnimateOnScroll key={project.company} delay={i * 100}>
            <div
              className={`flex gap-[30px] items-start max-md:flex-col ${
                i % 2 === 1 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Image side */}
              <div className="w-1/2 relative aspect-[688/480] overflow-hidden rounded-[10px] max-md:w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content side */}
              <div className="w-1/2 flex flex-col gap-4 py-6 max-md:w-full max-md:py-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#595959]">
                    {project.company}
                  </span>
                  <span className="text-sm text-[#595959]">{project.year}</span>
                </div>
                <h3 className="text-[24px] font-medium leading-[1.2] text-[#101010] max-md:text-[20px]">
                  {project.title}
                </h3>
                <p className="text-base leading-[1.4] text-[#454545]">
                  {project.description}
                </p>
                <div className="mt-4">
                  <p className="text-sm text-[#101010]">{project.author}</p>
                  <p className="text-sm text-[#595959]">{project.role}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}

        {/* Bottom CTA Bar */}
        <div className="flex items-center justify-between gap-6 py-6 px-8 border-y-2 border-[#b3ff00] rounded-[10px] max-md:flex-col max-md:items-start">
          <p className="text-base leading-[1.4] text-[#595959] max-w-[600px]">
            If you are ready for a change or have an idea you believe in,
            let&apos;s talk about it. Contact us and stand by for a quick reply.
          </p>
          <div className="flex gap-4 shrink-0 max-md:flex-col max-md:w-full">
            <a
              href="#"
              className="bg-[#101010] text-white px-6 py-3 rounded-full text-[13px] font-medium uppercase tracking-[0.03em] hover:bg-[#2a2a2a] transition-colors whitespace-nowrap"
            >
              Get in touch
            </a>
            <a
              href="#"
              className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010] border border-[#e5e5e5] px-6 py-3 rounded-full hover:bg-black/5 transition-colors whitespace-nowrap"
            >
              View more projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
