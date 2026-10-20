import React from "react";
import Video from "../Components/Home/video";
import HomeHeroText from "../Components/Home/HomeHeroText";
import HomeBottomText from "../Components/Home/HomeBottomText";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={`${styles.videoWrapper} ${styles.firstvideo}`}>
        <Video />
      </div>

      <div className={styles.contentWrapper}>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
