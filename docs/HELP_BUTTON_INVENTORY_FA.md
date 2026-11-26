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
| INV-005 | ctGlobalBack | ← Back | `ctHandleBack()` | EXEMPT-CANDIDATE |
| INV-006 | — | ＋ New Contract | `ctNew()` | HELP-REQUIRED |
| INV-007 | — | 💾 Save Contract | `ctSave()` | HELP-REQUIRED |
| INV-008 | — | ✦ Help me write with ChatGPT | `ctOpenChatGPT()` | HELP-REQUIRED |
| INV-009 | — | 🖨️ Preview / Print / Save PDF | `ctPrint()` | HELP-REQUIRED |
| INV-010 | — | ← Back to Main Menu | `returnToLauncher()` | EXEMPT-CANDIDATE |
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
| INV-023 | — | ← Back | `goBackOnePage()` | EXEMPT-CANDIDATE |
| INV-024 | — | Refresh | `refreshAll()` | HELP-REQUIRED |
| INV-025 | — | Set period (13th–12th) | `setPeriod()` | HELP-REQUIRED |
| INV-026 | categoryPickerButton | Select a category ⌄ | `toggleCategoryMenu()` | HELP-REQUIRED |
| INV-027 | — | 📷 Take a Photo | `document.getElementById(` | HELP-REQUIRED |
| INV-028 | entryReceiptRemove | Remove photo | `clearEntryReceipt()` | HELP-REQUIRED |
| INV-029 | — | Save Entry | `saveEntry()` | HELP-REQUIRED |
| INV-030 | — | Clear Form | `resetEntry()` | HELP-REQUIRED |
| INV-031 | — | ← Back to category list | `cancelExpenseCategoryAddScreen()` | EXEMPT-CANDIDATE |
| INV-032 | — | Add to list | `saveExpenseCategory()` | HELP-REQUIRED |
| INV-033 | — | Cancel | `cancelExpenseCategoryAddScreen()` | EXEMPT-CANDIDATE |
| INV-034 | — | ＋ New Invoice | `newInvoice()` | HELP-REQUIRED |
| INV-035 | — | ← Back to Invoices | `cancelInvoiceEdit()` | EXEMPT-CANDIDATE |
| INV-036 | — | Save Invoice | `saveInvoice()` | HELP-REQUIRED |
| INV-037 | — | Save & Print / PDF | `saveAndPrintInvoice()` | HELP-REQUIRED |
| INV-038 | — | Save Customer | `saveCustomer()` | HELP-REQUIRED |
| INV-039 | — | Clear Form | `resetCustomerForm()` | HELP-REQUIRED |
| INV-040 | — | ← Back | `report188Back()` | EXEMPT-CANDIDATE |
| INV-041 | — | 📄 Prepare a report Predefined reporting periods and report generation | `report188Navigate(` | HELP-REQUIRED |
| INV-042 | — | 🗂️ Saved reports archive Open previous report snapshots | `report188Navigate(` | HELP-REQUIRED |
| INV-043 | — | 🔔 Notifications inbox Titles only; tap a notification to read it | `report188Navigate(` | HELP-REQUIRED |
| INV-044 | — | 🗓️ Tax calendar Upcoming and past deadlines | `report188Navigate(` | HELP-REQUIRED |
| INV-045 | — | ✉️ Accountant email Recipient settings and sending status | `report188Navigate(` | HELP-REQUIRED |
| INV-046 | — | ← Back | `report188Back()` | EXEMPT-CANDIDATE |
| INV-047 | — | Print Preview | `printReport()` | HELP-REQUIRED |
| INV-048 | — | Confirm records complete | `report188ConfirmComplete()` | HELP-REQUIRED |
| INV-049 | — | Check reminders now | `report188CheckDue()` | HELP-REQUIRED |
| INV-050 | — | ← Back | `report188Back()` | EXEMPT-CANDIDATE |
| INV-051 | — | ← Back | `report188Back()` | EXEMPT-CANDIDATE |
| INV-052 | — | ← Back | `report188Back()` | EXEMPT-CANDIDATE |
| INV-053 | — | ← Back | `report188Back()` | EXEMPT-CANDIDATE |
| INV-054 | — | Confirm records complete for selected period | `report188ConfirmComplete()` | HELP-REQUIRED |
| INV-055 | — | Check reminders now | `report188CheckDue()` | HELP-REQUIRED |
| INV-056 | — | ← Back | `report188Back()` | EXEMPT-CANDIDATE |
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
| INV-069 | — | ← Back | `goBackOnePage()` | EXEMPT-CANDIDATE |
| INV-070 | — | 💾 Backup & Restore Separate backups for each data area | `show(` | HELP-REQUIRED |
| INV-071 | — | ❓ Help Choose the language for the User Guide | `show(` | HELP-REQUIRED |
| INV-072 | — | 👤 Profile & Logo Business details and business logo | `show(` | HELP-REQUIRED |
| INV-073 | — | 📘 User Guide Instructions and Contact Us | `show(` | HELP-REQUIRED |
| INV-074 | — | 🔄 Software Update Check and install the latest version | `show(` | HELP-REQUIRED |
| INV-075 | — | 🛡️ Monitor & Diagnostics Activity archive, errors, data integrity and developer report | `show(` | HELP-REQUIRED |
| INV-076 | — | ⚠️ Factory Reset Convert approved backup and safely restore all data | `show(` | HELP-REQUIRED |
| INV-077 | — | ← Back to Settings | `show(` | EXEMPT-CANDIDATE |
| INV-078 | — | Open Secure Reset | `openFactoryReset()` | HELP-REQUIRED |
| INV-079 | factoryResetConvertButton | Validate and Convert Backup | `event/property listener` | HELP-REQUIRED |
| INV-080 | factoryResetEmergencyButton | Download Emergency Snapshot | `event/property listener` | HELP-REQUIRED |
| INV-081 | factoryResetNext | I Understand — Continue | `factoryResetNextStep()` | HELP-REQUIRED |
| INV-082 | factoryResetFinalButton | Reset and Restore All Data | `event/property listener` | HELP-REQUIRED |
| INV-083 | — | Cancel | `closeFactoryReset()` | EXEMPT-CANDIDATE |
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
| INV-094 | — | ← Back to Main Menu | `returnToLauncher()` | EXEMPT-CANDIDATE |
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
| INV-135 | — | Cancel | `closeInvoicePaidModal()` | EXEMPT-CANDIDATE |
| INV-136 | — | Confirm payment | `confirmInvoicePaid()` | HELP-REQUIRED |
| INV-137 | — | ‹ Previous | `changeListPage(` | HELP-REQUIRED |
| INV-138 | — | ${p} | `changeListPage(` | HELP-REQUIRED |
| INV-139 | — | =pages?'disabled':''} onclick="changeListPage('${key}',${page+1},'${renderer}')">Next › | `event/property listener` | HELP-REQUIRED |
| INV-140 | — | ← Back to '+esc(label)+' | `goBackOnePage()` | EXEMPT-CANDIDATE |
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
| INV-152 | — | Close | `document.getElementById(\` | EXEMPT-CANDIDATE |
| INV-153 | — | × | `window.close()` | EXEMPT-CANDIDATE |
| INV-154 | — | ↥ Share PDF | `shareReportPdf()` | HELP-REQUIRED |
| INV-155 | makePdf | Create PDF | `createPDF()` | HELP-REQUIRED |
| INV-156 | downloadPdf | Download PDF | `downloadPDF()` | HELP-REQUIRED |
| INV-157 | sharePdf | ↗ Share PDF | `sharePDF()` | HELP-REQUIRED |
| INV-158 | — | × | `window.close()` | EXEMPT-CANDIDATE |
| INV-159 | — | Edit | `editCustomer(` | HELP-REQUIRED |
| INV-160 | — | New invoice | `newInvoiceForCustomer(` | HELP-REQUIRED |
| INV-161 | — | Delete | `deleteCustomer(` | HELP-REQUIRED |
| INV-162 | — | Back to Records | `show(&quot;records&quot;)` | EXEMPT-CANDIDATE |
| INV-163 | — | Open print view | `openInvoicePrintView()` | HELP-REQUIRED |
| INV-164 | — | Back to invoices | `document.body.classList.remove(\` | EXEMPT-CANDIDATE |
| INV-165 | — | ← Back | `thaBackInvoicePdf()` | EXEMPT-CANDIDATE |
| INV-166 | — | × | `thaCloseInvoicePdf()` | EXEMPT-CANDIDATE |
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
| INV-190 | — | ← Back to Main Menu | `returnToLauncher()` | EXEMPT-CANDIDATE |
| INV-191 | — | ← Back to ${backLabel} | `${name===` | EXEMPT-CANDIDATE |
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
| INV-206 | — | Close receipt | `window.close()` | EXEMPT-CANDIDATE |
| INV-207 | — | ↗ Share PDF | `shareReceiptPdf()` | HELP-REQUIRED |
| INV-208 | — | Print | `window.open(window.receiptPdfUrl,` | HELP-REQUIRED |
| INV-209 | — | Close | `prCloseSubReportPreview()` | EXEMPT-CANDIDATE |
| INV-210 | — | Generate PDF | `prRunSubReportPrint()` | HELP-REQUIRED |
| INV-211 | — | Close | `prCloseSubReportPreview()` | EXEMPT-CANDIDATE |
| INV-212 | — | Generate PDF | `prRunSubReportPrint()` | HELP-REQUIRED |
| INV-213 | — | ↗ Share PDF | `prShareSubReportPDF()` | HELP-REQUIRED |
| INV-214 | — | × | `prRestoreReportPreview()` | HELP-REQUIRED |
| INV-215 | — | ← Back to Sub-projects | `prBackToSubprojects()` | EXEMPT-CANDIDATE |
| INV-216 | — | Income | `prRenderSubFinance(` | HELP-REQUIRED |
| INV-217 | — | Expenses | `prRenderSubFinance(` | HELP-REQUIRED |
| INV-218 | — | Report | `prRenderSubFinance(` | HELP-REQUIRED |
| INV-219 | — | ＋ Add Sub-project | `prOpenSubprojectForm()` | HELP-REQUIRED |
| INV-220 | — | Edit | `event.stopPropagation();prOpenSubproject(` | HELP-REQUIRED |
| INV-221 | — | ＋ Add Sub-project | `prEnableSubprojectsAndAdd()` | HELP-REQUIRED |
| INV-222 | — | ← Back | `prBackToSubprojects()` | EXEMPT-CANDIDATE |
| INV-223 | prAddSubprojectBtn | ＋ Add Sub-project | `prAddSubproject()` | HELP-REQUIRED |
| INV-224 | — | Print / Save PDF | `window.print()` | HELP-REQUIRED |
| INV-225 | — | 📋 Worker List — Choose Worker | `prOpenWorkerListPicker()` | HELP-REQUIRED |
| INV-226 | — | Record | `prSaveRow(` | HELP-REQUIRED |
| INV-227 | — | Clear | `prClearRowForm()` | HELP-REQUIRED |
| INV-228 | — | Edit | `prEditRow(` | HELP-REQUIRED |
| INV-229 | — | Delete | `prDeleteRow(` | HELP-REQUIRED |
| INV-230 | — | × | `prCloseWorkerListPicker()` | EXEMPT-CANDIDATE |
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
| INV-245 | — | ${L.close} | `ctPreviewClose()` | EXEMPT-CANDIDATE |
| INV-246 | — | ${L.back} | `history.back()` | HELP-REQUIRED |
| INV-247 | — | Close ✕ | `closeReceiptImage()` | EXEMPT-CANDIDATE |
| INV-248 | — | Cancel | `cancelReceiptCrop()` | EXEMPT-CANDIDATE |
| INV-249 | — | Use full image | `useFullReceiptImage()` | HELP-REQUIRED |
| INV-250 | — | Save cropped photo | `applyReceiptCrop()` | HELP-REQUIRED |
| INV-251 | — | Copy version details | `copyMonitorVersionInfo()` | HELP-REQUIRED |
| INV-252 | — | View details | `showMonitorEvent(` | HELP-REQUIRED |
| INV-253 | — | ‹ Previous | `monitorPage--;renderMonitor()` | HELP-REQUIRED |
| INV-254 | — | ${monitorPage} / ${pages} | `event/property listener` | HELP-REQUIRED |
| INV-255 | — | =pages?'disabled':''} onclick="monitorPage++;renderMonitor()">Next › | `event/property listener` | HELP-REQUIRED |
| INV-256 | — | (label not statically available) | `GenUINotUsed` | HELP-REQUIRED |
| INV-257 | monitorCopyEvent | Copy JSON | `event/property listener` | HELP-REQUIRED |
| INV-258 | monitorCloseEvent | Close | `event/property listener` | EXEMPT-CANDIDATE |
| INV-259 | — | Open saved report | `report188Open(` | HELP-REQUIRED |
| INV-260 | — | Print / PDF | `report188Print(` | HELP-REQUIRED |
| INV-261 | — | Update status | `report188RenameStatus(` | HELP-REQUIRED |
| INV-262 | — | ${n.read?'○':'●'} ${esc(n.title)} ${new Date(n.createdAt).toLocaleDateString('en-GB')} › | `report188OpenNotification(` | HELP-REQUIRED |
| INV-263 | — | Mark as ${n.read?'unread':'read'} | `report188ToggleReadFromDetail(` | HELP-REQUIRED |
| INV-264 | — | Print / Save PDF | `report188Print(` | HELP-REQUIRED |
| INV-265 | — | Close saved report | `document.getElementById(` | EXEMPT-CANDIDATE |
| INV-266 | eiwClose | Return to form | `event/property listener` | HELP-REQUIRED |

## کنترل‌های ساخته‌شده با DOM API

بررسی مستقیم سورس R43 دو محل `document.createElement('button')` را پیدا کرد که در شمارش ۲۶۶ تگ موجود در HTML/قالب‌ها نیستند. این‌ها دو نوع کنترل پویا هستند، نه دو دکمه ثابت در صفحه:

| Ref ممیزی | Selector / Class | متن | رفتار | طبقه‌بندی |
|---|---|---|---|---|
| INV-267 | `.unified-dropdown-trigger` | متن گزینه انتخاب‌شده / placeholder | باز و بسته کردن فهرست انتخاب بومی‌شده از روی یک select موجود | HELP-REQUIRED |
| INV-268 | `.unified-dropdown-option` | متن هر گزینه از select | انتخاب مقدار و dispatch رویداد change؛ برای هر گزینه نمونه جداگانه ساخته می‌شود | HELP-REQUIRED |

بنابراین baseline فعلی ۲۶۸ نوع/عنصر قابل ممیزی دارد: ۲۲۹ HELP-REQUIRED و ۳۹ EXEMPT-CANDIDATE. بازبینی دستی وضعیت اولیه ۳۵ نامزد را تکمیل کرد؛ ۳۴ مورد از نامزدهای قبلی تأیید شدند و `INV-268` به دلیل تغییر مقدار فیلد به HELP-REQUIRED ارتقا یافت. پنج مورد از طبقه‌بندی قبلی HELP-REQUIRED نیز پس از بررسی رفتار واقعی به استثنای بستن/خروجی تبدیل شدند: `INV-153`, `INV-158`, `INV-166`, `INV-230`, `INV-245`. این شمارش، تعداد کل نمونه‌های زمان اجرا را بیان نمی‌کند؛ تعداد گزینه‌های dropdown بر اساس داده و صفحه تغییر می‌کند.

## تکمیل موردنیاز

1. بازبینی دستی نامزدهای اولیه تکمیل شد؛ ۳۹ استثنا با رفتار واقعی Back / Cancel / Close تأیید شدند. این معافیت فقط برای کنترل‌های dismiss/navigation است و به سایر کنترل‌های همان پنجره تعمیم ندارد.
2. بازبینی ۲۲۹ `HELP-REQUIRED` و تفکیک handlerهای مشترک بر اساس پارامتر و label.
3. تخصیص ۲۲۹ شناسه immutable به ردیف‌های Help-Required در سند پیش‌نویس `docs/HELP_ID_REGISTRY_DRAFT.json` انجام شد؛ این شناسه‌ها هنوز به runtime متصل نیستند و محتوا/ترجمه آن‌ها pending است.
4. نوشتن شش فیلد واقعی برای هر ID در تمام ۱۱ زبان فعلی راهنما؛ زبان رابط اصلی برنامه همچنان انگلیسی/LTR است.
5. اتصال IDها به دکمه‌های ثابت و قالب‌های پویا و افزودن تست خودکار پوشش و یکتایی.
6. بررسی listener دکمه‌های فاقد onclick.
7. پس از تکمیل پوشش، اجرای Gate و درخواست تست iPhone Safari.

## نتیجه بازبینی دستی استثناها — 2026-11-26

- **۳۹ مورد تأییدشده به‌عنوان استثنا:** `INV-005`, `INV-010`, `INV-023`, `INV-031`, `INV-033`, `INV-035`, `INV-040`, `INV-046`, `INV-050`, `INV-051`, `INV-052`, `INV-053`, `INV-056`, `INV-069`, `INV-077`, `INV-083`, `INV-094`, `INV-135`, `INV-140`, `INV-152`, `INV-153`, `INV-158`, `INV-162`, `INV-164`, `INV-165`, `INV-166`, `INV-190`, `INV-191`, `INV-206`, `INV-209`, `INV-211`, `INV-215`, `INV-222`, `INV-230`, `INV-245`, `INV-247`, `INV-248`, `INV-258`, `INV-265`.
- **اصلاح مرز استثنا:** `INV-268` گزینه پویا برای انتخاب مقدار از select است و به‌دلیل تغییر state، Help-Required شد. `INV-230` فقط بستن فهرست انتخاب کارگر است؛ `INV-232` دکمه Done باقی می‌ماند Help-Required چون پایان مرحله انتخاب را تأیید می‌کند.
- **اصلاح موارد Close:** `INV-153`, `INV-158`, `INV-166`, `INV-245` فقط PDF preview/window را می‌بندند و داده یا سند را تغییر نمی‌دهند؛ بنابراین استثنا شدند. `INV-214` استثنا نیست: محتوای preview را پس از تولید PDF بازمی‌گرداند و بخشی از گردش‌کار است.
- **کنترل‌های لغو:** `INV-033`, `INV-083`, `INV-135`, `INV-248` فقط فرم/مودال/مرحله موقت را بدون commit داده می‌بندند یا لغو می‌کنند. دکمه‌های تأیید و ذخیره متناظر همچنان Help-Required هستند.
- **وضعیت:** بازبینی دسته استثناها کامل است؛ این موضوع به معنی تکمیل Help Registry نیست. ۲۲۹ عملکرد Help-Required هنوز باید به شناسه‌های پایدار، شش فیلد محتوا در ۱۱ زبان و اتصال runtime برسند.


## تخصیص شناسه‌های Help — 2026-11-26

- فایل مرجع: `docs/HELP_ID_REGISTRY_DRAFT.json`.
- ۲۲۹ شناسه `THA-HLP-0001` تا `THA-HLP-0229` به‌ترتیب ردیف‌های Help-Required تخصیص یافتند.
- هر شناسه به `audit_ref`، label و handler/behavior ثبت‌شده متصل است. در صورت handler مشترک، ردیف‌ها جدا نگه داشته شده‌اند تا context/label/parameter اشتباه ادغام نشود.
- شناسه‌ها از این مرحله immutable هستند: تغییر label یا ترجمه نباید باعث renumber/reuse شود. اگر بعداً action جدیدی کشف شد، شناسه بعدی اضافه می‌شود.
- **محدودیت مهم:** این یک manifest مستنداتی Draft است؛ هیچ `data-help-id`، listener یا رابط runtime ایجاد نشده است. تمام ۲۲۹ مورد `CONTENT_PENDING` هستند.


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
