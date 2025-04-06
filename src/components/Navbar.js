import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <nav className="w-100 bg-light-gray pv3 ph4 flex items-center justify-start">
    <Link to="/" className="link dim dark-gray f5 fw6 mr4">
      Home
    </Link>
    <Link to="/topic-assigner" className="link dim dark-gray f5 fw6 mr4">
      Topic Assigner
    </Link>
    <Link to="/projects" className="link dim dark-gray f5 fw6">
      Projects
    </Link>
  </nav>
)

export default Navbar
