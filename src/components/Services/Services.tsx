import "./services.scss";
import people from "/assets/people.webp";
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
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="title" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="containerText" variants={variants}>
        <div className="unique">
          <img src={people} alt="notFound" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="business">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="containerList container" variants={variants}>
        <motion.div className="box">
          <h2> Single Page Applications</h2>
          <p>
            Building interactive, high-performance single-page applications
            using React.js. Ensuring fast loading times, dynamic content
            updates, and smooth navigation without page reloads.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Responsive Web Design</h2>
          <p>
            Crafting modern, responsive web interfaces that provide seamless
            user experiences across all devices, from desktops to mobile phones.
            Utilizing frameworks like Tailwind CSS or BootStrap and ensuring
            accessibility and performance optimization.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Performance Optimization</h2>
          <p>
            Optimizing websites for faster load times and better performance by
            implementing techniques like lazy loading, code splitting, and
            caching. Ensuring a smooth and fast user experience.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
