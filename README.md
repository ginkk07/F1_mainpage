# F1 Race Landing Page

F1 賽事專頁目前包含賽事首頁、Hospitality與Seat Map三部分構成。

本 README 以「日後替換圖片、文字、網址與賽事資料」為主，不說明版面特效或底層程式原理。



頁面入口

|頁面|入口檔案|主要用途|
|-|-|-|
|賽事首頁|`index.html`|切換各站賽事，顯示 HERO、熱門標示、地圖與旅遊行程入口|
|Hospitality|`races/singapore/hospitality/index.html`|顯示新加坡包廂方案、方案詳情、比較表與三日行程|
|Seat Map|`races/singapore/seatmap/index.html`|顯示新加坡看臺／包廂清單、ZONE 篩選與互動地圖|

## 素材替換快速索引

|想修改的內容|主要檔案或資料夾|
|-|-|
|首頁賽事名稱、日期、介紹、熱門標示與按鈕網址|`js/race-data.js`|
|首頁各站 PC／手機 HERO|`assets/pic/<race-id>/`|
|首頁各站賽道線條圖|`assets/ui/<race-id>-track.svg`|
|新加坡首頁 Hospitality 入口卡片|`js/race-data.js` 內新加坡資料的 `hospitality`|
|Hospitality 各方案資料、圖片、介紹與官方網址|`races/singapore/hospitality/js/hospitality-data.js`|
|Hospitality HERO、體驗卡、三日行程、福泰連結與 Footer|`races/singapore/hospitality/index.html`|
|Seat Map 看臺／包廂名稱、圖片、介紹、ZONE 與分類|`races/singapore/seatmap/js/seat-data.js`|
|Seat Map 地圖本體|`assets/ui/singapore-seatmap-map-singapore-f1-map.svg`|
|Seat Map 詢問按鈕與頁面導覽|`races/singapore/seatmap/index.html`|
|卡片背景、裝飾圖、Logo 與 Seat Map 介面素材|`assets/ui/`|

## 素材相關結構

```text
F1\\\_mainpage/
├─ index.html
├─ assets/
│  ├─ pic/
│  │  ├─ australia/
│  │  ├─ china/
│  │  ├─ japan/
│  │  ├─ singapore/
│  │  └─ ...其他賽事
│  └─ ui/
│     ├─ <race-id>-track.svg
│     ├─ race-card-bg.png
│     ├─ race-card-bg-active.png
│     ├─ mobile-top-decoration.svg
│     └─ ...Seat Map 與共用介面素材
├─ js/
│  └─ race-data.js
└─ races/
   └─ singapore/
      ├─ hospitality/
      │  ├─ index.html
      │  └─ js/hospitality-data.js
      └─ seatmap/
         ├─ index.html
         └─ js/seat-data.js
```

## 通用替換方式

1. 先把新素材放到既有資料夾；一般賽事圖片放在 `assets/pic/<race-id>/`，介面圖與賽道 SVG 放在 `assets/ui/`。
2. 若沿用原檔名，可直接覆蓋圖片，不必修改 JavaScript 或 HTML 路徑。
3. 若更改檔名，必須同步修改資料檔或 HTML 內的完整相對路徑。
4. 圖片比例建議沿用同位置的現有素材，避免文字位置、裁切範圍或手機畫面跑版。
5. 修改後使用網站伺服器或 GitHub Pages 預覽。此專案使用 ES Modules，不建議直接雙擊 `index.html` 以 `file://` 開啟測試。
6. 最後分別檢查桌機與手機畫面。

\---

## 首頁素材

### 主要資料檔

```text
js/race-data.js
```

`RACE\\\_DATA` 陣列中的每一個物件代表一場賽事。修改既有賽事時，找到相同的 `id` 再更換欄位即可。

