"use client";

import Image from "next/image";

const services1 = [
  "Branding and Strategy",
  "Analytics and Reporting",
  "Website Development",
  "Email Marketing",
];

const services2 = [
  "Pay-Per-Click Advertising",
  "Content Marketing",
  "Social Media Marketing",
  "Search Engine Optimization",
];

function MarqueeRow({
  services,
  direction,
  bgClass,
  textClass,
  dotClass,
}: {
  services: string[];
  direction: "left" | "right";
  bgClass: string;
  textClass: string;
  dotClass: string;
}) {
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className={`${bgClass} py-8 overflow-hidden`}>
      <div
        className={`flex gap-8 ${animClass} whitespace-nowrap`}
      >
        {[0, 1].map((copy) =>
          services.map((service, i) => (
            <span
              key={`${copy}-${i}`}
              className={`text-[54px] max-md:text-[32px] font-medium ${textClass} flex items-center gap-8`}
            >
              {service}
              <span className={`text-[54px] max-md:text-[32px] ${dotClass}`}>
                &middot;
              </span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default function FooterSection() {
  return (
    <footer className="w-full flex flex-col">
      {/* Part 1: Text Ticker Marquee */}
      <div className="w-full overflow-hidden">
        {/* Row 1: Dark background, scrolling left */}
        <MarqueeRow
          services={services1}
          direction="left"
          bgClass="bg-[#101010]"
          textClass="text-white"
          dotClass="text-white/30"
        />

        {/* Row 2: Light background, scrolling right */}
        <MarqueeRow
          services={services2}
          direction="right"
          bgClass="bg-[#fcfcfc]"
          textClass="text-[#101010]"
          dotClass="text-[#101010]/30"
        />
      </div>

      {/* Part 2: Main Footer */}
      <div className="w-full bg-[#d9d9d9] flex justify-center">
        <div className="max-w-[1360px] w-full px-10 py-[80px] flex flex-col gap-[60px] max-md:px-5 max-md:py-[50px] max-md:gap-10">
          {/* CTA Area */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-[20px] font-medium uppercase tracking-[-0.02em] text-[#101010]">
                TELL US YOUR NEW IDEAS
              </h2>
              <div className="w-3 h-3 rounded-full bg-[#b3ff00]" />
            </div>
            <p className="text-base text-black">
              Optimize your success with our ROI-driven digital marketing
              agency.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-black/10" />

          {/* Footer Links Grid */}
          <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2">
            {/* Column 1: Logo */}
            <div className="flex flex-col gap-4">
              <Image
                src="/images/logo.svg"
                width={127}
                height={40}
                alt="Compose"
              />
            </div>

            {/* Column 2: Links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-[#101010] mb-2">
                Links
              </h4>
              <a href="#" className="text-base text-[#101010] hover:underline">
                Home
              </a>
              <a href="#" className="text-base text-[#101010] hover:underline">
                About
              </a>
              <a href="#" className="text-base text-[#101010] hover:underline">
                Services
              </a>
              <a href="#" className="text-base text-[#101010] hover:underline">
                Projects
              </a>
            </div>

            {/* Column 3: Support */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-[#101010] mb-2">
                Support
              </h4>
              <a href="#" className="text-base text-[#101010] hover:underline">
                Contact
              </a>
              <a href="#" className="text-base text-[#101010] hover:underline">
                Book a Call
              </a>
              <a href="#" className="text-base text-[#101010] hover:underline">
                Blog
              </a>
              <a href="#" className="text-base text-[#101010] hover:underline">
                Careers
              </a>
            </div>

            {/* Column 4: Social Media */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-[#101010] mb-2">
                Social Media
              </h4>
              <a href="#" className="text-base text-[#101010] hover:underline">
                Instagram
              </a>
              <a href="#" className="text-base text-[#101010] hover:underline">
                Twitter
              </a>
              <a href="#" className="text-base text-[#101010] hover:underline">
                Facebook
              </a>
              <a href="#" className="text-base text-[#101010] hover:underline">
                Behance
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-black/10" />

          {/* Bottom Info */}
          <div className="flex justify-between items-start max-md:flex-col max-md:gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#101010]">&copy;</span>
              <span className="text-sm text-[#222]">2026</span>
              <span className="text-sm text-[#101010]">
                All rights reserved.
              </span>
            </div>
            <div className="flex flex-col items-end gap-1 text-sm text-[#101010] max-md:items-start">
              <a href="tel:001265847483" className="hover:underline">
                001 265 847 483
              </a>
              <a href="mailto:say_hi@compose.com" className="hover:underline">
                say_hi@compose.com
              </a>
              <p>
                23 Artist Avenue, Suite 456, Imaginopolis, 98765, Wonderland
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
