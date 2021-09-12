import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-207411549-1"; 
ReactGA.initialize(TRACKING_ID);

export default function App() {
  return (
    <main className="text-white bg-black body-font">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
