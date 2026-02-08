---
sidebar_position: 4
---

# Orchestra Design System CLI

Orchestra project များအတွက် design tokens များကို sync လုပ်ခြင်းနှင့် build လုပ်ခြင်းတို့ကို အလိုအလျောက်လုပ်ဆောင်ပေးမည့် CLI tool တစ်ခုဖြစ်သည်။

> **Open Source:** Orchestra CLI သည် open source ဖြစ်ပြီး အောက်ပါ link တွင် ဝင်ရောက်ကြည့်ရှုနိုင်ပါသည်:  
> https://github.com/KaungMyatHein/Orchestra-CLI.git

## ကြိုတင်လိုအပ်ချက်များ

- **Node.js**: v22 သို့မဟုတ် ထို့ထက်မြင့်ရမည်
- **npm**: v7 သို့မဟုတ် ထို့ထက်မြင့်ရမည်

## လုပ်ဆောင်ပုံအဆင့်ဆင့် (Workflow)

1.  **Initialize**: GitHub Actions နှင့် script များ ထည့်သွင်းရန် `orchestra-cli init` ကို run ပါ။
2.  **Sync**: Orchestra plugin ကိုအသုံးပြုပြီး Figma မှ design tokens များကို push လုပ်ပါ။
3.  **Build**: GitHub Action မှ `npm run tokens` ကို အလိုအလျောက် run ပြီး theme file များကို ထုတ်ပေးပါလိမ့်မည်။

## Updated Version သို့ မြှင့်တင်ခြင်း (Upgrading)

ဒီ package ကို Git မှတဆင့် install လုပ်ထားခြင်းဖြစ်သောကြောင့် `npm update` ဖြင့် အလိုအလျောက် update လုပ်၍မရပါ။ နောက်ဆုံး version ကိုရယူရန် install command ကို နောက်တစ်ကြိမ် run ပေးရပါမည်။

```bash
# For local dev dependencies (Web/iOS/Flutter)
npm install git+https://github.com/KaungMyatHein/Orchestra-CLI.git --save-dev

# For global install (Android)
npm install -g git+https://github.com/KaungMyatHein/Orchestra-CLI.git
```

## Platform အလိုက် ပြင်ဆင်ခြင်း (Platform Setup)

သင်အသုံးပြုမည့် Platform ကိုရွေးချယ်ပြီး စတင်နိုင်ပါသည်။

### 🌐 Web (React, HTML/CSS)

**1. Installation**
Project ၏ dev dependencies တွင် CLI ကို install လုပ်ပါ။
```bash
npm install git+https://github.com/KaungMyatHein/Orchestra-CLI.git --save-dev
```

**2. Initialize**
GitHub Actions workflow များနှင့် build script များကို `package.json` တွင် ထည့်သွင်းရန် အောက်ပါ command ကို run ပါ။
```bash
npx orchestra-cli init web
```

**3. Build Tokens**
Tokens များ sync လုပ်လိုက်သည်နှင့် build လုပ်ခြင်း process သည် အလိုအလျောက် run ပါလိမ့်မည်။ ကိုယ်တိုင် manually run လိုပါက -
```bash
npm run tokens
```
**Output Location:** `src/styles/`

---

### 🤖 Android (Kotlin)

**1. Installation**
CLI ကို global သို့မဟုတ် သီးသန့် build toolchain bucket တွင် install လုပ်နိုင်ပါသည်။
```bash
npm install -g git+https://github.com/KaungMyatHein/Orchestra-CLI.git
```

**2. Initialize**
Workflow နှင့် script script များ ထည့်သွင်းရန် -
```bash
npx orchestra-cli init android
```

**3. Build Tokens**
Tokens များ sync လုပ်လိုက်သည်နှင့် build လုပ်ခြင်း process သည် အလိုအလျောက် run ပါလိမ့်မည်။ ကိုယ်တိုင် manually run လိုပါက -
```bash
npm run tokens
```
**Output Location:** `tokens/android/`

---

### 🍎 iOS (Swift)

**1. Installation**
npm မှတဆင့် install လုပ်ပါ။ (Node.js environment ရှိရန် လိုအပ်သည်)
```bash
npm install git+https://github.com/KaungMyatHein/Orchestra-CLI.git --save-dev
```

**2. Initialize**
iOS အတွက် automation များ setup လုပ်ရန် initialize လုပ်ပါ။
```bash
npx orchestra-cli init ios
```

**3. Build Tokens**
Tokens များ sync လုပ်လိုက်သည်နှင့် build လုပ်ခြင်း process သည် အလိုအလျောက် run ပါလိမ့်မည်။ ကိုယ်တိုင် manually run လိုပါက -
```bash
npm run tokens
```
**Output Location:** `tokens/ios/`

---

### 💙 Flutter (Dart)

**1. Installation**
Build environment ထဲသို့ npm မှတဆင့် install လုပ်ပါ။
```bash
npm install git+https://github.com/KaungMyatHein/Orchestra-CLI.git --save-dev
```

**2. Initialize**
Token automation အတွက် project ကို ပြင်ဆင်ရန် -
```bash
npx orchestra-cli init flutter
```

**3. Build Tokens**
Tokens များ sync လုပ်လိုက်သည်နှင့် build လုပ်ခြင်း process သည် အလိုအလျောက် run ပါလိမ့်မည်။ ကိုယ်တိုင် manually run လိုပါက -
```bash
npm run tokens
```
**Output Location:** `tokens/flutter/`

## Development

1. ဤ repository ကို Clone လုပ်ပါ။
2. `npm install` run ပါ။
3. `bin/index.js` တွင် ပြင်ဆင်မှုများ ပြုလုပ်ပါ။

## ပြဿနာဖြေရှင်းနည်းများ (Troubleshooting)

**Debug Mode**
Token generation နှင့်ပတ်သက်ပြီး ပြဿနာတစ်စုံတစ်ရာရှိပါက `TOKENS_DEBUG` environment variable ကိုအသုံးပြုပြီး verbose logging ကိုဖွင့်ကာ စစ်ဆေးနိုင်ပါသည်။

```bash
TOKENS_DEBUG=1 npm run tokens
```

၎င်းက အောက်ပါအချက်အလက်များကို ထုတ်ပြပေးပါလိမ့်မည် -
- `design-tokens.json` ၏ full keys များ
- Platform တစ်ခုစီအတွက် filter လုပ်ထားသော token များ
- ဖန်တီးလိုက်သော directory structure များ
