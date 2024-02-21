import React from "react";
import styles from "../pages/homepage.module.css";
import { useOutletContext } from "react-router-dom";
import { Hero } from "../components/hero/hero";
import { Section } from "../components/section/section";
import { fetchFilters } from "../api/api";
export const Homepage = () => {
  const { data } = useOutletContext();
  const { topalbums, newalbums, songs } = data;

  return (
    <div>
      <Hero />
      <div className={styles.wrapper}>
        <Section data={topalbums} title="Top Albums" type="album" />
        <Section data={newalbums} title="New Albums" type="album" />
        <Section
          filtersource={fetchFilters}
          data={songs}
          title="Songs"
          type="song"
        />
      </div>
    </div>
  );
};
