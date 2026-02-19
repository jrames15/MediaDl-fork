import { compactTitle, normalizedPercent } from "../../utils/legacy-ui";

export function buildQueueKey(url, format, resolution, outputFolder, mp3Bitrate, downloadSubtitles) {
  return `${url}::${format}::${resolution || ""}::${mp3Bitrate || ""}::${outputFolder}::${downloadSubtitles ? "subs" : "nosubs"}`;
}

export function getFormatLabel(job) {
  if (job.format === "mp3") {
    return `MP3 ${String(job.mp3Bitrate || "192")} kbps`;
  }
  return `MP4 ${job.resolution ? `${job.resolution}p` : ""}`.trim();
}

export function getCompletedMetaLine(job, siteName) {
  const site = siteName && siteName !== "none" ? siteName : "Unknown";
  if (job.format === "mp3") {
    return `${site} - MP3 - ${String(job.mp3Bitrate || "192")} kbps`;
  }
  if (job.format === "mp4") {
    return `${site} - MP4 - ${job.resolution ? `${job.resolution}p` : "Auto"}`;
  }
  return `${site} - ${(job.format || "FILE").toUpperCase()}`;
}

export function getSubtitleLabel(job) {
  if (!job.downloadSubtitles) return "";
  if (job.status === "completed") return "Subtitles: Downloaded";
  if (job.status === "downloading" || job.status === "processing") return "Subtitles: Downloading";
  return "Subtitles: Enabled";
}

export function getCardTitle(job) {
  if (job.title && String(job.title).trim()) return compactTitle(job.title);
  if (job.status === "queued" || job.status === "fetching") return "Preparing download...";
  return "";
}

export function getProgressPercentLabel(job, percent) {
  if (job.status === "downloading" || job.status === "processing" || job.status === "completed") {
    return `${Math.round(percent)}%`;
  }
  return "";
}

export function getFileSizeLabel(job) {
  if (job.fileSize && String(job.fileSize).trim()) return String(job.fileSize).trim();
  if (job.status === "completed" || job.status === "canceled") return "";
  return "-";
}

export function progressText(job) {
  if (job.status === "completed") return "Complete";
  if (job.status === "failed") return "Failed";
  if (job.status === "canceled") return "Canceled";
  if (job.status === "fetching") return "Fetching info...";
  if (job.status === "processing") return "Processing...";
  return `${normalizedPercent(job.percent).toFixed(1)}%`;
}

export function trailingPercent(percent, status) {
  if (status !== "downloading") return "";
  const safe = normalizedPercent(percent);
  if (safe <= 0 || safe >= 100) return "";
  return `${safe.toFixed(1)}%`;
}
