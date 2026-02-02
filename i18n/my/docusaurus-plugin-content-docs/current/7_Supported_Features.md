---
sidebar_position: 7
---

# ရရှိနိုင်သော လုပ်ဆောင်ချက်များ (Supported Features)

Orchestra Sync ကို ခေတ်မီ Design System တစ်ခုရဲ့ အခြေခံ အဆောက်အဦတွေ ကိုင်တွယ်နိုင်ဖို့ တည်ဆောက်ထားပါတယ်။ လက်ရှိမှာ အောက်ပါတို့ကို ထောက်ပံ့ပေးထားပါတယ်။

## ၁။ Variable အမျိုးအစားများ
UI Design ရဲ့ အဓိက ဘာသာစကားကြီး ၃ မျိုးကို ကျွမ်းကျင်စွာ ပြောဆိုနိုင်ပါတယ် -
*   **🎨 Colors:** Hex codes တွေနဲ့ Transparency ပါဝင်တဲ့ RGBA တန်ဖိုးတွေကို ထုတ်ပေးနိုင်ပါတယ်။
*   **📏 Spacing (Float/Numbers):** Margins, Padding နဲ့ Sizing တွေအတွက် Pixel တန်ဖိုးတွေကို ထုတ်ပေးနိုင်ပါတယ်။
*   **📝 Typography (Strings):** Variables အနေနဲ့ သုံးတာ ရှားပေမယ့်၊ Font-family နာမည်တွေ (သို့) စာသားတွေအတွက် String variable တွေကိုလည်း ထောက်ပံ့ပေးထားပါတယ်။

## ၂။ Multi-Platform Code Syntax
Raw Data တွေချည်းပဲ ထုတ်ပေးတာ မဟုတ်ပါဘူး။ ကွဲပြားတဲ့ Platform တွေနဲ့ ဘယ်လို စကားပြောရမလဲ ဆိုတာကိုပါ Figma ကို သင်ကြားပေးပါတယ်။ Sync လုပ်လိုက်တာနဲ့ သူက Figma ရဲ့ "Code Syntax" ကွက်လပ်တွေမှာ အောက်ပါအတိုင်း အလိုအလျောက် ဖြည့်ပေးသွားမှာပါ -
*   **Web (CSS):** `var(--kebab-case-names)` ပုံစံ။
*   **Android (XML/Kotlin):** `Theme.colors.snake_case_names` ပုံစံ။
*   **iOS (Swift):** `Color.PascalCase.Names` ပုံစံ။

## ၃။ Variable Reference Resolution (Aliasing)
ဆက်နွယ်မှုတွေကို သူက နားလည်ပါတယ်။
*   သင့်ရဲ့ `Button/Primary` variable ဟာ `Blue/500` လို တခြား variable တစ်ခုကို ညွှန်းထားမယ် (Alias လုပ်ထားမယ်) ဆိုရင်၊ Orchestra Sync က ဒီဆက်နွယ်မှုကို ထိန်းသိမ်းထားနိုင်သလောက် ထိန်းသိမ်းပေးပါလိမ့်မယ်။ ဒါမှမဟုတ် Output JSON ထဲမှာ `{Blue/500}` ဆိုပြီး မှန်ကန်တဲ့ တန်ဖိုးကို ညွှန်းဆိုပေးမှာမို့ Styling Dictionary တွေက ဒီအဆင့်ဆင့် တည်ဆောက်မှုကို နားလည်နိုင်မှာပါ။

## ၄။ Multi-Mode Support
Figma ရဲ့ Variable Modes တွေကို အပြည့်အဝ လက်ခံပါတယ်။
*   သင့် Collection ထဲမှာ "Light", "Dark" နဲ့ "High Contrast" modes တွေ ရှိနေရင်၊ Plugin က Variable နာမည်တစ်ခုချင်းစီရဲ့ အောက်မှာ *Mode တစ်ခုချင်းစီအတွက်* တန်ဖိုးတွေ ပါဝင်တဲ့ စနစ်ကျတဲ့ JSON ဖိုင်ကို ထုတ်ပေးမှာ ဖြစ်ပါတယ်။
