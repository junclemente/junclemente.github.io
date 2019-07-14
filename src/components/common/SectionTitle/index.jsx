import React from "react";
import cx from "classnames";
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ className, title }) => (
  <div className={cx(styles.root, className)}>
    <h1 className={styles.content}>{title}</h1>
  </div>
);

export default SectionTitle;
