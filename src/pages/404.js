import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const PageNotFound = () => {
  return (
    <Layout>
      <h1>404 Error</h1>
      <p>The page you are looking for may not exist.</p>
      <Link to="/">Go home.</Link>
    </Layout>
  )
}

export default PageNotFound

export const Head = () => {
  return <title>404 - Page Not Found</title>
}
