import React from "react";
import NavBar from "../../_components/navbar/NavBar";
import CardContainer from "../../_components/cardContainer/CardContainer";
import Footer from "../../_components/footer/Footer";
import BgImage from "../../_assets/png/bg-img.png";
import styles from "./FeaturePage.module.css";

const FeaturePage = () => {
  return (
    <div className={styles.parent}>
      <NavBar />
      <CardContainer />
      <Footer />
      <img className={styles.bgImage} src={BgImage} alt="bgImg" />
    </div>
  );
};

export default FeaturePage;
