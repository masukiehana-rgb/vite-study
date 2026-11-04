import { Profiler } from 'react';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

// Reactで扱うコンポーネント（関数）の名前はパスカルケース
// パスカルケースというのは頭文字が大文字で書く書き方
// ファイルの名前をつける際もコンポーネントと同じく
// パスカルケース、かつ、コンポーネント名と一致させておくと便利。
function App() {
  return (
    <>
      <Header />
      <p>これからがんばります</p>
      <Profile />
      <Section1 />
      <Section2 />
      <Footer />
    </>
  );
}

export default App;
