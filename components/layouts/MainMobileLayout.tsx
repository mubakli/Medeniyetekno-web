// import React from "react";
// import Carousel from "../Carousel";
// import InstagramSwiper from "../InstagramSwiper";
// import Contact from "../Contact";
// // import { DivWrapper } from "./DivWrapper";
// // import { PropertyDefault } from "./PropertyDefault";
// // import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";
// // import arrow1 from "./arrow-1.png";
// // import arrow2 from "./arrow-2.png";
// // import blueC from "./blue-c.png";

// // import etkinliklerimiziKaRmamakInBiziDanTakipEdebilirsiniz from "./etkinliklerimizi-ka-rmamak-in-bizi-dan-takip-edebilirsiniz.svg";
// // import instagramBg from "./instagram-bg.png";

// // import logoBg from "./logo-bg.png";
// // import logo from "./logo.png";

// // import orangeC from "./orange-c.png";
// // import redC from "./red-c.png";

// export default function MainMobileLayout() {
//   return (
//     <div className="bg-[#231e2f] flex flex-row justify-center w-full">
//       <div className="bg-[#231e2f] overflow-hidden w-[375px] h-[2228px] relative">
//         <div className="flex w-[393px] h-[521px] top-[105px] -left-1.5">
//           <div className="absolute w-[308px] h-[308px] top-[113px] left-[39px] bg-[url(/bg-lines.png)] bg-[100%_100%]">
//             <img
//               className="absolute  top-0 left-0 object-cover"
//               alt="Rectangles"
//               src="/bg_lines.png"
//             />
//             <div className="absolute w-[307px] h-[122px] top-px left-px [font-family:'MonarkBold-Regular',Helvetica] font-normal text-[#df044733] text-[110px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
//               2024
//             </div>

//             <div className="absolute w-[307px] h-[122px] top-[185px] left-px [font-family:'MonarkBold-Regular',Helvetica] font-normal text-[#df044733] text-[110px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
//               2025
//             </div>

//             <div className="absolute w-[307px] h-[306px] top-px left-px [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.07)_58.5%)]"></div>

//             <div className="absolute w-[218px] h-[216px] top-[46px] left-11">
//               <div className="relative h-[216px]">
//                 <img
//                   className="absolute w-[179px] h-[179px] top-[19px] left-[22px] object-cover"
//                   alt="Logo"
//                   src="/logo.png"
//                 />

//                 <img
//                   className="absolute w-[218px] h-[216px] top-0 left-0 object-cover"
//                   alt="Red c"
//                   src="/redC.png"
//                 />

//                 <img
//                   className="absolute w-[189px] h-[199px] top-2 left-[18px] object-cover"
//                   alt="Blue c"
//                   src="/blueC.png"
//                 />

//                 <img
//                   className="absolute w-[163px] h-[183px] top-4 left-7 object-cover"
//                   alt="Orange c"
//                   src="/orangeC.png"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="absolute w-[355px] h-[54px] top-0 left-[19px]">
//             <div className="relative w-[349px] h-[54px]">
//               <div className="absolute w-[341px] top-0 left-2 [text-shadow:0px_4px_4px_#00000040] blur-[2px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#df0447] text-4xl text-center tracking-[0] leading-[normal]">
//                 MEDENİYETEKNO
//               </div>

//               <div className="w-[341px] top-1.5 left-0 [text-shadow:0px_4px_4px_#00000040] blur-[2px] text-[#0b338b] text-4xl absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-center tracking-[0] leading-[normal]">
//                 MEDENİYETEKNO
//               </div>

//               <div className="w-[341px] top-1 left-1 [text-shadow:0px_4px_4px_#ffffff40] text-white text-4xl absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-center tracking-[0] leading-[normal]">
//                 MEDENİYETEKNO
//               </div>
//             </div>
//           </div>

//           <div className="absolute w-[391px] h-[26px] top-[54px] left-0">
//             <div className="relative w-[387px] h-[26px] -top-px -left-px">
//               <div className="absolute w-[387px] h-[26px] top-0 left-0 [-webkit-text-stroke:1px_#000000] blur-[2.6px] [font-family:'Courier_New-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[normal]">
//                 #CreateTheFutureToday
//               </div>

