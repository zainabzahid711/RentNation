import React from "react";

import bikesPic from "../../_assets/png/bikes.png";
import poloCarsImage from "../../_assets/png/polo cars.png";
import poloImage from "../../_assets/png/blur cars.png";
import beachChairs from "../../_assets/png/beechChairss.png";
import beechRealxing from "../../_assets/png/beechRealxing.png";
import beechPeople from "../../_assets/png/pespleOnbeech.png";
import beechBridge from "../../_assets/png/bridgeOnbeech.png";
import surfingOnOcean from "../../_assets/png/surfingOnOcean.png";
import dolphinOcean from "../../_assets/png/dolphinsOnOcean.png";
import boating from "../../_assets/png/boatingg.png";
import pedalBoat from "../../_assets/png/pedalBoating.png";
import styles from "./HomeCard.module.css";
import Card from "../card/Card";

const cardsVariety = [
  {
    img: bikesPic,
    price: "50",
    location: "Alibey Island",
    heading: "Golf Cart",
  },
  {
    img: poloImage,
    price: "50",
    location: "Akdamar Island",
    heading: "Golf Cart",
  },
  {
    img: poloCarsImage,
    price: "50",
    location: "Tenedos",
    heading: "Golf Cart",
  },
  {
    img: bikesPic,
    price: "50",
    location: "Alibey Island",
    heading: "Golf Cart",
  },
];

const beechArray = [
  {
    img: beachChairs,
    price: "60",
    location: "Heybeliada",
    heading: "Dreamy Beaches",
  },
  {
    img: beechRealxing,
    price: "60",
    location: "Akdamar Island",
    heading: "Dreamy Beaches",
  },
  {
    img: beechPeople,
    price: "60",
    location: "Tenedos",
    heading: "Dreamy Beaches",
  },
  {
    img: beechBridge,
    price: "60",
    location: "Aliby Island ",
    heading: "Dreamy Beaches",
  },
];

const kayaksArray = [
  {
    img: surfingOnOcean,
    price: "80",
    location: "Akdamar Island",
    heading: "Kayaks",
  },
  {
    img: dolphinOcean,
    price: "80",
    location: "Buyukada",
    heading: "Kayaks",
  },
  {
    img: boating,
    price: "80",
    location: "Akdamar Island",
    heading: "Kayaks",
  },
  {
    img: pedalBoat,
    price: "80",
    location: "Buyukada",
    heading: "Kayaks",
  },
];

const HomeCard = () => {
  return (
    <div className={styles.HomeCard}>
      <div className={styles.HomeCardContent}>
        <h1> Featured Golf Cart for rent</h1>
        <div className={styles.cardWrapping}>
          {cardsVariety.map((obj) => (
            <Card
              className={styles.CardinHome}
              img={obj.img}
              price={obj.price}
              location={obj.location}
              heading={obj.heading}
            />
          ))}
        </div>
      </div>

      <div className={styles.HomeCardContent}>
        <h1>Featured beache Supplies for Rent</h1>
        <div className={styles.cardWrapping}>
          {beechArray.map((objBeech) => (
            <Card
              img={objBeech.img}
              price={objBeech.price}
              location={objBeech.location}
              heading={objBeech.heading}
            />
          ))}
        </div>
      </div>

      <div className={styles.HomeCardContent}>
        <h1>Featured Kayaks for Rent</h1>
        <div className={styles.cardWrapping}>
          {kayaksArray.map((objKaya) => (
            <Card
              img={objKaya.img}
              price={objKaya.price}
              location={objKaya.location}
              heading={objKaya.heading}
            />
          ))}
        </div>
      </div>

      <div className={styles.HomeCardContent}>
        <h1> Featured Golf Cart for rent</h1>
        <div className={styles.cardWrapping}>
          {cardsVariety.map((obj) => (
            <Card
              className={styles.CardinHome}
              img={obj.img}
              price={obj.price}
              location={obj.location}
              heading={obj.heading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
