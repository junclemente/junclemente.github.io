import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faGlobeAmericas
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faHtml5,
  faReact,
  faPython,
  faAws,
  faGoogle,
  faJsSquare,
  faYelp,
  faCss3Alt,
  faLinux,
  faPhp,
  faWordpress,
  faInstagram,
  faLinkedin,
  faFlickr,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Icon.module.scss";

const fontIcons = {
  html5: faHtml5,
  react: faReact,
  python: faPython,
  aws: faAws,
  google: faGoogle,
  javascript: faJsSquare,
  yelp: faYelp,
  css3: faCss3Alt,
  linux: faLinux,
  php: faPhp,
  wordpress: faWordpress,
  instagram: faInstagram,
  linkedin: faLinkedin,
  flickr: faFlickr,
  email: faEnvelopeOpen,
  envelope: faEnvelope,
  github: faGithubSquare,
  website: faGlobeAmericas
};

const Icon = ({ icon, className, iconStyle, children }) => {
  return (
    <div className={cx(styles.root, className)}>
      <FontAwesomeIcon
        className={cx(styles.icon, iconStyle)}
        icon={fontIcons[icon]}
      />
      {children}
    </div>
  );
};

export default Icon;
