# Contextual User Guide Runtime — R46 Implementation

**Repository:** `Thehandymanjob/accountancy-r11-preview`  
**Branch:** `development`  
**Build ID:** `THA-273-R11-PREVIEW-20261127-R46`  
**Status:** Implemented in development; Version Authority Gate and browser verification pending.

## Existing guide preserved

The R45 source already contained the real `#userGuide` page, the 12-chapter `GUIDE_CONTENT` structure, the 11 guide-language choices, and the persisted guide-language preference. R46 reuses that page and preference; it does not create a second guide or change the main interface language.

## Runtime implementation

- Added `tha-help-content-v1.js`, a versioned runtime data bundle.
- Added `tha-help-runtime-v1.js`, a standalone contextual Help engine.
- Loaded both files from the application HTML before `</body>`.
- The engine adds one fixed, accessible `?` control. It remembers the last mapped control selected; pressing `?` displays that control's six Help fields. If no mapped control has been selected, it opens the existing full User Guide.
- The Help panel renders text using DOM `textContent`, respects the selected guide language and RTL direction for applicable languages, and provides Close / Open full User Guide actions.
- Static selector bindings are an explicit allowlist. The engine also recognises future `data-help-id` attributes on dynamic template controls through event delegation and a MutationObserver.
- No LocalStorage, IndexedDB, backup, recovery, or accounting-data code is used by this engine.

## Content publication boundary

- **132** entries marked `CONTENT_COMPLETE` are included.
- All six required fields are present for each included entry in all **11** languages.
- **96** active `CONTENT_DRAFT` entries remain excluded.
- **1** retired Help ID remains excluded and will never be reused.
- Draft status is not overridden by runtime implementation.

## Control binding

- **14** static, scoped controls are wired through the allowlist.
- **2** static candidates are intentionally skipped because their content is Draft.
- **15** dynamic/template controls still need exact `data-help-id` attributes at their rendering callsites.
- No global label matching, handler-substring matching, transient row index, or `nth-child` selector is used.

## Validation and release gate

- R46 Build ID, canonical URL, HTML metadata, and Version Authority asset pins are updated together.
- Version Authority workflow asset-count expectation is increased from 22 to 24 to include the two new runtime assets.
- Registry source inventory baseline is reconciled to R45 inventory blob SHA `f1efe7a5f57961a5b415cc1a9e1992622ab549b1`.
- Static syntax and source-integrity checks are required before PR review.
- Browser DOM uniqueness, actual click-to-help behavior, language switching, modal accessibility, mobile layout, and iPhone Safari remain **not tested**.
- PR #96 stays Draft. Preview Pages is not deployed. Production is unchanged and not authorized.


## R47 dynamic-template update

Five completed dynamic template controls now carry explicit `data-help-id` attributes: pagination page numbers, receipt clip, active Records invoice View/Delete, and Deleted Records invoice View. Combined with the 14 R46 static bindings, 19 controls are wired in source. Ten dynamic and two static controls remain unbound because their content is Draft. The underlying button handlers are unchanged. R47 Version Authority Gate and browser tests are pending; no deployment has occurred.


## R48 English/Persian draft-content correction

Source review corrected the English and Persian text for nine Draft entries: THA-HLP-0057, 0146, 0156, 0168, 0169, 0170, 0180, 0181 and 0222. The corrections fix stale Help wording, job attachment scope, the All Costs Register vs Report tab distinction, the Project expense receipt-photo form, selected sub-project vs full-project PDF scope, and the Saved reports archive print action. All nine remain `CONTENT_DRAFT` and are excluded from the runtime bundle until the remaining language versions are reviewed. Runtime publication remains 132 entries.


## R53 Support Message binding

- Added `THA-HLP-0070` to the explicit static selector allowlist using `#helpContactForm > .pr-actions > button[type="submit"]`.
- The selector is scoped to the single `#helpContactForm` form. Its submit handler stores the message as a local IndexedDB draft only; it does not send email or contact the developer.
- Static allowlist count: 33. Total contextual Help controls mapped: 38 (33 static, five dynamic-template).
- Version target: `THA-273-R11-PREVIEW-20261127-R53`. Version Authority pins and mapping baselines must match the new index and runtime blob SHAs.
- Static source inspection only. Live click behavior, event isolation, language switching, mobile layout and iPhone Safari remain unverified. No Preview deployment or Production change.


## R54 specialist report and diagnostics bindings

- Added six completed contextual Help topics to the explicit static selector allowlist: `THA-HLP-0042` (selected-period completion in `#report188Calendar`), `THA-HLP-0047` (version details), and `THA-HLP-0052`–`THA-HLP-0055` (diagnostic report, read-only storage audit, activity CSV and local self-check in `#monitor`).
- Selectors use exact literal `onclick` values scoped to their owning panel. The selected-period completion control is distinguished from the similarly handled control in the report builder.
- Static allowlist count: 39. Total contextual Help controls mapped: 44 (39 static, five dynamic-template).
- Version target: `THA-273-R11-PREVIEW-20261127-R54`. The embedded canonical URL, Build ID, index blob SHA and runtime asset pin must remain synchronized.
- Source-level mapping only. Live Help clicks, language switching, mobile layout, actual report actions and iPhone Safari remain unverified. No Preview deployment or Production change.


