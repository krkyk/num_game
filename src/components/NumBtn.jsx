export default function NumBtn({ disabled, handleClick }) {
  const btnCount = 5;
  const btns = [];
  for (let i = 1; i <= btnCount; i++) {
    btns.push(
      <button disabled={disabled} onClick={() => handleClick(i)} key={i}>
        {i}
      </button>
    );
  }
  return <dd>{btns}</dd>;
}
