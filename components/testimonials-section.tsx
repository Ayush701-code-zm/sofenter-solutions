"use client";

import { useState } from "react";
import Image from "next/image";
import FadeInSection from "./fade-in-section";

interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote: "Expert Developer. Actually support to fly high. We are happy with the outcomes we have got from the project. Thanks, team for the mind-blowing collaboration.",
    name: "Chad Solomon",
    title: "CEO & Co-founder",
    company: "Chekmarc",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    rating: 5,
    quote: "Sofenter Technologies is very reliable partner. I appreciated their approach to the requirements and communication. They have excellent technical knowledge and delivered quality work.",
    name: "Abhinav Singhal",
    title: "Founder and CEO",
    company: "Umun Tech",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    rating: 5,
    quote: "I was impressed by their technical expertise and innovative approach to problem-solving. They're truly partners in our success story.",
    name: "Amelia Rodriguez",
    title: "Founder",
    company: "Upthinity",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 4,
    rating: 5,
    quote: "Their team delivered exceptional results and exceeded our expectations. The communication was smooth and the technical expertise was outstanding.",
    name: "Michael Chen",
    title: "CTO",
    company: "TechVision Inc",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 5,
    rating: 5,
    quote: "Working with Sofenter was a game-changer for our business. Their innovative solutions and dedication to quality are unmatched.",
    name: "Sarah Johnson",
    title: "Product Manager",
    company: "InnovateCo",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 6,
    rating: 5,
    quote: "Outstanding service and support throughout the entire project lifecycle. Highly recommend for any software development needs.",
    name: "David Williams",
    title: "VP Engineering",
    company: "Digital Solutions",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - testimonialsPerPage < 0 
        ? Math.floor((testimonials.length - 1) / testimonialsPerPage) * testimonialsPerPage 
        : prev - testimonialsPerPage
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * testimonialsPerPage);
  };

  const currentPage = Math.floor(currentIndex / testimonialsPerPage);

  return (
    <section className="bg-gray-50 py-20 px-[4.5rem] md:px-[8vw]">
      <div className="max-w-[1400px] mx-auto">
        <FadeInSection>
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="font-['Inter'] text-[2.5rem] md:text-[3rem] font-bold text-[#000000] mb-4 leading-tight">
                What Our Clients Say
              </h2>
              <p className="text-[rgba(0,0,0,0.6)] text-lg">
                Trusted by businesses worldwide to deliver exceptional results
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white hover:bg-gray-100 shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonials"
              >
                <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white hover:bg-gray-100 shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Next testimonials"
              >
                <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </FadeInSection>

        {/* Testimonials Grid */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex / testimonialsPerPage) * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials
                  .slice(pageIndex * testimonialsPerPage, (pageIndex + 1) * testimonialsPerPage)
                  .map((testimonial, index) => (
                    <FadeInSection key={testimonial.id} delay={index * 0.1}>
                      <div className="bg-[#f3f0ff] rounded-2xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                        {/* Star Rating */}
                        <div className="flex gap-1 mb-6">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-[#FFD700]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Quote */}
                        <p className="text-[#000000] text-base leading-relaxed mb-8 flex-grow">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-300 flex-shrink-0 relative">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-['Inter'] font-semibold text-[#000000] text-base">
                              {testimonial.name}
                            </h4>
                            <p className="text-[rgba(0,0,0,0.6)] text-sm">
                              {testimonial.title} {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeInSection>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? "w-8 bg-[#FFD700]" 
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
