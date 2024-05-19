import React from "react";
import style from "./About.module.css";
import Footer from "../../_components/footer/Footer";
import NavBar from "../../_components/navbar/NavBar";

function About() {
  return (
    <>
      <NavBar />
      <div className={style.content}>
        <div className={style.profileHeading}>About Us</div>
        <div className={style.detailcontent}>
          <div className={style.detailing}>
            Welcome to RentNation, your ultimate destination for high-quality
            rental products and exceptional customer service. We are a dedicated
            team of outdoor enthusiasts who believe in the power of exploration
            and adventure. Our mission is to provide you with the finest rental
            experience, offering a wide range of top-notch equipment to make
            your outdoor activities unforgettable.
          </div>
          <div className={style.detailing}>
            At RentNation, we understand that planning outdoor adventures can be
            both exciting and challenging. That's why we strive to make the
            rental process seamless and convenient, allowing you to focus on
            what truly matters – enjoying the great outdoors. Whether you're
            heading to the beach, hitting the golf course, or embarking on a
            thrilling kayaking expedition, we've got you covered. We take great
            pride in curating a diverse selection of rental products that meet
            the highest standards of quality and reliability. Our inventory
            includes premium beach supplies, top-of-the-line golf equipment, and
            state-of-the-art kayaks, ensuring that you have access to the finest
            gear for your outdoor pursuits. Each item is meticulously maintained
            and regularly inspected to guarantee optimal performance and your
            utmost satisfaction.
          </div>
          <div className={style.detailing}>
            At RentNation, we believe in fostering a sense of adventure and
            creating lasting memories. We understand the transformative power of
            nature and its ability to rejuvenate and inspire. That's why we're
            dedicated to making outdoor exploration accessible to everyone,
            regardless of skill level or experience. Whether you're a seasoned
            outdoor enthusiast or a first-time adventurer, our rental options
            cater to all levels of expertise and are designed to enhance your
            enjoyment of the great outdoors.
          </div>
          <div className={style.detailing}>
            We value sustainability and environmental responsibility. Our rental
            products are carefully chosen to minimize our ecological footprint,
            and we actively support initiatives that promote conservation and
            preservation of natural resources. By choosing RentNation, you're
            not only gaining access to top-quality equipment but also
            contributing to a more sustainable and eco-friendly outdoor culture.
          </div>
          <div className={style.detailing}>
            Thank you for considering RentNation for your rental needs. We're
            excited to be a part of your outdoor journey and to help you create
            memories that will last a lifetime. Explore with confidence,
            discover new horizons, and let RentNation be your trusted companion
            in your quest for outdoor adventure!.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
