export default function NumBtn({ count, handleClick }) {
  const btnCount = 5;
  const btns = [];
  for (let i = 1; i <= btnCount; i++) {
    btns.push(
      <button disabled={count <= 0} onClick={() => handleClick(i)} key={i}>
        {i}
      </button>
    );
  }
  return <dd>{btns}</dd>;
}
