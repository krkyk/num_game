import { Box } from "@mui/material";
import TextMotion from "./layouts/TextMotion";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

export default function Modal({ onClose }) {
  return (
    <div className="modal">
      <h2>遊び方</h2>
      <TextMotion>
        選んだ数字とランダムに表示される数字が一致すると、選んだ数字の数だけ得点が加算されます。
      </TextMotion>
      <TextMotion>外れると選んだ数字の数だけ得点が減ります。</TextMotion>
      <Box
        sx={{
          backgroundColor: "#3e62ad",
          p: 3,
          mx: 5,
          my: 2,
          borderRadius: "5px",
          border: "2px solid #fff"
        }}
      >
        <TextMotion>1. ①～⑤から1つ選んでボタンを押す</TextMotion>
        <TextMotion>2. ボタン上部にランダムな数字が表示される</TextMotion>
        <TextMotion>
          3. 2つの数字が一致すれば得点が加点され、一致しなければ減点される
        </TextMotion>
        <TextMotion>4. ボタンを押せる回数は10回まで</TextMotion>
      </Box>
      <motion.button
        onClick={onClose}
        whileHover={{ scale: 1.2, y: -5 }}
        className="close-btn"
      >
        <CloseIcon sx={{ fontSize: "25px", verticalAlign: "-6px" }} /> 閉じる
      </motion.button>
    </div>
  );
}
