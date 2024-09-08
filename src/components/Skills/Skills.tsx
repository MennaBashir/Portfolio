import "./skills.scss";
import html from "./../../assets/html.svg";
import css from "./../../assets/css.svg";
import javascript from "./../../assets/javascript.svg";
import typescript from "./../../assets/typescript.svg";
import react from "./../../assets/react.svg";
import redux from "./../../assets/redux.svg";
import recoil from "./../../assets/recoil.png";
import sass from "./../../assets/sass.svg";
import boots from "./../../assets/bootstrap.svg";
import tailwind from "./../../assets/tailwind.svg";
import git from "./../../assets/git.svg";
import github from "./../../assets/github.svg";
import framer from "./../../assets/framer.svg";
import cplus from "./../../assets/c-plus.svg";
import { motion } from "framer-motion";
const variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};
const Skills = () => {
  return (
    <motion.div className="skills">
      <div className="back"></div>
      <motion.div variants={variants} initial="initial" whileInView="animate">
        <motion.h1 variants={variants}>My Skills</motion.h1>
        <motion.div className="skillsItems" variants={variants}>
          <motion.div className="skill" variants={variants}>
            <motion.img src={html} alt="notFound" variants={variants} />
            <motion.p variants={variants}>HTML</motion.p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={css} alt="notFound" />
            <p>CSS</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={javascript} alt="notFound" />
            <p>JavaScript</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={typescript} alt="notFound" />
            <p>TypeScript</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={react} alt="notFound" />
            <p>React.js</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={redux} alt="notFound" />
            <p>Redux</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={recoil} alt="notFound" />
            <p>Recoil</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={sass} alt="notFound" />
            <p>SASS</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={boots} alt="notFound" />
            <p>Bootstrap</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={tailwind} alt="notFound" />
            <p>Tailwind CSS</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={framer} alt="notFound" />
            <p>Framer</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={git} alt="notFound" />
            <p>Git</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={github} alt="notFound" />
            <p>GitHub</p>
          </motion.div>
          <motion.div className="skill" variants={variants}>
            <img src={cplus} alt="notFound" />
            <p>C++</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Skills;
