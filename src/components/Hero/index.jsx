import React from "react";
import cx from "classname";
import styles from "./Hero.module.scss";
import Image from "./mw-joshuatrees.jpg";

const Hero = ({ className }) => (
  <div className={cx(styles.root, className)}>
    <div
      className={styles.heroImage}
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.title}>
          <h1 className={styles.titleText}>
            {"<"}Code{">"}
          </h1>
          <p>and</p>
          <h1 className={cx(styles.titleText, styles.cursive)}>light</h1>
        </div>
        <div className={styles.text}>
          <p>Hi! I am a web developer based in Southern California... </p>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
