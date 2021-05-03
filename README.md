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
