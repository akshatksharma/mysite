/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  LogoTwitter,
  LogoGithub,
  LogoLinkedin,
} from "@styled-icons/ionicons-solid"

import Nav from "./nav"
import Pagenav from "././pagenav"
import "../styles/_resets.scss"
import "normalize.css"
import "../styles/global.scss"

const Layout = ({ children, isHome }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const getNav = () => {
    if (isHome) return <Nav siteTitle={data.site.siteMetadata.title} />
    else return <Pagenav siteTitle={data.site.siteMetadata.title} />
  }

  return (
    <>
      {getNav()}
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </main>
      <footer className="footer" id="contact">
        <div className="content">
          <h2>
            If you'd like to work together, or just talk, feel free to email me
            <a
              className="link"
              href="mailto:akshatksharma@wustl.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              here.
            </a>
          </h2>
          <div className="socialLinks">
            <a href="https://twitter.com/akshatksharma_">
              <LogoTwitter size="32" />
            </a>
            <a href="https://www.linkedin.com/in/akshat-sharma-b1a8401a7/">
              <LogoLinkedin size="32" />
            </a>
            <a href="https://github.com/akshatksharma">
              <LogoGithub size="32" />
            </a>
            {/* <a href=" " target="_blank" rel="noopener" noreferrer>

            </a> */}
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
