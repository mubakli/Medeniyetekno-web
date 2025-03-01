import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";
import "swiper/css/navigation"; // You can remove this if navigation is not used anymore
import Image from "next/image";

function InstagramSwiper() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={2.2}
        modules={[Autoplay]} // Use the Autoplay module
        loop={true}
        speed={2000}
        width={1700}
        autoplay={{
          delay: 3000, // Set the autoplay delay (in milliseconds)
          disableOnInteraction: false, // Keep autoplay active even after user interaction
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="flex space-x-5 justify-center items-center">
              <div className="w-[500px] h-[500px] relative overflow-hidden rounded-xl">
                <Image
                  src={`/${(index*3)+1}.jpg`}
                  alt={`/${index}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col h-[500px] items-center justify-between">
                <div className="relative w-[230px] h-[230px] rounded-xl overflow-hidden">
                  <Image
                  src={`/${(index*3)+2}.jpg`}
                  alt={`/${index}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="relative w-[230px] h-[230px] rounded-xl overflow-hidden">
                  <Image
                  src={`/${(index*3)+3}.jpg`}
                  alt={`/${index}`}
                    fill
                    style={{ objectFit: "cover" }}
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
