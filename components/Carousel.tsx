import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // Import Autoplay and Navigation modules
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import Image from "next/image";

function Carousel() {
  return (
    <div className="w-full relative">
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, Navigation]} // Use the Autoplay and Navigation modules
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000, // Set the autoplay delay (in milliseconds)
          disableOnInteraction: false, // Keep autoplay active even after user interaction
        }}
        navigation={true}
      >
        <SwiperSlide>
          <div className="w-full h-[60vh] relative overflow-hidden rounded-xl">
            <Image
              src="/kriptoloji.png"
              alt="image2"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-4 space-y-3 left-4 text-white z-10">
            <h2 className="text-5xl font-bold">Kriptoloji 101</h2>
              <p className="text-2xl">İlhan Furkan Sadıkoğlu</p>
              <p className="text-xl">3 Aralık Salı</p>
              <p className="text-lg font-light">
                Okulumuz Bilgisayar Mühendisliği mezunlarından, DevOps Engineer
                olarak çalışan Sayın İlhan Furkan Sadıkoğlu’nun anlatımıyla,
                kriptoloji dünyasının derinliklerine iniyoruz.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[60vh] relative overflow-hidden rounded-xl">
            <Image
              src="/inci.png"
              alt="image3"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-4 space-y-3 left-4 text-white z-10">
              <h2 className="text-5xl font-bold">FinTech 101</h2>
              <p className="text-2xl">Alperen İnci</p>
              <p className="text-xl">28 Kasım Perşembe
              </p>
              <p className="text-lg font-light">
              Okulumuz Bilgisayar Mühendisliği mezunlarından, SoftRobotics şirketinde Software Engineer olarak çalışan Sayın Alperen İnci&apos;nin anlatımıyla, teknoloji ve finans dünyasının kesişim noktasına yakından bakacağız.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
