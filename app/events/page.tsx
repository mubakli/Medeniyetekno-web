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
      <div className="h-12 text-3xl text-[#1b62ff] md:text-[40px] font-bold mb-5">
        SON ETKİNLİKLER
      </div>
      <Carousel />
      <div className="h-12 text-[#1b62ff] text-[40px] font-bold mt-5">
        ETKİNLİKLER
      </div>
      <div className="h-12 mb-20 mt-5">
        <span className="text-[#df9404] text-[28px] font-light font-['Montserrat'] underline">
          Geleceği Şekillendirmeye
        </span>
        <span className="text-[#df9404] text-[28px] font-light font-['Montserrat']">
          {" "}
        </span>
        <span className="text-[#1b62ff] text-[28px] font-medium font-['Montserrat']">
          MedeniyeTekno
        </span>
        <span className="mb-10 text-[#df9404] text-[28px] font-light font-['Montserrat']">
          {" "}
          ile Başla!
        </span>
      </div>
      <div className="my-5 py-20">
        <EventComponentLE
          title="MTG 9"
          presenter="Çeşitli Katılımcılar"
          date="19/12/2024"
          time="12:30"
          description={`9 Aralık 2024'te MedeniyeTekno öğrenci topluluğu olarak MTG-9 konferansımızı üniversitemiz Ziraat Bankası Kütüphanesi Hasan Polatkan Konferans Salonu'nda gerçekleştirdik. Smartpro, Turkcell, Codeway ve TurkTelekom'dan konuşmacılarımızın yer aldığı 4 farklı oturumda yapay zeka, veri bilimi, yazılım kariyeri ve test mühendisliği konularında bilgi ve deneyimler paylaşıldı. Çark çekilişi ve yarışmalarla renklenen etkinlik, soru-cevap bölümüyle sonlandı. Tüm katılımcılara teşekkür ederiz.`}
          poster="/mtg9-poster.jpeg"
        />
        <EventComponentR
          title="KRİPTOLOJİ 101"
          presenter="İlhan Furkan Sadıkoğlu"
          date="03/12/2024"
          time="15:00"
          description={`MedeniyeTekno topluluğu olarak, 3 Aralık 2024’te “Kriptoloji 101” konferansını gerçekleştirdik. Konferansın konuşmacısı, Bilgisayar Mühendisliği bölümümüz mezunlarından ve DevOps Engineer olarak görev yapan Sayın İlhan Furkan Sadıkoğlu, Kriptolojinin tarihi gelişimi ve günümüzdeki uygulamalarına değinerek bu alandaki köklü değişiklikleri ve teknolojik ilerlemeleri katılımcılarımızla paylaştı. Katılımcılarımızın sorularıyla konferansımız verimli ve keyifli bir şekilde son buldu.`}
          poster="/kriptoloji-poster.jpeg"
        />
        <EventComponentLS
          title="FINTECH 101"
          presenter="Alperen İnci"
          date="28/11/2024"
          time="15:00"
          description={`Medeniyet Tekno Kulübü olarak 28 Kasım 2024’te “Finans Teknolojilerinde Yazılım” konulu "FinTech 101" etkinliğini gerçekleştirdik. SoftRobotics’te Software Engineer olarak çalışan mezunlarımızdan Alperen İnci, FinTech’te yazılımın önemi, Postman ile API entegrasyonu, .NET web servisleri ve sanal post entegrasyonu gibi konularda deneyimlerini bizimle paylaştı. Postman, 3D Secure, ödeme geçitleri ve sanal cüzdan projelerine de değinilen etkinlik, soru-cevap bölümü ve hediye takdimleriyle sonlandı.`}
          poster="/fintech-poster.jpeg"
        />
      </div>
    </div>
  );
}

export default EventsPage;