|欄位|顯示位置／用途|修改注意事項|
|-|-|-|
|`id`|賽事識別名稱|必須唯一；建議使用小寫英文與連字號，不要任意修改既有值|
|`titleZh`|賽事卡片中文名稱|可直接修改文字|
|`titleEn`|賽事卡片英文名稱|英文過長時需檢查卡片排版|
|`heroTitle`|HERO 主標題|建議維持簡短|
|`heroSubtitle`|HERO 副標題|目前通常使用 `GRAND PRIX`|
|`dateText`|HERO 完整日期|目前格式為 `YYYY.MM.DD - MM.DD`|
|`cardDate`|賽事卡片日期|修改賽期時需與 `dateText` 同步|
|`description`|HERO 賽事介紹|文字過長會影響桌機與手機高度|
|`isPopular`|熱門圖示與列表優先順序|僅使用 `true` 或 `false`；`true` 會優先排在列表前方|
|`mapUrl`|「查看地圖」網址|空字串 `""` 會隱藏按鈕|
|`itineraryUrl`|「查看行程」網址|空字串 `""` 會隱藏按鈕|
|`hospitality`|HERO 下方 Hospitality 入口卡片|非必要；未提供時整個卡片不顯示，也不保留空位|
|`assets.heroDesktop`|桌機 HERO 圖片|與手機圖分開管理|
|`assets.heroMobile`|手機 HERO 圖片|請針對直式／窄畫面重新裁切，不要只縮小桌機圖|
|`assets.trackSvg`|HERO 右側賽道線條圖|路徑需指向有效 SVG|

### 賽事資料範例

新增賽事時，可複製既有物件後再修改；不要漏掉物件之間的逗號。

```js
{
  id: "example-race",
  titleZh: "範例大獎賽",
  titleEn: "EXAMPLE GRAND PRIX",
  heroTitle: "EXAMPLE",
  heroSubtitle: "GRAND PRIX",
  dateText: "2026.01.01 - 01.03",
  cardDate: "01.01 - 01.03",
  isPopular: false,
  mapUrl: "",
  itineraryUrl: "",
  description: "賽事介紹文字。",
  assets: {
    heroDesktop: "assets/pic/example-race/example-race-hero-desktop.jpg",
    heroMobile: "assets/pic/example-race/example-race-hero-mobile.jpg",
    trackSvg: "assets/ui/example-race-track.svg"
  }
}
```

### Hospitality 入口卡片

目前新加坡賽事資料另有 `hospitality`。需要顯示包廂入口時，可使用以下格式：

```js
hospitality: {
  eyebrow: "SINGAPORE HOSPITALITY",
  title: "尊榮包廂體驗",
  description: "包廂入口的簡短介紹。",
  ctaLabel: "探索方案",
  url: "races/singapore/hospitality/index.html",
  image: "assets/pic/singapore/singapore-hospitality-paddock-club-cover.jpg",
  imageAlt: "圖片內容說明"
}
```

* 沒有 Hospitality 頁面的賽事不需要加入此物件。
* 只要 `title` 未填，首頁就會隱藏整個 Hospitality 模組。
* `url` 可使用站內相對路徑或完整外部網址。
* `imageAlt` 應描述圖片內容，不要只寫「圖片」。

### 首頁圖片位置與命名

建議延續目前規則：

```text
assets/pic/<race-id>/<race-id>-hero-desktop.jpg
assets/pic/<race-id>/<race-id>-hero-mobile.jpg
assets/ui/<race-id>-track.svg
```

例如新加坡：

```text
assets/pic/singapore/singapore-hero-desktop.jpg
assets/pic/singapore/singapore-hero-mobile.jpg
assets/ui/singapore-track.svg
```

\---

## Hospitality 素材

### 各方案資料

```text
races/singapore/hospitality/js/hospitality-data.js
```

各方案放在 `HOSPITALITY\\\_PACKAGES` 陣列中。方案卡、區域介紹、詳情切換與比較表都會讀取這份資料，因此同一段文字不需要分別改很多次。

