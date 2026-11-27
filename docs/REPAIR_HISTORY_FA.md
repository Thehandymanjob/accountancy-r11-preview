# دفترچه دائمی تعمیرات — The Handyman Accountancy

**وضعیت:** مرجع عملیاتی تعمیرات Preview  
**مخزن:** `Thehandymanjob/accountancy-r11-preview`  
**شاخه کاری:** `development` → Pull Request به `main`  
**قاعده:** این دفترچه باید پیش از هر عیب‌یابی، تغییر کد یا اصلاح فنی بررسی شود. مرجع الزام‌آور این قاعده در `VERSION-AUTHORITY.json` ثبت شده است.

> این سند تاریخچه فنی است، نه مجوز تغییر. وجود یک راه‌حل در این دفترچه به معنی اجرای خودکار آن نیست؛ ابتدا باید تطابق علت ریشه‌ای با مشکل فعلی تأیید شود و تمام محدودیت‌های Authority و مجوز کاربر رعایت شوند.

## 1. هدف و روش استفاده

برای جلوگیری از تکرار عیب‌یابی و بازگشت خطاهای قبلاً حل‌شده، هر مشکل واقعی باید با یک شناسه یکتا ثبت شود. قبل از شروع کار:

1. این سند و فهرست موضوعی آن را بخوان.
2. علائم فعلی را با عنوان، نشانه‌ها، علت ریشه‌ای و شرایط بازتولید موارد قبلی تطبیق بده.
3. فقط وقتی علت ریشه‌ای یکسان با شواهد تأیید شد، راه‌حل قبلی را مبنا قرار بده؛ شباهت ظاهری کافی نیست.
4. اگر تطابق قطعی نیست، راه‌حل قدیمی را کورکورانه اعمال نکن؛ تشخیص تازه و محدود انجام بده.
5. پس از تعمیر، نتیجه واقعی تست را ثبت کن؛ PASS، انتشار، تأیید Safari و تأیید کاربر را با هم یکی ندان.

## 2. قانون ضدتکرار و چرخه عمر پرونده تعمیر

**یک مشکل با یک علت ریشه‌ای، یک پرونده اصلی و یک شناسه دائمی دارد.** اجرای اصلاح موقت، تکمیل اصلاح یا تغییر روش در آینده به‌تنهایی مجوز ساخت شناسه جدید نیست.

### قواعد الزامی

1. قبل از ساخت پرونده جدید، عنوان، نشانه‌ها، بخش نرم‌افزار، علت احتمالی و سابقه مرتبط را در همین دفترچه جست‌وجو کن.
2. اگر مشکل همان مورد قبلی است، همان شناسه را نگه دار و پرونده موجود را به‌روزرسانی کن؛ رکورد موازی نساز.
3. اگر راه‌حل فعلی موقت یا ناقص است، وضعیت پرونده را `Temporary fix` یا `Partially fixed` ثبت کن و محدودیت‌ها و کار باقی‌مانده را صریح بنویس.
4. وقتی راه‌حل کامل‌تر اجرا شد، خلاصه و راه‌حل جاری پرونده را به‌روز کن و یک مدخل تاریخ‌دار به بخش «تاریخچه تغییرات راه‌حل» همان پرونده اضافه کن. راه‌حل قبلی را پاک نکن؛ آن را به‌عنوان مرحله قبلی/موقت/جایگزین‌شده نگه دار.
5. فقط وقتی شواهد نشان دهد علت ریشه‌ای مستقل و جداگانه‌ای وجود دارد، پرونده جدید بساز. اگر چند علت در یک علامت ظاهری دخیل‌اند، پرونده‌ها را با ارجاع متقابل مرتبط کن؛ آن‌ها را بی‌دلیل یکی یا تکراری نکن.
6. اگر مشکل بعد از رفع دوباره برگشت، همان پرونده را `Reopened` کن و علت بازگشت را در تاریخچه همان پرونده ثبت کن.
7. فهرست موضوعی باید برای هر شناسه فقط یک ردیف داشته باشد. با تغییر وضعیت یا تکمیل راه‌حل، همان ردیف را به‌روزرسانی کن.
8. شناسه پرونده هرگز تغییر نمی‌کند یا دوباره استفاده نمی‌شود. پرونده بسته‌شده حذف نمی‌شود؛ فقط وضعیت و تاریخچه آن تغییر می‌کند.

### وضعیت‌های استاندارد

- `Open`: مشکل ثبت شده و هنوز تشخیص/اصلاح ندارد.
- `Diagnosed`: علت ریشه‌ای با شواهد شناسایی شده است.
- `Temporary fix`: راه‌حل موقت اجرا شده و تکمیل لازم دارد.
- `Partially fixed`: بخشی از مشکل حل شده و موارد مشخصی باقی مانده است.
- `Fixed — awaiting verification`: اصلاح انجام شده اما آزمون لازم یا تأیید کاربر کامل نیست.
- `Verified`: آزمون‌های تعریف‌شده با شواهد موفق شده‌اند؛ دامنه آزمون باید مشخص باشد.
- `Reopened`: مشکل قبلی برگشته یا اصلاح کافی نبوده است.
- `Closed`: معیارهای پذیرش تکمیل شده و مورد بسته شده است.

### ساختار تاریخچه راه‌حل داخل هر پرونده

هر پرونده یک بخش `Solution revision history` دارد. برای هر مرحله فقط یک مدخل جدید در همان پرونده اضافه کن:

- تاریخ و شماره بازنگری: R1، R2، R3 و ...
- نوع تغییر: موقت، تکمیلی، جایگزین یا بازگشایی
- چه چیزی تغییر کرد و چرا
- علت/شواهد جدید (در صورت وجود)
- فایل‌ها، PR، commit و Build ID
- تست‌ها و نتیجه واقعی هر تست
- وضعیت فعلی و کار باقی‌مانده

**اصل مهم:** یک پرونده می‌تواند چند بازنگری راه‌حل داشته باشد، اما برای یک مشکل واحد چند پرونده تکراری ایجاد نمی‌شود.

## 3. طبقه‌بندی و شناسه‌گذاری

شناسه هر مورد به شکل `AREA-SUBAREA-NNN` است. شماره در هر زیرگروه افزایشی و هرگز برای مورد دیگری استفاده نمی‌شود.

| کد | حوزه | نمونه |
|---|---|---|
| AUTH | Authority، نسخه، SHA، شاخه و کنترل انتشار | mismatch در manifest |
| DEP | Deployment، Pages، URL و زمان انتشار | زمان Last Updated |
| UI | رابط کاربری و navigation | دکمه کلیک می‌شود اما صفحه باز نمی‌شود |
| PDF | PDF، چاپ، صفحه‌بندی و Share | preview، حاشیه و page break |
| ACC | Accounting، درآمد و هزینه | ثبت یا تطبیق حسابداری |
| ID | شناسه‌ها و شماره‌گذاری | INV / IN / E و sequence |
| DB | IndexedDB، ذخیره‌سازی و بازیابی | persistence، schema |
| PRJ | Projects، Subprojects و P&L | دوباره‌شماری مبلغ |
| SEC | امنیت، دسترسی و حفاظت داده | دسترسی ناخواسته |
| PERF | کارایی، حافظه و پایداری | فشار حافظه Safari |
| DATA | بکاپ، import، export و صحت داده | backup verification |

## 4. قالب اجباری ثبت هر پرونده تعمیر

هر مورد جدید باید شامل تمام فیلدهای زیر باشد. اگر اطلاعاتی موجود نیست، صریحاً `نامشخص` یا `تأییدنشده` نوشته شود.

- **شناسه دائمی / تاریخ ایجاد / وضعیت فعلی:** یکی از وضعیت‌های استاندارد بخش چرخه عمر
- **عنوان کوتاه و حوزه:**
- **علائم مشاهده‌شده:** آنچه کاربر یا ابزار واقعاً مشاهده کرده است
- **محیط و نسخه:** repo، branch، Build ID، URL، دستگاه و مرورگر
- **علت ریشه‌ای:** علت اثبات‌شده، نه حدس
- **روش تشخیص:** شواهد، فایل/تابع/خط مرتبط و آزمون‌هایی که علت را مشخص کردند
- **راه‌حل جاری و سطح تکمیل:** موقت/جزئی/کامل، تغییر دقیق و دلیل انتخاب آن
- **کار باقی‌مانده و معیار پذیرش:** موارد لازم برای تکمیل و شواهد لازم برای بستن پرونده
- **تاریخچه تغییرات راه‌حل:** بازنگری‌های R1، R2 و ... در همین پرونده؛ بدون ساخت پرونده موازی
- **فایل‌های تغییرکرده:**
- **مواردی که نباید تکرار شوند:** راه‌حل‌های ناموفق یا پرریسک و دلیل رد آن‌ها
- **تست و شواهد:** تست اجراشده، نتیجه، محدودیت و لینک workflow/PR/commit
- **وضعیت انتشار و تأیید کاربر:** جداگانه و با مقادیر واقعی
- **ارتباط با موارد قبلی:** شناسه موارد مرتبط یا «ندارد»

## 5. پرونده‌های ثبت‌شده

### DEP-TIME-001 — زمان Last Updated به دلیل وابستگی به GitHub API نمایش داده نمی‌شد

- **وضعیت فعلی:** R40 در Preview منتشر شده و Gate و Pages موفق‌اند؛ تست iPhone Safari کاربر همچنان در انتظار است.
- **تاریخ:** 2026-11-17
- **علائم:** زمان آخرین به‌روزرسانی در بنر Preview و/یا Version Details نمایش داده نمی‌شد.
- **محیط:** Preview repo؛ نسخه برنامه 273 / R11؛ Build ID نهایی R20.
- **علت ریشه‌ای ثبت‌شده:** مسیر زمان به درخواست مرورگر به GitHub API وابسته شده بود. این وابستگی شبکه‌ای/مرورگری قابل اتکا نبود؛ حذف header سفارشی در R19 به تنهایی مشکل را حل نکرد.
- **روش تشخیص:** مقایسه تاریخچه Authority نشان داد روش بدون شبکه R14 کار می‌کرد؛ تغییر بعدی در PR #35 آن را با API lookup جایگزین کرده بود. R19 نیز همچنان API-dependent بود.
- **راه‌حل تأییدشده در کد:** بازگرداندن timestamp ثابت و embedded در HTML؛ یک سرویس مشترک `window.R11PreviewDeploymentTime` همان مقدار را به بنر و Version Details می‌دهد و در `Europe/London` نمایش می‌دهد.
- **محدودیت معنایی مهم:** این مقدار زمان آماده‌سازی build است، نه زمان دقیق پایان GitHub Pages deployment. هرگز آن را «زمان دقیق تکمیل انتشار» معرفی نکن.
- **Build ID:** `THA-273-R11-PREVIEW-20261117-R20`
- **Commit ادغام Preview:** `47d0e07f046e5beccc21d062609ae15d08cc7e93`
- **Gate:** PASS؛ run `44144454065`
- **Pages deployment:** در آخرین بررسی این تغییر، deploy هنوز در حال اجرا بود؛ وضعیت نهایی در این رکورد از این منبع تأیید نشده است.
- **Static checks:** هشت بلوک inline JavaScript با V8 parse شدند؛ بررسی مرزهای HTML موفق؛ مسیر timestamp دیگر به `api.github.com` وابسته نیست.
- **فایل اصلی:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`
- **قاعده بازاستفاده:** اگر زمان Last Updated در نسخه دیگری ناپدید شد، ابتدا وجود سرویس embedded و اتصال هر دو UI به همان سرویس را بررسی کن؛ قبل از افزودن API fetch یا header جدید، این مورد را مرور کن.
- **مراجع:** PR #44 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/44 ؛ Gate — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44144454065

#### بازنگری راه‌حل R2 — تازه‌سازی زمان آماده‌سازی در هر Build آزمایشی
- **تاریخ:** 2026-11-17
- **نوع تغییر:** بازگشایی و اصلاح مجدد همان علت؛ پرونده جدید ایجاد نشده است.
- **شواهد علت:** سورس R27 شامل مقدار ثابت `2026-11-17T20:01:02.887Z` و توضیح قدیمی R26 بود. این مقدار هنگام آماده‌سازی R27 ثبت شده و با آماده‌سازی Build بعدی تغییر نکرده بود؛ بنابراین Last Updated برای R27 همچنان همان زمان را نشان می‌داد.
- **راه‌حل R28:** مقدار embedded در زمان آماده‌سازی Build جدید به `2026-11-17T20:45:04.524Z` تغییر کرد؛ Build ID و canonical URL به R28 ارتقا یافتند. بنر Preview و Version Details همچنان از یک سرویس مشترک و همان timestamp استفاده می‌کنند. هیچ درخواست شبکه‌ای، API، IndexedDB، LocalStorage یا داده کاربر در مسیر timestamp افزوده نشده است.
- **معنای زمان:** این timestamp زمان آماده‌سازی build است؛ نه زمان دقیق پایان GitHub Pages deployment. زمان دقیق پایان انتشار در این اصلاح ادعا نمی‌شود.
- **فایل‌ها:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`، `VERSION-AUTHORITY.json` و همین دفترچه.
- **Commit توسعه:** `dd71cc114bc41f250844104d9335118a4d40c195` برای HTML؛ commit‌های Authority و تاریخچه در ادامه همین زنجیره توسعه ثبت شدند.
- **PR:** #70 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/70
- **Merge commit:** `352dc5cb079317eb9551e2383443a4b514890c27`
- **Version Authority Gate:** PASS — run `44172856828` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44172856828
- **Preview Pages:** PASS — run `44172908348` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44172908348؛ build، report-build-status و deploy همگی موفق شدند.
- **Static checks:** PASS؛ Gate تمام 22 فایل pinشده را تأیید کرد و سورس R28، شناسه Build، URL و سرویس timestamp مشترک بررسی شدند.
- **تست iPhone Safari:** not tested.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.


