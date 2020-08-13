import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "../styles/_home.scss"
import profile from "../images/profile.jpg"
import Particles from "react-tsparticles"
import config from "../configs/particleconfig"

const Home = () => {
  console.log(config.config)
  return (
    <Layout isHome={true}>
      <SEO title="Home" />
      <Particles
        id="tsparticles"
        options={config.config}
        width="100vw"
        height="125vh"
      />
      <section className="page" id="home">
        <div className="header">
          <h1 className="title">
            Hello, <br /> I'm Akshat Sharma.
          </h1>
          <h2 className="subtitle">
            Fullstack developer. Student{" "}
            <a className="link" href="https://wustl.edu/">
              @WUSTL
            </a>{" "}
          </h2>
        </div>
      </section>
      <section className="page" id="about">
        <h1 className="title">About me</h1>
        <div className="content">
          <div className="profile">
            <img
              width="400"
              src={profile}
              alt="A profile headshot of Akshat Sharma"
            />
          </div>
          <p className="text">
            Hi! My name is Akshat Sharma. I’m a junior studying CS, Biology, and
            Human-Computer Interaction.
            <br />
            <br />
            Programming is an outlet to make ideas come to *
            <span className="bold">life</span>*. In my experience, the most
            rewarding ideas are those that can influence the lives of others.
            These ideas always bring the greatest, but most exciting challenges.
            <br />
            <br />
            On this site, you’ll find projects that have sprouted from this
            belief—projects that can provide knowledge, entertainment, and
            everything in between. You’ll also find projects that have helped me
            grow as a developer.
            <br />
            <br />
            When I’m not programming, I'll most likely be volunteering, cooking,
            or catching up on my videogame backlog.
          </p>
        </div>

        {/* <h2 className="subtitle">Skills</h2> */}
      </section>
      <section className="page" id="projects">
        <div className="header">
          <h1 className="title">Projects</h1>
          <Link to="/projects" className="actionButton">
            See All
          </Link>
        </div>
        <div className="projectList">
          <Link to="/grounded" className="projectBox" id="grounded">
            <div className="graphic"></div>
            <div className="info">
              <h2 className="projectTitle">Grounded</h2>
              <p>Lorum Ipsum</p>
            </div>
          </Link>
          <Link to="/mazeviz" className="projectBox" id="mazeviz">
            <div className="graphic"></div>
            <div className="info">
              <h2 className="projectTitle">MazeViz</h2>
              <p>Lorum Ipsum</p>
            </div>
          </Link>
          <Link to="/justacal" className="projectBox" id="sunshine">
            <div className="graphic"></div>
            <div className="info">
              <h2 className="projectTitle">Just a cal</h2>
              <p>Lorum Ipsum</p>
            </div>
          </Link>
          <Link to="/postup" className="projectBox" id="postup">
            <div className="graphic"></div>
            <div className="info">
              <h2 className="projectTitle">Postup</h2>
              <p>Lorum Ipsum</p>
            </div>
          </Link>
        </div>
      </section>
      {/* <section className="page" >
      <h1 className="title">Contact</h1>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </form>
    </section> */}
    </Layout>
  )
}

export default Home
