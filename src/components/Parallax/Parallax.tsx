import { useRef } from "react";
import "./parallax.scss";
import { useScroll, motion, useTransform } from "framer-motion";
import planet from "./../../assets/planets.png";
import sun from "./../../assets/sun.png";
interface Type {
  type: string;
}
const Parallax = ({ type }: Type) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div
      ref={carouselRef}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132,#0c0c1d)"
            : "linear-gradient(180deg, #111132,#505064)",
      }}
    >
      <motion.h1 className="container" style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did"}
      </motion.h1>
      <div className="mountains"></div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? planet : sun})`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};
export default Parallax;