#### بازنگری R37 — دریافت خودکار زمان صفحه منتشرشده (2026-11-24)
- **علت ادامه مشکل:** مقدار embedded قبلی فقط هنگام آماده‌سازی دستی Build تغییر می‌کرد و در انتشار بعدی می‌توانست قدیمی بماند؛ روش GitHub API نیز به CORS و دسترسی API وابسته بود.
- **راه‌حل R37 در Preview:** سرویس مشترک `window.R11PreviewDeploymentTime` زمان `Last-Modified` صفحه جاری را با درخواست `HEAD` هم‌مبدأ و `cache: no-store` دریافت می‌کند. بنر Preview، Monitor → Version Details و Copy version details از همین سرویس استفاده می‌کنند.
- **رفتار خطا:** اگر سرور `Last-Modified` ندهد یا درخواست شکست بخورد، رابط «در دسترس نیست» نشان می‌دهد؛ تاریخ قدیمی به‌عنوان تاریخ جدید نمایش داده نمی‌شود.
- **محدوده:** فقط Preview R37؛ بدون GitHub API، header سفارشی، IndexedDB، LocalStorage، بکاپ یا تغییر داده‌های کاربر. Production دست‌نخورده است؛ هنگام اصلاح/ارتقای مجاز آن، همین قرارداد مشترک باید در Version Details و Copy اعمال شود.
- **معنای زمان:** زمان آخرین تغییر ثبت‌شده برای فایل صفحه در میزبان است، نه زمان دقیق پایان انتشار Pages.
- **Build ID:** `THA-273-R11-PREVIEW-20261124-R37`.
- **Gate، Pages و تست Safari:** pending تا اجرای PR و تست واقعی کاربر.

 
#### بازنگری R40 — زمان پایان اجرای موفق GitHub Pages
- **تاریخ:** 2026-11-26
- **علت بازگشایی:** درخواست HEAD هم‌مبدأ و مقدار Last-Modified زمان تغییر فایل میزبان را نشان می‌دهد و الزاماً زمان پایان انتشار جدید Pages نیست؛ در نتیجه ممکن است با وجود انتشار R39، ساعت نمایش‌داده‌شده تغییر نکند.
- **راه‌حل R40 در Preview:** سرویس مشترک `window.R11PreviewDeploymentTime` از endpoint عمومی GitHub Actions برای مخزن Preview و شاخه `main`، اجرای کامل‌شده و موفق workflow دقیق `pages build and deployment` با مسیر `dynamic/pages/pages-build-deployment` را پیدا می‌کند و مقدار `updated_at` همان اجرا را به‌عنوان زمان پایان workflow نمایش می‌دهد.
- **درخواست مرورگر:** فقط GET عمومی، بدون token، credentials یا header سفارشی؛ `cache: no-store`، محدود به 100 اجرای اخیر و دارای timeout. فیلتر فقط اجرای Pages موفق روی main را می‌پذیرد؛ Gate یا workflowهای دیگر زمان انتشار محسوب نمی‌شوند.
- **اتصال UI:** بنر Preview، Monitor → Version Details و Copy version details از همان سرویس و همان timestamp استفاده می‌کنند؛ قالب زمان `Europe/London` و همراه timezone است.
- **رفتار خطا:** اگر API در دسترس نباشد، پاسخ نامعتبر باشد یا اجرای Pages موفق پیدا نشود، UI عبارت «در دسترس نیست» نشان می‌دهد و تاریخ قدیمی یا زمان فعلی دستگاه را جایگزین نمی‌کند.
- **محدوده:** فقط Preview R40؛ Production، IndexedDB، LocalStorage، backup، رکوردها و sequenceها تغییر نمی‌کنند.
- **معنای زمان:** زمان پایان اجرای موفق workflow انتشار GitHub Pages از فیلد `updated_at` است؛ نه زمان ثبت commit یا زمان آماده‌سازی build.
- **Build ID هدف:** `THA-273-R11-PREVIEW-20261126-R40`.
- **Commit کد در development:** `f963213015cc7b156d8118bea6a6f56260c39f81`.
- **PR:** #93 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/93؛ merged.
- **Merge commit:** `e4ea1b2163ff24ce57cc6827d641f91bed09906f`.
- **Version Authority Gate:** PASS؛ PR run `45904866886` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/45904866886.
- **Preview Pages deployment:** PASS؛ run `45905004795` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/45905004795؛ build، deploy و report-build-status برای merge commit R40 موفق شدند.
- **Version Authority Gate روی main:** PASS؛ run `45905005638` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/45905005638.
- **تست استاتیک:** PASS؛ هر 8 بلوک inline JavaScript با V8 syntax compilation بررسی شدند. منبع GET عمومی بدون header سفارشی، فیلتر workflow دقیق Pages، سرویس مشترک و fallback بدون تاریخ کهنه تأیید شد.
- **تست iPhone Safari:** not tested؛ منتظر بررسی کاربر پس از انتشار Preview.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.


### PDF-PREVIEW-001 — ساختار closing script در HTML پیش‌نمایش PDF

- **وضعیت:** اصلاح کد در Preview R18 ثبت شده؛ تست زنده Safari در سابقه این مورد «در انتظار» بوده است.
- **تاریخ:** 2026-11-16
- **علائم:** قاب پیش‌نمایش PDF ایجاد نمی‌شد و پیام `PDF preview frame is unavailable` دیده می‌شد.
- **علت ریشه‌ای:** closing script tag در HTML پنجره popup به شکل escape نامعتبر تولید می‌شد؛ parser سند popup نمی‌توانست به‌درستی iframe را بسازد.
- **راه‌حل ثبت‌شده:** تولید امن تگ پایانی با الحاق رشته `</scr'+'ipt>` در منبع JavaScript والد.
- **فایل اصلی:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`
- **شواهد:** PR #39 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/39 ؛ merge commit `c5428443e7e0c150a5c2b3f7b4147a0a1f56824c` ؛ Gate run `43972668692`.
- **محدودیت:** عبور Gate و بررسی source به معنی تأیید چاپ/Share در Safari نیست.
- **قاعده بازاستفاده:** هنگام خطای نبودن iframe در popup PDF، ابتدا HTML تولیدشده و closing script tag را بررسی کن؛ بدون بررسی parser، به سراغ تغییر CSS یا ابعاد PDF نرو.

### PERF-PDF-001 — فشار حافظه در مسیر تولید PDF در iPhone Safari

- **وضعیت:** تغییر کد در Preview R17 ثبت شده؛ تست نهایی iPhone Safari در سابقه این مورد در انتظار بوده است.
- **تاریخ:** 2026-11-16
- **علائم:** تولید PDF در Safari با فشار حافظه/پایداری مواجه بود.
- **راه‌حل ثبت‌شده:** کاهش html2canvas scale از 2 به 1؛ حذف override اجباری `windowHeight`؛ نمایش وضعیت شروع تولید PDF.
- **دامنه:** مسیر زرد PDF گزارش مالی؛ سایر مسیرهای گزارش و قرارداد نباید بدون دلیل تغییر کنند.
- **فایل اصلی:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`
- **شواهد:** PR #37 ؛ merge commit `d38ee53d0f6697a1bc6a4f94f381fa44431807bf` ؛ Gate run `43958682049`.
- **قاعده بازاستفاده:** اگر PDF در Safari به مشکل حافظه خورد، ابتدا scale، ارتفاع capture و حجم DOM را بررسی کن؛ کاهش کیفیت یا حذف داده گزارش بدون مجوز ممنوع است.

### PDF-LAYOUT-001 — اصلاح چیدمان چاپ گزارش مالی برای A4 و موبایل

- **وضعیت فعلی پس از R27:** پیش‌نمایش همچنان با PDF.js و fit-to-width نمایش داده می‌شود. دکمه Print دیگر iframe را چاپ نمی‌کند؛ فایل اصلی چندصفحه‌ای PDF را از مسیر بومی iOS Share Sheet به اشتراک می‌گذارد تا کاربر گزینه Print را انتخاب کند؛ اگر اشتراک فایل پشتیبانی نشود، همان PDF اصلی در تب Safari باز می‌شود. برای صفحه‌بندی، گزارش مالی از CSS Grid به جریان عادی block تغییر کرده، شکستن هر گروه بین صفحات مجاز است و عنوان‌ها/ردیف‌ها تا حد ممکن کنار هم نگه داشته می‌شوند؛ حاشیه عمودی A4 از 12 به 8 میلی‌متر کاهش یافته است. فیلتر ردیف‌های صفر Materials از R26 حفظ شده است. `Fixed — awaiting verification`؛ مسیر Share Sheet، تعداد صفحات چاپ و توزیع واقعی محتوا باید در iPhone Safari آزمایش شوند. موتور مرکزی همچنان فقط به Accounting Financial Report متصل است؛ مسیرهای فاکتور، قرارداد، رسید و گزارش پروژه مستقل باقی می‌مانند.

- **وضعیت:** تغییرات source-level در Preview R15 ثبت شده؛ live browser rendering و تأیید بصری Safari در سابقه آن pending بوده است.
- **تاریخ:** 2026-11-16
- **علائم:** صفحه‌بندی و چیدمان PDF گزارش مالی روی موبایل مناسب نبود.
- **راه‌حل ثبت‌شده:** ساخت clone قابل اندازه‌گیری با عرض 185mm برای A4 portrait؛ چیدن ردیف‌های مالی و جزئیات به‌صورت عمودی؛ حاشیه بالا/پایین 12mm؛ انتظار برای فونت‌ها و تصاویر رسید؛ کنترل page break؛ محدود کردن preview موبایل به عرض viewport و حذف overflow افقی.
- **محدودیت داده:** قانون قبلی پنهان‌کردن ردیف‌های صفر در بخش‌های 2 تا 4 حفظ شد؛ هیچ داده دیگری نباید حذف شود.
- **فایل اصلی:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`
- **شواهد:** merge commit `6ab99dfe72979720fe344c219cec849fde969b63` ؛ Gate run `43954710757` ؛ Pages run `43954709661`.
- **قاعده بازاستفاده:** پیش از تغییر مجدد PDF، مشخص کن ایراد در اندازه capture، layout clone، pagination، یا viewer موبایل است؛ این لایه‌ها را با هم مخلوط نکن.

### بازنگری راه‌حل R2 — انتقال مرحله‌ای گزارش مالی به موتور مرکزی PDF
- **تاریخ:** 2026-11-17
- **نوع تغییر:** تکمیلی / مهاجرت جزئی معماری
- **دلیل:** مسیر قبلی گزارش مالی، تولید PDF و مدیریت پنجره پیش‌نمایش را در تابع مستقل `directOpenReportPDF()` انجام می‌داد. برای یکسان‌سازی مدیریت تولید و پیش‌نمایش، این مسیر به سرویس مرکزی منتقل شد.
- **شواهد علت و محدوده:** سورس Preview R20 چند مسیر مستقل PDF داشت. در R21 تابع `printReport()` همچنان clone و چیدمان اختصاصی گزارش را آماده می‌کند، اما تحویل آن به `window.THA.PrintEngine.open()` انجام می‌شود.
- **راه‌حل R2:** فایل مستقل `tha-print-engine.js` ایجاد شد. مسئولیت موتور: بارگذاری html2pdf، انتظار برای فونت و تصاویر، تولید A4، اعتبارسنجی نوع و امضای PDF، نمایش پیش‌نمایش در overlay همان صفحه، Share، Print، Save، بازگرداندن focus و پاک‌سازی URL/DOM.
- **فایل‌های تغییرکرده:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`، `v273-isolated-test/r11-income-prefix-repair-20261114/tha-print-engine.js`، `.github/workflows/r11-version-authority.yml`، `VERSION-AUTHORITY.json` و همین دو سند Repair History.
- **Build ID هدف:** `THA-273-R11-PREVIEW-20261117-R21`
- **PR:** #54 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/54 ؛ commit ادغام Preview: `187216817a3ddbf296e7135ee2cbc02798245a32`.
- **Gate:** PR Gate PASS در run `44150704566` و main push Gate PASS در run `44150783662` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44150783662.
- **Preview Pages:** PASS در run `44150782561` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44150782561 ؛ این نتیجه انتشار Pages را تأیید می‌کند، نه عملکرد PDF در Safari.
- **تست‌های انجام‌شده:** V8 parse برای فایل موتور و هر 8 بلوک inline JavaScript در HTML موفق؛ اتصال تابع گزارش به API موتور از روی source تأیید شد.
- **تست‌های انجام‌نشده:** اجرای PDF در مرورگر واقعی، iPhone Safari، Share sheet، Print و Save هنوز انجام نشده است.
- **وضعیت فعلی:** `Fixed — awaiting verification` برای مهاجرت اولیه؛ موتور هنوز فقط به گزارش مالی Accounting متصل است.
- **کار باقی‌مانده:** تست کاربر در Preview؛ سپس مهاجرت جداگانه فاکتور، قرارداد، رسید و گزارش پروژه با حفظ قالب اختصاصی هر سند. مسیرهای قدیمی تا تأیید هر مهاجرت حذف نشوند.
- **Production:** هیچ تغییری انجام نشده و ارتقا مجاز نشده است.

