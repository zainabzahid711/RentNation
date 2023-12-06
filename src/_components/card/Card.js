import React from "react";
import styles from "./Card.module.css";
import mainImage from "../../_assets/png/bikes.png";
import heartLogo from "../../_assets/svg/heart icon.svg";
import Button from "../button/Button";
import locationIcon from "../../_assets/svg/location.svg";
import shareIcon from "../../_assets/svg/share icon.svg";
import eyeIcon from "../../_assets/svg/eye icon.svg";

// const Card = ({ img, price, location, heading }) => {
const Card = (zainab) => {
  return (
    <div className={styles.card}>
      <div className={styles.btn}>
        <Button
          title="Featured"
          background="#FFCE32"
          padding="7px 14px"
          color="#002F34"
        />
      </div>
      <img className={styles.heartLogo} src={heartLogo} alt="heart-logo" />
      <img className={styles.mainImage} src={zainab.img} alt="bikes-pic" />
      <div className={styles.textDiv}>
        <h3 className={styles.heading}> {zainab.heading} </h3>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Consequat tincidunt
        </p>
        <div className={styles.amountDiv}>
          <div className={styles.locationDiv}>
            <img
              className={styles.locationLogo}
              src={locationIcon}
              alt="heart-logo"
            />
            <span className={styles.locationSpan}> {zainab.location} </span>
          </div>
          <div className={styles.dollerDiv}>
            <span> ${zainab.price}/day </span>
          </div>
        </div>
        <div className={styles.lowerDiv}>
          <img className={styles.shareIcon} src={shareIcon} alt="share-logo" />
          <img className={styles.eyeIcon} src={eyeIcon} alt="eye-logo" />
          <Button
            title="View Details"
            background="transparent"
            padding="8px 30px"
            color="#FFAE1B"
            border="1px solid #FFAE1B"
            borderRadius="10px"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
