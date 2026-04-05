"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const isContactOpen = openSections["contact"];
  const isFollowOpen = openSections["follow"];
  const isResourcesOpen = openSections["resources"];

  return (
    <footer className="bg-[#050505] text-[#ededed] py-12 md:py-24 px-8 md:px-16 lg:px-24 font-sans relative z-10 w-full overflow-hidden">
      {/* Top Border - extremely subtle */}
      <div className="absolute top-0 left-8 right-8 md:left-16 md:right-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-3xl mx-auto flex flex-col px-0">
        {/* Brand Row */}
        <div className="mb-6 md:mb-10 ml-[5px] md:ml-[6px]">
          <Link
            href="/"
            className="inline-block"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                e.preventDefault();
                window.location.href = "/";
              }
            }}
          >
            <Image
              src="/aria-black-dating-app-logo.png"
              alt="Aria black dating app logo"
              width={60}
              height={21}
              className="invert opacity-90 hover:opacity-100 transition-opacity duration-300 object-contain"
            />
          </Link>
        </div>

        {/* Links Columns */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-y-0 md:gap-y-10 md:gap-x-12 lg:gap-x-16 border-t border-white/10 md:border-none">
          {/* Contact */}
          <div className="flex flex-col border-b border-white/10 md:border-none py-4 md:py-0">
            <button
              onClick={() => toggleSection("contact")}
              className="flex items-center justify-between w-full md:cursor-auto md:pointer-events-none focus:outline-none"
            >
              <h4 className="text-white text-[13px] tracking-widest font-semibold uppercase md:mb-2 opacity-90">
                Contact Us
              </h4>
              <span
                className={`md:hidden text-white/50 transition-transform duration-300 ${
                  isContactOpen ? "rotate-180" : ""
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4L6 7.5L9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 md:!mt-0 ${
                isContactOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <ul className="flex flex-col space-y-1.5 pb-2 md:pb-0">
                <li>
                  <a
                    href="mailto:support@aria.dating"
                    className="text-[#a1a1aa] hover:text-white text-[14px] font-normal transition-colors duration-300 block"
                  >
                    support@aria.dating
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col border-b border-white/10 md:border-none py-4 md:py-0">
            <button
              onClick={() => toggleSection("follow")}
              className="flex items-center justify-between w-full md:cursor-auto md:pointer-events-none focus:outline-none"
            >
              <h4 className="text-white text-[13px] tracking-widest font-semibold uppercase md:mb-2 opacity-90">
                Follow Us
              </h4>
              <span
                className={`md:hidden text-white/50 transition-transform duration-300 ${
                  isFollowOpen ? "rotate-180" : ""
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4L6 7.5L9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 md:!mt-0 ${
                isFollowOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <ul className="flex flex-col space-y-1.5 pb-2 md:pb-0">
                <li>
                  <a href="https://www.instagram.com/aria.dating/" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-white text-[14px] font-normal transition-colors duration-300 block">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61565736175850" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-white text-[14px] font-normal transition-colors duration-300 block">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCXpnFPeQun-BlMF6kg7IK0Q" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-white text-[14px] font-normal transition-colors duration-300 block">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@aria.dating" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-white text-[14px] font-normal transition-colors duration-300 block">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col border-b border-white/10 md:border-none py-4 md:py-0">
            <button
              onClick={() => toggleSection("resources")}
              className="flex items-center justify-between w-full md:cursor-auto md:pointer-events-none focus:outline-none"
            >
              <h4 className="text-white text-[13px] tracking-widest font-semibold uppercase md:mb-2 opacity-90">
                Resources
              </h4>
              <span
                className={`md:hidden text-white/50 transition-transform duration-300 ${
                  isResourcesOpen ? "rotate-180" : ""
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4L6 7.5L9.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 md:!mt-0 ${
                isResourcesOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <ul className="flex flex-col space-y-1.5 pb-2 md:pb-0">
                <li>
                  <Link href="/blog" className="text-[#a1a1aa] hover:text-white text-[14px] font-normal transition-colors duration-300 block">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#a1a1aa] hover:text-white text-[14px] font-normal transition-colors duration-300 block">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-[#a1a1aa] hover:text-white text-[14px] font-normal transition-colors duration-300 block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy#cookies" className="text-[#a1a1aa] hover:text-white text-[14px] font-normal transition-colors duration-300 block">
                    Cookie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1400px] mx-auto mt-20 md:mt-32 pt-10 border-t border-white/5 flex flex-col items-start justify-between text-[13px] text-[#71717a] font-light">
        <p>&copy; {new Date().getFullYear()} Aria. All rights reserved.</p>
      </div>
    </footer>
  );
}
