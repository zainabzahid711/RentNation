import React from "react";
import Logo from "../../_assets/svg/logo.svg";
import styles from "./NavBar.module.css";
import Button from "../button/Button";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <img className={styles.logo} src={Logo} alt="company-logo" />

      <div className={styles.menu}>
        <a className={styles.menuItem}> HOME </a>
        <a className={styles.menuItem}>LISTINGS</a>
        <a className={styles.menuItem}>ABOUT</a>
        <a className={styles.menuItem}>CONTACT</a>
        <Button title="LOGIN / SIGN UP" />
      </div>
    </div>
  );
};

export default NavBar;
