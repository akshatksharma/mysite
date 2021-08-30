import React from "react"
import Layout from "components/layout/layout"
import SEO from "components/seo"

import "../styles/_page.scss"

const SkillTree = () => (
  <Layout isHome={false}>
    <SEO title="Postup" />
    <main className="projectPage">
      <header className="titleHeader" style={{ color: "#a0ccaa" }}>
        <div>
          <h1 className="title">SkillTree</h1>
          <p>A new way for people to build new skills</p>
        </div>
      </header>
      <section className="content">
        <div className="figma-container figma-container--skilltree">
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            width="1440"
            height="1024"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fsu8LLZZtA6ojwFdOBEZdAW%2Fpresentation%3Fpage-id%3D0%253A1%26node-id%3D22%253A22%26viewport%3D277%252C48%252C0.06%26scaling%3Dscale-down-width"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </main>
  </Layout>
)

export default SkillTree
