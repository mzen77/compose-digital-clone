import Image from "next/image";
import { ArrowRightIcon } from "./icons";

export default function AboutSection() {
  return (
    <section className="w-full flex justify-center items-center px-10 py-[100px] overflow-hidden max-md:px-5 max-md:py-16">
      <div className="max-w-[1360px] w-full flex flex-col gap-[50px]">
        {/* Row 1: Title + Description */}
        <div className="flex flex-row gap-[50px] w-full max-md:flex-col max-md:gap-6">
          {/* Left: Title */}
          <div className="w-1/2 flex flex-col gap-2.5 max-md:w-full">
            <p className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010]">
              Who are we?
            </p>
            <h2 className="text-[32px] font-medium leading-[1.2] text-[#101010]">
              We&apos;re a dynamic digital marketing agency committed to making
              your business thrive.
            </h2>
          </div>

          {/* Right: Description */}
          <div className="w-1/2 flex flex-col justify-end max-md:w-full">
            <p className="text-base leading-[1.4] text-[#595959]">
              Whether you&apos;re a seasoned player in the digital landscape or
              just stepping into it, we have the expertise and strategies to
              propel your brand. At Compose, we are passionate about empowering
              brands to thrive in the digital realm.
            </p>
          </div>
        </div>

        {/* Row 2: Two images side-by-side */}
        <div className="flex flex-row gap-[20px] w-full max-md:flex-col">
          <div className="w-1/2 max-md:w-full">
            <div className="relative w-full aspect-[665/500] rounded-[10px] overflow-hidden">
              <Image
                src="/images/about-landscape.jpg"
                alt="Team working together in a collaborative environment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-1/2 max-md:w-full">
            <div className="relative w-full aspect-[665/500] rounded-[10px] overflow-hidden">
              <Image
                src="/images/about-portrait.jpg"
                alt="Creative workspace and design process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Body text + "More about us" link */}
        <div className="flex flex-row gap-[50px] w-full max-md:flex-col max-md:gap-6">
          <div className="w-1/2 flex flex-col gap-4 max-md:w-full">
            <p className="text-base leading-[1.4] text-[#595959]">
              Founded on the principles of creativity and innovation, we
              understand that every business has a unique story to tell.
            </p>
            <a
              href="/about"
              className="text-[13px] font-medium uppercase tracking-[0.03em] text-[#101010] hover:underline flex items-center gap-2 mt-2"
            >
              More about us
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="w-1/2 flex flex-col gap-4 max-md:w-full">
            <p className="text-base leading-[1.4] text-[#595959]">
              Our mission is to craft compelling narratives and strategies that
              resonate with your audience and elevate your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
