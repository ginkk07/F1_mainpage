# Singapore F1 Seat Map 新加坡一級方程式賽事座位地圖

互動式座位篩選與選購系統，提供完整的座位查看、篩選、選購功能。

## 🎯 核心功能

### 1. 座位數據管理
- **30+ 座位類型** - 包含一般看台（Grandstand）與包廂招待（Hospitality）
- **5 個區域分類** - ZONE 1、ZONE 2、ZONE 3、ZONE 4、PADDOCK ZONE
- **CSV 集中管理** - 用 Excel 編輯，無需修改代碼
- **自動轉換工具** - Python/Node.js 一鍵轉換為 JavaScript 和 JSON

### 2. 互動式座位地圖
- **SVG 地圖渲染** - 完整的 Singapore F1 賽道地圖
- **座位點擊互動** - 點擊地圖或清單選擇座位
- **複選支持** - 同時選擇多個座位，追蹤選擇順序
- **視覺反饋** - Active（已選）與 Disabled（不可用）狀態顯示

### 3. 靈活的篩選系統
- **Zone 篩選** - 按區域篩選座位，實時更新清單和地圖
- **Category 篩選** - 在 Grandstand（看台）和 Hospitality（包廂）之間切換
- **級聯更新** - 篩選結果同步到側邊清單、地圖和詳情欄

### 4. 響應式設計
- **桌機版** - 完整雙欄布局（左側清單 + 右側地圖）
- **手機版** - 
  - 左側清單可收起/展開
  - 地圖支持手指捲動
  - 地圖支持雙指縮放
  - 自適應字體和間距

### 5. 座位詳情展示
- **動態信息欄** - 下方顯示當前選中座位的圖片、標題、描述
- **多選場景** - 最後選中的座位顯示在詳情欄
- **預設狀態** - 無座位選中時顯示歡迎信息

---

## 📁 項目結構

```
assets/
├── pic/                             # 看臺及 Hospitality 照片
└── ui/                              # 賽道 SVG、圖示、外框與背景紋理

races/singapore/seatmap/
    ├── index.html                   # 主頁面
    ├── README.md                    # 本檔案
    ├── SEAT_DATA_GUIDE.md           # 座位數據管理指南
    ├── seat-data.csv                # 座位數據表（Excel 可編輯）
    │
    ├── css/                         # 樣式表
│   ├── main.css                     # 主要樣式（響應式布局）
│   └── mobile-map-zoom.css          # 移動端縮放功能
│
    ├── js/                          # 核心功能模組
│   ├── seat-map-app.js             # 應用主入口（模組協調）
│   ├── seat-data.js                # 座位數據源與查詢函數
│   ├── seat-list-view.js           # 左側座位清單視圖
│   ├── seat-map-view.js            # SVG 地圖視圖與交互
│   ├── seat-info-view.js           # 下方詳情欄視圖
│   ├── seat-zone-filter.js         # Zone 篩選邏輯
│   ├── seat-category-filter.js     # Category 篩選邏輯
│   ├── seat-category-toggle.js     # Category 切換按鈕
│   ├── seat-list-fade.js           # 清單頂底漸變效果
│   ├── seat-mobile-list-toggle.js  # 手機側邊欄收起邏輯
│   ├── seat-map-mobile-scroll.js   # 手機地圖滾動邏輯
│   └── seat-map-mobile-zoom.js     # 手機地圖縮放邏輯
│
    └── scripts/                     # 工具腳本
│   ├── csv-to-seat-data.py         # Python CSV → JavaScript 轉換
│   ├── csv-to-seat-data.js         # Node.js CSV → JavaScript 轉換
│   └── csv-to-json.py              # CSV → JSON 轉換（動態加載用）
```

---

## 各模組詳解

### **seat-data.js** - 數據層
- 座位資料來源（SEAT_DATA 陣列）
- Zone 與 Category 配置
- 座位顏色定義（Filter 色與 Active 色）
- 查詢函數：`getSeatDisplayList()`、`getGrandstandSeatDisplayList()` 等
- **特點**：純數據邏輯，不涉及 DOM 操作

### **seat-list-view.js** - 左側清單視圖
- 根據數據生成座位卡片（.seat-card）
- 處理卡片點擊事件（單選或複選）
- 管理 active 狀態與視覺反饋
- 根據 Zone 篩選顯示/隱藏卡片
- 卡片進場動畫（--card-index、.is-entering）
- 自動滾動使目標卡片進入可視範圍

