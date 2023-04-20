import { motion } from "framer-motion";

export default function TextMotion({ children }) {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transitionDuration: "0.5s" }}
      className="description-txt"
    >
      {children}
    </motion.p>
  );
}
