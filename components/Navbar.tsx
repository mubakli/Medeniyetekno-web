"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

function Navbar() {
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="h-20 w-full bg-[#231E2F] flex items-center justify-between px-6 lg:px-10">
        <div className={`flex items-center text-white ${montserrat.className}`}>
          <Link href="/">
            <Image
              src={`${isActive("/") ? "/logoRed.png" : "/logoWhite.png"}`}
              width={40}
              height={40}
              alt="medeniyetekno-logo"
            />
          </Link>
        </div>

        {/* Desktop Menu (unchanged) */}
        <div className="hidden lg:flex text-white items-center space-x-20">
          <Link
            href="/events"
            className={`hover:text-[#DF0447] ${
              isActive("/events") ? "text-[#DF0447]" : ""
            }`}
          >
            Etkinlikler
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[#DF0447] ${
              isActive("/contact") ? "text-[#DF0447]" : ""
            }`}
          >
            İletişim
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#DF0447] ${
              isActive("/about") ? "text-[#DF0447]" : ""
            }`}
          >
            Hakkında
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#231E2F] text-white px-6 py-4">
          <div className="space-y-4">
            <Link
              href="/events"
              className={`block hover:text-[#DF0447] ${
                isActive("/events") ? "text-[#DF0447]" : ""
              }`}
            >
              Etkinlikler
            </Link>
            <Link
              href="/contact"
              className={`block hover:text-[#DF0447] ${
                isActive("/contact") ? "text-[#DF0447]" : ""
              }`}
            >
              İletişim
            </Link>
            <Link
              href="/about"
              className={`block hover:text-[#DF0447] ${
                isActive("/about") ? "text-[#DF0447]" : ""
              }`}
            >
              Hakkında
            </Link>
          </div>
        </div>
      )}

      <div className="border-b-[2px] border-[#df9404] w-full mb-4"></div>
    </div>
  );
}

export default Navbar;
