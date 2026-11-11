function ColorButton({ label, color }) {
  //TODO: ボタンごとに独立したuseStateを作る

  return (
    <div className="color-item">
      <p>{label}</p>

      {/* colorはpropsからCSS変数へ渡してある */}
      {/*TODO: onClick、表示文字、is-onクラスを切り替える */}
      <button
        type="button"
        className="color-button"
        style={{ '--active-color': color }}
      >
        OFF
      </button>
    </div>
  );
}

export default function Question03() {
  return (
    <div className="color-group">
      <ColorButton label="レッド" color="#d96068" />
      <ColorButton label="ブルー" color="#4d80c9" />
      <ColorButton label="グリーン" color="#299b83" />
    </div>
  );
}
