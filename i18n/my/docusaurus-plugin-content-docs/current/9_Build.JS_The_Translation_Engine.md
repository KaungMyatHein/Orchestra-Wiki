---
sidebar_position: 9
slug: /build-js-translation-engine
---

# Translation အင်ဂျင်

Designers က "Design" ဘာသာစကား (Pixels, Hex Codes) နဲ့ ပြောကြတယ်။ Developers တွေကတော့ "Code" ဘာသာစကား (CSS Variables, Swift, Kotlin) နဲ့ ပြောကြတယ်။ **Build.JS** ဆိုတာ ဒီနှစ်ယောက်ကြားက စကားပြန် (Translator) ပါပဲ။

## The Problem (ပြဿနာ)
သင့်မှာ Figma ထဲမှာ အရမ်းလှပတဲ့ Design System တစ်ခု ရှိနေပါပြီ။ ဒါပေမယ့် သင့် iOS developer က `.swift` ဖိုင် လိုချင်တယ်။ Android dev က `.kt` ဖိုင် လိုချင်ပြီး Web dev ကတော့ `.css` ဖိုင် လိုချင်နေပါတယ်။
ပုံမှန်ဆိုရင် လူတစ်ယောက်က ထိုင်ပြီး `#0055FF` ဆိုတဲ့ ကုဒ်ကို ဘာသာစကား အမျိုးမျိုးဆီ လိုက်ပြောင်းပေးနေရတယ်။ ဒါက အရမ်းကြာသလို၊ ပျင်းစရာလည်း ကောင်းပြီး "Copy-Paste အမှား" တွေလည်း ဖြစ်လွယ်ပါတယ်။

## The Solution (ဖြေရှင်းချက်)
**Build.JS** က သင့် Design System အတွက် **Google Translate** လိုပါပဲ။ Orchestra Sync က ထုတ်ပေးလိုက်တဲ့ "Design Language" (JSON) ကို ယူပြီး ပလက်ဖောင်း အသီးသီးက နားလည်တဲ့ Native ဘာသာစကားတွေဆီ ချက်ချင်း ပြောင်းပေးလိုက်တာပါ။

## How It Works (အလုပ်လုပ်ပုံ)

### 1. The Input (Design Tokens)
Figma က ရလာတဲ့ ကုန်ကြမ်းတွေနဲ့ စတင်ပါတယ်။ ဒါကို **Design Tokens** (သင့် Brand ရဲ့ DNA) လို့ ခေါ်ပါတယ်။
*   `primary-color`: `#0055FF`
*   `spacing-small`: `8px`

### 2. The Processing (Translation)
Script က ဒီဒေတာအကြမ်းတွေကို စီမံဆောင်ရွက်ပါတယ်-
*   **Aliasing**: `Button/Bg/Primary` ဟာ တကယ်တော့ `Brand/Blue` ကို ညွှန်းနေတာပဲ ဆိုတာကို နားလည်အောင် လုပ်ပါတယ်။
*   **Formatting**: Web ဆိုရင် `primary-color`၊ iOS ဆိုရင် `primaryColor` စသဖြင့် ပလက်ဖောင်းတစ်ခုချင်းစီရဲ့ စံနှုန်းတွေအတိုင်း အမည်ပြောင်းပေးပါတယ်။

### 3. The Output (Native Code)
နောက်ဆုံးမှာတော့ Developer တွေ တကယ်သုံးမယ့် ဖိုင်တွေကို ထုတ်ပေးလိုက်ပါတယ်-
*   **Web**: `theme.css` (CSS Variables)
*   **iOS**: `Theme.swift` (Structs/Enums)
*   **Android**: `Theme.kt` (Objects)
*   **Flutter**: `Theme.dart` (Classes)

## Code Reference
ဒီဘာသာပြန်စက် (Translation Engine) ကို သင့်ပရောဂျက်မှာ သုံးနိုင်ဖို့ အောက်က script ကို ကူးယူထည့်သွင်းပါ။

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

function toSnakeCase(str) {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        .replace(/[^a-zA-Z0-9]+/g, '_')
        .replace(/_{2,}/g, '_')
        .replace(/^_+|_+$/g, '')
        .toLowerCase();
}

