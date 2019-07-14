import React from "react";
import cx from "classname";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ className, projectTitle, image, description, link }) => (
  <div className={cx(styles.root, className)}>
    <div>{projectTitle}</div>
    <img src={image} alt={projectTitle} />
    <p>{description}</p>
  </div>
);

export default ProjectCard;
