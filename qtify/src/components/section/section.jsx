import React, { useEffect } from "react";
import styles from "../section/section.module.css";
import { Card } from "../card/Card";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Carousal } from "../carousal/carousal";
import Filters from "../Filters/filters";
export const Section = ({ title, data, type, filtersource }) => {
  const [filters, set_filters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterindex, setselectedFilterindex] = useState(0);
  const [toggle, set_toggle] = useState(true);
  useEffect(async () => {
    if (filtersource) {
      const { data } = await filtersource();
      set_filters([...filters, ...data]);
    }
  }, []);
  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterindex !== 0
      ? card.genre.key === filters[selectedFilterindex].key
      : card
  );
  const handletoggle = () => {
    set_toggle((prevstate) => {
      return !prevstate;
    });
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!showFilters && (
          <h4 className={styles.toggletext} onClick={handletoggle}>
            {!toggle ? "Collapse All" : "Show All"}
          </h4>
        )}
      </div>
      {showFilters && (
        <div className={styles.filterWrapper}>
          {" "}
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterindex}
            setselectedFilterIndex={setselectedFilterindex}
          />{" "}
        </div>
      )}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!toggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousal
              data={cardsToRender}
              rendercomponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};
