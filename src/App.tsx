import React from 'react';
import logo from './logo.svg';
import './App.css';

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
      
      <div>
        <label htmlFor="inputForHtmlFor1">htmlFor:&nbsp;</label>
        <input id="inputForHtmlFor1" className="inputForHtmlFor" tabIndex={2} />&nbsp;
        <input id="inputForHtmlFor2" className="inputForHtmlFor" tabIndex={1} />
      </div>
      <img src={logo} />
    </React.Fragment>
  );
}

export default App;