### بازنگری راه‌حل R3 — ساده‌سازی کنترل‌های پیش‌نمایش PDF
- **تاریخ:** 2026-11-17
- **نوع تغییر:** تکمیلی
- **دلیل:** صفحه پیش‌نمایش R21 چهار اقدام Share PDF، Print، Save PDF و Open PDF را نشان می‌داد؛ کاربر فقط دو کنترل Print Preview و Back را لازم دارد.
- **راه‌حل:** حذف دکمه بستن بالای صفحه و حذف کامل کنترل‌های Share/Save/Open؛ نمایش دقیقاً دو دکمه در پایین overlay. Print Preview درخواست چاپ PDF را اجرا می‌کند و Back پیش‌نمایش را می‌بندد و focus را به گزارش برمی‌گرداند.
- **فایل‌ها:** `v273-isolated-test/r11-income-prefix-repair-20261114/tha-print-engine.js` و `index.html`، `VERSION-AUTHORITY.json` و اسناد تعمیر.
- **Build ID هدف:** `THA-273-R11-PREVIEW-20261117-R22`
- **PR / commit / Gate / Pages:** pending تا پایان workflow.
- **Safari:** not tested؛ عملکرد print dialog در iPhone Safari باید توسط کاربر بررسی شود.
- **Production:** هیچ تغییری انجام نشده؛ ارتقا مجاز نشده است.

### بازنگری راه‌حل R4 — جداسازی پیش‌نمایش PDF از چاپ و اصلاح fit موبایل
- **تاریخ:** 2026-11-17
- **علائم تأییدشده توسط کاربر:** Safari برای هر بار لمس Print Preview پیام اجازه چاپ خودکار نشان می‌داد؛ صفحه PDF در iPhone به عرض صفحه fit نبود.
- **علت فنی در سورس R22:** handler دکمه مستقیماً `iframe.contentWindow.print()` را اجرا می‌کرد؛ این فرمان در iOS Safari به‌عنوان scripted/automatic printing شناسایی می‌شود. iframe با `#view=FitH` باز می‌شد و درخواست صریح `zoom=page-width` نداشت.
- **راه‌حل R4:** دکمه‌ی اصلی گزارش همچنان فقط PDF را تولید و پیش‌نمایش را باز می‌کند. داخل preview فقط Back و Print نمایش داده می‌شوند. Print دیگر `window.print()` را صدا نمی‌زند؛ از رویداد مستقیم کاربر، PDF معتبر را در تب Safari با viewer بومی باز می‌کند تا چاپ از کنترل‌های بومی PDF/Safari انجام شود. URL preview به `#zoom=page-width&view=FitH` تغییر کرده و iframe عرض‌پذیر با `min-width:0` و scrolling لمسی دارد.
- **محدودیت مهم:** این راه‌حل از prompt چاپ خودکار ناشی از `window.print()` جلوگیری می‌کند، اما چاپ نهایی از طریق منوی Share/Print خود Safari انجام می‌شود؛ چاپ مستقیم بدون دخالت viewer بومی تضمین نشده است.
- **Build ID هدف:** `THA-273-R11-PREVIEW-20261117-R23`
- **فایل‌ها:** `tha-print-engine.js`، `index.html`، `VERSION-AUTHORITY.json`، `REPAIR_HISTORY_FA.md` و `REPAIR_INDEX_FA.md`.
- **PR / Gate / Pages:** pending تا تکمیل workflow.
- **Safari:** not tested؛ نیازمند تست واقعی iPhone.
- **Production:** هیچ تغییری انجام نشده و مجوز انتقال صادر نشده است.

### بازنگری راه‌حل R5 — ساده‌سازی صفحه گزارش و انتقال چاپ به دکمه اختصاصی
- **تاریخ:** 2026-11-17
- **درخواست کاربر:** حذف دکمه آبی Generate & Save Report؛ تغییر نام دکمه زرد به Print Preview؛ نمایش PDF در صفحه بعد؛ پایین صفحه فقط Back و Print؛ دکمه Print باید رابط چاپ سیستم را باز کند.
- **علت مغایرت R23:** Print Preview و Print flow هنوز مطابق تفکیک دو مرحله‌ای موردنظر کاربر نبود؛ همچنین دکمه ذخیره snapshot در صفحه اصلی اضافه بود.
- **راه‌حل R5:** دکمه آبی و متن توضیح snapshot از صفحه تهیه گزارش حذف شدند؛ دکمه زرد با عنوان Print Preview باقی ماند. موتور PDF در صفحه پیش‌نمایش فقط Back و Print نشان می‌دهد. handler صفحه گزارش فقط تولید PDF و بازکردن preview را انجام می‌دهد؛ handler دکمه Print در preview، `iframe.contentWindow.print()` را فقط در پاسخ به لمس صریح همان دکمه اجرا می‌کند.
- **Build ID هدف:** `THA-273-R11-PREVIEW-20261117-R24`
- **فایل‌ها:** `index.html`، `tha-print-engine.js`، `VERSION-AUTHORITY.json` و دو سند Repair History/Index.
- **PR / Gate / Pages:** pending.
- **Safari:** not tested؛ نیازمند بررسی اینکه Print Preview بدون چاپ خودکار PDF را باز کند و Print رابط چاپ سیستم را نمایش دهد.
- **Production:** بدون تغییر؛ ارتقا مجاز نشده است.

### بازنگری راه‌حل R6 — نمایش PDF متناسب با عرض موبایل با PDF.js

- **تاریخ:** 2026-11-17
- **نوع تغییر:** تکمیلی / اصلاح لایه نمایش PDF
- **علائم مشاهده‌شده:** در iPhone Safari محتوای گزارش داخل preview از عرض صفحه بزرگ‌تر بود و ستون‌ها/عنوان‌های سمت چپ بریده می‌شدند؛ تنظیم CSS عرض iframe به‌تنهایی نمایشگر داخلی PDF Safari را کنترل نمی‌کرد.
- **شواهد علت:** موتور R24 فایل PDF را داخل iframe بومی Safari نشان می‌داد و به fragmentهای zoom برای درخواست fit تکیه داشت. viewer داخلی PDF مستقل از CSS والد رندر می‌شود؛ تصویر ارسالی کاربر نشان می‌دهد fit واقعی عرض انجام نشده است.
- **راه‌حل R6:** استفاده از PDF.js نسخه 3.11.174 برای رندر هر صفحه PDF روی Canvas با مقیاس محاسبه‌شده از عرض واقعی viewer؛ پشتیبانی از تغییر عرض/چرخش دستگاه با ResizeObserver؛ محدودکردن output scale به حداکثر 1.5 برای کنترل مصرف حافظه iPhone. PDF اصلی تولیدشده و A4 portrait تغییر نمی‌کند؛ Canvas فقط لایه نمایش است. iframe پنهان برای حفظ مسیر فعلی Print از روی PDF اصلی باقی می‌ماند. فقط دو کنترل Back و Print نمایش داده می‌شوند.
- **فایل‌ها:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html` و `tha-print-engine.js`، `VERSION-AUTHORITY.json` و همین دو سند تعمیر.
- **Build ID هدف:** `THA-273-R11-PREVIEW-20261117-R25`
- **PR:** #63 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/63 ؛ merge commit: `a7dedd33e9a76422373ea61e57e820f0128aa553`.
- **Version Authority Gate:** PASS در PR run `44162441065` و main run `44162503158` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44162503158.
- **Preview Pages:** PASS؛ build، deploy و report-build-status همگی موفق در run `44162501867` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44162501867.
- **تست‌های کد:** V8 syntax parse برای موتور و هر 25 بلوک inline JavaScript موفق؛ هر 22 SHA در manifest با درخت Git تطبیق دارد؛ PR فقط پنج فایل مجاز را تغییر داد.
- **تست iPhone Safari:** هنوز انجام نشده؛ fit عرض، چاپ واقعی A4 و Back باید توسط کاربر بررسی شوند.
- **تست iPhone Safari:** not tested؛ باید fit عرض، اسکرول عمودی صفحات، چاپ واقعی A4 و Back بررسی شوند.
- **محدودیت:** کیفیت PDF چاپی از Canvas preview گرفته نمی‌شود؛ چاپ باید از PDF blob اصلی انجام شود. عملکرد iframe پنهان برای print در Safari هنوز نیازمند تست واقعی است.
- **Production:** هیچ تغییری انجام نشده؛ ارتقا مجاز نیست.

### بازنگری راه‌حل R7 — چاپ کامل PDF چندصفحه‌ای و حذف ردیف متریال صفر

- **تاریخ:** 2026-11-17
- **درخواست کاربر:** PDF گزارش دو صفحه دارد اما فقط صفحه اول به چاپگر ارسال می‌شود؛ همچنین ردیف‌های موجود فقط در بخش Materials که مبلغشان صفر است نباید در گزارش چاپی دیده شوند.
- **علت فنی چاپ در سورس R25:** iframe حاوی PDF اصلی با ابعاد 1×1 پیکسل و خارج از صفحه قرار داشت؛ علاوه بر آن، قانون `@media print` کل `.tha-pe-overlay` را `display:none` می‌کرد، بنابراین iframe منبع چاپ در زمان چاپ والد نیز مخفی می‌شد. این ساختار با چاپ مطمئن یک سند چندصفحه‌ای سازگار نبود.
- **راه‌حل چاپ R7:** iframe منبع PDF به اندازه کامل overlay (100%) تغییر کرد؛ در حالت چاپ، overlay باقی می‌ماند، toolbar/status/canvas/actions پنهان می‌شوند و iframe اصلی PDF در ابعاد کامل viewport نمایش داده می‌شود. فرمان Print همچنان فقط با لمس صریح دکمه Print اجرا می‌شود و تعداد صفحات PDF.js در پیام وضعیت نمایش داده می‌شود.
- **راه‌حل متریال R7:** فقط رکوردهای `materials` که مبلغشان پس از گردکردن به پنی صفر است (`£0.00`) از Full Project Report و Project Reconciliation Register کنار گذاشته می‌شوند. ردیف‌های مواد با مبلغ غیرصفر حفظ می‌شوند. ردیف خلاصه Legacy material records نیز وقتی جمع آن صفر است نمایش داده نمی‌شود. هیچ رکوردی از IndexedDB حذف یا تغییر داده نمی‌شود.
- **فایل‌ها:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`، `tha-print-engine.js`، `VERSION-AUTHORITY.json`، `REPAIR_HISTORY_FA.md` و `REPAIR_INDEX_FA.md`.
- **Build ID هدف:** `THA-273-R11-PREVIEW-20261117-R26`
- **PR:** #65 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/65 ؛ merge commit: `a60ea0600cdd0ce72face12637b27360effbd1b0`.
- **Version Authority Gate:** PASS در PR run `44164968390` و main run `44165059757` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44165059757.
- **Preview Pages:** PASS؛ build، report-build-status و Deploy to GitHub Pages همگی موفق در run `44165058809` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44165058809.
- **تست کد:** V8 syntax parse برای موتور و هر 25 بلوک inline JavaScript موفق (26 واحد)؛ هر 22 SHA در manifest تطبیق دارد؛ دو فیلتر Materials و حذف ردیف خلاصه صفر بررسی استاتیک شدند.
- **تست iPhone Safari:** not tested؛ باید تعداد صفحات در print dialog، خروجی واقعی A4 و باقی‌ماندن ردیف‌های Material غیرصفر بررسی شوند.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.

### بازنگری راه‌حل R8 — تحویل PDF چندصفحه‌ای به چاپ بومی iOS و جریان پیوسته A4

