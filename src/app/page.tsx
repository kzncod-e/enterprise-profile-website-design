"use client";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MetricsSection } from "@/components/MetricsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <MetricsSection />
        <ServicesSection />
        <AboutSection />
        <CaseStudiesSection />
        <TeamSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </div>
  );
}