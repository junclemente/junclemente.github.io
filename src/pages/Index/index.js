import * as React from "react"
import Layout from "../../components/Layout"
import * as cls from "../../styles/classes"

const IndexPage = () => {
  return (
    <Layout>
      <div className={cls.centered}>
        <h1 className={cls.heading1}>Welcome to my professional portfolio!</h1>
      </div>
      <section className={`${cls.container} ${cls.section}`}>
        <p className={cls.paragraph}>
          As I embark on the exciting journey of re-developing this website, I
          am thrilled to offer you a glimpse into my career and professional
          experiences. This digital space will soon serve as a comprehensive
          repository of my resume, showcasing the diverse skill set and
          accomplishments I've accumulated throughout my professional journey.
          From project highlights to educational background, I aim to provide
          you with a detailed overview of my capabilities and achievements. Stay
          tuned as I craft a platform that not only reflects my dedication to
          excellence but also serves as a testament to my passion for continuous
          growth and contribution in the professional realm. Thank you for
          visiting, and I look forward to sharing my professional story with
          you.
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
      <div className={cls.subsection}>
        <section className={`${cls.container} ${cls.section}`}>
          <h3>Links</h3>
          <h5>
            University of San Diego - Master of Science in Applied Data Science
            (MSADS)
          </h5>
          <div>
            <ul className={cls.list}>
              <li>
                <a
                  className={cls.link}
                  href="https://mycas.sandiego.edu/cas/login?service=https%3A%2F%2Fmy.sandiego.edu%3A443%2Fmysandiegoportal%2F"
                  rel="noreferrer"
                  target="_blank"
                >
                  Student Portal
                </a>
              </li>
              <li>
                <a
                  className={cls.link}
                  href="https://onlinedegrees.sandiego.edu/studentsuccess/msads/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Student Success Center MS-ADS
                </a>
              </li>
              <li>
                <a
                  className={cls.link}
                  href="https://sandiego.instructure.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  CANVAS Dashboard
                </a>
              </li>
              <li>
                <a
                  className={cls.link}
                  href="https://www.sandiego.edu/library/"
                  rel="noreferrer"
                  target="_blank"
                >
                  USD's Copley Library
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className={`${cls.container} ${cls.section}`}>
          <h3>Reference Managers</h3>
          <ul className={cls.list}>
            <li>
              <a
                className={cls.link}
                href="https://www.zotero.org/user/login/"
                rel="noreferrer"
                target="_blank"
              >
                Zotero
              </a>
            </li>
            <li>
              <a
                className={cls.link}
                href="https://clarivate.com"
                rel="noreferrer"
                target="_blank"
              >
                EndNote
              </a>
            </li>
            <li>
              <a
                className={cls.link}
                href="https://www.mendeley.com/search/"
                rel="noreferrer"
                target="_blank"
              >
                Mendeley
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return <title>Home</title>
}
