import React from "react";
import styles from "./Footer.module.css";
import rentLogo from "../../_assets/svg/logo.svg";
import socialLogos from "../../_assets/svg/social-icons.svg";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <img className={styles.rentLogo} src={rentLogo} alt="rent-logo" />
          <p className={styles.footerPara}>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Nunc viverra efficitur <br></br>
            convallis. Mauris non hendrerit nulla.
          </p>
        </div>
        <div className={styles.footerItems}>
          <ul>
            <li>
              <a className={styles.listHeading}> QUICK LINKS </a>
            </li>
            <li>
              <a> Cars for rent </a>
            </li>
            <li>
              <a> Beach for rent </a>
            </li>
            <li>
              <a> Kayaks for rent </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className={styles.listHeading}> MENEHARIYA </a>
            </li>
            <li>
              <a> Contact Us </a>
            </li>
            <li>
              <a>About Us </a>
            </li>
            <li>
              <a> Terms & Condition </a>
            </li>
            <li>
              <a> Privacy Policy </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className={styles.listHeading}> TRENDING SEARCH </a>
            </li>
            <li>
              <a> Lorem Ipsum </a>
            </li>
            <li>
              <a> Lorem Ipsum </a>
            </li>
            <li>
              <a> Lorem Ipsum </a>
            </li>
            <li>
              <a> Lorem Ipsum </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className={styles.listHeading}> SOCIAL MEDIA</a>
            </li>
            <img
              className={styles.socialLogos}
              src={socialLogos}
              alt="social-logo"
            />
          </ul>
        </div>
      </div>
      <p className={styles.lastText}>© Rentnation2023</p>
    </div>
  );
};
export default Footer;
