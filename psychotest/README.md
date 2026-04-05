# Psychotest for Job Seeker (Word Choice)

A lightweight, privacy-first psychological self-assessment web app built entirely with HTML, CSS, and JavaScript.  
No backend, no database, and no external dependencies.

---

## Overview

This application provides a structured **60-question word-choice psychotest**, designed to explore patterns in:

- Career orientation  
- Emotional state  
- Social validation  
- Resilience & control  
- Optimism & growth  
- System awareness  

All interactions happen directly in the browser, with results stored locally using `localStorage`.

---

## Goals

- Deliver a **mobile-first psychotest experience**
- Ensure **full privacy (no data leaves the device)**
- Create a **clean, distraction-free interface**
- Provide **meaningful self-reflection insights**
- Maintain **ethical and neutral psychological wording**

---

## Tech Stack

- HTML (structure)
- CSS (layout, dark mode, reading mode)
- JavaScript (logic, state, scoring)

✅ No framework  
✅ No backend  
✅ No external libraries  
✅ Fully static (SPA-like behavior)

---

## Features

### 1. 60-Question Psychotest
- 3 word choices per question
- Balanced psychological mapping
- Hidden consistency patterns

---

### 2. Pagination System
- 3 pages (20 questions each)
- Smooth transitions
- Page indicator (e.g. 1 / 3)
- Mobile-friendly navigation

---

### 3. Local Storage Persistence
- Saves:
  - user answers
  - current page
  - UI preferences
- Auto-resume on reload

---

### 4. Theme System

#### Dark Mode
- Reduced eye strain
- Better for low-light usage

#### Reading Mode
- Paper-like appearance
- Improved readability
- Minimal distractions

---

### 5. Scoring Engine

Each answer contributes to multiple psychological dimensions:

| Code | Dimension |
|------|----------|
| C | Career / Direction |
| E | Emotional State |
| V | Validation / Social |
| R | Resilience / Control |
| O | Optimism / Growth |
| S | System Awareness |
Exampl
---

### Example Mapping

```js
q1: {
  jobs: { C: 2, R: 1 },
  internship: { C: 1, O: 1 },
  "professional profile": { C: 2, V: 1 }
}
```

---

### 6. Consistency Check

The system evaluates internal consistency across related questions.

Example:

* Overthinking vs Calmness
* Burnout vs Resilience

Inconsistent patterns may reduce confidence score.

---

## User Experience

* Mobile-first layout
* Large tap targets
* Smooth page transitions
* Minimal cognitive load
* Fast and responsive

---

## Privacy

* No login required
* No tracking
* No analytics
* No data sent to server

All data is stored locally in the user's browser.

---

## User Flow

1. Open the app
2. Answer questions (paginated)
3. Answers auto-saved
4. Complete all 60 questions
5. Submit
6. View result

---

## Data Storage

Stored in `localStorage`:

```js
psychotest_answers
psychotest_page
psychotest_theme
```

---

## Limitations

* No cross-device sync
* Limited by browser storage (~5MB)
* Results are indicative, not diagnostic

---

## Future Improvements

* Radar chart visualization (Canvas API)
* Export results (JSON / image)
* Import previous session
* Multi-language support (i18n)
* Progress indicator (e.g. 45/60)
* Touch gesture navigation (swipe)

---

## Philosophy

This project is not designed to judge or label users.

Instead, it aims to:

* reflect patterns
* reveal tendencies
* encourage awareness

---

## Status

- MVP Ready
- Actively improvable
- Ready for real users

---

## License

Free to use for learning and personal projects.
