import { useState } from 'react';
import '../study.css';

export default function Question03({ title, children }) {
  //TODO: 数字を管理するuseStateを書く（初期値は0）
  //TODO: 表示を管理するuseStateを書く（初期値はtrue）
  const [count, setCount] = useState(0);
  const [isHide, noHide] = useState(true);

  function handleClick() {
    setCount(count + 1);
  }

  function isClick() {
    noHide(!isHide);
  }

  return (
    <div className="study-card">
      <h2 className="study-title">{title}</h2>
      <p className="study-description">{children}</p>

      <div className="study-actions">
        <button type="button" className="study-button" onClick={handleClick}>
          +1
        </button>
        <button
          type="button"
          className="study-button study-button--secondary"
          onClick={isClick}
        >
          隠す / 表示する
        </button>
      </div>
    </div>
  );
}
