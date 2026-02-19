function LegacyOverlays() {
  return (
    <>
      <div className="toast-container" id="toast-container" aria-live="polite"></div>

      <div className="tools-action-modal" id="tools-action-modal" hidden>
        <div className="tools-action-backdrop" id="tools-action-backdrop"></div>
        <div className="tools-action-dialog" role="dialog" aria-modal="true" aria-labelledby="tools-action-title">
          <h3 id="tools-action-title">What do you want to do with these files?</h3>
          <p className="tools-action-subtitle">Pick one or more tasks. You can still adjust details in Task Builder.</p>
          <div className="tools-action-list">
            <label className="switch-row" htmlFor="prompt-convert">
              <span className="switch-row-text">Convert video format</span>
              <input type="radio" name="prompt-feature" value="convert" id="prompt-convert" className="switch-input" defaultChecked />
              <span className="switch-track" aria-hidden="true"></span>
            </label>
            <label className="switch-row" htmlFor="prompt-compress">
              <span className="switch-row-text">Compress video</span>
              <input type="radio" name="prompt-feature" value="compress" id="prompt-compress" className="switch-input" />
              <span className="switch-track" aria-hidden="true"></span>
            </label>
            <label className="switch-row" htmlFor="prompt-extract">
              <span className="switch-row-text">Audio tools</span>
              <input type="radio" name="prompt-feature" value="audio" id="prompt-extract" className="switch-input" />
              <span className="switch-track" aria-hidden="true"></span>
            </label>
            <label className="switch-row" htmlFor="prompt-trim">
              <span className="switch-row-text">Trim clip</span>
              <input type="radio" name="prompt-feature" value="trim" id="prompt-trim" className="switch-input" />
              <span className="switch-track" aria-hidden="true"></span>
            </label>
            <label className="switch-row" htmlFor="prompt-gif">
              <span className="switch-row-text">Export GIF</span>
              <input type="radio" name="prompt-feature" value="gif" id="prompt-gif" className="switch-input" />
              <span className="switch-track" aria-hidden="true"></span>
            </label>
            <label className="switch-row" htmlFor="prompt-resize">
              <span className="switch-row-text">Resize resolution</span>
              <input type="radio" name="prompt-feature" value="resize" id="prompt-resize" className="switch-input" />
              <span className="switch-track" aria-hidden="true"></span>
            </label>
          </div>
          <div className="tools-action-buttons">
            <button type="button" id="btn-tools-prompt-skip" className="btn-secondary">Skip</button>
            <button type="button" id="btn-tools-prompt-apply" className="btn-primary">Apply Selection</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LegacyOverlays;
