import React from "react";
import PeopleIcon from "../../_assets/svg/peopleicon.svg";
import LimitIcon from "../../_assets/svg/limiticon.svg";
import LocationIcon from "../../_assets/svg/location-yellow.svg";
import ShareIcon from "../../_assets/svg/share icon.svg";
import EyeIcon from "../../_assets/svg/eye.svg";
import styles from "./OrderCard.module.css";
import Button from "../button/Button";

const OrderCard = ({ img, heading, people, limits, location, views }) => {
  return (
    <div className={styles.OrderCard}>
      <div className={styles.cardImage}>
        <img className={styles.mainimg} src={img} alt="mainbikeImage"></img>
      </div>
      <div className={styles.cardText}>
        <div className={styles.cardLeftText}>
          <h2 className={styles.cardHeading}>{heading}</h2>
          <div className={styles.cardLogos}>
            <div className={styles.logosSubdiv}>
              <img
                className={styles.icon}
                src={PeopleIcon}
                alt="people icon"
              ></img>
              <span className={styles.subheading}> {people} </span>
            </div>
            <div className={styles.logosSubdiv}>
              <img
                className={styles.icon}
                src={LimitIcon}
                alt="limit icon"
              ></img>
              <span className={styles.cardspan}> {limits} </span>
            </div>
          </div>
          <div className={styles.locationDiv}>
            <div className={styles.locationSub}>
              <img className={styles.icon} src={LocationIcon} alt=""></img>
              <span>{location}</span>
            </div>
            <span className={styles.spanText}>
              Close to abc and abc and abc
            </span>
          </div>
          <div className={styles.shareDiv}>
            <Button
              title="View Details"
              background="transparent"
              padding="8px 30px"
              color="#FFAE1B"
              border="1px solid #FFAE1B"
              borderRadius="10px"
            />
            <img className={styles.icon} src={ShareIcon} alt=""></img>
            <div className={styles.eyeDiv}>
              <img className={styles.icon} src={EyeIcon} alt=""></img>
              <span className={styles.eyeSpan}>{views}</span>
            </div>
          </div>
        </div>
        <div className={styles.cardRight}>
          <Button
            title="Booked"
            background="#FFAE1B"
            padding="10px 16px"
            color="#121212"
            border="1px solid #FFAE1B"
            borderRadius="4px"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
