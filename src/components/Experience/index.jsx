import React from "react";
import cx from "classname";
import SectionTitle from "../common/SectionTitle";
import styles from "./Experience.module.scss";

const Experience = ({ className }) => (
  <div className={cx(styles.root, className)}>
    <SectionTitle title="Experience" />
    <div className={styles.content}>
      <p>test</p>
    </div>
  </div>
);

export default Experience;
