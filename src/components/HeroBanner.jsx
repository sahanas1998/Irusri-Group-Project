import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import {
  HeroBanner1,
  HeroBanner2,
  HeroBanner3,
  HeroBanner4,
  HeroBanner5,
  HeroBanner6,
  HeroBanner7,
  HeroBanner8,
  HeroBanner9,
  HeroBanner10,
} from "../constants/Data";

function HeroBanner() {
  const images = [
    HeroBanner1,
    HeroBanner2,
    HeroBanner3,
    HeroBanner4,
    HeroBanner5,
    HeroBanner6,
    HeroBanner7,
    HeroBanner8,
    HeroBanner9,
    HeroBanner10,
  ];

  return (
    <div className="md:py-[60px] py-[40px] md:px-[24px] px-[16px] bg-[#0b0706]">
      <div className="container mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="rounded-[12px] custom-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`HeroBanner${index + 1}`}
                className="object-cover w-full h-[520px] rounded-[12px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroBanner;
