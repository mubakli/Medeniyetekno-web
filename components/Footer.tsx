function Footer() {
  return (
    <footer>
      <div className=" border-t-[2px] border-[#df9404] w-full mb-4"></div>
      <div className="w-full px-[5%] flex items-start justify-between">
        <div className="w-[550px] space-y-5">
          <div className="font-bold text-white text-2xl">MEDENİYETEKNO</div>
          <div className="text-[#df9404] text-2xl font-normal font-['Courier New']">
            #CreateTheFutureToday
          </div>
          <div className="text-white text-base font-normal font-['Montserrat']">
            MedeniyeTekno, 2018 yılında İstanbul Medeniyet Üniversitesi
            bünyesinde bilgisayar mühendisliği öğrencileri tarafından kurulan
            bir öğrenci kulübüdür.
          </div>
        </div>
        <div className="w-[261px] h-[182px] text-center">
          <span className="text-white text-base font-bold font-['Montserrat'] underline">
            İLETİŞİM
            <br />
          </span>
          <span className="text-white text-base font-bold font-['Montserrat']">
            <br />
          </span>
          <span className="text-white text-base font-semibold font-['Montserrat']">
            E-mail
            <br />
          </span>
          <span className="text-white text-base font-normal font-['Montserrat']">
            medeniyetekno@gmail.com
            <br />
            <br />
          </span>
          <span className="text-white text-base font-semibold font-['Montserrat']">
            Adres
            <br />
          </span>
          <span className="text-white text-base font-normal font-['Montserrat']">
            Ünalan Mah. Ünalan Sok D-100 Karayolu Yanyolu, 34700
            Üsküdar/İstanbul
            <br />
            <br />
          </span>
        </div>
        <div className="w-[261px] h-[182px] text-center">
          <span className="text-white text-base font-bold font-['Montserrat'] underline">
            NAVİGASYON
            <br />
          </span>
          <span className="text-white text-base font-bold font-['Montserrat']">
            <br />
          </span>
          <span className="text-white text-base font-semibold font-['Montserrat']">
            Ana Sayfa
            <br />
            <br />
            Etkinlikler
            <br />
            <br />
            İletişim
            <br />
            <br />
            Hakkında
            <br />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
