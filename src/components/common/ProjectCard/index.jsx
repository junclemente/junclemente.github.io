import React from "react";
import cx from "classnames";
import Icon from "../Icon";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({
  className,
  projectTitle,
  image,
  description,
  techIcons,
  link
}) => (
  <div className={cx(styles.root, className)}>
    <div className={styles.title}>{projectTitle}</div>
    <img src={image} width={200} heigh={200} alt={projectTitle} />
    <div>
      {techIcons.map(techIcon => (
        <Icon icon={techIcon} />
      ))}
    </div>
    <p>{description}</p>
  </div>
);

export default ProjectCard;
