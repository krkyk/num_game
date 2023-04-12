import { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState("?");
  const [count, setCount] = useState(10);
  const [point, setPoint] = useState(0);

  function handleClick(selectNum) {
    // Math.random(): 0 以上 1 未満の範囲で浮動小数点の擬似乱数を返す
    // Math.floor(): 与えられた数値以下の最大の整数を返す
    const randomNum = Math.floor(Math.random() * 6);

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
        <dt className="random-num">{number}</dt>
        <dd>
          <button disabled={count <= 0} onClick={() => handleClick(1)}>
            1
          </button>
          <button disabled={count <= 0} onClick={() => handleClick(2)}>
            2
          </button>
          <button disabled={count <= 0} onClick={() => handleClick(3)}>
            3
          </button>
          <button disabled={count <= 0} onClick={() => handleClick(4)}>
            4
          </button>
          <button disabled={count <= 0} onClick={() => handleClick(5)}>
            5
          </button>
        </dd>
      </dl>
      {count <= 0 ? (
        <button className="reset-btn">リセット</button>
      ) : (
        <p>ボタンを押せるのはあと{count}回です。</p>
      )}
      <dl>
        <dt>あなたのポイント</dt>
        <dd className="point-num">{point}</dd>
      </dl>
    </>
  );
}
