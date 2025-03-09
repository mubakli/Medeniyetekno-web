import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className=" border-t-[2px] border-[#df9404] w-full mb-4"></div>
      <div className="pb-5 w-full px-[5%] md:flex items-start justify-between">
        <div className="text-center pb-5 md:text-left md:pb-0 space-y-5">
          <div className="font-bold text-white text-2xl">MEDENİYETEKNO</div>
          <div className="text-[#df9404] text-2xl font-normal font-['Courier New']">
            #CreateTheFutureToday
          </div>
          <div className="hidden md:block w-[70%] text-md lg:text-lg text-white text-base font-normal font-['Montserrat']">
            MedeniyeTekno, 2018 yılında İstanbul Medeniyet Üniversitesi
            bünyesinde bilgisayar mühendisliği öğrencileri tarafından kurulan
            bir öğrenci kulübüdür.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 md:w-full md:px-10 text-center">
            <span className="text-white text-base text-md md:text-xl font-bold font-['Montserrat'] underline">
              İLETİŞİM
              <br />
            </span>
            <span className="text-white  text-md md:text-lg text-base font-bold font-['Montserrat']">
              <br />
            </span>
            <span className="text-white text-md md:text-lg text-base font-semibold font-['Montserrat']">
              E-mail
              <br />
            </span>
            <span className="text-white text-lg  text-base font-normal font-['Montserrat']">
              medeniyetekno@gmail.com
              <br />
              <br />
            </span>
            <span className="text-white text-md md:text-lg text-base font-semibold font-['Montserrat']">
              Adres
              <br />
            </span>
            <span className="text-white text-lg text-base font-normal font-['Montserrat']">
              Ünalan Mah. Ünalan Sok D-100 Karayolu Yanyolu, 34700
              Üsküdar/İstanbul
              <br />
              <br />
            </span>
          </div>
          <div className="sm:w-1/2 text-center">
            <span className="text-white text-xl text-base font-bold font-['Montserrat'] underline">
              NAVİGASYON
              <br />
            </span>
            <span className="text-white text-lg text-base font-bold font-['Montserrat']">
              <br />
            </span>
            <span className="text-white text-lg text-base font-semibold font-['Montserrat']">
              <Link href="/">Ana Sayfa</Link>
              <br />
              <br />
              <Link href="/events">Etkinlikler</Link>
              <br />
              <br />
              <Link href="/contact">İletişim</Link>
              <br />
              <br />
              <Link href="/about">Hakkında</Link>
              <br />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
