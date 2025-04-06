import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  console.log("Layout rendered")
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
