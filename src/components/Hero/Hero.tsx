import "./hero.scss";
import { motion } from "framer-motion";
import hero from "./../../assets/hero.png";
import scroll from "./../../assets/scroll.png";
const textVarient = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.7,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <motion.div
          className="ContainerText"
          variants={textVarient}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2 variants={textVarient}>Menna Bashir</motion.h2>
          <motion.h1 variants={textVarient}>FrontEnd React Developer</motion.h1>
          <motion.div className="buttons" variants={textVarient}>
            <motion.button variants={textVarient}>
              <a
                href="https://drive.google.com/file/d/1df5uTdJUNkIeC7ER5-AyHB4vyHgekjcq/view?usp=sharing"
                target="_blank"
              >
                View My Resume
              </a>
            </motion.button>
            <motion.button variants={textVarient}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <a href="#Portfolio">
            <motion.img
              src={scroll}
              alt="notFound"
              variants={textVarient}
              animate="scrollButton"
            />
          </a>
        </motion.div>

        <div className="imag">
          <img src={hero} alt="notFound" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
