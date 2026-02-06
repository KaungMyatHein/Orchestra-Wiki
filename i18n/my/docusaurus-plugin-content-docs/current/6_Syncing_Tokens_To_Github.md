---
sidebar_position: 6
---

# GitHub သို့ Tokens များ Sync လုပ်ခြင်း

Settings များ ပြင်ဆင်ပြီးသောအခါ၊ sync လုပ်ရန် အသင့်ရှိပြီ။ **Sync Tokens** tab သို့ ပြောင်းပါ။

### အဆင့် ၁: Sync Groups ဖန်တီးခြင်း

Design tokens များတွင် ပုံစံ အမျိုးမျိုး ရှိသည်—အရောင်များ၊ spacing များ၊ typography များ။ Sync Groups များသည် မည်သည့် Figma Variable Collections များကို မည်သည့် token အမျိုးအစားများနှင့် ချိတ်ဆက်မည်ကို စီစဉ်ပေးသည်။

**Group ဖန်တီးရန်:**
1. **+ Add Group** ကို နှိပ်ပါ
2. ရွေးချယ်စရာ သုံးခုပါသော card အသစ်တစ်ခု ပေါ်လာမည်: **Color**, **Spacing**, **Typography**
3. သင့် ရည်ရွယ်ချက်နှင့် ကိုက်ညီသော အမျိုးအစားကို ရွေးချယ်ပါ

**အမျိုးအစားတစ်ခုချင်းစီ ဘာလုပ်သနည်း:**
- **Color** → Figma မှ `COLOR` အမျိုးအစား variables များကို sync လုပ်သည်
- **Spacing** → `FLOAT` အမျိုးအစား variables များကို sync လုပ်သည် (များသောအားဖြင့် spacing၊ sizing၊ radii အတွက် အသုံးပြုသည်)
- **Typography** → `STRING` အမျိုးအစား variables များကို sync လုပ်သည် (font families၊ font weights)

### အဆင့် ၂: Collections ရွေးချယ်ခြင်း

အမျိုးအစား ရွေးပြီးနောက်၊ သင်၏ Figma Variable Collections များ၏ စာရင်းကို ကိုက်ညီမှုအရ စစ်ထုတ်ပြီး မြင်ရမည်။

**သင် မြင်ရသည့်အရာ:**
- ကိုက်ညီသော အမျိုးအစား၏ variables များပါရှိသော collections များသာ ပေါ်လာမည်
- Collection တစ်ခုစီသည် ၎င်း၏ အမည်နှင့် variable အရေအတွက်ကို ပြသည် (ဥပမာ "Primitives • 24 vars")

**ရွေးချယ်ရန်:**
- ဤ group တွင် ထည့်သွင်းလိုသော collection အားလုံးအတွက် checkbox များကို အမှန်ခြစ်ပါ
- Group တစ်ခုလျှင် collection များစွာ ရွေးချယ်နိုင်သည်
- Collections များသည် တစ်ကြိမ်လျှင် group တစ်ခုတွင်သာ ပါဝင်နိုင်သည် (အမျိုးအစား စစ်ထုတ်မှုဖြင့် အတည်ပြုထားသည်)

**ဥပမာ setup:**
```
Group 1: Color
  ✓ Primitives (24 vars)
  ✓ Semantic Colors (12 vars)

Group 2: Spacing
  ✓ Spacing Scale (16 vars)
```

### အဆင့် ၃: GitHub သို့ Sync လုပ်ခြင်း

အသင့်ရှိသောအခါ၊ **Sync to GitHub** ကို နှိပ်ပါ။

#### နောက်ကွယ်တွင် ဘာဖြစ်သနည်း

**အဆင့် ၁: Variable Processing**

Plugin သည် သင် ရွေးချယ်ထားသော collections ရှိ variable အားလုံးကို ကြည့်ရှုပြီး:
1. **WIP tokens များကို စစ်ထုတ်သည်:** Publishing မှ ဖျောက်ထားသော သို့မဟုတ် `_` သို့မဟုတ် `.` ဖြင့် စသော variables များကို ကျော်သည်
2. **Aliases များကို ဖြေရှင်းသည်:** Variable တစ်ခုသည် အခြားတစ်ခုကို ကိုးကားပါက (ဥပမာ `Primary = {Blue.500}`)၊ ၎င်းသည် reference ကို `{Blue/500}` အဖြစ် export လုပ်သည်
3. **အရောင်များကို ပြောင်းသည်:** RGB တန်ဖိုးများကို hex format သို့ ပြောင်းသည် (ဥပမာ `#3B82F6`)
4. **Code syntax ထည့်သည်:** Variable တစ်ခုချင်းစီအတွက်၊ plugin က platform-specific code syntax များကို သတ်မှတ်သည်:
   - **WEB:** `var(--button-bg-primary)`
   - **ANDROID:** `Theme.colors.button_bg_primary`
   - **iOS:** `Color.Button.Bg.Primary`

