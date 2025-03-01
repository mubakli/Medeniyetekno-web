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
    <div className={`px-[5%] my-10 w-full ${montserrat.className}`}>
      <div className={`h-12 text-[#1b62ff] text-[40px] font-bold mb-5 ${montserratBold.className}`}>
        BİZİMLE İLETİŞİME GEÇİN
      </div>
      <div className="w-full h-[600px] flex flex-row items-center justify-between space-x-10">
        <div className="flex flex-col space-y-10 items-end h-[550px] w-[450px]">
          <input
            maxLength={50}
            type="text"
            placeholder="İsminizi Giriniz"
            className="w-[450px] h-[50px] pl-10 text-[#0b338b] text-base font-semibold font-['Montserrat'] bg-[#ddd9d2] rounded-[25px] border border-white"
          />
          <input
            maxLength={60}
            type="text"
            placeholder="Email Adresinizi Giriniz"
            className="w-[450px] h-[50px] pl-10 text-[#0b338b] text-base font-semibold font-['Montserrat'] bg-[#ddd9d2] rounded-[25px] border border-white"
          />
          <textarea
            maxLength={430}
            placeholder="Mesajınızı Giriniz"
            className="w-[450px] h-[300px] px-10 py-3 text-[#0b338b] text-base font-semibold font-['Montserrat'] bg-[#ddd9d2] rounded-[25px] border border-white"
          />
          <button
            onClick={() => {}}
            className="w-44 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center hover:cursor-pointer"
          >
            Gönder
          </button>
        </div>
        <div
          className="flex flex-col items-start justify-between py-36 h-[550px] w-[550px] p-10 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('/logoBg.png')" }}
        >
          <div>
            <div className="text-[#df9404] text-3xl font-bold">E-mail</div>
            <div className="text-lg text-white font-light">
              medeniyetekno@gmail.com
            </div>
          </div>
          <div>
            <div className="text-[#df9404] text-3xl font-bold">Adres</div>
            <div className="text-lg text-white font-light">
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
