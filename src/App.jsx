import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { div } from "framer-motion/client";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}