import React from "react";
import cx from "classnames";
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ className, title }) => (
  <div className={cx(styles.root, className)}>
    <div className={styles.container}>
      <h1 className={styles.content}>{title}</h1>
    </div>
  </div>
);

export default SectionTitle;
