import './App.css';
import Counter from './components/Counter';
import ListCounter from './components/ListCounter';
import Question01 from './components/Question01';
import Question02 from './components/Question02';
import Question03 from './components/Question03';
import Switch from './components/Switch';

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際もコンポーネントと同じく
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {
  return (
    <main>
      <h1>useState練習問題</h1>

      <section>
        <h2>Q1 ON/OFFボタン</h2>
        {/* ここにコンポーネントを記述する */}
        <Question01 />
      </section>

      <section>
        <h2>Q2 </h2>
        {/* ここにコンポーネントを記述する */}
        <Question02 />
      </section>

      <section>
        <h2>Q3 </h2>
        {/* ここにコンポーネントを記述する */}
        <Question03 />
      </section>
    </main>
  );
}

export default App;