## R55 core accounting bindings

- Added six completed contextual Help topics for `THA-HLP-0026` Save Entry, `THA-HLP-0028` Add expense category, `THA-HLP-0030` Save Invoice, `THA-HLP-0031` Save & Print / PDF, `THA-HLP-0032` Save Customer and `THA-HLP-0033` Clear Customer Form.
- Each selector is scoped to its owning form/panel (`#entry`, `#expenseCategoryAddScreen`, `#invoiceEditor` or `#customers`) and the exact literal `onclick` attribute.
- Static allowlist count: 45. Total contextual Help controls mapped: 50 (45 static, five dynamic-template).
- No accounting calculation, invoice numbering, payment linkage, IndexedDB operation or original button handler was changed.
- Version target: `THA-273-R11-PREVIEW-20261127-R55`. The embedded canonical URL, Build ID, index SHA and runtime asset pin must match before the Gate can pass.
- Source-level implementation only. Live save flows, contextual popup behavior, language switching, mobile layout and iPhone Safari remain unverified. No Preview deployment or Production change.


## R56 invoice and Reports & Tax navigation

- Added six completed contextual Help topics: `THA-HLP-0029` New Invoice and `THA-HLP-0034`–`THA-HLP-0038` for Prepare a report, Saved reports archive, Notifications inbox, Tax calendar and Accountant email.
- New Invoice is scoped to `#invoiceListArea`. The five Reports & Tax controls are scoped to `#report188Menu` and use exact `report188Navigate(...)` parameter values.
- Corrected JavaScript string escaping for single quotes inside the CSS attribute selectors; the runtime selector strings now preserve the intended exact `onclick` values.
- Static allowlist count: 51. Total contextual Help controls mapped: 56 (51 static, five dynamic-template).
- Version target: `THA-273-R11-PREVIEW-20261127-R56`. Build ID, canonical URL, index SHA and runtime asset pin must match before Gate approval.
- Live browser navigation, contextual Help interaction, language switching, mobile layout and iPhone Safari remain unverified. No Preview deployment or Production change.


## R57 Project Workspace bindings

- Added seven completed Help topics: `THA-HLP-0084` Save Project, `THA-HLP-0085` Clear Project Form, `THA-HLP-0086` Edit Project, `THA-HLP-0088` Delete Project, `THA-HLP-0098` Save Partner, `THA-HLP-0100` Save Contractor and `THA-HLP-0102` Save Worker.
- Selectors are scoped to the exact Project Workspace page and the literal action handler. The partner/worker parameter quotes are escaped once in the JavaScript string so the selector resolves to the intended HTML attribute.
- Static allowlist count: 58. Total contextual Help controls mapped: 63 (58 static, five dynamic-template).
- Delete Project remains a destructive original action; the Help trigger must remain isolated and must never invoke the Delete handler.
- Version target: `THA-273-R11-PREVIEW-20261127-R57`. Build ID, canonical URL, index SHA and runtime asset pin must match before Gate approval.
- Live browser clicks, destructive-action isolation, language switching, mobile layout and iPhone Safari remain unverified. No Preview deployment or Production change.


## R58 Company Contracts and project finance bindings

- Added 11 completed Help topics for Company registration/list/P&L, company save/clear, job save/clear, work-package save, package expense, project payment and Accounting invoice payment confirmation.
- Company menu controls are scoped to `#prPage-company-hub .pr-list` with exact `coOpenCompanyMode(...)` / `prPage(...)` arguments. Form actions are scoped to the Company Contracts & Jobs panel or the exact finance/payment modal.
- Critical data boundary preserved: Company Contracts & Jobs project expenses and receipts remain separate from Accounting. `coRecordPayment()` writes only to the project/job records; `confirmInvoicePaid()` is a distinct Accounting invoice workflow.
- Static allowlist count: 69. Total contextual Help controls mapped: 74 (69 static, five dynamic-template).
- Version target: `THA-273-R11-PREVIEW-20261127-R58`. Build ID, canonical URL, index SHA and runtime asset pin must match before Gate approval.
- No actual project expense/payment was recorded. Live browser interaction, data-boundary verification, language switching, mobile layout and iPhone Safari remain unverified. No Preview deployment or Production change.


## R59 Contracts and Profile bindings

