import * as React from "react"
import * as cls from "./classes"

const Links = () => (
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
)

export default Links
