import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects — Compose",
  description:
    "Explore our portfolio of digital marketing projects. See how we turn ideas into impactful experiences.",
};

const projects = [
  {
    company: "EcoSolutions",
    year: "2023",
    title: "Raising Awareness for a Sustainable Living Brand",
    image: "/images/project-ecosolutions.jpg",
  },
  {
    company: "Travelista",
    year: "2023",
    title: "Building an Inspiring Travel Community Online",
    image: "/images/project-travelista.jpg",
  },
  {
    company: "FitLife Studios",
    year: "2022",
    title: "Transforming Online Engagement for a Fitness Brand",
    image: "/images/project-fitlife.jpg",
  },
  {
    company: "FreshNest",
    year: "2023",
    title: "Digital Strategy for a Leading Home D\u00e9cor Brand",
    image: "/images/project-freshnest.jpg",
  },
  {
    company: "LuxeFit",
    year: "2022",
    title: "Enhancing Brand Engagement for a Premium Fitness Brand",
    image: "/images/project-luxefit.jpg",
  },
] as const;

const socialPlaceholders = [0, 1, 2, 3] as const;

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex justify-center items-center px-10 pt-[140px] pb-[80px] max-md:px-5 max-md:pt-[100px] max-md:pb-[60px]">
        <div className="max-w-[1360px] w-full flex flex-col gap-6">
          <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
            OUR PROJECT
          </p>
          <h1 className="text-[42px] font-medium leading-[1.2] text-[#101010] max-w-[700px] max-md:text-[28px]">
            Crafting Success, One Project at a Time
          </h1>
          <p className="text-base leading-[1.6] text-[#595959] max-w-[720px]">
            At Compose, we&apos;re passionate about transforming brands through
            impactful digital strategies. Our work spans across industries, each
            project uniquely crafted to reflect our client&apos;s vision and
            achieve measurable results. Take a look at some of our proudest
            projects and see how we turn ideas into impactful experiences.
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
              href="#project-grid"
              className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010] hover:opacity-70 transition-opacity"
            >
              Scroll to Explore
            </a>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section
        id="project-grid"
        className="w-full flex justify-center items-center px-10 pb-[80px] max-md:px-5 max-md:pb-[60px]"
      >
        <div className="max-w-[1360px] w-full">
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {projects.map((project) => (
              <article key={project.company} className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#595959]">
                      {project.company}
                    </span>
                    <span className="text-sm text-[#595959]">
                      {project.year}
                    </span>
                  </div>
                  <h2 className="text-[24px] font-medium leading-[1.2] text-[#101010] max-md:text-[20px]">
                    {project.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-16">
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
