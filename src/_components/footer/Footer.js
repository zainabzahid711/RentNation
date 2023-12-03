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
          <div className={styles.footerList}>
            <h4 className={styles.listHeading}>Quick Links</h4>
            <ul>
              <li>
                <a className={styles.listItem}> Cars for rent </a>
              </li>
              <li>
                <a className={styles.listItem}> Beach for rent </a>
              </li>
              <li>
                <a className={styles.listItem}> Kayaks for rent </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerListM}>
            <h4 className={styles.listHeading}>Menehariya</h4>
            <ul className={styles.methernal}>
              <li>
                <a className={styles.listItem}> Contact Us </a>
              </li>
              <li>
                <a className={styles.listItem}>About Us </a>
              </li>
              <li>
                <a className={styles.listItem}> Terms & Condition </a>
              </li>
              <li>
                <a className={styles.listItem}> Privacy Policy </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerListT}>
            <h4 className={styles.listHeading}>Trending search</h4>
            <ul>
              <li>
                <a className={styles.listItem}> Lorem Ipsum </a>
              </li>
              <li>
                <a className={styles.listItem}> Lorem Ipsum </a>
              </li>
              <li>
                <a className={styles.listItem}> Lorem Ipsum </a>
              </li>
              <li>
                <a className={styles.listItem}> Lorem Ipsum </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <h4 className={styles.listHeading}>Social Medias</h4>
            <img
              className={styles.socialLogos}
              src={socialLogos}
              alt="social-logo"
            />
          </div>
        </div>
        {/* this */}
      </div>
      <p className={styles.lastText}>© Rentnation2023</p>
    </div>
  );
};
export default Footer;
