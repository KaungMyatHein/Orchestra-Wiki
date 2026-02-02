---
sidebar_position: 3
---

# 💻 Web Implementation

### Setup for React / Vue / HTML
This setup generates CSS Variables and TypeScript definitions automatically.

## How to Set Up Setting
Look at this video tutorial for how to set up for Github.

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/YOUR_UNLISTED_VIDEO_ID"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

#### 1. Directory Structure
Ensure your repository looks like this:

```
my-web-app/
├── src/
│   └── styles/      <-- Generated files go here
├── tokens/          <-- Raw JSON from Figma goes here
├── build.js         <-- The script
└── package.json
```

#### 2. Configuration Files
Run the following commands in your project root to set up the necessary files.

**Step A: Create package.json**

```json
{
  "name": "design-system-web",
  "type": "module",
  "scripts": {
    "build": "node build.js"
  },
  "devDependencies": {
    "style-dictionary": "^3.0.0"
  }
}
```

**Step B: Create build.js**

```javascript
import fs from 'fs';
import path from 'path';

// ---------- helpers ----------

function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function toCamelCase(str) {
  const parts = str
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((p) => p.trim());
  if (!parts.length) return '';
  return (
    parts[0].toLowerCase() +
    parts
      .slice(1)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
      .join('')
  );
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function flattenToMap(obj, prefix = '', out = {}) {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    const nextKey = prefix ? `${prefix}/${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenToMap(value, nextKey, out);
    } else {
      out[nextKey] = value;
    }
  });
  return out;
}

function resolveAlias(raw, primitiveMap) {
  if (typeof raw !== 'string') return raw;
  const match = raw.match(/^\{([^}]+)\}$/);
  if (!match) return raw;
  const key = match[1];
  return primitiveMap[key] ?? raw;
}

// Parse existing CSS variables from a theme file so we can merge
function readExistingCssVars(cssPath) {
  if (!fs.existsSync(cssPath)) return {};
  const content = fs.readFileSync(cssPath, 'utf8');
  const vars = {};
  const regex = /--([a-z0-9\-]+)\s*:\s*([^;]+);/gi;
  let m;
  while ((m = regex.exec(content))) {
    vars[m[1]] = m[2].trim();
  }
  return vars;
}

