import Head from "next/head";
import Hero from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useRef } from "react";
import Navbar from "@/components/Navbar";


export default function Home() {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  const onHomeRef = useRef(null);
  const onAboutRef = useRef(null);
  const onSkillsRef = useRef(null);
  const onProjectsRef = useRef(null);
  const onContactRef = useRef(null);


  function executeScrollToHome() {
     return scrollToRef(onHomeRef);
  }

  const executeScrollToAbout = () => scrollToRef(onAboutRef);
  const executeScrollToSkills = () => scrollToRef(onSkillsRef);
  const executeScrollToProjects = () => scrollToRef(onProjectsRef);
  const executeScrollToContact = () => scrollToRef(onContactRef);


  return (
    <>
      <Head>
        <title>Aly | Full-Stack Developer</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <div className="z-1">
        <Navbar 
        onHomeClick={executeScrollToHome}
        onAboutClick={executeScrollToAbout}
        onSkillsClick={executeScrollToSkills}
        onProjectsClick={executeScrollToProjects}
        onContactClick={executeScrollToContact}

        />
      <div ref={onHomeRef}>
        <Hero />
      </div>
      <div ref={onAboutRef} id="about">
      <About />
      </div>
      <div ref={onSkillsRef} id="skills">
      <Skills />
      </div>
      <div ref={onProjectsRef} id = "projects">
      <Projects />
      </div>
      <div ref={onContactRef} id="contact">
      <Contact />
      </div>
        
      </div>
    </>
  );
}
