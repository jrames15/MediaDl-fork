function LegacyTitleBar() {
  return (
    <div className="title-bar">
      <div className="title-bar-left">
        <img src="/icon.ico" className="app-logo" alt="" aria-hidden="true" />
        <span className="app-name">MediaDl</span>
      </div>
      <div className="title-bar-buttons">
        <button id="btn-min" type="button" aria-label="Minimize">-</button>
        <button id="btn-max" type="button" aria-label="Maximize">[]</button>
        <button id="btn-close" type="button" className="close-btn" aria-label="Close">x</button>
      </div>
    </div>
  );
}

export default LegacyTitleBar;
