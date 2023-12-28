import React from "react";
import styles from "./HomePage.module.css";
import NavBar from "../../_components/navbar/NavBar";
import HeroSection from "../../_components/HeroSection/HeroSection";
import CardContainer from "../../_components/cardContainer/CardContainer";
import HomeCard from "../../_components/HomeCards/HomeCard";

const HomePage = () => {
  return (
    <div className={styles.mainHome}>
      <NavBar />
      <HeroSection />
      <HomeCard />
    </div>
  );
};

export default HomePage;
