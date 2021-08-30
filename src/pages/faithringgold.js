import React from "react"
import Layout from "components/layout/layout"
import SEO from "components/seo"

import "../styles/_page.scss"

const FaithRinggold = () => (
  <Layout isHome={false}>
    <SEO title="Postup" />
    <main className="projectPage">
      <header className="titleHeader" style={{ color: "#7A726A" }}>
        <div>
          <h1 className="title">Faith Ringgold</h1>
          <p>
            Designing a site for one of the most prolific artist activists of
            our time
          </p>
        </div>
      </header>
      <section className="content">
        <div className="figma-container figma-container--faithringgold">
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            width="1440"
            height="1024"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8Lp5Hx00xBpXI9JWQ4aKel%2Fpresentation%3Fpage-id%3D0%253A1%26node-id%3D46%253A69%26viewport%3D277%252C48%252C0.06%26scaling%3Dscale-down-width"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </main>
  </Layout>
)

export default FaithRinggold
