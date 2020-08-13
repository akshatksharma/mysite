import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/_page.scss"

const Justacal = () => (
  <Layout isHome={false}>
    <SEO title="Sunshine" />
    <main className="projectPage">
      <header className="titleHeader" style={{ color: "#b0c7e3" }}>
        <h1 className="title">Just a Cal</h1>
      </header>
      <section className="content">
        <div className="mainText">
          <h2 className="subtitle">What it is</h2>A fullstack application that
          imitates Google Calendar. Users can authenticate, add events, perform
          CRUD operations, and categorize them based on self-made, color-coded
          tags. User data is communicated across the frontend and backend
          through JSON. <br /> <br /> This project was guided by WashU's CSE330
          course. However, I wanted to challenge myself by going beyond the
          project requirements. I implemented new features, such event tagging,
          and prioritized the site's UI and UX.
          <h2 className="subtitle">What I did</h2>
          <ul className="tasks">
            <li>
              Used MySQL to make a relational database of users, calendar
              events, and tags.
            </li>
            <li>
              Optimized event lookup time by restructuring JSON data to have
              each event’s data keyed by its date
            </li>
            <li>
              Supported authentication by storing usernames and hashed+salted
              passwords in a mySQL database on AWS EC2.
            </li>
            <li>
              Defended against CSRF, XSS, and SQL Injections via user token
              checks, escaped output, and prepared queries
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
              href="http://ec2-3-16-89-67.us-east-2.compute.amazonaws.com/~akshatksharma/module5/calendar/index.php"
              className="siteLink actionButton"
            >
              Link
            </a>
            <a
              href="https://github.com/akshatksharma/justacal"
              className="gitLink actionButton"
            >
              Source
            </a>
          </div>
          <div className="stack">
            <h2 className="subheading">Stack</h2>
            <p>Javascript, PHP, MySQL, Apache, AWS</p>
          </div>
          <div className="date">
            <h2 className="subheading">Date</h2>
            <p>July 2020</p>
          </div>
        </aside>
      </section>
    </main>
  </Layout>
)

export default Justacal
