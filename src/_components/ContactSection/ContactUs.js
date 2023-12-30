import React from "react";
import styles from "./ContactUs.module.css";
import { ContactCard } from "../card/Card";
import Contactbikes from "../../_assets/png/bikesContactUs.png";
import SurfingBoats from "../../_assets/png/surfingBoatsKayaks.png";
import ContactBeech from "../../_assets/png/beechContactUs.png";
import locationIcon from "../../_assets/svg/location.svg";
import phoneIcon from "../../_assets/svg/phone.svg";
import mailIcon from "../../_assets/svg/mail.svg";
import Button from "../button/Button";

const contactArry = [
  {
    image: Contactbikes,
    title: "Golf Cart",
    place: "Washington",
    listings: "250+ listings",
  },
  {
    image: ContactBeech,
    title: "Beache Supplies",
    place: "Washington",
    listings: "250+ listings",
  },
  {
    image: SurfingBoats,
    title: "Kayaks",
    place: "Washington",
    listings: "250+ listings",
  },
];

const ContactUs = () => {
  return (
    <div>
      <h1 className={styles.contactHeading}>
        Get Cars, Beaches and Kayaks on Rent
      </h1>
      <p className={styles.contactPara}>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Proin sodales ultrices nulla blandit volutpat Vestib ulum{" "}
        <br></br>
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae.
      </p>
      <div className={styles.contactWrapping}>
        {contactArry.map((obj1) => (
          <ContactCard
            image={obj1.image}
            title={obj1.title}
            place={obj1.place}
            listings={obj1.listings}
          />
        ))}
      </div>

      <div className={styles.ContactUsNow}>
        <div className={styles.ContactUs}>
          <h1 className={styles.UsHeading}>Contact Us</h1>
          <p className={styles.UsPara}>
            Contact us now if you have any question. Lorem ipsum <br></br>
            dolor sit adipiscing elit.
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