// Parse existing TS exports from a theme file so we can merge
function readExistingTsConsts(tsPath) {
  if (!fs.existsSync(tsPath)) return {};
  const content = fs.readFileSync(tsPath, 'utf8');
  const consts = {};
  const regex = /export const\s+(\w+)\s*=\s*["'`]([^"'`]+)["'`];/g;
  let m;
  while ((m = regex.exec(content))) {
    consts[m[1]] = m[2];
  }
  return consts;
}

function writeThemeFiles(themeName, tokens) {
  const buildPath = path.join('src', 'styles');
  ensureDir(buildPath);

  const slug = toKebabCase(themeName); // e.g. BrandA -> branda
  const cssPath = path.join(buildPath, `theme-${slug}.css`);
  const tsPath = path.join(buildPath, `theme-${slug}.ts`);

  const existingCss = readExistingCssVars(cssPath);
  const existingTs = readExistingTsConsts(tsPath);

  const cssVars = { ...existingCss };
  const tsConsts = { ...existingTs };

  tokens.forEach((t) => {
    cssVars[t.cssVar] = t.value;
    tsConsts[t.tsName] = t.value;
  });

  const cssLines = [
    '/**',
    ' * Auto-generated from tokens/design-tokens.json',
    ' * Do not edit manually.',
    ' */',
    '',
    `[data-theme="${slug}"] {`,
  ];

  Object.keys(cssVars)
    .sort()
    .forEach((name) => {
      cssLines.push(`  --${name}: ${cssVars[name]};`);
    });
  cssLines.push('}', '');

  const tsLines = [
    '/**',
    ' * Auto-generated from tokens/design-tokens.json',
    ' * Do not edit manually.',
    ' */',
    '',
  ];

  Object.keys(tsConsts)
    .sort()
    .forEach((name) => {
      tsLines.push(`export const ${name} = "${tsConsts[name]}";`);
    });

  fs.writeFileSync(cssPath, cssLines.join('\n'), 'utf8');
  fs.writeFileSync(tsPath, tsLines.join('\n'), 'utf8');
}

// ---------- main ----------

const tokenDir = './tokens';
if (!fs.existsSync(tokenDir)) {
  console.error(`❌ Tokens folder not found at ${tokenDir}`);
  process.exit(1);
}

const designTokensPath = path.join(tokenDir, 'design-tokens.json');
if (!fs.existsSync(designTokensPath)) {
  console.error(`❌ design-tokens.json not found at ${designTokensPath}`);
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(designTokensPath, 'utf8'));

// Allow flexible collection names – try to detect primitives/components dynamically.
const topLevelKeys = Object.keys(raw);

// Prefer keys that look like "Primitive Tokens" / "Primitives" etc.
const primitiveKey =
  topLevelKeys.find((k) => /primitive/i.test(k)) ??
  topLevelKeys.find((k) => /base/i.test(k)) ??
  topLevelKeys[0];

// Prefer keys that look like "Component Tokens" / "Components" / "Brand"
const componentKey =
  topLevelKeys.find((k) => /component/i.test(k)) ??
  topLevelKeys.find((k) => /brand/i.test(k)) ??
  topLevelKeys.find((k) => k !== primitiveKey) ??
  topLevelKeys[1];

const primitiveCollection = raw[primitiveKey];
const componentCollection = raw[componentKey];

if (!primitiveCollection || !componentCollection) {
  console.error(
    `❌ Could not resolve primitive/component collections from design-tokens.json. ` +
      `Checked primitiveKey="${primitiveKey}", componentKey="${componentKey}".`,
  );
  process.exit(1);
}

console.log(`Using "${primitiveKey}" as primitives and "${componentKey}" as components.`);

const primitiveModes = Object.keys(primitiveCollection);
if (!primitiveModes.length) {
  console.error('❌ No modes found under "Primitive Tokens"');
  process.exit(1);
}

// Use first mode (Mode 1) as base primitives
const baseModeName = primitiveModes[0];
const primitiveMap = flattenToMap(primitiveCollection[baseModeName]);

const brandKeys = Object.keys(componentCollection);

console.log(`\n🔍 Found ${brandKeys.length} brands.`);

brandKeys.forEach((brandKey, index) => {
  const brandTokens = componentCollection[brandKey];
  const themeName = brandKey;

  console.log(`\n🤖 Building Theme ${index + 1}: ${toKebabCase(themeName)}...`);

  const collected = [];

  function walk(node, pathParts = []) {
    if (node && typeof node === 'object' && !Array.isArray(node)) {
      Object.keys(node).forEach((k) => {
        walk(node[k], [...pathParts, k]);
      });
      return;
    }

    const rawValue = node;
    const resolved = resolveAlias(rawValue, primitiveMap);
    if (resolved == null) return;

    const logicalName = pathParts.join('-'); // e.g. Button-Background-Default
    const baseCss = `component-tokens-${toKebabCase(brandKey)}`;
    const cssVar = `${baseCss}-${toKebabCase(logicalName)}`;
    const tsName = toCamelCase(`${brandKey}-${logicalName}`);

    collected.push({
      cssVar,
      tsName,
      value: resolved,
    });
  }

  walk(brandTokens, []);
  writeThemeFiles(themeName, collected);
});

```

**Step C: Create GitHub Action**
Create `.github/workflows/design-sync.yml` inside your repo.

```yaml
name: Orchestra Design System Sync

on:
  push:
    paths:
      - 'tokens/**/*.json'

# --- FIX 2: CONCURRENCY ---
# If you push 3 times in a row, this cancels the first 2 runs
# so only the latest (most important) one finishes.
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  build-tokens:
    runs-on: ubuntu-latest
    permissions:
      contents: write # Required to push changes back
    
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        with:
          # Fetch full history so rebase works correctly
          fetch-depth: 0 

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          # style-dictionary@5 requires Node >= 22
          node-version: '22'

      - name: Install Dependencies
        run: npm ci

      # Pull latest main first (before generating untracked files)
      - name: Pull latest changes
        run: git pull origin main --rebase

      - name: Run Build Script
        run: npm run tokens:build

      - name: Debug generated outputs
        run: |
          echo "--- src/styles ---"
          ls -la src/styles || true
          echo "--- git status ---"
          git status --porcelain

      - name: Commit React Styles
        uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "🎨 Design System: Updated Light & Dark themes"
          file_pattern: 'src/styles/*.css src/styles/*.ts'
          skip_dirty_check: false

```

#### 3. Usage in React
Once the pipeline runs, import the generated CSS file in your main entry point (e.g., `main.tsx` or `App.js`).

```javascript
// Import the generated themes
import './styles/theme-light.css';
import './styles/theme-dark.css';

function App() {
  // Toggle themes by changing the data attribute
  return (
    <div className="app" data-theme="light">
      <button className="btn-primary">I am styled automatically!</button>
    </div>
  );
}
```


