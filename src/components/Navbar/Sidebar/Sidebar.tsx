import "./sidebar.scss";
import Button from "./Button";
import Links from "./Links";
import { useState } from "react";
import { motion } from "framer-motion";
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(20px at 47px 47px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <motion.div
      className="sidebar"
      variants={variants}
      animate={open ? "open" : "close"}
    >
      <motion.div variants={variants}>
        <Links />
      </motion.div>
      <Button setOpen={setOpen} />
    </motion.div>
  );
};
export default Sidebar;
