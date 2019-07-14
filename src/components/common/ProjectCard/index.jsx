import React from "react";
import cx from "classnames";
import Icon from "../Icon";
import SpaceBetween from "../SpaceBetween";
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
    <div>{projectTitle}</div>
    <img src={image} alt={projectTitle} />
    <p>{description}</p>
    {/* <SpaceBetween spacing="mr5"> */}
    {techIcons.map(techIcon => (
      <Icon className="mh2 f1 flex flex-column" icon={techIcon} />
    ))}
    {/* </SpaceBetween> */}
  </div>
);

export default ProjectCard;
