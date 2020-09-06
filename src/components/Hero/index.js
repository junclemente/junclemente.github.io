import React from "react";
import cx from "classnames";
import styles from "./Hero.module.scss";
import Background from "../Background";

const Hero = () => {
  return (
    <Background>
      <div className={styles.overlay}>
        <div className={styles.title}>
          <h1 className={styles.titleText}>
            {"<"}Code{">"}
          </h1>
          <p className={styles.smallText}>and</p>
          <h1 className={cx(styles.titleText, styles.cursive)}>light</h1>
        </div>
        <div className={styles.text}>
          <p>Hi! I am a web developer based in Southern California...</p>
        </div>
      </div>
    </Background>
  );
};

export default Hero;
