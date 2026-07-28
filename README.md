# F1 Race Landing Page

獨立頁面切版，使用 ES Modules 拆分資料、Hero 與 Race Select。

## 檔案結構

```text
index.html
css/
  base.css
  race-hero.css
  race-select.css
js/
  main.js
  race-data.js
  race-hero.js
  race-select.js
assets/
  singapore-hero-pc.svg
  singapore-hero-mobile.svg
  track-singapore.svg
```

## 需要替換的正式素材

目前 assets 內是佔位素材，未代替正式圖片或正式賽道圖。

請在 `js/race-data.js` 替換各賽事的：

```js
assets: {
  heroDesktop: "assets/your-pc-image.jpg",
  heroMobile: "assets/your-mobile-image.jpg",
  trackSvg: "assets/your-track.svg"
}
```

## 功能

- 點擊 Race Select 卡片後，Hero 會更新標題、日期、文案、背景與賽道 SVG。
- 桌機版 Race Select 支援滑鼠滾輪左右捲動。
- 桌機版 Hero 右側賽道 SVG 會隨滑鼠位置輕微傾斜。
- 「查看地圖」目前只保留資料入口，已阻止預設跳轉，等待後續接 seat map 區塊。
- 讚圖示只作為熱門標示，不可點擊。

## 斷點

- 1200px 以上
- 1200px - 1024px
- 1024px - 768px
- 768px 以下
