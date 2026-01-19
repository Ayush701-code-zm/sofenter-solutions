"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Modal from "./modal";

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/service", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/aboutus", label: "About Us" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navbarRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Mobile detection
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll detection - hide/show navbar
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (navbarRef.current) {
        // Apply CSS transition for smooth fade
        navbarRef.current.style.transition = "opacity 0.7s ease";

        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scrolling down, hide the navbar
          setIsVisible(false);
          navbarRef.current.style.opacity = "0";
          navbarRef.current.style.pointerEvents = "none";
        } else if (currentScrollY < lastScrollY.current || currentScrollY <= 100) {
          // Scrolling up or at top, show the navbar
          setIsVisible(true);
          navbarRef.current.style.opacity = "1";
          navbarRef.current.style.pointerEvents = "auto";
        }

        // Handle border at top
        const firstDiv = navbarRef.current.querySelector("div");
        if (firstDiv) {
          if (currentScrollY === 0) {
            firstDiv.style.borderWidth = "1px";
          } else {
            firstDiv.style.borderWidth = "0px";
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle click outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefs.current &&
        !Object.values(dropdownRefs.current).some((ref) =>
          ref?.contains(event.target as Node)
        )
      ) {
        // Close dropdowns if needed
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getActiveClass = (path: string) => {
    return pathname === path ? "bg-[#FFD70040]" : "";
  };

  const handleGetDemo = () => {
    setIsModalOpen(true);
  };

  if (isMobile) {
    // Mobile navbar - simplified version
    return (
      <header className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-sm">
        <nav className="flex items-center justify-between px-[4.5rem] md:px-[8vw] py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[#FFD700] transform rotate-45"></div>
              <div className="absolute inset-0 bg-[#FFD700] opacity-70 transform rotate-[-45deg]"></div>
            </div>
            <span className="font-['Inter'] text-2xl font-bold text-[#000000]">
              Sofenter Technologies
            </span>
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="text-[#000000]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>
    );
  }

  return (
    <>
      <header
        ref={navbarRef}
        className="fixed top-2 left-0 right-0 z-50 my-[1.5rem] px-[7.81rem]"
        style={{ transition: "opacity 0.7s ease", opacity: 1 }}
      >
        <div className="flex flex-row items-center justify-between gap-1 px-[2.25rem] py-[1.375rem] backdrop-blur-md bg-[#cfcfcf4c] rounded-lg border border-solid border-[#dfdbe9]">
          <div className="flex items-center h-full relative">
            {/* Logo - positioned absolutely */}
            <Link href="/" className="relative">
              <Image
                src="/images/logos/sofenter-logo.jpg"
                alt="Sofenter Technologies Logo"
                width={160}
                height={160}
                className="h-40 absolute top-1/2 transform -translate-y-1/2 left-[-3rem] w-auto"
                priority
              />
            </Link>

            <div className="flex items-center gap-1 ml-20">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.href}
                  ref={(ref) => {
                    dropdownRefs.current[item.href] = ref;
                  }}
                  className="relative"
                >
                  <div
                    onClick={() => router.push(item.href)}
                    className={`text-lg font-normal text-[#000000] px-6 py-3 rounded-lg cursor-pointer flex items-center transition duration-300 ease-in-out ${getActiveClass(
                      item.href
                    )}`}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-[30px]">
            <div
              ref={(ref) => {
                dropdownRefs.current["preregister"] = ref;
              }}
              className="relative"
            >
              <div
                onClick={() => router.push("/preregister")}
                className={`text-lg font-normal text-[#000000] px-6 py-3 rounded-lg cursor-pointer flex items-center transition duration-300 ease-in-out ${getActiveClass(
                  "/preregister"
                )}`}
              >
                Pre-Register
              </div>
            </div>
            <button
              type="button"
              onClick={handleGetDemo}
              className="px-[2rem] py-[0.75rem] rounded-lg bg-[#FFD700] text-black font-['Inter'] font-[500] hover:bg-[#FFC700] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              Get Demo
            </button>
          </div>
        </div>
      </header>
      
    </>
  );
}
