import React from "react";
import styles from './CardContainer.module.css'
import Card from "../card/Card";

const CardContainer = () =>{
  return (
    <div className={styles.cardContainer}>
       <h1 className={styles.mainHeading}> Featured Golf Cart for Rent </h1>
       <div className={styles.cardWrapper}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

       </div>
       <p className={styles.seeMore} > See More </p>
    </div>
  )
}

export default CardContainer