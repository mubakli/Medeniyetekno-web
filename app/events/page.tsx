"use client";

import Carousel from "@/components/Carousel";
import EventComponentLE from "@/components/EventComponentLE";
import EventComponentR from "@/components/EventComponentR";
import EventComponentLS from "@/components/EventComponentLS";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

function EventsPage() {
  return (
    <div className={`${montserrat.className} px-[5%]`}>
      <div className="h-12 text-[#1b62ff] text-[40px] font-bold mb-5">
        SON ETKİNLİKLER
      </div>
      <Carousel />
      <div className="h-12 text-[#1b62ff] text-[40px] font-bold mt-5">
        ETKİNLİKLER
      </div>
      <div className="h-12 mb-4 mt-5">
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
      <div className="my-5 py-10">
        <EventComponentLE
          title="MTG 9"
          presenter="Çeşitli Katılımcılar"
          date="19/12/2024"
          time="12:30"
          description="Açıklama - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          poster="/mtg9-poster.jpeg"
        />
        {/* <EventComponentR
          title="KRİPTOLOJİ 101"
          presenter="İlhan Furkan Sadıkoğlu"
          date="03/12/2024"
          time="15:00"
          description="Açıklama - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          poster="/kriptoloji-poster.jpeg"
        />
        <EventComponentLS
          title="FINTECH 101"
          presenter="Alperen İnci"
          date="28/11/2024"
          time="15:00"
          description="Açıklama - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          poster="/fintech-poster.jpeg"
        /> */}
      </div>
    </div>
  );
}

export default EventsPage;
