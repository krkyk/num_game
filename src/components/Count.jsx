export default function Count({ count }) {
  return (
    <>
      {count <= 0 ? (
        <button className="reset-btn">リセット</button>
      ) : (
        <p>ボタンを押せるのはあと{count}回です。</p>
      )}
    </>
  );
}
