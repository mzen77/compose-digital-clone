import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About — Compose",
  description:
    "At Compose, we blend creativity, data, and strategy to elevate brands in the digital space.",
};

const socialPlaceholders = [0, 1, 2, 3] as const;

const stats = [
  { value: "260+", label: "Campaigns Launched" },
  { value: "5x", label: "Client ROI" },
  { value: "10M+", label: "Total Audience Reach" },
  { value: "98%", label: "Client Satisfaction" },
] as const;

const teamMembers = [
  { name: "Jane Mills", role: "Developer", image: "/images/team-jane-mills.jpg" },
  { name: "Julio Bricks", role: "Designer", image: "/images/team-julio-bricks.jpg" },
  { name: "Klara Klarsson", role: "Marketing", image: "/images/team-klara.jpg" },
  { name: "Ichiro Wang", role: "Art Direction", image: "/images/team-ichiro.jpg" },
  { name: "Jane Jimenez", role: "Sales Person", image: "/images/team-jane-jimenez.jpg" },
  { name: "Simon Fay", role: "Developer", image: "/images/team-simon.jpg" },
] as const;

const openPositions = [
  {
    title: "Senior Software Developer",
    type: "Remote",
    description:
      "Join our dynamic tech team, leading the development of innovative software solutions. Bring your expertise to the forefront of digital transformation.",
  },
  {
    title: "Digital Marketing Manager",
    type: "Full Time",
    description:
      "Shape the online presence of our brand. Lead strategic digital marketing initiatives and drive impactful campaigns to engage and grow our audience.",
  },
  {
    title: "UX/UI Designer",
    type: "Remote",
    description:
      "Elevate user experiences through intuitive and visually appealing designs. Collaborate with cross-functional teams to create seamless digital interactions.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex justify-center items-center px-10 pt-[140px] pb-[80px] max-md:px-5 max-md:pt-[100px] max-md:pb-[60px]">
        <div className="max-w-[1360px] w-full flex flex-col gap-6">
          <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
            ABOUT US
          </p>
          <h1 className="text-[42px] font-medium leading-[1.2] text-[#101010] max-w-[700px] max-md:text-[28px]">
            Crafting Digital Connections That Drive Growth
          </h1>
          <p className="text-base leading-[1.6] text-[#595959] max-w-[720px]">
            At Compose, we blend creativity, data, and strategy to elevate brands
            in the digital space. Our team of experts is dedicated to building
            engaging, results-driven campaigns that turn brand stories into
            unforgettable experiences.
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
              href="#about-content"
              className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010] hover:opacity-70 transition-opacity"
            >
              Scroll to Explore
            </a>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section
        id="about-content"
        className="w-full flex justify-center items-center px-10 py-[100px] max-md:px-5 max-md:py-16"
      >
        <div className="max-w-[1360px] w-full flex flex-row gap-[50px] max-md:flex-col">
          {/* Left: Text content */}
          <div className="w-1/2 flex flex-col gap-6 justify-center max-md:w-full">
            <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
              WHO WE ARE?
            </p>
            <h2 className="text-[32px] font-medium leading-[1.2] text-[#101010] max-md:text-[24px]">
              We&apos;re a dynamic digital marketing agency committed to making
              your business thrive.
            </h2>
            <p className="text-base leading-[1.6] text-[#595959]">
              Whether you&apos;re a seasoned player in the digital landscape or
              just stepping into it, we have the expertise and strategies to
              propel your brand. At Compose, we are passionate about empowering
              brands to thrive in the digital realm. Founded on the principles of
              creativity and innovation, we understand that every business has a
              unique story to tell.
            </p>
            <div>
              <a
                href="#"
                className="bg-[#101010] text-white px-6 py-3 rounded-full text-[13px] font-medium uppercase tracking-[0.03em] inline-flex items-center gap-2 hover:bg-[#2a2a2a] transition-colors"
              >
                Contact us
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-1/2 max-md:w-full">
            <div className="relative w-full aspect-[3/4] rounded-[10px] overflow-hidden">
              <Image
                src="/images/about-hero.jpg"
                alt="Creative team collaborating on digital marketing strategies"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Mission Section */}
      <section className="relative w-full py-[100px] overflow-hidden flex justify-center items-center max-md:py-16">
        {/* Background Image */}
        <Image
          src="/images/about-quote-bg.jpg"
          alt=""
          fill
          className="absolute inset-0 object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-[1360px] w-full px-10 flex flex-row gap-[50px] items-center max-md:flex-col max-md:px-5">
          {/* Portrait */}
          <div className="w-[280px] flex-shrink-0 max-md:w-[200px]">
            <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden">
              <Image
                src="/images/about-quote-portrait.jpg"
                alt="Davide Gotlieb, Founder of Compose"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </div>

          {/* Quote text */}
          <div className="flex flex-col gap-6">
            <p className="text-[24px] font-medium leading-[1.3] text-[#fcfcfc] max-md:text-[18px]">
              &ldquo;Our values are simple: put the client first, embrace
              creativity, and never stop innovating. We believe that great
              marketing is built on trust, transparency, and a relentless pursuit
              of excellence. Every campaign we create is rooted in data-driven
              insights and a genuine passion for helping brands succeed.&rdquo;
            </p>
            <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#fcfcfc]">
              — Davide Gotlieb, Founder of Compose
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full flex justify-center items-center px-10 py-[100px] max-md:px-5 max-md:py-16">
        <div className="max-w-[1360px] w-full">
          <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 text-center border border-[#e5e5e5] rounded-[10px] p-8"
              >
                <span className="text-[48px] font-medium leading-none text-[#101010] max-md:text-[36px]">
                  {stat.value}
                </span>
                <span className="text-[14px] text-[#595959]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full flex justify-center items-center px-10 py-[100px] max-md:px-5 max-md:py-16">
        <div className="max-w-[1360px] w-full flex flex-col gap-[50px]">
          {/* Header */}
          <div className="flex flex-col gap-6 max-w-[720px]">
            <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
              OUR TEAM
            </p>
            <h2 className="text-[42px] font-medium leading-[1.2] text-[#101010] max-md:text-[28px]">
              Crafting Digital Success with Passion &amp; Expertise
            </h2>
            <p className="text-base leading-[1.6] text-[#595959]">
              Our team is a diverse group of strategists, creatives, developers,
              and marketers who share a common goal: delivering exceptional
              results for our clients. Each member brings a unique perspective and
              skill set to the table.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col gap-4">
                <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-medium text-[#101010]">
                    {member.name}
                  </span>
                  <span className="text-[14px] text-[#595959]">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="w-full flex justify-center items-center px-10 py-[100px] max-md:px-5 max-md:py-16">
        <div className="max-w-[1360px] w-full flex flex-col gap-[50px]">
          <h2 className="text-[42px] font-medium leading-[1.2] text-[#101010] max-md:text-[28px]">
            Open Positions
          </h2>

          {/* Job Listings */}
          <div className="flex flex-col divide-y divide-[#e5e5e5] border-t border-b border-[#e5e5e5]">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="flex flex-row items-start justify-between py-8 gap-8 max-md:flex-col max-md:gap-4"
              >
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[20px] font-medium text-[#101010]">
                      {position.title}
                    </h3>
                    <span className="text-[12px] font-medium uppercase tracking-[0.03em] text-[#595959] border border-[#e5e5e5] rounded-full px-3 py-1">
                      {position.type}
                    </span>
                  </div>
                  <p className="text-base leading-[1.6] text-[#595959] max-w-[600px]">
                    {position.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010] hover:opacity-70 transition-opacity flex items-center gap-2 flex-shrink-0"
                >
                  More Details
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* See all positions link */}
          <div className="flex justify-center">
            <a
              href="#"
              className="bg-[#101010] text-white px-8 py-3 rounded-full text-[14px] font-medium hover:bg-[#2a2a2a] transition-colors"
            >
              See all positions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
