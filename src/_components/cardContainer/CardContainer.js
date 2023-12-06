import React from "react";
import styles from "./CardContainer.module.css";
import Card from "../card/Card";
import poloCars from "../../_assets/png/polo cars.png";
import blurCars from "../../_assets/png/blur cars.png";

const CardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.mainHeading}> Featured Golf Cart for Rent </h1>
      <div className={styles.cardWrapper}>
        <Card
          img={poloCars}
          price={"40"}
          location={"germany"}
          heading={"Golf Items"}
        />
        <Card
          img={blurCars}
          price={"30"}
          location={"france"}
          heading={"Golf Card"}
        />
      </div>
      <p className={styles.seeMore}> See More </p>
    </div>
  );
};

export default CardContainer;
