import React, { useState } from "react";
import styles from "./GuestList.module.css";

const GuestList = ({ guests = [], setGuests }) => {
  const [guestName, setGuestName] = useState("");

  const handleNameInput = (e) => {
    setGuestName(e.target.value);
  };

  const clearGuests = () => {
    setGuests([]);
  }

  const addGuest = () => {
    if (guestName.trim() === "") return;
    setGuests([...guests, guestName.trim()]);
    setGuestName("");
  };

  return (
    <div className={styles.card}>
      <div className={styles.scrollView}>
        {guests.map((guest, index) => (
          <div key={index} className={styles.listItem}>
            {guest}
          </div>
        ))}
      </div>
      <input
        type="text"
        className={styles.guestInput}
        placeholder="Enter guest name..."
        value={guestName}
        onChange={handleNameInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addGuest();
          }
        }}
      />
      <button
        className={styles.addButton}
        onClick={addGuest}
      >
        Add Guest
      </button>
      <button
        onClick={clearGuests}
        className={styles.addButton}
      >
        Clear List
      </button>
    </div>
  );
};

export default GuestList;
