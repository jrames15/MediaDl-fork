export function createOptionsController({
  optionsVisibilityStorageKey,
  urlInput,
  commandBar,
  btnClearInput,
  urlErrorEl,
  resGroup,
  bitrateGroup,
  mp3BitrateSelect,
  optionsGrid,
  btnToggleOptions,
}) {
  const getFormat = () => document.querySelector('input[name="fmt"]:checked').value;

  const getMp3Bitrate = () => {
    const raw = String(mp3BitrateSelect ? mp3BitrateSelect.value : "192");
    if (raw === "128" || raw === "192" || raw === "320") return raw;
    return "192";
  };

  const syncFormatOptionVisibility = () => {
    const isMp3 = getFormat() === "mp3";
    if (resGroup) resGroup.hidden = isMp3;
    if (bitrateGroup) bitrateGroup.hidden = !isMp3;
  };

  const isOptionsCollapsedStored = () => {
    try {
      return localStorage.getItem(optionsVisibilityStorageKey) === "1";
    } catch {
      return false;
    }
  };

  const setOptionsCollapsed = (collapsed, persist = true) => {
    if (!optionsGrid || !btnToggleOptions) return;
    optionsGrid.hidden = collapsed;
    btnToggleOptions.classList.toggle("is-collapsed", collapsed);
    btnToggleOptions.setAttribute("aria-expanded", String(!collapsed));
    if (!persist) return;
    try {
      localStorage.setItem(optionsVisibilityStorageKey, collapsed ? "1" : "0");
    } catch {}
  };

  const initInfoTipPopovers = () => {
    const wraps = Array.from(document.querySelectorAll(".info-tip-wrap"));
    if (wraps.length === 0) return;

    const closeAll = () => {
      wraps.forEach((wrap) => {
        const popover = wrap.querySelector(".info-tip-popover");
        if (popover) popover.hidden = true;
      });
    };

    wraps.forEach((wrap) => {
      const trigger = wrap.querySelector(".info-tip-trigger");
      const popover = wrap.querySelector(".info-tip-popover");
      const closeBtn = wrap.querySelector(".info-tip-close");
      if (!trigger || !popover) return;

      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const willOpen = popover.hidden;
        closeAll();
        popover.hidden = !willOpen;
      });

      if (closeBtn) {
        closeBtn.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          popover.hidden = true;
        });
      }
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest(".info-tip-wrap")) return;
      closeAll();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeAll();
    });
  };

  const setUrlError = (message) => {
    if (commandBar) commandBar.classList.add("has-error");
    if (urlErrorEl) {
      urlErrorEl.textContent = message;
      urlErrorEl.hidden = false;
    }
  };

  const clearUrlError = () => {
    if (commandBar) commandBar.classList.remove("has-error");
    if (urlErrorEl) {
      urlErrorEl.textContent = "";
      urlErrorEl.hidden = true;
    }
  };

  const updateCommandBarClearVisibility = () => {
    if (!urlInput || !btnClearInput) return;
    btnClearInput.hidden = !urlInput.value.trim();
  };

  const bindOptionEvents = () => {
    document.querySelectorAll('input[name="fmt"]').forEach((radio) => {
      radio.addEventListener("change", syncFormatOptionVisibility);
    });

    if (btnToggleOptions) {
      btnToggleOptions.addEventListener("click", () => {
        const collapsed = !btnToggleOptions.classList.contains("is-collapsed");
        setOptionsCollapsed(collapsed, true);
      });
    }

    if (urlInput) {
      urlInput.addEventListener("input", () => {
        clearUrlError();
        updateCommandBarClearVisibility();
      });
      urlInput.addEventListener("focus", () => clearUrlError());
    }
  };

  return {
    bindOptionEvents,
    clearUrlError,
    getFormat,
    getMp3Bitrate,
    initInfoTipPopovers,
    isOptionsCollapsedStored,
    setOptionsCollapsed,
    setUrlError,
    syncFormatOptionVisibility,
    updateCommandBarClearVisibility,
  };
}