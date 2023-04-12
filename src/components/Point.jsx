import { motion } from "framer-motion";
import CreatePaper from "./layouts/CreatePaper";

export default function Point({ point }) {
  return (
    <CreatePaper>
      <dt>あなたのポイント</dt>
      <motion.dd
        className="point-num"
        whileTap={{ scale: 1.5, skew: "-15deg" }}
      >
        {point}
      </motion.dd>
    </CreatePaper>
  );
}
