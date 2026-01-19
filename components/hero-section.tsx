"use client";

import Image from "next/image";
import FadeInSection from "./fade-in-section";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/hero5.png"
            alt="Professional team collaborating on business solutions with data visualizations"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
      </div>

      <FadeInSection className="relative z-20 pt-48 px-[4.5rem] md:px-[8vw] py-32 w-full">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="font-['Inter'] text-[4rem] md:text-[6rem] font-bold tracking-[-0.06em] mb-8 text-white leading-[1.1]">
            Build the Future with{" "}
            <span className="text-[#FFD700]">
              Sofenter
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-white text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl">
            To gain a competitive edge in our software product engineering
            services in India, we develop custom web and mobile applications.
            Our top app developers ensure a blend of user-centricity,
            innovation, and developmental excellence.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
