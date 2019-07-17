import React, { useState } from "react";
import cx from "classnames";
import Button from "../Button";
import Icon from "../Icon";
import Modal from "../Modal";
import ProjectDetail from "../ProjectDetail";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ className, projectInfo, link }) => {
  const { title, short_title, image, url, code, desc, icons } = projectInfo;
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const onMouseEnterHandler = () => {
    setHover(true);
  };
  const onMouseLeaveHandler = () => {
    setHover(false);
  };

  const modalOpenHandler = () => {
    setShowModal(true);
  };

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  console.log(hover);
  return (
    <div className={cx(styles.root, className)}>
      <div className={styles.container}>
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
            onClick={modalOpenHandler}
          >
            <img
              className={styles.cardImage}
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
          </div>
        )}
        {icons && (
          <div className={styles.iconsWrapper}>
            {icons.sort().map(techIcon => (
              <Icon key={techIcon} className={styles.icon} icon={techIcon} />
            ))}
          </div>
        )}
      </div>
      {/* {desc && <p>{desc}</p>} */}
      <Modal isOpen={showModal} onRequestClose={modalCloseHandler}>
        <ProjectDetail
          title={title}
          url={url}
          code={code}
          description={desc}
          onRequestClose={modalCloseHandler}
        />
      </Modal>
    </div>
  );
};

export default ProjectCard;
