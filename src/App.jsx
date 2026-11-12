import './App.css';
import EventError from './components/EventError.jsx';
import EventKey from './components/EventKey.jsx';
import EventMouse from './components/EventMouse.jsx';
import EventObj from './components/EventObj.jsx';
import EventPoint from './components/EventPoint.jsx';
import Monitor from './components/Monitor';
import Question01 from './components/Question01';
import Question02 from './components/Question02';
import Question03 from './components/Question03';

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際もコンポーネントと同じく
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {
  return (
    <>
      {/* <EventPoint /> */}
      <EventKey />
      <EventObj />
      {/* <EventError src="/image/favicon.svg" alt="サンプル画像" /> */}
      {/* <EventMouse alt="ロゴ画像” defaultSrc=""  afterSrc="" /> */}
      {/* <Monitor /> */}
      <section>
        <Question01 title="数字を増やすカウンター">
          <p>ボタンをクリック</p>
        </Question01>
      </section>

      <section>
        <Question02 title="on/off切り替え">
          // ボタンを押すたびに切り替え // //{' '}
        </Question02>
      </section>

      <section>
        <Question03 title="カウンターの表示切り替え">
          // // 数字のstateと真偽値のstateを1つのコンポーネントで管理 // //{' '}
        </Question03>
      </section>
    </>
  );
}

export default App;
