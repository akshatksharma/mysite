import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Home } from "@styled-icons/ionicons-outline"

const Pagenav = ({ siteTitle }) => {
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])

  return (
    <nav className={scrolling ? "navBar hidden" : "navBar"}>
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
}

Pagenav.propTypes = {
  siteTitle: PropTypes.string,
}

Pagenav.defaultProps = {
  siteTitle: ``,
}

export default Pagenav
