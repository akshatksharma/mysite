import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/_page.scss"

const Mazeviz = () => (
  <Layout isHome={false}>
    <SEO title="Grounded" />
    <main className="projectPage">
      <header className="titleHeader" style={{ color: "#20233b" }}>
        <h1 className="title">MazeViz</h1>
      </header>
      <section className="content">
        <div className="mainText">
          <h2 className="subtitle">What it is</h2>
          Mazeviz is a project I made to become more comfortable with vanilla
          Javascript, Graph search algorithms, and visualization. I enjoy
          learning with visuals, so I wanted to make concepts in class come to
          life in an easy to use and informative site. As a TA for my school's
          data structures/algorithms class, I used this site to make
          these algorithms 'click' for the students I teach as well.
          <h2 className="subtitle">What I did</h2>
          <ul className="tasks">
            <li>
              Implemented Dijkstra’s, A*, BFS, and DFS with options for walls
              and weights
            </li>
            <li>
              Added animation speed control and reduced animation modes to
              improve performance.
            </li>
            <li>
              Used web workers during algorithm calculations to prevent render
              blocking
            </li>
          </ul>
        </div>
        <aside className="sideBar">
          <div className="links">
            <a
              href="https://mazeviz.netlify.app/"
              className="siteLink actionButton"
            >
              Link
            </a>
            <a
              href="https://github.com/akshatksharma/mazeviz"
              className="gitLink actionButton"
            >
              Source
            </a>
          </div>
          <div className="stack">
            <h2 className="subheading">Stack</h2>
            <p>Javascript, HTML5, Tailwind CSS, Parcel.js</p>
          </div>
          <div className="date">
            <h2 className="subheading">Date</h2>
            <p>May - June 2020</p>
          </div>
        </aside>
      </section>
    </main>
  </Layout>
)

export default Mazeviz
