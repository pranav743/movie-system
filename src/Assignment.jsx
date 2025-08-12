import "./App.css";
import { useState } from "react";
import styles from "./Assignment.module.css";
import GuestList from "./components/GuestList/GuestList";
import SnacksCounter from "./components/SnacksCounter/SnacksCounter";
import NextMovie from "./components/NextMovie/NextMovie";
import CurrentMovieCard from "./components/CurrentMovieCard/CurrentMovieCard";

export default function Assignment() {
  const [guests, setGuests] = useState();
  const [snacksCount, setSnacksCount] = useState(0);

  return (
    <>
      {/* <h1>Assignment</h1> */}
      <CurrentMovieCard />
      <div className={styles.cardContainer}>
        <GuestList guests={guests} setGuests={setGuests} />
        <SnacksCounter value={snacksCount} setValue={setSnacksCount} max={15} />
        <NextMovie />
      </div>
    </>
  );
}
