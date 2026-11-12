export default function Button01({ count, handleClick }) {
  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </>
  );
}
