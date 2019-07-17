import React from "react";
import cx from "classnames";
import SectionTitle from "../common/SectionTitle";
import styles from "./About.module.scss";

const About = ({ className }) => (
  <div className={cx(styles.root, className)}>
    <div className={styles.container}>
      <SectionTitle title="About Me" />
      <div className={styles.content}>
        <p>
          I am a full stack web developer, knowledgeable in developing the
          logical, software side and the visual, user-facing side of your
          website.
        </p>

        <p>
          I used to worked in the pharmaceutical/biotech industry but after
          participating in "Code Year 2012", I discovered that I really enjoyed
          coding. I decided to take programming a little more seriously and took
          Thinkful.com's Python Programming and Backend Development course.
          Afterwards, I developed a Training Website for the company I was
          working for. This site focused on delivering and tracking employee
          training using the various technologies I learned through Thinkful,
          mainly using Python and MySQL database.
        </p>
        <p>
          Over the past two years, I decided that I wanted to switch careers to
          become a developer. To help with that, I went with Udacity.com's
          Nanodegree programs. Since I already have knowledge of back-end
          programming through Thinkful, I decided to take the Front-End Web
          Developer Nanodegree Program. After completing that nanodegree, I felt
          that I needed a little bit more. To refresh my knowledge in back-end
          development and to learn new technologies that I didn't learn
          previously, I enrolled in the Full Stack Web Developer Nanodegree
          Program.
        </p>

        <p>
          Thanks for stopping by and please check out my projects. If you'd like
          me to help you with your website, please contact me through email or
          connect with me on LinkedIn.
        </p>
      </div>
    </div>
  </div>
);

export default About;
