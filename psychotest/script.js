const SCORING = {
  q1: {
    jobs: { C: 2, R: 1 },
    internship: { C: 1, O: 1 },
    "professional profile": { C: 2, V: 1 },
  },
  q2: {
    effort: { R: 2 },
    fear: { E: -2 },
    "financial pressure": { S: 2, E: -1 },
  },
  q3: {
    tired: { E: -2 },
    rushed: { E: -2, R: -1 },
    "less genuine": { V: -1, E: -1 },
  },
  q4: {
    portfolio: { C: 2 },
    resume: { C: 2, S: 1 },
    "personal branding": { V: 2 },
  },
  q5: {
    connections: { V: 2 },
    "insider access": { S: 2 },
    "asking for opportunities": { V: 1, R: 1 },
  },
  q6: {
    "policy issues": { S: 1 },
    unemployment: { S: 2, E: -1 },
    "unreliable platforms": { S: 2 },
  },
  q7: {
    coding: { C: 2, R: 1 },
    "physical work": { R: 2 },
    trading: { O: 1, R: -1 },
  },
  q8: {
    AI: { C: 1, S: 1 },
    efficiency: { C: 1, R: 1 },
    "economic system": { S: 2 },
  },
  q9: { politics: { S: 1 }, economics: { S: 2 }, environment: { S: 1, O: -1 } },
  q10: {
    recognition: { V: 2 },
    "financial security": { C: 1, S: 1 },
    desire: { O: 1 },
  },
  q11: {
    "difficulty sleeping": { E: -2 },
    "difficulty relaxing": { E: -2 },
    "difficulty earning": { C: -1, S: 1 },
  },
  q12: {
    "less fit": { R: -1 },
    "less happy": { O: -2 },
    "less spiritual": { E: -1 },
  },
  q13: { anger: { E: -2 }, love: { O: 1 }, fear: { E: -2 } },
  q14: { God: { O: 1 }, yourself: { R: 2 }, others: { V: 1 } },
  q15: { stability: { R: 2 }, growth: { O: 2 }, freedom: { O: 1, R: 1 } },
  q16: { recognition: { V: 2 }, income: { C: 1 }, passion: { O: 2 } },
  q17: { overthinking: { E: -2 }, clarity: { E: 2 }, distraction: { R: -1 } },
  q18: { burnout: { E: -2 }, pressure: { E: -1 }, emptiness: { O: -2 } },
  q19: { opportunity: { O: 2 }, luck: { S: 1 }, advantage: { S: 2 } },
  q20: { routine: { R: 2 }, chaos: { E: -2 }, control: { R: 1 } },
  q21: { discipline: { R: 2 }, motivation: { O: 1 }, consistency: { R: 2 } },
  q22: {
    comparison: { V: 1, E: -1 },
    "self-acceptance": { E: 1, O: 1 },
    ambition: { C: 1, O: 1 },
  },
  q23: { risk: { O: 1 }, safety: { R: 1 }, uncertainty: { E: -1 } },
  q24: { learning: { C: 2, O: 1 }, earning: { C: 1 }, waiting: { R: -1 } },
  q25: {
    isolation: { E: -1 },
    connection: { V: 1, O: 1 },
    independence: { R: 2 },
  },
  q26: { purpose: { O: 2 }, survival: { R: 1 }, success: { C: 1, V: 1 } },
  q27: { doubt: { O: -2 }, confidence: { R: 2 }, denial: { E: -1 } },
  q28: { rest: { E: 2 }, productivity: { C: 1 }, guilt: { E: -1 } },
  q29: { patience: { R: 2 }, urgency: { E: -1 }, hesitation: { R: -1 } },
  q30: { meaning: { O: 2 }, achievement: { C: 1 }, approval: { V: 2 } },
  q31: { hope: { O: 2 }, progress: { O: 2 }, peace: { E: 2 } },
  q32: { growth: { O: 2 }, support: { V: 1 }, direction: { C: 2 } },
  q33: { calm: { E: 2 }, resilience: { R: 2 }, trust: { V: 1 } },
  q34: { opportunity: { O: 2 }, connection: { V: 1 }, preparation: { R: 1 } },
  q35: { purpose: { O: 2 }, balance: { E: 1, R: 1 }, recovery: { E: 2 } },
  q36: { gratitude: { O: 1 }, clarity: { E: 2 }, patience: { R: 2 } },
  q37: { learning: { C: 2 }, improvement: { O: 2 }, mastery: { R: 2 } },
  q38: { confidence: { R: 2 }, sincerity: { V: 1 }, warmth: { E: 1 } },
  q39: { stability: { R: 2 }, freedom: { O: 1 }, fulfillment: { O: 2 } },
  q40: { support: { V: 1 }, encouragement: { O: 1 }, cooperation: { V: 1 } },
  q41: { rest: { E: 2 }, renewal: { O: 1 }, strength: { R: 2 } },
  q42: { consistency: { R: 2 }, discipline: { R: 2 }, ease: { E: 1 } },
  q43: { vision: { C: 2 }, effort: { R: 2 }, results: { C: 1 } },
  q44: { kindness: { V: 1 }, honesty: { V: 1 }, confidence: { R: 2 } },
  q45: { healing: { E: 2 }, acceptance: { E: 1 }, courage: { R: 2 } },
  q46: { optimism: { O: 2 }, realism: { S: 1 }, hope: { O: 2 } },
  q47: { connection: { V: 1 }, belonging: { V: 2 }, understanding: { E: 1 } },
  q48: { development: { O: 2 }, achievement: { C: 1 }, "self-trust": { R: 2 } },
  q49: { calmness: { E: 2 }, focus: { R: 2 }, momentum: { O: 1 } },
  q50: { progress: { O: 2 }, patience: { R: 2 }, confidence: { R: 2 } },
  q51: { creativity: { O: 1 }, expression: { V: 1 }, confidence: { R: 2 } },
  q52: { support: { V: 1 }, appreciation: { V: 2 }, encouragement: { O: 1 } },
  q53: { purpose: { O: 2 }, growth: { O: 2 }, contribution: { V: 1 } },
  q54: { resilience: { R: 2 }, recovery: { E: 2 }, balance: { E: 1 } },
  q55: { sincerity: { V: 1 }, trust: { V: 1 }, openness: { E: 1 } },
  q56: { learning: { C: 2 }, adaptability: { R: 1 }, readiness: { R: 1 } },
  q57: { peace: { E: 2 }, clarity: { E: 2 }, renewal: { O: 1 } },
  q58: { kindness: { V: 1 }, strength: { R: 2 }, wisdom: { S: 1 } },
  q59: { effort: { R: 2 }, consistency: { R: 2 }, success: { C: 1 } },
  q60: { hope: { O: 2 }, dignity: { R: 1 }, direction: { C: 2 } },
};
const STATE = {
  answers: {},
  currentPage: 0,
  darkMode: false,
  readingMode: false,
};
const PAGES = [
  { id: "landingPage", questions: [] },
  {
    id: "page-1",
    questions: Array.from({ length: 20 }, (_, i) => `q${i + 1}`),
  },
  {
    id: "page-2",
    questions: Array.from({ length: 20 }, (_, i) => `q${i + 21}`),
  },
  {
    id: "page-3",
    questions: Array.from({ length: 20 }, (_, i) => `q${i + 41}`),
  },
  { id: "resultPage", questions: [] },
];
function init() {
  loadState();
  applyTheme();
  bindEvents();
  showPage(STATE.currentPage);
  updateProgress();
}
function loadState() {
  const saved = localStorage.getItem("psychotest_state");
  if (saved) {
    const parsed = JSON.parse(saved);
    STATE.answers = parsed.answers || {};
    STATE.currentPage = parsed.currentPage || 0;
    STATE.darkMode = parsed.darkMode || false;
    STATE.readingMode = parsed.readingMode || false;
    restoreAnswers();
  }
}
function saveState() {
  localStorage.setItem("psychotest_state", JSON.stringify(STATE));
}
function restoreAnswers() {
  Object.keys(STATE.answers).forEach((qName) => {
    const radio = document.querySelector(
      `input[name="${qName}"][value="${STATE.answers[qName]}"]`
    );
    if (radio) radio.checked = true;
  });
}
function applyTheme() {
  if (STATE.readingMode) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("reading-mode");
    document.getElementById("darkModeToggle").textContent = "❨";
    document.getElementById("readingModeToggle").textContent = "⌨";
    STATE.darkMode = false;
  } else if (STATE.darkMode) {
    document.body.classList.remove("reading-mode");
    document.body.classList.add("dark-mode");
    document.getElementById("darkModeToggle").textContent = "☀︎";
    document.getElementById("readingModeToggle").textContent = "⧉";
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.remove("reading-mode");
    document.getElementById("darkModeToggle").textContent = "❨";
    document.getElementById("readingModeToggle").textContent = "⧉";
  }
}
function bindEvents() {
  document.getElementById("startBtn").addEventListener("click", startTest);
  document
    .getElementById("darkModeToggle")
    .addEventListener("click", toggleDarkMode);
  document
    .getElementById("readingModeToggle")
    .addEventListener("click", toggleReadingMode);
  document.getElementById("prevBtn").addEventListener("click", previousPage);
  document.getElementById("nextBtn").addEventListener("click", nextPage);
  document.getElementById("submitBtn").addEventListener("click", submitTest);
  document
    .getElementById("resetBtn")
    .addEventListener("click", () => showResetModal());
  document.getElementById("tryAgainBtn").addEventListener("click", tryAgain);
  document
    .getElementById("modalCloseBtn")
    .addEventListener("click", closeModal);
  document
    .getElementById("confirmResetBtn")
    .addEventListener("click", confirmReset);
  document
    .getElementById("cancelResetBtn")
    .addEventListener("click", closeResetModal);
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      STATE.answers[e.target.name] = e.target.value;
      saveState();
      updateProgress();
    });
  });
}
function startTest() {
  STATE.currentPage = 1;
  saveState();
  showPage(1);
}
function toggleDarkMode() {
  if (STATE.readingMode) {
    STATE.readingMode = false;
  }
  STATE.darkMode = !STATE.darkMode;
  saveState();
  applyTheme();
}
function toggleReadingMode() {
  if (STATE.darkMode) {
    STATE.darkMode = false;
  }
  STATE.readingMode = !STATE.readingMode;
  saveState();
  applyTheme();
}
function showPage(pageIndex) {
  document
    .querySelectorAll(".page")
    .forEach((page) => page.classList.remove("active"));
  const pageData = PAGES[pageIndex];
  const pageElement =
    pageIndex === 0
      ? document.getElementById("landingPage")
      : pageIndex === 4
      ? document.getElementById("resultPage")
      : document.querySelector(`.page[data-page="${pageIndex}"]`);
  if (pageElement) {
    pageElement.classList.add("active");
  }
  if (pageIndex === 4) {
    calculateAndShowResults();
  }
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  const resetContainer = document.querySelector(".reset-container");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  if (pageIndex === 0) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
    resetContainer.style.display = "none";
    progressBar.style.display = "none";
    progressText.style.display = "none";
  } else if (pageIndex === 4) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
    resetContainer.style.display = "none";
    progressBar.style.display = "none";
    progressText.style.display = "none";
  } else {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
    resetContainer.style.display = "block";
    progressBar.style.display = "block";
    progressText.style.display = "block";
    prevBtn.disabled = pageIndex === 1;
    if (pageIndex === 3) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "flex";
    } else {
      nextBtn.style.display = "flex";
      submitBtn.style.display = "none";
    }
  }
  window.scrollTo(0, 0);
}
function previousPage() {
  if (STATE.currentPage > 1) {
    STATE.currentPage--;
    saveState();
    showPage(STATE.currentPage);
  }
}
function nextPage() {
  const currentPageData = PAGES[STATE.currentPage];
  const unanswered = currentPageData.questions.filter((q) => !STATE.answers[q]);
  if (unanswered.length > 0) {
    showValidationModal(unanswered.length);
    return;
  }
  STATE.currentPage++;
  saveState();
  showPage(STATE.currentPage);
}
function submitTest() {
  const currentPageData = PAGES[STATE.currentPage];
  const unanswered = currentPageData.questions.filter((q) => !STATE.answers[q]);
  if (unanswered.length > 0) {
    showValidationModal(unanswered.length);
    return;
  }
  const allQuestions = PAGES.slice(1, 4).flatMap((p) => p.questions);
  const allUnanswered = allQuestions.filter((q) => !STATE.answers[q]);
  if (allUnanswered.length > 0) {
    showValidationModal(allUnanswered.length, true);
    return;
  }
  STATE.currentPage = 4;
  saveState();
  calculateAndShowResults();
  showPage(4);
}
function calculateAndShowResults() {
  const scores = { C: 0, E: 0, V: 0, R: 0, O: 0, S: 0 };
  Object.keys(STATE.answers).forEach((qName) => {
    const answer = STATE.answers[qName];
    const scoreData = SCORING[qName];
    if (scoreData && scoreData[answer]) {
      Object.keys(scoreData[answer]).forEach((dim) => {
        scores[dim] += scoreData[answer][dim];
      });
    }
  });
  const dimensionNames = {
    C: "Career",
    E: "Emotion",
    V: "Validation",
    R: "Resilience",
    O: "Optimism",
    S: "System Awareness",
  };
  const dimensionClasses = {
    C: "career",
    E: "emotion",
    V: "validation",
    R: "resilience",
    O: "optimism",
    S: "system",
  };
  const minScore = -40;
  const maxScore = 60;
  const resultHTML = Object.keys(scores)
    .map((dim) => {
      const score = scores[dim];
      const normalized = ((score - minScore) / (maxScore - minScore)) * 100;
      const percentage = Math.max(0, Math.min(100, normalized));
      return `
		<div class="dimension-score">
		<div class="dimension-name">
		<span>${dimensionNames[dim]}</span>
		<span>${score > 0 ? "+" : ""}${score}</span>
		</div>
		<div class="dimension-bar">
		<div class="dimension-fill ${
      dimensionClasses[dim]
    }" style="width: ${percentage}%"></div>
		</div>
		</div>
		`;
    })
    .join("");
  document.getElementById("resultContent").innerHTML = `
		<div style="text-align:center;margin-bottom:1.5rem;">
		<p style="font-size:0.95rem;color:#666;line-height:1.8;">
		Your psychological profile based on 60 word-choice questions. These scores represent tendencies and patterns, not absolute truths.
		</p>
		</div>
		${resultHTML}
		`;
}
function updateProgress() {
  const total = 60;
  const answered = Object.keys(STATE.answers).length;
  const percentage = (answered / total) * 100;
  document.getElementById("progressFill").style.width = percentage + "%";
  document.getElementById("currentQ").textContent = answered;
}
function showValidationModal(count, isFinal = false) {
  const modal = document.getElementById("validationModal");
  const title = document.getElementById("modalTitle");
  const message = document.getElementById("modalMessage");
  if (isFinal) {
    title.textContent = "Test Incomplete";
    message.textContent = `You still have ${count} unanswered question${
      count > 1 ? "s" : ""
    }. Please complete all questions to see your results.`;
  } else {
    title.textContent = "Page Incomplete";
    message.textContent = `Please answer all ${count} remaining question${
      count > 1 ? "s" : ""
    } on this page before proceeding.`;
  }
  modal.classList.add("active");
}
function closeModal() {
  document.getElementById("validationModal").classList.remove("active");
}
function showResetModal() {
  document.getElementById("resetModal").classList.add("active");
}
function closeResetModal() {
  document.getElementById("resetModal").classList.remove("active");
}
function confirmReset() {
  STATE.answers = {};
  STATE.currentPage = 1;
  saveState();
  document
    .querySelectorAll('input[type="radio"]')
    .forEach((radio) => (radio.checked = false));
  updateProgress();
  showPage(1);
  closeResetModal();
}
function tryAgain() {
  STATE.answers = {};
  STATE.currentPage = 0;
  saveState();
  document
    .querySelectorAll('input[type="radio"]')
    .forEach((radio) => (radio.checked = false));
  updateProgress();
  showPage(0);
}
document.addEventListener("DOMContentLoaded", init);
