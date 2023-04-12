import { motion } from "framer-motion";
import { Alert } from "@mui/material";

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
        <Alert severity="info" sx={{ m: "20px 20%", fontSize: "100%" }}>
          ボタンを押せるのはあと{count}回です。
        </Alert>
      )}
    </>
  );
}
