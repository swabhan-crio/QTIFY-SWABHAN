import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import styles from "../../carousal/carousalLeftNavigation/carousalLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/leftarrow.svg";
export const CarousalLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, set_isBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      set_isBeginning(swiper.isBeginning);
    });
  }, []);
  return (
    <div className={styles.leftnavi}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};
