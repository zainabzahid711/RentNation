import React from "react";

import bikesPic from "../../_assets/png/bikes.png";
import styles from "./HomeCard.module.css";
// import { Card } from "react-bootstrap";
import Card from "../card/Card";

const HomeCard = () => {
  return (
    <div className={styles.HomeCard}>
      <Card
        className={styles.CardinHome}
        img={bikesPic}
        price={495}
        location="Alibey Island"
        heading="Golf Card"
      />
    </div>
  );
};

export default HomeCard;
