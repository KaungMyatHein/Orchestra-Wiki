---
sidebar_position: 6
---

# GitHub သို့ Tokens များ Sync လုပ်ခြင်း

Settings များကို ပြင်ဆင်ပြီးပြီဆိုလျှင် sync လုပ်ရန် အဆင်သင့်ဖြစ်ပါပြီ။ **Sync Tokens** tab သို့သွားပါ။

### Step 1: Sync Groups များ ဖန်တီးခြင်း

Design tokens များတွင် color, spacing, typography စသဖြင့် အမျိုးအစားအမျိုးမျိုးရှိပါသည်။ Sync Groups များသည် မည်သည့် Figma Variable Collections များကို မည်သည့် token အမျိုးအစားများနှင့် တွဲဖက် (map) မည်ကို စီစဉ်ပေးသည်။

**Group တစ်ခုဖန်တီးရန်:**
1. **+ Add Group** ကို နှိပ်ပါ။
2. **Color**, **Spacing**, **Typography** ဟူ၍ ရွေးချယ်စရာ ၃ ခုပါသော card တစ်ခုပေါ်လာပါမည်။
3. သင့်ရည်ရွယ်ချက်နှင့် ကိုက်ညီမည့် အမျိုးအစားကို ရွေးချယ်ပါ။

**အမျိုးအစားတစ်ခုချင်းစီ၏ လုပ်ဆောင်ချက်:**
- **Color** → Figma ရှိ `COLOR` အမျိုးအစား variable များကို sync လုပ်သည်။
- **Spacing** → `FLOAT` အမျိုးအစား variable များကို sync လုပ်သည် (spacing, sizing, radii များအတွက် သုံးလေ့ရှိသည်)။
- **Typography** → `STRING` အမျိုးအစား variable များကို sync လုပ်သည် (font families, font weights)။

### Step 2: Collections များ ရွေးချယ်ခြင်း

type တစ်ခုရွေးပြီးသည်နှင့်၊ ကိုက်ညီမှုရှိသော Figma Variable Collections စာရင်းကို တွေ့ရပါမည်။

**တွေ့မြင်ရမည့်အရာများ:**
- ရွေးချယ်လိုက်သော type နှင့် ကိုက်ညီသည့် variable များပါဝင်သော collection များသာ ပေါ်လာပါမည်။
- Collection တစ်ခုစီတွင် ၎င်း၏အမည်နှင့် variable အရေအတွက်ကို ပြသထားပါမည် (ဥပမာ "Primitives • 24 vars")။

**ရွေးချယ်ရန်:**
- ဤ group တွင် ပါဝင်စေလိုသော collection များ၏ checkbox ကို အမှန်ခြစ်ပါ။
- Group တစ်ခုတွင် collection တစ်ခုထက်ပို၍ ရွေးချယ်နိုင်ပါသည်။
- Collection တစ်ခုသည် group တစ်ခုတည်းတွင်သာ ပါဝင်နိုင်သည် (type filtering ဖြင့် ကန့်သတ်ထားသည်)။

**ဥပမာ Setup:**
```
Group 1: Color
  ✓ Primitives (24 vars)
  ✓ Semantic Colors (12 vars)

Group 2: Spacing
  ✓ Spacing Scale (16 vars)
```

### Step 3: GitHub သို့ Sync လုပ်ခြင်း

အဆင်သင့်ဖြစ်လျှင် **Sync to GitHub** ကို နှိပ်ပါ။

#### နောက်ကွယ်တွင် ဘာတွေဖြစ်ပျက်နေသလဲ (Process)

**Phase 1: Variable Processing**

Plugin သည် သင်ရွေးချယ်ထားသော collections များရှိ variable အားလုံးကို လိုက်လံစစ်ဆေးပြီး:
1. **WIP tokens များကို စစ်ထုတ်ခြင်း:** Publishing မှ hide လုပ်ထားသော သို့မဟုတ် `_` (သို့) `.` ဖြင့်စသော variable များကို ကျော်သွားပါမည်။
2. **Aliases များကို ဖြေရှင်းခြင်း:** Variable တစ်ခုက အခြားတစ်ခုကို လှမ်းချိတ်ထားလျှင် (ဥပမာ `Primary = {Blue.500}`)၊ `{Blue/500}` အနေဖြင့် reference လုပ်၍ export ထုတ်ပေးသည်။
3. **အရောင်များကို ပြောင်းလဲခြင်း:** RGB value များကို hex format သို့ ပြောင်းပေးသည် (ဥပမာ `#3B82F6`)။
4. **Code syntax သတ်မှတ်ခြင်း:** Variable တစ်ခုချင်းစီအတွက် platform အလိုက် code syntax များကို သတ်မှတ်ပေးသည်:
   - **WEB:** `var(--button-bg-primary)`
   - **ANDROID:** `Theme.colors.button_bg_primary`
   - **iOS:** `Color.Button.Bg.Primary`

