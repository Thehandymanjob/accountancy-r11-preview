# Help Handler Context Review — 31 Remaining Rows

**Status:** DRAFT TRIAGE ONLY — no runtime selectors assigned, no Help IDs attached, no browser verification.
**Repository / branch:** `Thehandymanjob/accountancy-r11-preview` / `development`
**Authority build:** `THA-273-R11-PREVIEW-20261127-R45`
**Runtime path:** `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`
**Runtime blob SHA:** `e58a0c7895cf639c36e69c28696ebfd3bd262bef`

## Critical source-of-truth finding

The current `VERSION-AUTHORITY.json` identifies build `THA-273-R11-PREVIEW-20261127-R45` and index blob `e58a0c7895cf639c36e69c28696ebfd3bd262bef`. The actual fetched index has the same blob SHA and its embedded build ID is `THA-273-R11-PREVIEW-20261127-R45`. The runtime mapping baseline also points to this same index blob, so the source file used for the current static extraction is authority-consistent.

However, `docs/HELP_BUTTON_INVENTORY_FA.md` still declares build `THA-273-R11-PREVIEW-20261126-R43` and index SHA `104766171ee9ad519ec8be36126f04f0dde24a5c`. Its current file blob SHA is `66ec0eb0037748956ba06e9a0867fefa5407ca1b`, which matches the inventory hash recorded in the mapping, but its declared runtime baseline is stale relative to the R45 authority. Therefore the mapping combines an R45 runtime source with an inventory document whose header claims R43. This mismatch must be corrected before final selector approval or runtime attachment.

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

- Do not attach selectors based on the R43 inventory declaration.
- Rebuild or reconcile the button inventory directly from the authority-approved R45 source, then regenerate/check the runtime mapping against that inventory.
- For repeated controls, prefer explicit stable `data-help-id` attributes or stable container-scoped selectors; avoid global text selectors and transient generated indices.
- Test every attached Help ID in the actual Preview browser, including repeated/dynamic instances, before changing the document status from draft.
- No application code, Production data, deployment, or release state was changed by this review.
