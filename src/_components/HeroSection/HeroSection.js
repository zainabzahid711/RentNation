import React from "react";
import styles from "./HeroSection.module.css";
import BackgroundImg from "../../_assets/png/bgImage.png";
import Button from "../button/Button";
import searchIcon from "../../_assets/svg/search-Icon.svg";
import Input from "../inputType/Input";
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
          you're craving a relaxing day by the shore or an exciting water
          exploration, we've got you covered. With our convenient rental
          services, you can choose between multiple fantastic options
        </p>
      </div>
      <div className={styles.inputContainer}>
        <Input />
        <Button
          title="Search"
          background="#FFAE1B"
          padding="15px 20px 15px 24px"
          color="#121212"
          icon={searchIcon}
        />
      </div>
    </div>
  );
};
// export { HeroSection as default, LocationDropdown };
export default HeroSection;
