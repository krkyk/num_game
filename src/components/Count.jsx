import { motion } from "framer-motion";

export default function Count({ count, handleRestart }) {
  return (
    <>
      {count <= 0 ? (
        <motion.button
          className="reset-btn"
          onClick={handleRestart}
          whileHover={{ scale: 1.2, y: -5 }}
        >
          リセット
        </motion.button>
      ) : (
        <p>ボタンを押せるのはあと{count}回です。</p>
      )}
    </>
  );
}
