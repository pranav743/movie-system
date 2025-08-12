import React from "react";
import styles from "./CurrentMovieCard.module.css";

const CurrentMovieCard = () => {
  const tags = [
    "2025",
    "Adventure",
    "5 Stars"
  ]
  return (
    <div className={styles.currentmoviecard}>
      <div className={styles.posterContainer}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/014/177/848/non_2x/outdoor-cinema-at-sunset-summer-landscape-movie-free-vector.jpg"
          alt="Movie View"
          style={{ maxWidth: "100vw" }}
        />

        {/* Gradient overlay */}
        <div className={styles.Gradient}></div>

        {/* Tag container */}
        <div className={styles.tagContainer}>
          <h2
            style={{
              fontSize: "50px",
              color: "#fff",
              textAlign: "left",
              width: "100%",
              padding: "0px 20px",
            }}
          >
            Movie 9090
          </h2>
          <div style={{
            display: "flex",
            gap: "5px",
            padding: "0px 20px"
          }}>
            {
              tags.map((tag)=> (
                <div className={styles.tag}>{tag}</div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentMovieCard;
