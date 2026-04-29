# Graph Report - conferencia-de-estoque-main  (2026-04-28)

## Corpus Check
- 4 files · ~13,576 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 32 nodes · 55 edges · 5 communities detected
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]

## God Nodes (most connected - your core abstractions)
1. `needsCorrection()` - 5 edges
2. `showInventoryPage()` - 5 edges
3. `renderTable()` - 5 edges
4. `proceedToReport()` - 5 edges
5. `showReportPage()` - 5 edges
6. `escapeHtml()` - 4 edges
7. `getMonthName()` - 4 edges
8. `loadInventory()` - 4 edges
9. `saveInventory()` - 4 edges
10. `updateSummary()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `loadInventory()` --calls--> `getSavedInventories()`  [INFERRED]
  app.js → firebase.js
- `loadSavedInventories()` --calls--> `getSavedInventories()`  [INFERRED]
  app.js → firebase.js
- `loadInventory()` --calls--> `getProductsForPeriod()`  [INFERRED]
  app.js → data.js

## Communities

### Community 0 - "Community 0"
Cohesion: 0.33
Nodes (9): escapeHtml(), needsCorrection(), proceedToReport(), renderReportTable(), renderTable(), renderTableWithFocus(), showReportPage(), updateReportSummary() (+1 more)

### Community 1 - "Community 1"
Cohesion: 0.32
Nodes (4): addToHistory(), resetSessionTimer(), saveInventory(), showModal()

### Community 2 - "Community 2"
Cohesion: 0.33
Nodes (2): loadInventory(), getProductsForPeriod()

### Community 3 - "Community 3"
Cohesion: 0.5
Nodes (4): getMonthName(), loadSavedInventories(), showInventoryPage(), updateConfirmButton()

### Community 4 - "Community 4"
Cohesion: 0.83
Nodes (3): getSavedInventories(), initFirebase(), saveToFirestore()

## Knowledge Gaps
- **Thin community `Community 2`** (6 nodes): `loadInventory()`, `getAvailablePeriods()`, `getProductsForPeriod()`, `hasPeriodData()`, `data.js`, `loadProductsFromExcel()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `loadInventory()` connect `Community 2` to `Community 1`, `Community 4`?**
  _High betweenness centrality (0.355) - this node is a cross-community bridge._
- **Why does `getSavedInventories()` connect `Community 4` to `Community 2`, `Community 3`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._