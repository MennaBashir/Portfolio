import "./about.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -100,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function AboutSection() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <motion.div
        className="education"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <h2>Education</h2>
        <p>
          Faculty of Computers & Informatics - FCI, Zagazig University (2022 -
          2026).
        </p>
      </motion.div>
      <motion.div
        className="experience"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.h2 variants={variants}>Work Experience</motion.h2>
        <motion.div className="works" variants={variants}>
          <div className="intern">
            <h3>
              <span>
                <span></span>
              </span>
              Frontend Developer
            </h3>
            <h4 className="work">
              <p> شركة ولادة حلم للإستشارات والأبحاث</p>

              <span>
                Feb 2025 – Present | Full-time | Remote · Jeddah, Saudi Arabia
              </span>
            </h4>
            <div className="description">
              <p>
                In this role, I am developing a robust web platform designed to
                empower nonprofit organizations, enabling them to grow and
                achieve their mission more effectively.
              </p>
            </div>
          </div>
          <div className="intern">
            <h3>
              <span>
                <span></span>
              </span>
              Frontend Developer Intern
            </h3>
            <h4>
              Information Technology International - ITI{" "}
              <span>Summer 2024</span>
            </h4>
            <div className="description">
              {" "}
              I had the opportunity to participate in several projects that
              significantly enhanced my skills as a frontend developer.
              <p>
                A key highlight of my ITI journey was leading a team for the
                <a href="https://matgaar.netlify.app/" target="_blank">
                  Matger Electronics
                </a>{" "}
                graduation project
              </p>
            </div>
          </div>
          <div className="intern">
            <h3>
              <span>
                <span></span>
              </span>
              Frontend Developer Intern
            </h3>
            <h4>
              Mentoor.io
              <span>Jun 2024 - Sep 2024</span>
            </h4>
            <div className="description">
              My time at Mentoor.io was a crucial step in turning my academic
              knowledge into practical skills and preparing me to deliver
              high-quality frontend solutions in real-world projects.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
