# 速習React 勉強メモ
### プロジェクトの作成
npx create-react-app sample --template typescript

---
### React.Fragment
`React.Fragment`はダミー要素

```tsx
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
<label htmlFor="inputForHtmlFor1">htmlFor:&nbsp;</label>
<input id="inputForHtmlFor1" className="inputForHtmlFor" tabIndex={2} />&nbsp;
<input id="inputForHtmlFor2" className="inputForHtmlFor" tabIndex={1} />
```