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