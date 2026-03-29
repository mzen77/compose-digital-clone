"use client";

import Image from "next/image";
import { StarFilledIcon, ArrowRightIcon, PlusIcon } from "./icons";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const projects = [
  {
    name: "EcoSolutions",
    category: "Content Marketing",
    image: "/images/project-ecosolutions.jpg",
  },
  {
    name: "Travelista",
    category: "Content Marketing",
    image: "/images/project-travelista.jpg",
  },
  {
    name: "FitLife Studios",
    category: "Social Media Marketing",
    image: "/images/project-fitlife.jpg",
  },
  {
    name: "FreshNest",
    category: "Social Media Marketing",
    image: "/images/project-freshnest.jpg",
  },
] as const;

const avatars = [
  "/images/user-avatar-1.svg",
  "/images/user-avatar-2.svg",
  "/images/user-avatar-3.svg",
  "/images/user-avatar-4.svg",
] as const;

function MarqueeCard({
  name,
  category,
  image,
}: {
  name: string;
  category: string;
  image: string;
}) {
  return (
    <div className="w-[450px] h-[370px] flex-shrink-0 flex flex-col max-md:w-[280px] max-md:h-[260px]">
      <div className="relative w-full h-[300px] max-md:h-[210px] rounded-2xl overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="flex justify-between items-center pt-4">
        <h6 className="text-base font-medium text-[#101010]">{name}</h6>
        <span className="text-[13px] text-[#595959] uppercase tracking-[0.03em]">
          {category}
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const doubledProjects = [...projects, ...projects];

  return (
    <section className="w-full flex flex-col items-center px-10 pt-[50px] pb-[100px] overflow-hidden max-md:px-5 max-md:pt-8 max-md:pb-16">
      <div className="max-w-[1360px] w-full flex flex-col gap-[50px]">
        {/* Heading — left-aligned, full width */}
        <AnimateOnScroll>
          <h1 className="text-[72px] font-medium leading-[1.05] tracking-[-0.04em] text-[#101010] max-w-[700px] md:max-lg:text-[56px] max-md:text-[36px]">
            The Digital Marketing Agency For Higher ROI
          </h1>
        </AnimateOnScroll>

        {/* Two-column row: left = rating/avatars, right = description/CTAs */}
        <AnimateOnScroll delay={100}>
          <div className="flex flex-row justify-between items-start w-full max-md:flex-col max-md:gap-10">
            {/* Left: rating + avatars */}
            <div className="flex flex-col gap-4">
              {/* Stars row */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarFilledIcon key={i} className="w-4 h-4 text-[#101010]" />
                ))}
              </div>

              {/* Rating + avatars + trust row */}
              <div className="flex items-center gap-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-medium text-[#101010] leading-none">
                    4.9
                  </span>
                  <span className="text-[14px] text-[#bfbfbf]">/5.0</span>
                </div>

                {/* Avatars */}
                <div className="flex items-center -space-x-2">
                  {avatars.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`User avatar ${i + 1}`}
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full border-2 border-white"
                    />
                  ))}
                  <div className="w-9 h-9 rounded-full bg-[#b3ff00] flex items-center justify-center border-2 border-white ml-0">
                    <PlusIcon className="w-3.5 h-3.5 text-[#101010]" />
                  </div>
                </div>

                <span className="text-[13px] text-[#595959]">
                  Trusted by 500+ Brands Globally
                </span>
              </div>
            </div>

            {/* Right: description + CTAs */}
            <div className="flex flex-col gap-6 max-w-[400px] max-md:max-w-full">
              <p className="text-base text-[#595959] leading-[1.5]">
                Choose success with our digital marketing agency, dedicated to
                delivering higher ROI that propels your business to new heights.
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="bg-[#101010] text-white px-6 py-3 rounded-full text-[13px] font-medium uppercase tracking-[0.03em] flex items-center gap-2 hover:bg-[#2a2a2a] transition-colors"
                >
                  Book a Call
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010] hover:underline flex items-center gap-2"
                >
                  Our Services
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Marquee — full width, outside max-w container */}
      <AnimateOnScroll delay={200}>
        <div className="w-full overflow-hidden mt-[50px]">
          <div className="flex gap-5 animate-marquee-left">
            {doubledProjects.map((project, i) => (
              <MarqueeCard
                key={`${project.name}-${i}`}
                name={project.name}
                category={project.category}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
