"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRightIcon } from "./icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center items-start pt-5">
      <div className="max-w-[1360px] w-full px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <Image
            src="/images/logo.svg"
            alt="Compose"
            width={127}
            height={40}
            priority
          />
        </a>

        {/* Desktop pill nav */}
        <nav className="bg-nav-bg rounded-full p-1.5 hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-[13px] font-medium uppercase tracking-[0.03em] text-text-primary transition-colors duration-200",
                isActive(link.href)
                  ? "bg-nav-active"
                  : "bg-transparent hover:bg-white/50"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop action area */}
        <div className="hidden md:flex items-center gap-1.5">
          <a
            href="/contact"
            className="px-[18px] py-2.5 rounded-full border border-border-light text-sm font-medium text-text-primary hover:bg-black/5 transition-colors duration-200"
          >
            Contact Us
          </a>
          <a
            href="/contact"
            className="w-10 h-10 rounded-full bg-nav-active flex items-center justify-center transition-colors duration-200 hover:bg-[#a3e600]"
          >
            <ArrowUpRightIcon className="w-4 h-4 text-text-primary" />
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={cn(
              "block w-5 h-0.5 bg-text-primary transition-all duration-200",
              mobileMenuOpen && "translate-y-[4px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block w-5 h-0.5 bg-text-primary transition-all duration-200",
              mobileMenuOpen && "-translate-y-[4px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile dropdown overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-page border-b border-border-light shadow-lg">
          <nav className="flex flex-col px-10 py-6 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium text-text-primary transition-colors duration-200",
                  isActive(link.href)
                    ? "bg-nav-active"
                    : "bg-transparent hover:bg-black/5"
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border-light flex items-center gap-2">
              <a
                href="/contact"
                className="flex-1 text-center px-[18px] py-2.5 rounded-full border border-border-light text-sm font-medium text-text-primary hover:bg-black/5 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="/contact"
                className="w-10 h-10 rounded-full bg-nav-active flex items-center justify-center shrink-0 transition-colors duration-200 hover:bg-[#a3e600]"
              >
                <ArrowUpRightIcon className="w-4 h-4 text-text-primary" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
