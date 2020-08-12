import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/_page.scss"

const Postup = () => (
  <Layout isHome={false}>
    <SEO title="Postup" />
    <main className="projectPage">
      <header className="titleHeader" style={{ color: "#e95428" }}>
        <h1 className="title">Postup</h1>
      </header>
      <section className="content">
        <div className="mainText">
          <h2 className="subtitle">What</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <h2 className="subtitle">How</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <aside className="sideBar">
          <div className="links">
            <a
              href="https://groundedarchive.com/"
              className="siteLink actionButton"
            >
              Link
            </a>
            <a
              href="https://github.com/akshatksharma/postup"
              className="gitLink actionButton"
            >
              Source
            </a>
          </div>
          <div className="stack">
            <h2 className="subheading">Stack</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="date">
            <h2 className="subheading">Date</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </aside>
      </section>
    </main>
  </Layout>
)

export default Postup
