# Help ID and Handler Ambiguity Review — 2026-11-27

## Scope and safety

- Repository: `Thehandymanjob/accountancy-r11-preview`
- Branch: `development`
- Pull request: #96 — remains Draft
- Runtime baseline inspected: `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`
- Runtime blob SHA inspected: `e58a0c7895cf639c36e69c28696ebfd3bd262bef`
- This report is a static-source audit only. It does not attach Help IDs, change application code, deploy Preview, merge PR #96, or touch Production or either database.
- Browser/DOM verification and iPhone Safari verification remain outstanding.

## 1. The 17 IDs with a unique static element ID

The mapping file records exactly 17 entries as `ID_CANDIDATE_REQUIRES_BROWSER_TEST`. Each ID below has one matching element ID in the inspected source and a candidate CSS selector. These are candidates only; uniqueness in source does not prove that the control is visible, active, or correctly wired at runtime.

| Help ID | Inventory ref | Element ID | Candidate selector | Action |
|---|---|---|---|---|
| THA-HLP-0023 | INV-026 | categoryPickerButton | #categoryPickerButton | Select a category |
| THA-HLP-0025 | INV-028 | entryReceiptRemove | #entryReceiptRemove | Remove entry receipt photo |
| THA-HLP-0045 | INV-058 | fullBackupButton | #fullBackupButton | Full database backup |
| THA-HLP-0046 | INV-059 | fullRestoreButton | #fullRestoreButton | Choose full database restore |
| THA-HLP-0048 | INV-061 | toggleActivityArchiveButton | #toggleActivityArchiveButton | Show activity archive |
| THA-HLP-0049 | INV-062 | runIndexedDBSelfTestButton | #runIndexedDBSelfTestButton | Test IndexedDB storage |
| THA-HLP-0064 | INV-079 | factoryResetConvertButton | #factoryResetConvertButton | Validate and convert backup |
| THA-HLP-0065 | INV-080 | factoryResetEmergencyButton | #factoryResetEmergencyButton | Download emergency snapshot |
| THA-HLP-0066 | INV-081 | factoryResetNext | #factoryResetNext | Continue Factory Reset |
| THA-HLP-0067 | INV-082 | factoryResetFinalButton | #factoryResetFinalButton | Reset and restore all data |
| THA-HLP-0073 | INV-089 | appReloadUpdate | #appReloadUpdate | Update Now |
| THA-HLP-0087 | INV-104 | prCompleteToggle | #prCompleteToggle | Toggle project completion |
| THA-HLP-0089 | INV-106 | prDetailProfitReportButton | #prDetailProfitReportButton | Open project profit report |
| THA-HLP-0171 | INV-199 | prReceiptRemove | #prReceiptRemove | Remove project receipt photo |
| THA-HLP-0190 | INV-223 | prAddSubprojectBtn | #prAddSubprojectBtn | Add sub-project |
| THA-HLP-0220 | INV-257 | monitorCopyEvent | #monitorCopyEvent | Copy event JSON |
| THA-HLP-0227 | INV-266 | eiwClose | #eiwClose | Return to form |

**Next validation for these 17:** confirm the selector resolves to exactly one live element in the correct screen/state; verify visibility, enabled/disabled state, action result, and contextual Help opening in a browser. Do not attach automatically before this test.

## 2. Static review of the 179 AMBIGUOUS_HANDLER rows

The current mapping summary reports:
- 179 rows marked `AMBIGUOUS_HANDLER`
- 123 distinct handler tokens across those rows
- 16 rows marked `HANDLER_CANDIDATE_REQUIRES_CONTEXT_TEST`
- 17 unique-element-ID candidates (listed above)
- 7 `NEEDS_SELECTOR`, 7 `SEPARATE_DOCUMENT_SCOPE`, 2 `DYNAMIC_TEMPLATE_CANDIDATE`, and 1 exempt/unmapped row

A second static pass counted matching inline `onclick` call sites rather than raw source-token occurrences. The 179 rows break down as follows:

| Matching inline onclick call sites for the handler token | Mapping rows |
|---:|---:|
| 1 | 98 |
| 2 | 26 |
| 3 | 5 |
| 4 | 4 |
| 5 | 7 |
| 7 | 7 |
| 13 | 13 |
| 21 | 19 |
| **Total** | **179** |

