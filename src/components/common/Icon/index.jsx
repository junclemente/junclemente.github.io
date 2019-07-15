import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
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
  faFlickr
} from "@fortawesome/free-brands-svg-icons";

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
  envelope: faEnvelope
};

const Icon = ({ icon, className }) => {
  return <FontAwesomeIcon className={className} icon={fontIcons[icon]} />;
};

export default Icon;
