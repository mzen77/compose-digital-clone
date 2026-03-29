"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const services = [
  {
    title: "Branding and Strategy",
    image: "/images/service-branding.jpg",
    description:
      "Our Branding and Strategy services are designed to help you build a strong, cohesive brand identity and create effective strategies to connect with your target audience.",
  },
  {
    title: "Analytics and Reporting",
    image: "/images/service-analytics.jpg",
    description:
      "Our Analytics and Reporting services help you make data-driven decisions by providing in-depth insights into your website's performance, user behavior, and overall business metrics.",
  },
  {
    title: "Website Development",
    image: "/images/service-webdev.jpg",
    description:
      "Our Website Development services are designed to create fast, responsive, and user-friendly websites that are optimized for both performance and conversion.",
  },
  {
    title: "Email Marketing",
    image: "/images/service-email.jpg",
    description:
      "Our Email Marketing services are crafted to help you nurture relationships with your audience, promote your products or services, and drive conversions.",
  },
  {
    title: "Pay-Per-Click Advertising",
    image: "/images/service-ppc.jpg",
    description:
      "Our Pay-Per-Click (PPC) Advertising services are designed to drive immediate traffic to your website and increase conversions through targeted ad campaigns.",
  },
  {
    title: "Content Marketing",
    image: "/images/service-content.jpg",
    description:
      "Our Content Marketing services are designed to create compelling content that resonates with your audience and drives long-term engagement.",
  },
  {
    title: "Social Media Marketing",
    image: "/images/service-social.jpg",
    description:
      "Our Social Media Marketing services are designed to build brand awareness, foster engagement, and drive conversions across key platforms.",
  },
  {
    title: "Search Engine Optimization",
    image: "/images/service-seo.jpg",
    description:
      "Our SEO service is crafted to improve your website's search engine rankings, increase organic traffic, and help your brand gain visibility in competitive online markets.",
  },
] as const;

const processSteps = [
  "Discovery",
  "Planning",
  "Execution",
  "Optimization",
  "Reporting",
] as const;

const progressMarkers = ["0%", "25%", "50%", "75%", "100%"] as const;

const testimonials = [
  {
    name: "Daniel Smith",
    role: "CEO, EcoSolutions",
    avatar: "/images/testimonial-daniel.png",
    quote:
      "The team's strategic approach has transformed EcoSolutions' digital footprint. Their data-driven campaigns have significantly increased our brand awareness and customer engagement across all channels.",
  },
  {
    name: "Rachel Adams",
    role: "Founder, Travelista",
    avatar: "/images/testimonial-rachel.png",
    quote:
      "The team's strategic approach has transformed Travelista's online presence. From content to social media, they crafted a powerful brand that travelers genuinely connect with. Our website traffic and community growth have been remarkable.",
  },
  {
    name: "John Martinez",
    role: "Operations Manager, FitLife Studios",
    avatar: "/images/testimonial-john.png",
    quote:
      "Working with Compose has been a game-changer for FitLife Studios. Their targeted campaigns and creative content strategy helped us grow our membership base and build a loyal community of fitness enthusiasts.",
  },
] as const;

