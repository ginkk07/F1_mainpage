// 方案內容依 Singapore GP 官方 2026 Hospitality 頁面整理。
// 最後核對：2026-07-29。官方保留調整方案、設施、服務與活動的權利。
export const HOSPITALITY_PACKAGES = [
  {
    id: "paddock-club",
    name: "Formula 1 Paddock Club™",
    shortName: "PADDOCK CLUB™",
    featured: true,
    order: "01",
    category: "pit",
    categoryLabel: "PIT BUILDING",
    location: "Pit Building",
    view: "Pit Exit grandstand / Turns 4–5 rooftop viewing areas",
    experience: "Pit Lane Walk & Viewing Areas",
    tagline: "每日指定時段 Pit Lane Walk 與多處觀景區",
    heroLead: "空調包廂、每日指定時段 Pit Lane Walk，以及分別面向 Pit Exit 與 4–5 號彎的觀景區。",
    image: "../../../assets/pic/singapore/singapore-hospitality-paddock-club-cover.jpg",
    viewingMode: "包廂、Pit Exit 看台與屋頂觀景區",
    nearby: "Pit Exit · Turns 4–5 · Paddock Club™ Atrium",
    gallery: [
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-paddock-club-suite.webp",
        label: "包廂與 ATRIUM",
        alt: "Formula 1 Paddock Club 室內餐飲與接待空間"
      },
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-paddock-club-rooftop.webp",
        label: "屋頂觀景區",
        alt: "Formula 1 Paddock Club 屋頂觀景區與賽道"
      }
    ],
    cardLead: "可參加每日指定時段 Pit Lane Walk，並使用面向 Pit Exit 的專屬看台及面向 4–5 號彎的屋頂觀景區。",
    description:
      "Formula 1 Paddock Club™ 提供全空調包廂。賓客可於指定時段參加每日 Pit Lane Walk，近距離觀看賽車、車庫與工作人員；觀賽位置包括面向 Pit Exit 的專屬看台、Rooftop Viewing Terrace，以及面向 4–5 號彎的屋頂觀景廊台。觀景區座位依先到先得及現場容量安排。",
    highlights: [
      "每日指定時段 Paddock Club™ Pit Lane Walk",
      "面向 Pit Exit 的專屬看台及面向 4–5 號彎的屋頂觀景區",
      "Paddock Club™ Atrium 餐廳、特色酒吧及包廂內餐飲",
      "香檳、葡萄酒、烈酒、啤酒與軟性飲料暢飲"
    ],
    officialUrl: "https://singaporegp.sg/en/hospitality/formula-one-paddock-club/"
  },
  {
    id: "twenty3",
    name: "TWENTY3",
    shortName: "TWENTY3",
    featured: true,
    order: "02",
    category: "final",
    categoryLabel: "FINAL TURN",
    location: "Final Turn",
    view: "Final Turn / Finish Line / Podium",
    experience: "Restaurants, Bars & Live Entertainment",
    tagline: "最後一彎、終點線與頒獎台視野",
    heroLead: "位於賽道最後一彎，設有室內外觀景位置、特色餐廳、酒吧、現場娛樂與往返渡輪服務。",
    image: "../../../assets/pic/singapore/singapore-hospitality-twenty3-cover.jpg",
    viewingMode: "餐廳、觀景廊台與 Apex Lounge 屋頂",
    nearby: "Final Turn · Finish Line · Podium",
    gallery: [
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-twenty3-restaurant.webp",
        label: "賽道旁餐廳",
        alt: "TWENTY3 賽道旁特色餐廳"
      },
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-twenty3-rooftop.webp",
        label: "APEX LOUNGE 屋頂",
        alt: "TWENTY3 Apex Lounge 屋頂與賽後煙火"
      }
    ],
    cardLead: "從多處室內外觀景位置觀看最後一彎，屋頂可眺望終點線、頒獎台與濱海灣。",
    description:
      "TWENTY3 位於賽道最後一彎。Apex Lounge 屋頂可眺望濱海灣、終點線與頒獎台；三間特色餐廳可觀看最後一彎，場內另有多處室內外觀景廊台。Podium Terrace 與 Apex Lounge 提供現場娛樂，方案包含往返渡輪服務。",
    highlights: [
      "Apex Lounge 屋頂眺望濱海灣、終點線與頒獎台（依現場容量）",
      "三間特色餐廳可觀看最後一彎",
      "Podium Terrace 與 Apex Lounge 現場娛樂",
      "香檳、葡萄酒、烈酒、啤酒與軟性飲料暢飲；包含往返渡輪服務"
    ],
    officialUrl: "https://singaporegp.sg/en/hospitality/twenty3/"
  },
  {
    id: "sky-suite",
    name: "Sky Suite",
    shortName: "SKY SUITE",
    featured: true,
    order: "03",
    category: "pit",
    categoryLabel: "PIT STRAIGHT",
    location: "Pit Straight（實際位置依預訂時供應）",
    view: "Private Viewing Gallery / Sky Terrace",
    experience: "Private Viewing Gallery",
    tagline: "私人觀景廊台與屋頂 Sky Terrace",
    heroLead: "全空調 Sky Suite 附私人觀景廊台，屋頂 Sky Terrace 可眺望賽道與新加坡天際線。",
    image: "../../../assets/pic/singapore/singapore-hospitality-sky-suite-cover.jpg",
    viewingMode: "包廂附私人 Gallery，另有屋頂 Sky Terrace",
    nearby: "Pit Straight · Sky Terrace · Singapore Flyer",
    gallery: [
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-sky-suite-interior.webp",
        label: "SKY SUITE 包廂",
        alt: "Sky Suite 空調包廂與賽道旁用餐空間"
      },
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-sky-suite-terrace.webp",
        label: "SKY TERRACE",
        alt: "Sky Suite 屋頂 Sky Terrace 戶外餐飲空間"
      }
    ],
    cardLead: "全空調包廂附私人觀景廊台，另可前往屋頂 Sky Terrace；Pit Straight 位置依預訂時供應。",
    description:
      "Sky Suite 為全空調包廂，設有私人觀景廊台與專用洗手間。賓客亦可前往屋頂 Sky Terrace 欣賞賽道與新加坡天際線。官方註明包廂位於 Pit Straight，但實際位置須視預訂時供應狀況而定；私人觀景廊台座位亦依先到先得安排。",
    highlights: [
      "全空調 Sky Suite 與附設私人觀景廊台",
      "屋頂 Sky Terrace 全景視野",
      "美食餐飲",
      "香檳、葡萄酒、烈酒、啤酒與軟性飲料暢飲"
    ],
    officialUrl: "https://singaporegp.sg/en/hospitality/sky-suite/"
  },
  {
    id: "green-room",
    name: "The Green Room",
    shortName: "THE GREEN ROOM",
    featured: false,
    order: "04",
    category: "turn3",
    categoryLabel: "TURN 3",
    location: "Turn 3",
    view: "Turn 3 / Republic Boulevard",
    experience: "Air-conditioned Suite & Outdoor Grandstand",
    tagline: "三號彎空調包廂與戶外看台",
    heroLead: "位於三號彎，提供全空調包廂及戶外專屬看台，觀看賽車駛入 Republic Boulevard。",
    image: "../../../assets/pic/singapore/singapore-hospitality-green-room-cover.jpg",
    viewingMode: "包廂與附設戶外專屬看台",
    nearby: "Turn 3 · Republic Boulevard",
    gallery: [
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-green-room-suite.webp",
        label: "空調包廂",
        alt: "The Green Room 空調包廂與用餐空間"
      },
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-green-room-grandstand.webp",
        label: "專屬戶外看台",
        alt: "The Green Room 專屬戶外看台與三號彎視野"
      }
    ],
    cardLead: "全空調 The Green Room 搭配戶外專屬看台；戶外座位依先到先得及現場容量安排。",
    description:
      "The Green Room 位於三號彎，可觀看賽車爭位後加速駛入 Republic Boulevard。設施包含全空調包廂及戶外專屬看台；戶外座位依先到先得及現場容量安排。",
    highlights: [
      "全空調 The Green Room",
      "戶外專屬看台（依現場容量）",
      "專屬 Suite Ambassador",
      "國際美食；香檳、葡萄酒、烈酒、啤酒與軟性飲料暢飲"
    ],
    officialUrl: "https://singaporegp.sg/en/hospitality/the-green-room/"
  },
  {
    id: "lounge-plus",
    name: "Lounge Plus",
    shortName: "LOUNGE PLUS",
    featured: false,
    order: "05",
    category: "turn3",
    categoryLabel: "TURN 3",
    location: "Turn 3",
    view: "Turn 3 Premier Grandstand",
    experience: "Lounge & Dedicated Grandstand Seat",
    tagline: "空調 Lounge 與 Turn 3 Premier Grandstand 專屬座位",
    heroLead: "Lounge 本身無直接賽道視野，觀賽座位設於 Turn 3 Premier Grandstand。",
    image: "../../../assets/pic/singapore/singapore-hospitality-turn-3-grandstand.jpg",
    viewingMode: "Lounge 無直接視野，移步 Premier Grandstand",
    nearby: "Turn 3 Premier Grandstand · 戶外平台",
    gallery: [
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-lounge-plus-suite.webp",
        label: "LOUNGE PLUS",
        alt: "Lounge Plus 空調休憩與餐飲空間"
      },
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-lounge-plus-grandstand.webp",
        label: "PREMIER GRANDSTAND",
        alt: "Lounge Plus 專屬 Turn 3 Premier Grandstand"
      }
    ],
    cardLead: "全空調 Lounge 提供賽事直播，並包含 Turn 3 Premier Grandstand 專屬座位。",
    description:
      "Lounge Plus 位於三號彎區域。官方明確說明 Lounge 本身沒有直接賽道視野，場內提供賽事直播；戶外平台可感受現場氣氛，實際觀賽則使用 Turn 3 Premier Grandstand 專屬座位。",
    highlights: [
      "Turn 3 Premier Grandstand 專屬座位",
      "全空調 Lounge 與賽事直播",
      "Lounge 內專用洗手間及戶外平台",
      "國際美食；香檳、葡萄酒、烈酒、啤酒與軟性飲料暢飲"
    ],
    officialUrl: "https://singaporegp.sg/en/hospitality/lounge-plus/"
  },
  {
    id: "drivers-right",
    name: "Driver's Right Lounge",
    shortName: "DRIVER'S RIGHT",
    featured: false,
    order: "06",
    category: "zone4",
    categoryLabel: "ZONE 4",
    location: "Esplanade – Theatres on the Bay, Level 4",
    view: "Turns 14–16 / Marina Bay",
    experience: "Indoor Lounge & Sheltered Patio",
    tagline: "14 至 16 號彎與濱海灣視野",
    heroLead: "位於 Esplanade 四樓，可選全空調室內 Lounge 或有遮蔽的戶外 Patio；Padang 主舞台約步行 10 分鐘。",
    image: "../../../assets/pic/singapore/singapore-hospitality-drivers-right-lounge-cover.jpg",
    viewingMode: "室內 Lounge 與有遮蔽的戶外 Patio",
    nearby: "Turns 14–16 · Padang Stage 約步行 10 分鐘",
    gallery: [
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-drivers-right-lounge-suite.webp",
        label: "室內 LOUNGE",
        alt: "Driver's Right Lounge 室內餐飲與休憩空間"
      },
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-drivers-right-lounge-terrace.webp",
        label: "露臺與賽道",
        alt: "Driver's Right Lounge 戶外露臺與 14 至 16 號彎視野"
      }
    ],
    cardLead: "Zone 4 的 Hospitality 設施，從 Esplanade 四樓觀看 14 至 16 號彎及濱海灣。",
    description:
      "Driver's Right Lounge 位於 Esplanade – Theatres on the Bay 四樓，是 Zone 4 的 Hospitality 設施。賓客可使用全空調室內 Lounge 或有遮蔽的戶外 Patio，觀看 14 至 16 號彎及濱海灣；官方標示步行至 Padang 主舞台約 10 分鐘。",
    highlights: [
      "位於 Esplanade – Theatres on the Bay 四樓",
      "全空調 Lounge 或有遮蔽的戶外 Patio",
      "觀看 14 至 16 號彎及濱海灣",
      "步行至 Padang 主舞台約 10 分鐘"
    ],
    officialUrl: "https://singaporegp.sg/en/hospitality/drivers-right-lounge/"
  },
  {
    id: "lounge-turn3",
    name: "Lounge @ Turn 3",
    shortName: "LOUNGE @ TURN 3",
    featured: false,
    order: "07",
    category: "turn3",
    categoryLabel: "TURN 3",
    location: "End of Turns 1–3",
    view: "Turn 3 Premier Grandstand",
    experience: "Lounge & Dedicated Grandstand Seat",
    tagline: "空調 Lounge 與 Turn 3 Premier Grandstand 專屬座位",
    heroLead: "Lounge 本身無直接賽道視野；場內提供賽事直播，觀賽座位位於數步外的專屬看台。",
    image: "../../../assets/pic/singapore/singapore-hospitality-turn-3-grandstand.jpg",
    viewingMode: "Lounge 無直接視野，數步可達專屬看台",
    nearby: "Turns 1–3 · Turn 3 Premier Grandstand",
    gallery: [
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-lounge-turn-3-suite.webp",
        label: "空調 LOUNGE",
        alt: "Lounge at Turn 3 空調休憩與餐飲空間"
      },
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-lounge-turn-3-grandstand.webp",
        label: "專屬看台",
        alt: "Lounge at Turn 3 專屬 Turn 3 Premier Grandstand"
      }
    ],
    cardLead: "全空調 Lounge 提供賽事直播，並包含 Turn 3 Premier Grandstand 專屬座位。",
    description:
      "Lounge @ Turn 3 位於第一組彎角末端。官方明確說明 Lounge 本身沒有直接賽道視野，場內提供賽事直播；觀賽使用數步外的 Turn 3 Premier Grandstand 專屬座位，可觀看一號彎至三號彎路段。",
    highlights: [
      "Turn 3 Premier Grandstand 專屬座位",
      "全空調 Lounge 與賽事直播",
      "Lounge 與看台的私人酒吧",
      "國際美食；葡萄酒、啤酒與軟性飲料暢飲"
    ],
    officialUrl: "https://singaporegp.sg/en/hospitality/lounge-at-turn-3/"
  },
  {
    id: "vista-suite",
    name: "Vista Suite",
    shortName: "VISTA SUITE",
    featured: false,
    order: "08",
    category: "flyer",
    categoryLabel: "SINGAPORE FLYER",
    location: "Singapore Flyer, Level 2",
    view: "Turns 17–18 / Pit Entry",
    experience: "Private Outdoor Viewing Balcony",
    tagline: "17、18 號彎與 Pit Entry 私人觀景陽台",
    heroLead: "位於 Singapore Flyer 二樓，私人戶外陽台面向 17、18 號彎與 Pit Entry。",
    image: "../../../assets/pic/singapore/singapore-hospitality-vista-suite-cover.jpg",
    viewingMode: "包廂附私人戶外觀景陽台",
    nearby: "Turns 17–18 · Pit Entry · Flyer Lifestyle Area",
    gallery: [
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-vista-suite-interior.webp",
        label: "VISTA SUITE",
        alt: "Vista Suite 室內包廂與用餐空間"
      },
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-vista-suite-balcony.webp",
        label: "私人觀景陽台",
        alt: "Vista Suite 私人觀景陽台與 Pit Entry 賽道視野"
      }
    ],
    cardLead: "私人戶外觀景陽台可觀看賽車煞入最後一彎或進入 Pit Entry。",
    description:
      "Vista Suite 位於 Singapore Flyer 二樓、17 與 18 號彎之間的 Pit Entry 區域。附設私人戶外觀景陽台，可觀看賽車煞入最後一彎或進入 Pit Lane；賓客亦可使用 Flyer Hospitality 專屬自由座看台與 Lifestyle Area。",
    highlights: [
      "私人戶外觀景陽台",
      "觀看 17、18 號彎與 Pit Entry",
      "Flyer Hospitality 專屬自由座看台及 Lifestyle Area",
      "國際美食；香檳、葡萄酒、烈酒、啤酒與軟性飲料暢飲"
    ],
    officialUrl: "https://singaporegp.sg/en/hospitality/vista-suite/"
  },
  {
    id: "sky-view-pavilion",
    name: "Sky View Pavilion",
    shortName: "SKY VIEW PAVILION",
    featured: false,
    order: "09",
    category: "flyer",
    categoryLabel: "SINGAPORE FLYER",
    location: "Singapore Flyer, Ground Floor",
    view: "Turns 17–18 / Final Turn / Pit Entry",
    experience: "Lounge & Trackside Grandstand",
    tagline: "空調 Lounge 與鄰近的賽道旁自由座看台",
    heroLead: "Lounge 本身無直接賽道視野；步行數步可抵達 Hospitality 專屬自由座看台及 Lifestyle Area。",
    image: "../../../assets/pic/singapore/singapore-hospitality-sky-view-suite-cover.jpg",
    viewingMode: "Lounge 無直接視野，數步可達 Flyer 專屬看台",
    nearby: "Pit Entry · Flyer Grandstand · Lifestyle Area",
    gallery: [
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-sky-view-suite-suite.webp",
        label: "空調 LOUNGE",
        alt: "Sky View Pavilion 空調休憩與餐飲空間"
      },
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-sky-view-suite-grandstand.webp",
        label: "FLYER 專屬看台",
        alt: "Sky View Pavilion 鄰近的 Flyer Hospitality 專屬看台"
      }
    ],
    cardLead: "位於 Singapore Flyer 地面層，Lounge 本身無直接賽道視野，鄰近專屬自由座看台。",
    description:
      "Sky View Pavilion 位於 Singapore Flyer 地面層、17 與 18 號彎之間。官方明確說明 Lounge 本身沒有直接賽道視野，場內提供賽事直播；步行數步可抵達 Hospitality 專屬自由座看台與 Lifestyle Area，觀看賽車煞入最後一彎或進入 Pit Lane。",
    highlights: [
      "鄰近 Flyer Hospitality 專屬自由座看台",
      "全空調 Lounge 與賽事直播",
      "Lifestyle Area 設有額外餐飲、雞尾酒吧、DJ 與互動活動",
      "國際美食；葡萄酒、啤酒與軟性飲料暢飲"
    ],
    officialUrl: "https://singaporegp.sg/en/hospitality/sky-view-pavilion/"
  },
  {
    id: "torque",
    name: "Torque",
    shortName: "TORQUE",
    featured: false,
    order: "10",
    category: "flyer",
    categoryLabel: "SINGAPORE FLYER",
    location: "Singapore Flyer, Ground Floor",
    view: "Turns 17–18 / Final Turn / Pit Entry",
    experience: "Lounge & Trackside Grandstand",
    tagline: "空調 Lounge 與鄰近的賽道旁自由座看台",
    heroLead: "Lounge 本身無直接賽道視野；步行數步可抵達 Hospitality 專屬自由座看台及 Lifestyle Area。",
    image: "../../../assets/pic/singapore/singapore-hospitality-torque-lounge-cover.jpg",
    viewingMode: "Lounge 無直接視野，數步可達 Flyer 專屬看台",
    nearby: "Pit Entry · Flyer Grandstand · Lifestyle Area",
    gallery: [
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-torque-lounge-suite.webp",
        label: "TORQUE LOUNGE",
        alt: "Torque 空調休憩與餐飲空間"
      },
      {
        src: "../../../assets/pic/singapore/singapore-hospitality-torque-lounge-grandstand.webp",
        label: "FLYER 專屬看台",
        alt: "Torque 鄰近的 Flyer Hospitality 專屬看台"
      }
    ],
    cardLead: "位於 Singapore Flyer 地面層，Lounge 本身無直接賽道視野，鄰近專屬自由座看台。",
    description:
      "Torque 位於 Singapore Flyer 觀景輪地面層。官方明確說明 Lounge 本身沒有直接賽道視野，場內提供賽事直播；步行數步可抵達 Hospitality 專屬自由座看台與 Lifestyle Area，觀看賽車煞入最後一彎或進入 Pit Lane。",
    highlights: [
      "鄰近 Flyer Hospitality 專屬自由座看台",
      "全空調 Lounge 與賽事直播",
      "Lifestyle Area 設有額外餐飲、雞尾酒吧、DJ 與互動活動",
      "國際美食；葡萄酒、啤酒與軟性飲料暢飲"
    ],
    officialUrl: "https://singaporegp.sg/en/hospitality/torque/"
  }
];

