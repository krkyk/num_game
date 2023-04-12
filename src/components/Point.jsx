export default function Point({ point }) {
  return (
    <dl>
      <dt>あなたのポイント</dt>
      <dd className="point-num">{point}</dd>
    </dl>
  );
}
