import React from "react";
import MemberComponent from "../MemberComponent";

export default function AboutTrial() {
  return (
    <div className="bg-[#231e2f] flex flex-row justify-center w-full ">
      <div className="flex flex-col">
        <div className=" justify-center items-center flex flex-col">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-5">
            <div className="h-12 flex items-center text-[#df0447] text-[40px] text-center font-bold tracking-[0] leading-[normal] whitespace-nowrap">
              MEDENİYETEKNO
            </div>
            <div className="h-12 flex items-center text-[#df0447] text-[40px] text-center font-bold tracking-[0] leading-[normal] whitespace-nowrap">
              HAKKINDA
            </div>
          </div>

          <img className="flex  h-1  " alt="Line" src="/Line2.png" />

          <div className="mt-10 flex text-4xl flex-col md:flex-row justify-between h-full">
            {/* Right Content */}
            <div className="md:w-1/4 flex justify-center mx-10 items-center md:ml-20">
              <p className=" mb-5  [font-family:'Montserrat-Bold',Helvetica] font-normal text-transparent text-base text-center tracking-[0] leading-[normal]">
                <span className="font-bold text-white">MedeniyeTekno</span>

                <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-white">
                  , 2018 yılında İstanbul Medeniyet Üniversitesi bünyesinde
                  bilgisayar mühendisliği öğrencileri tarafından kurulan bir{" "}
                </span>

                <span className="font-bold text-white">öğrenci kulübüdür.</span>

                <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-white">
                  {" "}
                  Kulübümüz;{" "}
                </span>

                <span className=" font-bold text-[#df9404]">
                  yazılım sektöründeki gelişmeleri öğrencilere aktarmak, çeşitli
                  yarışmalar ve atölyelerle kodlama sevgisini aşılamak,
                  sektördeki kurum ve kuruluşları öğrencilere tanıtmak ve
                  öğrencilerle sektör temsilcilerini bir araya getirerek
                  bağlantılar kurulmasını sağlamak
                </span>

                <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-white">
                  {" "}
                  gibi misyonlarla faaliyet göstermektedir.
                </span>
                <p className="hidden md:block mt-5 mb-5 left-0.5 [font-family:'Montserrat-SemiBold',Helvetica] font-normal text-transparent text-xl text-center tracking-[0] leading-[normal]">
                  <span className="font-semibold text-[#df9404]">
                    E-mail
                    <br />
                  </span>

                  <span className="[font-family:'Montserrat-Regular',Helvetica] text-gray-300 text-base">
                    medeniyetekno@gmail.com
                  </span>
                </p>
              </p>
            </div>
            {/* LOGO MİDDLE */}
            <div className="w-1/2 hidden md:flex  justify-center items-center">
              <img className=" object-cover" alt="Logo" src="logo.png" />
            </div>
            {/* Left Contenr */}
            <div className="md:w-1/4 mb-5 flex justify-center mx-10 items-center md:mr-20">
              <p className="   [font-family:'Montserrat-Medium',Helvetica] font-normal text-transparent text-base text-center tracking-[0] leading-[normal]">
                <span className="font-medium text-white">
                  Kurulduğu günden bu yana bu vizyonunu koruyan MedeniyeTekno;
                  geçtiğimiz yıllarda{" "}
                </span>

                <span className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-[#4d85ff]">
                  Geleneksel MedeniyeTekno Günleri, Hackathon Kodlama Yarışması,
                  MedeniyeTekno Programlama Yarışması (HackerRank), Kickoff
                  Bootcamp ve Blockchain Zirvesi
                </span>

                <span className="font-medium text-white">
                  {" "}
                  gibi etkinlikler düzenleyerek hedeflerini hayata geçirmiştir.
                  <br />
                </span>

                <span className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-white">
                  Kulübümüz, teknoloji ve yazılım alanında öğrencilerin
                  gelişimine katkı sunmaya devam etmektedir.
                </span>
                <p className="hidden md:block mt-5 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-normal text-transparent text-xl text-center tracking-[0] leading-[normal]">
                  <span className="font-semibold text-[#df9404]">
                    Adres
                    <br />
                  </span>

                  <span className="[font-family:'Montserrat-Regular',Helvetica] text-gray-300 text-base">
                    Ünalan Mah. Ünalan Sok D-100 Karayolu Yanyolu, 34700
                    Üsküdar/İstanbul
                  </span>
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#231e2f] flex flex-col">
          <div className="flex justify-center items-center text-center">
            <div className="flex justify-center items-center flex-col">
              <div className="flex h-12  [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#df0447] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                EKİBİMİZ
              </div>

              <img className="flex  h-1 " alt="Line" src="/Line2.png" />

              <div className="justify-center items-center">
                <div className="justify-center items-center mt-10 mb-10 flex flex-col lg:flex-row lg:space-x-20">
                  <div className="flex flex-row justify-center space-x-20">
                    <div className="flex">
                      <MemberComponent
                        title="KLÜP BAŞKANI"
                        name="RABİA ECE SERT"
                        image="ece2"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_10%"
                      />
                    </div>
                    <div className="flex">
                      <MemberComponent
                        title="KLÜP BAŞKAN YARDIMCISI"
                        name="YAREN ÇİĞDEM"
                        image="yaren"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_10%"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-4 md:mt-0">
                    <div className="flex">
                      <MemberComponent
                        title="KLÜP DANIŞMANI"
                        name="M.SİNAN BAŞARSLAN"
                        image="sinan"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_0%"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative justify-center items-center ">
                  <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 ">
                    <div className="p-10 lg:border-l lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SOSYAL MEDYA EKİP LİDERİ"
                        name="ASLI AKYÜZ"
                        image="aslı"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_10%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="ETKİNLIK&PR EKİP ÜYESİ"
                        name="BURAK ASARCIKLI"
                        image="PHOTO"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_30%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SPONSORLUK EKİP LİDERİ"
                        name="SELİM GENÇ"
                        image="selim"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_30%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="İLETİŞİM EKİP LİDERİ"
                        name="AZRA ÖYKU ULUKAN"
                        image="azra"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_30%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-l lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SOSYAL MEDYA EKİP ÜYESİ"
                        name="KEREM YILMAZ"
                        image="kerem2"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_50%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="ETKİNLIK&PR EKİP ÜYESİ"
                        name="SEMİH BEKDAŞ"
                        image="semih"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_30%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SPONSORLUK EKİP ÜYESİ"
                        name="BATUHAN BAŞ"
                        image="batuhan"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_0%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="İLETİŞİM EKİP ÜYSESİ"
                        name="YUNUS EMRE BOZTEPE"
                        image="yunus"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_90%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-l lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SOSYAL MEDYA EKİP ÜYESİ"
                        name="RAVZA ERTEMUR"
                        image="ravza"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_0%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="ETKİNLIK&PR EKİP ÜYESİ"
                        name="SALİH KERİM ASLAN"
                        image="salih"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_50%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SPONSORLUK EKİP ÜYESİ"
                        name="MUHAMMET FURKAN YOLAL"
                        image="furkan"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_60%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="İLETİŞİM EKİP ÜYSESİ"
                        name="YUSUF UZUN"
                        image="yusuf"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_90%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-l lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SOSYAL MEDYA EKİP ÜYESİ"
                        name="ZEYNEP SARI"
                        image="zeynep"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_0%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="ETKİNLIK&PR EKİP ÜYESİ"
                        name="SARUHAN TÜRKÖZ"
                        image="saruhan"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_50%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SPONSORLUK EKİP ÜYESİ"
                        name="SETENAY TEN ÖZYURTLU"
                        image="setenay"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_60%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="İLETİŞİM EKİP ÜYSESİ"
                        name="AHMED FARUK ER"
                        image="ahmed"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_90%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-l lg:border-r lg:border-[#df9404]"></div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]"></div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SPONSORLUK EKİP ÜYESİ"
                        name="ÖMER FARUK ALTINOVA"
                        image="ömer"
                        mail="mail@mail.com"
                        linkedinUrl="linkedln.com"
                        imgOps="50%_40%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
