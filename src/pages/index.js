import React from "react"
import SEO from "components/seo"
import { Link } from "gatsby"
import Particles from "react-tsparticles"
import config from "configs/particleconfig"

import Layout from "components/layout/layout"
import ColorToggle from "components/themes/colorToggle"
import Carousel from "components/carousel/carousel"

import "styles/_home.scss"
import profile from "images/circleface.png"

const Home = () => {
  const carouselContent = [
    <div className="project">
      <h2 className="subtitle"> Computer Science </h2>
      <div className="projectList">
        <Link to="/quizlet" className="projectBox" id="quizlet">
          <div className="graphic"></div>
          <div className="info">
            <h2 className="projectTitle">Quizlet</h2>
            <p>Learn it. Own it. Quizlet.</p>
          </div>
        </Link>
        <Link to="/grounded" className="projectBox" id="grounded">
          <div className="graphic"></div>
          <div className="info">
            <h2 className="projectTitle">Grounded</h2>
            <p>Document your stories during the COVID-19 pandemic.</p>
          </div>
        </Link>
        <Link to="/mazeviz" className="projectBox" id="mazeviz">
          <div className="graphic"></div>
          <div className="info">
            <h2 className="projectTitle">MazeViz</h2>
            <p>Create beautiful mazes and solve them.</p>
          </div>
        </Link>
        <Link to="/justacal" className="projectBox" id="justacal">
          <div className="graphic"></div>
          <div className="info">
            <h2 className="projectTitle">Just a cal</h2>
            <p>Google calendar clone with event grouping features.</p>
          </div>
        </Link>
      </div>
    </div>,
    <div className="project">
      <h2 className="subtitle"> Design </h2>
      <div className="projectList">
        <Link to="/webstac" className="projectBox" id="webstac">
          <div className="graphic"></div>
          <div className="info">
            <h2 className="projectTitle">WebSTAC Redesign</h2>
            <p>Learning why course selection sucks</p>
          </div>
        </Link>
        <Link to="/faithringgold" className="projectBox" id="faithringgold">
          <div className="graphic"></div>
          <div className="info">
            <h2 className="projectTitle">Faith Ringgold Gallery</h2>
            <p>
              Redesigning a site for one of the most prolific artist activists
            </p>
          </div>
        </Link>
        <Link to="/skilltree" className="projectBox" id="skilltree">
          <div className="graphic"></div>
          <div className="info">
            <h2 className="projectTitle">SkillTree</h2>
            <p>A new way for people to build new skills</p>
          </div>
        </Link>
        <Link to="/mechmarket" className="projectBox" id="mechmarket">
          <div className="graphic"></div>
          <div className="info">
            <h2 className="projectTitle">MechMarket</h2>
            <p>A mobile marketplace for everything mechanical keyboard</p>
          </div>
        </Link>
      </div>
    </div>,
  ]

  return (
    <Layout isHome={true}>
      <SEO title="Home" />
      <ColorToggle />
      <Particles
        id="tsparticles"
        options={config.light}
        width="100vw"
        height="115vh"
        canvasClassName="particles"
      />
      <section className="sectionContent" id="home">
        <div className="header">
          <h1 className="hero">
            Hi! <br /> I'm Akshat Sharma.
            {/* adjust line spacing */}
          </h1>
          <h2 className="title--smol">
            Fullstack developer. Student{" "}
            <a className="link" href="https://wustl.edu/">
              @WUSTL
            </a>{" "}
          </h2>
        </div>
      </section>
      <section className="sectionContent" id="about">
        <h1 className="title">About me</h1>
        <div className="content">
          <div className="profile">
            <img
              width="300"
              src={profile}
              alt="A profile headshot of Akshat Sharma"
            />
          </div>
          <p className="text">
            I’m a junior studying CS, Biology, and Human-Computer Interaction.
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
      <section className="sectionContent" id="works">
        <div className="header">
          <h1 className="title">Work</h1>
        </div>
        <Carousel count={2} content={carouselContent}></Carousel>
      </section>
    </Layout>
  )
}

export default Home
