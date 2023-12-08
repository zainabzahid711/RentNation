import React from "react";

import styles from "./OrderPage.module.css";
import NavBar from "../../_components/navbar/NavBar";
import OrderCardContainer from "../../_components/orderCardContainer/OrderCardContainer";

const OrderPage = () => {
  return (
    <div>
      <NavBar />
      <OrderCardContainer />
    </div>
  );
};

export default OrderPage;