export const HOSPITALITY_AREAS = [
  {
    id: "pit",
    order: "01",
    name: "主直線與維修區",
    track: "PIT BUILDING / PIT STRAIGHT",
    relation: "同區方案：Paddock Club™、Sky Suite",
    description:
      "從 Pit Building、Pit Exit 延伸至 Pit Straight。這一區的重點是維修區、主直線與屋頂觀景空間。"
  },
  {
    id: "turn3",
    order: "02",
    name: "一至三號彎",
    track: "TURNS 1–3",
    relation: "同區方案：The Green Room、Lounge Plus、Lounge @ Turn 3",
    description:
      "三個方案都在第一組彎角周邊；差別在於包廂是否能直接看見賽道，以及使用附設看台或 Premier Grandstand。"
  },
  {
    id: "zone4",
    order: "03",
    name: "濱海藝術中心與主舞台",
    track: "TURNS 14–16 / ZONE 4",
    relation: "Driver's Right Lounge 位於 Esplanade 四樓",
    description:
      "從高處觀看 14 至 16 號彎與濱海灣，官方標示步行至 Zone 4 Padang 主舞台約 10 分鐘。"
  },
  {
    id: "flyer",
    order: "04",
    name: "新加坡摩天觀景輪",
    track: "TURNS 17–18 / PIT ENTRY",
    relation: "同區方案：Vista Suite、Sky View Pavilion、Torque",
    description:
      "三個方案都在 Singapore Flyer：Vista Suite 位於二樓；Sky View Pavilion 與 Torque 位於地面層並共用鄰近的 Flyer Hospitality 看台與 Lifestyle Area。"
  },
  {
    id: "final",
    order: "05",
    name: "最後一彎與終點",
    track: "FINAL TURN / FINISH LINE",
    relation: "TWENTY3 位於賽道最後一彎",
    description:
      "以最後一彎、終點線、頒獎台與濱海灣視野為主，餐廳、Podium Terrace 與 Apex Lounge 分布在同一設施內。"
  }
];

export const CATEGORY_FILTERS = [
  { id: "all", label: "全部方案" },
  { id: "pit", label: "主直線／維修區" },
  { id: "final", label: "終點區" },
  { id: "turn3", label: "一至三號彎" },
  { id: "flyer", label: "Singapore Flyer" },
  { id: "zone4", label: "Zone 4" }
];
