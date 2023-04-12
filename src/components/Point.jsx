import { motion } from "framer-motion";

export default function Point({ point }) {
  return (
    <dl>
      <dt>あなたのポイント</dt>
      <motion.dd
        className="point-num"
        whileTap={{ scale: 1.5, skew: "-15deg" }}
      >
        {point}
      </motion.dd>
    </dl>
  );
}
