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
          <h2 className="subtitle">What it is</h2>A fullstack application that
          imitates Reddit. Users can authenticate, add posts, comments, and
          reply. It supports CRUD operations for posts and comments and allows
          updating to be perfomed inline. <br /> <br /> This project was guided
          by WashU's CSE330 course. However, I wanted to challenge myself by
          going beyond the project requirements. I implemented new features,
          such as comment threads, and prioritized the site's UI and UX.
          <h2 className="subtitle">What I did</h2>
          <ul className="tasks">
            <li>
              Used MySQL to make a relational database of users, comments, and
              posts.
            </li>
            <li>
              Supported full, color-coded comment threads for each post by
              storing parent commentid in MySQL table
            </li>
            <li>
              Supported user authentication by storing usernames and
              hashed+salted passwords in a MySQL database.
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
              href="http://ec2-3-16-89-67.us-east-2.compute.amazonaws.com/~akshatksharma/module3/postup/home.php"
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
            <p>Javascript, Apache, PHP, MySQL</p>
          </div>
          <div className="date">
            <h2 className="subheading">Date</h2>
            <p>June 2020</p>
          </div>
        </aside>
      </section>
    </main>
  </Layout>
)

export default Postup
