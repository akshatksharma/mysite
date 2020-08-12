import PropTypes from "prop-types"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Home, Happy, Code, Person } from "@styled-icons/ionicons-outline"

const Nav = ({ siteTitle }) => (
  <nav className="navBar">
    <div className="nav">
      <button className="navItem" onClick={() => scrollTo("#home")}>
        <div className="navLink">
          <Home size="32" />
          <span className="linkText">Home</span>
        </div>
      </button>
      <button className="navItem" onClick={() => scrollTo("#about")}>
        <div className="navLink">
          <Happy size="32" />
          <span className="linkText">About</span>
        </div>
      </button>
      <button className="navItem" onClick={() => scrollTo("#projects")}>
        <div className="navLink">
          <Code size="32" />
          <span className="linkText">Projects</span>
        </div>
      </button>
      <button className="navItem" onClick={() => scrollTo("#contact")}>
        <div className="navLink">
          <Person size="32" />
          <span className="linkText">Contact</span>
        </div>
      </button>
    </div>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
