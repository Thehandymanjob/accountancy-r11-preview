# Help Selector Refinement — 31 Remaining Rows

**Status:** DRAFT — source-level selector candidates only. No Help ID attributes attached and no browser tests run.
**Authority build:** `THA-273-R11-PREVIEW-20261127-R45`
**Runtime blob SHA:** `e58a0c7895cf639c36e69c28696ebfd3bd262bef`

## Result

- **16** rows have a stable scoped CSS selector candidate in the current static source.
- **15** rows require an explicit `data-help-id` attribute in their own HTML/template generation point because controls are dynamic or repeated.
- All 31 still require Preview browser verification.

## Selector plan

| Help ID | Audit row | Strategy | Proposed selector / hook | Scope |
|---|---|---|---|---|
| THA-HLP-0015 | INV-017 | SCOPED_STATIC_SELECTOR | `.accountancy-nav > button[onclick="show('home')"]` | .accountancy-nav |
| THA-HLP-0016 | INV-018 | SCOPED_STATIC_SELECTOR | `.accountancy-nav > button[onclick="show('entry')"]` | .accountancy-nav |
| THA-HLP-0017 | INV-019 | SCOPED_STATIC_SELECTOR | `.accountancy-nav > button[onclick="show('records')"]` | .accountancy-nav |
| THA-HLP-0018 | INV-020 | SCOPED_STATIC_SELECTOR | `.accountancy-nav > button[onclick="show('invoices')"]` | .accountancy-nav |
| THA-HLP-0019 | INV-021 | SCOPED_STATIC_SELECTOR | `.accountancy-nav > button[onclick="show('customers')"]` | .accountancy-nav |
| THA-HLP-0020 | INV-022 | SCOPED_STATIC_SELECTOR | `.accountancy-nav > button[onclick="show('report')"]` | .accountancy-nav |
| THA-HLP-0024 | INV-027 | SCOPED_STATIC_SELECTOR | `#entryReceiptField .receipt-actions > button[onclick*="entryReceiptGallery"]` | #entryReceiptField |
| THA-HLP-0040 | INV-048 | SCOPED_STATIC_SELECTOR | `#report188Builder .actions > button[onclick="report188ConfirmComplete()"]` | #report188Builder |
| THA-HLP-0041 | INV-049 | SCOPED_STATIC_SELECTOR | `#report188Builder .actions > button[onclick="report188CheckDue()"]` | #report188Builder |
| THA-HLP-0043 | INV-055 | SCOPED_STATIC_SELECTOR | `#report188Calendar .actions > button[onclick="report188CheckDue()"]` | #report188Calendar |
| THA-HLP-0057 | INV-071 | SCOPED_STATIC_SELECTOR | `.settings-shortcuts > button[onclick="show('helpSettings')"]` | .settings-shortcuts |
| THA-HLP-0075 | INV-091 | SCOPED_STATIC_SELECTOR | `[data-pr-nav="project-hub"]` | Business Workspace navigation |
| THA-HLP-0077 | INV-093 | SCOPED_STATIC_SELECTOR | `[data-pr-nav="control"]` | Business Workspace navigation |
| THA-HLP-0099 | INV-116 | SCOPED_STATIC_SELECTOR | `#prPage-partners .pr-actions > button[onclick="prResetPerson('partner')"]` | #prPage-partners |
| THA-HLP-0103 | INV-120 | SCOPED_STATIC_SELECTOR | `#prPage-workers .pr-actions > button[onclick="prResetPerson('worker')"]` | #prPage-workers |
| THA-HLP-0120 | INV-138 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0120"]` | Generated pagination page-number button template |
| THA-HLP-0125 | INV-144 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0125"]` | Receipt image/clip action template |
| THA-HLP-0127 | INV-146 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0127"]` | Records-list invoice View button template |
| THA-HLP-0128 | INV-147 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0128"]` | Records-list invoice Delete button template |
| THA-HLP-0131 | INV-150 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0131"]` | Invoice-list View button template |
| THA-HLP-0146 | INV-172 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0146"]` | Invoice-list Delete button template |
| THA-HLP-0156 | INV-182 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0156"]` | Company/job attachment icon button template (INV-182) |
| THA-HLP-0157 | INV-183 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0157"]` | Package attachment button template (INV-183) |
| THA-HLP-0168 | INV-196 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0168"]` | Sub-project expenses tab Print / Save PDF button template (INV-196) |
| THA-HLP-0169 | INV-197 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0169"]` | Sub-project report tab Print / Save PDF button template (INV-197) |
| THA-HLP-0170 | INV-198 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0170"]` | Project receipt-photo action template (INV-198) |
| THA-HLP-0180 | INV-210 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0180"]` | Full project report preview toolbar Generate PDF button |
| THA-HLP-0181 | INV-212 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0181"]` | Sub-project financial report preview toolbar Generate PDF button |
| THA-HLP-0183 | INV-214 | SCOPED_STATIC_SELECTOR | `#prPrintReportOverlay .pr-pdf-preview-shell button[aria-label="Close PDF preview"]` | #prPrintReportOverlay .pr-pdf-preview-shell |
| THA-HLP-0199 | INV-233 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0199"]` | Worker list picker footer Manage Workers button |
| THA-HLP-0222 | INV-260 | DATA_HELP_ID_REQUIRED | `[data-help-id="THA-HLP-0222"]` | Saved reports archive row Print / PDF button (INV-260) |

## Important distinctions

- The six Accounting navigation IDs target `.accountancy-nav`, not the similarly labelled dashboard cards.
- Receipt-photo controls are split between the Accounting entry form and the dynamically rendered project form.
- Partner and Worker Clear controls are scoped to their respective page containers.
- Report completion/reminder actions are separated by `#report188Builder` and `#report188Calendar`.
- Repeated row actions, project attachment controls, report PDF actions, and the worker-picker action need explicit `data-help-id` attributes in the relevant templates. A global selector would risk attaching help to the wrong action.
- INV-071’s label now agrees with R45 runtime wording: “📘 User Guide — Choose the guide language”.

## Gate

This plan does **not** authorize a Preview deployment or Production change. The next implementation step is to add the listed `data-help-id` attributes only to the identified dynamic templates, then run static uniqueness checks and actual Preview browser tests. Keep PR #96 Draft until those checks pass.
