import {
  HOSPITALITY_AREAS,
  HOSPITALITY_PACKAGES
} from "./hospitality-data.js";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const elements = {
  header: document.querySelector("[data-site-header]"),
  menuButton: document.querySelector("[data-menu-button]"),
  navigation: document.querySelector("[data-navigation]"),
  featuredSelector: document.querySelector("[data-featured-selector]"),
  heroCategory: document.querySelector("[data-hero-category]"),
  heroMessage: document.querySelector("[data-hero-message]"),
  heroTagline: document.querySelector("[data-hero-tagline]"),
  heroLead: document.querySelector("[data-hero-lead]"),
  heroPackage: document.querySelector("[data-hero-package]"),
  heroOrder: document.querySelector("[data-hero-order]"),
  openFeaturedDetail: document.querySelector("[data-open-featured-detail]"),
  detail: document.querySelector("[data-package-detail]"),
  packageSwitcher: document.querySelector("[data-package-switcher]"),
  packageSwitcherSelect: document.querySelector("[data-package-switcher-select]"),
  packageSwitcherCurrent: document.querySelector(
    "[data-package-switcher-current]"
  ),
  packagePrevious: document.querySelector("[data-package-previous]"),
  packageNext: document.querySelector("[data-package-next]"),
  packagePosition: document.querySelector("[data-package-position]"),
  detailImage: document.querySelector("[data-detail-image]"),
  detailOrder: document.querySelector("[data-detail-order]"),
  detailCategory: document.querySelector("[data-detail-category]"),
  detailExperience: document.querySelector("[data-detail-experience]"),
  detailName: document.querySelector("[data-detail-name]"),
  detailTagline: document.querySelector("[data-detail-tagline]"),
  detailDescription: document.querySelector("[data-detail-description]"),
  detailLocation: document.querySelector("[data-detail-location]"),
  detailView: document.querySelector("[data-detail-view]"),
  detailHighlights: document.querySelector("[data-detail-highlights]"),
  detailOfficial: document.querySelector("[data-detail-official]"),
  areaIndex: document.querySelector("[data-area-index]"),
  suiteAtlas: document.querySelector("[data-suite-atlas]"),
  comparisonBody: document.querySelector("[data-comparison-body]")
};

const featuredPackages = HOSPITALITY_PACKAGES.filter((item) => item.featured);

const state = {
  activeFeaturedId: featuredPackages[0]?.id ?? "",
  activePackageId: HOSPITALITY_PACKAGES[0]?.id ?? "",
  detailTimer: 0,
  detailScrollFrame: 0,
  heroContentTimer: 0
};

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getPackage(packageId) {
  return HOSPITALITY_PACKAGES.find((item) => item.id === packageId);
}

function renderAreaIndex() {
  if (!elements.areaIndex) return;

  const fragment = document.createDocumentFragment();

  HOSPITALITY_AREAS.forEach((area) => {
    const link = document.createElement("a");

    link.href = `#hospitalityArea-${area.id}`;
    link.className = "hospitality-area-link";
    link.innerHTML = `
      <span class="hospitality-area-link__order">${escapeHTML(area.order)}</span>
      <span class="hospitality-area-link__name">${escapeHTML(area.name)}</span>
      <span class="hospitality-area-link__track">${escapeHTML(area.track)}</span>
    `;

    fragment.append(link);
  });

  elements.areaIndex.replaceChildren(fragment);
}