- Added six completed Help topics: `THA-HLP-0005` New Contract, `THA-HLP-0006` Save Contract, `THA-HLP-0008` Contract Preview/Print/Save PDF, `THA-HLP-0068` Save Profile, `THA-HLP-0069` Remove Logo and `THA-HLP-0071` Clear Support Form.
- Contract actions are scoped to `#contractsWorkspace` and `#ctFormCard`; Profile & Logo actions are scoped to `#profileGuide`; Clear Support Form is scoped to `#helpContactForm`.
- Static allowlist count: 75. Total contextual Help controls mapped: 80 (75 static, five dynamic-template).
- No contract content, PDF generation, profile persistence, logo storage or support message delivery logic was changed.
- Version target: `THA-273-R11-PREVIEW-20261127-R59`. Build ID, canonical URL, index SHA and runtime asset pin must match before Gate approval.
- Live browser clicks, PDF preview, profile save/remove, language switching, mobile layout and iPhone Safari remain unverified. No Preview deployment or Production change.


## R60 Main Menu and Accountancy navigation

- Added ten completed Help topics: four Main Menu destinations (`THA-HLP-0001`–`THA-HLP-0004`) and six Accountancy home destinations (`THA-HLP-0009`–`THA-HLP-0014`).
- Main Menu controls are scoped to `#appLauncher .launcher-actions`; Accountancy home cards are scoped to `#accountancyHome .accountancy-home-grid` with exact `show(...)` destinations.
- Static allowlist count: 85. Total contextual Help controls mapped: 90 (85 static, five dynamic-template).
- No navigation handlers, page routing, accountancy state or database behavior were changed.
- Version target: `THA-273-R11-PREVIEW-20261127-R60`. Build ID, canonical URL, index SHA and runtime asset pin must match before Gate approval.
- Live browser navigation, contextual Help interaction, language switching, mobile layout and iPhone Safari remain unverified. No Preview deployment or Production change.


## R60 primary navigation and critical Accountancy bindings

- Added 19 Help bindings for the four launcher destinations, six Accountancy home destinations, Dashboard Refresh and Set Period, Clear Entry Form, Reports Print Preview, Secure Factory Reset entry and four Business Workspace sidebar destinations.
- Selectors are scoped to the actual page/container and exact action/data attribute. The Factory Reset entry uses `#factoryResetPage`, not a generic Settings selector.
- Static allowlist count: 94. Total contextual Help controls mapped: 99 (94 static, five dynamic-template).
- Build target: `THA-273-R11-PREVIEW-20261127-R60`. Version Authority must validate the canonical URL, index SHA and all pinned runtime assets.
- Source-level only; no real browser Help click, language switching, mobile layout or iPhone Safari test has been performed. No Reset, Preview deployment or Production change.


## R61 binding deduplication

- Consolidated the duplicate `THA-HLP-0006` and `THA-HLP-0008` entries. Each now has one static selector scoped to `#ctFormCard`; the duplicate rows were removed from `STATIC_BINDINGS`.
- Runtime now contains 92 static rows with 92 unique Help IDs and five dynamic-template attributes (97 mapped Help IDs total).
- Mapping counts were synchronized: 74 scoped static selectors, 13 exact unique-ID selectors, five scoped unique-handler selectors and five dynamic-template attributes.
- Version target: `THA-273-R11-PREVIEW-20261127-R61`. Version Authority index/runtime pins and Registry mapping baselines must match the final R61 tree.
- No user-facing app behavior changed. Browser Help interaction, language switching, mobile layout and iPhone Safari remain unverified. No Preview deployment or Production change.


## R61 Project Workspace detail and project form bindings

- Added 13 completed Help bindings for New Project, Projects List, Add Partner share row, seven Project Detail tabs, View Financial Report, Clear Contractor Form and Clear Work Package Form.
- The seven tabs use exact data-pr-sub attributes so repeated prDetailTab handlers cannot collide. New/List selectors are scoped to #prPage-project-hub; Clear actions are scoped to their actual form pages.
- Cumulative mapping: 110 Help controls (105 static, five dynamic-template); 87 scoped static selectors, 13 unique-ID selectors and five scoped-handler selectors.
- Build target: THA-273-R11-PREVIEW-20261127-R61. Browser testing and deployment remain pending.


## R61 Project Workspace detail controls

- Added 13 completed Help topics for New Project, Projects List, Add Partner share row, the seven Project Detail tabs, View Financial Report, Clear Contractor Form and Clear Work Package Form.
- Project Detail tabs use `data-pr-sub` to distinguish the repeated `prDetailTab(...)` handler and preserve a unique Help ID per tab.
- Runtime now contains 105 static binding rows with 105 unique Help IDs and five dynamic-template attributes (110 mapped Help IDs total).
- Mapping summary: 87 scoped static selectors, 13 exact unique-ID selectors and five scoped unique-handler selectors.
- Version target remains `THA-273-R11-PREVIEW-20261127-R61`. Version Authority must pin the current runtime SHA before the R61 Gate can pass.
- Live Project Workspace interactions, Help trigger isolation, language switching, mobile layout and iPhone Safari remain unverified. No Preview deployment or Production change.
