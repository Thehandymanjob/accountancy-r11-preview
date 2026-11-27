# فهرست ممیزی دکمه‌ها برای Help ID

**وضعیت:** ممیزی اولیه؛ Help Registry اجرایی هنوز ساخته نشده است. این سند فهرست کنترل است، نه مجوز انتشار.
**مخزن/شاخه:** `Thehandymanjob/accountancy-r11-preview` / `development`
**Build مبنا:** `THA-273-R11-PREVIEW-20261126-R43`
**Index blob SHA مبنا:** `104766171ee9ad519ec8be36126f04f0dde24a5c`
**تعداد عناصر button در سورس:** 266 تگ HTML/قالب + 2 الگوی ساخت DOM API = 268 ردیف ممیزی؛ نمونه‌های runtime ممکن است بیشتر باشند
**روش شمارش:** استخراج ۲۶۶ تگ button از HTML/قالب‌ها و بررسی مستقیم `document.createElement('button')`؛ دو الگوی ساخت DOM API نیز جداگانه ثبت شدند.

## قواعد
- شناسه‌های INV-001… مراجع ممیزی‌اند، نه Help ID نهایی متصل به برنامه.
- `HELP-REQUIRED` نیازمند شش فیلد Purpose / When / How / Inputs / Result / Notes است؛ ترجمه هر شش فیلد باید برای تمام ۱۱ زبان راهنمای فعلی موجود باشد.
- `EXEMPT-CANDIDATE` فقط نامزد استثناست و باید دستی تأیید شود. فقط Back / Cancel / Close و کنترل‌های صرفاً ناوبری یا بستن پنجره می‌توانند پس از تأیید از Help معاف شوند. ایجاد، تولید، دانلود، اشتراک‌گذاری، بازبینی و چاپ خروجی‌های PDF در این ممیزی `HELP-REQUIRED` هستند؛ چون بخشی از جریان کاری‌اند. Save Entry و Save Invoice نیز استثنا نیستند.
- Handler خالی به معنی بی‌عملکرد بودن قطعی نیست؛ ممکن است listener با JavaScript متصل شود.
- Handler مشترک باید با توجه به پارامتر و متن دکمه تفکیک شود.
- هیچ شناسه‌ای در این سند به رابط کاربری متصل نشده است؛ هیچ Deploy یا تغییر داده‌ای انجام نشده است.
- زبان‌های فعلی راهنما: `en`, `fa`, `ar`, `ckb`, `kmr`, `tr`, `pl`, `ur`, `pa`, `prs`, `ps` (۱۱ زبان). این زبان‌ها فقط زبان User Guide هستند؛ رابط اصلی برنامه انگلیسی/LTR باقی می‌ماند.

## فهرست عناصر