function renderSuiteAtlas() {
  if (!elements.suiteAtlas) return;

  const fragment = document.createDocumentFragment();

  HOSPITALITY_AREAS.forEach((area) => {
    const areaPackages = HOSPITALITY_PACKAGES.filter(
      (item) => item.category === area.id
    );
    const section = document.createElement("section");

    section.className = "suite-area reveal";
    section.id = `hospitalityArea-${area.id}`;
    section.setAttribute("aria-labelledby", `hospitalityAreaTitle-${area.id}`);

    const cards = areaPackages
      .map((item) => {
        const directView = !item.viewingMode.includes("無直接視野");
        const gallery = item.gallery
          .map(
            (image) => `
              <figure class="suite-card__image">
                <img
                  src="${escapeHTML(image.src)}"
                  alt="${escapeHTML(image.alt)}"
                  width="700"
                  height="490"
                  loading="lazy"
                >
                <figcaption>${escapeHTML(image.label)}</figcaption>
              </figure>
            `
          )
          .join("");

        return `
          <article class="suite-card">
            <div class="suite-card__gallery">
              ${gallery}
            </div>
            <div class="suite-card__body">
              <p class="suite-card__status ${directView ? "is-direct" : "is-grandstand"}">
                <span aria-hidden="true">${directView ? "●" : "○"}</span>
                ${directView ? "包廂／露臺可直接觀賽" : "移步專屬看台觀賽"}
              </p>
              <div class="suite-card__title-row">
                <p>${escapeHTML(item.order)}</p>
                <h4>${escapeHTML(item.name)}</h4>
              </div>
              <dl class="suite-card__facts">
                <div>
                  <dt>LOCATION</dt>
                  <dd>${escapeHTML(item.location)}</dd>
                </div>
                <div>
                  <dt>NEARBY / VIEW</dt>
                  <dd>${escapeHTML(item.nearby)}</dd>
                </div>
              </dl>
              <p class="suite-card__mode">${escapeHTML(item.viewingMode)}</p>
              <button
                class="suite-card__button"
                type="button"
                data-atlas-package="${escapeHTML(item.id)}"
                aria-label="查看 ${escapeHTML(item.name)} 完整方案內容"
              >
                <span>查看完整方案</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        `;
      })
      .join("");

    section.innerHTML = `
      <header class="suite-area__header">
        <p class="suite-area__order">${escapeHTML(area.order)}</p>
        <p class="suite-area__track">${escapeHTML(area.track)}</p>
        <h3 id="hospitalityAreaTitle-${escapeHTML(area.id)}">${escapeHTML(area.name)}</h3>
        <p class="suite-area__relation">${escapeHTML(area.relation)}</p>
        <p class="suite-area__description">${escapeHTML(area.description)}</p>
      </header>
      <div class="suite-area__packages suite-area__packages--${areaPackages.length}">
        ${cards}
      </div>
    `;

    fragment.append(section);
  });

  elements.suiteAtlas.replaceChildren(fragment);
}

function handleAtlasClick(event) {
  const button = event.target.closest("[data-atlas-package]");

  if (!button) return;

  const selectedPackage = getPackage(button.dataset.atlasPackage);
  setPackageDetail(selectedPackage, { scroll: true });
}

function renderFeaturedSelector() {
  if (!elements.featuredSelector) return;

  const fragment = document.createDocumentFragment();

  featuredPackages.forEach((item) => {
    const button = document.createElement("button");
    const isActive = item.id === state.activeFeaturedId;

    button.type = "button";
    button.className = "featured-tab";
    button.id = `featuredTab-${item.id}`;
    button.dataset.packageId = item.id;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
    button.innerHTML = `
      <span class="featured-tab__thumb">
        <img
          src="${escapeHTML(item.image)}"
          alt=""
          width="1070"
          height="450"
        >
      </span>
      <span class="featured-tab__order">${escapeHTML(item.order)}</span>
      <span class="featured-tab__name">${escapeHTML(item.shortName)}</span>
      <span class="featured-tab__location">${escapeHTML(item.categoryLabel)}</span>
    `;

    fragment.append(button);
  });

  elements.featuredSelector.replaceChildren(fragment);
}