**အဆင့် ၂: GitHub Validation**

Plugin သည် အတည်ပြုသည်:
1. Repository ရှိပြီး သင့်တွင် ဝင်ခွင့်ရှိခြင်း
2. သတ်မှတ်ထားသော branch ရှိခြင်း
3. File လမ်းကြောင်း မှန်ကန်ခြင်း (လိုအပ်ပါက ဖန်တီးသည်)

File ရှိပြီးသားဖြစ်ပါက၊ ၎င်းသည် လက်ရှိ content ကို ရယူပြီး diff တစ်ခု ပြသသည်။

**အဆင့် ၃: Diff Review Modal**

Modal တစ်ခု ပေါ်လာပြီး ဖော်ပြသည်:
- **ဘယ်ဘက် column:** GitHub ရှိ လက်ရှိ content
- **ညာဘက် column:** Figma မှ content အသစ်
- **အရောင် ကုဒ်:**
  - 🟢 အစိမ်း = ထပ်ထည့်မှုများ
  - 🔴 အနီ = ဖယ်ရှားမှုများ
  - အဖြူ = မပြောင်းလဲ

**Commit message field:** "Update tokens from Figma" ဖြင့် ကြိုတင်ဖြည့်ထားသည် (စိတ်ကြိုက် ပြင်ဆင်နိုင်သည်)

**အဆင့် ၄: Pull Request ဖန်တီးခြင်း**

**Confirm & Push** ကို နှိပ်သောအခါ:

1. **Branch အသစ် ဖန်တီးသည်:** `orchestra-update-<timestamp>`
2. **File ကို Commit လုပ်သည်:** သင်၏ token JSON ကို ဤ branch သို့ commit လုပ်သည်
3. **Pull Request ဖွင့်သည်:**
   - **Title:** သင်၏ commit message
   - **Body:** "Automated token update from Figma via Orchestra Plugin."
   - **Base:** Settings တွင် သတ်မှတ်ထားသော branch
   - **Head:** အသစ် ဖန်တီးထားသော branch

**အဆင့် ၅: အောင်မြင်မှု**

Status message ပြသသည်: 
```
✅ PR Created Successfully! View PR #42
```

Link သည် နှိပ်နိုင်ပြီး သင်၏ browser တွင် PR ကို ဖွင့်သည်။

---

## Output Format နားလည်ခြင်း

Sync လုပ်ထားသော JSON သည် ဤဖွဲ့စည်းပုံကို လိုက်နာသည်:

```json
{
  "Primitives": {
    "Light": {
      "Blue": {
        "500": "#3B82F6"
      }
    },
    "Dark": {
      "Blue": {
        "500": "#60A5FA"
      }
    }
  },
  "Semantic Colors": {
    "Light": {
      "Button": {
        "Bg": {
          "Primary": "{Blue/500}"
        }
      }
    }
  }
}
```

**ဖွဲ့စည်းပုံ ခွဲခြမ်းစိတ်ဖြာချက်:**
- **Top level:** Collection အမည်များ
- **Second level:** Mode အမည်များ (ဥပမာ "Light", "Dark")
- **Nested levels:** `/` separators ဖြင့် ခွဲထားသော Variable လမ်းကြောင်း
- **Values:** ဖြေရှင်းပြီး အရောင်များ၊ နံပါတ်များ၊ သို့မဟုတ် alias ကိုးကားချက်များ

---

## Token Merging Strategy

Target file ရှိပြီးသားဖြစ်ပါက၊ Orchestra Sync သည် **ဉာဏ်ရှိသော merge** ကို အသုံးပြုသည်:
- Collection နှင့် variable အသစ်များကို ထပ်ထည့်သည်
- ရှိပြီးသား တန်ဖိုးများကို update လုပ်သည်
- **သင်၏ sync groups များဖြင့် မစီမံသော Collections များကို ထိန်းသိမ်းထားသည်**

ဆိုလိုသည်မှာ သင်သည် token များကို လက်ဖြင့် ထပ်ထည့်နိုင်သည် သို့မဟုတ် Figma file များစွာကို တူညီသော JSON သို့ ပဋိပက္ခမရှိဘဲ sync လုပ်နိုင်သည်။

---

## ပြဿနာ ဖြေရှင်းခြင်း

### "Not authenticated. Please go to Settings to connect GitHub."

