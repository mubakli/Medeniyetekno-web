import React from "react";
import MemberComponent from "../MemberComponent";

export default function AboutTrial() {
  return (
    <div className="bg-[#231e2f] flex flex-row justify-center w-full ">
      <div className="bg-[#231e2f] overflow-hidden w-[1440px] h-[3575px] relative">
        <div className="absolute w-[1247px] h-[432px] top-[98px] left-[101px]">
          <img
            className="absolute w-[366px] h-[365px] top-[67px] left-[436px] object-cover"
            alt="Logo"
            src="logo.png"
          />

          <p className="absolute w-[399px] top-[110px] left-0 [font-family:'Montserrat-Bold',Helvetica] font-normal text-transparent text-base text-center tracking-[0] leading-[normal]">
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

            <span className="font-bold text-[#df9404]">
              yazılım sektöründeki gelişmeleri öğrencilere aktarmak, çeşitli
              yarışmalar ve atölyelerle kodlama sevgisini aşılamak, sektördeki
              kurum ve kuruluşları öğrencilere tanıtmak ve öğrencilerle sektör
              temsilcilerini bir araya getirerek bağlantılar kurulmasını
              sağlamak
            </span>

            <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-white">
              {" "}
              gibi misyonlarla faaliyet göstermektedir.
            </span>
          </p>

          <div className="absolute w-[406px] h-[281px] top-[110px] left-[831px]">
            <p className="absolute w-[399px] top-0 left-0 [font-family:'Montserrat-Medium',Helvetica] font-normal text-transparent text-base text-center tracking-[0] leading-[normal]">
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
                Kulübümüz, teknoloji ve yazılım alanında öğrencilerin gelişimine
                katkı sunmaya devam etmektedir.
              </span>
            </p>

            <p className="absolute w-[406px] top-[219px] left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-normal text-transparent text-xl text-center tracking-[0] leading-[normal]">
              <span className="font-semibold text-[#df9404]">
                Adres
                <br />
              </span>

              <span className="[font-family:'Montserrat-Regular',Helvetica] text-white text-base">
                Ünalan Mah. Ünalan Sok D-100 Karayolu Yanyolu, 34700
                Üsküdar/İstanbul
              </span>
            </p>
          </div>

          <div className="absolute w-[895px] h-[49px] top-0 left-[172px]">
            <div className="w-[615px] h-12 top-0 left-[139px] text-[#df0447] text-[40px] text-center absolute [font-family:'Montserrat-Bold',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap">
              MEDENİYETEKNO HAKKINDA
            </div>

            <img
              className="absolute w-[895px] h-1 top-[45px] left-0"
              alt="Line"
              src="/Line2.png"
            />
          </div>

          <p className="absolute w-[394px] top-[346px] left-0.5 [font-family:'Montserrat-SemiBold',Helvetica] font-normal text-transparent text-xl text-center tracking-[0] leading-[normal]">
            <span className="font-semibold text-[#df9404]">
              E-mail
              <br />
            </span>

            <span className="[font-family:'Montserrat-Regular',Helvetica] text-white text-base">
              medeniyetekno@gmail.com
            </span>
          </p>
        </div>

        <div className="absolute w-[1314px] h-[2625px] top-[594px] left-16">
          <div className="absolute w-[895px] h-[50px] top-0 left-[209px]">
            <div className="absolute w-[615px] h-12 top-0 left-[139px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#df0447] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              EKİBİMİZ
            </div>

            <img
              className="absolute w-[895px] h-1 top-[46px] left-0"
              alt="Line"
              src="/Line2.png"
            />
            <div>
              <MemberComponent
                title="etkinlik PR"
                name="Burak"
                image="PHOTO"
                mail="mail@mail.com"
                linkedinUrl="linkedln.com"
              ></MemberComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
