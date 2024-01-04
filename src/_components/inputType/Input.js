import React from "react";
import styles from "./Input.module.css";
import locationIcon from "../../_assets/svg/location-black.svg";

const Input = () => {
  return (
    <div className={styles.inputContainerr}>
      <div className={styles.locationDrop}>
        <img
          src={locationIcon}
          alt="Location Icon"
          className={styles.locationIcon}
        />
        <select className={styles.locationSelect} id="location" name="location">
          <option value="location">Pakistan</option>
          <option value="location">Germany</option>
          <option value="location">Hawaii</option>
          <option value="location"> Islands</option>
          <option value="location"> Alaska</option>
          <option value="location">Canada</option>
          <option value="location"> Arizona</option>
          <option value="location">USA</option>

          <option value="location"> Caracas</option>
          <option value="location"> Mumbai</option>
          <option value="location"> foundland</option>
          <option value="location">Georgea</option>
          <option value="location"> Atlantic</option>
          <option value="location">Azores</option>
          <option value="location" selected>
            Location
          </option>
        </select>
        {/* <LocationDropdown /> */}
      </div>
      <input
        className={styles.heroInput}
        placeholder="Find beach, kayaks and cars"
      ></input>
    </div>
  );
};

export default Input;
