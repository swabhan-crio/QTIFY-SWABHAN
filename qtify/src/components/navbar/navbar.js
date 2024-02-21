import React from "react";
import styles from "../navbar/navbar.module.css";
import { Logo } from "./logo/logo";
import { Search } from "./search/Search";
import { Button } from "./button/Button";
export const Navbar = ({ searchdata }) => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search placeholder={"Search a album of your choice"} />
      <Button>Give Feedback</Button>
    </div>
  );
};
