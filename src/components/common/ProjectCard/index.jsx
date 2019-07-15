import React, { useState } from "react";
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
}) => {
  const [hover, setHover] = useState(false);
  const onMouseEnterHandler = () => {
    setHover(true);
  };
  const onMouseLeaveHandler = () => {
    setHover(false);
  };
  console.log(hover);
  return (
    <div className={cx(styles.root, className)}>
      <div className={styles.cardTitle}>{projectTitle}</div>

      <div
        className={styles.imageContainer}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <img
          className={styles.cardImage}
          src={image}
          width={200}
          heigh={200}
          alt={projectTitle}
        />
        <div
          className={cx(styles.imageOverlay, {
            [styles.overlayDim]: hover
          })}
        />
      </div>
      <div className={styles.iconsWrapper}>
        {techIcons.map(techIcon => (
          <Icon className={styles.icon} icon={techIcon} />
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
