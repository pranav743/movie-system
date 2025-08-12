import React, { useState } from "react";
import styles from "./NextMovie.module.css";

const NextMovie = () => {
  const [movieDetails, setMovieDetails] = useState({
    name: "XXX",
    location: "Mumbai",
    date: "12th August",
  });

  const updateDetails = (e) => {
    const { name, value } = e.target;
    setMovieDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Change Details</h3>
        <label className={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={movieDetails.name}
            onChange={updateDetails}
            className={styles.guestInput}
          />
        </label>
        <br />
        <label className={styles.label}>
          Location:
          <input
            type="text"
            name="location"
            value={movieDetails.location}
            onChange={updateDetails}
            className={styles.guestInput}
          />
        </label>
        <br />
        <label className={styles.label}>
          Date:
          <input
            type="text"
            name="date"
            value={movieDetails.date}
            onChange={updateDetails}
            className={styles.guestInput}
          />
        </label>
      </div>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Next Movie Details</h3>
        <img
          src="https://img.freepik.com/free-vector/cinema-movie-illustration_24908-57122.jpg"
          alt="Cinema"
          style={{
            maxWidth: "250px",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
        <p className={styles.outputText}>
          The movie "{movieDetails.name}" will be shown in{" "}
          {movieDetails.location} on {movieDetails.date}.
        </p>
      </div>
    </>
  );
};

export default NextMovie;
