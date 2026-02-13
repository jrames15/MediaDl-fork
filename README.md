# 🎬 Video Downloader

A free, open-source Windows desktop app to download videos and music from YouTube, TikTok, Facebook, and 1000+ other sites — built with Electron and yt-dlp.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Platform](https://img.shields.io/badge/platform-Windows-lightgrey)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📥 Download

👉 **[Click here to download the latest release](../../releases/latest)**

> No installation needed — just download and run the `.exe` directly!

---

## ✨ Features

- 🎬 Download videos as **MP4**
- 🎵 Download audio as **MP3**
- 📺 Choose resolution: **144p, 360p, 480p, 720p, 1080p, 4K**
- 🔗 Paste **multiple URLs** at once
- 📋 **Download queue** — add as many videos as you want
- 📊 **Live progress bar** with file size and status
- 📁 Choose your own **download folder**
- 🌙 Clean modern **dark UI**

---

## 🌐 Supported Sites

| Site | Video | Audio |
|------|-------|-------|
| YouTube | ✅ | ✅ |
| TikTok | ✅ | ✅ |
| Facebook | ✅ | ✅ |
| Instagram | ✅ | ✅ |
| Twitter / X | ✅ | ✅ |
| 1000+ more | ✅ | ✅ |

> Full list of supported sites: [yt-dlp supported sites](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)

---

## 🖥️ Screenshots

> Coming soon!

---

## 🛠️ Run From Source

Want to build it yourself? Follow these steps:

### 1. Clone the repo

```bash
git clone https://github.com/YOURUSERNAME/video-downloader.git
cd video-downloader
```

### 2. Install dependencies

```bash
npm install
```

### 3. Download required tools

You need to manually download these two files and place them inside the `tools/` folder:

| File | Download | Size |
|------|----------|------|
| `yt-dlp.exe` | [⬇️ Download yt-dlp.exe](https://github.com/yt-dlp/yt-dlp/releases/download/2026.02.04/yt-dlp.exe) | ~9 MB |
| `ffmpeg.exe` | [⬇️ Download ffmpeg.exe](https://sourceforge.net/projects/tumagcc/files/converters/ffmpeg.exe/download) | ~112 MB |

After downloading, your folder should look like this:

```
video-downloader/
└── tools/
    ├── yt-dlp.exe   ✅
    └── ffmpeg.exe   ✅
```

### 4. Run the app

```bash
npm start
```

### 5. Build your own `.exe`

```powershell
$env:CSC_IDENTITY_AUTO_DISCOVERY="false"
npm run build
```

Your `.exe` will appear in the `dist/` folder.

---

## 📦 Built With

| Tool | Purpose |
|------|---------|
| [Electron](https://electronjs.org) | Desktop app framework |
| [yt-dlp](https://github.com/yt-dlp/yt-dlp) | Video downloading engine |
| [FFmpeg](https://ffmpeg.org) | Audio/video conversion |
| HTML + CSS + JS | UI |

---

## ⚠️ Legal Notice

This tool is intended for **personal use only**.

- Only download content **you have permission to download**
- Respect **copyright laws** in your country
- YouTube's Terms of Service **prohibit downloading** unless a download button is provided
- The developers are **not responsible** for how this tool is used

---

## 🤝 Contributing

Contributions are welcome! If you want to add features or fix bugs:

1. Fork this repo
2. Create a new branch: `git checkout -b feature/my-new-feature`
3. Make your changes
4. Commit: `git commit -m "Add my new feature"`
5. Push: `git push origin feature/my-new-feature`
6. Open a **Pull Request**

---

## 📋 Changelog

### [1.0.0] - 2026-02-13
- 🎉 Initial release
- YouTube, TikTok, Facebook support
- MP4 and MP3 download
- Resolution selection up to 4K
- Multi-URL download queue
- Live progress bars

---

## ⭐ Support

If you find this app useful, please consider giving it a **star** on GitHub! It helps others discover the project.

[![Star on GitHub](https://img.shields.io/github/stars/YOURUSERNAME/video-downloader?style=social)](../../stargazers)
