# 座位資料管理指南

## 概述
座位資料現在統一存放在 `seat-data.csv`，使用 Excel 編輯方便維護。

---

## 📊 工作流程

### 🎯 選擇編輯方式

#### 方式 A️⃣ - 用 Excel（推薦，無編碼問題）

1. 轉換 CSV 為 Excel 格式：
   ```bash
   python3 scripts/csv-to-excel.py
   ```
   會生成 `seat-data.xlsx`

2. 用 Excel 打開 `seat-data.xlsx` 並編輯座位信息

3. 保存檔案

4. 用 CSV 格式導出：
   - 點選「另存為」
   - 選「CSV UTF-8（逗號分隔）」
   - 替換原 `seat-data.csv`

5. 跳轉到「轉換資料」步驟

#### 方式 B️⃣ - 用 Google Sheets（推薦，最簡單）

1. 將 `seat-data.csv` 上傳到 Google Drive
2. 用 Google Sheets 打開
3. 編輯座位信息
4. 下載為 CSV（Google Sheets 自動處理編碼）
5. 用下載的 CSV 替換 `seat-data.csv`
6. 跳轉到「轉換資料」步驟

#### 方式 C️⃣ - 用文本編輯器 + CSV（技術向）

1. 用 **Notepad++** 或 **VS Code** 打開 `seat-data.csv`
2. 確保編碼是 **UTF-8 with BOM**
3. 編輯座位信息：
   - **ID** - 座位唯一識別碼（英文+連字符，如 `turn-1-grandstand`）
   - **標題** - 座位顯示名稱
   - **分類** - `grandstand` 或 `hospitality`
   - **區域** - `ZONE 1`, `ZONE 2`, `ZONE 3`, `ZONE 4`, `PADDOCK ZONE`
   - **SVG Map ID** - 對應 `singapore_f1_map.svg` 中的元素 ID（多個用 `|` 分隔）
   - **圖片路徑** - 座位圖片位置
   - **描述** - 座位詳細描述
   - **備註** - 其他備註（可選）

4. 保存檔案
5. 跳轉到「轉換資料」步驟

### 2️⃣ 轉換資料

運行以下命令將 CSV 轉換成 JavaScript 和 JSON：

**使用 Python（推薦，無需額外安裝）：**
```bash
python3 scripts/csv-to-seat-data.py
```

**或使用 Node.js（需先安裝 csv-parse）：**
```bash
npm install csv-parse --save-dev
node scripts/csv-to-seat-data.js
```

### 3️⃣ 更新代碼

轉換後會生成：
- `js/seat-data-generated.js` - JavaScript 代碼（用於開發）
- `data/seat-data.json` - JSON 格式（用於動態加載）

**複製輸出到 `js/seat-data.js`：**

如果需要自動化，可以：
1. 直接替換 `js/seat-data.js` 中的 `SEAT_DATA` 陣列
2. 或修改座位加載邏輯，改為讀取 `seat-data.json`

---

## 💡 使用建議

### 新增座位
在 CSV 中新增一列：

| ID | 標題 | 分類 | 區域 | SVG Map ID | ... |
|----|------|------|------|-----------|-----|
| new-seat-id | NEW SEAT | grandstand | ZONE 1 | new-seat-svg-id | ... |

### 修改座位
編輯現有列，保存後運行轉換工具。

### 刪除座位
刪除 CSV 中的列即可。

---

## ⚠️ 注意事項

1. **SVG Map ID 必須與 SVG 對應**
   - 檢查 `assets/svg/singapore_f1_map.svg` 確保 ID 存在
   - 不匹配會導致地圖點擊無效

2. **CSV 格式需要維持**
   - 確保 Excel 保存為 CSV（逗號分隔）
   - 描述中如有逗號，需要用引號包圍

3. **分類和區域必須使用指定值**
   - 分類：`grandstand` 或 `hospitality`
   - 區域：`ZONE 1`, `ZONE 2`, `ZONE 3`, `ZONE 4`, `PADDOCK ZONE`

4. **圖片路徑相對於 HTML 根目錄**
   - 例如：`./assets/images/grandstand_turn1.png`

---

## 🔄 完全自動化（進階）

可以在 `package.json` 中添加腳本：

```json
{
  "scripts": {
    "sync-seats": "python3 scripts/csv-to-seat-data.py"
  }
}
```

然後運行：
```bash
npm run sync-seats
```

---

## 相關檔案

- `seat-data.csv` - 座位資料表
- `scripts/csv-to-seat-data.py` - Python 轉換工具
- `scripts/csv-to-seat-data.js` - Node.js 轉換工具
- `js/seat-data.js` - 當前使用的座位資料（手動或自動更新）
- `data/seat-data.json` - JSON 格式座位資料（可選）
