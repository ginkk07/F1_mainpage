function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createLikeIcon() {
  return `
    <svg class="race-card__like" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M8.8 20.5H5.2c-.8 0-1.5-.7-1.5-1.5v-8.2c0-.8.7-1.5 1.5-1.5h3.6v11.2Zm2.2 0V9.1l2.2-5.2c.2-.5.8-.8 1.4-.6 1.4.4 2.2 1.8 1.9 3.2l-.5 2.3h3c1.6 0 2.8 1.4 2.5 3l-1.1 6.3c-.2 1.4-1.4 2.4-2.8 2.4H11Z"/>
    </svg>
  `;
}

function createRaceCard(race, isActive) {
  const card = document.createElement("button");

  card.type = "button";
  card.className = `race-card${isActive ? " is-active" : ""}`;
  card.dataset.raceId = race.id;
  card.setAttribute("aria-pressed", String(isActive));

  /**
   * PC 與 Mobile 使用同一份資料，但 CSS 會分開控制資訊顯示：
   * PC：顯示中文 / 英文 / 熱門圖示，隱藏日期。
   * Mobile：顯示中文 / 英文 / 日期，隱藏熱門圖示。
   */
  card.innerHTML = `
    <span class="race-card__mark" aria-hidden="true"></span>

    <span class="race-card__content">
      <span class="race-card__title-row">
        <span class="race-card__title">${escapeHTML(race.titleZh)}</span>
        <span class="race-card__en">${escapeHTML(race.titleEn)}</span>
      </span>

      <span class="race-card__popular" aria-label="熱門行程">
        ${race.isPopular ? createLikeIcon() : ""}
      </span>

      <span class="race-card__date">${escapeHTML(race.cardDate)}</span>
    </span>
  `;

  return card;
}

export function initRaceSelect({ root, races, onSelect }) {
  if (!root || !Array.isArray(races) || races.length === 0) {
    return null;
  }

  const list = root.querySelector("[data-race-list]");
  const scroller = root.querySelector("[data-race-scroller]");
  const mobileMedia = window.matchMedia("(max-width: 768px)");
  const reduceMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!list) {
    return null;
  }

  // 熱門行程優先，同一優先級內仍維持 race-data.js 原本的順序。
  const orderedRaces = races
    .map((race, index) => ({ race, index }))
    .sort((a, b) => {
      const popularPriority = Number(Boolean(b.race.isPopular)) - Number(Boolean(a.race.isPopular));
      return popularPriority || a.index - b.index;
    })
    .map(({ race }) => race);

  const state = {
    activeRaceId: orderedRaces[0].id
  };

  function closeMobileSelect() {
    if (!mobileMedia.matches) {
      return;
    }

    // Mobile 的關閉狀態就是頁面最頂端，不需要另外計算元素位置。
    window.scrollTo({
      top: 0,
      behavior: reduceMotionMedia.matches ? "auto" : "smooth"
    });
  }

  /**
   * 依 race-data.js 渲染賽事卡片。
   * 之後新增賽事只需要改 race-data.js，不需要手動改 HTML。
   */
  function render() {
    const fragment = document.createDocumentFragment();

    orderedRaces.forEach((race) => {
      const isActive = race.id === state.activeRaceId;
      fragment.append(createRaceCard(race, isActive));
    });

    list.replaceChildren(fragment);
  }

  /**
   * 切換目前選取賽事。
   * 只更新卡片 active 狀態，並通知 Hero 模組同步切換內容。
   */
  function setActive(raceId) {
    const selectedRace = races.find((race) => race.id === raceId);

    if (!selectedRace || selectedRace.id === state.activeRaceId) {
      return;
    }

    state.activeRaceId = selectedRace.id;

    list.querySelectorAll(".race-card").forEach((card) => {
      const isActive = card.dataset.raceId === selectedRace.id;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-pressed", String(isActive));
    });

    onSelect?.(selectedRace);
    closeMobileSelect();
  }

  /**
   * 點擊卡片後切換 active。
   */
  function handleClick(event) {
    const card = event.target.closest(".race-card");

    if (!card) {
      return;
    }

    setActive(card.dataset.raceId);
  }

  /**
   * 桌機版將滑鼠滾輪的垂直滾動轉成水平滾動。
   * Mobile 不啟用，避免和手指滑動互相干擾。
   */
  function handleWheel(event) {
    if (!scroller || window.innerWidth <= 768) {
      return;
    }

    const canScroll = scroller.scrollWidth > scroller.clientWidth;
    const isVerticalWheel = Math.abs(event.deltaY) > Math.abs(event.deltaX);

    if (!canScroll || !isVerticalWheel) {
      return;
    }

    event.preventDefault();
    scroller.scrollLeft += event.deltaY;
  }

  render();

  // 排序後的第一張卡片也是初始賽事，讓 Hero 與列表的顯示順序一致。
  if (orderedRaces[0].id !== races[0].id) {
    onSelect?.(orderedRaces[0]);
  }

  list.addEventListener("click", handleClick);
  scroller?.addEventListener("wheel", handleWheel, { passive: false });

  return {
    setActive,

    /**
     * 移除事件監聽，避免頁面重複初始化時產生多次觸發。
     */
    destroy() {
      list.removeEventListener("click", handleClick);
      scroller?.removeEventListener("wheel", handleWheel);
    }
  };
}
