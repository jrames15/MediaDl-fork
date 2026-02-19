const tauri = window.__TAURI__;
const invoke = tauri?.core?.invoke;
const listen = tauri?.event?.listen;

if (!invoke || !listen) {
  console.error('Tauri API is not available.');
}

function invokeSafe(command, args = {}) {
  if (!invoke) return Promise.reject(new Error('Tauri invoke unavailable'));
  return invoke(command, args);
}

function onEvent(eventName, cb) {
  if (!listen) return () => {};
  const unlistenPromise = listen(eventName, (event) => cb(event.payload));
  return () => {
    void Promise.resolve(unlistenPromise).then((unlisten) => {
      if (typeof unlisten === 'function') unlisten();
    });
  };
}

window.electronAPI = {
  selectFolder: () => invokeSafe('select_folder'),
  getDownloadFolder: () => invokeSafe('get_download_folder'),
  setDownloadFolder: (folderPath) => invokeSafe('set_download_folder', { folderPath }),
  fetchFormats: (url) => invokeSafe('fetch_formats', { url }),
  startDownload: (options) => invokeSafe('start_download', { payload: options }),
  cancelDownload: (downloadId) => invokeSafe('cancel_download', { downloadId }),
  onDownloadProgress: (cb) => onEvent('download-progress', cb),
  openFolder: (folderPath) => invokeSafe('open_folder', { folderPath }),
  playFile: (filePath) => invokeSafe('play_file', { filePath }),
  resolveOutputFile: (payload) => invokeSafe('resolve_output_file', { payload }),
  getAppVersion: () => invokeSafe('get_app_version'),
  getSettings: () => invokeSafe('get_settings'),
  setSettings: (settings) => invokeSafe('set_settings', { settings }),
  getYtDlpVersion: () => invokeSafe('get_yt_dlp_version'),
  updateYtDlp: () => invokeSafe('update_yt_dlp'),
  selectMediaFiles: () => invokeSafe('select_media_files'),
  mediaToolsRunPipeline: (opts) => invokeSafe('media_tools_run_pipeline', { payload: opts }),
  onMediaToolsProgress: (cb) => onEvent('media-tools-progress', cb),
  showItemInFolder: (filePath) => invokeSafe('show_item_in_folder', { filePath }),
  openExternalUrl: (url) => invokeSafe('open_external_url', { rawUrl: url }),
  minimizeWindow: () => invokeSafe('window_minimize'),
  maximizeWindow: () => invokeSafe('window_maximize'),
  closeWindow: () => invokeSafe('window_close'),
};
