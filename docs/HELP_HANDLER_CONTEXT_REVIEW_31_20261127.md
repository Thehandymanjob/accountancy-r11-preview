# Help Handler Context Review — 31 Remaining Rows

**Status:** DRAFT TRIAGE ONLY — no runtime selectors assigned, no Help IDs attached, no browser verification.
**Repository / branch:** `Thehandymanjob/accountancy-r11-preview` / `development`
**Authority build:** `THA-273-R11-PREVIEW-20261127-R45`
**Runtime path:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`
**Runtime blob SHA:** `e58a0c7895cf639c36e69c28696ebfd3bd262bef`

## Source-of-truth reconciliation

The mismatch identified in the prior review has now been corrected. `VERSION-AUTHORITY.json`, the actual index file, the refreshed inventory, and the runtime mapping all point to the authority-approved build `THA-273-R11-PREVIEW-20261127-R45` and index blob SHA `e58a0c7895cf639c36e69c28696ebfd3bd262bef`.

- Refreshed inventory blob SHA: `f1efe7a5f57961a5b415cc1a9e1992622ab549b1`.
- Runtime mapping now records that exact inventory blob SHA.
- Inventory count rechecked: 266 HTML/template button tags + 2 DOM-created dropdown button patterns = 268 audit rows.
- Exact inline handlers and current labels were refreshed from the R45 source. Eleven controls have no inline `onclick`; their event/listener wiring is not considered browser-verified.
- INV-071 was corrected to the current “📘 User Guide Choose the guide language” label; the dynamic INV-231 label is escaped correctly in the Markdown table; INV-256 remains an empty-label hidden placeholder marked EXEMPT.

The source baseline mismatch is resolved. This does not resolve the 31 contextual selector ambiguities or substitute for Preview browser testing.

## Review outcome

The remaining 31 rows are grouped by the kind of ambiguity. These are review classifications, not final selector decisions.

| Review group | Rows |
|---|---:|
| `DUPLICATE_NAVIGATION_TARGET` | 8 |
| `SAME_LABEL_DIFFERENT_FORM` | 4 |
| `REPEATED_REPORT_CONTROL` | 7 |
| `LABEL_OR_INVENTORY_MISMATCH` | 2 |
| `DYNAMIC_TEMPLATE_OR_ROW_ACTION` | 8 |
| `SINGLE_CONTROL_NEEDS_PARENT_SCOPE` | 2 |
| **Total** | **31** |

### Required handling

**DUPLICATE_NAVIGATION_TARGET**  
The same destination is exposed by more than one navigation/card element. Treat as a shared help topic only if the guide content is identical; map all intended controls using a stable parent scope or explicit data-help-id rather than selecting one arbitrary match.  
Rows: THA-HLP-0015, THA-HLP-0016, THA-HLP-0017, THA-HLP-0018, THA-HLP-0019, THA-HLP-0020, THA-HLP-0075, THA-HLP-0077

**SAME_LABEL_DIFFERENT_FORM**  
The visible action label is reused in separate forms or entity types. Resolve against the owning form/container; do not use a global text selector.  
Rows: THA-HLP-0024, THA-HLP-0170, THA-HLP-0099, THA-HLP-0103

**REPEATED_REPORT_CONTROL**  
The same report action appears in multiple report panels or contexts. Confirm whether the same guide topic applies to each occurrence; use report-container scoping or shared data-help-id.  
Rows: THA-HLP-0040, THA-HLP-0041, THA-HLP-0043, THA-HLP-0168, THA-HLP-0169, THA-HLP-0180, THA-HLP-0181

**LABEL_OR_INVENTORY_MISMATCH**  
The mapping label differs from the current runtime label or has an unresolved variant. Reconcile the inventory and guide wording before assigning a selector.  
Rows: THA-HLP-0057, THA-HLP-0222

**DYNAMIC_TEMPLATE_OR_ROW_ACTION**  
The control is generated dynamically or repeated per record/page. Use a stable template-level data-help-id and verify generated instances in the browser; do not bind to literal row text or a transient index.  
Rows: THA-HLP-0120, THA-HLP-0125, THA-HLP-0127, THA-HLP-0128, THA-HLP-0131, THA-HLP-0146, THA-HLP-0156, THA-HLP-0157

**SINGLE_CONTROL_NEEDS_PARENT_SCOPE**  
The control has weak/ambiguous visible text or multiple parent contexts. Inspect the owning modal/report container and use a stable scoped selector.  
Rows: THA-HLP-0183, THA-HLP-0199

## Release and verification gate

- The inventory/mapping source baseline is now reconciled to R45; do not regress it to the R43 snapshot.
- Resolve the 31 remaining contextual cases and assign selectors only after checking their actual parent/form/report scope.
- For repeated controls, prefer explicit stable `data-help-id` attributes or stable container-scoped selectors; avoid global text selectors and transient generated indices.
- Test every attached Help ID in the actual Preview browser, including repeated/dynamic instances, before changing the document status from draft.
- No application code, Production data, deployment, or release state was changed by this review.


## R45 reconciliation commit — 2026-11-27

The inventory and mapping were refreshed and their blob references were rechecked. The 31-row review remains draft-only: no selectors assigned, no Help IDs attached, and no browser tests run. PR #96 remains Draft; Preview deployment and Production remain untouched.
