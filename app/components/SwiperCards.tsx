"use client";
import Image from "next/image";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import "swiper/css";

const SwiperCards = ({
  items,
  paginationImages,
  className,
  slidesPerView,
  isHero
}: {
  items: any[];
  paginationImages?: boolean;
  className?: string;
  slidesPerView?: number;
  isHero?: boolean
}) => {
  const [swiper, setSwiper] = useState<SwiperType | null>();
  const [progress, setProgress] = useState(0); //initial value for progress

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 3.7));
    }, 110);
    return () => clearInterval(t);
  }, [progress]);
  useEffect(() => {
    swiper?.on("slideChange", () => {
      setProgress(0);
    });
  }, [swiper]);

  return (
    <div className="relative h-full gap-3 w-full flex flex-col overflow-hidden">
      <Swiper
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        spaceBetween={isHero&&30 || 5}
        slidesPerView={slidesPerView || 10}
        className={` w-full relative ${className || " h-96"} overflow-hidden px-2`}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiper(swiper)}
        breakpoints={!isHero ? {
           200:{
            slidesPerView: 1,
            spaceBetween: 2
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          575:{
            slidesPerView: 3,
            spaceBetween: 8
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 9
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 10
          }
        }:{}}
      >
        {items.map(({ card }, i) => (
          <SwiperSlide className={isHero ? `relative after:absolute after:bg-black/70 after:w-full aftre:h-full after:inset-0 ` : 'flex justify-between relative'} key={i}>{card}</SwiperSlide>
        ))}
      </Swiper>
      <div className=" flex items-center gap-4">
        {paginationImages &&
          items.map(({ src }, i) => (
            <div
              onClick={() => {
                swiper?.slideTo(i);
                swiper?.autoplay.stop();
              }}
              key={i}
              className={`${swiper?.realIndex === i && " shadow-md  -translate-y-5 border-rose-500 border opacity-90"
                } cursor-pointer hover:-translate-y-5 z-5  hover:shadow-md hover:opacity-90 duration-200 rounded-xl overflow-hidden max-w-lg w-full h-40 relative`}
            >
              {swiper?.realIndex === i && swiper.autoplay.running && (
                <div
                  style={{ width: `${progress}%` }}
                  className=" duration-200 opacity-50 absolute  w-0 h-full inset-0 bg-gray-600 z-10"
                ></div>
              )}
              {src && src !== "" ? <Image alt="Image-pagination" src={src} fill className="object-cover" /> : null}{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SwiperCards;