### **seat-map-view.js** - 地圖視圖
- 載入並注入 SVG 地圖（inline 格式）
- 根據 seat.mapIds 綁定 SVG 看台元素
- 處理 SVG 看台點擊事件
- 管理看台 active / dim（淡化）狀態
- 根據 Zone 篩選狀態控制背景 Zone 區塊顏色
- 統一處理「可點擊/不可點擊」（.is-disabled）狀態

### **seat-info-view.js** - 詳情欄視圖
- 顯示當前選中座位的詳細信息
- 包含圖片、標題、完整描述
- 多選時顯示「最後選中」的座位
- 無座位選中時還原預設信息

### **seat-zone-filter.js** - Zone 篩選控制
- 管理 .zone-nav 中的 Zone chip 按鈕
- 追蹤選中的 Zone（activeZoneSet）
- 按鈕點擊切換篩選狀態
- 初始狀態：無 Zone 被選取（清單顯示「無座位」）
- **注意**：Zone 顯示與座位數據無關（即使無座位仍可選）

### **seat-category-toggle.js** - Category 切換
- 切換按鈕（Grandstand ↔ Hospitality）
- 3D 翻轉動畫效果
- 更新活動座位清單

### **seat-mobile-list-toggle.js** - 手機側邊欄
- 媒體查詢判斷（max-width: 768px）
- 側邊欄收起/展開切換
- 觸摸手勢支持

### **seat-map-mobile-scroll.js** - 手機地圖滾動
- 捕捉觸摸滾動事件
- 維持地圖內容的可滾動狀態

### **seat-map-mobile-zoom.js** - 手機地圖縮放
- 雙指捏合縮放
- 單點觸摸移動
- 縮放界限控制

### **seat-list-fade.js** - 清單漸變效果
- 上下邊界漸變（視覺提示可滾動）
- 窗口 resize 時重算

### **seat-map-app.js** - 應用主入口
- 初始化所有模組
- 管理全局狀態：
  - `selectedSeatIds` - 已選座位集合
  - `activeZoneSet` - 活躍 Zone
  - `activeCategory` - 當前 Category
- 協調各模組保持同步
- 事件委派與狀態流動

---

## 視覺設計


