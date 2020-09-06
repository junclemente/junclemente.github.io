import React from "react";
import cx from "classnames";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";
import { projects, websites } from "./projects/projects-data";
import styles from "./Experience.module.scss";

const Experience = ({ className }) => {
  return (
    <div className={cx(styles.root, className)}>
      <div className={styles.container}>
        <SectionTitle title="Experience" />
        <div className={styles.content}>
          {projects.map((project, i) => (
            <ProjectCard
              className={styles.card}
              key={i}
              projectInfo={project}
            />
          ))}
        </div>
        <div className={styles.content}>
          {websites.map((website, i) => (
            <ProjectCard
              className={styles.card}
              key={i}
              projectInfo={website}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
