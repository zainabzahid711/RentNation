import React, { useState } from "react";

import styles from "./OrderPage.module.css";
import NavBar from "../../_components/navbar/NavBar";
import BgImage from "../../_assets/png/bg-img.png";
import RightHalf from "../../_assets/png/rightHalfcircle.png";
import OrderCardContainer from "../../_components/orderCardContainer/OrderCardContainer";

const OrderPage = () => {
  // const [currentState, setCurrentState] = useState(false);
  // function handleHide() {
  //   setCurrentState(false);
  // }
  // function handleShow() {
  //   setCurrentState(true);
  // }
  return (
    // <div>
    //   {currentState && <h1> zainab </h1>}
    //   <button onClick={handleHide}> hide </button>
    //   <button onClick={handleShow}> show </button>
    // </div>

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
