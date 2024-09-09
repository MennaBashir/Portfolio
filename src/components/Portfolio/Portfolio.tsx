import "./portfolio.scss";
import sirx from "./../../assets/sirx.png";
import clinic from "./../../assets/clinic.png";
import ecommerce from "./../../assets/ecommerce.png";
import food from "./../../assets/food.png";
import blog from "./../../assets/blog.png";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
const Portfolio = () => {
  const myProjects = [
    {
      id: "p1",
      imag: sirx,
      title: "Cryptocurrency App",
      description:
        "Developed a cryptocurrency platform using React JS. The site including account balance, order management, ticketing support, and reporting features. Users can create new tickets for questions...",
      link: "https://sirxmenna.netlify.app/",
    },
    {
      id: "p2",
      imag: clinic,
      title: "HealthCare Website",
      description:
        "Hospital management website using React JS. It includes a homepage with an overview of services, and a subscription form for health newsletters,detailed pages for each doctor, including their profile, specialties...",
      link: "https://clinic-menna.netlify.app/",
    },
    {
      id: "p3",
      imag: ecommerce,
      title: "E-Commerce Website",
      description:
        "Create an eCommerce website using React JS. The website include, an offer banner, and a newsletter subscription form. also built category-specific product pages for men, women, and kids...",
      link: "https://ecommerce-menna.netlify.app/",
    },
    {
      id: "p4",
      imag: food,
      title: "Food Delivery App",
      description:
        "Build a food ordering website using React JS. In this React JS project created the Home page to display the menu and food items, then cart page and order page. Then made the Sign In / Sign Up pop up...",
      link: "https://food-delivery-menna.netlify.app/",
    },
    {
      id: "p5",
      imag: blog,
      title: "Arab Accountant Blog",
      description:
        "Web application designed to share accounting knowledge, news, and articles for Arabic-speaking accountants and financial professionals... ",
      link: "https://mennabashir.github.io/Arab_Accountant_Blog/",
    },
  ];
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
