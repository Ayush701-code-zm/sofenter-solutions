import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ExpertiseSection from "@/components/expertise-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <HeroSection />
        <CTASection />
        <ServicesSection />
        <ExpertiseSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
}
