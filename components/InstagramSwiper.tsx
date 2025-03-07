import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

function InstagramSwiper() {
  return (
    <div className="w-full px-4">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile: Show 1 slide
          640: { slidesPerView: 1.5, spaceBetween: 15 }, // Small tablets
          768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
          1024: { slidesPerView: 2.2, spaceBetween: 25 }, // Desktops
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              {/* Large Image */}
              <div className="w-full md:w-[500px] h-[300px] md:h-[500px] relative overflow-hidden rounded-xl">
                <Image
                  src={`/${index * 3 + 1}.jpg`}
                  alt={`/${index}`}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Two Smaller Images */}
              <div className="flex flex-col gap-4">
                <div className="relative w-[200px] h-[200px] md:w-[230px] md:h-[230px] rounded-xl overflow-hidden">
                  <Image
                    src={`/${index * 3 + 2}.jpg`}
                    alt={`/${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-[200px] h-[200px] md:w-[230px] md:h-[230px] rounded-xl overflow-hidden">
                  <Image
                    src={`/${index * 3 + 3}.jpg`}
                    alt={`/${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default InstagramSwiper;
