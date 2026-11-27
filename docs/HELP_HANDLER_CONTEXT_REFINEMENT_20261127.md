# Handler + Button-Label Context Refinement — 2026-11-27

## Scope
Static source-context matching on `development`; no app code or Help attachment changed.
- Source: `v273-isolated-test/r11-income-prefix-repair-20261114/index.html`
- Source blob SHA: `e58a0c7895cf639c36e69c28696ebfd3bd262bef`
- Mapping blob SHA: `3e2979b0c24eb342e89d541cdf71dc42389297d9`

## Results

| Classification | Rows |
|---|---:|
| Unique handler + visible-label source candidate | 148 |
| Needs context or label reconciliation | 31 |
| **Total** | **179** |

The 148 source candidates are not runtime-approved. They are unique best matches in the static button markup based on handler plus visible-text overlap. Browser verification remains mandatory.

## Key findings
- Repeated navigation handlers can often be disambiguated by the button's full visible label and call argument.
- Exact duplicate labels still require container context (for example repeated Clear, View, Print / Save PDF, or Generate PDF controls).
- Some inventory labels do not match current source labels. Example: the inventory entry for the User Guide settings button says "Help / Choose the language", while the current source text says "User Guide / Choose the guide language". These rows must be reconciled against the actual intended build before attachment.
- Controls such as "Take a Photo" occur in multiple forms and require form/container scope.
- The candidate data records each matching button's exact inline handler, text, class and element ID where present.

## Full candidate file
`docs/HELP_HANDLER_CONTEXT_CANDIDATES_DRAFT.json`

## Release gate
No mapping is marked runtime-verified. Keep PR #96 Draft. No Preview deployment or Production update is authorized until the candidate selectors are checked in browser and iPhone Safari.
