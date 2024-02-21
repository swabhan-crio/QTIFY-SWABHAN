import React from "react";
import styles from "../hero/hero.module.css";
import { ReactComponent as Vibrating_headphone } from "../../assets/vibrating-headphone 1.svg";
import img from "../../assets/vibrating-headphone 1.png";
export const Hero = () => {
  return (
    <div className={styles.hero_div}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={img} width={212} height={212} />
      </div>
    </div>
  );
};
