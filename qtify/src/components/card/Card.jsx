import React from "react";
import styles from "../card/card.module.css";
import { Chip, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export const Card = ({ data, type }) => {
  const getcard = (type) => {
    switch (type) {
      case "album": {
        const { title, image, songs, slug, follows } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`/album/${slug}`}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img
                    height={"100%"}
                    width={"100%"}
                    src={image}
                    alt={title}
                    loading="lazy"
                  />
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={styles.pill}
                    />
                  </div>
                </div>
                <div className={styles.titlewrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        const { image, title, likes, slug } = data;

        return (
          <Link to={`/album/${slug}`}>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img
                  height={"100%"}
                  width={"100%"}
                  src={image}
                  alt={title}
                  loading="lazy"
                />
                <div className={styles.banner}>
                  <Chip
                    label={`${likes} Likes`}
                    size="small"
                    className={styles.pill}
                  />
                </div>
              </div>
              <div className={styles.titlewrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Link>
        );
      }
      default:
        return <></>;
    }
  };
  return getcard(type);
};