function setFeaturedPackage(packageId, { updateDetail = false } = {}) {
  const selectedPackage = getPackage(packageId);

  if (!selectedPackage?.featured) return;

  const isNewPackage = state.activeFeaturedId !== packageId;
  state.activeFeaturedId = packageId;

  elements.featuredSelector
    ?.querySelectorAll(".featured-tab")
    .forEach((tab) => {
      const isActive = tab.dataset.packageId === packageId;
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

  if (isNewPackage) {
    window.clearTimeout(state.heroContentTimer);
    elements.heroMessage?.classList.add("is-changing");
    elements.heroCategory?.classList.add("is-changing");

    state.heroContentTimer = window.setTimeout(() => {
      if (elements.heroCategory) {
        elements.heroCategory.textContent =
          `${selectedPackage.categoryLabel} / ${selectedPackage.experience}`.toUpperCase();
      }
      if (elements.heroTagline) {
        elements.heroTagline.textContent = selectedPackage.tagline;
      }
      if (elements.heroLead) {
        elements.heroLead.textContent = selectedPackage.heroLead;
      }
      if (elements.heroPackage) {
        elements.heroPackage.textContent = selectedPackage.shortName;
      }
      if (elements.heroOrder) {
        elements.heroOrder.textContent = selectedPackage.order;
      }

      elements.heroMessage?.classList.remove("is-changing");
      elements.heroCategory?.classList.remove("is-changing");
    }, reduceMotion.matches ? 0 : 170);
  }

  const activeTab = elements.featuredSelector?.querySelector(
    `[data-package-id="${CSS.escape(packageId)}"]`
  );

  activeTab?.scrollIntoView({
    behavior: reduceMotion.matches ? "auto" : "smooth",
    block: "nearest",
    inline: "center"
  });

  if (updateDetail) {
    setPackageDetail(selectedPackage, { scroll: true });
  }
}

function handleFeaturedClick(event) {
  const tab = event.target.closest(".featured-tab");

  if (!tab) return;
  setFeaturedPackage(tab.dataset.packageId);
}

function handleFeaturedKeydown(event) {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
    return;
  }

  const tabs = Array.from(
    elements.featuredSelector?.querySelectorAll(".featured-tab") ?? []
  );
  const currentIndex = tabs.findIndex(
    (tab) => tab.dataset.packageId === state.activeFeaturedId
  );

  if (currentIndex < 0 || tabs.length === 0) return;

  event.preventDefault();

  let nextIndex = currentIndex;

  if (event.key === "ArrowLeft") {
    nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
  }
  if (event.key === "ArrowRight") {
    nextIndex = (currentIndex + 1) % tabs.length;
  }
  if (event.key === "Home") {
    nextIndex = 0;
  }
  if (event.key === "End") {
    nextIndex = tabs.length - 1;
  }

  const nextTab = tabs[nextIndex];
  nextTab.focus();
  setFeaturedPackage(nextTab.dataset.packageId);
}

function renderDetailHighlights(items) {
  if (!elements.detailHighlights) return;

  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    fragment.append(listItem);
  });

  elements.detailHighlights.replaceChildren(fragment);
}

function renderPackageSwitcher() {
  if (!elements.packageSwitcherSelect) return;

  const options = document.createDocumentFragment();

  HOSPITALITY_PACKAGES.forEach((item) => {
    const isActive = item.id === state.activePackageId;
    const option = document.createElement("option");

    option.value = item.id;
    option.textContent = `${item.order}  ${item.shortName}`;
    option.selected = isActive;

    options.append(option);
  });

  elements.packageSwitcherSelect.replaceChildren(options);
}

function syncPackageSwitcher(packageId) {
  const activeIndex = HOSPITALITY_PACKAGES.findIndex(
    (item) => item.id === packageId
  );

  if (elements.packageSwitcherSelect) {
    elements.packageSwitcherSelect.value = packageId;
  }

  const activePackage = HOSPITALITY_PACKAGES[activeIndex];

  if (elements.packageSwitcherCurrent && activePackage) {
    elements.packageSwitcherCurrent.textContent = activePackage.shortName;
  }

  if (elements.packagePosition && activeIndex >= 0) {
    elements.packagePosition.textContent =
      `${String(activeIndex + 1).padStart(2, "0")} / ` +
      String(HOSPITALITY_PACKAGES.length).padStart(2, "0");
  }

}

function selectAdjacentPackage(direction) {
  const currentIndex = HOSPITALITY_PACKAGES.findIndex(
    (item) => item.id === state.activePackageId
  );
  const nextIndex =
    (currentIndex + direction + HOSPITALITY_PACKAGES.length) %
    HOSPITALITY_PACKAGES.length;

  setPackageDetail(HOSPITALITY_PACKAGES[nextIndex], { scroll: false });
}

