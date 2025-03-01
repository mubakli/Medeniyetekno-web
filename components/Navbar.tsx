"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

function Navbar() {
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

  return (
    <div>
      <div className="h-20 w-full bg-[#231E2F] flex items-center justify-center">
        <div
          className={`space-x-20 flex items-center justify-center text-white ${montserrat.className}`}
        >
                    <Link
            href="/"
          >
                      <Image
                      src={`${
                        isActive("/") ? "/logoRed.png" : "/logoWhite.png"
                      }`}
            width={40}
            height={40}
            alt="medeniyetekno-logo"
          />
          </Link>
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
      </div>
      <div className="border-b-[2px] border-[#df9404] w-full mb-4"></div>
    </div>
  );
}

export default Navbar;