This demonstrates that the original raw-occurrence count is not a reliable ambiguity test: it can count both the button's call site and the function declaration/implementation. A single matching inline call site is a stronger selector candidate, but it is still not browser verification and does not cover listeners attached programmatically or controls generated later.

### Shared handlers whose parameters/context distinguish the actions

These groups should not remain labelled ambiguous solely because the same function name is reused. The actual argument and containing UI context distinguish the control:

- `show(...)`: 19 Help IDs — THA-HLP-0009–0020 and THA-HLP-0056–0062. The arguments identify the destination panel (for example `home`, `entry`, `records`, `invoices`, `customers`, `report`, and the Settings subsections).
- `prPage(...)`: 12 IDs — THA-HLP-0074–0078, THA-HLP-0080–0082, THA-HLP-0104–0106, THA-HLP-0109. The page argument and the corresponding navigation/template context distinguish the destination.
- `prDetailTab(...)`: 7 IDs — THA-HLP-0090–0096. The tab argument uniquely identifies Summary, Income, Expenses, Worker Wages, Tools, Food & Other, or Reports.
- `report188Navigate(...)`: 5 IDs — THA-HLP-0034–0038. The argument identifies builder, archive, inbox, calendar, or email.
- `prRenderSubFinance(...)`: 3 IDs — THA-HLP-0184–0186. The argument identifies Income, Expenses, or Report.
- `coOpenAttachment(...)`: 4 IDs — THA-HLP-0149, THA-HLP-0156, THA-HLP-0157, THA-HLP-0163. The first argument and row/template context distinguish company, job, package, and package-expense attachments.
- `prSavePerson(...)` / `prResetPerson(...)`: partner and worker forms share implementations but the form mode/context distinguishes the target record type. IDs: THA-HLP-0098/0102 and THA-HLP-0099/0103.
- `coOpenCompanyMode(...)`: THA-HLP-0107 and THA-HLP-0108 use different modes (Add Company vs Companies list).

These are **parameter/context-resolvable**, not yet approved for runtime attachment. The runtime mapping should record the exact argument and selector/template context, not just the shared function name.

### Groups requiring a closer selector/context decision

- `report188ConfirmComplete()`: THA-HLP-0040 and THA-HLP-0042 occur in separate reporting contexts (general records vs selected period). The screen/period context must be retained.
- `report188CheckDue()`: THA-HLP-0041 and THA-HLP-0043 likewise require the general vs selected-period context.
- `changeListPage(...)`: THA-HLP-0119 and THA-HLP-0120 are Previous/Next controls in a generated list; distinguish by page direction and renderer key.
- `prOpenReconciliationCost(...)`: THA-HLP-0202 and THA-HLP-0203 are Edit/Delete actions in a row context; distinguish by action and record key.
- `report188Print(...)`: THA-HLP-0222 and THA-HLP-0226 are distinct print/PDF workflows and need their containing report context.
- `document.getElementById(...)` and generic `event/property listener` entries cannot be resolved from the token alone; use exact element IDs, listener registration sites, or template-specific attachment points.

## 3. Other non-ambiguous mapping classes that must remain separate

- 16 handler candidates still require context testing before mapping.
- 7 entries have no verified selector; visible-label matching is prohibited.
- 2 controls are emitted from JavaScript templates and must be wired in the correct renderer after creation.
- 7 controls belong to generated PDF/receipt/contract documents, not the main application document; they require a separate document lifecycle strategy.
- THA-HLP-0219 / INV-256 is retired/exempt and must never be attached or published.

## 4. Required next actions

1. Update the mapping logic so function declarations/definitions are not counted as clickable call sites.
2. For each shared handler, store the call argument plus the exact parent/container/template selector.
3. Resolve all listener-only and generated-template controls from their actual registration/rendering code.
4. Keep the 17 unique-ID candidates as browser-test candidates, not approved mappings.
5. Add automated checks for active Help IDs, one-to-one coverage, duplicate attachment, missing selectors, retired IDs, and dynamic-template attachment.
6. Only after static checks pass, test contextual Help opening and English/Persian language switching in Preview browser and iPhone Safari.

## Release gate

**NOT APPROVED FOR PREVIEW DEPLOYMENT.** PR #96 remains Draft. No merge, Preview deployment, Production update, database operation, or user-data change is authorized by this audit.
