import React from "react"
import SeoHead from "../../components/SeoHead"
import Layout from "../../components/Layout"
import * as cls from "./cls"

import Resources from "./Resources"

const IndexPage = () => (
  <>
    <SeoHead
      title="Home - Jun Clemente"
      description="My personal portfolio site - in progress..."
    />
    <Layout>
      <h1 className={`${cls.centered}${cls.heading1}`}>
        Welcome to my professional portfolio!
      </h1>
      <section className={`${cls.container} ${cls.section}`}>
        <p className={cls.paragraph}>
          As I embark on the exciting journey of re-developing this website, I
          am thrilled to offer you a glimpse into my career and professional
          experiences. This digital space will soon serve as a comprehensive
          repository of my resume, showcasing the diverse skill set and
          accomplishments I&apos;ve accumulated throughout my professional
          journey. From project highlights to educational background, I aim to
          provide you with a detailed overview of my capabilities and
          achievements. Stay tuned as I craft a platform that not only reflects
          my dedication to excellence but also serves as a testament to my
          passion for continuous growth and contribution in the professional
          realm. Thank you for visiting, and I look forward to sharing my
          professional story with you.
        </p>
        <p className={cls.paragraph}>
          In the meantime, please check out the following links:
        </p>
        <ul className={cls.list}>
          <li>
            <a
              className={cls.link}
              href="https://linkedin.com/in/junclemente"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className={cls.link}
              href="https://github.com/junclemente"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
      <Resources />
    </Layout>
  </>
)

export default IndexPage
