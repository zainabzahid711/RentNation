import React from "react";
import styles from "./HeroSection.module.css";
import BackgroundImg from "../../_assets/png/bgImage.png";
import Button from "../button/Button";
import locationIcon from "../../_assets/svg/location-black.svg";
import searchIcon from "../../_assets/svg/search-Icon.svg";
// import { Dropdown } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const LocationDropdown = () => {
//   return (
//     <Dropdown className={styles.customDropdown}>
//       <Dropdown.Toggle
//         variant="success"
//         // id="location-dropdown"
//         className={styles.locationDrop}
//       >
//         <img
//           src={locationIcon}
//           alt="Location Icon"
//           className={styles.locationIcon}
//         />
//         Location
//       </Dropdown.Toggle>
//       <Dropdown.Menu className={styles.locationSelect}>
//         <Dropdown.Item href="#/location-1">Lahore</Dropdown.Item>
//         <Dropdown.Item href="#/location-2">Pakistan</Dropdown.Item>
//         <Dropdown.Item href="#/location-3">Hawaii</Dropdown.Item>
//         <Dropdown.Item href="#/location-4">Islands</Dropdown.Item>
//         <Dropdown.Item href="#/location-5">Alaska</Dropdown.Item>
//         <Dropdown.Item href="#/location-6">Canada</Dropdown.Item>
//         <Dropdown.Item href="#/location-7">Arizona</Dropdown.Item>
//         <Dropdown.Item href="#/location-8">Caracas</Dropdown.Item>
//         <Dropdown.Item href="#/location-9">USA</Dropdown.Item>
//         <Dropdown.Item href="#/location-10">Mumbai</Dropdown.Item>
//         <Dropdown.Item href="#/location-11">foundland</Dropdown.Item>
//         <Dropdown.Item href="#/location-12">Georgea</Dropdown.Item>
//         <Dropdown.Item href="#/location-13">Atlantic</Dropdown.Item>
//         <Dropdown.Item href="#/location-14">Azores</Dropdown.Item>
//         <Dropdown.Item href="#/location-15">Germany</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// };

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <img
        className={styles.BackgroundImg}
        src={BackgroundImg}
        alt="Background"
      />
      <div className={styles.heroContent}>
        <h3 className={styles.heroheading}>Welcome to RentNation</h3>
        <h1 className={styles.herosubHeading}>
          Where your island adventure begins!
        </h1>
        <p className={styles.heroPara}>
          Welcome to RentNation, where your next beach adventure begins! Whether
          you're craving a relaxing day by the shore <br></br> or an exciting
          water exploration, we've got you covered. With our convenient rental
          services, you can choose between <br></br> multiple fantastic options
        </p>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.locationDrop}>
          <img
            src={locationIcon}
            alt="Location Icon"
            className={styles.locationIcon}
          />
          <select
            className={styles.locationSelect}
            id="location"
            name="location"
          >
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
        <Button
          title="Search"
          background="#FFAE1B"
          padding="15px 23px 15px 24px"
          color="#121212"
          icon={searchIcon}
        />
      </div>
    </div>
  );
};
// export { HeroSection as default, LocationDropdown };
export default HeroSection;