export default function ServicesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const doubledSteps = [...processSteps, ...processSteps];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex justify-center px-10 pt-[50px] pb-[100px] max-md:px-5 max-md:pt-8 max-md:pb-16">
        <AnimateOnScroll>
          <div className="max-w-[1360px] w-full flex flex-col gap-[30px]">
            <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
              OUR SERVICES
            </p>
            <h1 className="text-[42px] font-medium leading-[1.2] text-[#101010] max-w-[700px] max-md:text-[28px]">
              Empowering Brands with Digital Marketing That Delivers
            </h1>
            <p className="text-base leading-[1.5] text-[#595959] max-w-[600px]">
              At Compose, we offer a full suite of digital marketing services
              designed to grow your brand, engage your audience, and deliver
              measurable results. Every service we provide is tailored to meet the
              unique needs of your business, with a focus on strategy, creativity,
              and impact.
            </p>

            {/* Social icons + Scroll to Explore */}
            <div className="flex items-center justify-between pt-4 border-t border-[#e5e5e5]">
              <div className="flex items-center gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-[#e5e5e5]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <a
                href="#services-grid"
                className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010] hover:underline flex items-center gap-2"
              >
                Scroll to Explore
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Services Grid Section */}
      <section
        id="services-grid"
        className="w-full flex justify-center px-10 py-[100px] max-md:px-5 max-md:py-16"
      >
        <div className="max-w-[1360px] w-full flex flex-col gap-[60px]">
          {/* Section header */}
          <AnimateOnScroll>
            <div className="flex flex-col gap-[20px] max-w-[600px]">
              <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
                Tailored Digital Strategies for Growth and Impact
              </p>
              <p className="text-base leading-[1.5] text-[#595959]">
                At Compose, our services are crafted to amplify your brand, engage
                your audience, and drive measurable results. From impactful content
                to SEO that enhances visibility, we&apos;re here to elevate your
                digital presence.
              </p>
            </div>
          </AnimateOnScroll>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-[60px]">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i % 2 === 0 ? 0 : 100}>
              <div className="flex flex-col gap-5">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[24px] font-medium text-[#101010]">
                  {service.title}
                </h3>
                <p className="text-base leading-[1.5] text-[#595959]">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010] hover:underline flex items-center gap-2 w-fit"
                >
                  More Details
                  <ArrowRightIcon className="w-3 h-3" />
                </a>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section — "How we work?" */}
      <section className="w-full flex flex-col items-center py-[100px] overflow-hidden max-md:py-16">
        <AnimateOnScroll className="max-w-[1360px] w-full px-10 flex flex-col gap-[30px] max-md:px-5">
          <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
            HOW WE WORK?
          </p>
          <h2 className="text-[42px] font-medium leading-[1.2] text-[#101010] max-w-[600px] max-md:text-[28px]">
            Crafting Success, Step by Step
          </h2>
          <p className="text-base leading-[1.5] text-[#595959] max-w-[600px]">
            At Compose, our process combines strategy, creativity, and data
            insights to drive impactful results. From discovery to reporting, we
            focus on transparent, collaborative steps that fuel growth for your
            brand.
          </p>
        </AnimateOnScroll>

        {/* Marquee */}
        <div className="w-full overflow-hidden mt-[60px]">
          <div className="flex gap-10 animate-marquee-left-slow">
            {doubledSteps.map((step, i) => (
              <span
                key={`${step}-${i}`}
                className="text-[72px] font-medium text-[#101010] whitespace-nowrap opacity-20 max-md:text-[40px]"
              >
                {step}
              </span>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <div className="max-w-[1360px] w-full px-10 mt-[40px] max-md:px-5">
          <div className="flex justify-between items-center border-t border-[#e5e5e5] pt-5">
            {progressMarkers.map((marker) => (
              <span
                key={marker}
                className="text-[13px] font-medium text-[#595959]"
              >
                {marker}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center px-10 py-[100px] bg-[#101010] max-md:px-5 max-md:py-16">
        <AnimateOnScroll>
          <div className="max-w-[1360px] w-full flex flex-col items-center text-center gap-[20px]">
            <h2 className="text-[42px] font-medium leading-[1.2] text-[#fcfcfc] max-md:text-[28px]">
              Get in Touch with Compose
            </h2>
            <p className="text-[24px] font-medium leading-[1.2] text-[#fcfcfc]/70 max-md:text-[18px]">
              Collaboration, Work Enquires or Just Say Hello.
            </p>
            <p className="text-base leading-[1.5] text-[#fcfcfc]/50 max-w-[500px]">
              Contact us today, and let&apos;s start creating the space
              you&apos;ve imagined. We&apos;re here to guide you from design to
              construction.
            </p>
            <a
              href="#"
              className="mt-4 bg-[#fcfcfc] text-[#101010] px-8 py-3.5 rounded-full text-[13px] font-medium uppercase tracking-[0.03em] hover:bg-[#e5e5e5] transition-colors"
            >
              Drop us a line
            </a>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Testimonials Section */}
      <section className="w-full flex justify-center px-10 py-[100px] max-md:px-5 max-md:py-16">
        <div className="max-w-[1360px] w-full flex flex-col gap-[40px]">
          <AnimateOnScroll>
            <div className="flex flex-col gap-[20px]">
              <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
                TESTIMONIALS
              </p>
              <h2 className="text-[42px] font-medium leading-[1.2] text-[#101010] max-md:text-[28px]">
                Hear From Customers
              </h2>
            </div>
          </AnimateOnScroll>

          {/* Testimonial quote */}
          <AnimateOnScroll delay={100}>
            <div className="border-t border-[#e5e5e5] pt-10">
              <p className="text-[24px] font-medium leading-[1.4] text-[#101010] max-w-[900px] max-md:text-[18px]">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>
            </div>
          </AnimateOnScroll>

          {/* Avatar tabs */}
          <AnimateOnScroll delay={200}>
          <div className="flex items-center gap-6 pt-4 max-md:flex-col max-md:items-start max-md:gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                onClick={() => setActiveTestimonial(index)}
                className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${
                  activeTestimonial === index
                    ? "bg-[#101010] text-[#fcfcfc]"
                    : "bg-transparent text-[#101010] border border-[#e5e5e5] hover:bg-[#f5f5f5]"
                }`}
              >
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[14px] font-medium leading-tight">
                    {testimonial.name}
                  </span>
                  <span
                    className={`text-[12px] leading-tight ${
                      activeTestimonial === index
                        ? "text-[#fcfcfc]/60"
                        : "text-[#595959]"
                    }`}
                  >
                    {testimonial.role}
                  </span>
                </div>
              </button>
            ))}
          </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
