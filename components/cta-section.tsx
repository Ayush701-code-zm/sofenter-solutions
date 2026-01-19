"use client";

import Link from "next/link";
import FadeInSection from "./fade-in-section";

const CLIENT_SEGMENTS = [
  {
    id: 1,
    title: "StartUps",
    description: "Launch your startup faster with agile development and expert innovation",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Mid-Sized SME",
    description: "Optimize and streamline your business with scalable software designed for growth",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Enterprises",
    description: "Drive enterprise innovation with robust, scalable, and future-ready software solutions",
    icon: "🏢",
  },
];

export default function CTASection() {
  return (
    <>
      {/* Main CTA Section */}
      <FadeInSection className="mt-32 mx-[2rem] md:mx-[4.5rem]">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          {/* Left Side - Heading */}
          <div className="flex-1">
            <h2 className="font-['Inter'] text-[3rem] md:text-[5rem] font-bold tracking-[-0.06em] text-[#000000] leading-[1.1]">
              Leading Software Development Company in India
            </h2>
          </div>

          {/* Right Side - Description and Button */}
          <div className="flex-1 flex flex-col gap-6">
            <p className="text-[rgba(0,0,0,0.7)] text-lg md:text-xl leading-relaxed">
              At Sofenter Technologies, a leading software development company in India,
              we&apos;re passionate about limitless innovation — your vision
              matters, not your company&apos;s size. Whether you&apos;re a
              startup business or a large enterprise, our expert team delivers
              Software Development solutions tailored to meet your unique needs.
            </p>
            <p className="text-[rgba(0,0,0,0.7)] text-lg md:text-xl leading-relaxed">
              Using a customer-focused, iterative development process, we
              minimize risks and provide custom, scalable software that boosts
              business growth and success. Discover how our cutting-edge
              technology and personalized approach to Software Development can
              transform your ideas into powerful, results-driven software today.
            </p>
            <Link href="/contact">
              <button
                type="button"
                className="px-[3rem] py-[1.25rem] rounded-lg bg-[#FFD700] text-black font-['Inter'] font-[500] text-lg hover:bg-[#FFC700] transition-colors shadow-md mt-4"
              >
                Discover More About the Process
              </button>
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* Client Segments Section */}
      <FadeInSection className="mt-32 mx-[2rem] md:mx-[4.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {CLIENT_SEGMENTS.map((segment) => (
            <div
              key={segment.id}
              className="flex flex-col items-start gap-4 p-6 rounded-lg hover:bg-[rgba(255,215,0,0.1)] transition-colors"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-lg flex items-center justify-center text-4xl">
                {segment.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-['Inter'] text-2xl font-bold text-[#000000]">
                {segment.title}
              </h3>
              
              {/* Description */}
              <p className="text-[rgba(0,0,0,0.7)] text-lg leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </>
  );
}
