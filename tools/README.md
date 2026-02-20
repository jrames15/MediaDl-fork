# Tools Required For Packaging

This folder must contain the binaries used by the app:

- `yt-dlp.exe`
- `ffmpeg.exe`
- `ffprobe.exe` (optional at runtime, recommended)

When building with Tauri, make sure `src-tauri/tauri.conf.json` includes:

```json
{
  "bundle": {
    "resources": [
      "tools/yt-dlp.exe",
      "tools/ffmpeg.exe",
      "tools/ffprobe.exe"
    ]
  }
}
```
