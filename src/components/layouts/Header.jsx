import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "#bbc8e6",
        height: "90px",
        display: "grid",
        placeItems: "center"
      }}
    >
      <motion.h1 whileHover={{ scale: 1.2, rotate: 360 }} className="title">
        数当てゲーム
      </motion.h1>
    </Box>
  );
}