function toUpperSnakeCase(str) {
    return toSnakeCase(str).toUpperCase();
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

// ---- per-platform writers ----

function writeWebThemeFiles(themeName, tokens) {
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

function writeAndroidThemeFiles(themeName, tokens) {
    const outDir = path.join('tokens', 'android');
    ensureDir(outDir);
    const slug = toKebabCase(themeName);
    const filePath = path.join(outDir, `theme_${slug}.kt`);

    const lines = [
        '// Auto-generated from tokens/design-tokens.json',
        '// Do not edit manually.',
        '',
        'package tokens',
        '',
        `object ${toCamelCase(themeName[0].toUpperCase() + themeName.slice(1))}ThemeTokens {`,
    ];

    tokens.forEach((t) => {
        const constName = toUpperSnakeCase(t.logicalName);
        lines.push(`  const val ${constName} = "${t.value}"`);
    });

    lines.push('}', '');
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
}

function writeIOSTokenFiles(themeName, tokens) {
    const outDir = path.join('tokens', 'ios');
    ensureDir(outDir);
    const slug = toKebabCase(themeName);
    const filePath = path.join(outDir, `Theme${slug[0].toUpperCase()}${slug.slice(1)}.swift`);

    const typeName = `${themeName}ThemeTokens`;
    const lines = [
        '// Auto-generated from tokens/design-tokens.json',
        '// Do not edit manually.',
        '',
        'import Foundation',
        '',
        `public enum ${typeName} {`,
    ];

    tokens.forEach((t) => {
        const constName = toCamelCase(t.logicalName);
        lines.push(`  public static let ${constName} = "${t.value}"`);
    });

    lines.push('}', '');
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
}

function writeFlutterThemeFiles(themeName, tokens) {
    const outDir = path.join('tokens', 'flutter');
    ensureDir(outDir);
    const slug = toKebabCase(themeName);
    const filePath = path.join(outDir, `theme_${slug}.dart`);

    const className = `${themeName}ThemeTokens`;
    const lines = [
        '// Auto-generated from tokens/design-tokens.json',
        '// Do not edit manually.',
        '',
        'class ' + className + ' {',
    ];

    tokens.forEach((t) => {
        const constName = toCamelCase(t.logicalName);
        lines.push(`  static const String ${constName} = "${t.value}";`);
    });

    lines.push('}', '');
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
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

// Allow flexible collection names – detect primitives/components dynamically,
// but also let callers override via environment variables:
//   TOKENS_PRIMITIVE_KEY, TOKENS_COMPONENT_KEY
const topLevelKeys = Object.keys(raw);

let primitiveKey = process.env.TOKENS_PRIMITIVE_KEY;
let componentKey = process.env.TOKENS_COMPONENT_KEY;

if (!primitiveKey || !raw[primitiveKey]) {
    // Prefer keys that *look like* base primitives, but this is only a fallback.
    primitiveKey =
        topLevelKeys.find((k) => /primitive/i.test(k)) ??
        topLevelKeys.find((k) => /base/i.test(k)) ??
        topLevelKeys[0];
}

if (!componentKey || !raw[componentKey]) {
    // Prefer keys that look like semantic / brand / component tokens.
    componentKey =
        topLevelKeys.find((k) => /component/i.test(k)) ??
        topLevelKeys.find((k) => /brand/i.test(k)) ??
        topLevelKeys.find((k) => k !== primitiveKey) ??
        topLevelKeys[1];
}

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

const platformArg = (process.argv[2] || 'web').toLowerCase();
const validPlatforms = new Set(['web', 'android', 'ios', 'flutter', 'all']);

if (!validPlatforms.has(platformArg)) {
    console.error(
        `❌ Unknown platform "${platformArg}". Use one of: web, android, ios, flutter, all.`,
    );
    process.exit(1);
}

const targetPlatforms =
    platformArg === 'all' ? ['web', 'android', 'ios', 'flutter'] : [platformArg];

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
            brandKey,
            logicalName,
            cssVar,
            tsName,
            value: resolved,
        });
    }

    walk(brandTokens, []);

    if (targetPlatforms.includes('web')) {
        writeWebThemeFiles(themeName, collected);
    }
    if (targetPlatforms.includes('android')) {
        writeAndroidThemeFiles(themeName, collected);
    }
    if (targetPlatforms.includes('ios')) {
        writeIOSTokenFiles(themeName, collected);
    }
    if (targetPlatforms.includes('flutter')) {
        writeFlutterThemeFiles(themeName, collected);
    }
});
```