|欄位|用途|修改注意事項|
|-|-|-|
|`id`|方案識別名稱|必須唯一；不要任意修改既有值|
|`name`|完整方案名稱|顯示於詳情標題|
|`shortName`|短名稱|顯示於切換器或較小區塊|
|`featured`|是否屬於重點方案|僅使用 `true` 或 `false`|
|`order`|畫面上的方案編號|調整陣列順序時應一起更新，例如 `"01"`|
|`category`|所屬區域代碼|只使用目前既有值：`pit`、`final`、`turn3`、`flyer`、`zone4`|
|`categoryLabel`|區域顯示名稱|例如 `PIT BUILDING`、`TURN 3`|
|`location`|方案位置|顯示於詳情與比較表|
|`view`|主要觀看區域|顯示於詳情與比較表|
|`experience`|體驗類型|顯示於卡片／詳情的小標|
|`tagline`|方案重點短句|建議維持一行到兩行|
|`heroLead`|精選方案摘要|使用精簡文字|
|`image`|方案主要封面|路徑相對於 Hospitality 頁面，目前以 `../../../assets/` 開頭|
|`viewingMode`|觀看方式|文字內的「無直接視野」也會影響頁面判斷，請保留真實描述|
|`nearby`|鄰近彎角／設施|用 `·` 分隔可維持現有格式|
|`gallery`|方案圖集|每張包含 `src`、`label`、`alt`|
|`cardLead`|方案卡片摘要|避免寫成完整長文|
|`description`|方案完整介紹|詳情區使用|
|`highlights`|方案特色清單|每一項是一個獨立字串|
|`officialUrl`|官方方案頁|必須使用完整網址|

方案圖片目前集中在：

```text
assets/pic/singapore/
```

更換 `gallery` 時，每張圖都必須同時填寫：

```js
gallery: \\\[
  {
    src: "../../../assets/pic/singapore/your-image.webp",
    label: "畫面標籤",
    alt: "圖片實際內容說明"
  }
]
```

### 新增或調整方案分類

一般更換文字與圖片時，不需要修改分類設定。只有新增全新區域時，才需要同步檢查同一檔案底部的：

```js
HOSPITALITY\\\_AREAS
CATEGORY\\\_FILTERS
```

`HOSPITALITY\\\_PACKAGES.category` 必須能對應 `HOSPITALITY\\\_AREAS.id`，否則方案無法放入正確區域。方案的實際切換順序依陣列順序排列，調整位置時也要同步整理 `order`。

### Hospitality 固定內容

以下內容不是由 `hospitality-data.js` 產生，而是直接放在：

```text
races/singapore/hospitality/index.html
```

|固定內容|在 HTML 中可搜尋|相關素材／注意事項|
|-|-|-|
|頁面標題與 SEO 介紹|`<title>`、`meta name="description"`|年份或主題更換時一起更新|
|頂部「查看行程」|`hospitality-header\\\_\\\_cta`|修改 `href`|
|HERO 背景|`hospitality-hero\\\_\\\_image`|目前為 `singapore-hospitality-hero-crystal.webp`|
|HERO 標題、日期與地點|`heroTitle`、`hospitality-hero\\\_\\\_meta`|賽期變更時同步更新|
|「離開座位後」體驗卡|`night-experience\\\_\\\_grid`|圖片、標題、說明與適用方案都在 HTML|
|方案洽詢按鈕|`洽詢新加坡行程`|與福泰行程網址同步|
|三日行程背景|`itinerary-section\\\_\\\_media`|目前使用 `singapore-hero-desktop.jpg`|
|三日行程日期與文字|`itinerary-timeline`|FRI／SAT／SUN 三天需一起確認|
|下方「查看行程」與「座位地圖」|`itinerary-section\\\_\\\_cta`|檢查外部網址與相對路徑|
|Footer Logo|`footerlogo`|目前使用 `assets/ui/tristar-logo.svg`|
|Footer 聲明|`hospitality-footer`|圖片授權或官方規則改變時更新|

福泰行程網址目前在同一份 HTML 中出現不只一次。更換網址時，請搜尋舊網址並確認所有位置都有更新。

\---

## Seat Map 素材

### 看臺與包廂資料

```text
races/singapore/seatmap/js/seat-data.js
```

`SEAT\\\_DATA` 中的每一筆 `createSeat({...})` 代表一個看臺或 Hospitality 位置。

