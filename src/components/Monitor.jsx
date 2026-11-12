import Button01 from './Button01';
import { useState } from 'react';
import Button02 from './Button02';

export default function Monitor() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  function threeClick() {
    setCount(count + 3);
  }

  return (
    <>
      <section>
        {/* 現在のstate変数の値をここに表示する */}

        <p>{count}</p>
        <Button01 handleClick={setCount} />
        <Button02 handleClick={threeClick} />
      </section>
    </>
  );
}
