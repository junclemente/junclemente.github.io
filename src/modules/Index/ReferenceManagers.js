import * as React from "react"
import * as cls from "./classes"

const ReferenceManagers = () => (
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
)

export default ReferenceManagers
