# Daike sidebar filter in React

## Installation

```
npm install
```

## Basic usage

### Start server

```
npm run server
```

Open `localhost:8080` in your browser, and you will see the demo.

### Run test

```
npm test
```

## Design methodology

`<Fiilter>` 實現的功能很簡單，就是左欄的 `item` 點擊後會發送 `APPLY_FILTER` action (action 詳情請見 `actions/index.js`)。

以下幾點是實做上的細項

1. `api.js` 在演示中我自行新增了兩個 `member` 一個是 `整個團隊`另一個是 `自己`，我希望 `Filter` 組件保持簡單，如果需要過濾整個團隊或是自己的 ticket，應該是發送 action 時加上特殊的 id，例如 `wholeTeam` 代表整個團隊。因此前端在接受到資料後，需要對接受到的資料做整理，相關套件可以參考 [normalizr](https://github.com/gaearon/normalizr)、以及[這個](https://github.com/reactjs/redux/issues/316)討論。
2. 測試方面我只測試有實際綁定事件的 `<FilterItem>`，以及宣染方面比較有變化的 `<FilterGroup>`

