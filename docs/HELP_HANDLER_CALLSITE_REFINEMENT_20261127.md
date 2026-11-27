# Handler Call-site Refinement — 2026-11-27

## Scope and safety
- Repository: `Thehandymanjob/accountancy-r11-preview`, branch `development`
- Runtime source: `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`
- Source blob: `e58a0c7895cf639c36e69c28696ebfd3bd262bef`
- Mapping input blob: `3e2979b0c24eb342e89d541cdf71dc42389297d9`
- Static audit only. No runtime code, registry IDs, event listeners, or application data were changed.
- All candidates still require browser verification before any Help attachment.

## Revised count
The previous report's first count was based on a broad substring filter and overstated the number of unique inline call sites. This pass extracts each inline `onclick` attribute and counts attributes containing the mapped handler name followed by `(`.

| Classification | Rows |
|---|---:|
| One static inline call-site candidate | 64 |
| One template/dynamic inline call-site candidate | 33 |
| Multiple inline call sites; argument/container resolution required | 82 |
| **Total previously marked AMBIGUOUS_HANDLER** | **179** |

## Interpretation
- The 64 static single-call-site rows are stronger selector candidates, not approved mappings. Their exact `onclick` expression may be usable as a candidate selector, but only a live DOM test can prove uniqueness and correct context.
- The 33 single-call-site template rows must be resolved through the renderer that creates the live control; they must not be attached against a static document query.
- The 82 multi-call-site rows require matching the intended call argument and container/page context. A shared handler name alone is insufficient.
- This pass does not infer selectors from visible labels, and it does not claim to have inspected programmatically registered listeners.

## Data file
Full per-ID call-site inventory, including each matching inline expression:
`docs/HELP_HANDLER_CALLSITE_REFINEMENT_DRAFT.json`

## Next gate
1. Resolve the 82 multi-callsite rows to exact argument plus parent/container context.
2. Resolve the 33 template rows at render time.
3. Generate selectors only after source-context review.
4. Verify every candidate in a real browser, including mobile Safari.
5. Keep PR #96 Draft and do not deploy Preview until those checks pass.
