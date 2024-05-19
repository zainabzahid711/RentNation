import React, { useState } from "react";
import Logo from "../../_assets/svg/logo.svg";
import styles from "./NavBar.module.css";
import Button from "../button/Button";

const NavBar = () => {
  const [showState, setShowState] = useState(true);
  return (
    <div className={styles.navBar}>
      <img className={styles.logo} src={Logo} alt="company-logo" />

      <div className={styles.menu}>
        <a className={styles.menuItem}> HOME </a>
        <a className={styles.menuItem}>LISTINGS</a>
        <a className={styles.menuItem}>ABOUT</a>
        <a className={styles.menuItem}>CONTACT</a>
        {/* {showState !== "login" && <Button title="LOGIN / SIGN UP" />} */}
        {showState && (
          <Button onClick={() => setShowState(false)} title="LOGIN / SIGN UP" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