**အကြောင်းရင်း:** Personal Access Token မသိမ်းဆည်းရသေးပါ။

**ဖြေရှင်းချက်:** Settings → မှန်ကန်သော PAT ကို သိမ်းဆည်းပါ

### "Repository 'owner/repo' not found."

**ဖြစ်နိုင်သော အကြောင်းရင်းများ:**
- Owner သို့မဟုတ် Repo အမည်တွင် စာလုံးပေါင်း အမှား
- Repository သည် private ဖြစ်ပြီး သင်၏ token တွင် ဝင်ခွင့် မရှိပါ
- Repository မရှိပါ

**ဖြေရှင်းချက်:** Owner/repo အမည်များကို နှစ်ကြိမ် စစ်ဆေးပါ။ Private repositories အတွက် သင်၏ token တွင် `repo` scope ရှိကြောင်း သေချာပါစေ။

### "Branch 'develop' not found."

**အကြောင်းရင်း:** Branch အမည်သည် repository တွင် မရှိပါ။

**ဖြေရှင်းချက်:** GitHub တွင် branch ကို အရင် ဖန်တီးပါ၊ သို့မဟုတ် `main` ကဲ့သို့ ရှိပြီးသား branch သို့ ပြောင်းပါ။

### "Token missing permissions. Enable 'Pull requests' (Read and Write)."

**အကြောင်းရင်း:** သင်၏ GitHub token တွင် လိုအပ်သော scope များ မရှိပါ။

**ဖြေရှင်းချက်:** Token အသစ်ကို ဖန်တီးပါ:
- Classic: `repo` scope
- Fine-grained: **Contents** (Read and Write) + **Pull requests** (Read and Write)

---

## အကောင်းဆုံး အလေ့အကျင့်များ

### ၁. သီးခြား Branches အသုံးပြုပါ
သင်၏ base အဖြစ် `design-tokens` သို့မဟုတ် `figma-sync` branch ကို ဖန်တီးပါ။ ၎င်းသည် အလိုအလျောက် commit များကို သင်၏ ပင်မ development လုပ်ငန်းစဉ်မှ သီးခြား ထားသည်။

### ၂. Merge မလုပ်မီ PR များကို ပြန်လည်သုံးသပ်ပါ
ထုတ်ပေးသော PR ကို အမြဲ ပြန်လည်သုံးသပ်ပါ။ စစ်ဆေးပါ:
- မမျှော်လင့်ထားသော ဖျက်မှုများ မရှိခြင်း
- အရောင် တန်ဖိုးများ မှန်ကန်ခြင်း
- Alias ကိုးကားချက်များ မှန်ကန်စွာ format လုပ်ထားခြင်း

### ၃. ပုံမှန် Sync လုပ်ပါ
ပို၍ မကြာခဏ sync လုပ်သည်နှင့်အမျှ၊ PR တစ်ခုစီသည် ပို၍ သေးငယ်လာမည်။ PR သေးငယ်လေလေ၊ ပြန်လည်သုံးသပ်ရလွယ်လေလေ၊ merge conflict များ ဖြစ်နိုင်ခြေ နည်းလေလေ ဖြစ်သည်။

### ၄. သင်၏ Sync Groups များကို ရှင်းလင်းစွာ အမည်ပေးပါ
သင့်တွင် file များစွာက တူညီသော repo သို့ sync လုပ်နေပါက၊ Figma တွင် ရှင်းလင်းသော collection အမည်များကို အသုံးပြုပြီး စိတ်ရှုပ်ထွေးခြင်းကို ရှောင်ပါ။

### ၅. Dummy Repo ဖြင့် အရင် စမ်းသပ်ပါ
သင်၏ production design system သို့ sync မလုပ်မီ၊ လုပ်ငန်းစဉ်ကို နားလည်ရန် ပစ်ထားနိုင်သော repository တစ်ခုဖြင့် စမ်းသပ်ပါ။

---

## နောက်ထပ် ဘာရှိသနည်း?

Tokens များ GitHub တွင် ရောက်ရှိပြီးသောအခါ:
- **CI/CD pipelines** များက ၎င်းတို့ကို platform-specific format များ (CSS variables၊ Swift enums၊ စသည်) သို့ ပြောင်းလဲနိုင်သည်
- **Developers** များက JSON ကို build tools များသို့ တိုက်ရိုက် import လုပ်နိုင်သည်
- **Design systems** များသည် implementation နှင့် ပြီးပြည့်စုံစွာ sync ဖြစ်နေမည်

Orchestra Sync သည် တံတားဖြစ်သည်။ သင် ထိပ်တွင် တည်ဆောက်သည့်အရာသည် အကန့်အသတ်မရှိပါ။