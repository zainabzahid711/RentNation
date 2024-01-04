import React from "react";
import styles from "./ContactUs.module.css";
import locationIcon from "../../_assets/svg/location.svg";
import phoneIcon from "../../_assets/svg/phone.svg";
import mailIcon from "../../_assets/svg/mail.svg";
import Button from "../button/Button";
import PackageListing from "../packageListings/PackageListing";

const ContactUs = () => {
  return (
    <div>
      <PackageListing />
      <div className={styles.ContactUsNow}>
        <div className={styles.ContactUs}>
          <h1 className={styles.UsHeading}>Contact Us</h1>
          <p className={styles.UsPara}>
            Contact us now if you have any question. Lorem ipsum dolor sit
            adipiscing elit.
          </p>
          <Button
            title="Contact Now"
            background="transparent"
            padding="6px 30px"
            color="#FFAE1B"
            border="1px solid #FFAE1B"
            borderRadius="10px"
          />
        </div>
        <div className={styles.ContactAdress}>
          <div className={styles.contactVia}>
            <img
              className={styles.ContactIcon}
              src={phoneIcon}
              alt="phone icon"
            />
            <span> +44 65748435748 </span>
          </div>
          <div className={styles.contactVia}>
            <img
              className={styles.ContactIcon}
              src={mailIcon}
              alt="mail icon"
            />
            <span> contact@rentnation.com </span>
          </div>
          <div className={styles.contactVia}>
            <img
              className={styles.ContactIcon}
              src={locationIcon}
              alt="location icon"
            />
            <span> New York, NY </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