|欄位|用途|修改注意事項|
|-|-|-|
|`id`|座位資料識別名稱|必須唯一；不要與其他座位重複|
|`title`|左側卡片與下方資訊列名稱|可直接更換文字|
|`category`|一般看臺或 Hospitality|只使用 `grandstand` 或 `hospitality`|
|`zone`|所屬區域|使用 `ZONE 1`、`ZONE 2`、`ZONE 3`、`ZONE 4` 或 `PADDOCK ZONE`|
|`mapIds`|對應地圖 SVG 元素|必須與 SVG 中的 `id` 完全相同，包含大小寫與符號|
|`image`|座位介紹圖片|未填時自動使用 `DEFAULT\\\_IMAGE`|
|`description`|下方資訊列介紹|可直接更換文字|
|`filterColor`|可點擊但未選取時的顏色|一般素材替換不需要設定|
|`activeColor`|選取後顏色|一般素材替換不需要設定|

新增資料範例：

```js
createSeat({
  id: "example-grandstand",
  title: "EXAMPLE GRANDSTAND",
  category: "grandstand",
  zone: "ZONE 1",
  mapIds: \\\["grandstand-example"],
  image: "../../../assets/pic/singapore/example-grandstand.png",
  description: "座位介紹文字。"
}),
```

### `mapIds` 是必要連動欄位

Seat Map 的卡片與地圖不是依座位名稱連動，而是依 `mapIds` 尋找 SVG 元素。

```js
mapIds: \\\["grandstand-example"]
```

地圖 SVG 內必須存在完全相同的 ID：

```html
<g id="grandstand-example">...</g>
```

若兩者不同，會發生以下情況：

* 左側卡片存在，但地圖區域無法同步亮起。
* 點擊 SVG 區域時找不到對應座位。
* ZONE 或分類篩選的淡化狀態不正確。

因此只換名稱、介紹或圖片時，不要修改 `id` 與 `mapIds`。

### 地圖 SVG

目前地圖檔案：

```text
assets/ui/singapore-seatmap-map-singapore-f1-map.svg
```

如果使用同檔名覆蓋，不需要修改其他路徑。如果地圖檔改名，必須在 `races/singapore/seatmap/index.html` 同步更新：

1. `<link rel="preload" ...>` 的 `href`。
2. `.map-svg` 的 `data-svg-src`。

新的 SVG 仍須保留所有已被 `seat-data.js` 使用的 ID；若 SVG ID 改名，必須同步修改每筆座位的 `mapIds`。

### ZONE 與預設圖片

同一份 `seat-data.js` 頂部包含：

```js
ZONE\\\_OPTIONS
ZONE\\\_COLOR
ZONE\\\_SEAT\\\_FILTER\\\_COLOR
ZONE\\\_SEAT\\\_ACTIVE\\\_COLOR
DEFAULT\\\_IMAGE
```

* `ZONE\\\_OPTIONS` 同時控制篩選選項與清單排序基準。
* 一般只換座位素材時，不需要修改 ZONE 顏色。
* 目前沒有 ZONE 3 座位資料，但 ZONE 3 篩選按鈕仍保留。
* 未指定 `image` 時使用：

```text
assets/pic/singapore/singapore-seatmap-grandstands-default.png
```

### 預設開啟區域

目前頁面載入後預設開啟 `ZONE 1`。設定位置：

```text
races/singapore/seatmap/js/seat-map-app.js
```

```js
let activeZoneSet = new Set(\\\["ZONE 1"]);
```

這不是素材欄位；只有需要更換頁面預設篩選狀態時才修改。

### Seat Map 固定連結

以下內容在 `races/singapore/seatmap/index.html`：

* 頂部「賽事首頁」與「Hospitality」導覽連結。
* 下方「立即前往詢問」按鈕網址。
* 地圖 SVG 路徑。
* 左側與地圖區的介面圖片路徑。

更換詢問網址時，可搜尋：

```html
class="cta-button"
```

\---

## 共用介面素材

下列檔案屬於介面外觀，不是一般賽事內容。用相同檔名覆蓋最安全；若改名，需同步修改引用它的 HTML 或 CSS。