function setPackageDetail(selectedPackage, { scroll = false } = {}) {
  if (!selectedPackage || !elements.detail) return;

  const preservedScrollY = scroll ? null : window.scrollY;

  state.activePackageId = selectedPackage.id;
  syncPackageSwitcher(selectedPackage.id);

  window.clearTimeout(state.detailTimer);
  window.cancelAnimationFrame(state.detailScrollFrame);
  elements.detail.classList.add("is-changing");

  state.detailTimer = window.setTimeout(() => {
    if (elements.detailImage) {
      elements.detailImage.src = selectedPackage.image;
      elements.detailImage.alt =
        `${selectedPackage.name} 官方活動照片`;
    }
    if (elements.detailOrder) {
      elements.detailOrder.textContent = selectedPackage.order;
    }
    if (elements.detailCategory) {
      elements.detailCategory.textContent = selectedPackage.categoryLabel;
    }
    if (elements.detailExperience) {
      elements.detailExperience.textContent =
        selectedPackage.experience.toUpperCase();
    }
    if (elements.detailName) {
      elements.detailName.textContent = selectedPackage.name;
    }
    if (elements.detailTagline) {
      elements.detailTagline.textContent = selectedPackage.tagline;
    }
    if (elements.detailDescription) {
      elements.detailDescription.textContent = selectedPackage.description;
    }
    if (elements.detailLocation) {
      elements.detailLocation.textContent = selectedPackage.location;
    }
    if (elements.detailView) {
      elements.detailView.textContent = selectedPackage.view;
    }
    if (elements.detailOfficial) {
      elements.detailOfficial.href = selectedPackage.officialUrl;
      elements.detailOfficial.setAttribute(
        "aria-label",
        `查看 ${selectedPackage.name} 官方方案資訊`
      );
    }

    renderDetailHighlights(selectedPackage.highlights);
    elements.detail.classList.remove("is-changing");

    if (preservedScrollY !== null) {
      state.detailScrollFrame = window.requestAnimationFrame(() => {
        window.scrollTo(window.scrollX, preservedScrollY);
      });
    }
  }, reduceMotion.matches ? 0 : 160);

  if (scroll) {
    window.setTimeout(() => {
      elements.detail.scrollIntoView({
        behavior: reduceMotion.matches ? "auto" : "smooth",
        block: "start"
      });
    }, reduceMotion.matches ? 0 : 80);
  }
}

function renderComparisonTable() {
  if (!elements.comparisonBody) return;

  const fragment = document.createDocumentFragment();

  HOSPITALITY_PACKAGES.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <span class="comparison-table__name">${escapeHTML(item.shortName)}</span>
        <span class="comparison-table__category">${escapeHTML(item.categoryLabel)}</span>
      </td>
      <td>${escapeHTML(item.location)}</td>
      <td>${escapeHTML(item.view)}</td>
      <td>${escapeHTML(item.experience)}</td>
      <td>
        <button
          class="comparison-table__button"
          type="button"
          data-compare-package="${escapeHTML(item.id)}"
          aria-label="查看 ${escapeHTML(item.name)} 詳細內容"
        >→</button>
      </td>
    `;

    fragment.append(row);
  });

  elements.comparisonBody.replaceChildren(fragment);
}

function handleComparisonClick(event) {
  const button = event.target.closest("[data-compare-package]");

  if (!button) return;

  const selectedPackage = getPackage(button.dataset.comparePackage);
  setPackageDetail(selectedPackage, { scroll: true });
}

function setMenuOpen(isOpen) {
  elements.menuButton?.setAttribute("aria-expanded", String(isOpen));
  elements.navigation?.classList.toggle("is-open", isOpen);
  elements.header?.classList.toggle("is-menu-open", isOpen);
  document.body.classList.toggle("is-menu-open", isOpen);

  const label = elements.menuButton?.querySelector(".sr-only");
  if (label) {
    label.textContent = isOpen ? "關閉導覽選單" : "開啟導覽選單";
  }
}

function initNavigation() {
  elements.menuButton?.addEventListener("click", () => {
    const isOpen =
      elements.menuButton.getAttribute("aria-expanded") !== "true";
    setMenuOpen(isOpen);
  });

  elements.navigation?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      setMenuOpen(false);
    }
  });
}

function initHeader() {
  const updateHeader = () => {
    elements.header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function initRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12
    }
  );

  revealElements.forEach((item) => observer.observe(item));
}

function init() {
  renderFeaturedSelector();
  renderAreaIndex();
  renderSuiteAtlas();
  renderPackageSwitcher();
  renderComparisonTable();
  setPackageDetail(HOSPITALITY_PACKAGES[0], { scroll: false });
  initNavigation();
  initHeader();
  initRevealAnimations();

  elements.featuredSelector?.addEventListener("click", handleFeaturedClick);
  elements.featuredSelector?.addEventListener(
    "keydown",
    handleFeaturedKeydown
  );
  elements.packageSwitcherSelect?.addEventListener("change", (event) => {
    setPackageDetail(getPackage(event.target.value), { scroll: false });
  });
  elements.packagePrevious?.addEventListener("click", () => {
    selectAdjacentPackage(-1);
  });
  elements.packageNext?.addEventListener("click", () => {
    selectAdjacentPackage(1);
  });
  elements.comparisonBody?.addEventListener(
    "click",
    handleComparisonClick
  );
  elements.suiteAtlas?.addEventListener("click", handleAtlasClick);
  elements.openFeaturedDetail?.addEventListener("click", () => {
    const selectedPackage = getPackage(state.activeFeaturedId);
    setPackageDetail(selectedPackage, { scroll: true });
  });
}

init();
