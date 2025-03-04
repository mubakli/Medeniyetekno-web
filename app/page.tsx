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
    <div>
      <div
        className={`w-full flex flex-col items-center justify-center ${montserrat.className}`}
      >
        <div className="relative hidden lg:flex px-4 flex items-center justify-center w-full">
          <Image src="/image.png" width={1440} height={31108} alt="asd" />
        </div>
        <div className="block lg:hidden bg-[#231e2f] overflow-hidden  w-full  relative">
          <div className="flex w-[393px] h-[445px] top-[105px] -left-1.5">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[308px] left-0 h-[308px] top-[113px]  bg-[url(/bg_lines.png)] bg-[100%_100%]">
              <img
                className="absolute  top-0 left-0 object-cover"
                alt="Rectangles"
                src="/bg_lines.png"
              />
              <div className="absolute w-[307px] h-[122px] top-px left-px [font-family:'MonarkBold-Regular',Helvetica] font-normal text-[#df044733] text-[110px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                2024
              </div>

              <div className="absolute w-[307px] h-[122px] top-[185px] left-px [font-family:'MonarkBold-Regular',Helvetica] font-normal text-[#df044733] text-[110px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                2025
              </div>

              <div className="absolute w-[307px] h-[306px] top-px left-px [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.07)_58.5%)]"></div>

              <div className="absolute w-[218px] h-[216px] top-[46px] left-11">
                <div className="relative h-[216px]">
                  <img
                    className="absolute w-[179px] h-[179px] top-[19px] left-[22px] object-cover"
                    alt="Logo"
                    src="/logo.png"
                  />

                  <img
                    className="absolute w-[218px] h-[216px] top-0 left-0 object-cover"
                    alt="Red c"
                    src="/redC.png"
                  />

                  <img
                    className="absolute w-[189px] h-[199px] top-2 left-[18px] object-cover"
                    alt="Blue c"
                    src="/blueC.png"
                  />

                  <img
                    className="absolute w-[163px] h-[183px] top-4 left-7 object-cover"
                    alt="Orange c"
                    src="/orangeC.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 w-[355px] h-[54px] top-0 left-0 ">
            <div className="relative w-[349px] h-[54px]">
              <div className="absolute w-[341px] top-0 left-2 [text-shadow:0px_4px_4px_#00000040] blur-[2px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#df0447] text-4xl text-center tracking-[0] leading-[normal]">
                MEDENİYETEKNO
              </div>

              <div className="w-[341px] top-1.5 left-0 [text-shadow:0px_4px_4px_#00000040] blur-[2px] text-[#0b338b] text-4xl absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-center tracking-[0] leading-[normal]">
                MEDENİYETEKNO
              </div>

              <div className="w-[341px] top-1 left-1 [text-shadow:0px_4px_4px_#ffffff40] text-white text-4xl absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-center tracking-[0] leading-[normal]">
                MEDENİYETEKNO
              </div>
            </div>
          </div>

          <div className="absolute  left-1/2 transform -translate-x-1/2 w-[391px] h-[26px] top-[54px] left-0">
            <div className="relative w-[387px] h-[26px] -top-px -left-px">
              <div className="absolute w-[387px] h-[26px] top-0 left-0 [-webkit-text-stroke:1px_#000000] blur-[2.6px] [font-family:'Courier_New-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[normal]">
                #CreateTheFutureToday
              </div>

              <div className="w-[387px] h-[26px] top-0 left-0 [-webkit-text-stroke:1px_#000000] text-xl absolute [text-shadow:0px_4px_4px_#00000040] [font-family:'Courier_New-Regular',Helvetica] font-normal text-[#df9404] text-center tracking-[0] leading-[normal]">
                #CreateTheFutureToday
              </div>
            </div>
          </div>

          <p className="relative left-1/2 transform -translate-x-1/2 w-[327px]  text-lg  left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-transparent  text-center tracking-[0] leading-[normal]">
            <span className=" text-[#1b62ff]">MedeniyeTekno</span>

            <span className="text-white">
              , 2018&#39;de İstanbul Medeniyet Üniversitesi bilgisayar
              mühendisliği öğrencileri tarafından kurulan bir{" "}
            </span>

            <span className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white">
              öğrenci kulübüdür.
            </span>

            <span className="text-white"> Misyonu; </span>

            <span className="text-[#df9404] underline">
              yazılım dünyasındaki yenilikleri aktarmak, kodlama sevgisi
              kazandırmak ve sektörü öğrencilere tanıtmaktır.
            </span>
          </p>
        </div>
        <div className="px-[5%] pt-5 lg:my-10 w-full">
          {/* SON ETKİNLİKLER */}
          <div className="min-h-[48px] text-[#1b62ff] sm:text-[40px] text-[28px] font-bold text-center">
            SON ETKİNLİKLER
          </div>
          <div className="min-h-[48px] mb-4 text-center">
            <span className="text-[#df9404] sm:text-[28px] text-[22px] font-light font-['Montserrat'] underline">
              Geleceği Şekillendirmeye
            </span>
            <span className="text-[#1b62ff] sm:text-[28px] text-[22px] font-medium font-['Montserrat']">
              {" "}
              MedeniyeTekno
            </span>
            <span className="text-[#df9404] sm:text-[28px] text-[22px] font-light font-['Montserrat']">
              {" "}
              ile Başla!
            </span>
          </div>

          <Carousel />

          {/* SOSYAL MEDYA */}
          <div className="min-h-[48px] text-[#1b62ff] sm:text-[40px] text-[28px] font-bold md:py-6 text-center">
            <span className="text-white">SOSYAL MEDYA&apos;DA </span>{" "}
            MEDENİYETEKNO
          </div>

          <div className="min-h-[48px] py-4 text-center">
            <span className="text-[#df9404] sm:text-[28px] text-[22px] font-light font-['Montserrat'] underline">
              Etkinliklerimizi kaçırmamak için
            </span>
            <span className="text-[#df9404] sm:text-[28px] text-[22px] font-light font-['Montserrat']">
              {" "}
              Bizi{" "}
            </span>
            <span className="text-[28px] font-medium font-['Montserrat'] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Instagram
            </span>
            <span className="text-[#df9404] sm:text-[28px] text-[22px] font-light font-['Montserrat']">
              &apos;dan takip edebilirsiniz.
            </span>
          </div>

          <Link
            href={"https://www.instagram.com/medeniyetekno"}
            className="mt-5 flex flex-row items-center justify-center space-x-3"
          >
            <Image
              src="/instagram.png"
              width={40}
              height={40}
              alt="instagram_logo"
            />
            <span className="text-white sm:text-[20px] text-[16px] font-bold font-['Montserrat']">
              {" "}
              @medeniyetekno
            </span>
          </Link>
          <div className="">
            <InstagramSwiper />
          </div>
        </div>

        <Contact />
      </div>
    </div>
  );
}
