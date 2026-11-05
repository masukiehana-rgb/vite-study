export default function MyHello({ myName }) {
  // 分割代入でmyNameを取り出す
  // const { myName } = props;

  return <p>こんにちわ、{myName}さん</p>;
}
