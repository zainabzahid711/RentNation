import React from "react";
import styles from "./CardContainer.module.css";
import Card from "../card/Card";
import poloCars from "../../_assets/png/polo cars.png";
import blurCars from "../../_assets/png/blur cars.png";

const cardData = [
  {
    image: poloCars,
    price: "40",
    location: "germany",
    heading: "Golf Items",
  },
  {
    image: blurCars,
    price: "50",
    location: "france",
    heading: "Golf Card",
  },
  {
    image: poloCars,
    price: "40",
    location: "germany",
    heading: "Golf Items",
  },
  {
    image: blurCars,
    price: "50",
    location: "france",
    heading: "Golf Card",
  },
  {
    image: poloCars,
    price: "40",
    location: "germany",
    heading: "Golf Items",
  },
  {
    image: blurCars,
    price: "50",
    location: "france",
    heading: "Golf Card",
  },
  {
    image: poloCars,
    price: "40",
    location: "germany",
    heading: "Golf Items",
  },
  {
    image: blurCars,
    price: "50",
    location: "france",
    heading: "Golf Card",
  },
];

const CardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.mainHeading}> Featured Golf Cart for Rent </h1>
      <div className={styles.cardWrapper}>
        {/* card mapping start */}

        {cardData.map((item) => (
          <Card
            img={item.image}
            price={item.price}
            location={item.location}
            heading={item.heading}
          />
        ))}

        {/* end */}
      </div>
      <p className={styles.seeMore}> See More </p>
    </div>
  );
};

export default CardContainer;
