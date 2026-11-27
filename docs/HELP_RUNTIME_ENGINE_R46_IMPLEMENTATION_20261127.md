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
