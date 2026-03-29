import Image from "next/image";
import { QuotesIcon } from "./icons";

export function QuotesSection() {
  return (
    <section className="relative w-full py-[100px] overflow-hidden flex justify-center items-center max-md:py-16">
      {/* Background Image */}
      <Image
        src="/images/quotes-bg.jpg"
        alt=""
        fill
        className="absolute inset-0 object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-[1360px] w-full px-10 flex flex-col gap-10 max-md:px-6">
        {/* Quote icon */}
        <QuotesIcon className="w-8 h-8 text-[#bfbfbf]" />

        {/* Quote text */}
        <p className="max-w-[800px] text-[24px] font-medium leading-[1.2] text-[#fcfcfc] max-md:text-[18px]">
          Compose was born from a desire to help brands unlock their full
          potential in the digital world. I believe that every business has a
          story worth sharing, and our mission is to bring that story to life
          with creativity, strategy, and impact. Success, to us, isn&apos;t just
          about metrics—it&apos;s about building connections and helping our
          clients grow in ways they never thought possible.
        </p>

        {/* Author */}
        <p className="text-[13px] font-medium uppercase tracking-[0.03em] leading-[1.2] text-[#fcfcfc]">
          — Davide gotlieb, Founder of Compose
        </p>
      </div>
    </section>
  );
}