### 顏色系統
- **Zone 1** - 紫色系 (#e07aff → #fab7f5)
- **Zone 2** - 橙色系 (#ff9f1a → #ffba54)
- **Zone 3** - 紅色系 (#ff2d2d → #ff9a9a)
- **Zone 4** - 藍色系 (#2f80ed → #9fc9ff)
- **PADDOCK ZONE** - 金色系 (#ffba54 → #ebbe52)

### 動畫效果
- 卡片進場 - 階梯延遲動畫
- Category 切換 - 3D 翻轉
- 地圖縮放 - 平滑過渡
- 清單滾動 - 邊界漸變

---

## 📊 座位數據管理

### 完整使用工作流

#### 步驟 1️⃣ - 編輯座位數據

用以下任一方式編輯 [seat-data.csv](seat-data.csv)：

**方案 A - Excel（Windows 推薦）**
```
1. 右鍵點擊 seat-data.csv → 用 Excel 打開
2. 編輯座位信息
**工具會自動：**
- 讀取 `seat-data.csv`
- 轉換為 JavaScript 對象陣列
- 更新 `js/seat-data.js` 中的 `SEAT_DATA`

#### 步驟 3️⃣ - 刷新網頁查看效果

```
1. 刷新瀏覽器（F5 或 Ctrl+R）
2. 新座位數據已自動加載 ✅
```

---

### CSV 欄位說明

| 欄位 | 說明 | 範例 |
|------|------|------|
| **ID** | 唯一識別碼（英文+數字） | `turn-1-grandstand` |
| **標題** | 座位顯示名稱 | `TURN 1 GRANDSTAND` |
| **分類** | `grandstand` 或 `hospitality` | `grandstand` |
| **區域** | Zone 名稱 | `ZONE 1` |
| **SVG Map ID** | SVG 地圖元素 ID（支持多個，用\|分隔） | `grandstand-turn1\|turn-area-1` |
| **圖片路徑** | 座位照片相對路徑 | `../../../assets/pic/singapore/singapore-seatmap-grandstands-turn-1.png` |
| **描述** | 座位詳細說明（可為長文本） | `絕佳視角的看台座位...` |
| **備註** | 其他備註信息 | `限量供應` |

---

### 📝 編輯示例

```csv
ID,標題,分類,區域,SVG Map ID,圖片路徑,描述,備註
turn-1-grandstand,TURN 1 GRANDSTAND,grandstand,ZONE 1,grandstand-turn1,../../../assets/pic/singapore/singapore-seatmap-grandstands-turn-1.png,絕佳視角的看台座位，可清晰觀看 TURN 1 轉彎。,
sky-suite-turn-1,SKY SUITE TURN 1,hospitality,ZONE 1,sky-suite-turn1,../../../assets/pic/singapore/singapore-seatmap-hospitality-sky-suite.png,高端包廂招待，含飲食服務。,限量
```

---

### 🔧 轉換工具詳解

#### `csv-to-seat-data.py`（推薦）

**作用：** 將 CSV 轉為 JavaScript 模組

```bash
python3 scripts/csv-to-seat-data.py
```

**輸出：**
- 自動更新 `js/seat-data.js`
- 包含完整的 `SEAT_DATA` 陣列

**特點：**
- 自動處理中文編碼
- 保留現有的 `ZONE_OPTIONS` 和 `CATEGORY_OPTIONS`
- 覆蓋舊數據（安全）

#### `csv-to-seat-data.js`（Node.js）

```bash
node scripts/csv-to-seat-data.js
```

**用途：** 如果環境中無 Python，用 Node.js 轉換

---

### ❌ 常見問題

**Q: 編輯完 CSV 後，網頁沒有更新？**
```
A: 忘記執行轉換工具。
   運行：python3 scripts/csv-to-seat-data.py
   然後刷新瀏覽器
```

**Q: Excel 打開 CSV 時顯示亂碼？**
```
A: 編碼問題。解決方案：
   1. 用 Google Sheets 上傳（自動正確解析）
   2. 或用 Notepad++ 改編碼為「UTF-8 with BOM」後保存
```

**Q: 添加新座位後，地圖上沒有對應點擊區域？**
```
A: 需要配置 SVG Map ID。
   1. 確保 SVG 地圖中存在對應的元素 ID
   2. 在 CSV 中正確填寫「SVG Map ID」欄位
   3. 運行轉換工具並刷新
```

**Q: 如何添加新的 Zone？**
```
A: 編輯 js/seat-data.js 頂部的 ZONE_OPTIONS：

export const ZONE_OPTIONS = [
  { value: 'ZONE 1', label: 'Zone 1', ... },
  { value: 'ZONE 5', label: 'Zone 5', ... },  // 新增
];
```

---

詳見 [SEAT_DATA_GUIDE.md](SEAT_DATA_GUIDE.md) 完整指南

---

## 💻 技術棧

- **前端框架** - Vanilla JavaScript (ES6 Modules)
- **樣式** - CSS3（Grid、Flexbox、CSS Variables）
- **數據交互** - 模組化事件系統
- **響應式** - CSS 媒體查詢 + 移動端手勢
- **資源** - SVG 地圖、PNG 座位照片

---

## 快速開始

### 開發
1. 用瀏覽器打開 [index.html](index.html)
2. 開啟開發者工具查看控制台

### 更新座位
1. 編輯 [seat-data.csv](seat-data.csv)
2. 運行 `python3 scripts/csv-to-seat-data.py`
3. 將輸出複製到 [js/seat-data.js](js/seat-data.js)

### 自訂 Zone / Category
編輯 [js/seat-data.js](js/seat-data.js) 頂部的 `ZONE_OPTIONS` 和 `CATEGORY_OPTIONS`

---

## 瀏覽器支持

- Chrome / Edge（推薦）
- Firefox
- Safari 12+
- iOS Safari 12+
- Android Chrome

---

## 架構設計

### 單向數據流
```
座位數據 (seat-data.js)
    ↓
清單視圖 ← 用戶點擊 → 地圖視圖
    ↓                    ↓
狀態管理 (activeZoneSet, selectedSeatIds)
    ↓
篩選邏輯 (seat-zone-filter.js)
    ↓
視圖更新 (清單、地圖、詳情欄)
```

### 模組間通訊
- **事件驅動** - 用戶互動觸發事件
- **狀態傳遞** - 通過回調函數更新狀態
- **集中管理** - seat-map-app.js 協調所有模組

---

## 後續功能規劃

- 地圖 zoom / focus：`seat-map-focus.js`
- 手機橫向清單 carousel：`seat-mobile-carousel.js`

---

## 📄 文件說明

- **[SEAT_DATA_GUIDE.md](SEAT_DATA_GUIDE.md)** - 座位數據管理完整指南
- **index.html** - 應用主頁面
- **css/main.css** - 主要樣式表
- **css/mobile-map-zoom.css** - 移動端縮放樣式

---

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request 改進此項目。
