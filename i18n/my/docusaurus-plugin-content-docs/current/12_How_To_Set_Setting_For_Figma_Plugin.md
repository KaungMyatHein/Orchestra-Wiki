---
sidebar_position: 12
---

# Figma Plugin က Setting ကို ပြင်ဆင်နည်း

### GitHub Configuration Panel

**Settings** tab ကို ဖွင့်သောအခါ၊ "GitHub Configuration" ခေါင်းစဉ်ပါ သပ်ရပ်သော form တစ်ခု မြင်ရမည်။ ဤနေရာရှి field တိုင်းသည် အရေးကြီးသည်။

#### ၁. Personal Access Token (PAT)

**၎င်းသည် အဘယ်နည်း:** GitHub သို့ သင်၏ ဒစ်ဂျစ်တယ် နိုင်ငံကူးလက်မှတ်။

**အရေးကြီးသည့်အကြောင်းအရင်း:** ဤ token မရှိပါက၊ plugin သည် သင်၏ repository သို့ ရေးသားနိုင်မည် မဟုတ်ပါ။ GitHub သည် write လုပ်ဆောင်ချက်အားလုံးအတွက် authentication လိုအပ်သည်။

**ရယူနည်း:**
1. Settings panel ရှိ အပြာရောင် **"Create Token"** link ကို နှိပ်ပါ
2. ၎င်းသည် လိုအပ်သော scope များ ကြိုတင်ရွေးချယ်ပြီးသား GitHub ၏ token ဖန်တီးမှု စာမျက်နှာကို ဖွင့်ပေးမည်
3. **Classic tokens** အတွက်: `repo` scope ကို အမှန်ခြစ်ထားကြောင်း သေချာပါစေ
4. **Fine-grained tokens** အတွက်: **Contents** (Read and Write) နှင့် **Pull requests** (Read and Write) ကို ဖွင့်ပါ
5. ၎င်းကို ရှင်းလင်းသော အမည်တစ်ခု ပေးပါ ဥပမာ "Orchestra Sync - Design Tokens"
6. ထုတ်ပေးသော token ကို ကူးယူပါ (တစ်ကြိမ်သာ မြင်ရမည်!)

**သိမ်းဆည်းနည်း:**
1. Token ကို **"Personal Access Token (PAT)"** field တွင် ကပ်ထည့်ပါ
2. **Save** ကို နှိပ်ပါ
3. Status indicator သည် 🔴 **Not connected** မှ 🟢 **Connected** သို့ ပြောင်းသွားမည်

> **လုံခြုံရေး မှတ်ချက်:** Token သည် Figma ၏ client storage တွင် လုံခြုံစွာ သိမ်းဆည်းထားသည်။ ၎င်းသည် GitHub API calls များ ပြုလုပ်သောအခါမျှသာ သင်၏ စက်မှ ထွက်သည်။

#### ၂. Repo Owner

**၎င်းသည် အဘယ်နည်း:** Repository ပိုင်ဆိုင်သော GitHub username သို့မဟုတ် organization name။

**ဥပမာများ:**
- `https://github.com/facebook/react` အတွက် → Owner သည် `facebook`
- `https://github.com/your-username/design-system` အတွက် → Owner သည် `your-username`

**အရေးကြီးသည့်အကြောင်းအရင်း:** Plugin သည် မည်သူ့ repository ကို ပစ်မှတ်ထားမည်ကို သိရန် လိုအပ်သည်။ ဤနေရာတွင် စာလုံးပေါင်း အမှားရှိပါက "Repository not found" အမှားများ ဖြစ်ပွားမည်။

#### ၃. Repo Name

**၎င်းသည် အဘယ်နည်း:** Owner ၏ account အတွင်းရှိ သီးခြား repository အမည်။

**ဥပမာများ:**
- `https://github.com/facebook/react` အတွက် → Repo သည် `react`
- `https://github.com/your-company/design-tokens` အတွက် → Repo သည် `design-tokens`

#### ၄. Branch

**၎င်းသည် အဘယ်နည်း:** ပြောင်းလဲမှုများ ရောက်သွားစေလိုသော Git branch။

**Default:** `main`

**ပုံမှန် အခြေအနေများ:**
- **ရိုးရှင်းသော projects:** တစ်သင်းငယ်ရှိပြီး automation ကို ယုံကြည်ပါက `main` ကို တိုက်ရိုက် အသုံးပြုနိုင်သည်
- **Production systems:** `design-tokens` သို့မဟုတ် `figma-sync` ကဲ့သို့သော သီးခြား branch ကို အသုံးပြုပါ၊ ထို့နောက် `main` သို့ merge မလုပ်မီ PR များကို ပြန်လည်သုံးသပ်ပါ

**Plugin မည်သို့ အသုံးပြုသနည်း:** ၎င်းသည် pull request များအတွက် **base branch** ဖြစ်လာသည်။ Plugin သည် ဤနေရာမှ branch အသစ်တစ်ခု ဖန်တီး၊ ပြောင်းလဲမှုများကို commit လုပ်ပြီး၊ ဤ branch သို့ ပြန်လည် PR ဖွင့်သည်။

#### ၅. File Path (JSON)

**၎င်းသည် အဘယ်နည်း:** သင်၏ repository တွင် token JSON file ကို ဖန်တီးရန် သို့မဟုတ် update လုပ်ရန် တည်နေရာ။

**Default:** `tokens/design-tokens.json`

**ပုံစံ:** Folder လမ်းကြောင်းနှင့် `.json` extension ကို အမြဲ ထည့်ပါ

**ဥပမာများ:**
- `tokens/global.json`
- `src/theme/design-tokens.json`
- `packages/tokens/figma-variables.json`

**ဘာဖြစ်သနည်း:**
- File မရှိပါက၊ plugin က အလိုအလျောက် ဖန်တီးပေးသည်
- File ရှိပြီးသားဖြစ်ပါက၊ plugin က သင်၏ token အသစ်များကို ရှိပြီးသား data နှင့် merge လုပ်သည်၊ သင် မပြင်ဆင်ရသေးသော key များကို ထိန်းသိမ်းထားသည်
- ပထမဆုံးအကြိမ် sync လုပ်နေပါက၊ plugin က ဤလမ်းကြောင်းကို အတည်ပြုရန် သင့်ကို မေးမြန်းမည်

#### ၆. Save Settings Button

Field အားလုံး ဖြည့်ပြီးနောက်၊ **Save Settings** ကို နှိပ်ပါ။ ၎င်းသည် သင်၏ configuration ကို ဤနေရာများတွင် သိမ်းဆည်းသည်:
- **Document-level storage:** Settings များကို Figma file တစ်ခုချင်းစီအလိုက် သိမ်းဆည်းသည်
- **Global defaults:** Owner နှင့် Repo ကို သင်၏ Figma file အားလုံးတွင် အဆင်ပြေစေရန် ကမ္ဘာလုံးဆိုင်ရာအနေဖြင့်လည်း သိမ်းဆည်းသည်
