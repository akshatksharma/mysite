import PropTypes from "prop-types"
import React, { useState, useEffect, useContext } from "react"
import { ThemeContext } from "./themeContext"
import ClientOnly from "./clientOnly"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Home, Happy, Code, Person } from "@styled-icons/ionicons-outline"

const Nav = ({ siteTitle }) => {
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [isChecked, setIsChecked] = useState(false)
  const { colorTheme, setColorTheme } = useContext(ThemeContext)

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

  useEffect(() => {
    if (colorTheme === "dark") {
      setIsChecked(true)
    }
  }, [colorTheme])

  const toggleColor = () => {
    if (isChecked) {
      setColorTheme("light")
      setIsChecked(false)
    } else {
      setColorTheme("dark")
      setIsChecked(true)
    }
  }

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
        <ClientOnly>
          <div className="navItem toggle">
            <p>Dark?</p>
            <input type="checkbox" onChange={toggleColor} checked={isChecked} />
          </div>
        </ClientOnly>
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
