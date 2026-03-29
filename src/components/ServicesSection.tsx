"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { PlusIcon, MinusIcon, ArrowRightIcon } from "./icons";

const services = [
  {
    title: "Branding and Strategy",
    description:
      "Our Branding and Strategy services are designed to help you build a strong, cohesive brand identity and create effective strategies to connect with your target audience.",
    defaultOpen: true,
  },
  {
    title: "Analytics and Reporting",
    description:
      "We provide comprehensive analytics and reporting services to help you understand your digital performance and make data-driven decisions.",
    defaultOpen: false,
  },
  {
    title: "Website Development",
    description:
      "Our website development services create beautiful, functional websites that deliver exceptional user experiences and drive conversions.",
    defaultOpen: false,
  },
  {
    title: "Email Marketing",
    description:
      "Strategic email marketing campaigns designed to nurture leads, engage customers, and drive measurable results for your business.",
    defaultOpen: false,
  },
  {
    title: "Pay-Per-Click Advertising",
    description:
      "Targeted PPC advertising campaigns that maximize your ad spend and deliver qualified traffic to your business.",
    defaultOpen: false,
  },
  {
    title: "Content Marketing",
    description:
      "Compelling content marketing strategies that tell your brand story and engage your audience across all channels.",
    defaultOpen: false,
  },
];

function AccordionContent({
  isExpanded,
  description,
}: {
  isExpanded: boolean;
  description: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>(isExpanded ? "none" : "0px");

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isExpanded) {
      setMaxHeight(`${el.scrollHeight}px`);
      const timer = setTimeout(() => setMaxHeight("none"), 300);
      return () => clearTimeout(timer);
    } else {
      // Force a reflow so the browser registers the current height before transitioning to 0
      setMaxHeight(`${el.scrollHeight}px`);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setMaxHeight("0px");
        });
      });
    }
  }, [isExpanded]);

  return (
    <div
      ref={contentRef}
      className="overflow-hidden transition-all duration-300"
      style={{ maxHeight }}
    >
      <div className="pb-5 flex flex-col gap-4">
        <p className="text-base leading-[1.4] text-[#595959]">{description}</p>
        <a
          href="#"
          className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010] hover:underline flex items-center gap-2"
        >
          More Details
          <ArrowRightIcon className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="w-full flex justify-center items-center px-10 py-[100px] overflow-hidden">
      <div className="max-w-[1360px] w-full flex flex-col md:flex-row gap-10 md:gap-[100px]">
        {/* Left Column: Content */}
        <div className="w-full md:w-[630px] flex flex-col gap-[30px] shrink-0">
          <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
            Our services
          </p>
          <h2 className="text-[42px] font-medium leading-[1.2] text-[#101010]">
            Empowering Clients to Embrace Transformation
          </h2>
          <p className="text-base leading-[1.4] text-[#595959]">
            We harness creativity and technical expertise to help brands evolve,
            thrive, and redefine their presence both commercially and culturally.
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-base text-[#101010] font-medium">
              Our greatest asset is the trust of our clients.
            </p>
            <p className="text-base text-[#101010] font-medium">
              Our true success is measured by theirs.
            </p>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="flex-1 flex flex-col">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`border-t border-[#e5e5e5] cursor-pointer${
                index === services.length - 1 ? " border-b" : ""
              }`}
            >
              {/* Header row */}
              <div
                className="flex justify-between items-center py-5"
                onClick={() => toggle(index)}
              >
                <h3 className="text-[24px] font-medium text-[#101010]">
                  {service.title}
                </h3>
                {openIndex === index ? (
                  <MinusIcon className="w-5 h-5 text-[#101010]" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-[#101010]" />
                )}
              </div>

              {/* Expandable content */}
              <AccordionContent
                isExpanded={openIndex === index}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
