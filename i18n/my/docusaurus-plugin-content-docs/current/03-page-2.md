---
sidebar_position: 3
---

# 💻 Web အတွက်ပြင်ဆင်မှုများ

### Setup for React / Vue / HTML
This setup generates CSS Variables and TypeScript definitions automatically.

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
import StyleDictionary from 'style-dictionary';
import fs from 'fs';
import path from 'path';

function autoTokenize(obj) {
  const newObj = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'string' || typeof value === 'number') newObj[key] = { value: value };
    else if (typeof value === 'object' && value !== null) newObj[key] = autoTokenize(value);
    else newObj[key] = value;
  }
  return newObj;
}

function toKebabCase(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const tokenDir = './tokens';
const collections = {};
let maxModesFound = 0;
let leaderCollectionName = '';

if (!fs.existsSync(tokenDir)) {
  console.error("❌ No tokens folder found.");
  process.exit(1);
}

fs.readdirSync(tokenDir).filter(f => f.endsWith('.json')).forEach(file => {
  const content = fs.readFileSync(path.join(tokenDir, file), 'utf8');
  Object.assign(collections, JSON.parse(content));
});

Object.keys(collections).forEach(colName => {
  const keys = Object.keys(collections[colName]).filter(k => typeof collections[colName][k] === 'object');
  if (keys.length > maxModesFound) {
    maxModesFound = keys.length;
    leaderCollectionName = colName;
  }
});

for (let i = 0; i < maxModesFound; i++) {
  const leaderModes = Object.keys(collections[leaderCollectionName]);
  const outputName = toKebabCase(leaderModes[i] || `mode-${i+1}`);
  console.log(`🤖 Building Web Theme: ${outputName}...`);

  StyleDictionary.extend({
    source: ['tokens/**/*.json'],
    parsers: [{
      pattern: /\.json$/,
      parse: ({ contents }) => {
        const cleaned = contents.replace(/\{([^\}]+)\}/g, (match, alias) => `{\${alias.replace(/\//g, '.')}}`);
        const json = JSON.parse(cleaned);
        let result = {};
        Object.keys(json).forEach(col => {
          const content = json[col];
          const keys = Object.keys(content);
          const isMode = keys.every(k => typeof content[k] === 'object');
          if (isMode && keys.length > 0) Object.assign(result, content[keys[i] || keys[0]]);
          else result[col] = content;
        });
        return autoTokenize(result);
      }
    }],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'src/styles/',
        files: [{
          destination: `theme-${outputName}.css`,
          format: 'css/variables',
          selector: `[data-theme="${outputName}"]`
        }]
      },
      ts: {
        transformGroup: 'js',
        buildPath: 'src/styles/',
        files: [{
          destination: `theme-${outputName}.ts`,
          format: 'javascript/es6'
        }]
      }
    }
  }).buildAllPlatforms();
}
```

**Step C: Create GitHub Action**
Create `.github/workflows/design-sync.yml` inside your repo.

```yaml
name: Web Tokens Sync
on:
  push:
    paths:
      - 'tokens/**/*.json'
  concurrency:
    group: ${{ github.workflow }}-${{ github.ref }}
    cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: node build.js
      - run: git pull origin main --rebase --autostash
      - uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "🎨 Update Web Tokens"
          file_pattern: 'src/styles/**'
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

