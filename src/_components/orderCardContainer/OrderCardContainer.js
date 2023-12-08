import React from "react";
import styles from "./OrderCardContainer.module.css";
import OrderCard from "../card/OrderCard";
import mainbikes from "../../_assets/png/bikes.png";
import BoatsPicture from "../../_assets/png/boatsImage.png";
import MasksPicture from "../../_assets/png/masksImage.png";

// //array passing

const OrdercardArry = [
  {
    image: mainbikes,
    heading: "Midsize suv",
    people: "5 people",
    limits: "Unlimited Milage",
    location: "Alibey island",
    views: "569",
  },
  {
    image: BoatsPicture,
    heading: "Kayaks",
    people: "2 people",
    limits: "limit exceeded",
    location: "Alibey island",
    views: "569",
  },
  {
    image: MasksPicture,
    heading: "beache Supplies",
    people: "5 people",
    limits: "limited",
    location: "Alibey island",
    views: "569",
  },
];
const OrderCardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.mainHeading}> Orders </h1>
      <div className={styles.cardBooking}>
        <span> Booked </span>
        <span className={styles.clordSpan}> See All </span>
      </div>
      <div className={styles.cardWrapper}>
        {/* cards mapping */}
        {OrdercardArry.map((item) => (
          <OrderCard
            img={item.image}
            heading={item.heading}
            people={item.people}
            limits={item.limits}
            location={item.location}
            views={item.views}
          />
        ))}
        {/* mapping end */}
      </div>
      <div className={styles.cardBooking}>
        <span> Waiver </span>
      </div>
      <OrderCard
        img={mainbikes}
        heading="Damage Report"
        people="5 people"
        limits="limit exceeded"
        location="Pakistan"
        views="only 432"
      />
    </div>
  );
};

export default OrderCardContainer;
