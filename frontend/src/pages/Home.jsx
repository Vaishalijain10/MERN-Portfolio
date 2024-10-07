import React from 'react'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import About from '../components/About'
import MainSection from '../components/MainSection'

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center">
        {/* <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1> */}
        <MainSection/>
        <About/>
        <Projects />
        <ContactMe />
      </main>
    </div>
  )
}
