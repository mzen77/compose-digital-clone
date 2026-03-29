import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { QuotesSection } from "@/components/QuotesSection";
import ServicesSection from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";
import { FreeCallButton } from "@/components/FreeCallButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <QuotesSection />
        <ServicesSection />
        <ProjectsSection />
        <BlogSection />
      </main>
      <FooterSection />
      <FreeCallButton />
    </>
  );
}
