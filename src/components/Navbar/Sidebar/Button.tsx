import "./sidebar.scss";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type buttonType = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};
const Button = ({ setOpen }: buttonType) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth={3}
          stroke="#0c0c1d"
          strokeLinecap="round"
          variants={{
            close: { d: "M2 2.5 L 20 2.5" },
            open: { d: "M3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth={3}
          stroke="#0c0c1d"
          strokeLinecap="round"
          d="M2 9.423 L 20 9.423"
          variants={{ close: { opacity: 1 }, open: { opacity: 0 } }}
        />
        <motion.path
          strokeWidth={3}
          stroke="#0c0c1d"
          strokeLinecap="round"
          variants={{
            close: { d: "M2 16.346 L 20 16.346" },
            open: { d: "M3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
export default Button;
