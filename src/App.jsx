import { useState } from "react";
import Count from "./components/Count";
import NumBtn from "./components/NumBtn";
import NumField from "./components/NumField";
import Point from "./components/Point";
import "./styles.css";
import { motion } from "framer-motion";
import CreatePaper from "./components/layouts/CreatePaper";
import { UseModal } from "./components/hooks/UseModal";
import Modal from "./components/Modal";

export default function App() {
  const [number, setNumber] = useState("?");
  const [count, setCount] = useState(10);
  const [point, setPoint] = useState(0);
  const { isOpen, onOpen, onClose } = UseModal();

  function handleClick(selectNum) {
    // Math.random(): 0 以上 1 未満の範囲で浮動小数点の擬似乱数を返す
    // Math.floor(): 与えられた数値以下の最大の整数を返す
    let randomNum = Math.floor(Math.random() * 6);

    if (randomNum === 0) {
      randomNum = 1;
    }

    setNumber(randomNum);

    if (randomNum === selectNum) {
      setPoint(point + selectNum);
    } else {
      setPoint(point - selectNum);
    }

    setCount(count - 1);
  }

  function handleRestart() {
    setNumber("?");
    setCount(10);
    setPoint(0);
  }

  return (
    <>
      <motion.h2 whileHover={{ scale: 1.2, rotate: 360 }}>
        数当てゲーム
      </motion.h2>
      <div>
        <button onClick={onOpen} className="modal-btn">
          遊び方はこちら
        </button>
        {isOpen && <Modal onClose={onClose} />}
      </div>
      <CreatePaper>
        <NumField number={number} />
        <NumBtn disabled={count <= 0} handleClick={handleClick} />
      </CreatePaper>
      <Count count={count} handleRestart={handleRestart} />
      <Point point={point} />
    </>
  );
}