- **تاریخ:** 2026-11-17
- **نوع تغییر:** تکمیلی / جایگزینی مسیر چاپ R7 و اصلاح صفحه‌بندی
- **علائم تأییدشده توسط کاربر:** در Preview R26، پیش‌نمایش PDF دو صفحه نشان می‌داد اما پنجره چاپ iPhone فقط Page 1 و Page 1 of 1 را دریافت می‌کرد. تصویر همچنین فضای خالی زیاد در پایین صفحه اول و شروع دیرهنگام محتوای صفحه دوم را نشان داد.
- **علت فنی چاپ:** مسیر R26 از iframe.contentWindow.print() استفاده می‌کرد. این مسیر در iPhone Safari فایل PDF را به پنجره چاپ به‌صورت یک‌صفحه‌ای تحویل داد؛ تعداد صفحات PDF.js در خود preview، تحویل صحیح به print pipeline را تضمین نمی‌کرد.
- **علت فنی صفحه‌بندی:** چیدمان capture از grid استفاده می‌کرد و گروه‌های گزارش با break-inside: avoid نگه داشته می‌شدند. وقتی یک گروه کامل در فضای باقیمانده صفحه جا نمی‌شد، مرورگر آن را به صفحه بعد منتقل می‌کرد و فضای خالی در صفحه قبلی باقی می‌ماند.
- **راه‌حل چاپ R8:** حذف iframe چاپ از موتور مرکزی. دکمه Print، فایل File ساخته‌شده از همان PDF اصلی را با navigator.share({files:[...]}) به Share Sheet بومی iOS می‌دهد؛ کاربر در همان منو Print را انتخاب می‌کند. در مرورگرهایی که اشتراک فایل را پشتیبانی نمی‌کنند، PDF اصلی در تب جدید Safari باز می‌شود تا چاپ از کنترل‌های بومی PDF انجام شود. هیچ PDF جدیدی از Canvas ساخته نمی‌شود و محتوای PDF اصلی حفظ می‌شود.
- **راه‌حل صفحه‌بندی R8:** تبدیل .uc-columns از grid به block flow و تبدیل فرزندان آن به بلوک‌های تمام‌عرض؛ اجازه شکستن .uc-group و .uc-summary در مرز صفحات؛ حفظ heading با بخش بعدی و حفظ ردیف‌های منفرد تا حد ممکن؛ تغییر حاشیه عمودی تولید A4 از 12 به 8 میلی‌متر. هیچ متن یا رکورد مالی برای پرکردن صفحه حذف نشده است.
- **فایل‌ها:** v273-isolated-test/r11-income-prefix-repair-20261114/index.html، tha-print-engine.js، VERSION-AUTHORITY.json و دو سند Repair History/Index.
- **Build ID هدف:** THA-273-R11-PREVIEW-20261117-R27
- **PR:** #67 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/67 ؛ merge commit: 6dcb4f9c0dae1904b194a4505edb3e62fa538821.
- **Version Authority Gate:** PASS در PR run 44171079199 و main run 44171153464 — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44171153464. دو اجرای اولیه به‌دلیل ثابت داخلی R26 مسدود شدند؛ ثابت canonical به R27 اصلاح شد و Gate نهایی PASS شد.
- **Preview Pages:** PASS در run 44171153146؛ build، report-build-status و Deploy to GitHub Pages همگی موفق شدند — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44171153146.
- **تست‌های استاتیک:** V8 syntax parse برای موتور و 8 بلوک inline JavaScript موفق؛ منطق handler دیگر از iframe.contentWindow.print() استفاده نمی‌کند؛ Share Sheet فایل اصلی PDF را می‌گیرد؛ fallback نیز URL همان PDF اصلی را باز می‌کند؛ قانون block flow و اجازه شکستن گروه‌ها در سورس تأیید شده است.
- **تست iPhone Safari:** not tested؛ باید Share Sheet، انتخاب Print، تعداد صفحات کامل و توزیع محتوا در صفحات A4 بررسی شوند. ظاهر واقعی صفحه‌بندی تا زمان تست مرورگر تأییدشده محسوب نمی‌شود.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.

### بازنگری راه‌حل R9 — مرکزکردن افقی PDF گزارش مالی روی A4
- **تاریخ:** 2026-11-17
- **علامت مشاهده‌شده:** در تصویر iPhone Safari، صفحه سفید PDF و محتوای گزارش از نظر افقی در مرکز نبودند؛ فاصله سمت چپ از فاصله سمت راست بیشتر دیده می‌شد.
- **علت در سورس R29:** عرض captureRoot برابر 185mm بود، اما حاشیه‌های افقی PDF هرکدام 7mm تنظیم شده بودند؛ بنابراین عرض ناحیه قابل چاپ 196mm می‌شد و html2pdf محتوای 185mm را از ابتدای ناحیه قابل چاپ قرار می‌داد، نه در مرکز آن. اختلاف 11mm فضای خالی به سمت راست باقی می‌گذاشت.
- **راه‌حل R30:** حاشیه‌های افقی PDF به 12.5mm در هر طرف تغییر کرد؛ با عرض A4 برابر 210mm، ناحیه قابل چاپ دقیقاً 185mm است و با عرض captureRoot برابر می‌شود. حاشیه عمودی 8mm بدون تغییر باقی ماند. فقط آرگومان margin در فراخوانی گزارش مالی تغییر کرد؛ اندازه فونت، جدول‌ها، صفحه‌بندی، داده‌ها و موتور مرکزی دست‌نخورده ماندند.
- **دامنه:** فقط تابع printReport در مسیر Accounting Financial Report؛ فاکتور R29، قرارداد، رسید، گزارش پروژه، IndexedDB، LocalStorage و بکاپ‌ها خارج از تغییر هستند.
- **Build هدف:** THA-273-R11-PREVIEW-20261117-R30.
- **تست:** بررسی منبع و تطبیق SHAهای manifest پیش از تغییر انجام شد؛ تست V8، Gate، انتشار Pages و تست واقعی iPhone Safari تا زمان ثبت نتایج در وضعیت pending هستند.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.

### بازنگری راه‌حل R10 — حذف حاشیه افقی تکراری در تولید PDF گزارش مالی
- **تاریخ:** 2026-11-17
- **نوع تغییر:** بازگشایی همان مشکل چیدمان PDF؛ R30 مشکل را کامل حل نکرد.
- **نتیجه تست iPhone Safari در R30:** تصویر کاربر نشان داد سمت راست محتوای گزارش و مبالغ همچنان از محدوده قابل مشاهده/صفحه خارج می‌شود؛ بنابراین R30 تأیید نشد و پرونده PDF-LAYOUT-001 باز است.
- **تحلیل سورس:** R30 هم captureRoot را 185mm نگه می‌داشت و هم حاشیه چپ/راست PDF را 12.5mm قرار داده بود. این دو محدودیت در زنجیره html2pdf می‌توانند عرض 185mm را دوباره داخل ناحیه محدودشده قرار دهند و حاشیه مؤثر/محل شروع محتوا را نادرست کنند. تغییر R31 از تحمیل حاشیه در تنظیمات PDF صرف‌نظر می‌کند و مرکزکردن را فقط به عرض ثابت 185mm و margin:auto خود captureRoot می‌سپارد.
- **راه‌حل R31:** حاشیه PDF به `[8,0,8,0]` تغییر کرد؛ عرض captureRoot همچنان 185mm و margin افقی آن auto باقی ماند. در A4 با عرض 210mm، مرکزکردن یک محتوای 185mm به‌صورت هندسی 12.5mm فضای مساوی در هر طرف ایجاد می‌کند. حاشیه عمودی 8mm حفظ شد. فقط فراخوانی گزارش مالی تغییر کرد؛ موتور PDF مشترک و مسیرهای فاکتور/قرارداد/رسید/گزارش پروژه دست‌نخورده‌اند.
- **Build هدف:** THA-273-R11-PREVIEW-20261117-R31.
- **تست‌های سورس و Authority:** PASS؛ Gate نهایی run `44178697278` تأیید کرد شناسه R31، URL، baseline و هر 22 فایل pinشده صحیح هستند. فراخوانی گزارش مالی `[8,0,8,0]` و captureRoot با عرض 185mm و margin افقی auto بررسی شدند.
- **PR / Merge:** PR #75 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/75 ؛ merge commit `87a0f3dec1783d8002c342f5021954b747ac8952`.
- **Preview Pages:** PASS؛ run `44178696828` — build، report-build-status و deploy همگی موفق شدند.
- **تست واقعی iPhone Safari:** not tested؛ منتظر تصویر R31 برای تأیید برابری حاشیه‌ها و دیده‌شدن کامل اعداد و لبه راست جدول هستیم.
- **وضعیت پرونده:** Reopened / Fixed — awaiting verification؛ تا مشاهده خروجی Safari بسته نمی‌شود.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.

### PDF-INV-001 — تراز افقی سند PDF فاکتور روی A4

