import React, { useState } from "react";
import cx from "classnames";
import Button from "../Button";
import Icon from "../Icon";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ className, projectInfo, link }) => {
  const { title, short_title, image, desc, icons } = projectInfo;
  const [hover, setHover] = useState(false);
  const onMouseEnterHandler = () => {
    setHover(true);
  };
  const onMouseLeaveHandler = () => {
    setHover(false);
  };
  const onClickHandler = () => {
    alert("clicked");
  };
  console.log(hover);
  return (
    <div className={cx(styles.root, className)}>
      {short_title ? (
        <div className={styles.cardTitle}>{short_title}</div>
      ) : (
        <div className={styles.cardTitle}>{title}</div>
      )}
      {image && (
        <div
          className={styles.imageContainer}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          onClick={onClickHandler}
        >
          <img
            className={styles.cardImage}
            // src="https://via.placeholder.com/200"
            src={require(`./images/${image}`)}
            width={200}
            heigh={200}
            alt={short_title}
          />
          <div
            className={cx(styles.imageOverlay, {
              [styles.overlayDim]: hover
            })}
          />
          <div
            className={cx({
              [styles.hideText]: !hover,
              [styles.overlayText]: hover
            })}
          >
            <Button>More Info</Button>
          </div>
        </div>
      )}
      {icons && (
        <div className={styles.iconsWrapper}>
          {icons.sort().map(techIcon => (
            <Icon key={techIcon} className={styles.icon} icon={techIcon} />
          ))}
        </div>
      )}
      {/* {desc && <p>{desc}</p>} */}
    </div>
  );
};

export default ProjectCard;
