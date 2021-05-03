import React from 'react';
import logo from './logo.svg';
import './App.css';

const datetime = new Date().toLocaleString()
const attr = {
  title: "タイトルです",
  style: {
    color: "blue"
  }
}
const elem = <p>変数定義したエレメントの使用</p>
const fragment = <React.Fragment>
  <span>変数定義したReact.Fragmentの使用。</span>
  <strong>複数要素</strong>
  <span>を持てる</span>
</React.Fragment>

const elemByCreateElement = React.createElement(
  "p",
  { style: { color: "green" } },
  'React.createElementで作成したテキスト'
)
const elemByCreateElement2 = React.createElement(
  React.Fragment,
  null,
  React.createElement("strong", null, 'React.createElement'),
  React.createElement("span", null, 'で作成したエレメント')
)

function App() {
  return (
    // タグ外のコメントは通常の文法の通り可能でOK
    <React.Fragment>
      {// タグ内のコメントは、行コメントの場合、{}で括り行末の改行が必要
      }
      {/* または、部分コメント形式で記述 */}
      {/* ※<!-- --> は使用できない */}
      <p>hello</p>
      <p>world</p>
      <hr />
      <div>
        <label htmlFor="inputForHtmlFor1">htmlFor:&nbsp;</label>
        <input id="inputForHtmlFor1" className="inputForHtmlFor" tabIndex={2} />&nbsp;
        <input id="inputForHtmlFor2" className="inputForHtmlFor" tabIndex={1} />
      </div>
      <hr />
      <p>現在の日時は{datetime}です。</p>
      <p>2の8乗は{2 ** 8}です。</p>
      <hr />
      <p>{'<strong>エスケープされます</strong>'}</p>
      <p dangerouslySetInnerHTML={{ __html: '<strong>エスケープされません</strong>' }}></p>
      <hr />
      <p style={{ color: "red", backgroundColor: "yellow" }}>スタイル属性の指定</p>
      <hr />
      <p {...attr} >属性をまとめて設定</p>
      <hr />
      {elem}
      {fragment}
      <hr />
      {elemByCreateElement}
      {elemByCreateElement2}
      <img src={logo} />
    </React.Fragment>
  );
}

export default App;
