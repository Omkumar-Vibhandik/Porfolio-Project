import React from "react";
import styles from "../agence/agence.module.css";

const Video = () => {
  return (
    <div className=" h-full w-screen fixed">
      <video
        className={`h-full w-full object-cover ease-in ${styles.backVideo}`}
        autoPlay
        loop
        muted
        src="./src/assets/backgroundhome.mp4"
      ></video>
    </div>
  );
};

export default Video;
