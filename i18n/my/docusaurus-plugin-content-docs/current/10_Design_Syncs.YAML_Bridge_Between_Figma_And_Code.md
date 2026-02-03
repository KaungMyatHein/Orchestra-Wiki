---
sidebar_position: 10
---

# Figma နဲ့ Code ကြားက တံတား

Figma က ကျွန်းတစ်ကျွန်း ဖြစ်သလို၊ သင့် Codebase ကလည်း ကျွန်းတစ်ကျွန်းပါပဲ။ **Design Syncs** က ဒီကျွန်းနှစ်ခုကြားက ပေါင်းကူးတံတားပါ။ ဒီဇိုင်းအပြောင်းအလဲတွေကို သင်ကိုယ်တိုင် Figma က ထွက်စရာမလိုဘဲ Developer တွေဆီ အလိုအလျောက် ပို့ဆောင်ပေးမယ့် "**Automated Courier**" (အလိုအလျောက် စာပို့လုလင်) တစ်ဦးလို့ မြင်ကြည့်နိုင်ပါတယ်။

## The Problem (ပြဿနာ)
"အရောင်တွေ ပြောင်းလိုက်ပြီလား?"
"ဘယ်ဖိုင်က နောက်ဆုံးတစ်ခုလဲ?"
"Spacing အသစ်တွေ Push လုပ်ဖို့ မေ့သွားတယ်"

လူကိုယ်တိုင် Handoff လုပ်ရတာ ရှုပ်ထွေးပါတယ်။ မှတ်ဉာဏ်တွေ၊ Email တွေကို အားကိုးနေရတယ်။ ဒီဇိုင်နာက အရောင်ပြောင်းလိုက်ပေမယ့် Developer ကို ပြောဖို့ မေ့သွားရင် Product ကြီးတစ်ခုလုံး ကမောက်ကမ ဖြစ်သွားနိုင်ပါတယ်။

## The Solution (ဖြေရှင်းချက်)
**Design Syncs** က ဒီကိစ္စကို အလိုအလျောက် လုပ်ဆောင်ပေးပါတယ်။ သင် Plugin ကနေ Push လိုက်တာနဲ့၊ ဒီ Workflow က နိုးထလာပြီး၊ သင့် Token တွေကို သယ်ဆောင်၊ ဘာသာပြန်ပြီး GitHub repository ထဲကို အန္တရာယ်ကင်းကင်း ပို့ဆောင်ပေးလိုက်ပါတယ်။

## The Workflow (လုပ်ငန်းစဉ်)

### 1. The Trigger (အစပြုခြင်း)
ဒီဇိုင်နာက စတင်လှုပ်ရှားလိုက်တာနဲ့ လုပ်ငန်းစဉ် စတင်ပါတယ်-
*   **Designer Action**: Figma မှာ Style တွေ ပြင်မယ် -> "Push to GitHub" ကို နှိပ်မယ်။
*   **System Action**: "Robot" ကြီး နိုးထလာပါမယ်။

### 2. Safety First (လုံခြုံရေး)
အကယ်၍ သင်က ၁၀ စက္ကန့်အတွင်း ၃ ကြိမ်လောက် ဆက်တိုက် Push လုပ်မိရင်လည်း စနစ်က "အလည်" ပါ။ ရှေ့က ၂ ကြိမ်ကို ဖျက်သိမ်းလိုက်ပြီး နောက်ဆုံး (လတ်တလောအဖြစ်ဆုံး) ဗားရှင်းကိုပဲ အလုပ်လုပ်ပေးမှာပါ။ ဒါက ပဋိပက္ခတွေကို တားဆီးပေးသလို စွမ်းအင်လည်း သက်သာစေပါတယ်။

### 3. The Automation (အလိုအလျောက် လုပ်ဆောင်ခြင်း)
"Robot" က အောက်ပါအဆင့်တွေကို လုပ်ဆောင်ပါတယ်-
1.  **Preparation**: နောက်ဆုံးရ Code တွေကို ဒေါင်းလုဒ်လုပ်မယ်။
2.  **Tool Setup**: Node.js ကို တပ်ဆင်မယ်။
3.  **Translation**: သင့် Token တွေကို ပြောင်းလဲပစ်ဖို့ **Build.JS** အင်ဂျင်ကို မောင်းနှင်မယ်။
4.  **Verification**: ဖိုင်အသစ်တွေ (CSS, Swift, etc.) တကယ် ထွက်မထွက် စစ်ဆေးမယ်။

### 4. The Delivery (ပေးပို့ခြင်း)
နောက်ဆုံးအနေနဲ့၊ အားလုံးကို ထုပ်ပိုးပြီး `🎨 Design Token Updates` ဆိုတဲ့ ခေါင်းစဉ်နဲ့ **Commit** လုပ်လိုက်ပါတယ်။ Developer တွေအနေနဲ့ "Pull" လုပ်လိုက်တာနဲ့ ဒီဇိုင်းအသစ်တွေကို သူတို့ Code တွေထဲမှာ တန်းမြင်နေရပါပြီ။

## GitHub Workflow Code
သင့် Repository ရဲ့ `.github/workflows/design-syncs.yml` အောက်မှာ ဒီ YAML ဖိုင်လေး ထည့်ထားပေးပါ။

```yaml
# .github/workflows/build-tokens.yml
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
        run: npm run tokens

      - name: Debug generated outputs
        run: |
          echo "--- src/styles ---"
          ls -la src/styles || true
          echo "--- git status ---"
          git status --porcelain

      - name: Commit React Styles
        uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "🎨 Design Token Updates"
          file_pattern: 'src/styles/*.css src/styles/*.ts'
          skip_dirty_check: false
```