- **وضعیت:** اصلاح سورس در Preview R29 ثبت شده؛ بررسی خروجی واقعی PDF و iPhone Safari هنوز pending است.
- **تاریخ:** 2026-11-17
- **علامت:** سند PDF فاکتور در صفحه A4 از نظر چپ و راست به‌صورت متقارن در مرکز قرار نمی‌گرفت.
- **دامنه:** فقط تابع مستقل `openInvoicePrintView()` برای فاکتور؛ موتور گزارش مالی و مسیرهای قرارداد، رسید و گزارش پروژه خارج از این اصلاح هستند.
- **علت فنی در سورس R28:** عرض سند HTML فاکتور `194mm` و حاشیه PDF در هر طرف `8mm` بود. برای صفحه A4 با عرض `210mm`، ناحیه چاپ `194mm` می‌شد؛ اما برای خروجی پایدارتر، عرض سند و فضای قابل چاپ باید با یک اندازه واحد و حاشیه‌های متقارن صریح تنظیم شوند.
- **راه‌حل R29:** عرض body و سند فاکتور به `190mm`، حاشیه PDF به `10mm` در هر چهار طرف و padding داخلی clone به `6mm` تغییر کرد. عرض مفید محتوای فاکتور حفظ شد (178mm قبل و بعد از تغییر)؛ بنابراین اصلاح صرفاً تراز افقی را هدف می‌گیرد و نباید باعث کوچک‌شدن محتوای چاپی شود.
- **Build ID هدف:** `THA-273-R11-PREVIEW-20261117-R29`
- **زمان آماده‌سازی Build:** `2026-11-17T20:59:26.000Z`؛ این زمان، زمان آماده‌سازی build است، نه زمان قطعی تکمیل انتشار Pages.
- **فایل‌های تغییرکرده:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`، `VERSION-AUTHORITY.json`، `docs/REPAIR_HISTORY_FA.md` و `docs/REPAIR_INDEX_FA.md`.
- **PR / Gate / Pages:** pending تا پایان workflow.
- **تست‌های استاتیک:** pending؛ باید syntax JavaScript، عرض‌های 190mm، padding شش میلی‌متر، حاشیه متقارن ده میلی‌متر و حفظ عرض محتوای مفید 178mm بررسی شوند.
- **تست iPhone Safari:** not tested؛ کاربر باید تقارن حاشیه‌های چپ و راست، دیده‌شدن کامل عرض سند، خروجی A4 و عملکرد Back را در Preview بررسی کند.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.

#### بازنگری R2 — ثبت نتیجه انتشار Preview

- **PR:** #72 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/72 ؛ merge commit: `75e70c1efc8c1f58e22d0c0e21d83f3cd463a5f8`.
- **Version Authority Gate:** PASS؛ PR run `44175415156` و post-merge main run `44175595034` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44175595034.
- **Preview Pages:** PASS؛ build، report-build-status و deploy در run `44175594286` کامل شدند — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44175594286.
- **بررسی SHA:** هر 22 فایل وابسته Preview و هر 21 فایل وابسته Production پیش از تغییر با manifest مربوطه تطبیق داده شدند؛ SHA فایل index و pin داخل manifest R29 نیز یکسان است.
- **Static checks:** اندازه‌های 190mm سند، 10mm حاشیه متقارن و 6mm padding تأیید شدند؛ عرض مفید محتوای فاکتور با مقدار قبلی برابر 178mm باقی می‌ماند. تست parser مستقل JavaScript انجام نشده است.
- **تست iPhone Safari:** not tested؛ باید کاربر خروجی PDF واقعی، تقارن چپ و راست و عملکرد Back را بررسی کند.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.

## 6. کیفیت و نگهداری دفترچه

- فقط مشکل مشاهده‌شده و علت دارای شواهد را به‌عنوان تعمیر تأییدشده ثبت کن.
- راه‌حل ناموفق را نیز با وضعیت «ردشده» ثبت کن تا دوباره تکرار نشود.
- موردی که تست نشده، Verified نیست؛ وضعیت آن باید pending/not tested بماند.
- هر تغییر جدید در دفترچه باید از Preview `development` و PR به Preview `main` عبور کند.
- تغییر در این دفترچه به‌تنهایی مجوز تغییر کد برنامه یا Production نیست.
- پس از هر تعمیر جدید، ابتدا پرونده موجود را برای تطابق بررسی کن؛ در صورت تطابق همان پرونده و همان ردیف فهرست را به‌روزرسانی کن.
- برای هر تکمیل یا اصلاح مجدد، یک بازنگری به تاریخچه همان پرونده اضافه کن؛ راه‌حل‌های قبلی را حذف نکن.
- فقط برای علت ریشه‌ای مستقل و مستند، شناسه و پرونده جدید بساز.
- دفترچه کامل و فهرست موضوعی باید در همان مجموعه تغییرات به‌روز شوند.

### DATA-001 — بازیابی بکاپ کامل Production در پایگاه داده جداگانه Preview

- **وضعیت فعلی:** اصلاح در Preview main ادغام و GitHub Pages با موفقیت منتشر شده است؛ تست واقعی بازیابی بکاپ در iPhone Safari هنوز pending است.
- **بازنگری R2:** پس از اصلاح SHA فایل recovery، اجرای Gate مورد دوم را مشخص کرد: فایل `index.html` به‌علت تغییر cache key در PR، SHA قدیمی در دو محل manifest داشت. هر دو مقدار `app.indexBlobSha` و pin فایل index اکنون با Git blob SHA واقعی نسخه development هماهنگ شده‌اند. نتیجه Gate جدید هنوز pending است.

- **تاریخ:** 2026-11-17
- **علائم مشاهده‌شده:** بکاپ کامل صادرشده از Production در مسیر بازیابی Preview پذیرفته نمی‌شد، در حالی که بازیابی همان بکاپ در محیط Production موفق گزارش شده بود.
- **محیط:** Preview repository `Thehandymanjob/accountancy-r11-preview`؛ Preview branch `development`؛ برنامه v273 / R11؛ Build ID فعلی R33. مقصد موردنظر فقط پایگاه داده مستقل Preview با نام `the_handyman_accountancy_r11_preview_idb` است. Production repository و پایگاه داده آن خارج از دامنه تغییر هستند.
- **علت ریشه‌ای تأییدشده در کد:** اعتبارسنجی اولیه فایل بکاپ، نام پایگاه داده منبع را با نام پایگاه داده مقصد یکسان می‌خواست. بنابراین بکاپ معتبر Production با نام دیتابیس نسخه‌دار Production پیش از ورود به مسیر restore مقصد Preview رد می‌شد.
- **روش تشخیص:** بررسی `v264-recovery.js` و قرارداد restore نشان داد بررسی اولیه، منبع و مقصد را یکی فرض کرده بود. همچنین اجرای R11 Version Authority Gate روی PR #80 با خطای مشخص `runtime file SHA mismatch: v273-isolated-test/v264-fresh/v264-recovery.js` متوقف شد؛ فایل recovery تغییر کرده بود اما SHA جدید آن در فهرست pinشده manifest ثبت نشده بود.
- **راه‌حل جاری:** اجازه دادن به نام دیتابیس منبع فقط در دو حالت: دیتابیس فعلی Preview یا نام نسخه‌دار Production مطابق الگوی `the_handyman_accountancy_v<number>_clean_idb`. پس از اعتبارسنجی کامل ساختار، SHA-256، snapshot، 17 دامنه و شناسه یکتای رکوردها، هویت دیتابیس snapshot به دیتابیس مقصد Preview بازنویسی می‌شود. بررسی مقصد در restore engine و recovery handshake همچنان فعال و سخت‌گیرانه باقی می‌ماند. SHA فایل recovery در `VERSION-AUTHORITY.json` با Git blob SHA واقعی آن هماهنگ شد.
- **حفاظت داده:** این تغییر به‌خودی‌خود هیچ restore یا پاک‌سازی انجام نمی‌دهد. اجرای Restore در Preview همچنان جایگزین‌کننده داده‌های دیتابیس مقصد Preview است؛ قبل از تست باید از داده‌های Preview نسخه پشتیبان مستقل وجود داشته باشد. هیچ تغییری در Production، IndexedDB Production، بکاپ‌های کاربر یا LocalStorage انجام نشده است.
- **فایل‌های تغییرکرده:** `v273-isolated-test/v264-fresh/v264-recovery.js`، `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`، `VERSION-AUTHORITY.json`، `docs/REPAIR_HISTORY_FA.md` و `docs/REPAIR_INDEX_FA.md`.
- **مواردی که نباید تکرار شوند:** نام دیتابیس منبع را بدون اعتبارسنجی به نام مقصد تغییر نده؛ SHA-256، فهرست دامنه‌ها، اعتبارسنجی رکوردها، کنترل نام دیتابیس مقصد و recovery handshake را حذف یا تضعیف نکن؛ Gate را دور نزن.
- **تست و شواهد:** اجرای قبلی Gate در PR #80 شکست خورد چون SHA فایل recovery در manifest به‌روز نبود. اصلاح pin اکنون روی development ثبت شده؛ اجرای Gate جدید، static checks و Pages deployment هنوز pending هستند.
- **PR / Commit / Merge:** PR #80 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/80 ؛ development commit: `fd8b2abd6f5313ed8a184fea6d935d78c14a574a`؛ merge commit: `70e67925f8c617e1bd50f97a2f360c15ed97830f`.
- **Version Authority Gate:** PASS؛ PR run `44199397048` و post-merge main run `44199571718`.
- **Preview Pages:** PASS؛ build، deploy و report-build-status در run `44199570482` موفق شدند.
- **Preview Pages deployment:** PASS؛ run `44199570482` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/44199570482.
- **معیار پذیرش تست کاربر:** بکاپ معتبر Production در Preview انتخاب و اعتبارسنجی شود؛ Restore فقط روی دیتابیس Preview اجرا شود؛ تعداد کل رکوردها، تعداد رکوردهای هر 17 دامنه، سلامت دیتابیس و چند رکورد مهم با اطلاعات بکاپ مقایسه شوند. تست واقعی iPhone Safari هنوز انجام نشده است.
- **وضعیت کاربر:** کاربر ادامه اصلاح Preview را مجاز کرده است؛ تأیید انتقال به Production صادر نشده است.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.



### PRJ-PDF-001 — صفحه‌بندی گزارش کامل پروژه و جلوگیری از جداافتادن عنوان بخش‌ها

- **شناسه / تاریخ:** PRJ-PDF-001 / 2026-11-23
- **وضعیت فعلی:** Fixed — awaiting verification
- **محیط:** Preview repository؛ برنامه 273 / R11؛ Build ID هدف `THA-273-R11-PREVIEW-20261123-R34`؛ iPhone Safari هنوز آزمایش نشده است.
- **علائم:** در PDF گزارش کامل پروژه، هنگام عبور محتوای پروژه و زیرپروژه‌ها از مرز صفحه ممکن است عنوان بخش از خلاصه همان بخش یا عنوان جدول از جدول بعدی جدا شود؛ همچنین رفتار سربرگ جدول در صفحات ادامه‌دار باید بررسی شود.
- **علت ریشه‌ای تأییدشده در سورس:** تولید PDF این گزارش از `prRunSubReportPrint()` و `html2pdf` مستقل از موتور مرکزی گزارش مالی استفاده می‌کند. گزینه `pagebreak.avoid` فقط header، project، KPI، result، ردیف‌ها و footer را هدف گرفته بود و برای `.sfr-breakdown h3`، `.sfr-breakdown h4` و پاراگراف خلاصه بعد از عنوان، قاعده‌ای نداشت. CSS موجود نیز عنوان‌های بخش را به عنصر بعدی متصل نمی‌کرد و برای `thead` گروه سربرگ چاپی تعریف نشده بود.
- **روش تشخیص:** بررسی تابع `prPrintFullProjectReport()`، ساختار HTML هر `.sfr-breakdown` و گزینه‌های html2pdf در `prRunSubReportPrint()` در شاخه development؛ هر بخش به‌ترتیب شامل h3، پاراگراف خلاصه، جدول درآمد، جدول هزینه و گاهی بلوک تقسیم سود است.
- **راه‌حل R1:** افزودن CSS مستقل و self-contained زیر `.sfr-report` تا هنگام clone شدن گزارش توسط html2pdf همچنان اعمال شود؛ جلوگیری از شکستن عنوان‌های h3/h4 و پاراگراف خلاصه، اتصال عنوان به محتوای بعدی با `break-after: avoid-page`، اجازه ادامه جدول در صفحه بعد، تعریف `thead`/ `tfoot` به‌صورت table header/footer group و جلوگیری از شکستن ردیف‌های منفرد. فهرست `pagebreak.avoid` نیز برای همین اجزا تکمیل شد. هیچ داده مالی، رکورد IndexedDB، محاسبه مجموع یا قاعده انتخاب هزینه تغییر نکرد.
- **فایل‌های تغییرکرده:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`، `VERSION-AUTHORITY.json`، همین دفترچه و `docs/REPAIR_INDEX_FA.md`.
- **Build ID / URL:** `THA-273-R11-PREVIEW-20261123-R34` / https://thehandymanjob.github.io/accountancy-r11-preview/v273-isolated-test/r11-income-prefix-repair-20261114/?build=R34
- **Commit توسعه HTML:** `d844f28d6dbbbde55fe784b4f70ce252ba334dc0`؛ Authority commit: `204743a2e5ea970814a34fc2243b07bca50d2a21`.
- **PR:** #81 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/81 ؛ **Merge commit:** `671f2fe82c17b3dc53591920db60d78b9e38dafe`.
- **Version Authority Gate:** PASS در PR run `45283620039` و main run `45283776519` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/45283776519.
- **Preview Pages:** PASS؛ build، report-build-status و deploy در run `45283776325` کامل شدند — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/45283776325.
- **Static checks:** Gate تمام 22 فایل pinشده را تأیید کرد؛ Build ID، URL، index SHA و dependency pins بررسی شدند. بررسی source-level گزینه‌های pagebreak و CSS انجام شد. اجرای زنده مرورگر و PDF واقعی انجام نشده است.
- **تست iPhone Safari:** not tested؛ معیار پذیرش: با داده واقعی و چندین زیرپروژه، عنوان هر بخش همراه خلاصه‌اش بماند، عنوان Income and receipts و Individual cost records از جدول مربوط جدا نشود، ردیف‌ها نشکنند، سربرگ جدول در ادامه صفحات تکرار شود و تمام مبالغ/صفحات حفظ شوند.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.
- **ارتباط با موارد قبلی:** مستقل از `PDF-LAYOUT-001` گزارش مالی Accounting؛ این پرونده مربوط به مسیر جداگانه Full Project Report در Project Workspace است.


### UI-SETTINGS-BACK-001 — بازگشت مستقیم از صفحه Settings به منوی اصلی

