"use client";

import { useState } from "react";
import Link from "next/link";
import FadeInSection from "./fade-in-section";

interface Service {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  category: "frontend" | "backend" | "design" | "all";
  estimatedTime: string;
}

const services: Service[] = [
  {
    id: "web-development",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Website Development",
    description: "Custom-designed websites that are fast, mobile-friendly, and SEO-optimized.",
    features: ["Responsive design", "SEO best practices", "Lightning performance"],
    category: "frontend",
    estimatedTime: "2-4 weeks"
  },
  {
    id: "app-development",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "App Development",
    description: "Cross-platform mobile and web apps tailored to streamline your business.",
    features: ["iOS & Android", "Web apps", "Automation workflows"],
    category: "all",
    estimatedTime: "2-4 weeks"
  },
  {
    id: "cloud-solutions",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: "Cloud & Server Management",
    description: "Reliable cloud setup, backups, and server security for business of all sizes.",
    features: ["Server setup", "Cloud migration", "24/7 monitoring"],
    category: "backend",
    estimatedTime: "2-4 weeks"
  },
  {
    id: "api-integration",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "API Development",
    description: "Robust and scalable API solutions for seamless integration and data exchange.",
    features: ["RESTful APIs", "GraphQL", "Microservices"],
    category: "backend",
    estimatedTime: "3-5 weeks"
  },
  {
    id: "ui-ux-design",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "UI/UX Design",
    description: "Captivating designs, brand kits, and user experiences tailored for your business.",
    features: ["Logos & brand kits", "User research", "Prototype design"],
    category: "design",
    estimatedTime: "2-3 weeks"
  },
  {
    id: "consulting",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Tech Consulting",
    description: "Strategic technology guidance to help you make informed decisions and drive innovation.",
    features: ["Architecture review", "Tech stack selection", "Strategy planning"],
    category: "all",
    estimatedTime: "1-2 weeks"
  }
];

export default function ServicesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "frontend" | "backend" | "design">("all");

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory || service.category === "all";
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-gray-50 py-20 px-[4.5rem] md:px-[8vw]">
      <div className="max-w-[1400px] mx-auto">
        <FadeInSection>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            {/* Left side - Title and description */}
            <div className="flex-1">
              <h2 className="font-['Inter'] text-[3rem] md:text-[3.5rem] font-bold text-[#000000] mb-4 leading-tight">
                What we do
              </h2>
              <p className="text-[rgba(0,0,0,0.7)] text-xl mb-6 max-w-2xl">
                End-to-end product and engineering for ambitious businesses — from discovery to production.
              </p>
              
              {/* Feature badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#FFD700]">
                  <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-[#000000]">Fast delivery</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#FFD700]">
                  <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-[#000000]">Production-grade</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#FFD700]">
                  <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-[#000000]">Innovation-driven</span>
                </div>
              </div>
            </div>

            {/* Right side - Search and filters */}
            <div className="bg-white rounded-2xl p-6 shadow-lg min-w-[320px]">
              <h3 className="text-sm font-semibold text-[#000000] mb-3">Quick search</h3>
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search services, e.g. frontend"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 font-medium text-sm"
                  >
                    Clear
                  </button>
                )}
              </div>
              
              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === "all"
                      ? "bg-[#FFD700] text-black"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("frontend")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === "frontend"
                      ? "bg-[#FFD700] text-black"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Frontend
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("backend")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === "backend"
                      ? "bg-[#FFD700] text-black"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Backend
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("design")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === "design"
                      ? "bg-[#FFD700] text-black"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Design
                </button>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <FadeInSection key={service.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group hover:scale-[1.02]">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#FFD70020] flex items-center justify-center text-[#FFD700] mb-6 group-hover:bg-[#FFD700] group-hover:text-black transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-['Inter'] text-2xl font-bold text-[#000000] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[rgba(0,0,0,0.6)] text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-[rgba(0,0,0,0.7)] flex items-start">
                      <span className="text-[#FFD700] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link
                    href={`/services/${service.id}`}
                    className="text-[#FFD700] hover:text-[#FFC700] font-medium text-sm flex items-center gap-2 group/link"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs text-[rgba(0,0,0,0.4)]">
                    Estimated kickoff: {service.estimatedTime}
                  </span>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* No results message */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-[rgba(0,0,0,0.5)]">
              No services found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
