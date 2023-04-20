import { motion } from "framer-motion";
import { Alert } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function Count({ count, handleRestart }) {
  return (
    <>
      {count <= 0 ? (
        <motion.button
          className="reset-btn"
          onClick={handleRestart}
          whileHover={{ scale: 1.2, y: -5 }}
        >
          リセット{" "}
          <RestartAltIcon sx={{ fontSize: "25px", verticalAlign: "-6px" }} />
        </motion.button>
      ) : (
        <Alert
          severity="info"
          sx={{ m: "50px 20%", fontSize: "110%", justifyContent: "center" }}
        >
          ボタンを押せるのはあと{count}回です。
        </Alert>
      )}
    </>
  );
}
