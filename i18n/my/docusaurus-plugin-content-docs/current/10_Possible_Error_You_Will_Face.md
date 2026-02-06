---
sidebar_position: 10
---

# သင်ကြုံတွေ့နိုင်သော အမှားများနှင့် ဖြေရှင်းနည်းများ


Orchestra Sync ကို အလုပ်လုပ်နေစဉ်၊ အမှားအမျိုးမျိုး ကြုံတွေ့နိုင်ပါသည်။ ဤလမ်းညွှန်သည် အများဆုံး ကြုံတွေ့ရသော အမှားများကို ရှာဖွေပြီး ဖြေရှင်းရန် ကူညီပေးပါသည်။

---

## Authentication အမှားများ

### "Not authenticated. Please go to Settings to connect GitHub."

**အကြောင်းရင်း:** Plugin settings တွင် Personal Access Token မသိမ်းဆည်းရသေးပါ။

**ဖြေရှင်းချက်:**
1. **Settings** tab သို့ သွားပါ
2. မှန်ကန်သော GitHub Personal Access Token ကို ထည့်ပါ
3. **Save** ကို နှိပ်ပါ
4. **Sync Tokens** tab သို့ ပြန်သွားပြီး ထပ်စမ်းကြည့်ပါ

---

### "Token missing permissions."

**အကြောင်းရင်း:** သင်၏ GitHub Personal Access Token တွင် လိုအပ်သော scope များ မရှိပါ။

**ဖြေရှင်းချက်:**

**Classic Tokens အတွက်:**
- `repo` scope ကို ဖွင့်ထားကြောင်း သေချာပါစေ

**Fine-grained Tokens အတွက်:**
- **Contents** (Read and Write) ကို ဖွင့်ပါ
- **Pull requests** (Read and Write) ကို ဖွင့်ပါ

**ပြင်ဆင်ရန် အဆင့်များ:**
1. GitHub Settings → Developer settings → Personal access tokens သို့ သွားပါ
2. လိုအပ်သော permissions များနှင့် token အသစ် တည်းဖြတ် သို့မဟုတ် ဖန်တီးပါ
3. Token အသစ်ကို ကူးယူပါ
4. Plugin ၏ Settings tab တွင် update လုပ်ပါ

---

## Repository အမှားများ

### "Repository 'owner/repo' not found."

**ဖြစ်နိုင်သော အကြောင်းရင်းများ:**
- Owner သို့မဟုတ် Repository အမည်တွင် စာလုံးပေါင်း အမှား
- Repository သည် private ဖြစ်ပြီး သင်၏ token တွင် ဝင်ခွင့် မရှိပါ
- Repository မရှိပါ

**ဖြေရှင်းချက်:**
1. Repository သည် GitHub တွင် ရှိကြောင်း အတည်ပြုပါ
2. Owner နှင့် repo အမည် နှစ်ခုလုံး၏ စာလုံးပေါင်းကို စစ်ဆေးပါ (case-sensitive)
3. Private repos များအတွက်၊ သင်၏ token တွင် `repo` scope ရှိကြောင်း သေချာပါစေ
4. `https://github.com/owner/repo` သို့ သင်၏ browser မှ သွားပြီး စမ်းကြည့်ပါ

---

### "Branch 'branch-name' not found."

**အကြောင်းရင်း:** သတ်မှတ်ထားသော branch သည် repository တွင် မရှိပါ။

**ဖြေရှင်းချက်:**
1. Branch သည် သင်၏ repository တွင် ရှိကြောင်း အတည်ပြုပါ
2. များသော branch အမည်များ: `main`, `master`, `develop`, `design-tokens`
3. Branch မရှိပါက GitHub တွင် ဖန်တီးပါ
4. Settings တွင် branch အမည်ကို ရှိပြီးသား branch နှင့် ကိုက်ညီအောင် update လုပ်ပါ

---

## Variable Collection အမှားများ

### "No collections found."

**အကြောင်းရင်း:** သင်၏ Figma file တွင် variable collection များ မရှိပါ။

