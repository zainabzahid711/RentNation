import React from "react";

import styles from "./OrderPage.module.css";
import NavBar from "../../_components/navbar/NavBar";
import BgImage from "../../_assets/png/bg-img.png";
import RightHalf from "../../_assets/png/rightHalfcircle.png";
import OrderCardContainer from "../../_components/orderCardContainer/OrderCardContainer";

const OrderPage = () => {
  return (
    <div>
      <NavBar />
      <OrderCardContainer />
      <img className={styles.BgLeft} src={BgImage} alt="leftHalfcircle"></img>
      <img
        className={styles.Bgright}
        src={RightHalf}
        alt="rightHalfcircle"
      ></img>
    </div>
  );
};

export default OrderPage;
