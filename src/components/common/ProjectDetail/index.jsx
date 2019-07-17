import React from "react";
import Button from "../Button";
import styles from "./ProjectDetail.module.scss";

const ProjectDetail = ({ title, url, code, description, onRequestClose }) => (
  <div className={styles.root}>
    <h1>{title}</h1>
    <p>{url}</p>
    <p>{code}</p>
    <p>{description}</p>
    <Button type="button" onClick={onRequestClose}>
      Close
    </Button>
  </div>
);

export default ProjectDetail;
