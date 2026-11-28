# فهرست موضوعی دفترچه تعمیرات

مرجع کامل: [REPAIR_HISTORY_FA.md](./REPAIR_HISTORY_FA.md)

## جست‌وجوی سریع بر اساس علامت

| اگر این مشکل را دیدی | ابتدا این مورد را باز کن | بررسی اولیه |
|---|---|---|
| توضیحات فصل‌های User Guide نمایش داده نمی‌شوند یا زبان فصل‌ها با انتخاب‌گر هماهنگ نیست؛ همه فصل‌ها در شروع باز هستند | [HELP-GUIDE-001](./REPAIR_HISTORY_FA.md#help-guide-001--خطای-نحوی-در-تعریف-زبانها-و-فصلهای-راهنما) | R82: خطای نحوی اصلی و محتوای فصل ۱۲ اصلاح شد؛ PR #115، Gate و Pages PASS. R83: انتخاب‌گر زبان منبع اصلی renderer شد و تمام فصل‌ها در شروع بسته می‌شوند؛ PR #117 merged؛ final Gate PASS؛ Pages Deploy و iPhone Safari verification pending.
| متن فارسی/عربی در User Guide با واژه انگلیسی یا عدد به‌هم می‌ریزد و شماره فهرست‌ها از متن فاصله دارد | [UI-BIDI-001](./REPAIR_HISTORY_FA.md#ui-bidi-001--اصلاح-نمایش-متن-ترکیبی-در-راهنمای-راستبهچپ) | R65: dir/lang صریح برای فصل و محتوا؛ فهرست RTL با تراز و padding سمت راست؛ کدها LTR و ایزوله؛ تغییرات در development؛ PR #104 باز و Gate/Safari pending |
| انتخاب Category هزینه بعد از لمس گزینه روی «Select a category» می‌ماند یا مقدار انتخابی نمایش داده نمی‌شود | [ACC-CAT-002](./REPAIR_HISTORY_FA.md#acc-cat-002--انتخاب-دستهبندی-هزینه-در-دکمه-ثبت-نمیماند) | در `syncCategoryPicker()`، گروه را از خروجی `getExpenseCategoryGroups()` پیدا کن؛ تعریف ثابت گروه‌ها `items` ندارد و فقط `base` دارد |
| گزینه‌های Category هزینه‌ها در یک فهرست مخلوط هستند یا مورد جدید در همه گروه‌ها قاطی می‌شود | [ACC-CAT-001](./REPAIR_HISTORY_FA.md#acc-cat-001--تفکیک-و-نگهداری-مستقل-دستهبندی-هزینهها) | فهرست‌های مستقل Materials، Car Expenses، Tools و Others؛ Add New One در هر گروه؛ ذخیره در expenseCategoryLists داخل Accounting IndexedDB state |
| ورود به Monitor & Diagnostics از پایین صفحه شروع می‌شود | [UI-MONITOR-SCROLL-001](./REPAIR_HISTORY_FA.md#ui-monitor-scroll-001--باز-شدن-monitor--diagnostics-از-ابتدای-صفحه) | پس از فعال‌شدن پنل و renderMonitor، در فریم بعدی scroll سند فقط برای Monitor به بالا بازنشانی شود |
| دکمه Back در صفحه Settings به Accountancy برمی‌گردد، نه منوی اصلی | [UI-SETTINGS-BACK-001](./REPAIR_HISTORY_FA.md#ui-settings-back-001--بازگشت-مستقیم-از-صفحه-settings-به-منوی-اصلی) | نگاشت `ACCOUNTING_PARENT.settings` و تابع `goBackOnePage()`؛ والد باید `launcher` باشد و والد هر هشت زیرصفحه Settings از جمله `languageSettings` برابر `settings` باشد |
| زمان Last Updated خالی است، قدیمی می‌ماند یا با Deploy جدید همگام نیست | [DEP-TIME-001](./REPAIR_HISTORY_FA.md#dep-time-001--زمان-last-updated-به-دلیل-وابستگی-به-github-api-نمایش-داده-نمیشد) | سرویس مشترک؛ GET عمومی GitHub Actions؛ فقط اجرای موفق workflow دقیق Pages روی main؛ نمایش updated_at در Europe/London؛ در خطا «در دسترس نیست» و بدون تاریخ کهنه |
| بکاپ کامل Production در Preview پذیرفته نمی‌شود | [DATA-001](./REPAIR_HISTORY_FA.md#data-001--بازیابی-بکاپ-کامل-production-در-پایگاه-داده-جداگانه-preview) | منبع Production، مقصد مستقل Preview، SHA pin و restore handshake؛ کنترل مقصد را حذف نکن |
| PDF فاکتور روی A4 از چپ و راست تراز نیست | [PDF-INV-001](./REPAIR_HISTORY_FA.md#pdf-inv-001--تراز-افقی-سند-pdf-فاکتور-روی-a4) | عرض سند، عرض قابل چاپ و حاشیه‌های متقارن در مسیر مستقل فاکتور؛ گزارش مالی را تغییر نده |
| PDF preview می‌گوید iframe در دسترس نیست | [PDF-PREVIEW-001](./REPAIR_HISTORY_FA.md#pdf-preview-001--ساختار-closing-script-در-html-پیشنمایش-pdf) | HTML popup و closing script tag |
| تولید PDF در iPhone Safari متوقف یا ناپایدار است | [PERF-PDF-001](./REPAIR_HISTORY_FA.md#perf-pdf-001--فشار-حافظه-در-مسیر-تولید-pdf-در-iphone-safari) | canvas scale، capture height و حجم DOM |
| PDF گزارش مالی روی A4 از چپ و راست در مرکز نیست، برش می‌خورد یا صفحه‌بندی/چاپ مشکل دارد | [PDF-LAYOUT-001](./REPAIR_HISTORY_FA.md#pdf-layout-001--اصلاح-چیدمان-چاپ-گزارش-مالی-برای-a4-و-موبایل) | R8: Share Sheet و block-flow؛ R9: margins 12.5mm؛ R10: حاشیه PDF صفر و مرکزکردن captureRoot با عرض 185mm |
| عنوان بخش‌ها یا جدول‌ها در PDF گزارش کامل پروژه از محتوای مربوط جدا می‌شود | [PRJ-PDF-001](./REPAIR_HISTORY_FA.md#prj-pdf-001--صفحه‌بندی-گزارش-کامل-پروژه-و-جلوگیری-از-جداافتادن-عنوان-بخشها) | صفحه‌بندی مستقل html2pdf در Project Workspace؛ h3/h4، خلاصه بخش، thead و ردیف‌های جدول |

| دکمه Factory Reset پیش از تأیید واقعی همه پیش‌نیازها فعال می‌شود یا فایل Snapshot/Import اعتبارسنجی نمی‌شود | [SEC-RESET-001](./REPAIR_HISTORY_FA.md#sec-reset-001--گردشکار-factory-reset-ناقص-است-و-دکمه-نهایی-زودهنگام-فعال-میشود) | R1/R2 در Preview development؛ native HTML و reset runtime fail-closed؛ هش Snapshot مطابق قرارداد Recovery اصلاح شد؛ R45 Version Authority Gate PASS. Pages deploy و Safari pending هستند. |

## قاعده نگهداری بدون تکرار

- هر شناسه فقط یک‌بار در این فهرست می‌آید.
- اصلاح موقت و اصلاح کامل‌ترِ یک مشکل، نسخه‌های متوالی راه‌حل در همان پرونده هستند؛ ردیف یا شناسه جدید نساز.
- با تکمیل یا بازگشت مشکل، وضعیت همان ردیف را به‌روز کن.
- فقط علت ریشه‌ای مستقل و مستند، شناسه جدید می‌گیرد.

## دسته‌ها

- **AUTH:** Authority، SHA، branch، version و release gate
- **DEP:** GitHub Pages، deployment، URL و timestamp
- **UI:** دکمه‌ها، navigation و فرم‌ها
- **PDF:** preview، چاپ، صفحه‌بندی و Share
- **ACC:** درآمد، هزینه و reconciliation
- **ID:** شماره فاکتور/درآمد/هزینه و sequence
- **DB:** IndexedDB، schema، persistence و recovery
- **PRJ:** پروژه، زیرپروژه و P&L
- **SEC:** امنیت و دسترسی
- **PERF:** حافظه، سرعت و پایداری
- **DATA:** بکاپ، import/export و صحت داده
- **HELP:** User Guide، انتخاب زبان و ساختار محتوای چندزبانه

## قانون
پیش از هر عیب‌یابی یا اصلاح، این فهرست و دفترچه کامل را بررسی کن. تطابق باید بر اساس علت ریشه‌ای و شواهد باشد، نه صرفاً شباهت ظاهری. دستور کامل و اجباری در `VERSION-AUTHORITY.json` است.


## R79 — User Guide render diagnostics
- All-language blank guide issue remains under investigation.
- R79 validates 12 chapter entries, builds them in a detached fragment, exposes render diagnostics, displays visible errors, and retries on User Guide open.
- PR #109 is pending Version Authority Gate. Not merged or deployed. Production unchanged.


## وضعیت جاری HELP — User Guide (R79)
- R79 در Preview منتشر شد؛ PR #109 Merge، Version Authority Gate PASS و GitHub Pages Deploy PASS.
- تشخیص خطای نمایش و پیام خطای قابل مشاهده اضافه شده است.
- وضعیت: **Fixed — awaiting verification**؛ تأیید نهایی نمایش فصل‌ها در iPhone Safari هنوز دریافت نشده است.
- Production دست‌نخورده است.


## R80 — User Guide render bridge
- R79 still showed a blank chapter container in the user's iPhone Safari screenshot; its diagnostic message was also absent.
- R80 adds a separate end-of-document bridge to invoke the exported renderer after DOM readiness, load, pageshow, and User Guide activation. A visible diagnostic is shown if the renderer is missing or fails.
- PR and Preview deployment pending. Production unchanged; Safari verification pending.


## R80 — Preview deployment
- PR #111 merged; Version Authority Gate PASS; GitHub Pages deployment PASS.
- Independent User Guide render bridge deployed to Preview. Actual iPhone Safari verification remains pending.
- Production and accounting data remain unchanged.


## R81 — HTML script boundary repair
- R80 screenshot showed raw JavaScript source rendered in the page.
- Root cause: the R80 bridge was inserted at the first literal `</body></html>` occurrence, which was inside a JavaScript string used to generate the PDF/print preview document, not at the real end of the app. Its `</script>` prematurely closed the parent script, exposing the remaining JavaScript as page text.
- R81 removes the misplaced bridge and appends it immediately before the final document closing tags. Preview PR/Gate/deployment and Safari verification are pending. Production and financial/IndexedDB data unchanged.


## R81 — Preview deployment
- PR #113 merged; Version Authority Gate PASS; GitHub Pages deployment PASS.
- R80 script-boundary regression corrected in R81. User iPhone Safari verification pending.
- Production and accounting data remain unchanged.
