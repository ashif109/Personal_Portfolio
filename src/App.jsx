import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Footer from './Components/Footer'
import Antigravity from './Components/Antigravity';

import SlideIn from "./SlideIn";

const App = () => {

  return (
    <>
  
   <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Antigravity
          count={80}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={0.3}
          lerpSpeed={0.05}
          color="#808080"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>
      <Navbar />

      <section id="home">
         <SlideIn direction="up">
        <Home />
        </SlideIn>
      </section>

      <section id="skills">
         <SlideIn direction="up">
        
        <Skills />
        </SlideIn>

      </section>

      <section id="projects">
         <SlideIn direction="up">

        <Projects />
        </SlideIn>

      </section>

      <section id="about">
         <SlideIn direction="up">

        <About />
        </SlideIn>

      </section>

      <section id="contact">
         <SlideIn direction="up">

        <Contacts />
        </SlideIn>

      </section>

      <Footer />
    </>
  )
}

export default App