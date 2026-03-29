import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { QuotesSection } from "@/components/QuotesSection";
import ServicesSection from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <QuotesSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
    </>
  );
}
