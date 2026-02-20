# React Search Bar with Autocomplete — Implementation Plan

---

## 1. Components

### SearchContainer (logic owner)
- Holds state
- Handles API calls
- Controls dropdown
- Passes props to children

### SearchInput
- Text input only
- Emits `onChange`, `onKeyDown`
- Controlled component

### SuggestionsList
- Renders suggestions
- Handles selection display

### SuggestionItem (optional)
- Single suggestion row
- Highlight + click handling

SearchContainer
├── SearchInput
└── SuggestionsList
└── SuggestionItem

---

## 2. State Management

### SearchContainer State

| State | Purpose |
|------|--------|
| `query` | Current input value |
| `suggestions` | API results |
| `loading` | Fetch status |
| `error` | API error |
| `isOpen` | Dropdown visibility |
| `activeIndex` | Keyboard navigation |
| `cache` (optional) | Store previous results |

---

### SearchInput
- No internal state
- Props:
  - `value`
  - `onChange`
  - `onKeyDown`

---

### SuggestionsList
- Stateless
- Props:
  - `items`
  - `activeIndex`
  - `onSelect`

---

## 3. Data Flow

User types
↓
SearchInput.onChange
↓
SearchContainer.setQuery
↓
Debounce (≈300ms)
↓
Fetch API
↓
Update suggestions state
↓
SuggestionsList renders

---

## 4. Interaction Flow

### Typing

input change → debounce → fetch → update UI

### Mouse Selection

click item → setQuery → close dropdown

### Keyboard
| Key | Action |
|----|-------|
| ↓ | next item |
| ↑ | previous item |
| Enter | select item |
| Esc | close dropdown |

---

## 5. Edge Cases

- Empty input → clear results
- Rapid typing → cancel previous request
- API error handling
- No results state
- Loading indicator
- Click outside closes dropdown
- Keyboard accessibility
- Minimum characters before fetch
- Cache repeated queries

---

## 6. Implementation Steps

1. Build static UI (input + list)
2. Make input controlled
3. Add dropdown open/close logic
4. Implement debounce hook
5. Integrate API fetch
6. Add loading + error states
7. Keyboard navigation
8. Click outside detection
9. Request cancellation (AbortController)
10. Add caching
11. UX polish (highlight, empty state)

---

## 7. Core Concept

Input → State → Fetch → Update → Render

Single source of truth: **SearchContainer**