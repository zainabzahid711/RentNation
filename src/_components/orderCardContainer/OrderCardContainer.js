import React from "react";
import styles from "./OrderCardContainer.module.css";
import OrderCard from "../card/OrderCard";
import mainbikes from "../../_assets/png/bikes.png";

// //array passing

// const OrdercardArry = [
//   {
//     image: mainbikes,
//   }
// ]
const OrderCardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.mainHeading}> Orders </h1>
      <div className={styles.cardBooking}>
        <span> Booked </span>
        <span className={styles.clordSpan}> See All </span>
      </div>
      <div className={styles.cardWrapper}>
        <OrderCard
          img={mainbikes}
          heading="Midsize suv"
          people="5 people"
          limits="Unlimited Milage"
          location="Alibey island"
          views="569"
        />
      </div>
    </div>
  );
};

export default OrderCardContainer;