**Phase 2: GitHub Validation**

Plugin မှ အောက်ပါတို့ကို စစ်ဆေးပါမည်:
1. Repository ရှိမရှိနှင့် သင့်တွင် access ရှိမရှိ။
2. သတ်မှတ်ထားသော branch ရှိမရှိ။
3. File path မှန်ကန်မှုရှိမရှိ (မရှိလျှင် အသစ်ဖန်တီးပေးသည်)။

File ရှိပြီးသားဖြစ်ပါက၊ လက်ရှိ content ကိုယူပြီး diff (ကွာခြားချက်) ကို ပြသပေးပါမည်။

**Phase 3: Diff Review Modal**

Modal တစ်ခုပေါ်လာပြီး အောက်ပါတို့ကို ပြသပါမည်:
- **Left column:** GitHub ရှိ လက်ရှိ content
- **Right column:** Figma မှ content အသစ်
- **Color coding:**
  - 🟢 Green = အသစ်ထပ်ထည့်ထားသော အရာများ
  - 🔴 Red = ဖယ်ရှားလိုက်သော အရာများ
  - White = ပြောင်းလဲမှုမရှိသော အရာများ

**Commit message field:** "Update tokens from Figma" ဟု ကြိုတင်ဖြည့်ထားပါသည် (စိတ်ကြိုက်ပြင်ဆင်နိုင်သည်)။

**Phase 4: Pull Request Creation**

**Confirm & Push** ကို နှိပ်လိုက်သောအခါ:

1. **Branch အသစ်ဖန်တီးခြင်း:** `orchestra-update-<timestamp>`
2. **File ကို Commit လုပ်ခြင်း:** သင့် token JSON ကို ၎င်း branch သို့ commit လုပ်သည်။
3. **Pull Request ဖွင့်ခြင်း:**
   - **Title:** သင့် commit message
   - **Body:** "Automated token update from Figma via Orchestra Plugin."
   - **Base:** Settings တွင် သင်သတ်မှတ်ခဲ့သော branch
   - **Head:** အသစ်ဖန်တီးလိုက်သော branch

**Phase 5: Success**

အောင်မြင်ကြောင်း message ပြသပါမည်: 
```
✅ PR Created Successfully! View PR #42
```

လင့်ခ်ကိုနှိပ်ပြီး PR ကို browser တွင် ဖွင့်နိုင်ပါသည်။

---

## Output Format ကို နားလည်ခြင်း

Sync လုပ်လိုက်သော JSON သည် အောက်ပါ structure အတိုင်း ရှိပါမည်:

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

**Structure ရှင်းလင်းချက်:**
- **Top level:** Collection အမည်များ
- **Second level:** Mode အမည်များ (ဥပမာ "Light", "Dark")
- **Nested levels:** `/` separator ဖြင့် ခွဲထားသော Variable path များ
- **Values:** အရောင်များ၊ နံပါတ်များ၊ သို့မဟုတ် alias reference များ

---

## Token Merging Strategy

Target file သည် ရှိပြီးသားဖြစ်ပါက၊ Orchestra Sync သည် **Intelligent Merge** ကို အသုံးပြုသည်:
- Collection နှင့် variable အသစ်များကို ထပ်ထည့်သည်။
- ရှိပြီးသား value များကို update လုပ်သည်။
- **Sync groups ထဲတွင် မပါဝင်သော Collections များကို မထိဘဲ (Preserve) ထားသည်။**

ဆိုလိုသည်မှာ သင်သည် token များကို manual ထပ်ထည့်နိုင်သလို၊ Figma file များစွာမှနေ၍လည်း တူညီသော JSON ဖိုင်တစ်ခုထဲသို့ conflict မဖြစ်စေဘဲ sync လုပ်နိုင်ပါသည်။

---