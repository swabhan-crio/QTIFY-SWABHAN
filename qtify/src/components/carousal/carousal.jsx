import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import React, { useEffect } from "react";
import styles from "../carousal/carousal.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { CarousalLeftNavigation } from "./carousalLeftNavigation/carousalLeftNavigation";
import { CarousalRightNavigation } from "./carousalRightNavigation/carousalRighttNavigation";
import {Navigation} from 'swiper/modules'

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
};
export const Carousal = ({ data, rendercomponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={40}
        allowTouchMove
        slidesPerView={"auto"}
      >
        <Controls data={data} />
        <CarousalLeftNavigation />
        <CarousalRightNavigation />
        {data.map((ele) => (
          <SwiperSlide>{rendercomponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