**ဖြေရှင်းချက်:**
1. Figma တွင် variable collection များကို အရင် ဖန်တီးပါ
2. Figma → Local variables သွားပါ (သို့မဟုတ် **Ctrl/Cmd + /** နှိပ်ပါ)
3. COLOR, FLOAT, သို့မဟုတ် STRING အမျိုးအစား variables များပါသော collection များ ဖန်တီးပါ
4. Plugin ကို refresh လုပ်ပါ

---

### "No compatible collections for this type."

**အကြောင်းရင်း:** သင်၏ collection များတွင် ရွေးချယ်ထားသော အမျိုးအစား၏ variables များ မပါဝင်ပါ။

**ဥပမာ:** သင်သည် "Color" ကို ရွေးထားသော်လည်း သင်၏ variable အားလုံးသည် FLOAT (spacing) ဖြစ်နေသည်။

**ဖြေရှင်းချက်:**
- သင်၏ variables များနှင့် ကိုက်ညီသော token အမျိုးအစား တစ်ခုကို ရွေးချယ်ပါ
- သို့မဟုတ် Figma တွင် လိုအပ်သော အမျိုးအစား၏ variables များကို ဖန်တီးပါ

---

## Sync အမှားများ

### "Failed to create Pull Request."

**ဖြစ်နိုင်သော အကြောင်းရင်းများ:**
- Network ချိတ်ဆက်မှု ပြဿနာများ
- GitHub API rate limiting
- မှန်ကန်မှု မရှိသော file လမ်းကြောင်း
- လုံလောက်သော permissions များ မရှိခြင်း

**ဖြေရှင်းချက်:**
1. သင်၏ internet connection ကို စစ်ဆေးပါ
2. Settings တွင် file လမ်းကြောင်းကို အတည်ပြုပါ (ဥပမာ `tokens/design-tokens.json`)
3. သင်၏ token တွင် PR ဖန်တီးနိုင်သော permissions များ ရှိကြောင်း သေချာပါစေ
4. Rate-limited ဖြစ်ပါက မိနစ်အနည်းငယ် စောင့်ပြီး ထပ်စမ်းကြည့်ပါ

---

### "Diff could not be generated."

**အကြောင်းရင်း:** GitHub ရှိ လက်ရှိ file တွင် မှန်ကန်မှု မရှိသော JSON format သို့မဟုတ် encoding ပြဿနာများ ရှိသည်။

**ဖြေရှင်းချက်:**
1. GitHub တွင် file ကို လက်ဖြင့် စစ်ဆေးပါ
2. JSON validator တစ်ခု အသုံးပြုပြီး JSON format ကို အတည်ပြုပါ
3. Syntax အမှားများကို ပြင်ဆင်ပါ
4. ထပ် sync လုပ်ကြည့်ပါ

---

## File Path အမှားများ

### "Invalid file path."

**အကြောင်းရင်း:** File လမ်းကြောင်းတွင် မှန်ကန်မှု မရှိသော အက္ခရာများ သို့မဟုတ် format ပါဝင်သည်။

**ဖြေရှင်းချက်:**
- Forward slash အသုံးပြုပါ: `tokens/design-tokens.json` ✓
- Backslash မသုံးပါနှင့်: `tokens\design-tokens.json` ✗
- `/` ဖြင့် မစပါနှင့်: `/tokens/design-tokens.json` ✗
- File extension သည် `.json` ဖြစ်ရမည်

---

## Network အမှားများ

### "Network request failed."

**အကြောင်းရင်း:** GitHub API သို့ ချိတ်ဆက်မှု ပြတ်တောက်သွားသည်။

**ဖြေရှင်းချက်:**
1. သင်၏ internet connection ကို စစ်ဆေးပါ
2. GitHub သည် ဝင်ရောက်နိုင်ကြောင်း အတည်ပြုပါ (status.github.com ကို စစ်ဆေးပါ)
3. သင်၏ firewall/proxy က request များကို ပိတ်ဆို့နေခြင်း ရှိ/မရှိ စစ်ဆေးပါ
4. ခဏနောက် ထပ်စမ်းကြည့်ပါ

---

### "Request timeout."

**အကြောင်းရင်း:** GitHub သို့ request က အချိန်ကြာလွန်းသည်။

**ဖြေရှင်းချက်:**
- Repository ကြီးများက အချိန်ကြာနိုင်သည်
- သင်၏ network speed ကို စစ်ဆေးပါ
- ပိုကောင်းသော connection ဖြင့် ထပ်စမ်းကြည့်ပါ
- Sync လုပ်နေသော variable များ၏ အရေအတွက်ကို လျှော့ကြည့်ပါ

---

## Data Format အမှားများ

### "Variable name contains invalid characters."

**အကြောင်းရင်း:** Figma ရှိ variable အမည်များတွင် JSON path သို့ ပြောင်းလဲ၍မရသော အက္ခရာများ ပါဝင်သည်။

**ဖြေရှင်းချက်:**
1. Figma တွင် variable များကို အောက်ပါများကို အသုံးပြုပြီး အမည်ပြောင်းပါ:
   - စာလုံးများ၊ နံပါတ်များ၊ underscores၊ hyphens
   - Grouping အတွက် `/` forward slash
2. အထူးအက္ခရာများ ရှောင်ပါ: `@`, `#`, `$`, `%`, `*`, စသည်

---

### "Circular reference detected."

**အကြောင်းရင်း:** Variable တစ်ခုသည် အခြား variable တစ်ခုကို ကိုးကားပြီး၊ ထို variable က မူလ variable ကို ပြန်ကိုးကားသည်။

**ဥပမာ:**
```
Color A = {Color B}
Color B = {Color A}
```

**ဖြေရှင်းချက်:**
1. Figma တွင် circular reference ကို ရှာဖွေပါ
2. Variable တစ်ခုကို ခိုင်မာသော တန်ဖိုးတစ်ခု သတ်မှတ်ပြီး ကွင်းဆက်ကို ဖြတ်ပါ
3. Reference hierarchy ကို မှန်ကန်စွာ ပြန်တည်ဆောက်ပါ

---

## Plugin UI အမှားများ

### Plugin screen သည် ဗလာ သို့မဟုတ် ရပ်နေသည်

**အကြောင်းရင်း:** Plugin state ပျက်စီးခြင်း သို့မဟုတ် Figma rendering ပြဿနာ။

**ဖြေရှင်းချက်:**
1. Plugin ကို ပိတ်ပြီး ပြန်ဖွင့်ပါ
2. မရပါက၊ Figma ကို ပိတ်ပြီး ပြန်ဖွင့်ပါ
3. Browser ရှိ Figma ကို အသုံးပြုနေပါက browser cache ကို ရှင်းပါ
4. ပြဿနာ ဆက်ရှိနေပါက plugin ကို ပြန် install လုပ်ပါ

---

### "Settings not saved."

**အကြောင်းရင်း:** Plugin storage quota ကျော်လွန်ခြင်း သို့မဟုတ် write permissions ပြဿနာ။

**ဖြေရှင်းချက်:**
1. Plugin storage မှ အဟောင်း/မလိုအပ်သော data များကို ရှင်းပါ
2. အခြား Figma plugin များကို ပိတ်ပါ
3. Figma ကို ပြန်ဖွင့်ပါ
4. Settings များကို ထပ် သိမ်းကြည့်ပါ

---

## အမှားများ ရှောင်ရန် အကောင်းဆုံး အလေ့အကျင့်များ

### ၁. Dummy Repository ဖြင့် အရင် စမ်းသပ်ပါ
သင်၏ production repository သို့ sync မလုပ်မီ၊ လုပ်ငန်းစဉ်ကို ရင်းနှီးစေရန် ပစ်ထားနိုင်သော repo တစ်ခုဖြင့် စမ်းသပ်ပါ။

### ၂. ရှင်းလင်းသော Variable အမည်များ အသုံးပြုပါ
- အမည်များကို ရှင်းလင်းပြီး တသမတ်တည်း ထားပါ
- Grouping အတွက် `/` separator ကို အသုံးပြုပါ (ဥပမာ `Colors/Primary/Blue500`)
- အထူးအက္ခရာများ ရှောင်ပါ

### ၃. Permissions များကို စောစောစီး အတည်ပြုပါ
Token ဖန်တီးပြီးတာနှင့် ချက်ချင်း စမ်းသပ်ပြီး မှန်ကန်သော permissions များ ရှိကြောင်း သေချာပါစေ။

### ၄. သေးငယ်စွာ စတင်ပါ
- Collection သေးငယ်တစ်ခုဖြင့် စတင်ပါ
- Output ကို အတည်ပြုပါ
- Collection များကို တဖြည်းဖြည်း ထပ်ထည့်ပါ

### ၅. Token ကို လုံခြုံစွာ ထားပါ
- သင်၏ Personal Access Token ကို ဘယ်တော့မှ မမျှဝေပါနှင့်
- Password manager တစ်ခုတွင် သိမ်းဆည်းပါ
- ထိခိုက်မိပါက ပြန်ဖန်တီးပါ

---

## ပြဿနာများ ဆက်ရှိနေပါသလား?

ဤတွင် ဖော်ပြမထားသော အမှားတစ်ခု ကြုံတွေ့ပါက:

1. **Console ကို စစ်ဆေးပါ:** Right-click → Inspect → Console tab မှ အသေးစိတ် error messages များ ကြည့်ပါ
2. **မကြာသေးမီ ပြောင်းလဲမှုများ ပြန်ကြည့်ပါ:** နောက်ဆုံး အလုပ်ဖြစ်ပြီးကတည်းက ဘာပြောင်းလဲသွားသလဲ?
3. **Setup ကို ရိုးရှင်းအောင် လုပ်ပါ:** အနည်းဆုံး configuration ဖြင့် စမ်းသပ်ပါ
4. **Support ကို ဆက်သွယ်ပါ:** Error messages များ၊ screenshots များ၊ နှင့် ပြန်လုပ်နည်း အဆင့်များကို ပေးပို့ပါ

---

## Error Message အကိုးအကား

| Error Message | လျင်မြန်သော ဖြေရှင်းချက် |
|---------------|-----------|
| Not authenticated | Settings တွင် GitHub token ထည့်ပါ |
| Repository not found | Owner/repo စာလုံးပေါင်း စစ်ဆေးပါ |
| Branch not found | Branch ရှိ/မရှိ အတည်ပြု သို့မဟုတ် ဖန်တီးပါ |
| Token missing permissions | Token scopes များ update လုပ်ပါ |
| No collections found | Figma တွင် variables များ ဖန်တီးပါ |
| Invalid file path | Format အသုံးပြုပါ: `folder/file.json` |
| Network request failed | Internet connection စစ်ဆေးပါ |
| Circular reference detected | Figma တွင် variable references များ ပြင်ပါ |

---

အမှားအများစုသည် အကြောင်းရင်းကို နားလည်လိုက်ရင် ပြင်ရတာ လွယ်ကူပါသည်။ Error message ကို ဂရုတစိုက် ဖတ်ရန် အချိန်အနည်းငယ် ယူပါ—၎င်းတွင် များသောအားဖြင့် ဖြေရှင်းချက် ပါရှိပါသည်!
