import React from "react"
import Layout from "components/layout/layout"
import SEO from "components/seo"

import "../styles/_page.scss"

const Quizlet = () => (
  <Layout isHome={false}>
    <SEO title="Postup" />
    <main className="projectPage">
      <header className="titleHeader" style={{ color: "#4257B2" }}>
        <div>
          <h1 className="title">Quizlet</h1>
          <p>Learn it. Own it. Quizlet</p>
        </div>
      </header>
      <section className="content">
        <div className="mainText">
          <h2 className="subtitle">What it is</h2>
          <p>
            Quizlet is a online platform that creates tools for studying and
            learning used by 60 million people each month. Users can create and
            share sets of digital flashcards that can be studied with these
            tools, also known as study modes. People use the platform to study
            everything from high school vocabulary to medical school anatomy.
            <br />
            <br />
            As an intern, I worked on the Learning Assistant team, which works
            on the Learn study mode. After inputting their study goals and
            preexisting knowledge on the content they are studying, the Learn
            mode creates a personalized learning session for them. The Learn
            mode automatically generates multiple choice, written, and flashcard
            based questions that are given to the user across the learning
            session.
          </p>
          <h2 className="subtitle">What I did</h2>
          <ul className="tasks">
            <li>
              Developed a feature to capture user-submitted confidence after
              completing a personalized study session, where the data was
              utilized by product leads to inform upcoming projects for better
              personalization
            </li>
            <li>
              Helped design and implement new logic for calculating a user’s
              progress during a study session to support future product
              features, such as new question type sequences.
            </li>
            <li>
              Coordinated above projects with other team members through a
              ticket based system and daily standups
            </li>
            <li>
              Won 3 awards during internal hackathon for designing and
              prototyping time based study sessions and knowledge graph driven
              dashboards of topics within a given course.
            </li>
          </ul>
        </div>
        <aside className="sideBar">
          <div className="role">
            <h2 className="subheading">Role</h2>
            <p>Software Engineering Intern</p>
          </div>
          <div className="stack">
            <h2 className="subheading">Stack / Tools</h2>
            <p>React, Redux, TypeScript, Kotlin, Jest, a11y, PHP</p>
          </div>
          <div className="date">
            <h2 className="subheading">Date</h2>
            <p>June - August 2021</p>
          </div>
        </aside>
      </section>
    </main>
  </Layout>
)

export default Quizlet
