import Head from "next/head";
import Hero from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <>
      <Head>
        <title>Aly | Front-end Developer</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <div className="z-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
