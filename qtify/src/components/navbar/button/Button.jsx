import React from "react";
import styles from "./Button.module.css";
export const Button = ({ children }) => {
  return (
    <div>
      <button className={styles.button}>{children}</button>
    </div>
  );
};
