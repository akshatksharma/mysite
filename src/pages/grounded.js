import React from "react"

import Layout from "components/layout/layout"
import SEO from "components/seo"

import "styles/_page.scss"

const Grounded = () => (
  <Layout isHome={false}>
    <SEO title="Grounded" />
    <main className="projectPage">
      <header className="titleHeader" style={{ color: "#f6c36b" }}>
        <h1 className="title">Grounded</h1>
      </header>
      <section className="content">
        <div className="mainText">
          <h2 className="subtitle">What it was</h2>
          Grounded: The Pandemic Archive is a project that serves to take a
          snapshot of the COVID-19 pandemic. Users are encouraged share how they
          have found new meaning in the physical spaces and objects around them
          while in quanatine. Each submission consists of an image and a story,
          which can be recorded or typed. Built in collaboration with Design for
          America, I led the site's frontend work.
          <br />
          <br />
          The site is currently down, as we are in the process of scaling our
          backend in preparation for a second, more expanded phase of
          submissions. In the meantime, I have linked a copy of the frontend.
          <h2 className="subtitle">What I did</h2>
          <ul className="tasks">
            <li>
              Led front end development by outlining product backlog with client
              and data types with backend team.
            </li>
            <li>
              Streamlined site’s UI and UX by working with Figma wireframes made
              by the design team.
            </li>
            <li>
              Reduced user recording file size by 71% by implementing a custom
              audio recorder with WebRTC APIs.
            </li>
            <li>
              Prioritized accessibility with semantic html, keyboard support,
              and appropriate ARIA tags.
            </li>
          </ul>
        </div>
        <aside className="sideBar">
          <div className="links">
            <a
              href="https://grounded-archive-frontend.netlify.app/"
              className="siteLink actionButton"
            >
              Link
            </a>
            <a
              href="https://github.com/hanlisa/QuarantineNarratives"
              className="gitLink actionButton"
            >
              Source
            </a>
          </div>
          <div className="role">
            <h2 className="subheading">Role</h2>
            <p>Lead Frontend Developer</p>
          </div>
          <div className="stack">
            <h2 className="subheading">Stack</h2>
            <p>React.js, HTML5, CSS3, AWS, Express</p>
          </div>
          <div className="date">
            <h2 className="subheading">Date</h2>
            <p>June 2020 - Present</p>
          </div>
        </aside>
      </section>
    </main>
  </Layout>
)

export default Grounded
