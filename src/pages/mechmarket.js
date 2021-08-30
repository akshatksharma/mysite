import React from "react"
import Layout from "components/layout/layout"
import SEO from "components/seo"

import "../styles/_page.scss"

const Mechmarket = () => (
  <Layout isHome={false}>
    <SEO title="Postup" />
    <main className="projectPage">
      <header className="titleHeader" style={{ color: "#696262" }}>
        <div>
          <h1 className="title">Mechmarket</h1>
          <p>A mobile marketplace for everything mechanical keyboard</p>
        </div>
      </header>
      <section className="content">
        <div className="figma-container figma-container--mechmarket">
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            width="1440"
            height="1024"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5EnUOYqpSaE1C8xIw67tH8%2FPresentation%3Fpage-id%3D0%253A1%26node-id%3D14%253A32%26viewport%3D277%252C48%252C0.12%26scaling%3Dscale-down-width%26starting-point-node-id%3D31%253A1795"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </main>
  </Layout>
)

export default Mechmarket
