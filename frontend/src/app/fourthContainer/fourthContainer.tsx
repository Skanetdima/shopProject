import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./fourthContainer.scss";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { fourthData } from "./data";

export const FourthContainer = () => {
  const sliderData = fourthData.map((obj, index) => {
    return (
      <SwiperSlide key={index}>
        <div>
          <img src={obj.img} alt="" />
          <div className="slideCaption">
            <h3>{obj.h3}</h3>
            <p>{obj.p}</p>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="fourthContainer">
      <div className="fourthTextContainer">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <a href="">Explore More</a>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderData}
      </Swiper>
    </div>
  );
};
