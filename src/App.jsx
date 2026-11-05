import './App.css';
import Card from './components/Card';
import Greeting from './components/Greeting';
import MyHello from './components/MyHello';

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際もコンポーネントと同じく
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {
  return (
    <>
      <h1>React初期画面</h1>
      <p>これからがんばります</p>
      <MyHello myName="Taro" />
      <MyHello myName="Jiro" />
      <Greeting youName="一郎" age="25" />
      <Card>
        <h2>React2日目</h2>
        <h2>React2日目</h2>
      </Card>
      <Card>
        <h2>よく頑張っています</h2>
        <h2>よく頑張っています</h2>
      </Card>
      <Card day={1}>
        <p>環境構築しました</p>
      </Card>
      <Card day={2}>
        <p>環境構築しました</p>
      </Card>
    </>
  );
}

export default App;
