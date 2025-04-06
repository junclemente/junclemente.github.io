import React from "react"
import SeoHead from "../../components/SeoHead"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import * as cls from "./cls"

const PageNotFound = () => (
  <>
    <SeoHead
      title="Page Not Found"
      description="Oops! The page you're looking for doesn't exist."
    />
    <Layout>
      <h1 className={cls.heading1}>404 Error</h1>
      <p className={cls.paragraph}>
        The page you are looking for may not exist.
      </p>
      <Link to="/" className={cls.link}>
        Go home.
      </Link>
    </Layout>
  </>
)

export default PageNotFound
