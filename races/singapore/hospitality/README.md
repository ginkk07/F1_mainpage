# F1 Singapore Hospitality

2026 F1 新加坡大獎賽 Hospitality 獨立活動頁。

## 資訊來源與使用注意

- 方案文字依 Singapore GP 官方 2026 Hospitality 頁面整理。
- 最後核對日期：2026-07-29。
- 官方保留調整方案、設施、服務與活動的權利，上線前應再次核對官方資訊。
- 頁面使用 Singapore GP 官方活動照片，依福泰旅遊取得的授權作行銷用途。
- 官方照片為過往賽事活動示意；2026 年實際產品、服務與體驗可能有所不同。
- 各方案的官方資料頁與來源網址保留於 `js/hospitality-data.js`。
- 頁面不顯示即時銷售狀態；實際供應與預訂內容須另行確認。

## 專案結構

- `index.html`：頁面入口
- `css/hospitality.css`：完整頁面樣式與 RWD
- `js/hospitality-data.js`：Hospitality 方案資料
- `js/hospitality.js`：方案切換、篩選與導覽互動
- `../../../assets/pic/singapore/`：新加坡站 HERO、包廂、露臺、餐飲及活動照片
- `../../../assets/ui/`：外框、Logo、Icon 與其他介面素材

## 版型說明

- HERO 使用晶體賽車 KV，僅保留賽事名稱、日期、場地與單一入口。
- Hospitality 體驗導覽依賽道位置分成 5 個區域，呈現全部 10 個方案。
- 每個方案同時顯示包廂／餐廳空間與露臺／專屬看台照片，並標示直接視野、鄰近彎角、Pit Entry、Padang Stage 等位置資訊。
- 餐飲、Padang 主舞台、Pit Lane Walk、渡輪與 Flyer Lifestyle Area 另以體驗照片整理，並標示主要對應方案。
- QUICK SWITCH 放在方案圖片下方，使用單一選單與上一個／下一個按鈕；桌機閱讀詳情時會維持可操作，切換方案也不會拉回上方。

## 本機預覽

此專案使用 ES Modules，請透過本機伺服器開啟，不要直接雙擊 HTML：

```bash
python -m http.server 8000
```

接著瀏覽 `http://localhost:8000/`。

## 部署

整個資料夾可直接部署至一般靜態網站空間。網站根目錄請指向本資料夾，入口檔為 `index.html`。
