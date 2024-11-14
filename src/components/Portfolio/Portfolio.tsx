import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { myProjects } from "./projects";

const Portfolio = () => {
  const Project = ({ item }: any) => {
    return (
      <div className="project container">
        <div className="imag">
          <img src={item.imag} alt="notFound" />
        </div>
        <div className="Text">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <a href={item.link} target="_blank">
            See Demo
          </a>
        </div>
      </div>
    );
  };
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end center", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <div className="projects">
        {myProjects.map((project) => {
          return <Project item={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};
export default Portfolio;