- **شناسه / تاریخ:** UI-SETTINGS-BACK-001 / 2026-11-24
- **وضعیت:** Fixed — awaiting verification
- **علامت مشاهده‌شده:** ورود از منوی اصلی به Settings و ورود/بازگشت از هر یک از هشت گزینه Settings درست است؛ فقط دکمه Back خود صفحه Settings به‌جای منوی اصلی برنامه، صفحه Accountancy را باز می‌کند و کاربر مجبور به یک Back اضافی می‌شود.
- **محیط:** Preview، مخزن `Thehandymanjob/accountancy-r11-preview`، شاخه دائمی `development`، برنامه 273 / R11؛ Build هدف `THA-273-R11-PREVIEW-20261124-R35`.
- **علت ریشه‌ای تأییدشده در سورس:** در نگاشت `ACCOUNTING_PARENT` مقدار والد `settings` برابر `accountancyHome` بود. تابع `goBackOnePage()` از همین نگاشت برای تعیین مقصد دکمه Back استفاده می‌کند؛ بنابراین Settings به صفحه Accountancy برمی‌گشت.
- **راه‌حل R1:** فقط مقدار والد `settings` از `accountancyHome` به `launcher` تغییر کرد. نگاشت والد هفت زیرصفحه قبلی حفظ شد و برای `languageSettings` نیز والد `settings` صریحاً اضافه شد؛ بنابراین هر هشت گزینه Backup، Language، Profile & Logo، Help، User Guide، Software Update، Monitor & Diagnostics و Factory Reset با Back به Settings برمی‌گردند. هیچ کد دیتابیس، داده، عملیات Backup/Restore یا منطق هشت دکمه تغییر نکرد.
- **فایل‌های تغییرکرده:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`، `VERSION-AUTHORITY.json`، `docs/REPAIR_HISTORY_FA.md` و `docs/REPAIR_INDEX_FA.md`.
- **Commit توسعه کد:** `19acfcfaccc67db4f8e31fc9d8f59df8803857b6`؛ PR #84 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/84؛ Gate و Pages pending هستند.
- **تست استاتیک اولیه:** والد Settings به `launcher` تغییر کرد و والد `languageSettings` به `settings` اضافه شد؛ هفت نگاشت دیگر بدون تغییر هستند. آزمون source-level و Gate هنوز pending است.
- **معیار پذیرش:** از منوی اصلی وارد Settings شو؛ Back باید مستقیم منوی اصلی را باز کند. سپس هر هشت گزینه را جداگانه باز کن؛ Back هرکدام باید به Settings برگردد. از Settings هیچ‌گاه نباید برای رسیدن به منوی اصلی وارد Accountancy شد.
- **iPhone Safari:** not tested؛ منتظر تست کاربر پس از انتشار Preview.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.


### UI-MONITOR-SCROLL-001 — باز شدن Monitor & Diagnostics از ابتدای صفحه

- **شناسه / تاریخ:** UI-MONITOR-SCROLL-001 / 2026-11-24
- **وضعیت:** Merged and deployed to Preview — awaiting Safari verification
- **علامت مشاهده‌شده:** با ورود به Monitor & Diagnostics، صفحه به‌جای نمایش عنوان و ابتدای محتوا، در موقعیت اسکرول پایین‌تری ظاهر می‌شود و کاربر باید دستی به بالای صفحه برگردد.
- **محیط:** Preview، مخزن `Thehandymanjob/accountancy-r11-preview`، شاخه دائمی `development`، برنامه 273 / R11؛ Build هدف `THA-273-R11-PREVIEW-20261124-R36`.
- **علت فنی در سورس:** تابع `show(id)` کلاس `monitor-view` را فعال و پنل `#monitor` را نمایش می‌دهد و سپس `renderMonitor()` را اجرا می‌کند، اما موقعیت اسکرول سند را بازنشانی نمی‌کند. در نتیجه scroll position قبلی سند می‌تواند هنگام نمایش Monitor باقی بماند.
- **راه‌حل R1:** فقط در شاخه `id==='monitor'`، پس از اجرای `renderMonitor()` یک `requestAnimationFrame` زمان‌بندی می‌شود؛ callback ابتدا بررسی می‌کند که هنوز صفحه جاری Monitor است، سپس پنجره و `document.scrollingElement` را به مختصات بالای صفحه می‌برد. این کار پس از اعمال کلاس‌ها و نمایش پنل انجام می‌شود تا تغییر چیدمان صفحه نیز لحاظ شود. برای سایر صفحات هیچ scroll reset اضافه نشده است.
- **فایل‌های تغییرکرده:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`، `VERSION-AUTHORITY.json`، `docs/REPAIR_HISTORY_FA.md` و `docs/REPAIR_INDEX_FA.md`.
- **Commit توسعه کد:** `babe0669eb932fd6122b2ae1743ad937072be46c`؛ PR #85 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/85؛ Merge commit: `c199059ba907b84791f4a22f153ade7b0691e979`.
- **Version Authority Gate:** PASS در run `45498128544` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/45498128544؛ Gate روی PR و main موفق شد و 22 فایل pinشده را بررسی کرد.
- **Preview Pages:** PASS در run `45498207879` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/45498207879؛ build، deploy و report-build-status موفق شدند.
- **تست استاتیک:** وجود scroll reset فقط در مسیر Monitor باید تأیید شود؛ اجرای واقعی iPhone Safari هنوز انجام نشده است.
- **معیار پذیرش:** از Settings وارد Monitor & Diagnostics شو؛ عنوان صفحه و ابتدای آن باید بدون اسکرول دستی دیده شود. اگر داخل Monitor به پایین اسکرول کرده و خارج شوی و دوباره وارد شوی، ورود مجدد باید از بالا باشد. اسکرول سایر صفحات نباید تغییر کند.
- **iPhone Safari:** not tested؛ منتظر تست کاربر پس از انتشار Preview.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.


### ACC-CAT-001 — تفکیک و نگهداری مستقل دسته‌بندی هزینه‌ها

- **شناسه / تاریخ:** ACC-CAT-001 / 2026-11-26
- **وضعیت:** Merged and deployed to Preview R38 — awaiting iPhone Safari verification.
- **علامت مشاهده‌شده:** در Add Entry → Expenses، گزینه‌های Category شامل فروشگاه‌های خرید مصالح، هزینه‌های خودرو، ابزار و سایر هزینه‌ها در یک فهرست مخلوط نمایش داده می‌شدند. افزودن گزینه جدید نیز به یک آرایه سفارشی مشترک وابسته بود.
- **محیط / مرجع:** مخزن Thehandymanjob/accountancy-r11-preview؛ شاخه development؛ مبنای R37؛ Build هدف THA-273-R11-PREVIEW-20261126-R38.
- **علت ریشه‌ای:** fillCategories() گزینه‌ها را با پیشوندهای متنی در چند گروه نمایشی فیلتر می‌کرد، اما customExpenseCategories فقط یک آرایه سراسری بود و مسیر افزودن مورد جدید درون فرم Expense قرار داشت؛ بنابراین گروه انتخاب‌شده هنگام ذخیره گزینه جدید مشخص و پایدار نمی‌شد.
- **راه‌حل R38:** چهار گروه مستقل Materials، Car Expenses، Tools و Others ایجاد شد. هر گروه در انتهای فهرست خود دکمه Add New One دارد. دکمه یک صفحه تمام‌صفحه برای ورود نام باز می‌کند؛ پس از اعتبارسنجی نام و کنترل تکراری نبودن در همان گروه، گزینه جدید فوراً در فهرست اختصاصی همان گروه ذخیره می‌شود و رابط به همان فهرست برمی‌گردد؛ مورد جدید انتخاب‌شده نمایش داده می‌شود.
- **ذخیره‌سازی و سازگاری:** فهرست‌های جدید در ویژگی expenseCategoryLists داخل همان Accounting state و از مسیر موجود IndexedDB ذخیره می‌شوند. شناسه دیتابیس، object store، قرارداد رکوردهای Expense، شماره‌ها و sequenceها تغییر نمی‌کنند. آرایه قدیمی customExpenseCategories حذف یا بازنویسی نمی‌شود؛ موارد دارای پیشوند شناخته‌شده در گروه مربوط قرار می‌گیرند و موارد قدیمی بدون گروه مشخص برای جلوگیری از ناپدیدشدن، در Others باقی می‌مانند. هیچ مهاجرت یا نوشتن خودکاری هنگام بارگذاری صفحه انجام نمی‌شود.
- **فایل‌های تغییرکرده:** v273-isolated-test/r11-income-prefix-repair-20261114/index.html، VERSION-AUTHORITY.json، docs/REPAIR_HISTORY_FA.md و docs/REPAIR_INDEX_FA.md.
- **تست استاتیک:** هر 8 اسکریپت inline با V8 syntax compilation بررسی شد؛ شبیه‌سازی گروه‌بندی موارد پایه، حفظ موارد سفارشی قدیمی، جداسازی فهرست‌های جدید و ساخت مقدار canonical برای هر گروه PASS شد. دیتابیس زنده Preview برای تست نوشتن باز یا تغییر داده نشد.
- **PR:** #88 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/88؛ Merge commit: 88f6f4feee11b9e4e22be52d18f1646f10c9c7fe.
- **Version Authority Gate:** PASS روی PR در run 45875250817 و روی Preview main در run 45875298526.
- **Preview Pages:** PASS در run 45875298277؛ build، deploy و report-build-status برای R38 موفق شدند.
- **Build ID / URL:** THA-273-R11-PREVIEW-20261126-R38؛ https://thehandymanjob.github.io/accountancy-r11-preview/v273-isolated-test/r11-income-prefix-repair-20261114/?build=R38.
- **معیار پذیرش iPhone Safari:** در هر چهار گروه Add New One باز شود؛ نام جدید ثبت شود؛ صفحه به همان گروه برگردد؛ مورد جدید در همان گروه دیده و انتخاب شود؛ پس از refresh و بستن/بازکردن Safari نیز باقی بماند. افزودن در یک گروه نباید فهرست گروه‌های دیگر را تغییر دهد.
- **تست iPhone Safari:** not tested؛ منتظر بررسی کاربر پس از انتشار Preview.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.


### ACC-CAT-002 — انتخاب دسته‌بندی هزینه در دکمه ثبت نمی‌ماند

- **شناسه / تاریخ:** ACC-CAT-002 / 2026-11-26
- **وضعیت فعلی:** Fixed — awaiting verification
- **علامت مشاهده‌شده:** در Add Entry → Expenses، پس از لمس یک گزینه مانند Selco، مقدار انتخاب‌شده روی دکمه Category نمایش داده نمی‌شود و دکمه همچنان «Select a category» را نشان می‌دهد.
- **محیط / نسخه:** Preview؛ مخزن `Thehandymanjob/accountancy-r11-preview`؛ شاخه دائمی `development`؛ نسخه 273 / R11؛ مبنای منتشرشده R38؛ Build اصلاحی هدف R39.
- **علت ریشه‌ای تأییدشده:** تابع `syncCategoryPicker()` برای یافتن گروه انتخاب‌شده از `expenseCategoryGroupDefinitions.find(g=>g.items.includes(...))` استفاده می‌کرد؛ اما تعریف‌های ثابت گروه‌ها فقط ویژگی `base` دارند و ویژگی `items` در خروجی `getExpenseCategoryGroups()` ساخته می‌شود. بنابراین هنگام همگام‌سازی، دسترسی به `g.items.includes` روی مقدار تعریف‌نشده خطای TypeError ایجاد می‌کرد و به‌روزرسانی متن دکمه انجام نمی‌شد.
- **روش تشخیص:** بررسی سورس R38 در شاخه development؛ تطبیق ساختار `expenseCategoryGroupDefinitions` با خروجی `getExpenseCategoryGroups()` و مسیر `chooseCategory() → syncCategoryPicker()`. خطا مستقل از IndexedDB و تابع ذخیره‌سازی است؛ انتخاب مقدار hidden input پیش از اجرای تابع همگام‌سازی انجام می‌شود.
- **راه‌حل R1 / R39:** فقط منبع lookup در `syncCategoryPicker()` به `getExpenseCategoryGroups().find(g=>g.items.includes(select.value))` تغییر کرد تا جست‌وجو روی اشیایی انجام شود که واقعاً `items` دارند. منطق انتخاب، ذخیره دسته‌بندی، گروه‌بندی، UI سایر بخش‌ها و قرارداد داده تغییر نکرد.
- **فایل‌های تغییرکرده:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`، `VERSION-AUTHORITY.json`، `docs/REPAIR_HISTORY_FA.md` و `docs/REPAIR_INDEX_FA.md`.
- **تست استاتیک:** هر 8 بلوک JavaScript درون HTML با V8 syntax compilation بررسی شد؛ خطای نحوی مشاهده نشد. آزمون مرورگر واقعی و iPhone Safari هنوز انجام نشده است.
- **تست داده و IndexedDB:** دیتابیس Preview برای این اصلاح بازنویسی یا تغییر داده نشد؛ هیچ رکورد، sequence، backup یا داده Production دست‌کاری نشده است.
- **Preview development commit کد:** `79e16c45680fb8e01ab4e19041bb8b24f6140406`.
- **PR:** #92 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/92؛ merged.
- **Merge commit:** `d5dcd37565881408424be96bdb361b16320ec647`.
- **Version Authority Gate:** PASS؛ PR run `45881830149` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/45881830149.
- **Preview Pages:** PASS؛ run `45881892461` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/45881892461؛ انتشار برای commit `d5dcd37565881408424be96bdb361b16320ec647` موفق شد.
- **Build ID هدف:** `THA-273-R11-PREVIEW-20261126-R39`.
- **معیار پذیرش iPhone Safari:** در Expenses، گزینه Selco و چند گزینه از گروه‌های Materials، Car Expenses، Tools و Others انتخاب شوند؛ نام انتخابی بلافاصله روی دکمه بماند؛ بازکردن دوباره فهرست همان گزینه را selected نشان دهد؛ انتخاب Contractor / subcontractor همچنان فیلد مربوط را فعال کند؛ ثبت Expense و refresh نیز رفتار قبلی را حفظ کند.
- **تست iPhone Safari:** not tested؛ منتظر بررسی کاربر پس از انتشار Preview.
- **Production:** بدون تغییر؛ ارتقا مجاز نیست.
- **ارتباط با مورد قبلی:** `ACC-CAT-001` مربوط به جداسازی و نگهداری فهرست‌های گروهی است؛ این پرونده علت مستقلِ خطای lookup در همگام‌سازی دکمه انتخاب را ثبت می‌کند.


### HELP-GUIDE-001 — خطای نحوی در تعریف زبان‌ها و فصل‌های راهنما

