/**
 * mapUrl：賽事地圖網址，留空時不顯示「查看地圖」。
 * itineraryUrl：旅遊行程網址，留空時不顯示「查看行程」。
 * hospitality：包廂入口資料；未提供時不顯示包廂模組，也不保留空位。
 */
export const RACE_DATA = [
  {
    id: "australia",
    titleZh: "澳洲大獎賽",
    titleEn: "AUSTRALIAN GRAND PRIX",
    heroTitle: "AUSTRALIA",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.03.06 - 03.08",
    cardDate: "03.06 - 03.08",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "https://www.tristar.com.tw/grouptour/Detail/index/293",
    description:
      "澳洲大獎賽於墨爾本阿爾伯特公園賽道舉行，半市街布局穿梭湖畔與綠地，高速彎、急煞區及貼牆路段考驗車手膽識，也讓開幕戰充滿超車與意外變數。",
    assets: {
      heroDesktop: "assets/australia-hero-pc.jpg",
      heroMobile: "assets/australia-hero-mobile.jpg",
      trackSvg: "assets/track-australia.svg"
    }
  },
  {
    id: "china",
    titleZh: "中國大獎賽",
    titleEn: "CHINESE GRAND PRIX",
    heroTitle: "CHINA",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.03.13 - 03.15",
    cardDate: "03.13 - 03.15",
    isPopular: true,
    mapUrl: "",
    itineraryUrl: "https://www.tristar.com.tw/grouptour/Detail/index/50",
    description:
      "中國大獎賽於上海國際賽車場舉行，獨特的「上」字形布局包含螺旋長彎、技術型彎角與超長直線，兼顧高速超車與輪胎消耗，策略選擇往往左右勝負。",
    assets: {
      heroDesktop: "assets/china-hero-pc.jpg",
      heroMobile: "assets/china-hero-mobile.jpg",
      trackSvg: "assets/track-china.svg"
    }
  },
  {
    id: "japan",
    titleZh: "日本大獎賽",
    titleEn: "JAPANESE GRAND PRIX",
    heroTitle: "JAPAN",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.03.27 - 03.29",
    cardDate: "03.27 - 03.29",
    isPopular: true,
    mapUrl: "",
    itineraryUrl: "https://www.tristar.com.tw/grouptour/Detail/index/104",
    description:
      "日本大獎賽於鈴鹿賽道舉行，全球少見的8字形布局串連高速S彎、Degner彎與130R，連續變向極度考驗節奏與精準度，熱情車迷更造就獨特氣氛。",
    assets: {
      heroDesktop: "assets/japan-hero-pc.jpg",
      heroMobile: "assets/japan-hero-mobile.jpg",
      trackSvg: "assets/track-japan.svg"
    }
  },
  {
    id: "miami",
    titleZh: "邁阿密大獎賽",
    titleEn: "MIAMI GRAND PRIX",
    heroTitle: "MIAMI",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.05.01 - 05.03",
    cardDate: "05.01 - 05.03",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "邁阿密大獎賽繞行硬石體育場周邊，賽道結合長直線、高速彎與狹窄技術路段，提供多處攻防機會；棕櫚樹、派對活動與美式娛樂則營造鮮明度假氛圍。",
    assets: {
      heroDesktop: "assets/miami-hero-pc.jpg",
      heroMobile: "assets/miami-hero-mobile.jpg",
      trackSvg: "assets/track-miami.svg"
    }
  },
  {
    id: "canada",
    titleZh: "加拿大大獎賽",
    titleEn: "CANADIAN GRAND PRIX",
    heroTitle: "CANADA",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.05.22 - 05.24",
    cardDate: "05.22 - 05.24",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "加拿大大獎賽於蒙特婁吉爾・維倫紐夫賽道舉行，快速直線接續低速彎與重煞車區，車手頻繁攻擊路肩；終點前著名的冠軍之牆，更常成為賽果轉折點。",
    assets: {
      heroDesktop: "assets/canada-hero-pc.jpg",
      heroMobile: "assets/canada-hero-mobile.jpg",
      trackSvg: "assets/track-canada.svg"
    }
  },
  {
    id: "monaco",
    titleZh: "摩納哥大獎賽",
    titleEn: "MONACO GRAND PRIX",
    heroTitle: "MONACO",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.06.05 - 06.07",
    cardDate: "06.05 - 06.07",
    isPopular: true,
    mapUrl: "",
    itineraryUrl: "https://www.tristar.com.tw/grouptour/Detail/index/536",
    description:
      "摩納哥大獎賽穿梭蒙地卡羅街區與港灣，髮夾彎、隧道及貼牆路段幾乎不容失誤。超車雖然困難，排位賽與進站策略卻格外關鍵，也是F1最具傳奇色彩的舞台。",
    assets: {
      heroDesktop: "assets/monaco-hero-pc.jpg",
      heroMobile: "assets/monaco-hero-mobile.jpg",
      trackSvg: "assets/track-monaco.svg"
    }
  },
  {
    id: "barcelona-catalunya",
    titleZh: "巴塞隆納加泰隆尼亞大獎賽",
    titleEn: "BARCELONA-CATALUNYA GRAND PRIX",
    heroTitle: "BARCELONA CATALUNYA",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.06.12 - 06.14",
    cardDate: "06.12 - 06.14",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "巴塞隆納－加泰隆尼亞大獎賽集高速長彎、重煞車區與技術型路段於一體，賽道特性全面，特別考驗空力效率、輪胎管理與車輛平衡，也常成為各隊升級成效的試金石。",
    assets: {
      heroDesktop: "assets/barcelona-hero-pc.jpg",
      heroMobile: "assets/barcelona-hero-mobile.jpg",
      trackSvg: "assets/track-barcelona.svg"
    }
  },
  {
    id: "austria",
    titleZh: "奧地利大獎賽",
    titleEn: "AUSTRIAN GRAND PRIX",
    heroTitle: "AUSTRIA",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.06.26 - 06.28",
    cardDate: "06.26 - 06.28",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "奧地利大獎賽於施皮爾堡紅牛賽道舉行，群山環繞的短賽道高低起伏鮮明，連續上坡直線與重煞車彎提供近身攻防，單圈差距小也讓排位與進站時機更加關鍵。",
    assets: {
      heroDesktop: "assets/austria-hero-pc.jpg",
      heroMobile: "assets/austria-hero-mobile.jpg",
      trackSvg: "assets/track-austria.svg"
    }
  },
  {
    id: "britain",
    titleZh: "英國大獎賽",
    titleEn: "BRITISH GRAND PRIX",
    heroTitle: "GREAT BRITAIN",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.07.03 - 07.05",
    cardDate: "07.03 - 07.05",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "英國大獎賽於歷史悠久的銀石賽道舉行，Maggots、Becketts與Chapel高速連續彎展現賽車極限下壓力，開放地形帶來的強風與多變天候也增添策略難度。",
    assets: {
      heroDesktop: "assets/britain-hero-pc.jpg",
      heroMobile: "assets/britain-hero-mobile.jpg",
      trackSvg: "assets/track-britain.svg"
    }
  },
  {
    id: "belgique",
    titleZh: "比利時大獎賽",
    titleEn: "BELGIQUE GRAND PRIX",
    heroTitle: "BELGIQUE",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.07.17 - 07.19",
    cardDate: "07.17 - 07.19",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "比利時大獎賽於斯帕－弗朗科爾尚賽道舉行，長單圈穿越森林與大幅高低落差，Eau Rouge等高速彎極具挑戰，山區瞬息萬變的天候更可能打亂全場策略。",
    assets: {
      heroDesktop: "assets/belgique-hero-pc.jpg",
      heroMobile: "assets/belgique-hero-mobile.jpg",
      trackSvg: "assets/track-belgique.svg"
    }
  },
  {
    id: "hungary",
    titleZh: "匈牙利大獎賽",
    titleEn: "HUNGARIAN GRAND PRIX",
    heroTitle: "HUNGARY",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.07.24 - 07.26",
    cardDate: "07.24 - 07.26",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "https://www.tristar.com.tw/grouptour/Detail/index/537",
    description:
      "匈牙利大獎賽於布達佩斯近郊的匈牙利賽道舉行，緊湊連續彎如同無牆街道賽，講求高下壓力與穩定節奏；炎熱天候及有限超車點，使排位與輪胎策略格外重要。",
    assets: {
      heroDesktop: "assets/hungary-hero-pc.jpg",
      heroMobile: "assets/hungary-hero-mobile.jpg",
      trackSvg: "assets/track-hungary.svg"
    }
  },
  {
    id: "netherlands",
    titleZh: "荷蘭大獎賽",
    titleEn: "DUTCH GRAND PRIX",
    heroTitle: "NETHERLANDS",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.08.21 - 08.23",
    cardDate: "08.21 - 08.23",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "荷蘭大獎賽於北海沙丘間的贊德沃特賽道舉行，狹窄起伏的布局搭配高速傾斜彎，要求車手維持流暢節奏與精準走線；橘色人海與熱烈看台更形成標誌性景象。",
    assets: {
      heroDesktop: "assets/netherlands-hero-pc.jpg",
      heroMobile: "assets/netherlands-hero-mobile.jpg",
      trackSvg: "assets/track-netherlands.svg"
    }
  },
  {
    id: "italy",
    titleZh: "義大利大獎賽",
    titleEn: "ITALIAN GRAND PRIX",
    heroTitle: "ITALY",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.09.04 - 09.06",
    cardDate: "09.04 - 09.06",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "https://www.tristar.com.tw/grouptour/Detail/index/370",
    description:
      "義大利大獎賽於蒙札賽道舉行，超長直線、急減速彎與極低下壓力設定造就驚人尾速，車手需在高速穩定與煞車效率間取得平衡；法拉利主場的紅色浪潮更令人難忘。",
    assets: {
      heroDesktop: "assets/italy-hero-pc.jpg",
      heroMobile: "assets/italy-hero-mobile.jpg",
      trackSvg: "assets/track-italy.svg"
    }
  },
  {
    id: "spain",
    titleZh: "西班牙大獎賽",
    titleEn: "SPANISH GRAND PRIX",
    heroTitle: "SPAIN",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.09.11 - 09.13",
    cardDate: "09.11 - 09.13",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "https://www.tristar.com.tw/grouptour/Detail/index/294",
    description:
      "西班牙大獎賽移師馬德里全新賽道，融合城市道路與專用賽道路段，配置包含高速彎、長直線及大幅度傾斜彎。嶄新場地與未知設定，讓它成為2026賽季焦點。",
    assets: {
      heroDesktop: "assets/spain-hero-pc.jpg",
      heroMobile: "assets/spain-hero-mobile.jpg",
      trackSvg: "assets/track-spain.svg"
    }
  },
  {
    id: "azerbaijan",
    titleZh: "亞塞拜然大獎賽",
    titleEn: "AZERBAIJAN GRAND PRIX",
    heroTitle: "AZERBAIJAN",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.09.24 - 09.26",
    cardDate: "09.24 - 09.26",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "亞塞拜然大獎賽穿梭巴庫古城與濱海大道，城堡旁的極窄彎道與超長主直線形成強烈反差，既考驗低速精準度也追求極致尾速；安全車與突發事故常讓賽局翻轉。",
    assets: {
      heroDesktop: "assets/azerbaijan-hero-pc.jpg",
      heroMobile: "assets/azerbaijan-hero-mobile.jpg",
      trackSvg: "assets/track-azerbaijan.svg"
    }
  },
  {
    id: "singapore",
    titleZh: "新加坡大獎賽",
    titleEn: "SINGAPORE GRAND PRIX",
    heroTitle: "SINGAPORE",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.10.09 - 10.11",
    cardDate: "10.09 - 10.11",
    isPopular: true,
    mapUrl: "https://www.tristar.com.tw/active/up/image/files/seat-map/index.html",
    itineraryUrl: "https://www.tristar.com.tw/grouptour/Detail/index/291",
    hospitality: {
      eyebrow: "SINGAPORE HOSPITALITY",
      title: "尊榮包廂體驗",
      description: "專屬VIP包廂視野、精緻餐飲與舒適空間，感受新加坡夜大獎賽。",
      ctaLabel: "探索方案",
      url: "https://www.tristar.com.tw/active/up/image/files/seat-map/index.html",
      image: "assets/vip/Singapore_Paddock-Club.jpg",
      imageAlt: "新加坡大獎賽夜間包廂觀賽視野"
    },
    description:
      "新加坡大獎賽於燈火璀璨的濱海灣市街賽道舉行，車手需在高溫高濕、顛簸路面與貼牆彎道中長時間作戰。夜景、演唱會及城市娛樂，構成F1代表性夜間盛會。",
    assets: {
      heroDesktop: "assets/singapore-hero-pc.jpg",
      heroMobile: "assets/singapore-hero-mobile.jpg",
      trackSvg: "assets/track-singapore.svg"
    }
  },
  {
    id: "united-states",
    titleZh: "美國大獎賽",
    titleEn: "UNITED STATES GRAND PRIX",
    heroTitle: "UNITED STATES",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.10.23 - 10.25",
    cardDate: "10.23 - 10.25",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "https://www.tristar.com.tw/grouptour/Detail/index/288",
    description:
      "美國大獎賽於奧斯汀美洲賽道舉行，陡峭上坡後的第一彎極具辨識度，接續高速連續彎、長直線與慢速技術區，創造多種攻防路線；現場音樂也展現濃厚德州風情。",
    assets: {
      heroDesktop: "assets/united-states-hero-pc.jpg",
      heroMobile: "assets/united-states-hero-mobile.jpg",
      trackSvg: "assets/track-united-states.svg"
    }
  },
  {
    id: "mexico",
    titleZh: "墨西哥城大獎賽",
    titleEn: "MEXICO GRAND PRIX",
    heroTitle: "MEXICO",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.10.30 - 11.01",
    cardDate: "10.30 - 11.01",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "墨西哥城大獎賽於羅德里格斯兄弟賽道舉行，超過兩千公尺的高海拔使空氣稀薄，為動力、散熱與下壓力帶來獨特難題；賽車穿越體育場區時，震撼歡呼成為最大亮點。",
    assets: {
      heroDesktop: "assets/mexico-states-pc.jpg",
      heroMobile: "assets/mexico-states-mobile.jpg",
      trackSvg: "assets/track-mexico.svg"
    }
  },
  {
    id: "brazil",
    titleZh: "巴西大獎賽",
    titleEn: "BRAZIL GRAND PRIX",
    heroTitle: "BRAZIL",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.11.06 - 11.08",
    cardDate: "11.06 - 11.08",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "巴西聖保羅大獎賽於英特拉格斯賽道舉行，短而起伏的逆時針布局結合高速彎、長上坡與技術路段，對體能與節奏要求極高；突如其來的降雨經常造就逆轉名場面。",
    assets: {
      heroDesktop: "assets/brazil-hero-pc.jpg",
      heroMobile: "assets/brazil-hero-mobile.jpg",
      trackSvg: "assets/track-brazil.svg"
    }
  },
  {
    id: "las-vegas",
    titleZh: "拉斯維加斯大獎賽",
    titleEn: "LAS VEGAS GRAND PRIX",
    heroTitle: "LAS VEGAS",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.11.19 - 11.21",
    cardDate: "11.19 - 11.21",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "拉斯維加斯大獎賽在夜間穿越霓虹閃耀的拉斯維加斯大道，超長直線讓賽車以極速掠過地標飯店；沙漠夜晚的低溫路面則增加暖胎難度，速度、娛樂與城市景觀一次匯聚。",
    assets: {
      heroDesktop: "assets/las-vegas-hero-pc.jpg",
      heroMobile: "assets/las-vegas-hero-mobile.jpg",
      trackSvg: "assets/track-las-vegas.svg"
    }
  },
  {
    id: "qatar",
    titleZh: "卡達大獎賽",
    titleEn: "QATAR GRAND PRIX",
    heroTitle: "QATAR",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.11.27 - 11.29",
    cardDate: "11.27 - 11.29",
    isPopular: false,
    mapUrl: "",
    itineraryUrl: "",
    description:
      "卡達大獎賽於路薩爾國際賽道舉行，流暢高速彎與較少重煞車區讓比賽節奏極快，長時間橫向負荷嚴苛考驗輪胎與車手體能；夜間燈光則為沙漠賽道增添鮮明氛圍。",
    assets: {
      heroDesktop: "assets/qatar-hero-pc.jpg",
      heroMobile: "assets/qatar-hero-mobile.jpg",
      trackSvg: "assets/track-qatar.svg"
    }
  },
  {
    id: "abudhabi",
    titleZh: "阿布達比大獎賽",
    titleEn: "ABU DHABI GRAND PRIX",
    heroTitle: "ABU DHABI",
    heroSubtitle: "GRAND PRIX",
    dateText: "2026.12.04 - 12.06",
    cardDate: "12.04 - 12.06",
    isPopular: true,
    mapUrl: "",
    itineraryUrl: "https://www.tristar.com.tw/grouptour/Detail/index/316",
    description:
      "阿布達比大獎賽於亞斯碼頭賽道舉行，比賽從夕陽一路駛入夜色，長直線與重煞車區創造關鍵超車機會；環繞碼頭與飯店的華麗景觀，也為全年賽季帶來盛大收尾。",
    assets: {
      heroDesktop: "assets/abudhabi-hero-pc.jpg",
      heroMobile: "assets/abudhabi-hero-mobile.jpg",
      trackSvg: "assets/track-abudhabi.svg"
    }
  }
];
