"use client";

import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import InstagramSwiper from "@/components/InstagramSwiper";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center ${montserrat.className}`}
    >
      <div className="px-4 flex items-center justify-center w-full">
        <Image src="/image.png" width={1440} height={31108} alt="asd" />
      </div>
      <div className="px-[5%] my-10 w-full">
        <div className="h-12 text-[#1b62ff] text-[40px] font-bold">
          SON ETKİNLİKLER
        </div>
        <div className="h-12 mb-4">
          <span className="text-[#df9404] text-[28px] font-light font-['Montserrat'] underline">
            Geleceği Şekillendirmeye
          </span>
          <span className="text-[#df9404] text-[28px] font-light font-['Montserrat']">
            {" "}
          </span>
          <span className="text-[#1b62ff] text-[28px] font-medium font-['Montserrat']">
            MedeniyeTekno
          </span>
          <span className="text-[#df9404] text-[28px] font-light font-['Montserrat']">
            {" "}
            ile Başla!
          </span>
        </div>
        <Carousel />
        <div className="h-12 text-[#1b62ff] text-[40px] font-bold py-10">
          <span className="h-12 text-white text-[40px] font-bold">
            SOSYAL MEDYA&apos;DA{" "}
          </span>
          MEDENİYETEKNO
        </div>
        <div className="h-12 py-4">
          <span className="text-[#df9404] text-[28px] font-light font-['Montserrat'] underline">
            Etkinliklerimizi kaçırmamak için
          </span>
          <span className="text-[#df9404] text-[28px] font-light font-['Montserrat']">
            {" "}
            Bizi{" "}
          </span>
          <span className="text-[28px] font-medium font-['Montserrat'] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Instagram
          </span>
          <span className="text-[#df9404] text-[28px] font-light font-['Montserrat']">
            &apos;dan takip edebilirsiniz.
          </span>
        </div>
        <Link href={"https://www.instagram.com/medeniyetekno"} className="mt-5 flex flex-row items-center justify-start space-x-3">
          <Image
            src="/instagram.png"
            width={40}
            height={40}
            alt="instagram_logo"
          />
          <span className="text-white text-[20px] font-bold font-['Montserrat']">
            {" "}
            @medeniyetekno
          </span>
        </Link>
      </div>
      <InstagramSwiper />
      <Contact />
    </div>
  );
}
