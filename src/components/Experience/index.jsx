import React from "react";
import cx from "classnames";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";
import { projects } from "./projects/my_projects";
import styles from "./Experience.module.scss";

const Experience = ({ className }) => {
  console.log(projects);
  return (
    <div className={cx(styles.root, className)}>
      <SectionTitle title="Experience" />
      <div className={styles.content}>
        {projects.map((project, i) => (
          <ProjectCard className={styles.card} key={i} projectInfo={project} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
