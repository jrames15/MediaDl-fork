const fs = require('fs');
const path = require('path');

const root = process.cwd();
const requiredTools = ['yt-dlp.exe', 'ffmpeg.exe'];
const toolDir = path.join(root, 'tools');
const tauriConfPath = path.join(root, 'src-tauri', 'tauri.conf.json');

function exists(p) {
  return fs.existsSync(p);
}

function asPathList(resources) {
  if (Array.isArray(resources)) return resources.filter((v) => typeof v === 'string');
  if (!resources || typeof resources !== 'object') return [];

  const values = [];
  for (const [k, v] of Object.entries(resources)) {
    if (typeof k === 'string') values.push(k);
    if (typeof v === 'string') values.push(v);
  }
  return values;
}

function includesTool(resourcePaths, toolName) {
  const loweredTool = toolName.toLowerCase();
  return resourcePaths.some((entry) => {
    const norm = String(entry).replace(/\\/g, '/').toLowerCase();
    return norm.endsWith(`/tools/${loweredTool}`) || norm === `tools/${loweredTool}` || norm.includes(`/tools/${loweredTool}`);
  });
}

const problems = [];

if (!exists(path.join(root, 'src-tauri'))) {
  problems.push('Missing `src-tauri/` directory.');
}

for (const tool of requiredTools) {
  const toolPath = path.join(toolDir, tool);
  if (!exists(toolPath)) {
    problems.push(`Missing required binary: tools/${tool}`);
  }
}

if (!exists(tauriConfPath)) {
  problems.push('Missing `src-tauri/tauri.conf.json`.');
} else {
  try {
    const tauriConf = JSON.parse(fs.readFileSync(tauriConfPath, 'utf8'));
    const resourcePaths = asPathList(tauriConf?.bundle?.resources);

    if (resourcePaths.length === 0) {
      problems.push('`bundle.resources` is missing/empty in `src-tauri/tauri.conf.json`.');
    } else {
      for (const tool of requiredTools) {
        if (!includesTool(resourcePaths, tool)) {
          problems.push(`tauri bundle.resources does not include tools/${tool}`);
        }
      }
    }
  } catch (error) {
    problems.push(`Invalid JSON in src-tauri/tauri.conf.json: ${error.message}`);
  }
}

if (problems.length > 0) {
  console.error('\nBuild prerequisites failed:\n');
  for (const problem of problems) {
    console.error(`- ${problem}`);
  }
  console.error('\nRequired tauri.conf.json snippet:');
  console.error(
    JSON.stringify(
      {
        bundle: {
          resources: ['tools/yt-dlp.exe', 'tools/ffmpeg.exe', 'tools/ffprobe.exe'],
        },
      },
      null,
      2
    )
  );
  process.exit(1);
}

console.log('Prereq check passed: src-tauri and tool binaries are present and bundled.');
