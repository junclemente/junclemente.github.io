import React from "react";
import { Markup } from "interweave";
import Button from "../Button";
import Icon from "../Icon";
import styles from "./ProjectDetail.module.scss";

const ProjectDetail = ({ title, url, code, description, onRequestClose }) => (
  <div className={styles.root}>
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.linkWrapper}>
        {url && (
          <Icon className={styles.icon} icon="website">
            <a
              className={styles.link}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </a>
          </Icon>
        )}
        {code && (
          <Icon className={styles.icon} icon="github">
            <a
              className={styles.link}
              href={code}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </Icon>
        )}
      </div>
      <Markup className={styles.description} content={description} />
      <Button
        className={styles.button}
        theme="secondary"
        type="button"
        onClick={onRequestClose}
      >
        Close
      </Button>
    </div>
  </div>
);

export default ProjectDetail;
