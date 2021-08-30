import React from "react"
import Layout from "components/layout/layout"
import SEO from "components/seo"

import "../styles/_page.scss"

const WebSTAC = () => (
  <Layout isHome={false}>
    <SEO title="Postup" />
    <main className="projectPage">
      <header className="titleHeader" style={{ color: "#fe5e55" }}>
        <div>
          <h1 className="title">WebSTAC Redesign</h1>
          <p>Learning why course selection sucks</p>
        </div>
      </header>
      <section className="content">
        <div className="figma-container figma-container--webstac">
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            width="1440"
            height="1024"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fi0DaXzp66YyQaTHiPOyJQm%2FWebSTAC-Redesign%3Fpage-id%3D190%253A2795%26node-id%3D190%253A2799%26viewport%3D277%252C48%252C0.52%26scaling%3Dscale-down-width%26starting-point-node-id%3D190%253A2799"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </main>
  </Layout>
)

export default WebSTAC
