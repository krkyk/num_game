import { useState } from "react";
import Count from "./components/Count";
import NumBtn from "./components/NumBtn";
import NumField from "./components/NumField";
import Point from "./components/Point";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState("?");
  const [count, setCount] = useState(10);
  const [point, setPoint] = useState(0);

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

  return (
    <>
      <h2>数当てゲーム</h2>
      <p>
        選んだ数字とランダムに表示される数字が一致すると、選んだ数字の数だけポイントが加算されます。
      </p>
      <p>外れると選んだ数字の数だけポイントが減ります。</p>
      <dl>
        <NumField number={number} />
        <NumBtn count={count} handleClick={handleClick} />
      </dl>
      <Count count={count} />
      <Point point={point} />
    </>
  );
}
