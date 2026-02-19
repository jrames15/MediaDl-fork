const innerHtml = "\u003csection class=\"manager-section\"\u003e\r\n          \u003cdiv class=\"content-wrap\"\u003e\r\n            \u003cdiv class=\"manager-header\"\u003e\r\n              \u003ch2 class=\"manager-title\"\u003eDownloads\u003c/h2\u003e\r\n              \u003cp class=\"manager-subtitle\"\u003eReview completed files and manage your download history.\u003c/p\u003e\r\n            \u003c/div\u003e\r\n            \u003cdiv id=\"downloads-list\" class=\"downloads-list\"\u003e\u003c/div\u003e\r\n            \u003cdiv class=\"manager-empty\" id=\"downloads-empty\"\u003e\r\n              \u003cdiv class=\"empty-icon\" aria-hidden=\"true\"\u003e\r\n                \u003csvg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u003e\r\n                  \u003cpath d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /\u003e\r\n                  \u003cpolyline points=\"7 10 12 15 17 10\" /\u003e\r\n                  \u003cline x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\" /\u003e\r\n                \u003c/svg\u003e\r\n              \u003c/div\u003e\r\n              \u003cp\u003eNo downloads yet\u003c/p\u003e\r\n              \u003cp class=\"muted\"\u003ePaste a link to get started.\u003c/p\u003e\r\n            \u003c/div\u003e\r\n          \u003c/div\u003e\r\n        \u003c/section\u003e";

function LegacyDownloadsView() {
  return (
    <div className="view view-hidden" id="view-downloads" dangerouslySetInnerHTML={{ __html: innerHtml }} />
  );
}

export default LegacyDownloadsView;