|檔案|用途|
|-|-|
|`assets/ui/race-card-bg.png`|首頁一般賽事卡片背景|
|`assets/ui/race-card-bg-active.png`|首頁 active 賽事卡片背景|
|`assets/ui/mobile-top-decoration.svg`|首頁手機版頂部裝飾|
|`assets/ui/tristar-logo.svg`|Hospitality Footer Logo|
|`assets/ui/singapore-seatmap-background-texture.png`|Seat Map 頁面背景材質|
|`assets/ui/singapore-seatmap-ui-sidebar-decoration-desktop.svg`|Seat Map 桌機版側欄裝飾|
|`assets/ui/singapore-seatmap-ui-sidebar-decoration-mobile.svg`|Seat Map 手機版側欄裝飾|
|`assets/ui/singapore-seatmap-ui-sidebar-border-left.svg`|Seat Map 左側線框|
|`assets/ui/singapore-seatmap-ui-sidebar-border-top.svg`|Seat Map 上方線框|
|`assets/ui/singapore-seatmap-ui-exchange.svg`|看臺／Hospitality 分類切換圖示|
|`assets/ui/singapore-seatmap-ui-info.svg`|手機版地圖說明圖示|

## 路徑與命名規則

* 賽事 `id`、資料夾與檔名建議統一使用小寫英文加連字號，例如 `united-states`。
* 首頁資料從網站根目錄載入，素材路徑通常以 `assets/` 開頭。
* Hospitality 與 Seat Map 位於較深層資料夾，資料中的圖片路徑目前以 `../../../assets/` 開頭；不要自行刪減 `../`。
* CSS 內的圖片路徑是相對於 CSS 檔案，不一定與 HTML／JavaScript 中的路徑相同。
* 檔名大小寫必須一致。Windows 本機可能正常，但部署到 GitHub Pages 後可能因大小寫不同而失效。
* 不建議使用空格、全形符號或中文檔名。
* JPG 適合照片，PNG 適合透明圖，WebP 適合大量照片壓縮，SVG 適合賽道與介面線條圖。

## 一般情況不要修改

只換圖片、文字與網址時，不需要修改：

* HTML 的 `class`、`data-\\\*` 屬性與區塊結構。
* JavaScript 的 `import`／`export`。
* Seat Map 的 `id`、`mapIds` 與 SVG ID。
* Hospitality 的 `category` 與區域設定。
* CSS 動畫、RWD 斷點與定位數值。

若確實需要改動上述項目，應先確認它是否與其他檔案連動。

## 更新後檢查清單

### 首頁

* \[ ] 桌機 HERO 圖片顯示正常，主體沒有被文字遮住。
* \[ ] 手機 HERO 使用手機版圖片，裁切位置正確。
* \[ ] 賽事名稱、兩種日期與介紹皆正確。
* \[ ] 熱門賽事優先排序與圖示正確。
* \[ ] 「查看地圖」與「查看行程」有網址時顯示，沒有網址時隱藏。
* \[ ] 新加坡 Hospitality 入口卡片的圖片、文字與連結正確。

### Hospitality

* \[ ] 10 個方案皆能切換，方案順序與 `order` 一致。
* \[ ] 封面與圖集都能顯示，沒有破圖。
* \[ ] 方案詳情、特色清單、比較表與官方網址一致。
* \[ ] HERO、體驗卡與三日行程日期已同步更新。
* \[ ] 頂部、方案區與頁尾的福泰行程網址都已確認。
* \[ ] 桌機導覽與手機選單都能使用。

### Seat Map

* \[ ] 頁面載入後預設開啟 ZONE 1。
* \[ ] Grandstand／Hospitality 切換正常。
* \[ ] 左側卡片、地圖區域與下方資訊列能同步。
* \[ ] 每個新增或修改座位的 `mapIds` 都能在 SVG 中找到。
* \[ ] 座位圖片、名稱與介紹正確。
* \[ ] 手機版地圖可縮放、拖曳，列表可正常開關。
* \[ ] 「立即前往詢問」與頁面導覽連結正確。

