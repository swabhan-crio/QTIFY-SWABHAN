import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import styles from "../../carousal/carousalRightNavigation/carousalRighttNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/rightarrow.svg";
export const CarousalRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, set_isEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      set_isEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className={styles.rightnavi}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};
