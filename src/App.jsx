import React, { useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Projects from './components/Projects'
import ImgSlider from './components/ImgSlider'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Skills from './components/Skills'
import Hire from './components/Hire'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const landingPageRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const hireRef = useRef(null);
  const contactRef = useRef(null);

  let locomotiveScroll = useRef(null);

  useEffect(() => {
    locomotiveScroll.current = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });


    return () => {
      if (locomotiveScroll.current) locomotiveScroll.current.destroy();
    };
  }, []);

  const scrollToSection = (ref) => {
    if (locomotiveScroll.current && ref.current) {
      locomotiveScroll.current.scrollTo(ref.current);
    }
  };


  return (
    <div data-scroll-container className='w-full min-h-screen text-white bg-zinc-900'>

      <Navbar
        scrollToSection={scrollToSection}
        refs={{ landingPageRef, aboutRef, skillsRef, projectsRef, hireRef, contactRef }}
      />

      <div ref={landingPageRef}>
        <LandingPage />
      </div>

      <Marquee />

      <div ref={aboutRef}>
        <About />
      </div>

      <Eyes />

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <ImgSlider />

      <div ref={hireRef}>
        <Hire />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />

    </div>
  )
}

export default App