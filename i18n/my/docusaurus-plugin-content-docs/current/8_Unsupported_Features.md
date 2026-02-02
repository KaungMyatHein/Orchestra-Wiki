---
sidebar_position: 8
---

# လက်ရှိ မပါဝင်သေးသော အရာများ (Limitations)

ကိရိယာတစ်ခုကို ထိထိရောက်ရောက် အသုံးပြုဖို့ သူ့ရဲ့ ဘောင်တွေကို သိရှိထားရပါမယ်။ အောက်ပါအချက်တွေကတော့ Orchestra Sync က လက်ရှိ *မလုပ်ဆောင်နိုင်သေးသော* အရာများ ဖြစ်ပါတယ်။

## ၁။ Old-School Styles
*   **No Paint Styles:** Color styles အဟောင်းတွေကို မမြင်နိုင်သလို၊ Export လည်း မထုတ်ပေးနိုင်ပါဘူး။
*   **No Text Styles:** Typography compound styles (Font size + Line height + Weight ပေါင်းစပ်ထားသော Styles) တွေကို Export မထုတ်နိုင်ပါဘူး။ သီးခြားစီ ခွဲထားတဲ့ Individual Variables တွေကိုပဲ ရပါတယ်။

## ၂။ ပုံများနှင့် Assets များ
*   ဒါက Code-sync tool တစ်ခုပါ၊ Asset Manager မဟုတ်ပါဘူး။ သင့် Icons တွေ၊ PNGs တွေ၊ SVGs တွေကို Export ထုတ်ပေးမှာ မဟုတ်ပါဘူး။ အဲဒါတွေအတွက်တော့ ပုံမှန် Asset Pipeline ကိုပဲ ဆက်လက် အသုံးပြုရပါမယ်။

## ၃။ Two-Way Syncing (Import)
*   လမ်းကြောင်းက တစ်ဖက်သွား လမ်းကြောင်းပါ - **Figma ➔ GitHub**။
*   GitHub ပေါ်က JSON ဖိုင်ကို ပြင်လိုက်လို့ Figma ဖိုင်ထဲမှာ လာပြောင်းသွားမှာ *မဟုတ်ပါဘူး*။ Figma ဟာ "Source of Truth" ဖြစ်ပါတယ်။ GitHub ပေါ်က JSON ကို ကိုယ့်ဘာသာ သွားပြင်ထားရင်တောင်၊ နောက်တစ်ခါ Sync လုပ်လိုက်တာနဲ့ Figma ထဲက အတိုင်းပဲ ပြန်ဖြစ်သွား (Overwrite လုပ်ခံရ) မှာပါ။

## ၄။ ရှုပ်ထွေးသော Token ပြောင်းလဲမှုများ (Complex Transforms)
*   Code Syntax တွေကို ထုတ်ပေးနိုင်ပေမယ့်၊ သူက Raw, structured JSON ဖိုင်ကိုပဲ ထုတ်ပေးတာပါ။ Plugin *အတွင်း* မှာတင် Style Dictionary လိုမျိုး run ပြီး `.css` တို့ `.xml` တို့ တန်းထွက်လာအောင်မလုပ်ပေးပါဘူး။
*   သူက *Source* JSON ကိုပဲ ပေးတာပါ။ သင့် Engineering Team အနေနဲ့ ဒီ JSON ကို ယူပြီး App မှာ သုံးမယ့် ဖိုင်တွေအဖြစ် ပြောင်းဖို့ Build script အသေးစားလေး (Style Dictionary လိုမျိုး သုံးပြီး) ရေးဖို့ လိုပါလိမ့်မယ်။

## ၅။ Boolean Variables
*   လောလောဆယ်မှာ Plugin က ရုပ်ထွက်ဆိုင်ရာ Visual Tokens (Color, Spacing) တွေကိုပဲ အာရုံစိုက်ပါတယ်။ Boolean logic variable တွေက ဒီလို Design Tokens သဘောတရားနဲ့ တိုက်ရိုက် သိပ်မသက်ဆိုင်လှတာမို့လောလောဆယ် Sync မလုပ်ပေးပါဘူး။
