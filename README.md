# 速習React 勉強メモ
### プロジェクトの作成
npx create-react-app sample --template typescript

---
### React.Fragment
`React.Fragment`はダミー要素

```tsx
import React from 'react';
// 中略
<React.Fragment>
    <p>hello</p>
    <p>world</p>
</React.Fragment>
```

---
### imgタグ

https://github.com/dossari-book-archive/20210501-react-sample/commit/b3b02a21c0026032c0175e3dd78bb806df431e54

* 空要素は「～ />」で終えること
* src属性値は、import文で指定した静的リソースを指定可能

```tsx
import React from 'react';
import logo from './logo.svg';
// 中略
<img src={logo} />
```

---

### 名前の異なる属性
https://github.com/dossari-book-archive/20210501-react-sample/commit/a03f74cfcdfcab13f48bd3014c0d559e5ec4de65
|html|jsx(tsx)|
|-|-|
|for|htmlFor|
|class|className|
|tabindex|tabIndex|

など…

```tsx
import React from 'react';
// 中略
<label htmlFor="inputForHtmlFor1">htmlFor:&nbsp;</label>
<input id="inputForHtmlFor1" className="inputForHtmlFor" tabIndex={2} />&nbsp;
<input id="inputForHtmlFor2" className="inputForHtmlFor" tabIndex={1} />
```

---

### コメント構文
https://github.com/dossari-book-archive/20210501-react-sample/commit/6c289b476f1f13a411158c437333aa1917873168

```tsx
import React from 'react';
// 中略
// タグ外のコメントは通常の文法の通り可能でOK
<React.Fragment>
    {// タグ内のコメントは、行コメントの場合、{}で括り行末の改行が必要
    }
    {/* または、部分コメント形式で記述 */}
    {/* ※<!-- --> は使用できない */}
    <p>hello</p>
    {/*以下略*/}
</React.Fragment>
```

---

### JavaScript式の埋め込み
https://github.com/dossari-book-archive/20210501-react-sample/commit/154873662239b3d67d5ac2e1d4f875d72de11f82

```tsx
const datetime = new Date().toLocaleString()
// 中略
<p>現在の日時は{datetime}です。</p>
<p>2の8乗は{2 ** 8}です。</p>
```
---

### JavaScript式の埋め込み
https://github.com/dossari-book-archive/20210501-react-sample/commit/154873662239b3d67d5ac2e1d4f875d72de11f82

```tsx
<p>{'<strong>エスケープされます</strong>'}</p>
<p dangerouslySetInnerHTML={{__html: '<strong>エスケープされません</strong>'}}></p>
```

---

### スタイル属性の指定
https://github.com/dossari-book-archive/20210501-react-sample/commit/62a71126832b8fd726b01e9c988bda2d126279a1

* オブジェクト形式
* キャメルケース

```tsx
<p style={{ color: "red", backgroundColor: "yellow" }}>スタイル属性の指定</p>
```

---

### 属性をまとめて設定
https://github.com/dossari-book-archive/20210501-react-sample/commit/d66b5b4d28c6babb051b27963e6060afbd448230

```tsx
const attr = {
  title: "タイトルです",
  style: {
    color: "blue"
  }
}
// 中略
<p {...attr} >属性をまとめて設定</p>
```

---

### 変数定義したエレメントの使用
https://github.com/dossari-book-archive/20210501-react-sample/commit/752c0d9a539d9b30dc6bb10a3c22119d706cb0bb

```tsx
const elem = <p>変数定義したエレメントの使用</p>
const fragment = <React.Fragment>
  <span>変数定義したReact.Fragmentの使用。</span>
  <strong>複数要素</strong>
  <span>を持てる</span>
</React.Fragment>
// 中略
<React.Fragment>
  {elem}
  {fragment}
</React.Fragment>
```

---

### React.createElementの使用
https://github.com/dossari-book-archive/20210501-react-sample/commit/210ea4923e38dc4cb0a3d6827209e6bfab0b3d22

```tsx
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
// 中略
<React.Fragment>
  {elemByCreateElement}
  {elemByCreateElement2}
</React.Fragment>
```

---

### コンポーネント定義、パラメータ渡し（クラス宣言する方法）
https://github.com/dossari-book-archive/20210501-react-sample/commit/c04f0e5f9779088a2814e53e237e3634edad8b65

components/Sample.tsx

```tsx
import React, { Component } from 'react'

export default class Sample extends Component<{
  stringValue: string
  numberValue: number
}> {
  render() {
    return (
      <div>渡された値は「{this.props.stringValue}」, 「{this.props.numberValue}」です</div>
    )
  }
}
```

App.tsx

```tsx
<Sample stringValue="値1" numberValue={123}></Sample>
```