| Ref ممیزی | Element ID | متن قابل مشاهده | Handler | طبقه‌بندی |
|---|---|---|---|---|
| INV-001 | — | 🧾 Accountancy Income, expenses, invoices and reports › | `openAccountancy()` | HELP-REQUIRED |
| INV-002 | — | 💼 Business Workspace Projects, Company Contracts & Jobs, and Control Panel › | `openProjectsApp()` | HELP-REQUIRED |
| INV-003 | — | 📝 Contract Management Create, edit and manage contracts and quotations › | `openContractsApp()` | HELP-REQUIRED |
| INV-004 | — | ⚙️ Settings Backup, restore, profile and logo › | `openSettingsHub()` | HELP-REQUIRED |
| INV-005 | ctGlobalBack | ← Back | `ctHandleBack()` | EXEMPT |
| INV-006 | — | ＋ New Contract | `ctNew()` | HELP-REQUIRED |
| INV-007 | — | 💾 Save Contract | `ctSave()` | HELP-REQUIRED |
| INV-008 | — | ✦ Help me write with ChatGPT | `ctOpenChatGPT()` | HELP-REQUIRED |
| INV-009 | — | 🖨️ Preview / Print / Save PDF | `ctPrint()` | HELP-REQUIRED |
| INV-010 | — | ← Back to Main Menu | `returnToLauncher()` | EXEMPT |
| INV-011 | — | ▦ Dashboard Financial overview and balances › | `show(` | HELP-REQUIRED |
| INV-012 | — | ＋ Add Entry Record income or expenses › | `show(` | HELP-REQUIRED |
| INV-013 | — | ▤ Records Find and manage transactions › | `show(` | HELP-REQUIRED |
| INV-014 | — | ▧ Invoices Create and review invoices › | `show(` | HELP-REQUIRED |
| INV-015 | — | ♙ Customers Customer details and contacts › | `show(` | HELP-REQUIRED |
| INV-016 | — | ▥ Reports & Tax Tax periods, archive and notifications › | `show(` | HELP-REQUIRED |
| INV-017 | — | 🏠 Dashboard | `show(` | HELP-REQUIRED |
| INV-018 | — | ＋ Add Entry | `show(` | HELP-REQUIRED |
| INV-019 | — | 📋 Records | `show(` | HELP-REQUIRED |
| INV-020 | — | 🧾 Invoices | `show(` | HELP-REQUIRED |
| INV-021 | — | 👥 Customers | `show(` | HELP-REQUIRED |
| INV-022 | — | 🖨️ Reports | `show(` | HELP-REQUIRED |
| INV-023 | — | ← Back | `goBackOnePage()` | EXEMPT |
| INV-024 | — | Refresh | `refreshAll()` | HELP-REQUIRED |
| INV-025 | — | Set period (13th–12th) | `setPeriod()` | HELP-REQUIRED |
| INV-026 | categoryPickerButton | Select a category ⌄ | `toggleCategoryMenu()` | HELP-REQUIRED |
| INV-027 | — | 📷 Take a Photo | `document.getElementById(` | HELP-REQUIRED |
| INV-028 | entryReceiptRemove | Remove photo | `clearEntryReceipt()` | HELP-REQUIRED |
| INV-029 | — | Save Entry | `saveEntry()` | HELP-REQUIRED |
| INV-030 | — | Clear Form | `resetEntry()` | HELP-REQUIRED |
| INV-031 | — | ← Back to category list | `cancelExpenseCategoryAddScreen()` | EXEMPT |
| INV-032 | — | Add to list | `saveExpenseCategory()` | HELP-REQUIRED |
| INV-033 | — | Cancel | `cancelExpenseCategoryAddScreen()` | EXEMPT |
| INV-034 | — | ＋ New Invoice | `newInvoice()` | HELP-REQUIRED |
| INV-035 | — | ← Back to Invoices | `cancelInvoiceEdit()` | EXEMPT |
| INV-036 | — | Save Invoice | `saveInvoice()` | HELP-REQUIRED |
| INV-037 | — | Save & Print / PDF | `saveAndPrintInvoice()` | HELP-REQUIRED |
| INV-038 | — | Save Customer | `saveCustomer()` | HELP-REQUIRED |
| INV-039 | — | Clear Form | `resetCustomerForm()` | HELP-REQUIRED |
| INV-040 | — | ← Back | `report188Back()` | EXEMPT |
| INV-041 | — | 📄 Prepare a report Predefined reporting periods and report generation | `report188Navigate(` | HELP-REQUIRED |
| INV-042 | — | 🗂️ Saved reports archive Open previous report snapshots | `report188Navigate(` | HELP-REQUIRED |
| INV-043 | — | 🔔 Notifications inbox Titles only; tap a notification to read it | `report188Navigate(` | HELP-REQUIRED |
| INV-044 | — | 🗓️ Tax calendar Upcoming and past deadlines | `report188Navigate(` | HELP-REQUIRED |
| INV-045 | — | ✉️ Accountant email Recipient settings and sending status | `report188Navigate(` | HELP-REQUIRED |
| INV-046 | — | ← Back | `report188Back()` | EXEMPT |
| INV-047 | — | Print Preview | `printReport()` | HELP-REQUIRED |
| INV-048 | — | Confirm records complete | `report188ConfirmComplete()` | HELP-REQUIRED |
| INV-049 | — | Check reminders now | `report188CheckDue()` | HELP-REQUIRED |
| INV-050 | — | ← Back | `report188Back()` | EXEMPT |
| INV-051 | — | ← Back | `report188Back()` | EXEMPT |
| INV-052 | — | ← Back | `report188Back()` | EXEMPT |
| INV-053 | — | ← Back | `report188Back()` | EXEMPT |
| INV-054 | — | Confirm records complete for selected period | `report188ConfirmComplete()` | HELP-REQUIRED |
| INV-055 | — | Check reminders now | `report188CheckDue()` | HELP-REQUIRED |
| INV-056 | — | ← Back | `report188Back()` | EXEMPT |
| INV-057 | — | Save recipient details | `report188SaveEmailSettings()` | HELP-REQUIRED |
| INV-058 | fullBackupButton | Backup | `fullDatabaseBackup()` | HELP-REQUIRED |
| INV-059 | fullRestoreButton | Restore | `chooseFullDatabaseRestore()` | HELP-REQUIRED |
| INV-060 | — | Show version details | `toggleMonitorVersionInfo()` | HELP-REQUIRED |
| INV-061 | toggleActivityArchiveButton | Show activity archive | `toggleActivityArchive()` | HELP-REQUIRED |
| INV-062 | runIndexedDBSelfTestButton | Test IndexedDB Storage | `window.runIndexedDBSelfTest()` | HELP-REQUIRED |
| INV-063 | — | Create Accounting Snapshot in IndexedDB | `window.createAccountingStorageSnapshot()` | HELP-REQUIRED |
| INV-064 | — | Compare Accounting Storage (Read-only) | `window.runAccountingStorageComparison()` | HELP-REQUIRED |
| INV-065 | — | Download Diagnostic Report (JSON) | `exportDiagnosticReport()` | HELP-REQUIRED |
| INV-066 | — | Run Full Storage Audit (Read-only) | `runFullStorageAudit()` | HELP-REQUIRED |
| INV-067 | — | Export Activity Log (CSV) | `exportMonitorCSV()` | HELP-REQUIRED |
| INV-068 | — | Run Local Self-check | `runMonitorSelfCheck()` | HELP-REQUIRED |
| INV-069 | — | ← Back | `goBackOnePage()` | EXEMPT |
| INV-070 | — | 💾 Backup & Restore Separate backups for each data area | `show(` | HELP-REQUIRED |
| INV-071 | — | ❓ Help Choose the language for the User Guide | `show(` | HELP-REQUIRED |
| INV-072 | — | 👤 Profile & Logo Business details and business logo | `show(` | HELP-REQUIRED |
| INV-073 | — | 📘 User Guide Instructions and Contact Us | `show(` | HELP-REQUIRED |
| INV-074 | — | 🔄 Software Update Check and install the latest version | `show(` | HELP-REQUIRED |
| INV-075 | — | 🛡️ Monitor & Diagnostics Activity archive, errors, data integrity and developer report | `show(` | HELP-REQUIRED |
| INV-076 | — | ⚠️ Factory Reset Convert approved backup and safely restore all data | `show(` | HELP-REQUIRED |
| INV-077 | — | ← Back to Settings | `show(` | EXEMPT |
| INV-078 | — | Open Secure Reset | `openFactoryReset()` | HELP-REQUIRED |
| INV-079 | factoryResetConvertButton | Validate and Convert Backup | `event/property listener` | HELP-REQUIRED |
| INV-080 | factoryResetEmergencyButton | Download Emergency Snapshot | `event/property listener` | HELP-REQUIRED |
| INV-081 | factoryResetNext | I Understand — Continue | `factoryResetNextStep()` | HELP-REQUIRED |
| INV-082 | factoryResetFinalButton | Reset and Restore All Data | `event/property listener` | HELP-REQUIRED |
| INV-083 | — | Cancel | `closeFactoryReset()` | EXEMPT |
| INV-084 | — | Save Profile | `prSaveProfile()` | HELP-REQUIRED |
| INV-085 | — | Remove Logo | `prRemoveLogo()` | HELP-REQUIRED |
| INV-086 | — | Save Support Message | `event/property listener` | HELP-REQUIRED |
| INV-087 | — | Clear Form | `resetHelpContactForm()` | HELP-REQUIRED |
| INV-088 | — | 🔄 Check for Updates | `event/property listener` | HELP-REQUIRED |
| INV-089 | appReloadUpdate | Update Now | `reloadLatestApp()` | HELP-REQUIRED |
| INV-090 | — | 💼 Business Workspace | `prPage(` | HELP-REQUIRED |
| INV-091 | — | 📁 Projects | `prPage(` | HELP-REQUIRED |
| INV-092 | — | 🏢 Company Contracts & Jobs | `prPage(` | HELP-REQUIRED |
| INV-093 | — | ⚙️ Control Panel | `prPage(` | HELP-REQUIRED |
| INV-094 | — | ← Back to Main Menu | `returnToLauncher()` | EXEMPT |
| INV-095 | — | 📁 Projects New Project, Projects List and Project Profit & Loss | `prPage(` | HELP-REQUIRED |
| INV-096 | — | 🏢 Company Contracts & Jobs Companies, contracts, company projects, sub-projects and payments | `prOpenCompanyHubFromWorkspace()` | HELP-REQUIRED |
| INV-097 | — | ⚙️ Control Panel Manage shared Partners, Workers, Contractors, companies and future settings | `prPage(` | HELP-REQUIRED |
| INV-098 | — | ➕ New Project Create an independent project | `prPage(` | HELP-REQUIRED |
| INV-099 | — | ▦ Projects List Search, open and manage existing projects | `prPage(` | HELP-REQUIRED |
| INV-100 | — | ＋ Add Partner | `prAddPartnerShareRow()` | HELP-REQUIRED |
| INV-101 | — | Save Project | `prSaveProject()` | HELP-REQUIRED |
| INV-102 | — | Clear Form | `prResetProject()` | HELP-REQUIRED |
| INV-103 | — | Edit | `prEditCurrent()` | HELP-REQUIRED |
| INV-104 | prCompleteToggle | Complete | `prToggleProjectCompletion()` | HELP-REQUIRED |
| INV-105 | — | Delete | `prDeleteCurrent()` | HELP-REQUIRED |
| INV-106 | prDetailProfitReportButton | 📊 Report | `prOpenCurrentProjectProfitReport()` | HELP-REQUIRED |
| INV-107 | — | Summary | `prDetailTab(` | HELP-REQUIRED |
| INV-108 | — | Income | `prDetailTab(` | HELP-REQUIRED |
| INV-109 | — | Expenses | `prDetailTab(` | HELP-REQUIRED |
| INV-110 | — | Worker Wages | `prDetailTab(` | HELP-REQUIRED |
| INV-111 | — | Tools | `prDetailTab(` | HELP-REQUIRED |
| INV-112 | — | Food & Other | `prDetailTab(` | HELP-REQUIRED |
| INV-113 | — | Reports | `prDetailTab(` | HELP-REQUIRED |
| INV-114 | — | View Financial Report → | `prOpenProfitReport()` | HELP-REQUIRED |
| INV-115 | — | Save Partner | `prSavePerson(` | HELP-REQUIRED |
| INV-116 | — | Clear | `prResetPerson(` | HELP-REQUIRED |
| INV-117 | — | Save Contractor | `prSaveContractor()` | HELP-REQUIRED |
| INV-118 | — | Clear | `prResetContractor()` | HELP-REQUIRED |
| INV-119 | — | Save Worker | `prSavePerson(` | HELP-REQUIRED |
| INV-120 | — | Clear | `prResetPerson(` | HELP-REQUIRED |
| INV-121 | — | 👤 Partners Manage shared partner records | `prPage(` | HELP-REQUIRED |
| INV-122 | — | 👷 Workers Manage shared worker records | `prPage(` | HELP-REQUIRED |
| INV-123 | — | 🧰 Contractors Manage trades and subcontractors | `prPage(` | HELP-REQUIRED |
| INV-124 | — | ➕ Add Company Register a company and its main contract | `coOpenCompanyMode(` | HELP-REQUIRED |
| INV-125 | — | 🏢 Companies List Find companies and open their jobs | `coOpenCompanyMode(` | HELP-REQUIRED |
| INV-126 | — | 📊 Company Project Profit & Loss Review income, costs and results by company and job | `prPage(` | HELP-REQUIRED |
| INV-127 | — | Save Company | `coSaveCompany()` | HELP-REQUIRED |
| INV-128 | — | Clear Form | `coResetCompany()` | HELP-REQUIRED |
| INV-129 | — | Save Job | `coSaveJob()` | HELP-REQUIRED |
| INV-130 | — | Clear Job Form | `coResetJob()` | HELP-REQUIRED |
| INV-131 | — | Save Work Package | `coSaveSub()` | HELP-REQUIRED |
| INV-132 | — | Clear | `coResetSub()` | HELP-REQUIRED |
| INV-133 | — | Add Expense | `coAddPackageExpense()` | HELP-REQUIRED |
| INV-134 | — | Record Payment | `coRecordPayment()` | HELP-REQUIRED |
| INV-135 | — | Cancel | `closeInvoicePaidModal()` | EXEMPT |
| INV-136 | — | Confirm payment | `confirmInvoicePaid()` | HELP-REQUIRED |
| INV-137 | — | ‹ Previous | `changeListPage(` | HELP-REQUIRED |
| INV-138 | — | ${p} | `changeListPage(` | HELP-REQUIRED |
| INV-139 | — | =pages?'disabled':''} onclick="changeListPage('${key}',${page+1},'${renderer}')">Next › | `event/property listener` | HELP-REQUIRED |
| INV-140 | — | ← Back to '+esc(label)+' | `goBackOnePage()` | EXEMPT |
| INV-141 | — | '+esc(expenseCategoryLabel(x,g.id))+' | `chooseCategoryFromButton(this)` | HELP-REQUIRED |
| INV-142 | — | ＋ Add New One | `openExpenseCategoryAddScreen(this.dataset.addGroup)` | HELP-REQUIRED |
| INV-143 | — | 📎 View receipt | `openReceiptImage(document.getElementById(` | HELP-REQUIRED |
| INV-144 | — | 📎 | `openReceiptImage(this.dataset.receipt)` | HELP-REQUIRED |
| INV-145 | — | OK | `closeEntrySavedDialog()` | HELP-REQUIRED |
| INV-146 | — | View | `viewRecordInvoice(\` | HELP-REQUIRED |
| INV-147 | — | Delete | `deleteInvoice(\` | HELP-REQUIRED |
| INV-148 | — | Edit | `editEntry(\` | HELP-REQUIRED |
| INV-149 | — | Delete | `deleteEntry(\` | HELP-REQUIRED |
| INV-150 | — | View | `viewRecordInvoice(\` | HELP-REQUIRED |
| INV-151 | — | View | `viewRecordEntry(\` | HELP-REQUIRED |
| INV-152 | — | Close | `document.getElementById(\` | EXEMPT |
| INV-153 | — | × | `window.close()` | EXEMPT |
| INV-154 | — | ↥ Share PDF | `shareReportPdf()` | HELP-REQUIRED |
| INV-155 | makePdf | Create PDF | `createPDF()` | HELP-REQUIRED |
| INV-156 | downloadPdf | Download PDF | `downloadPDF()` | HELP-REQUIRED |
| INV-157 | sharePdf | ↗ Share PDF | `sharePDF()` | HELP-REQUIRED |
| INV-158 | — | × | `window.close()` | EXEMPT |
| INV-159 | — | Edit | `editCustomer(` | HELP-REQUIRED |
| INV-160 | — | New invoice | `newInvoiceForCustomer(` | HELP-REQUIRED |
| INV-161 | — | Delete | `deleteCustomer(` | HELP-REQUIRED |
| INV-162 | — | Back to Records | `show(&quot;records&quot;)` | EXEMPT |
| INV-163 | — | Open print view | `openInvoicePrintView()` | HELP-REQUIRED |
| INV-164 | — | Back to invoices | `document.body.classList.remove(\` | EXEMPT |
| INV-165 | — | ← Back | `thaBackInvoicePdf()` | EXEMPT |
| INV-166 | — | × | `thaCloseInvoicePdf()` | EXEMPT |
| INV-167 | — | ↗ Share PDF | `thaShareInvoicePdf()` | HELP-REQUIRED |
| INV-168 | — | Mark unpaid | `markInvoiceUnpaid(` | HELP-REQUIRED |
| INV-169 | — | Mark paid | `recordInvoicePayment(` | HELP-REQUIRED |
| INV-170 | — | View / PDF | `printInvoice(` | HELP-REQUIRED |
| INV-171 | — | Edit | `editInvoice(` | HELP-REQUIRED |
| INV-172 | — | Delete | `deleteInvoice(` | HELP-REQUIRED |
| INV-173 | — | Edit | `prEditContractor(` | HELP-REQUIRED |
| INV-174 | — | Delete | `prDeleteContractor(` | HELP-REQUIRED |
| INV-175 | — | 📎 ${coEsc(c.contractFile.name)} | `coOpenAttachment(` | HELP-REQUIRED |
| INV-176 | — | Edit | `coEditCompany(` | HELP-REQUIRED |
| INV-177 | — | Open Jobs | `coShowJobs(` | HELP-REQUIRED |
| INV-178 | — | Deactivate | `coDeleteCompany(` | HELP-REQUIRED |
| INV-179 | — | Edit | `coEditJob(` | HELP-REQUIRED |
| INV-180 | — | Work packages | `coShowPackages(` | HELP-REQUIRED |
| INV-181 | — | Payments | `coShowPayments(` | HELP-REQUIRED |
| INV-182 | — | 📎 | `coOpenAttachment(` | HELP-REQUIRED |
| INV-183 | — | 📎 ${coEsc(p.file.name)} | `coOpenAttachment(` | HELP-REQUIRED |
| INV-184 | — | Edit | `coEditSub(` | HELP-REQUIRED |
| INV-185 | — | Financials | `coShowPackageFinance(` | HELP-REQUIRED |
| INV-186 | — | Delete | `coDeleteSub(` | HELP-REQUIRED |
| INV-187 | — | 📎 ${coEsc(e.file.name)} | `coOpenPackageExpense(` | HELP-REQUIRED |
| INV-188 | — | Delete | `coDeletePackageExpense(` | HELP-REQUIRED |
| INV-189 | — | 📎 Open | `coOpenAttachment(` | HELP-REQUIRED |
| INV-190 | — | ← Back to Main Menu | `returnToLauncher()` | EXEMPT |
| INV-191 | — | ← Back to ${backLabel} | `${name===` | EXEMPT |
| INV-192 | — | Remove | `this.closest(` | HELP-REQUIRED |
| INV-193 | prSaveSubEditBtn | Save Changes | `prSaveSubprojectEdit()` | HELP-REQUIRED |
| INV-194 | — | Edit | `prEditUnifiedCost(` | HELP-REQUIRED |
| INV-195 | — | Delete | `prDeleteUnifiedCost(` | HELP-REQUIRED |
| INV-196 | — | Print / Save PDF | `prPrintSubReport()` | HELP-REQUIRED |
| INV-197 | — | Print / Save PDF | `prPrintSubReport()` | HELP-REQUIRED |
| INV-198 | — | 📷 Take a Photo | `document.getElementById(` | HELP-REQUIRED |
| INV-199 | prReceiptRemove | Remove photo | `clearProjectReceipt()` | HELP-REQUIRED |
| INV-200 | — | ${isIncome?'Save Receipt':'Save Expense'} | `prSaveSubFinanceRow(` | HELP-REQUIRED |
| INV-201 | — | Clear | `prClearSubFinanceRow()` | HELP-REQUIRED |
| INV-202 | — | 🧾 Customer receipt | `prOpenCustomerPaymentReceipt(` | HELP-REQUIRED |
| INV-203 | — | Edit | `prEditSubFinanceRow(` | HELP-REQUIRED |
| INV-204 | — | Delete | `prDeleteSubFinanceRow(` | HELP-REQUIRED |
| INV-205 | receiptPdfButton | 📄 Generate PDF / Print | `receiptPrint()` | HELP-REQUIRED |
| INV-206 | — | Close receipt | `window.close()` | EXEMPT |
| INV-207 | — | ↗ Share PDF | `shareReceiptPdf()` | HELP-REQUIRED |
| INV-208 | — | Print | `window.open(window.receiptPdfUrl,` | HELP-REQUIRED |
| INV-209 | — | Close | `prCloseSubReportPreview()` | EXEMPT |
| INV-210 | — | Generate PDF | `prRunSubReportPrint()` | HELP-REQUIRED |
| INV-211 | — | Close | `prCloseSubReportPreview()` | EXEMPT |
| INV-212 | — | Generate PDF | `prRunSubReportPrint()` | HELP-REQUIRED |
| INV-213 | — | ↗ Share PDF | `prShareSubReportPDF()` | HELP-REQUIRED |
| INV-214 | — | × | `prRestoreReportPreview()` | HELP-REQUIRED |
| INV-215 | — | ← Back to Sub-projects | `prBackToSubprojects()` | EXEMPT |
| INV-216 | — | Income | `prRenderSubFinance(` | HELP-REQUIRED |
| INV-217 | — | Expenses | `prRenderSubFinance(` | HELP-REQUIRED |
| INV-218 | — | Report | `prRenderSubFinance(` | HELP-REQUIRED |
| INV-219 | — | ＋ Add Sub-project | `prOpenSubprojectForm()` | HELP-REQUIRED |
| INV-220 | — | Edit | `event.stopPropagation();prOpenSubproject(` | HELP-REQUIRED |
| INV-221 | — | ＋ Add Sub-project | `prEnableSubprojectsAndAdd()` | HELP-REQUIRED |
| INV-222 | — | ← Back | `prBackToSubprojects()` | EXEMPT |
| INV-223 | prAddSubprojectBtn | ＋ Add Sub-project | `prAddSubproject()` | HELP-REQUIRED |
| INV-224 | — | Print / Save PDF | `window.print()` | HELP-REQUIRED |
| INV-225 | — | 📋 Worker List — Choose Worker | `prOpenWorkerListPicker()` | HELP-REQUIRED |
| INV-226 | — | Record | `prSaveRow(` | HELP-REQUIRED |
| INV-227 | — | Clear | `prClearRowForm()` | HELP-REQUIRED |
| INV-228 | — | Edit | `prEditRow(` | HELP-REQUIRED |
| INV-229 | — | Delete | `prDeleteRow(` | HELP-REQUIRED |
| INV-230 | — | × | `prCloseWorkerListPicker()` | EXEMPT |
| INV-231 | ${prEscape(w.id)} | ${prEscape(w.name\|\|'Unnamed worker')} ${w.phone?` ${prEscape(w.phone)} `:''} ${select.value===String(w.id)?'✓':'›'} | `prChooseWorkerFromList(this.dataset.workerId)` | HELP-REQUIRED |
| INV-232 | — | Done | `prCloseWorkerListPicker()` | HELP-REQUIRED |
| INV-233 | — | Manage Workers | `prPage(\` | HELP-REQUIRED |
| INV-234 | — | Edit | `prEditPerson(` | HELP-REQUIRED |
| INV-235 | — | Delete | `prDeletePerson(` | HELP-REQUIRED |
| INV-236 | — | Edit | `prOpenReconciliationCost(` | HELP-REQUIRED |
| INV-237 | — | Delete | `prOpenReconciliationCost(` | HELP-REQUIRED |
| INV-238 | — | Generate Full Project Report PDF → | `prPrintFullProjectReport(` | HELP-REQUIRED |
| INV-239 | — | Open | `ctLoad(` | HELP-REQUIRED |
| INV-240 | — | Print / PDF | `ctPrintSaved(` | HELP-REQUIRED |
| INV-241 | — | Delete | `ctDelete(` | HELP-REQUIRED |
| INV-242 | generateBtn | ${L.generate} | `ctGeneratePDF()` | HELP-REQUIRED |
| INV-243 | printBtn | Open PDF | `ctPrintPDF()` | HELP-REQUIRED |
| INV-244 | shareBtn | ↗ Share PDF | `ctSharePDF()` | HELP-REQUIRED |
| INV-245 | — | ${L.close} | `ctPreviewClose()` | EXEMPT |
| INV-246 | — | ${L.back} | `history.back()` | HELP-REQUIRED |
| INV-247 | — | Close ✕ | `closeReceiptImage()` | EXEMPT |
| INV-248 | — | Cancel | `cancelReceiptCrop()` | EXEMPT |
| INV-249 | — | Use full image | `useFullReceiptImage()` | HELP-REQUIRED |
| INV-250 | — | Save cropped photo | `applyReceiptCrop()` | HELP-REQUIRED |
| INV-251 | — | Copy version details | `copyMonitorVersionInfo()` | HELP-REQUIRED |
| INV-252 | — | View details | `showMonitorEvent(` | HELP-REQUIRED |
| INV-253 | — | ‹ Previous | `monitorPage--;renderMonitor()` | HELP-REQUIRED |
| INV-254 | — | ${monitorPage} / ${pages} | `event/property listener` | HELP-REQUIRED |
| INV-255 | — | =pages?'disabled':''} onclick="monitorPage++;renderMonitor()">Next › | `event/property listener` | HELP-REQUIRED |
| INV-256 | — | Hidden placeholder (not user-facing) | `GenUINotUsed` | EXEMPT |
| INV-257 | monitorCopyEvent | Copy JSON | `event/property listener` | HELP-REQUIRED |
| INV-258 | monitorCloseEvent | Close | `event/property listener` | EXEMPT |
| INV-259 | — | Open saved report | `report188Open(` | HELP-REQUIRED |
| INV-260 | — | Print / PDF | `report188Print(` | HELP-REQUIRED |
| INV-261 | — | Update status | `report188RenameStatus(` | HELP-REQUIRED |
| INV-262 | — | ${n.read?'○':'●'} ${esc(n.title)} ${new Date(n.createdAt).toLocaleDateString('en-GB')} › | `report188OpenNotification(` | HELP-REQUIRED |
| INV-263 | — | Mark as ${n.read?'unread':'read'} | `report188ToggleReadFromDetail(` | HELP-REQUIRED |
| INV-264 | — | Print / Save PDF | `report188Print(` | HELP-REQUIRED |
| INV-265 | — | Close saved report | `document.getElementById(` | EXEMPT |
| INV-266 | eiwClose | Return to form | `event/property listener` | HELP-REQUIRED |

## کنترل‌های ساخته‌شده با DOM API

بررسی مستقیم سورس R43 دو محل `document.createElement('button')` را پیدا کرد که در شمارش ۲۶۶ تگ موجود در HTML/قالب‌ها نیستند. این‌ها دو نوع کنترل پویا هستند، نه دو دکمه ثابت در صفحه:

| Ref ممیزی | Selector / Class | متن | رفتار | طبقه‌بندی |
|---|---|---|---|---|
| INV-267 | `.unified-dropdown-trigger` | متن گزینه انتخاب‌شده / placeholder | باز و بسته کردن فهرست انتخاب بومی‌شده از روی یک select موجود | HELP-REQUIRED |
| INV-268 | `.unified-dropdown-option` | متن هر گزینه از select | انتخاب مقدار و dispatch رویداد change؛ برای هر گزینه نمونه جداگانه ساخته می‌شود | HELP-REQUIRED |

بنابراین baseline فعلی ۲۶۸ نوع/عنصر قابل ممیزی دارد: ۲۲۸ HELP-REQUIRED و ۴۰ EXEMPT. از ۳۵ نامزد اولیه، ۳۴ مورد به‌عنوان استثنا تأیید شدند و `INV-268` به دلیل تغییر مقدار فیلد به HELP-REQUIRED ارتقا یافت. پنج کنترل دیگر نیز پس از بررسی رفتار واقعی به استثنای بستن/خروجی تبدیل شدند: `INV-153`, `INV-158`, `INV-166`, `INV-230`, `INV-245`. این شمارش، تعداد کل نمونه‌های زمان اجرا را بیان نمی‌کند؛ تعداد گزینه‌های dropdown بر اساس داده و صفحه تغییر می‌کند.

## تکمیل موردنیاز

1. بازبینی دستی ۳۹ نامزد اولیه تکمیل شد؛ همه آن‌ها به‌عنوان EXEMPT تأیید شدند. به‌علاوه `INV-256` یک placeholder مخفی و غیرقابل استفاده است و به‌عنوان EXEMPT ثبت شده است؛ در مجموع ۴۰ استثنا وجود دارد.
2. بازبینی ۲۲۸ مورد فعال `HELP-REQUIRED` و تفکیک handlerهای مشترک بر اساس پارامتر و label.
3. تعداد ۲۲۹ شناسه immutable تخصیص یافته است؛ ۲۲۸ شناسه به کنترل‌های فعال Help-Required مربوط‌اند و `THA-HLP-0219` فقط به‌عنوان شناسه بازنشسته برای ردگیری `INV-256` حفظ شده است. هیچ شناسه‌ای دوباره استفاده نمی‌شود.
4. نوشتن شش فیلد واقعی برای هر ID در تمام ۱۱ زبان فعلی راهنما؛ زبان رابط اصلی برنامه همچنان انگلیسی/LTR است.
5. اتصال IDها به دکمه‌های ثابت و قالب‌های پویا و افزودن تست خودکار پوشش و یکتایی.
6. بررسی listener دکمه‌های فاقد onclick.
7. پس از تکمیل پوشش، اجرای Gate و درخواست تست iPhone Safari.

## نتیجه بازبینی دستی استثناها — 2026-11-26

- **۳۹ کنترل تأییدشده به‌عنوان استثناهای Back / Cancel / Close:** `INV-005`, `INV-010`, `INV-023`, `INV-031`, `INV-033`, `INV-035`, `INV-040`, `INV-046`, `INV-050`, `INV-051`, `INV-052`, `INV-053`, `INV-056`, `INV-069`, `INV-077`, `INV-083`, `INV-094`, `INV-135`, `INV-140`, `INV-152`, `INV-153`, `INV-158`, `INV-162`, `INV-164`, `INV-165`, `INV-166`, `INV-190`, `INV-191`, `INV-206`, `INV-209`, `INV-211`, `INV-215`, `INV-222`, `INV-230`, `INV-245`, `INV-247`, `INV-248`, `INV-258`, `INV-265`.
- **اصلاح مرز استثنا:** `INV-268` گزینه پویا برای انتخاب مقدار از select است و به‌دلیل تغییر state، Help-Required شد. `INV-230` فقط بستن فهرست انتخاب کارگر است؛ `INV-232` دکمه Done باقی می‌ماند Help-Required چون پایان مرحله انتخاب را تأیید می‌کند.
- **اصلاح موارد Close:** `INV-153`, `INV-158`, `INV-166`, `INV-245` فقط PDF preview/window را می‌بندند و داده یا سند را تغییر نمی‌دهند؛ بنابراین استثنا شدند. `INV-214` استثنا نیست: محتوای preview را پس از تولید PDF بازمی‌گرداند و بخشی از گردش‌کار است.
- **کنترل‌های لغو:** `INV-033`, `INV-083`, `INV-135`, `INV-248` فقط فرم/مودال/مرحله موقت را بدون commit داده می‌بندند یا لغو می‌کنند. دکمه‌های تأیید و ذخیره متناظر همچنان Help-Required هستند.
- **وضعیت:** بازبینی دسته استثناها کامل است؛ این موضوع به معنی تکمیل Help Registry نیست. ۲۲۸ کنترل فعال Help-Required هنوز باید شش فیلد محتوا در ۱۱ زبان و اتصال runtime داشته باشند. شناسه `THA-HLP-0219` بازنشسته است و نباید منتشر شود.


## تخصیص شناسه‌های Help — 2026-11-26

- فایل مرجع: `docs/HELP_ID_REGISTRY_DRAFT.json`.
- ۲۲۹ شناسه `THA-HLP-0001` تا `THA-HLP-0229` تخصیص یافته‌اند؛ ۲۲۸ شناسه برای کنترل‌های فعال و `THA-HLP-0219` برای ردگیری مورد بازنشسته `INV-256` حفظ شده است.
- هر شناسه به `audit_ref`، label و handler/behavior ثبت‌شده متصل است. در صورت handler مشترک، ردیف‌ها جدا نگه داشته شده‌اند تا context/label/parameter اشتباه ادغام نشود.
- شناسه‌ها از این مرحله immutable هستند: تغییر label یا ترجمه نباید باعث renumber/reuse شود. اگر بعداً action جدیدی کشف شد، شناسه بعدی اضافه می‌شود.
- **محدودیت مهم:** این manifest مستنداتی Draft است؛ هیچ `data-help-id`، listener یا رابط runtime ایجاد نشده است. Registry شامل ۲۲۸ موضوع فعال Help و یک شناسه بازنشسته است؛ وضعیت محتوای هر مورد در فایل Registry مشخص شده است.


## پیشرفت محتوای راهنما — 2026-11-26

- برای شناسه‌های `THA-HLP-0001` تا `THA-HLP-0006`، هر شش فیلد Purpose / When / How / Inputs / Result / Notes در هر ۱۱ زبان تکمیل شد.
- اعتبارسنجی ساختاری: ۶ شناسه × ۱۱ زبان × ۶ فیلد = ۳۹۶ مقدار غیرخالی؛ PASS.
- شناسه‌های تکمیل‌شده شامل ناوبری اصلی و ایجاد/ذخیره قرارداد هستند. محتوای راهنما هنوز به رابط runtime متصل نشده است.
- باقی‌مانده: ۲۲۳ شناسه با محتوای pending؛ اتصال runtime و تست پوشش نیز هنوز انجام نشده‌اند.


## پیشرفت محتوای راهنما — batch 2 — 2026-11-26

- شناسه‌های `THA-HLP-0007` تا `THA-HLP-0012` تکمیل شدند: کمک به نگارش قرارداد با ChatGPT، پیش‌نمایش/چاپ PDF، Dashboard، Add Entry، Records و Invoices.
- همراه با batch قبلی، ۱۲ شناسه از ۲۲۹ شناسه اکنون دارای شش فیلد در هر ۱۱ زبان هستند: ۷۹۲ مقدار محتوایی.
- محتوای Invoices به‌صراحت تفکیک Draft / Issued / Paid / Unpaid را رعایت می‌کند: فاکتور پرداخت‌نشده درآمد دریافت‌شده محسوب نمی‌شود.
- محتوای Add Entry نیز هشدار می‌دهد درآمد فاکتور پرداخت‌نشده به‌عنوان وجه دریافت‌شده ثبت نشود.
- این تغییرات فقط در سند Registry است؛ runtime هنوز متصل نشده است.


## پیشرفت محتوای راهنما — batch 3 — 2026-11-26

- شناسه‌های `THA-HLP-0013` و `THA-HLP-0014` تکمیل شدند: Customers و Reports & Tax، هرکدام با شش فیلد در هر ۱۱ زبان.
- مجموع شناسه‌های تکمیل‌شده به ۱۴ از ۲۲۹ رسید؛ ۹۲۴ مقدار محتوایی غیرخالی اعتبارسنجی شد و ۲۱۵ شناسه باقی مانده است.
- راهنمای Reports & Tax روشن می‌کند که برنامه گزارش‌ها را آماده و ذخیره می‌کند، اما اظهارنامه مالیاتی را خودکار به HMRC ارسال نمی‌کند.
- این تغییرات فقط مستنداتی است؛ اتصال runtime، تغییر برنامه، عملیات دیتابیس یا انتشار انجام نشده است.


## پیشرفت محتوای راهنما — batch 4 — 2026-11-26

- شناسه‌های `THA-HLP-0015` تا `THA-HLP-0020` تکمیل شدند. این شش مورد میان‌برهای ناوبری Dashboard، Add Entry، Records، Invoices، Customers و Reports هستند و متن هرکدام با راهنمای عملکرد متناظر هماهنگ شد.
- مجموع تکمیل‌شده: 20 از ۲۲۹؛ 1320 فیلد محتوایی غیرخالی اعتبارسنجی شد؛ 209 شناسه باقی مانده است.
- این batch فقط مستندات Registry را تغییر داد؛ runtime، دیتابیس، Preview و Production دست‌نخورده‌اند.


## پیشرفت محتوای راهنما — batch 5 — 2026-11-26

- برای شناسه‌های `THA-HLP-0021` تا `THA-HLP-0028` متن اولیه درباره Refresh، دوره ۱۳ تا ۱۲، انتخاب دسته، عکس رسید، حذف عکس، ذخیره ثبت، پاک‌کردن فرم و افزودن دسته تهیه شد.
- این هشت مورد عمداً در وضعیت `CONTENT_DRAFT` باقی ماندند؛ ترجمه‌های همه زبان‌ها هنوز بازبینی زبانی مستقل نشده‌اند و به‌عنوان محتوای تکمیل‌شده شمرده نمی‌شوند.
- شمارش معتبر همچنان 20 شناسه کامل از ۲۲۹ است؛ 8 مورد پیش‌نویس و 201 مورد در انتظار محتواست.
- هیچ کد اجرایی، دیتابیس، انتشار Preview یا Production تغییر نکرده است.


## پیشرفت محتوای راهنما — batch 6 — 2026-11-26

- برای شناسه‌های `THA-HLP-0029` تا `THA-HLP-0033` پیش‌نویس انگلیسی و فارسی تهیه شد: فاکتور جدید، ذخیره فاکتور، ذخیره و چاپ/PDF، ذخیره مشتری و پاک‌کردن فرم مشتری.
- این پنج مورد `CONTENT_DRAFT` هستند؛ ترجمه‌های ۹ زبان دیگر و بازبینی نهایی باقی مانده است.
- شمارش معتبر: ۲۰ شناسه کامل از ۲۲۹؛ ۱۳ پیش‌نویس؛ ۱۹۶ مورد بدون پیش‌نویس کامل.
- هیچ تغییر اجرایی، دیتابیس یا انتشار انجام نشده است.


## پیشرفت محتوای راهنما — batch 7 — 2026-11-26

- پیش‌نویس انگلیسی و فارسی برای `THA-HLP-0034` تا `THA-HLP-0038` تهیه شد: آماده‌سازی گزارش، بایگانی گزارش‌ها، صندوق اعلان‌ها، تقویم مالیاتی و ایمیل حسابدار.
- این پنج مورد `CONTENT_DRAFT` هستند؛ ۹ زبان دیگر و بازبینی نهایی باقی است.
- شمارش فعلی: ۲۰ کامل، ۱۸ پیش‌نویس، ۱۹۱ مورد بدون پیش‌نویس کامل (مجموع ۲۲۹).
- در متن ایمیل حسابدار صریحاً ذکر شده که اتصال ایمیل تأییدشده فعال نیست و ذخیره گیرنده به معنی ارسال ایمیل نیست. در متن تقویم و گزارش نیز عدم ارسال خودکار اظهارنامه مالیاتی روشن شده است.
- هیچ کد اجرایی، دیتابیس یا انتشار تغییر نکرده است.


## ممیزی صداقت ترجمه‌ها — 2026-11-26

- در بازبینی مستقیم Registry مشخص شد برای `THA-HLP-0021` تا `THA-HLP-0028` متن فارسی به‌اشتباه در خانه‌های چند زبان دیگر نیز کپی شده بود. این‌ها ترجمه واقعی نبودند.
- آن مقادیر کپی‌شده حذف شدند. برای این هشت پیش‌نویس فقط زبان‌هایی که متنشان واقعاً نوشته شده (انگلیسی و فارسی) نگهداری می‌شود؛ وضعیت آن‌ها همچنان `CONTENT_DRAFT` است.
- شمارش تأییدشده: ۲۰ کامل از ۲۲۹؛ ۱۸ پیش‌نویس؛ ۱۹۱ در انتظار.
- این اصلاح فقط مستندات Registry در شاخه development را تغییر داد؛ کد برنامه، دیتابیس، Preview deployment و Production دست‌نخورده‌اند.


## پیشرفت محتوای راهنما — batch 8 — 2026-11-26

- پیش‌نویس انگلیسی و فارسی برای `THA-HLP-0039` تا `THA-HLP-0043` ثبت شد: Print Preview، تأیید تکمیل سوابق، بررسی فوری یادآورها و دو کنترل مرتبط با دوره گزارش انتخاب‌شده.
- این پنج مورد `CONTENT_DRAFT` هستند؛ ۹ زبان دیگر و بازبینی نهایی باقی است.
- شمارش معتبر پس از ثبت: ۲۰ کامل، ۲۳ پیش‌نویس، ۱۸۶ مورد بدون پیش‌نویس (۲۲۹ کل).
- راهنماها تصریح می‌کنند Print Preview ارسال HMRC نیست و تأیید تکمیل سوابق صرفاً ثبت وضعیت و تنظیم یادآور داخلی ۱۰روزه است.
- هیچ کد اجرایی، دیتابیس، Preview deployment یا Production تغییر نکرده است.


## پیشرفت محتوای راهنما — batch 9 — 2026-11-26

- پیش‌نویس انگلیسی و فارسی برای `THA-HLP-0044` تا `THA-HLP-0048` ثبت شد: ذخیره مشخصات حسابدار، پشتیبان‌گیری کامل، بازیابی کامل، نمایش اطلاعات نسخه و بایگانی فعالیت‌ها.
- هشدار Restore به‌صراحت توضیح می‌دهد که کل پایگاه داده در هر ۱۷ حوزه جایگزین می‌شود و ممکن است داده‌های فعلی از بین برود؛ پیش از آن باید پشتیبان تازه تهیه شود.
- شمارش فعلی Registry: ۲۰ مورد کامل در هر ۱۱ زبان، ۲۸ پیش‌نویس (فقط زبان‌هایی که واقعاً نوشته شده‌اند)، ۱۸۱ مورد در انتظار؛ مجموع ۲۲۹.
- این batch فقط مستندات Registry و Inventory را تغییر می‌دهد؛ runtime، دیتابیس، Preview deployment و Production دست‌نخورده‌اند.


## پیشرفت محتوای راهنما — batch 10 تا 12 — 2026-11-26

- پیش‌نویس انگلیسی و فارسی برای `THA-HLP-0049` تا `THA-HLP-0053` تهیه شد: آزمون IndexedDB، ایجاد Accounting Snapshot، مقایسه فقط‌خواندنی، گزارش تشخیصی JSON و ممیزی فقط‌خواندنی ذخیره‌سازی.
- پیش‌نویس انگلیسی و فارسی برای `THA-HLP-0054` تا `THA-HLP-0058` تهیه شد: خروجی CSV فعالیت‌ها، Local Self-check، پشتیبان‌گیری حوزه‌ای، انتخاب زبان راهنما و پروفایل/لوگو.
- پیش‌نویس انگلیسی و فارسی برای `THA-HLP-0059` تا `THA-HLP-0063` تهیه شد: User Guide، Software Update، Monitor & Diagnostics، Factory Reset و Open Secure Reset.
- پیش‌نویس انگلیسی و فارسی برای `THA-HLP-0064` تا `THA-HLP-0068` تهیه شد: اعتبارسنجی/تبدیل پشتیبان، Snapshot اضطراری، تأیید ادامه، Reset و Restore All Data و Save Profile.
- هشدارهای Reset و Restore به‌عنوان عملیات پرخطر/مخرب ثبت شده‌اند؛ هیچ‌یک از عملیات واقعی Reset، Restore، Backup یا تغییر داده اجرا نشده است.
- شمارش فعلی Registry: ۲۰ مورد کامل در هر ۱۱ زبان، ۴۸ پیش‌نویس (فقط انگلیسی و فارسی)، ۱۶۱ مورد در انتظار؛ مجموع ۲۲۹.
- این تغییرات فقط مستندات هستند؛ runtime، دیتابیس، Preview deployment و Production دست‌نخورده‌اند.


## پیشرفت محتوای راهنما — batch 13 و 14 — 2026-11-26

- پیش‌نویس انگلیسی و فارسی برای `THA-HLP-0069` تا `THA-HLP-0073` تهیه شد: حذف لوگو، ذخیره پیام پشتیبانی، پاک‌کردن فرم پشتیبانی، بررسی به‌روزرسانی و Update Now.
- پیش‌نویس انگلیسی و فارسی برای `THA-HLP-0074` تا `THA-HLP-0078` تهیه شد: Business Workspace، Projects، Company Contracts & Jobs، Control Panel و زیر‌بخش Projects.
- شمارش فعلی Registry: ۲۰ مورد کامل در هر ۱۱ زبان، ۵۸ پیش‌نویس (فقط انگلیسی و فارسی)، ۱۵۱ مورد در انتظار؛ مجموع ۲۲۹.
- این تغییرات فقط مستندات هستند؛ Help runtime هنوز متصل نشده، تست iPhone Safari انجام نشده و هیچ دیتابیس، Preview deployment یا Production تغییر نکرده است.


## پیشرفت محتوای راهنما — batch 15 تا 24 — 2026-11-26

- ۵۰ پیش‌نویس دیگر برای `THA-HLP-0079` تا `THA-HLP-0128` در Registry ثبت شد.
- دامنه این مجموعه: فضای Company Contracts & Jobs، Control Panel، ایجاد/فهرست/ویرایش/تکمیل/حذف پروژه، تب‌های مالی پروژه، شرکا/کارگران/پیمانکاران، شرکت‌ها و کارها، بسته‌های کاری، هزینه و پرداخت، صفحه‌بندی، دسته‌بندی و رسیدها، مشاهده/حذف فاکتور.
- برای هر ۵۰ شناسه، شش فیلد Purpose / When / How / Inputs / Result / Notes به انگلیسی و فارسی نوشته شد. اعتبارسنجی ساختاری ۵۰ شناسه × ۲ زبان × ۶ فیلد = ۶۰۰ فیلد غیرخالی: PASS.
- شمارش کل Registry: ۲۰ مورد کامل در هر ۱۱ زبان، ۱۰۸ پیش‌نویس (فقط زبان‌هایی که واقعاً نوشته شده‌اند)، ۱۰۱ مورد در انتظار؛ مجموع ۲۲۹.
- این‌ها پیش‌نویس محتوایی هستند، نه ترجمه نهایی در ۱۱ زبان. هنوز بازبینی زبانی و اتصال runtime لازم است. هیچ دیتابیس، Preview deployment یا Production تغییر نکرده است.


## رفع دو مانع ممیزی — 2026-11-27

- `THA-HLP-0050` / `INV-063`: دکمه در Settings وجود دارد، اما تابع `window.createAccountingStorageSnapshot()` در سورس R43 بررسی‌شده تعریف نشده است. وضعیت این شناسه از `CONTENT_COMPLETE` به `CONTENT_DRAFT` کاهش یافت؛ متن انگلیسی و فارسی با وضعیت واقعی هماهنگ شد. تا بازگرداندن handler و آزمون آن، راهنما قابل انتشار نیست.
- `THA-HLP-0219` / `INV-256`: کنترل یک دکمه مخفی `display:none` با handler غیرپیاده‌سازی‌شده `GenUINotUsed` است. ردیف Inventory به `EXEMPT` تغییر کرد؛ شناسه غیرقابل‌تکرار حفظ شده، اما بازنشسته و غیرقابل انتشار است.

## پیشرفت محتوای راهنما — batch نهایی 25 تا 44 — 2026-11-26

- ۱۰۱ پیش‌نویس باقیمانده برای شناسه‌های `THA-HLP-0129` تا `THA-HLP-0229` در Registry ثبت شد؛ در نتیجه برای تمام ۲۲۹ شناسه تخصیص‌یافته، دست‌کم پیش‌نویس محتوایی وجود دارد.
- دامنه این batch: ویرایش/حذف/مشاهده رکوردهای حسابداری، ساخت و اشتراک PDF، مشتریان و فاکتورها، شرکت‌ها و پیمانکاران، پیوست‌ها، بسته‌های کاری، مالی زیرپروژه، رسیدها و هزینه‌ها، کارگران، گزارش کامل پروژه، قراردادها، برش عکس رسید، Monitor & Diagnostics، گزارش‌های ذخیره‌شده، اعلان‌ها و dropdown سفارشی.
- برای ۱۰۱ شناسه، شش فیلد Purpose / When / How / Inputs / Result / Notes به انگلیسی و فارسی ثبت شد. اعتبارسنجی ساختاری: ۱۰۱ × ۲ زبان × ۶ فیلد = ۱٬۲۱۲ فیلد غیرخالی؛ PASS.
- شمارش Registry پس از این batch: ۲۰ مورد کامل در هر ۱۱ زبان، ۲۰۹ پیش‌نویس (فقط انگلیسی و فارسی)، صفر مورد بدون پیش‌نویس؛ مجموع ۲۲۹.
- مورد `INV-256` پس از بررسی سورس، یک دکمه placeholder مخفی در پنجره جزئیات رویداد Monitor شناسایی شد (`display:none` و handler پیاده‌سازی‌نشده `GenUINotUsed`). این ردیف اکنون `EXEMPT` است. شناسه تغییرناپذیر `THA-HLP-0219` فقط برای ردگیری ممیزی حفظ می‌شود، در وضعیت Draft می‌ماند و نباید منتشر یا دوباره استفاده شود.
- این‌ها ترجمه نهایی ۱۱زبانه نیستند. ۹ زبان دیگر برای ۲۰۹ مورد پیش‌نویس، بازبینی زبانی مستقل، اتصال runtime، تست پوشش و تست iPhone Safari همچنان لازم‌اند. هیچ کد اجرایی، دیتابیس، Preview deployment یا Production تغییر نکرده است.
