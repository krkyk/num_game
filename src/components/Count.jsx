export default function Count({ count, handleRestart }) {
  return (
    <>
      {count <= 0 ? (
        <button className="reset-btn" onClick={handleRestart}>
          リセット
        </button>
      ) : (
        <p>ボタンを押せるのはあと{count}回です。</p>
      )}
    </>
  );
}