- **شناسه دائمی / تاریخ / وضعیت:** HELP-GUIDE-001 / 2026-11-26 / Fixed — awaiting verification.
- **عنوان و حوزه:** خطای نحوی در دیکشنری زبان و محتوای User Guide؛ حوزه HELP.
- **علائم مشاهده‌شده:** اسکریپت هفتم از هشت بلوک JavaScript درون HTML با خطای V8 برابر `SyntaxError: Unexpected identifier 'ur'` متوقف می‌شد؛ بنابراین تعریف زبان‌های جدید قابل اتکا نبود.
- **محیط و نسخه:** مخزن `Thehandymanjob/accountancy-r11-preview`؛ شاخه دائمی `development`؛ برنامه v273 / R11؛ Build هدف `THA-273-R11-PREVIEW-20261126-R43`؛ PR #96 به Preview main.
- **علت ریشه‌ای:** بین ویژگی زبان لهستانی `pl` و ویژگی اردو `ur` در شیء `GUIDE_LABELS` جداکننده ویرگول وجود نداشت. در دیکشنری `GUIDE_CONTENT` نیز مرز آرایه فصل لهستانی و ویژگی بعدی `ur` به ویرگول نیاز داشت؛ این جداکننده در یک commit تکمیلی development پیش از اصلاح نهایی این پرونده اضافه شده بود.
- **روش تشخیص:** استخراج هشت بلوک inline از HTML و کامپایل مستقل هر بلوک با V8؛ پیش از اصلاح، بلوک هفتم FAIL و هفت بلوک دیگر PASS بودند. بررسی ساختار دیکشنری‌ها نیز برای اطمینان از تطبیق کلید زبان‌ها و تعداد فصل‌ها انجام شد.
- **راه‌حل جاری:** افزودن ویرگول مفقود در مرز `pl` و `ur` در `GUIDE_LABELS`؛ حفظ جداکننده اصلاح‌شده در `GUIDE_CONTENT`. هیچ منطق حسابداری، داده، ذخیره‌سازی، راست‌به‌چپ رابط برنامه یا زبان UI تغییر نکرد.
- **تست و شواهد:** پس از اصلاح، هر ۸ بلوک inline با V8 syntax compilation نتیجه PASS دادند. ممیزی دیکشنری PASS: ۱۱ زبان دارای کلیدهای همسان در `GUIDE_LANGS` و `GUIDE_LABELS` هستند و هر ۱۱ زبان دقیقاً ۱۲ فصل در `GUIDE_CONTENT` دارند. این نتایج فقط بررسی ایستا هستند و جایگزین تست واقعی iPhone Safari نیستند.
- **فایل‌های تغییرکرده:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`، `VERSION-AUTHORITY.json`، `docs/REPAIR_INDEX_FA.md` و `docs/REPAIR_HISTORY_FA.md`.
- **Commit کد Preview development:** `784b1b809c5e17c5c7290971317f5b61920f0e82`.
- **PR:** #96 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/96؛ Draft؛ Merge نشده.
- **Version Authority Gate:** PASS؛ run `45910333714` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/45910333714. هویت R43، URL canonical، ancestry مبنای تأییدشده و هر ۲۲ SHA پین‌شده تطبیق داده شدند.
- **Preview Pages / انتشار:** انجام نشده؛ R43 هنوز منتشر نشده است.
- **iPhone Safari:** not tested؛ پس از عبور Gate و انتشار مجاز، تست انتخاب زبان، باز و بسته شدن فصل‌ها، حفظ انتخاب زبان پس از refresh و باقی ماندن رابط اصلی به انگلیسی/LTR لازم است.
- **Production:** بدون تغییر؛ R12 و داده‌های Production خارج از دامنه این اصلاح هستند.
- **کار باقی‌مانده:** تست واقعی iPhone Safari پس از تکمیل Help ID Registry و تأیید جداگانه مجوز انتشار؛ تا آن زمان PR #96 در حالت Draft می‌ماند و Preview Pages deploy نمی‌شود.

#### بازنگری Help Registry — رفع ناسازگاری شمارنده و بازنشستگی شناسه 0219
- **تاریخ:** 2026-11-27
- **نوع تغییر:** اصلاح مستندات در همان پرونده HELP-GUIDE-001؛ پرونده جدید ایجاد نشد.
- **شواهد:** Blob واقعی Registry با SHA قبلی `b2980212414c4b318d53c862f1d1a543b637d681` از GitHub خوانده شد. شمارش مستقیم JSON نشان داد 229 شناسه یکتا وجود دارد؛ 228 شناسه فعال با 228 ردیف HELP-REQUIRED در Inventory تطبیق یک‌به‌یک دارند و هیچ audit_ref تکراری یا مفقودی وجود ندارد. تمام 228 شناسه فعال دارای شش فیلد غیرخالی انگلیسی و فارسی هستند. 132 مورد در وضعیت CONTENT_COMPLETE و 96 مورد در وضعیت CONTENT_DRAFT باقی می‌مانند.
- **اصلاح:** فیلد `content_progress` که به‌اشتباه 54/175 را نشان می‌داد با شمارش واقعی 132/96 همگام شد. شناسه `THA-HLP-0219` مربوط به `INV-256` به‌عنوان `lifecycle_status: RETIRED` و `publishable: false` مشخص شد؛ مقدار اصلی CONTENT_DRAFT برای حفظ سازگاری ساختاری دست‌نخورده ماند و شناسه هرگز دوباره استفاده نمی‌شود.
- **اعتبارسنجی مستندات:** JSON parse موفق؛ 229 شناسه یکتا؛ 228 نقطه اتصال فعال؛ تطبیق کامل Inventory؛ بدون Help ID تکراری؛ 228 مورد دارای شش فیلد EN و FA. این بررسی، صحت معنایی همه متن‌ها یا اتصال Runtime را اثبات نمی‌کند.
- **فایل:** `docs/HELP_ID_REGISTRY_DRAFT.json`.
- **Commit توسعه:** `4febf9a939af938f6c9b6075fa7a8f76bd919112`.
- **Runtime / Deploy / Safari / Production:** هنوز هیچ Help ID به دکمه runtime متصل نشده است؛ Deploy و تست Safari انجام نشده‌اند؛ Production بدون تغییر.
- **کار باقی‌مانده:** بازبینی معنایی EN/FA طبق دامنه انتشار دو زبانه، افزودن اتصال contextual `?` به کنترل‌های تخصصی، تست پوشش/یکتایی و بررسی رفتار در Preview.
 
#### بازنگری R46 — افزودن موتور اجرایی راهنمای زمینه‌ای

- **تاریخ:** 2026-11-27
- **نوع تغییر:** ادامه همان پرونده HELP-GUIDE-001؛ پرونده تکراری ایجاد نشد.
- **شواهد مبنا:** صفحه واقعی `#userGuide`، ساختار ۱۲ فصل `GUIDE_CONTENT`، انتخاب زبان ۱۱گانه و تابع `applyGuideLanguage()` از قبل در سورس R45 وجود داشتند. شکاف باقی‌مانده، نبود موتور اتصال Help ID به کنترل و نمایش متن اختصاصی هر کنترل بود.
- **اقدام R46:** دو فایل مستقل `tha-help-content-v1.js` و `tha-help-runtime-v1.js` اضافه شدند. موتور از صفحه User Guide و انتخاب زبان موجود استفاده می‌کند؛ راهنمای دوم یا زبان رابط جدید ایجاد نمی‌کند. یک کنترل شناور `?` توضیح آخرین کنترل دارای Help ID را با شش فیلد نمایش می‌دهد و در نبود زمینه، صفحه کامل User Guide را باز می‌کند.
- **محتوای مجاز Runtime:** فقط ۱۳۲ مدخل `CONTENT_COMPLETE` با شش فیلد کامل در هر ۱۱ زبان وارد بسته Runtime شدند. ۹۶ مدخل فعال Draft و یک شناسه بازنشسته منتشر نشدند.
- **اتصال کنترل‌ها:** ۱۴ Selector ایستا با فهرست صریح و محدوده‌دار متصل شدند. دو نامزد ایستا به‌علت Draft بودن محتوا عمداً متصل نشدند. ۱۵ کنترل پویا/قالبی همچنان نیازمند افزودن `data-help-id` در محل ساخت واقعی هستند.
- **ایمنی:** موتور فقط DOM راهنما را می‌خواند و نمایش می‌دهد؛ هیچ دسترسی به IndexedDB، LocalStorage، Backup، Restore یا داده‌های حسابداری ندارد. متن‌های Registry با `textContent` رندر می‌شوند.
- **نسخه:** Build هدف R46؛ فایل‌های جدید و index در Version Authority پین می‌شوند؛ تعداد فایل‌های مورد انتظار Gate از ۲۲ به ۲۴ افزایش یافته است.
- **Commit / Gate / Deploy:** commit و Gate پس از ثبت مجموعه تغییرات تکمیل می‌شوند؛ تا زمان تأیید Gate، انتشار Preview انجام نمی‌شود.
- **تست مرورگر / Safari:** انجام نشده؛ یکتایی واقعی DOM، عملکرد کلیک، تغییر زبان، دسترس‌پذیری پنجره و چیدمان موبایل باید در Preview آزمایش شوند.
- **Production:** بدون تغییر؛ مجوز ارتقا وجود ندارد.

#### بازنگری R47 — اتصال پنج کنترل پویای دارای محتوای کامل

- **تاریخ:** 2026-11-27
- **نوع تغییر:** ادامه همان پرونده HELP-GUIDE-001؛ شناسه پرونده جدید ایجاد نشد.
- **اقدام:** پنج ویژگی `data-help-id` در محل واقعی تولید کنترل‌های پویا اضافه شدند: شماره صفحه صفحه‌بندی (0120)، آیکون رسید (0125)، دکمه‌های View/Delete فاکتور در Records (0127/0128) و View فاکتور حذف‌شده در Deleted Records (0131).
- **نتیجه منبع:** مجموع کنترل‌های متصل‌شده در سورس به ۱۹ رسید: ۱۴ اتصال ایستای R46 و ۵ اتصال پویای R47. Handler اصلی هر دکمه حفظ شده و موتور Help فقط شناسه را در رویداد کلیک می‌خواند.
- **مرز انتشار محتوا:** ۱۰ کنترل پویای دیگر و ۲ کنترل ایستای باقیمانده به دلیل `CONTENT_DRAFT` بودن محتوا متصل نشدند. هیچ محتوای Draft وارد بسته Runtime نشده است.
- **نسخه / Gate:** Build هدف R47؛ Version Authority Gate برای R47 پس از ثبت تغییرات اجرا می‌شود.
- **تست مرورگر / Safari:** هنوز انجام نشده؛ تعداد نمونه‌های DOM، عملکرد کلیک، چیدمان موبایل و iPhone Safari نیازمند آزمایش Preview هستند.
- **انتشار / Production:** Preview deploy نشده؛ Production بدون تغییر و ارتقا غیرمجاز است.

#### بازنگری R48 — اصلاح متن انگلیسی و فارسی ۹ مدخل Draft

- **تاریخ:** 2026-11-27
- **نوع تغییر:** ادامه همان پرونده HELP-GUIDE-001؛ شناسه جدید ایجاد نشد.
- **دامنه:** بازبینی متن‌های EN/FA شناسه‌های THA-HLP-0057، 0146، 0156، 0168، 0169، 0170، 0180، 0181 و 0222 با تطبیق مستقیم بر سورس R47.
- **اصلاحات کلیدی:** مسیر انتخاب زبان به Settings → User Guide تغییر کرد؛ توضیح پیوست INV-182 به Job محدود شد؛ متن دو دکمه Print / Save PDF در All Costs Register و Report tab از هم تفکیک شد؛ Take a Photo شناسه 0170 به فرم هزینه در Projects اصلاح شد؛ Generate PDF شناسه 0181 به گزارش زیرپروژه محدود شد؛ Print / PDF شناسه 0222 به اقدام مستقیم ردیف آرشیو Saved reports اصلاح شد.
- **وضعیت محتوا:** هر ۹ مدخل همچنان `CONTENT_DRAFT` هستند؛ چون ترجمه/بازبینی زبان‌های دیگر کامل نشده، به بسته Runtime اضافه یا به دکمه متصل نشدند. ۱۳۲ مدخل قبلی کامل باقی ماندند؛ ۹۶ مدخل فعال Draft و یک شناسه بازنشسته حفظ شدند.
- **تست / انتشار:** اصلاح متن و تطبیق سورس به‌صورت ایستا انجام شد؛ مرورگر، Preview Pages و iPhone Safari آزمایش نشده‌اند. Production بدون تغییر.


#### بازنگری R49 — نمایش راهنمای زمینه‌ای کنار کنترل مربوط

- **تاریخ:** 2026-11-27
- **نوع تغییر:** ادامه همان پرونده HELP-GUIDE-001؛ پرونده تکراری ایجاد نشد.
- **مشکل نسخه قبل:** موتور R46/R47 یک دکمه شناور عمومی داشت که راهنمای آخرین کنترل انتخاب‌شده را باز می‌کرد؛ بنابراین علامت سؤال کنار همان کنترل دیده نمی‌شد.
- **اصلاح R49:** دکمه شناور حذف شد. برای هر کنترل دارای Help ID معتبر، یک دکمه مستقل و کوچک «?» کنار همان کنترل ساخته می‌شود. دکمه راهنما از نوع button است، کلیک آن رویداد اصلی کنترل را اجرا نمی‌کند، و برای کنترل‌های پویا با MutationObserver دوباره متصل می‌شود.
- **دامنه اتصال:** ۱۴ کنترل با Selector صریح و محدوده‌دار؛ ۵ کنترل با شناسه صریح در قالب‌های پویا؛ مجموع ۱۹ کنترل. هر ۱۹ شناسه به محتوای منتشرپذیر بسته راهنما تطبیق داده شدند. ۹۶ مدخل Draft و شناسه بازنشسته 0219 وارد بسته Runtime نشده‌اند.
- **نسخه / فایل‌ها:** Build هدف `THA-273-R11-PREVIEW-20261127-R49`; تغییر در `tha-help-runtime-v1.js`، نسخه/cache reference در `index.html`، pinهای `VERSION-AUTHORITY.json` و baseline فایل Mapping ثبت شد.
- **اعتبارسنجی ایستا:** کامپایل نحوی فایل Runtime با V8 PASS؛ تطبیق ۱۹ شناسه متصل با بسته محتوای Runtime PASS؛ حذف ارجاع به FAB شناور PASS. این بررسی‌ها جایگزین آزمون DOM واقعی نیستند.
- **آزمون شبیه‌سازی DOM:** PASS؛ ۱۹ wrapper و ۱۹ دکمه «?» ساخته شدند؛ شناسه هر کنترل حفظ شد؛ کلیک راهنما رویداد کنترل اصلی را متوقف کرد؛ نمایش متن EN و FA، جهت RTL فارسی و بستن پنجره بررسی شد. این آزمون شبیه‌سازی‌شده است و تست واقعی مرورگر محسوب نمی‌شود.
- **تست مرورگر / موبایل:** هنوز انجام نشده؛ باید نمایش مجاور، عدم جابه‌جایی چیدمان، عملکرد دکمه اصلی، کلیک «?» و بستن پنجره در Preview بررسی شوند.
- **Version Authority Gate / انتشار:** PASS؛ run `46068268766` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/46068268766؛ هویت R49 و هر ۲۴ فایل پین‌شده تأیید شدند. Preview Pages deploy نشده است.
- **Production:** بدون تغییر؛ هیچ مجوز ارتقا وجود ندارد.


#### بازنگری R50 — گسترش اتصال شناسه‌های یکتا و همگام‌سازی کنترل‌های مخفی