//               <div className="w-[387px] h-[26px] top-0 left-0 [-webkit-text-stroke:1px_#000000] text-xl absolute [text-shadow:0px_4px_4px_#00000040] [font-family:'Courier_New-Regular',Helvetica] font-normal text-[#df9404] text-center tracking-[0] leading-[normal]">
//                 #CreateTheFutureToday
//               </div>
//             </div>
//           </div>

//           <p className="absolute w-[327px] top-[432px] left-[30px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-transparent text-xs text-center tracking-[0] leading-[normal]">
//             <span className="text-[#1b62ff]">MedeniyeTekno</span>

//             <span className="text-white">
//               , 2018&#39;de İstanbul Medeniyet Üniversitesi bilgisayar
//               mühendisliği öğrencileri tarafından kurulan bir{" "}
//             </span>

//             <span className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white">
//               öğrenci kulübüdür.
//             </span>

//             <span className="text-white"> Misyonu; </span>

//             <span className="text-[#df9404] underline">
//               yazılım dünyasındaki yenilikleri aktarmak, kodlama sevgisi
//               kazandırmak ve sektörü öğrencilere tanıtmaktır.
//             </span>
//           </p>
//         </div>
//         <Carousel></Carousel>

//         <InstagramSwiper />
//         <Contact />
//         <div className="absolute w-[606px] h-[1332px] top-[656px] left-[-52px]">
//           <div className="absolute w-[566px] h-[385px] top-[321px] left-10"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// {
//   /* <div className="relative w-[546px] h-[385px] left-3">
//               <img
//                 className="absolute w-[375px] h-[385px] top-0 left-0 object-cover"
//                 alt="Instagram bg"
//                 // src={instagramBg}
//               />

//               <div className="absolute w-[153px] h-[25px] top-[227px] left-[53px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-xs tracking-[0] leading-[normal]">
//                 @medeniyetekno
//               </div>

//               <p className="absolute w-[327px] h-[61px] top-[37px] left-6 [font-family:'Montserrat-Bold',Helvetica] font-bold text-transparent text-[32px] tracking-[0] leading-[normal]">
//                 <span className="text-white">
//                   SOSYAL MEDYA’DA
//                   <br />
//                 </span>

//                 <span className="text-[#1b62ff]">MEDENİYETEKNO</span>
//               </p>

//               <img
//                 className="absolute w-[286px] h-[37px] top-28 left-6"
//                 alt="Etkinliklerimizi"
//                 // src={etkinliklerimiziKaRmamakInBiziDanTakipEdebilirsiniz}
//               />

//               <a
//                 className="absolute w-[83px] h-[11px] top-[135px] left-6 [background:linear-gradient(180deg,rgb(27.63,98.68,255)_0%,rgb(223,4,71)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat-Light',Helvetica] font-light text-transparent text-base tracking-[0] leading-[normal] whitespace-nowrap"
//                 href="https://www.instagram.com/medeniyetekno/"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 Instagram
//               </a>

//               <div className="absolute w-[535px] h-[153px] top-[191px] left-[11px]">
//                 <div className="absolute w-[122px] h-[153px] top-0 left-0 bg-[#d9d9d9] rounded-[15px]" />

//                 <div className="absolute w-[71px] h-[75px] top-0 left-[129px] bg-[#d9d9d9] rounded-[15px]" />

//                 <div className="absolute w-[71px] h-[72px] top-[81px] left-[129px] bg-[#d9d9d9] rounded-[15px]" />

//                 <div className="absolute w-[73px] h-[75px] top-0 left-[335px] bg-[#d9d9d9] rounded-[15px]" />

//                 <div className="absolute w-[74px] h-[72px] top-[81px] left-[335px] bg-[#d9d9d9] rounded-[15px]" />

//                 <div className="absolute w-[117px] h-[153px] top-0 left-[209px] bg-[#d9d9d9] rounded-[15px]" />

//                 <div className="absolute w-[119px] h-[153px] top-0 left-[416px] bg-[#d9d9d9] rounded-[15px]" />
//               </div>
//             </div> */
// }
