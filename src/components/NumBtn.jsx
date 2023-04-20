import { motion } from "framer-motion";

export default function NumBtn({ disabled, handleClick }) {
  const btnCount = 5;
  const btns = [];
  for (let i = 1; i <= btnCount; i++) {
    btns.push(
      <motion.button
        disabled={disabled}
        onClick={() => handleClick(i)}
        key={i}
        whileHover={{ scale: 1.2, y: -5 }}
        className="num-btn"
      >
        {i}
      </motion.button>
    );
  }
  return <dd>{btns}</dd>;
}
