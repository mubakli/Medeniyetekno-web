import React from "react";
import MemberComponent from "@/components/MemberComponent";

export default function About() {
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

          <div className="mt-10 flex  md:text-4xl flex-col md:flex-row justify-between h-full">
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
                <span className="font-medium  text-white">
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

              <div className="mb-20">
                <div className="justify-center items-center mt-10 mb-10 flex flex-col lg:flex-row lg:space-x-20">
                  <div className="flex flex-row justify-center space-x-5 md:space-x-10">
                    <div className="flex ml-6 md:ml-0">
                      <MemberComponent
                        title="KULÜP BAŞKANI"
                        name="RABİA ECE"
                        surname="SERT"
                        image="ece2"
                        linkedinUrl="https://www.linkedin.com/in/rabia-ece-sert-5750b4251/"
                        imgOps="50%_10%"
                      />
                    </div>
                    <div className="flex">
                      <MemberComponent
                        title="KULÜP BAŞKAN YARDIMCISI"
                        name="YAREN"
                        surname="ÇİĞDEM"
                        image="yaren"
                        linkedinUrl="https://www.linkedin.com/in/yaren-%C3%A7i%C4%9Fdem-69a4ba272/"
                        imgOps="50%_10%"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-4 md:mt-0">
                    <div className="flex">
                      <MemberComponent
                        title="KULÜP DANIŞMANI"
                        name="M.SİNAN"
                        surname="BAŞARSLAN"
                        image="sinan"
                        linkedinUrl="https://www.linkedin.com/in/muhammet-sinan-basarslan/"
                        imgOps="50%_0%"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative justify-center items-center ">
                  <div className=" grid grid-cols-2 lg:grid-cols-4 gap-0 ">
                    <div className="p-10 lg:border-l lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SOSYAL MEDYA EKİP LİDERİ"
                        name="ASLI"
                        surname="AKYÜZ"
                        image="aslı"
                        linkedinUrl="https://www.linkedin.com/in/asl%C4%B1-aky%C3%BCz-106786286/"
                        imgOps="50%_10%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="ETKİNLIK&PR EKİP ÜYESİ"
                        name="BURAK"
                        surname="ASARCIKLI"
                        image="PHOTO"
                        linkedinUrl="https://www.linkedin.com/in/burak-asarcikli"
                        imgOps="50%_30%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SPONSORLUK EKİP LİDERİ"
                        name="SELİM"
                        surname="GENÇ"
                        image="selim"
                        linkedinUrl="https://www.linkedin.com/in/selim-gencc/"
                        imgOps="50%_30%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="İLETİŞİM EKİP LİDERİ"
                        name="AZRA ÖYKU"
                        surname="ULUKAN"
                        image="azra"
                        linkedinUrl="https://www.linkedin.com/in/azra-%C3%B6yk%C3%BC-ulukan/"
                        imgOps="50%_30%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-l lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SOSYAL MEDYA EKİP ÜYESİ"
                        name="KEREM "
                        surname="YILMAZ"
                        image="kerem2"
                        linkedinUrl="https://www.linkedin.com/in/keremy321/"
                        imgOps="50%_50%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="ETKİNLIK&PR EKİP ÜYESİ"
                        name="SEMİH"
                        surname="BEKDAŞ"
                        image="semih"
                        linkedinUrl="https://www.linkedin.com/in/semihbekda%C5%9F/"
                        imgOps="50%_30%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SPONSORLUK EKİP ÜYESİ"
                        name="BATUHAN"
                        surname="BAŞ"
                        image="batuhan"
                        linkedinUrl="https://www.linkedin.com/in/batuhan-ba%C5%9F-805a69324/"
                        imgOps="50%_0%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="İLETİŞİM EKİP ÜYESİ"
                        name="YUNUS EMRE"
                        surname="BOZTEPE"
                        image="yunus"
                        linkedinUrl="https://www.linkedin.com/in/emre-boztepe-69836b297/"
                        imgOps="50%_90%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-l lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SOSYAL MEDYA EKİP ÜYESİ"
                        name="RAVZA"
                        surname="ERTEMUR"
                        image="ravza"
                        linkedinUrl="https://www.linkedin.com/in/ravza-ertemur-2860a0323/"
                        imgOps="50%_0%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="ETKİNLIK&PR EKİP ÜYESİ"
                        name="SALİH KERİM"
                        surname="ASLAN"
                        image="salih"
                        linkedinUrl="https://www.linkedin.com/in/salih-aslan-9294a6294/"
                        imgOps="50%_50%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SPONSORLUK EKİP ÜYESİ"
                        name="M. FURKAN"
                        surname="YOLAL"
                        image="furkan"
                        linkedinUrl="https://www.linkedin.com/in/furkan-yolal-0a475832b/"
                        imgOps="50%_60%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="İLETİŞİM EKİP ÜYESİ"
                        name="YUSUF"
                        surname="UZUN"
                        image="yusuf"
                        linkedinUrl="https://www.linkedin.com/in/yusuf-uzun-126b2b2a4/"
                        imgOps="50%_90%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-l lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SOSYAL MEDYA EKİP ÜYESİ"
                        name="ZEYNEP"
                        surname="SARI"
                        image="zeynep"
                        linkedinUrl="https://www.linkedin.com/in/zeynep-sar%C4%B1-008122257/"
                        imgOps="50%_0%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="ETKİNLIK&PR EKİP ÜYESİ"
                        name="SARUHAN"
                        surname="TÜRKÖZ"
                        image="saruhan"
                        linkedinUrl="https://www.linkedin.com/in/saruhan-t%C3%BCrk%C3%B6z-251031294/"
                        imgOps="50%_50%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SPONSORLUK EKİP ÜYESİ"
                        name="SETENAY TEN"
                        surname="ÖZYURTLU"
                        image="setenay"
                        linkedinUrl="https://www.linkedin.com/in/setenay-ten-%C3%B6zyurt-61484124b/"
                        imgOps="50%_30%"
                      ></MemberComponent>
                    </div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="İLETİŞİM EKİP ÜYESİ"
                        name="AHMED FARUK"
                        surname="ER"
                        image="ahmed"
                        linkedinUrl="https://www.linkedin.com/in/ahmed-faruk-er-81b9562a2/"
                        imgOps="50%_90%"
                      ></MemberComponent>
                    </div>
                    <div className=" lg:border-l lg:border-r lg:border-[#df9404]"></div>
                    <div className=" lg:border-r lg:border-[#df9404]"></div>
                    <div className="p-10 lg:border-r lg:border-[#df9404]">
                      <MemberComponent
                        title="SPONSORLUK EKİP ÜYESİ"
                        name="ÖMER FARUK"
                        surname="ALTINOVA"
                        image="ömer"
                        linkedinUrl="https://www.linkedin.com/in/omeraltinova/"
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
