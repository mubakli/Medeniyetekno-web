import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const montserratBold = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

function Contact() {
  return (
    <div className={`px-[5%]  my-10 w-full ${montserrat.className}`}>
      <div
        className={`h-12 text-[#1b62ff] sm:text-[20px] lg:text-[40px] font-bold mb-5 ${montserratBold.className}`}
      >
        BİZİMLE İLETİŞİME GEÇİN
      </div>
      <div className="w-full h-[600px] flex flex-col lg:flex-row  items-center justify-between space-x-10">
        <div className="flex flex-col space-y-6 items-end h-auto w-full max-w-[90%] sm:max-w-[450px]">
          <input
            maxLength={50}
            type="text"
            placeholder="İsminizi Giriniz"
            className="w-full lg:w-[450px] h-[40px] lg:h-[50px] px-4 text-[#0b338b] text-lg lg:text-base font-semibold font-['Montserrat'] bg-[#ddd9d2] rounded-[25px] border border-white"
          />
          <input
            maxLength={60}
            type="text"
            placeholder="Email Adresinizi Giriniz"
            className="w-full lg:w-[450px] h-[40px] lg:h-[50px] px-4 text-[#0b338b] text-lg lg:text-base font-semibold font-['Montserrat'] bg-[#ddd9d2] rounded-[25px] border border-white"
          />
          <textarea
            maxLength={430}
            placeholder="Mesajınızı Giriniz"
            className="w-full lg:w-[450px] h-[200px] lg:h-[300px] px-4 py-3 text-[#0b338b] text-lg lg:text-base font-semibold font-['Montserrat'] bg-[#ddd9d2] rounded-[25px] border border-white"
          />
          <button
            onClick={() => {}}
            className="w-36 lg:w-44 h-10 lg:h-12 bg-blue-600 rounded-full text-white flex items-center justify-center hover:cursor-pointer"
          >
            Gönder
          </button>
        </div>
        <div
          className="flex flex-col items-start justify-between py-10 sm:py-36 h-auto w-full max-w-[90%] sm:max-w-[550px] p-6 sm:p-10 bg-cover bg-center sm:bg-top rounded-lg bg-no-repeat"
          style={{
            backgroundImage: "url('/logoBg.png')",
            backgroundSize: "contain", // Ensures the full logo is visible without repetition
          }}
        >
          <div>
            <div className="text-[#df9404] text-xl sm:text-3xl font-bold text-center sm:text-left">
              E-mail
            </div>
            <div className="text-base sm:text-lg text-white font-light text-center sm:text-left">
              medeniyetekno@gmail.com
            </div>
          </div>
          <div>
            <div className="text-[#df9404] text-xl sm:text-3xl font-bold text-center sm:text-left">
              Adres
            </div>
            <div className="text-base sm:text-lg text-white font-light text-center sm:text-left">
              Ünalan Mah. Ünalan Sok D-100 Karayolu Yanyolu, 34700
              Üsküdar/İstanbul
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
