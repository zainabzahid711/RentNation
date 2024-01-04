import React from "react";
import styles from "./PackageListing.module.css";
import { ContactCard } from "../card/Card";
import Contactbikes from "../../_assets/png/bikesContactUs.png";
import SurfingBoats from "../../_assets/png/surfingBoatsKayaks.png";
import ContactBeech from "../../_assets/png/beechContactUs.png";

const ListingArray = [
  {
    image: Contactbikes,
    title: "Golf Cart",
    place: "Washington",
    listings: "250+ listings",
  },
  {
    image: ContactBeech,
    title: "Beache Supplies",
    place: "Washington",
    listings: "250+ listings",
  },
  {
    image: SurfingBoats,
    title: "Kayaks",
    place: "Washington",
    listings: "250+ listings",
  },
];

const PackageListing = () => {
  return (
    <div className={styles.PackageListing}>
      <h1 className={styles.ListingHeading}>
        Get Cars, Beaches and Kayaks on Rent
      </h1>
      <p className={styles.ListingPara}>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Proin sodales ultrices nulla blandit volutpat Vestib ulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae.
      </p>
      <div className={styles.ListingWrapping}>
        {ListingArray.map((item) => (
          <ContactCard
            image={item.image}
            title={item.title}
            place={item.place}
            listings={item.listings}
          />
        ))}
      </div>
    </div>
  );
};

export default PackageListing;
