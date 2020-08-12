import PropTypes from "prop-types"
import { Link } from "gatsby"
import React from "react"
import { Home } from "@styled-icons/ionicons-outline"

const Pagenav = ({ siteTitle }) => (
  <nav className="navBar">
    <div className="nav pageNav">
      <button className="navItem">
        <Link to="/" className="navLink">
          <Home size="32" />
          <span className="linkText">Home</span>
        </Link>
      </button>
    </div>
  </nav>
)

Pagenav.propTypes = {
  siteTitle: PropTypes.string,
}

Pagenav.defaultProps = {
  siteTitle: ``,
}

export default Pagenav
