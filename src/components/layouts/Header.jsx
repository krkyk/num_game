import { Box } from "@mui/material";
import { motion } from "framer-motion";
import GamepadIcon from "@mui/icons-material/Gamepad";

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
        <GamepadIcon sx={{ fontSize: "40px", verticalAlign: "-7px" }} />{" "}
        数当てゲーム{" "}
        <GamepadIcon sx={{ fontSize: "40px", verticalAlign: "-7px" }} />
      </motion.h1>
    </Box>
  );
}
