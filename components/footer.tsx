"use client";

import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  industries: [
    { href: "/benefits", label: "Benefits" },
    { href: "/courses", label: "Our Courses" },
    { href: "/testimonials", label: "Our Testimonials" },
    { href: "/faq", label: "Our FAQ" },
  ],
  products: [
    { href: "/aidna", label: "AIDNA" },
    { href: "/chondrite", label: "Chondrite" },
    { href: "/sephai", label: "SephAI" },
  ],
  about: [
    { href: "/contact", label: "Contact Us" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy" },
    { href: "/story", label: "Our Story" },
  ],
};

export default function Footer() {
  return (
    <div className="flex flex-col items-start gap-0 bg-white w-full">
      {/* CTA Section */}
      <div className="mt-0 flex w-full h-[12.5rem] items-center gap-[300px] px-16 py-20 relative bg-white rounded-xl overflow-hidden">
        <div className="flex w-full items-center justify-between relative">
          <p className="relative w-[42.375rem] flex-shrink-0 text-[#262626] font-bold text-[3rem] leading-[120%] font-['Inter']">
            <span className="text-neutral-800">One </span>
            <span className="text-[#FFD700]">Platform </span>
            <span className="text-neutral-800">Global </span>
            <span className="text-[#FFD700]">Impact </span>
          </p>

          <Link href="/contact">
            <button
              type="button"
              className="px-[3rem] py-[1.25rem] rounded-lg bg-[#FFD700] text-black font-['Inter'] font-[500] text-lg hover:bg-[#FFC700] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              Get Demo
            </button>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col w-full items-start gap-[30px] pt-8 pb-[30px] px-16 relative">
        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] flex-wrap gap-8">
          {/* Left Column - Logo and Contact */}
          <div className="inline-flex flex-col items-start gap-7 relative flex-[0_0_auto]">
            {/* Logo */}
            <div className="relative w-[44px] h-[44px]">
              <Image
                src="/images/logos/sofenter-logo.jpg"
                alt="Sofenter Technologies Logo"
                width={44}
                height={44}
                className="rounded-lg object-contain"
              />
            </div>

            <div className="flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <a
                href="mailto:hello@sofenter.com"
                className="all-[unset] box-border inline-flex items-center gap-4 relative flex-[0_0_auto] rounded-md cursor-pointer hover:opacity-70 transition-opacity"
              >
                <svg
                  className="relative w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="relative w-fit mt-[-1px] font-['Inter'] font-normal text-[rgba(0,0,0,0.7)] text-lg leading-6 tracking-normal whitespace-nowrap">
                  hello@sofenter.com
                </div>
              </a>

              <a
                href="tel:+9191813232309"
                className="all-[unset] box-border inline-flex items-center gap-4 relative flex-[0_0_auto] rounded-md cursor-pointer hover:opacity-70 transition-opacity"
              >
                <svg
                  className="relative w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="relative w-fit mt-[-1px] font-['Inter'] font-normal text-[rgba(0,0,0,0.7)] text-lg leading-6 tracking-normal whitespace-nowrap">
                  +91 91813 23 2309
                </div>
              </a>

              <a
                href="#"
                className="all-[unset] box-border inline-flex items-center gap-4 relative flex-[0_0_auto] rounded-md cursor-pointer hover:opacity-70 transition-opacity"
              >
                <svg
                  className="relative w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="relative w-fit mt-[-1px] font-['Inter'] font-normal text-[rgba(0,0,0,0.7)] text-lg leading-6 tracking-normal whitespace-nowrap">
                  Somewhere in the World
                </div>
              </a>
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="flex w-full md:w-[807px] items-start gap-[20px] relative flex-wrap">
            {/* Industries */}
            <div className="flex flex-col items-start gap-4 relative flex-1 grow min-w-[150px]">
              <div className="relative self-stretch mt-[-1px] font-['Inter'] font-semibold text-[#000000] text-xl tracking-[0] leading-[30px]">
                Industries
              </div>
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                {FOOTER_LINKS.industries.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative self-stretch font-['Inter'] font-normal text-[rgba(0,0,0,0.6)] text-lg leading-6 tracking-normal hover:text-[#FFD700] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="flex flex-col items-start gap-4 relative flex-1 grow min-w-[150px]">
              <div className="relative self-stretch mt-[-1px] font-['Inter'] font-semibold text-[#000000] text-xl tracking-[0] leading-[30px]">
                Products
              </div>
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                {FOOTER_LINKS.products.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="mt-[-1px] relative self-stretch font-['Inter'] font-normal text-[rgba(0,0,0,0.6)] text-lg leading-6 tracking-normal hover:text-[#FFD700] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* About Us */}
            <div className="flex flex-col items-start gap-4 relative flex-1 grow min-w-[150px]">
              <div className="relative self-stretch mt-[-1px] font-['Inter'] font-semibold text-[#000000] text-xl tracking-[0] leading-[30px]">
                About Us
              </div>
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                {FOOTER_LINKS.about.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="mt-[-1px] relative self-stretch font-['Inter'] font-normal text-[rgba(0,0,0,0.6)] text-lg leading-6 tracking-normal hover:text-[#FFD700] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Profiles */}
            <div className="flex flex-col items-start gap-4 relative flex-1 grow min-w-[150px]">
              <div className="relative self-stretch mt-[-1px] font-['Inter'] font-semibold text-[#000000] text-xl tracking-[0] leading-[30px]">
                Social Profiles
              </div>

              <div className="flex items-center gap-4">
                {/* Social media icons */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[rgba(0,0,0,0.05)] flex items-center justify-center hover:bg-[rgba(0,0,0,0.1)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 text-[rgba(0,0,0,0.7)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.065 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[rgba(0,0,0,0.05)] flex items-center justify-center hover:bg-[rgba(0,0,0,0.1)] transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5 text-[rgba(0,0,0,0.7)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[rgba(0,0,0,0.05)] flex items-center justify-center hover:bg-[rgba(0,0,0,0.1)] transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 text-[rgba(0,0,0,0.7)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="relative self-stretch w-full h-px bg-[rgba(0,0,0,0.1)]"></div>

        {/* Copyright */}
        <div className="flex items-center justify-center w-full h-full">
          <p className="font-['Inter'] font-normal text-[rgba(0,0,0,0.6)] text-xl text-center leading-6">
            © {new Date().getFullYear()} Sofenter Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
