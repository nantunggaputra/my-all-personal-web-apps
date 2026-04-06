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
    document.getElementById("darkModeToggle").textContent = "☀︎";
    document.getElementById("readingModeToggle").textContent = "모";
    STATE.darkMode = false;
  } else if (STATE.darkMode) {
    document.body.classList.remove("reading-mode");
    document.body.classList.add("dark-mode");
    document.getElementById("darkModeToggle").textContent = "❨";
    document.getElementById("readingModeToggle").textContent = "⧉";
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.remove("reading-mode");
    document.getElementById("darkModeToggle").textContent = "☀︎";
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
function getInterpretation(dimension, score) {
  const interpretations = {
    C: {
      veryHigh: {
        label: "Very High",
        text: "You have a strong career orientation and clear professional goals. You actively invest in skills, portfolio, and professional development. Consider balancing career ambition with other life aspects.",
      },
      high: {
        label: "High",
        text: "Career is important to you. You think strategically about your professional path and value growth opportunities. Keep nurturing this drive while maintaining work-life balance.",
      },
      moderate: {
        label: "Moderate",
        text: "You have a balanced approach to career development. You value professional growth but don't let it consume your entire identity. This balance can be healthy.",
      },
      low: {
        label: "Low",
        text: "Career development may not be your top priority right now. You might be focusing on other areas of life, or exploring what truly matters to you professionally.",
      },
      veryLow: {
        label: "Very Low",
        text: "Career planning seems less central to your current focus. This could indicate uncertainty about professional direction or prioritization of other life goals. Consider exploring what work means to you.",
      },
    },
    E: {
      veryHigh: {
        label: "Very High",
        text: "You're experiencing strong emotional well-being and mental clarity. You feel calm, peaceful, and emotionally balanced. Maintain practices that support this positive state.",
      },
      high: {
        label: "High",
        text: "Your emotional state is generally positive. You experience more clarity than confusion, more peace than stress. Continue nurturing your mental health.",
      },
      moderate: {
        label: "Moderate",
        text: "Your emotional state is mixed. You experience both positive and challenging emotions. This is normal, but consider identifying patterns and support systems.",
      },
      low: {
        label: "Low",
        text: "You may be experiencing emotional challenges like stress, overthinking, or burnout. Consider reaching out for support, practicing self-care, or speaking with a professional.",
      },
      veryLow: {
        label: "Very Low",
        text: "Your responses suggest significant emotional distress. Please consider speaking with a mental health professional. Your well-being matters, and support is available.",
      },
    },
    V: {
      veryHigh: {
        label: "Very High",
        text: "External validation and social recognition are very important to you. You highly value others' opinions and approval. Consider whether this need serves your authentic self.",
      },
      high: {
        label: "High",
        text: "You care about how others perceive you and value social connections. This can motivate you, but ensure it doesn't override your own values and needs.",
      },
      moderate: {
        label: "Moderate",
        text: "You have a balanced relationship with external validation. You appreciate recognition but don't depend on it for self-worth. This is a healthy balance.",
      },
      low: {
        label: "Low",
        text: "You're relatively independent from others' opinions. You trust your own judgment and don't heavily rely on external approval. This independence can be a strength.",
      },
      veryLow: {
        label: "Very Low",
        text: "You place minimal weight on external validation. You're highly self-directed. While independence is valuable, ensure you're still open to constructive feedback.",
      },
    },
    R: {
      veryHigh: {
        label: "Very High",
        text: "You demonstrate exceptional resilience, discipline, and self-control. You trust yourself deeply and maintain strong routines. You're well-equipped to handle challenges.",
      },
      high: {
        label: "High",
        text: "You have strong resilience and self-management skills. You bounce back from difficulties and maintain consistency. Continue building on these strengths.",
      },
      moderate: {
        label: "Moderate",
        text: "Your resilience is developing. You have some coping strategies but may struggle during intense stress. Focus on building sustainable habits and support systems.",
      },
      low: {
        label: "Low",
        text: "You may find it challenging to maintain consistency and cope with setbacks. Consider developing small, sustainable routines and seeking support when needed.",
      },
      veryLow: {
        label: "Very Low",
        text: "Resilience may be a significant challenge right now. This isn't permanent. Small steps, support systems, and professional guidance can help build these skills over time.",
      },
    },
    O: {
      veryHigh: {
        label: "Very High",
        text: "You're highly optimistic and focused on growth, hope, and possibilities. You see life through a lens of potential. Maintain this while staying grounded in reality.",
      },
      high: {
        label: "High",
        text: "You have a positive outlook and believe in future possibilities. You value growth and meaning. This optimism can fuel your journey forward.",
      },
      moderate: {
        label: "Moderate",
        text: "You balance optimism with realism. You see both opportunities and challenges. This balanced perspective helps you navigate life effectively.",
      },
      low: {
        label: "Low",
        text: "You may be experiencing doubt or difficulty seeing positive possibilities. This could be temporary or situational. Consider what small steps might restore hope.",
      },
      veryLow: {
        label: "Very Low",
        text: "Your responses suggest low hope or difficulty imagining positive futures. Please consider speaking with someone you trust or a mental health professional.",
      },
    },
    S: {
      veryHigh: {
        label: "Very High",
        text: "You're highly aware of systemic factors affecting job seeking—economic conditions, policies, market dynamics. This awareness can inform strategy but may also increase anxiety.",
      },
      high: {
        label: "High",
        text: "You recognize how external systems impact employment opportunities. This understanding helps you navigate the job market strategically and realistically.",
      },
      moderate: {
        label: "Moderate",
        text: "You have some awareness of systemic factors but don't let them dominate your thinking. You balance external realities with personal agency.",
      },
      low: {
        label: "Low",
        text: "You focus more on personal factors than systemic ones. While personal responsibility matters, understanding market dynamics could enhance your job search strategy.",
      },
      veryLow: {
        label: "Very Low",
        text: "You may not be considering how economic systems, policies, or market conditions affect job seeking. Gaining this awareness could provide valuable context for your journey.",
      },
    },
  };
  if (score >= 20) return interpretations[dimension].veryHigh;
  if (score >= 10) return interpretations[dimension].high;
  if (score >= -5) return interpretations[dimension].moderate;
  if (score >= -15) return interpretations[dimension].low;
  return interpretations[dimension].veryLow;
}
function getOverallProfile(scores) {
  const profiles = [];
  const recommendations = [];
  const careerFocused = scores.C >= 10;
  const careerUnclear = scores.C < -5;
  const emotionallyStressed = scores.E < -5;
  const emotionallyBalanced = scores.E >= 10;
  const validationDependent = scores.V >= 15;
  const resilient = scores.R >= 15;
  const resilientLow = scores.R < -5;
  const optimistic = scores.O >= 15;
  const pessimistic = scores.O < -5;
  const systemAware = scores.S >= 10;
  if (careerFocused && resilient && optimistic) {
    profiles.push("Career-Ready Navigator");
    recommendations.push(
      "You're well-positioned for job hunting. Focus on strategic applications rather than volume."
    );
    recommendations.push(
      "Leverage your resilience by setting weekly goals and tracking progress."
    );
    recommendations.push(
      "Your optimism is a strength—use it to network authentically and pitch your value confidently."
    );
  } else if (careerFocused && emotionallyStressed) {
    profiles.push("Ambitious but Burned Out");
    recommendations.push(
      "Pause and address burnout before intensifying your job search. Rest is productive."
    );
    recommendations.push(
      "Set boundaries: limit daily application hours and protect time for recovery."
    );
    recommendations.push(
      "Consider therapy or counseling to process stress while maintaining career momentum."
    );
    recommendations.push(
      "Your career drive is strong—don't let exhaustion undermine it. Sustainable pace wins."
    );
  } else if (emotionallyStressed && resilientLow) {
    profiles.push("In Need of Support");
    recommendations.push(
      "Your well-being is the priority. Please reach out to a mental health professional."
    );
    recommendations.push(
      "Job searching can wait. Focus on daily basics: sleep, nutrition, small routines."
    );
    recommendations.push(
      "Build one tiny habit this week (5-min walk, journaling, calling a friend)."
    );
    recommendations.push(
      "You don't have to do this alone. Support systems exist and can help."
    );
  } else if (careerUnclear && pessimistic) {
    profiles.push("Directionless Seeker");
    recommendations.push(
      "Explore before committing. Try informational interviews, job shadowing, or short courses."
    );
    recommendations.push(
      "Career clarity often comes from action, not thinking. Experiment with low-stakes projects."
    );
    recommendations.push(
      "Work with a career coach or mentor to identify transferable skills and interests."
    );
    recommendations.push(
      'Reframe "not knowing" as exploration, not failure. Many successful people pivoted multiple times.'
    );
  } else if (validationDependent && systemAware) {
    profiles.push("Externally Motivated Realist");
    recommendations.push(
      "Your awareness of job market realities is useful—pair it with self-compassion."
    );
    recommendations.push(
      "Seek validation through skill-building, not just others' opinions. Competence builds confidence."
    );
    recommendations.push(
      "Join communities (online forums, local meetups) where you can give and receive support."
    );
    recommendations.push(
      "Track your own progress markers, not just external wins (interviews, offers)."
    );
  } else if (resilient && systemAware && !optimistic) {
    profiles.push("Grounded Survivalist");
    recommendations.push(
      "Your resilience and realism are assets. Add hope by celebrating small wins weekly."
    );
    recommendations.push(
      "Connect with others in similar situations—community reduces isolation and restores agency."
    );
    recommendations.push(
      "Consider advocacy or peer support roles. Helping others can reignite optimism."
    );
    recommendations.push(
      "Set micro-goals: one application, one skill learned, one conversation. Progress compounds."
    );
  } else if (optimistic && !resilient) {
    profiles.push("Hopeful but Fragile");
    recommendations.push(
      "Your optimism is valuable—protect it by building consistent routines and coping strategies."
    );
    recommendations.push(
      "Develop resilience through small challenges: cold emails, rejections as data, skill practice."
    );
    recommendations.push(
      "Pair hope with action plans. Break big goals into weekly tasks to maintain momentum."
    );
    recommendations.push(
      "Find an accountability partner or join a job search group for structure and support."
    );
  } else if (careerFocused && validationDependent) {
    profiles.push("Recognition-Driven Achiever");
    recommendations.push(
      "Your drive is clear. Ensure you're pursuing careers that align with your values, not just prestige."
    );
    recommendations.push(
      "Practice self-validation: journal weekly wins, skills gained, and effort invested."
    );
    recommendations.push(
      "Seek mentors who value your growth, not just mentors with impressive titles."
    );
    recommendations.push(
      "Rejection is redirection. Decouple your worth from external outcomes."
    );
  } else if (!careerFocused && emotionallyBalanced) {
    profiles.push("Balanced Explorer");
    recommendations.push(
      "You're in a good place emotionally. Use this stability to explore career options mindfully."
    );
    recommendations.push(
      "Career doesn't have to be your identity. Explore roles that support the life you want."
    );
    recommendations.push(
      "Try side projects, freelancing, or volunteering to discover what energizes you."
    );
    recommendations.push(
      "Set loose timelines (3-6 months) for exploration before committing to a path."
    );
  } else {
    profiles.push("Multifaceted Individual");
    recommendations.push(
      "Your profile shows complexity—no single label fits. That's normal and human."
    );
    recommendations.push(
      "Identify your top 2 priorities right now (e.g., income, mental health, skill-building)."
    );
    recommendations.push(
      "Focus efforts on those priorities. Let other areas rest for now."
    );
    recommendations.push(
      "Reassess every 2-3 months. Priorities shift, and that's okay."
    );
  }
  if (
    emotionallyStressed &&
    !recommendations.some((r) => r.includes("mental health"))
  ) {
    recommendations.unshift(
      "Prioritize mental health. Consider therapy, support groups, or trusted friends."
    );
  }
  if (resilientLow && !recommendations.some((r) => r.includes("small"))) {
    recommendations.push(
      "Start impossibly small: one deep breath, one task, one kind word to yourself daily."
    );
  }
  if (
    systemAware &&
    !recommendations.some(
      (r) => r.includes("market") || r.includes("realities")
    )
  ) {
    recommendations.push(
      "Use your system awareness strategically: target recession-proof industries or in-demand skills."
    );
  }
  return {
    profiles: profiles,
    summary: generateSummary(scores, profiles),
    recommendations: recommendations.slice(0, 6),
  };
}
function generateSummary(scores, profiles) {
  const parts = [];
  if (scores.C >= 10) {
    parts.push(
      "You have clear career direction and invest actively in professional growth."
    );
  } else if (scores.C < -5) {
    parts.push(
      "Your career path may feel uncertain right now, which is a normal phase of exploration."
    );
  }
  if (scores.E >= 10) {
    parts.push(
      "Your emotional state is relatively balanced, giving you a stable foundation."
    );
  } else if (scores.E < -5) {
    parts.push(
      "You're experiencing emotional challenges that deserve attention and care."
    );
  }
  if (scores.R >= 15) {
    parts.push("Your resilience and self-discipline are strong assets.");
  } else if (scores.R < -5) {
    parts.push(
      "Building resilience through small, consistent practices could help you navigate challenges."
    );
  }
  if (scores.O >= 15) {
    parts.push("Your optimism and hope fuel your forward movement.");
  } else if (scores.O < -5) {
    parts.push(
      "Hope may feel distant right now—reconnecting with possibilities, even small ones, can help."
    );
  }
  if (scores.V >= 15) {
    parts.push(
      "External validation significantly influences your motivation and self-worth."
    );
  } else if (scores.V < -5) {
    parts.push(
      "You operate independently from others' opinions, trusting your own judgment."
    );
  }
  if (scores.S >= 10) {
    parts.push(
      "You're aware of how economic and systemic factors shape the job market."
    );
  }
  if (parts.length === 0) {
    return "Your profile reflects a balanced mix of strengths and growth areas across multiple dimensions. This complexity is natural—career journeys are rarely linear.";
  }
  return parts.join(" ");
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
  const interpretationHTML = Object.keys(scores)
    .map((dim) => {
      const score = scores[dim];
      const interp = getInterpretation(dim, score);
      return `
  <div class="interpretation-item">
  <div class="interpretation-title">
  ${dimensionNames[dim]}
  <span class="interpretation-highlight">${interp.label}</span>
  </div>
  <div class="interpretation-text">${interp.text}</div>
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
  <div class="interpretation">
  <h3>What This Means</h3>
  ${interpretationHTML}
  </div>
  `;
  const overallProfile = getOverallProfile(scores);
  const recommendationHTML = overallProfile.recommendations
    .map((rec) => `<li>${rec}</li>`)
    .join("");
  document.getElementById("resultContent").innerHTML = `
<div style="text-align:center;margin-bottom:1.5rem;">
<p style="font-size:0.95rem;color:#666;line-height:1.8;">
Your psychological profile based on 60 word-choice questions. These scores represent tendencies and patterns, not absolute truths.
</p>
</div>
<div class="overall-summary">
<h3>Your Profile</h3>
${overallProfile.profiles
  .map((p) => `<span class="profile-tag">${p}</span>`)
  .join("")}
<p style="margin-top:1rem;">${overallProfile.summary}</p>
</div>
${resultHTML}
<div class="interpretation">
<h3>What This Means</h3>
${interpretationHTML}
</div>
<div class="final-recommendation">
<h3>Next Steps for You</h3>
<ul class="recommendation-list">
${recommendationHTML}
</ul>
</div>
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
