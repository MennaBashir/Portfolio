import "./app.scss";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutSection from "./components/About/AboutSection";
function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX - 15, y: event.clientY - 12 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <motion.div
        animate={{ x: cursorPosition.x, y: cursorPosition.y }}
        className="cursor"
      ></motion.div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="About Me">
        <AboutSection />
      </section>
      <section id="My Skills">
        <Skills />
      </section>
      <section id="Services">
        <Parallax type={"services"} />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type={"portfolio"} />
      </section>
      <section style={{ overflow: "visible" }}>
        <Portfolio />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
