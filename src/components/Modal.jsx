import { Box } from "@mui/material";
import TextMotion from "./layouts/TextMotion";
import { motion } from "framer-motion";

export default function Modal({ onClose }) {
  return (
    <div className="modal">
      <TextMotion>
        選んだ数字とランダムに表示される数字が一致すると、選んだ数字の数だけポイントが加算されます。
      </TextMotion>
      <TextMotion>外れると選んだ数字の数だけポイントが減ります。</TextMotion>
      <Box sx={{ backgroundColor: "#eaedf7", p: 3, mx: 5, mb: 2 }}>
        <TextMotion>1. ①～⑤から1つ選んでボタンを押す</TextMotion>
        <TextMotion>2. ボタン上部にランダムな数字が表示される</TextMotion>
        <TextMotion>
          3. 2つの数字が一致すればポイントが加点され、一致しなければ減点される
        </TextMotion>
        <TextMotion>4. ボタンを押せる回数は10回まで</TextMotion>
      </Box>
      <motion.button
        onClick={onClose}
        whileHover={{ scale: 1.2, y: -5 }}
        className="modal-btn"
      >
        閉じる
      </motion.button>
    </div>
  );
}
