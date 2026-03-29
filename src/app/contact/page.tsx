"use client";

import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const SERVICES = [
  "Branding and Strategy",
  "Analytics and Reporting",
  "Website Development",
  "Email Marketing",
  "Pay-Per-Click Advertising",
  "Content Marketing",
  "Social Media Marketing",
  "Search Engine Optimization",
] as const;

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set()
  );

  function toggleService(service: string) {
    setSelectedServices((prev) => {
      const next = new Set(prev);
      if (next.has(service)) {
        next.delete(service);
      } else {
        next.add(service);
      }
      return next;
    });
  }

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[800px]">
        {/* Heading area */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h1 className="text-[42px] font-medium leading-tight text-text-primary">
              Get in touch.
              <br />
              Stay connected fast.
            </h1>
            <p className="mx-auto mt-6 max-w-[600px] text-base text-text-secondary">
              Before we begin, we&apos;d like to gain a deeper understanding of
              your needs. We&apos;ll review your application and arrange a free
              consultation to provide an estimate.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Contact Form */}
        <AnimateOnScroll delay={150}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* Row 1: First Name + Last Name */}
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border-b border-border-light bg-transparent py-4 text-base text-text-primary placeholder:text-text-muted focus:border-[#101010] focus:outline-none transition"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border-b border-border-light bg-transparent py-4 text-base text-text-primary placeholder:text-text-muted focus:border-[#101010] focus:outline-none transition sm:border-l sm:pl-6"
            />
          </div>

          {/* Row 2: Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border-b border-border-light bg-transparent py-4 text-base text-text-primary placeholder:text-text-muted focus:border-[#101010] focus:outline-none transition"
          />

          {/* Row 3: Phone Number */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border-b border-border-light bg-transparent py-4 text-base text-text-primary placeholder:text-text-muted focus:border-[#101010] focus:outline-none transition"
          />

          {/* Row 4: Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full resize-none border-b border-border-light bg-transparent py-4 text-base text-text-primary placeholder:text-text-muted focus:border-[#101010] focus:outline-none transition"
          />

          {/* Services checkboxes */}
          <div className="mt-10">
            <p className="mb-6 font-medium text-text-primary">Services</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <label
                  key={service}
                  className="flex cursor-pointer items-center gap-3 text-base text-text-primary"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.has(service)}
                    onChange={() => toggleService(service)}
                    className="h-5 w-5 appearance-none rounded-[4px] border border-border-light bg-transparent checked:border-transparent checked:bg-[#b3ff00] relative
                      after:content-[''] after:absolute after:left-[6px] after:top-[2px] after:h-[10px] after:w-[5px]
                      after:border-r-2 after:border-b-2 after:border-[#101010] after:rotate-45
                      after:opacity-0 checked:after:opacity-100 transition cursor-pointer"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="mt-12 w-full rounded-full bg-[#101010] py-4 text-base font-medium uppercase tracking-widest text-white transition hover:bg-[#2a2a2a]"
          >
            Send message
          </button>
        </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
