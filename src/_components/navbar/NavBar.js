import React, { useState } from "react";
import Logo from "../../_assets/svg/logo.svg";
import styles from "./NavBar.module.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    // setMenuOpen((prevState) => !prevState);
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.navBar}>
        <img className={styles.logo} src={Logo} alt="company-logo" />
        <div style={{ gap: "20px" }}>
          <div className={styles.menuIcon} onClick={handleClick}>
            <FaBars />
          </div>
          {!isMenuOpen && (
            <div className={`${isMenuOpen ? styles.showMenu : styles.menu}`}>
              <Link to="/" className={styles.menuItem}>
                HOME
              </Link>
              <div className={`${styles.dropdown} ${styles.menuItem}`}>
                LISTINGS
                <div className={styles.dropdownContent}>
                  <Link className={styles.dropdownItem} to="/featurePage">
                    FeaturePage
                  </Link>
                  <Link className={styles.dropdownItem} to="/orderPage">
                    OrderPage
                  </Link>
                </div>
              </div>
              <Link to="/about" className={styles.menuItem}>
                ABOUT
              </Link>
              <Link to="/contact" className={styles.menuItem}>
                CONTACT
              </Link>
              <Link to="/signup">
                <Button title="LOGOUT" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
