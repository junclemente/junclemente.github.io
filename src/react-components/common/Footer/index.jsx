import React from "react";
import cx from "classnames";
import Icon from "../Icon";
import styles from "./Footer.module.scss";

const Footer = ({ classNames }) => (
  <div className={cx(styles.root, classNames)}>
    <div className={styles.footer}>
      <div className={styles.content}>
        <Icon className={styles.icon} icon="email">
          <a
            className={styles.link}
            href="mailto:kjstudios858@gmail.com"
            alt="Email"
          >
            Email
          </a>
        </Icon>
        <Icon className={styles.icon} icon="linkedin">
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/junclemente"
            alt="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Icon>
        <Icon className={styles.icon} icon="instagram">
          <a
            className={styles.link}
            href="https://www.instagram.com/code_and_light"
            alt="Instagram"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </Icon>
        <Icon className={styles.icon} icon="flickr">
          <a
            className={styles.link}
            href="https://www.flickr.com/juncphotos"
            alt="Flickr"
            rel="noopner noreferrer"
          >
            Flickr
          </a>
        </Icon>
      </div>
    </div>
  </div>
);

export default Footer;
