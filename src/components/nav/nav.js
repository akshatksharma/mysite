import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Home, Happy, Code, Person } from "@styled-icons/ionicons-outline"

const Nav = ({ siteTitle }) => {
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
        <button className="navItem" onClick={() => scrollTo("#works")}>
          <div className="navLink">
            <Code size="32" />
            <span className="linkText">Work</span>
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
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
