import React from 'react'
import Layout from './components/layouts/Layout'
import Intro from './components/Intro'
import About from './components/About'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App