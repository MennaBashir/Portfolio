import "./skills.scss";
import { dataSkills } from "./dataSkills";
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
          {dataSkills.map((skill) => {
            return (
              <motion.div
                key={skill.title}
                className="skill"
                variants={variants}
              >
                <motion.img
                  src={skill.image}
                  alt="notFound"
                  variants={variants}
                />
                <motion.p variants={variants}>{skill.title}</motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Skills;
