import React from "react";
import styles from "./OrderCardContainer.module.css";
import OrderCard from "../card/OrderCard";

const OrderCardContainer = () => {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.mainHeading}> Orders </h1>
      <div className={styles.cardBooking}>
        <span> Booked </span>
        <span className={styles.clordSpan}> See All </span>
      </div>
      <div className={styles.cardWrapper}>
        <OrderCard />
      </div>
    </div>
  );
};

export default OrderCardContainer;
