---
slug: /
sidebar_position: 1
---

# 🎻 နိဒါန်း

## Orchestra Syncs ဆိုတာဘာလဲ?

**Orchestra Syncs** ဆိုသည်မှာ Figma Variables နှင့် သင့် codebase များ ကို ချိတ်ဆက်ပေးသော အလိုအလျောက်လုပ်ဆောင်သည့် Design System Pipeline တစ်ခုဖြစ်ပါသည်။
ဒီစနစ်က Design Token များကို **Live Data** အဖြစ်သဘောထားပြီး manual handoff ကို မလိုအပ်တော့အောင် ပြုလုပ်ပေးပါသည်။

ဒီဇိုင်နာများက screenshot များ သို့မဟုတ် hex code များ ပို့ပေးနေရာမှ လွဲ၍
“Orchestra” က token များကို Web, iOS, Android repository များဆီသို့ တိုက်ရိုက်ညှိနှိုင်းပို့ဆောင် ပေးပါသည်။

### 🎼 Token တစ်ခု၏ Lifecycle


1.  **Design:** ဒီဇိုင်နာများက Figma ထဲရှိ variables များကို ပြင်ဆင်ရပါမည်။
2.  **Sync:** Orchestra Plugin က အပြောင်းအလဲများကို JSON အဖြစ် GitHub သို့ push လုပ်ရပါမည်။
3.  **Build:** GitHub Action က အထူးပြု build.js script ကို trigger လုပ်ပါသည်။
4.  **Deploy:** Script သည် JSON ကို CSS, Swift, သို့မဟုတ် Kotlin အဖြစ် ပြောင်းလဲပြီး repo ထဲသို့ ပြန်လည် commit လုပ်ပါသည်။

### ✨ အဓိက အကျိုးကျေးဇူးများ
* **Single Source of Truth**: အရာအားလုံးကို Figma ထဲမှာသာ စီမံခန့်ခွဲပြီး Variable Value က အလိုအလျောက် ပြောင်းလဲပါသည်။
* **Multi-Platform Native**: Web, iOS, Android အတွက် performance မြင့် native code ကို ထုတ်ပေးနိုင်ပါသည်။
* **Intelligent Automation**: race condition နှင့် name collision များကို ကာကွယ်ပေးနိုင်သော automation စနစ် ပါရှိပါသည်။
