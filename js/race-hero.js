const DESKTOP_MOTION = {
  enterDuration: 900,
  switchDuration: 760,
  contentSwapDelay: 300
};

const MOBILE_MOTION = {
  enterDuration: 900,
  switchDuration: 760,
  contentSwapDelay: 300
};

const IMAGE_LOAD_TIMEOUT = 2500;

export function initRaceHero({ root, races }) {
  if (!root || !Array.isArray(races) || races.length === 0) {
    return null;
  }

  const pointerArea = root.closest(".race-page") ?? root;
  const els = {
    date: root.querySelector("[data-race-date]"),
    title: root.querySelector("[data-race-title]"),
    subtitle: root.querySelector("[data-race-subtitle]"),
    desc: root.querySelector("[data-race-desc]"),
    track: root.querySelector("[data-race-track]"),
    mapButton: root.querySelector("[data-race-map-button]"),
    itineraryButton: root.querySelector("[data-race-itinerary-button]"),
    bgCurrent: root.querySelector("[data-race-bg-current]"),
    bgNext: root.querySelector("[data-race-bg-next]")
  };

  const reduceMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopMedia = window.matchMedia("(min-width: 769px)");

  const state = {
    activeRace: races[0],
    transitionRace: null,
    queuedRaceId: null,
    isMounted: false,
    isEntering: false,
    isSwitching: false,
    destroyed: false,
    allowPointerTilt: window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    contentTimer: 0,
    finishTimer: 0,
    entryTimer: 0,
    entryRaf1: 0,
    entryRaf2: 0
  };

  function resolveAssetUrl(assetPath) {
    try {
      return new URL(assetPath, window.location.href).toString();
    } catch (error) {
      return assetPath;
    }
  }

  function normalizeLink(value) {
    return typeof value === "string" ? value.trim() : "";
  }

  function canAnimateBackground() {
    return Boolean(
      els.bgCurrent &&
      els.bgNext &&
      !reduceMotionMedia.matches
    );
  }

  function getMotionTimings() {
    return desktopMedia.matches ? DESKTOP_MOTION : MOBILE_MOTION;
  }

  function getVisibleBackground(race) {
    const assetPath = desktopMedia.matches
      ? race.assets.heroDesktop
      : race.assets.heroMobile;

    return resolveAssetUrl(assetPath);
  }

  function setLayerBackground(layer, race) {
    if (!layer) return;

    const desktopUrl = resolveAssetUrl(race.assets.heroDesktop);
    const mobileUrl = resolveAssetUrl(race.assets.heroMobile);

    layer.style.setProperty("--layer-bg-desktop", `url("${desktopUrl}")`);
    layer.style.setProperty("--layer-bg-mobile", `url("${mobileUrl}")`);
  }

  function clearLayerBackground(layer) {
    if (!layer) return;

    layer.style.removeProperty("--layer-bg-desktop");
    layer.style.removeProperty("--layer-bg-mobile");
  }

  function updateActionLink(button, link) {
    if (!button) return;

    const hasLink = Boolean(link);
    button.hidden = !hasLink;

    if (hasLink) {
      button.href = link;
      button.removeAttribute("aria-disabled");
      button.removeAttribute("tabindex");
    } else {
      button.href = "#";
      button.setAttribute("aria-disabled", "true");
      button.setAttribute("tabindex", "-1");
    }
  }

  function renderRaceContent(race) {
    if (els.date) els.date.textContent = race.dateText;
    if (els.title) els.title.textContent = race.heroTitle;
    if (els.subtitle) els.subtitle.textContent = race.heroSubtitle;
    if (els.desc) els.desc.textContent = race.description;
    if (els.track) els.track.src = race.assets.trackSvg;

    updateActionLink(els.mapButton, normalizeLink(race.mapUrl));
    updateActionLink(els.itineraryButton, normalizeLink(race.itineraryUrl));
  }

  function applyRaceImmediately(race) {
    state.activeRace = race;
    state.transitionRace = null;

    renderRaceContent(race);
    setLayerBackground(els.bgCurrent, race);
    clearLayerBackground(els.bgNext);

    // 保留舊版單層背景變數，避免 HTML 尚未更新時沒有背景。
    root.style.setProperty(
      "--hero-bg-desktop",
      `url("${resolveAssetUrl(race.assets.heroDesktop)}")`
    );
    root.style.setProperty(
      "--hero-bg-mobile",
      `url("${resolveAssetUrl(race.assets.heroMobile)}")`
    );
  }

  function preloadBackground(race) {
    const imageUrl = getVisibleBackground(race);

    return new Promise((resolve) => {
      const image = new window.Image();
      let settled = false;

      const finish = () => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeoutId);
        resolve();
      };

      const timeoutId = window.setTimeout(finish, IMAGE_LOAD_TIMEOUT);

      image.addEventListener("load", finish, { once: true });
      image.addEventListener("error", finish, { once: true });
      image.src = imageUrl;

      if (image.complete) {
        finish();
      }
    });
  }

  function runQueuedUpdate() {
    const queuedRaceId = state.queuedRaceId;
    state.queuedRaceId = null;

    if (queuedRaceId && queuedRaceId !== state.activeRace.id) {
      update(queuedRaceId);
    }
  }

  function finishInitialEntrance() {
    window.clearTimeout(state.entryTimer);
    state.entryTimer = 0;
    state.isEntering = false;

    root.classList.remove("is-bg-preparing", "is-bg-entering");
    runQueuedUpdate();
  }

  async function startInitialEntrance() {
    const entranceRace = state.activeRace;
    await preloadBackground(entranceRace);

    if (state.destroyed) return;

    // 初始化期間若 Race Select 改了預設賽事，重新等待最新背景。
    if (entranceRace.id !== state.activeRace.id) {
      startInitialEntrance();
      return;
    }

    state.isMounted = true;

    if (!canAnimateBackground()) {
      root.classList.remove("is-bg-preparing");
      return;
    }

    state.isEntering = true;
    root.classList.add("is-bg-entering");
    const { enterDuration } = getMotionTimings();

    state.entryTimer = window.setTimeout(
      finishInitialEntrance,
      enterDuration
    );
  }

  function finishBackgroundSwitch() {
    if (!state.isSwitching || !state.transitionRace) return;

    const nextRace = state.transitionRace;

    window.clearTimeout(state.contentTimer);
    window.clearTimeout(state.finishTimer);
    state.contentTimer = 0;
    state.finishTimer = 0;

    // 保證動畫提早結束時，內容仍會正確更新。
    if (state.activeRace.id !== nextRace.id) {
      renderRaceContent(nextRace);
      state.activeRace = nextRace;
    }

    setLayerBackground(els.bgCurrent, nextRace);
    root.style.setProperty(
      "--hero-bg-desktop",
      `url("${resolveAssetUrl(nextRace.assets.heroDesktop)}")`
    );
    root.style.setProperty(
      "--hero-bg-mobile",
      `url("${resolveAssetUrl(nextRace.assets.heroMobile)}")`
    );

    root.classList.remove("is-bg-switching", "is-content-switching");
    clearLayerBackground(els.bgNext);

    state.transitionRace = null;
    state.isSwitching = false;
    runQueuedUpdate();
  }

  async function startBackgroundSwitch(nextRace) {
    state.isSwitching = true;
    state.transitionRace = nextRace;

    await preloadBackground(nextRace);

    if (state.destroyed) return;

    // 載入期間可能因旋轉螢幕或切換減少動態效果而提前完成過場。
    if (!state.isSwitching || state.transitionRace?.id !== nextRace.id) {
      return;
    }

    // 圖片尚在載入時若又選了別場，直接改播最後選取的賽事。
    if (state.queuedRaceId && state.queuedRaceId !== nextRace.id) {
      const latestRaceId = state.queuedRaceId;
      state.queuedRaceId = null;
      state.transitionRace = null;
      state.isSwitching = false;
      update(latestRaceId);
      return;
    }

    if (!canAnimateBackground()) {
      state.isSwitching = false;
      applyRaceImmediately(nextRace);
      runQueuedUpdate();
      return;
    }

    setLayerBackground(els.bgNext, nextRace);

    // 讓瀏覽器先套用新背景，再加 class，確保動畫每次都能重新播放。
    void els.bgNext.offsetWidth;
    root.classList.add("is-bg-switching", "is-content-switching");

    const { switchDuration, contentSwapDelay } = getMotionTimings();

    state.contentTimer = window.setTimeout(() => {
      renderRaceContent(nextRace);
      state.activeRace = nextRace;
    }, contentSwapDelay);

    state.finishTimer = window.setTimeout(
      finishBackgroundSwitch,
      switchDuration
    );
  }

  function update(raceId) {
    const nextRace = races.find((race) => race.id === raceId) || races[0];

    if (!state.isMounted) {
      applyRaceImmediately(nextRace);
      return;
    }

    if (nextRace.id === state.activeRace.id && !state.isSwitching) {
      return;
    }

    if (!canAnimateBackground()) {
      applyRaceImmediately(nextRace);
      return;
    }

    if (state.isEntering || state.isSwitching) {
      state.queuedRaceId = nextRace.id;
      return;
    }

    startBackgroundSwitch(nextRace);
  }

  function handlePointerMove(event) {
    if (!state.allowPointerTilt || reduceMotionMedia.matches) return;

    const rect = root.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    root.style.setProperty("--track-tilt-x", `${x * 8}deg`);
    root.style.setProperty("--track-tilt-y", `${y * -6}deg`);
  }

  function resetPointerTilt() {
    root.style.setProperty("--track-tilt-x", "0deg");
    root.style.setProperty("--track-tilt-y", "0deg");
  }

  function handleActionButtonClick(event) {
    if (event.currentTarget.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
    }
  }

  function handleMotionPreferenceChange() {
    if (reduceMotionMedia.matches) {
      finishInitialEntrance();
      finishBackgroundSwitch();
    }
  }

  function handleViewportModeChange() {
    // 手機旋轉或跨過 768px 時，先完成正在播放的過場，避免殘留半透明圖層。
    if (state.isEntering) {
      finishInitialEntrance();
    }

    if (state.isSwitching) {
      finishBackgroundSwitch();
    }
  }

  function addMediaChangeListener(mediaQuery, listener) {
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", listener);
      return;
    }

    mediaQuery.addListener?.(listener);
  }

  function removeMediaChangeListener(mediaQuery, listener) {
    if (typeof mediaQuery.removeEventListener === "function") {
      mediaQuery.removeEventListener("change", listener);
      return;
    }

    mediaQuery.removeListener?.(listener);
  }

  applyRaceImmediately(state.activeRace);

  if (canAnimateBackground()) {
    root.classList.add("is-bg-preparing");
  }

  // 等 Race Select 完成同步初始化，避免先播澳洲、再立刻切到熱門第一站。
  state.entryRaf1 = window.requestAnimationFrame(() => {
    state.entryRaf2 = window.requestAnimationFrame(startInitialEntrance);
  });

  pointerArea.addEventListener("pointermove", handlePointerMove);
  pointerArea.addEventListener("pointerleave", resetPointerTilt);
  els.mapButton?.addEventListener("click", handleActionButtonClick);
  els.itineraryButton?.addEventListener("click", handleActionButtonClick);
  addMediaChangeListener(reduceMotionMedia, handleMotionPreferenceChange);
  addMediaChangeListener(desktopMedia, handleViewportModeChange);

  return {
    update,
    destroy() {
      state.destroyed = true;

      window.clearTimeout(state.contentTimer);
      window.clearTimeout(state.finishTimer);
      window.clearTimeout(state.entryTimer);
      window.cancelAnimationFrame(state.entryRaf1);
      window.cancelAnimationFrame(state.entryRaf2);

      root.classList.remove(
        "is-bg-preparing",
        "is-bg-entering",
        "is-bg-switching",
        "is-content-switching"
      );

      pointerArea.removeEventListener("pointermove", handlePointerMove);
      pointerArea.removeEventListener("pointerleave", resetPointerTilt);
      els.mapButton?.removeEventListener("click", handleActionButtonClick);
      els.itineraryButton?.removeEventListener("click", handleActionButtonClick);
      removeMediaChangeListener(reduceMotionMedia, handleMotionPreferenceChange);
      removeMediaChangeListener(desktopMedia, handleViewportModeChange);
    }
  };
}