- **تاریخ:** 2026-11-27
- **نوع تغییر:** ادامه همان پرونده HELP-GUIDE-001؛ شناسه پرونده جدید ایجاد نشد.
- **اتصال‌های جدید:** ۱۳ شناسه دارای محتوای کامل و ID یکتای تأییدشده به فهرست صریح Runtime اضافه شدند: 0023، 0025، 0045، 0046، 0048، 0049، 0064، 0065، 0066، 0067، 0073، 0087 و 0089. هیچ تطبیق بر اساس متن دکمه یا شباهت handler استفاده نشد.
- **مجموع اتصال‌ها:** ۳۲ کنترل؛ ۲۷ اتصال ایستا (۱۴ Selector محدوده‌دار + ۱۳ ID یکتای دقیق) و ۵ اتصال در قالب پویا.
- **اصلاح ایمنی چیدمان:** دکمه «?» فقط وقتی کنترل اصلی قابل نمایش است دیده می‌شود. وضعیت hidden و تغییرات class/style کنترل و والدهای آن با MutationObserver همگام می‌شود؛ بنابراین برای کنترل مخفی مانند Remove photo یا Reset نهایی، دکمه راهنمای جداافتاده نمایش داده نمی‌شود.
- **نسخه / فایل‌ها:** Build هدف `THA-273-R11-PREVIEW-20261127-R50`; Runtime، cache reference صفحه، Version Authority pinها و Mapping به‌روزرسانی شدند.
- **محتوا:** فقط ۱۳ شناسه CONTENT_COMPLETE به Runtime اضافه شدند؛ مدخل‌های Draft و شناسه بازنشسته همچنان منتشرنشده‌اند.
- **تست ایستا:** یکتایی هر ۱۳ ID در HTML (یک مورد برای هر شناسه) PASS؛ محتوای هر ۱۳ شناسه در بسته Runtime موجود است؛ کامپایل نحوی Runtime با V8 PASS.
- **تست مرورگر / انتشار:** هنوز انجام نشده؛ نمایش و مخفی‌شدن پویا، چیدمان موبایل، عملکرد اصلی دکمه‌ها و iPhone Safari باید در Preview بررسی شوند. هیچ Deploy یا Production change انجام نشده است.

### SEC-RESET-001 — گردش‌کار Factory Reset ناقص است و دکمه نهایی زودهنگام فعال می‌شود

- **شناسه / تاریخ / وضعیت:** SEC-RESET-001 / 2026-11-27 / Implemented on Preview development; the latest R45 Version Authority Gate passed after native-HTML fail-closed hardening (run 46053038295). Pages deployment and iPhone Safari verification remain pending.
- **عنوان و حوزه:** اتصال‌نداشتن کنترل‌های تبدیل پشتیبان، Snapshot اضطراری و بازیابی نهایی در Factory Reset؛ حوزه SEC / DB.
- **علامت مشاهده‌شده:** در Settings → Factory Reset، با انتخاب `I Understand — Continue` دکمه `Reset and Restore All Data` از حالت مخفی خارج می‌شود و `disabled=false` می‌گیرد؛ با این حال تبدیل فایل پشتیبان، دانلود Snapshot اضطراری و اجرای Restore نهایی در سورس بررسی‌شده به کنترل‌های مربوط متصل نیستند.
- **محیط / مرجع:** مخزن `Thehandymanjob/accountancy-r11-preview`؛ شاخه دائمی `development`؛ برنامه 273 / R11؛ Build هدف R45؛ فایل `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`؛ Git blob SHA فایل: `b278aadc25185ee6a8588c982f0b7e24a41e7c31`.
- **تفکیک مهم Backup & Restore عادی:** صفحه مستقل `Backup & Restore` به Factory Reset وابسته نیست و مسیر اجرایی جداگانه دارد. دکمه `Backup` به `fullDatabaseBackup()` متصل است؛ تابع پس از flush دامنه‌های accounting، projects، contracts، businessProfile، support و media، موتور `HandymanRecoveryV264.createFullBackup()` را فراخوانی می‌کند و نتیجه را با 17 دامنه بررسی می‌کند. دکمه `Restore` از طریق انتخاب فایل به `restoreFullDatabase(event)` می‌رسد؛ فایل با `readFullBackup()` اعتبارسنجی می‌شود، تأیید صریح کاربر گرفته می‌شود و سپس `restoreFullBackup()` اجرا و نتیجه 17 دامنه بررسی می‌شود. این بررسی فقط سورس است؛ هیچ Backup یا Restore واقعی اجرا نشده است.
- **علت ریشه‌ای تأییدشده در سورس Factory Reset:** تابع `openFactoryReset()` فقط وضعیت اولیه Modal و flagهای `__thaV273Converted` و `__thaV273EmergencyCreated` را reset می‌کند. تابع `factoryResetNextStep()` بدون بررسی موفقیت تبدیل فایل، ساخت Snapshot، تیک تأیید ذخیره Snapshot یا عبارت `RESET 273`، دکمه نهایی را آشکار و فعال می‌کند. در HTML برای `factoryResetConvertButton`، `factoryResetEmergencyButton` و `factoryResetFinalButton` هیچ `onclick` یا ثبت listener اجرایی در سورس بررسی‌شده پیدا نشد؛ توابع اجرایی تبدیل، Snapshot و Restore نهایی نیز در این فایل وجود ندارند.
- **روش تشخیص:** بررسی اتصال‌های مستقیم HTML و جست‌وجوی تمام ارجاع‌های شناسه‌های سه دکمه در فایل R43؛ بررسی کامل `openFactoryReset()` و `factoryResetNextStep()`؛ مقایسه با مسیر مستقل و متصل Backup & Restore عادی. نتیجه صرفاً static source audit است.
- **ریسک:** رابط به کاربر القا می‌کند مرحله Reset آماده اجراست، درحالی‌که پیش‌نیازهای حفاظتی اجرا نشده‌اند. هرگونه افزودن handler نهایی بدون اعتبارسنجی سخت‌گیرانه فایل، Snapshot تأییدشده، رضایت صریح و بررسی مقصد IndexedDB می‌تواند خطر از دست‌رفتن دائمی داده‌ها ایجاد کند.
- **راه‌حل جاری R1 — پیاده‌سازی در Preview development:** دکمه نهایی اکنون fail-closed است و پس از مرحله هشدار فقط نمایش داده می‌شود؛ فعال‌شدن آن به مجموعه وضعیت‌های اعتبارسنجی مستقل وابسته است. ابتدا فایل اصلی مجاز با SHA-256 و ساختار مورد انتظار بررسی و به بسته 17 دامنه تبدیل می‌شود؛ سپس کاربر باید فایل تبدیل‌شده را دوباره انتخاب کند و اعتبارسنجی مستقل exact domain set، شناسه‌های اجباری، یکتایی IDها و ساختار داده‌ها را بگذراند.
- **قفل مقصد:** هر عملیات Factory Reset قبل از ساخت Snapshot و پیش از Reset، نام دیتابیس را دقیقاً با `the_handyman_accountancy_r11_preview_idb` تطبیق می‌دهد؛ هر مقصد دیگر رد می‌شود. سلامت دیتابیس پیش و پس از flush صف‌های نوشتن دامنه‌ها بررسی می‌شود.
- **Snapshot اضطراری:** از `HandymanRecoveryV264.createFullBackup()` استفاده می‌شود؛ موفقیت، Blob غیرخالی، تأیید `verification.ok`، 17 دامنه، تعداد رکورد مثبت و digest شصت‌وچهاررقمی SHA-256 الزامی است. پس از دانلود، کاربر باید فایل ذخیره‌شده را دوباره انتخاب کند؛ SHA-256 فایل انتخاب‌شده باید دقیقاً با Snapshot تولیدشده برابر باشد. فقط پس از این تطبیق، تأیید صریح و عبارت `RESET 273`، دکمه نهایی می‌تواند فعال شود.
- **اجرای نهایی:** فایل Import درست پیش از Reset دوباره اعتبارسنجی می‌شود؛ سلامت دیتابیس نیز دوباره بررسی و سپس فقط مسیر `resetWithImport()` و recovery engine تأییدشده اجرا می‌شود. نتیجه Restore و آزادشدن reset lock بررسی می‌شود. خطاهای پیش از پاک‌سازی gate را دوباره قفل می‌کنند؛ اگر reset lock نشان دهد پاک‌سازی شروع شده، مسیر recovery retry حفظ می‌شود. هیچ LocalStorage یا bypass اضافه نشده است.
- **دفاع در عمق بیشتر:** تابع destructive `resetWithImport()` دیگر از شیء عمومی `window.HandymanV273LegacyReset` صادر نمی‌شود؛ تابع داخلی نیز مستقلاً نام دیتابیس Preview را قبل از هر عملیات پاک‌سازی بررسی می‌کند. بنابراین حتی فراخوانی مستقیم API عمومی نمی‌تواند از کنترل‌های UI عبور کند.
- **بازنگری راه‌حل R2 — تطبیق قرارداد SHA-256 موتور Recovery:** بررسی مستقیم `HandymanRecoveryV264.createFullBackup()` نشان داد digest آن روی `JSON.stringify(payload)` محاسبه می‌شود، نه روی کل بایت‌های فایل JSON. مقایسه قبلی با بایت‌های خام فایل با قرارداد واقعی موتور یکسان نبود. اکنون هم Blob تولیدشده و هم فایل ذخیره‌شده و دوباره انتخاب‌شده parse می‌شوند؛ قالب portable backup، الگوریتم SHA-256، دیتابیس Preview، scope کامل، مجموعه دقیق 17 دامنه، شناسه و یکتایی تمام رکوردها بررسی می‌شود و هش `JSON.stringify(payload)` دوباره محاسبه و با digest مورد انتظار مقایسه می‌شود. این بازنگری همان پرونده SEC-RESET-001 است و شناسه جدید ایجاد نشده است.
- **Commit کد R2:** `19bc45b9d6557ef599462a5b74a98a4edf44371d`؛ Authority pin commit `c8c23061b9f020afa3ecfccc2e58323eb7ab38c4`.
- **Gate:** R45 قبلی پیش از R2 موفق بود؛ R11 Version Authority Gate برای کد R2 و pin نهایی PASS شد؛ run `46053277888` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/46053277888. تمام 22 فایل runtime pinشده و هویت R45 تأیید شدند.
- **فایل‌های تغییرکرده:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`، `v273-isolated-test/r11-income-prefix-repair-20261114/v273-legacy-reset.js`، `VERSION-AUTHORITY.json`، همین دفترچه و `docs/REPAIR_INDEX_FA.md`.
- **Build / Commit / PR:** Build ID هدف `THA-273-R11-PREVIEW-20261127-R45`؛ کد Factory Reset و native-HTML fail-closed hardening در شاخه development؛ آخرین authority commit `82848baac04729e2cb93157a5087b9e03b90b1f9`؛ PR موجود #96 — https://github.com/Thehandymanjob/accountancy-r11-preview/pull/96 (Draft، base=`main`). Authority metadata commit `4a41ba386cd8ed2873fcea5024c8113e9d40b068`.
- **Version Authority Gate:** PASS قبلی در run `46053038295` — https://github.com/Thehandymanjob/accountancy-r11-preview/actions/runs/46053038295 — native-HTML fail-closed hardening و 22 فایل pinشده را تأیید کرد. پس از آن R2 verifier اصلاح و reset-runtime SHA pin به‌روز شد؛ Gate جدید برای همین تغییر pending است. هیچ Gate یا branch protection دور زده نشد.
- **Static checks:** V8 syntax compilation برای فایل کامل reset runtime PASS است. قرارداد digest از recovery engine بررسی و verifier با آن هماهنگ شد؛ R11 Version Authority Gate برای R2 نیز PASS است. آزمون زنده مرورگر، کلیک واقعی، اجرای Backup/Snapshot یا Restore و آزمون failure injection هنوز انجام نشده‌اند.
- **تست / داده:** هیچ Factory Reset، Backup، Restore، پاک‌سازی IndexedDB، نوشتن داده، تغییر sequence یا دستکاری فایل بکاپ اجرا نشده است. Preview data و Production data دست‌نخورده‌اند.
- **Preview Pages / Safari:** Pages deploy انجام نشده است؛ PR #96 همچنان Draft است تا کار جداگانه Help ID registry کامل شود. تست iPhone Safari انجام نشده و فقط پس از Deploy مجاز انجام می‌شود. هیچ Reset واقعی در تست Safari اجرا نشود.
- **Production:** بدون تغییر؛ هیچ مجوز ارتقا وجود ندارد.



- **تکمیل hardening نهایی HTML:** مقدار `disabled` دکمه نهایی در هر دو تابع قدیمی `openFactoryReset()` و `factoryResetNextStep()` روی `true` تنظیم شد. بنابراین حتی اگر فایل محافظ JavaScript بارگذاری نشود، UI نباید دکمه نهایی را فعال نشان دهد. SHA فایل index و pin مربوط در `VERSION-AUTHORITY.json` هم‌زمان به‌روزرسانی شد. R11 Version Authority Gate برای commit نهایی PASS شد (run `46053038295`). هیچ Deploy یا Reset واقعی اجرا نشد.
