import React, { useState } from "react";
import Logo from "../../_assets/svg/logo.svg";
import styles from "./NavBar.module.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showState, setShowState] = useState(true);

  return (
    <div className={styles.navBar}>
      <img className={styles.logo} src={Logo} alt="company-logo" />

      <div className={styles.menu}>
        <Link to="/" className={styles.menuItem}>
          HOME
        </Link>
        <div className={`${styles.dropdown} ${styles.menuItem}`}>
          LISTINGS
          {/* {showDropdown && ( */}
          <div className={styles.dropdownContent}>
            <Link className={styles.dropdownItem} to="/featurePage">
              FeaturePage
            </Link>
            <Link className={styles.dropdownItem} to="/orderPage">
              OrderPage
            </Link>
          </div>
          {/* )} */}
        </div>
        <Link to="/about" className={styles.menuItem}>
          ABOUT
        </Link>
        <Link to="/contact" className={styles.menuItem}>
          CONTACT
        </Link>
        {/* {showState !== "login" && <Button title="LOGIN / SIGN UP" />} */}
        {showState && (
          <Button onClick={() => setShowState(false)} title="LOGIN / SIGN UP" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
