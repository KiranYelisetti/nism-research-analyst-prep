(function () {
  const data = window.STUDY_DATA;
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  const storage = {
    completed: "nism-ra-completed-v1",
    plan: "nism-ra-plan-v1",
    scores: "nism-ra-scores-v1",
    mistakes: "nism-ra-mistakes-v1",
    theme: "nism-ra-theme-v1",
    revise: "nism-ra-revise-v1"
  };

  const REVISE_ORDER = [10, 14, 1, 2, 3, 4, 9, 13, 6, 12, 5, 7, 11, 8, 15];
  let reviseDeck = null;

  const state = {
    view: "dashboard",
    selectedChapter: 15,
    completed: new Set(readList(storage.completed)),
    planDone: new Set(readList(storage.plan)),
    scores: readList(storage.scores),
    mistakes: new Set(readList(storage.mistakes)),
    quiz: null,
    flash: null
  };

  function readList(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch (error) {
      return [];
    }
  }

  function writeList(key, value) {
    localStorage.setItem(key, JSON.stringify(Array.from(value)));
  }

  function writeScores() {
    localStorage.setItem(storage.scores, JSON.stringify(state.scores.slice(-20)));
  }

  function chapterById(id) {
    return data.chapters.find((chapter) => chapter.id === Number(id));
  }

  function questionsForChapter(id) {
    return data.questions.filter((question) => question.chapter === Number(id));
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function switchView(view) {
    state.view = view;
    $$(".view").forEach((node) => node.classList.toggle("is-active", node.id === `${view}View`));
    $$(".nav-button").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
    const titles = {
      dashboard: "Dashboard",
      learn: "Learn",
      quiz: "Quiz",
      revise: "Revise",
      formulas: "Formulas",
      mistakes: "Mistakes"
    };
    $("#viewTitle").textContent = titles[view];
    if (view === "dashboard") {
      requestAnimationFrame(drawTechnicalCanvas);
    }
    if (view === "revise") {
      renderRevise();
    }
  }

  function isDarkTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }

  function updateThemeButton() {
    const btn = $("#themeToggle");
    if (!btn) return;
    const dark = isDarkTheme();
    btn.textContent = dark ? "Light mode" : "Dark mode";
    btn.setAttribute("aria-pressed", String(dark));
  }

  function toggleTheme() {
    const next = isDarkTheme() ? "light" : "dark";
    if (next === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    try {
      localStorage.setItem(storage.theme, next);
    } catch (error) {
      /* ignore storage failures */
    }
    updateThemeButton();
    requestAnimationFrame(drawTechnicalCanvas);
  }

  function init() {
    bindEvents();
    updateThemeButton();
    renderQuizChapterSelect();
    renderDashboard();
    renderChapterList();
    renderLearn();
    renderFormulaList();
    renderMistakes();
    switchView("dashboard");
    window.addEventListener("resize", drawTechnicalCanvas);
  }

  function bindEvents() {
    $$(".nav-button").forEach((button) => {
      button.addEventListener("click", () => switchView(button.dataset.view));
    });

    $("#quickQuizBtn").addEventListener("click", () => {
      $("#quizCountSelect").value = "20";
      startQuiz("weighted");
    });

    $("#startWeightedQuizBtn").addEventListener("click", () => startQuiz("weighted"));
    $("#startChapterQuizBtn").addEventListener("click", () => startQuiz("chapter"));
    $("#startNumericQuizBtn").addEventListener("click", () => startQuiz("numeric"));
    $("#startWrongQuizBtn").addEventListener("click", () => startQuiz("wrong"));

    $("#themeToggle").addEventListener("click", toggleTheme);
    $("#reviseOrderBtn").addEventListener("click", reviseStudyOrder);
    $("#reviseShuffleBtn").addEventListener("click", reviseShuffle);
    document.addEventListener("keydown", (event) => {
      if (state.view !== "revise") return;
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        reviseStep(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        reviseStep(-1);
      }
    });
    $("#formulaSearch").addEventListener("input", renderFormulaList);
    $("#clearMistakesBtn").addEventListener("click", () => {
      state.mistakes.clear();
      writeList(storage.mistakes, state.mistakes);
      renderMistakes();
    });

    $("#resetProgressBtn").addEventListener("click", () => {
      if (!confirm("Reset completed chapters, roadmap checks, quiz scores, and mistakes?")) return;
      state.completed.clear();
      state.planDone.clear();
      state.scores = [];
      state.mistakes.clear();
      localStorage.removeItem(storage.completed);
      localStorage.removeItem(storage.plan);
      localStorage.removeItem(storage.scores);
      localStorage.removeItem(storage.mistakes);
      renderDashboard();
      renderChapterList();
      renderLearn();
      renderMistakes();
    });
  }

  function renderDashboard() {
    const examDate = new Date(`${data.exam.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const daysLeft = Math.max(0, Math.ceil((examDate - today) / 86400000));
    $("#daysLeft").textContent = String(daysLeft);

    const completedWeight = data.chapters.reduce((sum, chapter) => (
      state.completed.has(String(chapter.id)) ? sum + chapter.weight : sum
    ), 0);
    $("#completedWeight").textContent = `${completedWeight}%`;
    $("#completedChapters").textContent = `${state.completed.size} of ${data.chapters.length} chapters marked done.`;

    const last = state.scores.at(-1);
    if (last) {
      $("#lastQuizScore").textContent = `${last.score.toFixed(2)}/${last.total}`;
      $("#lastQuizMeta").textContent = `${last.correct} correct, ${last.wrong} wrong, ${last.skipped} skipped.`;
    } else {
      $("#lastQuizScore").textContent = "--";
      $("#lastQuizMeta").textContent = "No quiz attempted yet.";
    }

    renderPriorityBars();
    renderRoadmap();
    requestAnimationFrame(drawTechnicalCanvas);
  }

  function renderPriorityBars() {
    const sorted = data.chapters.slice().sort((a, b) => b.weight - a.weight || a.id - b.id);
    $("#priorityBars").innerHTML = sorted.map((chapter) => {
      const label = `Ch ${chapter.id}`;
      const cls = chapter.priority === "major" ? "major" : chapter.priority === "high" ? "core" : "";
      return `
        <div class="weight-row" title="${escapeHtml(chapter.title)}">
          <div class="weight-label">${label}</div>
          <div class="weight-track"><div class="weight-fill ${cls}" style="width:${chapter.weight * 5}%"></div></div>
          <div>${chapter.weight}</div>
        </div>
      `;
    }).join("");
  }

  function renderRoadmap() {
    $("#roadmapList").innerHTML = data.roadmap.map((day) => {
      const done = state.planDone.has(day.id);
      const chapters = day.chapters.length ? `Ch ${day.chapters.join(", ")}` : "Exam";
      return `
        <article class="roadmap-item ${done ? "is-done" : ""}">
          <div class="roadmap-date">
            <span>${day.date}</span>
            <span class="tag">${chapters}</span>
          </div>
          <strong>${escapeHtml(day.focus)}</strong>
          <p>${day.actions.map(escapeHtml).join(" | ")}</p>
          <label>
            <input type="checkbox" data-plan="${day.id}" ${done ? "checked" : ""}>
            Done
          </label>
        </article>
      `;
    }).join("");

    $$("[data-plan]").forEach((input) => {
      input.addEventListener("change", () => {
        if (input.checked) state.planDone.add(input.dataset.plan);
        else state.planDone.delete(input.dataset.plan);
        writeList(storage.plan, state.planDone);
        renderRoadmap();
      });
    });
  }

  function renderChapterList() {
    $("#chapterList").innerHTML = data.chapters.map((chapter) => {
      const active = chapter.id === state.selectedChapter;
      const complete = state.completed.has(String(chapter.id));
      return `
        <button class="chapter-button ${active ? "is-active" : ""} ${complete ? "is-complete" : ""}" data-chapter="${chapter.id}">
          <strong>Ch ${chapter.id}: ${escapeHtml(chapter.title)}</strong>
          <span>${chapter.weight} marks | pages ${chapter.pages}</span>
        </button>
      `;
    }).join("");

    $$(".chapter-button").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedChapter = Number(button.dataset.chapter);
        renderChapterList();
        renderLearn();
      });
    });
  }

  function renderLearn() {
    state.flash = null;
    const chapter = chapterById(state.selectedChapter);
    const isComplete = state.completed.has(String(chapter.id));
    const quizCount = questionsForChapter(chapter.id).length;
    const priorityClass = chapter.priority === "major" ? "hot" : "";
    const formulas = chapter.formulas || [];
    const lessonPack = window.STUDY_LESSONS ? window.STUDY_LESSONS[chapter.id] : null;
    const simplePack = window.STUDY_SIMPLE ? window.STUDY_SIMPLE[chapter.id] : null;
    const deck = chapterFlashcards(chapter.id);

    $("#learnContent").innerHTML = `
      <div class="chapter-heading">
        <div>
          <p class="eyebrow">Chapter ${chapter.id} | ${chapter.weight} marks | workbook pages ${chapter.pages}</p>
          <h2>${escapeHtml(chapter.title)}</h2>
          <div class="tag-row">
            <span class="tag ${priorityClass}">${chapter.priority}</span>
            <span class="tag">${quizCount} quiz questions</span>
            ${isComplete ? '<span class="tag done">completed</span>' : ""}
          </div>
        </div>
        <div class="button-row">
          ${deck && deck.length ? '<button class="secondary-button" id="openFlashcardsBtn" type="button">Memorise (flashcards)</button>' : ""}
          <button class="secondary-button" id="chapterQuizFromLearn" type="button">Quiz this chapter</button>
          <button class="primary-button" id="toggleCompleteBtn" type="button">${isComplete ? "Mark not done" : "Mark done"}</button>
        </div>
      </div>

      ${renderSimplePack(simplePack)}

      ${renderLessonPack(lessonPack)}

      <div class="notes-grid">
        <section class="note-block">
          <h3>Exam focus</h3>
          <ul>${chapter.focus.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
        <section class="note-block">
          <h3>Must know</h3>
          <ul>${chapter.mustKnow.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
        <section class="note-block">
          <h3>Traps</h3>
          <ul>${chapter.traps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
        <section class="note-block">
          <h3>Tasks</h3>
          <ul>${chapter.tasks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
        ${formulas.length ? `
          <section class="note-block">
            <h3>Key formulas</h3>
            <ul>${formulas.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
        ` : ""}
      </div>
    `;

    $("#toggleCompleteBtn").addEventListener("click", () => {
      const key = String(chapter.id);
      if (state.completed.has(key)) state.completed.delete(key);
      else state.completed.add(key);
      writeList(storage.completed, state.completed);
      renderDashboard();
      renderChapterList();
      renderLearn();
    });

    $("#chapterQuizFromLearn").addEventListener("click", () => {
      $("#quizChapterSelect").value = String(chapter.id);
      startQuiz("chapter");
    });

    const flashBtn = $("#openFlashcardsBtn");
    if (flashBtn) flashBtn.addEventListener("click", () => openFlashcards(chapter.id));
  }

  function chapterFlashcards(id) {
    return window.STUDY_FLASHCARDS ? window.STUDY_FLASHCARDS[Number(id)] : null;
  }

  function openFlashcards(chapterId) {
    const deck = chapterFlashcards(chapterId);
    if (!deck || !deck.length) return;
    state.flash = {
      chapter: Number(chapterId),
      deck,
      order: shuffle(deck.map((_, index) => index)),
      pos: 0,
      revealed: false
    };
    renderFlashcards();
  }

  function exitFlashcards() {
    state.flash = null;
    renderLearn();
  }

  function flashMark(gotIt) {
    const flash = state.flash;
    if (!flash) return;
    if (gotIt) {
      flash.pos += 1;
    } else {
      const current = flash.order.splice(flash.pos, 1)[0];
      flash.order.push(current);
    }
    flash.revealed = false;
    renderFlashcards();
  }

  function renderFlashcards() {
    const flash = state.flash;
    if (!flash) return;
    const chapter = chapterById(flash.chapter);
    const total = flash.order.length;

    if (flash.pos >= total) {
      $("#learnContent").innerHTML = `
        <section class="flash-panel">
          <div class="flash-top">
            <p class="eyebrow">Flashcards | Ch ${chapter.id}</p>
            <button class="secondary-button" id="flashBackBtn" type="button">Back to lesson</button>
          </div>
          <div class="flash-done">
            <h3>Deck complete</h3>
            <p>You recalled all ${total} cards for ${escapeHtml(chapter.title)}. Shuffle and go again to lock it in.</p>
            <div class="button-row">
              <button class="primary-button" id="flashRestartBtn" type="button">Shuffle &amp; restart</button>
            </div>
          </div>
        </section>
      `;
      $("#flashBackBtn").addEventListener("click", exitFlashcards);
      $("#flashRestartBtn").addEventListener("click", () => openFlashcards(flash.chapter));
      return;
    }

    const card = flash.deck[flash.order[flash.pos]];
    const remaining = total - flash.pos;
    $("#learnContent").innerHTML = `
      <section class="flash-panel">
        <div class="flash-top">
          <p class="eyebrow">Flashcards | Ch ${chapter.id} | ${remaining} left</p>
          <button class="secondary-button" id="flashBackBtn" type="button">Back to lesson</button>
        </div>
        <article class="flash-card">
          <div class="flash-side flash-q">
            <span class="flash-label">Recall</span>
            <p>${escapeHtml(card.front)}</p>
          </div>
          ${flash.revealed ? `
            <div class="flash-side flash-a">
              <span class="flash-label">Answer</span>
              <p>${escapeHtml(card.back)}</p>
              ${card.hook ? `<div class="flash-hook"><b>Hook:</b> ${escapeHtml(card.hook)}</div>` : ""}
            </div>
          ` : ""}
        </article>
        <div class="flash-controls">
          ${flash.revealed ? `
            <button class="secondary-button" id="flashAgainBtn" type="button">Again</button>
            <button class="primary-button" id="flashGotBtn" type="button">Got it</button>
          ` : `
            <button class="primary-button flash-reveal" id="flashRevealBtn" type="button">Show answer</button>
          `}
        </div>
      </section>
    `;

    $("#flashBackBtn").addEventListener("click", exitFlashcards);
    if (flash.revealed) {
      $("#flashAgainBtn").addEventListener("click", () => flashMark(false));
      $("#flashGotBtn").addEventListener("click", () => flashMark(true));
    } else {
      $("#flashRevealBtn").addEventListener("click", () => {
        flash.revealed = true;
        renderFlashcards();
      });
    }
  }

  function renderSimplePack(simple) {
    if (!simple) return "";
    const analogyLines = Array.isArray(simple.analogy) ? simple.analogy : [simple.analogy];
    const analogy = analogyLines.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
    const points = (simple.points || []).map((point) => `
      <li class="simple-point">
        <span class="simple-term">${escapeHtml(point.term)}</span>
        <span class="simple-plain">${escapeHtml(point.plain)}</span>
        ${point.hook ? `<span class="simple-hook"><b>Remember:</b> ${escapeHtml(point.hook)}</span>` : ""}
      </li>
    `).join("");
    return `
      <section class="simple-section">
        <div class="simple-head">
          <span class="simple-badge">Start here</span>
          <h3>In plain English</h3>
        </div>
        <div class="simple-analogy">${analogy}</div>
        <ul class="simple-list">${points}</ul>
        ${simple.mnemonic ? `<div class="simple-mnemonic"><span class="simple-mnemonic-label">Memory hook</span><span>${escapeHtml(simple.mnemonic)}</span></div>` : ""}
      </section>
    `;
  }

  function renderLessonPack(lessonPack) {
    if (!lessonPack) return "";
    return `
      <section class="lesson-section">
        <div class="lesson-intro">
          <p class="eyebrow">Teach me this chapter</p>
          <h3>Concept lesson</h3>
          <p>${escapeHtml(lessonPack.intro)}</p>
        </div>
        <div class="lesson-stack">
          ${lessonPack.modules.map((module, index) => `
            <article class="lesson-card">
              <div class="lesson-number">${index + 1}</div>
              <div>
                <h4>${escapeHtml(module.title)}</h4>
                <ul>
                  ${module.teach.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
                </ul>
                <div class="lesson-example">
                  <strong>Example:</strong> ${escapeHtml(module.example)}
                </div>
                <div class="lesson-exam">
                  <strong>Exam lens:</strong> ${escapeHtml(module.exam)}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="lesson-drill">
          <h4>Mini-drill before quiz</h4>
          <ol>
            ${lessonPack.drill.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ol>
        </div>
      </section>
    `;
  }

  function buildReviseDeck() {
    if (reviseDeck) return reviseDeck;
    const cards = [];
    REVISE_ORDER.forEach((chId) => {
      const chapter = chapterById(chId);
      const lesson = window.STUDY_LESSONS ? window.STUDY_LESSONS[chId] : null;
      if (!chapter || !lesson) return;
      cards.push({ ch: chId, chTitle: chapter.title, weight: chapter.weight, priority: chapter.priority, kind: "intro", title: "Chapter overview", body: lesson.intro });
      (lesson.modules || []).forEach((module) => {
        cards.push({ ch: chId, chTitle: chapter.title, weight: chapter.weight, priority: chapter.priority, kind: "module", title: module.title, teach: module.teach, example: module.example, hook: module.exam });
      });
    });
    reviseDeck = cards;
    return cards;
  }

  function initReviseState() {
    const deck = buildReviseDeck();
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem(storage.revise) || "{}");
    } catch (error) {
      saved = {};
    }
    const pos = Math.min(Math.max(Number(saved.pos) || 0, 0), Math.max(0, deck.length - 1));
    state.revise = {
      order: deck.map((_, index) => index),
      pos,
      cycle: Math.max(1, Number(saved.cycle) || 1),
      shuffled: false
    };
  }

  function saveRevise() {
    try {
      localStorage.setItem(storage.revise, JSON.stringify({ pos: state.revise.pos, cycle: state.revise.cycle }));
    } catch (error) {
      /* ignore storage failures */
    }
  }

  function reviseStep(direction) {
    const revise = state.revise;
    if (!revise) return;
    const len = revise.order.length;
    if (direction > 0) {
      revise.pos += 1;
      if (revise.pos >= len) {
        revise.pos = 0;
        revise.cycle += 1;
      }
    } else {
      revise.pos -= 1;
      if (revise.pos < 0) {
        revise.pos = len - 1;
        revise.cycle = Math.max(1, revise.cycle - 1);
      }
    }
    if (!revise.shuffled) saveRevise();
    renderRevise();
  }

  function reviseShuffle() {
    if (!state.revise) initReviseState();
    state.revise.order = shuffle(state.revise.order);
    state.revise.pos = 0;
    state.revise.shuffled = true;
    renderRevise();
  }

  function reviseStudyOrder() {
    const deck = buildReviseDeck();
    if (!state.revise) initReviseState();
    state.revise.order = deck.map((_, index) => index);
    state.revise.pos = 0;
    state.revise.shuffled = false;
    saveRevise();
    renderRevise();
  }

  function renderRevise() {
    const deck = buildReviseDeck();
    if (!state.revise) initReviseState();
    const revise = state.revise;
    const card = deck[revise.order[revise.pos]];
    if (!card) return;

    const body = card.kind === "intro"
      ? `<p class="revise-body">${escapeHtml(card.body)}</p>`
      : `
        <ul class="revise-teach">${card.teach.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
        ${card.example ? `<div class="revise-example"><span class="revise-tag">Example</span><p>${escapeHtml(card.example)}</p></div>` : ""}
        ${card.hook ? `<div class="revise-hook"><span class="revise-tag">Exam lens</span><p>${escapeHtml(card.hook)}</p></div>` : ""}
      `;

    $("#reviseStage").innerHTML = `
      <div class="revise-meta">
        <span class="tag ${card.priority === "major" ? "hot" : ""}">Ch ${card.ch} | ${card.weight} marks</span>
        <span class="tag">Card ${revise.pos + 1} of ${deck.length}</span>
        <span class="tag">Round ${revise.cycle}${revise.shuffled ? " | shuffled" : ""}</span>
      </div>
      <article class="revise-card">
        <p class="revise-chtitle">${escapeHtml(card.chTitle)}</p>
        <h3>${escapeHtml(card.title)}</h3>
        ${body}
      </article>
      <div class="revise-controls">
        <button class="secondary-button" id="revisePrevBtn" type="button">Previous</button>
        <button class="primary-button" id="reviseNextBtn" type="button">Next</button>
      </div>
      <p class="revise-hint">This loops through every chapter forever in study order, so keep tapping Next to rotate. On a keyboard use the arrow keys or spacebar.</p>
    `;

    $("#revisePrevBtn").addEventListener("click", () => reviseStep(-1));
    $("#reviseNextBtn").addEventListener("click", () => reviseStep(1));
  }

  function renderQuizChapterSelect() {
    $("#quizChapterSelect").innerHTML = [
      '<option value="all">All chapters</option>',
      ...data.chapters.map((chapter) => `<option value="${chapter.id}">Ch ${chapter.id}: ${escapeHtml(chapter.title)}</option>`)
    ].join("");
    $("#quizChapterSelect").value = String(state.selectedChapter);
  }

  function getWeightedQuestions(count) {
    const pool = data.questions.slice();
    const selected = [];
    while (selected.length < count && pool.length) {
      const totalWeight = pool.reduce((sum, question) => {
        const chapter = chapterById(question.chapter);
        const boost = chapter.priority === "major" ? 1.4 : chapter.priority === "high" ? 1.15 : 1;
        return sum + chapter.weight * boost;
      }, 0);
      let draw = Math.random() * totalWeight;
      let pickIndex = 0;
      for (let i = 0; i < pool.length; i += 1) {
        const chapter = chapterById(pool[i].chapter);
        const boost = chapter.priority === "major" ? 1.4 : chapter.priority === "high" ? 1.15 : 1;
        draw -= chapter.weight * boost;
        if (draw <= 0) {
          pickIndex = i;
          break;
        }
      }
      selected.push(pool.splice(pickIndex, 1)[0]);
    }
    return selected;
  }

  function startQuiz(mode) {
    const count = Number($("#quizCountSelect").value);
    let items = [];
    let title = "Weighted quiz";

    if (mode === "chapter") {
      const selected = $("#quizChapterSelect").value;
      items = selected === "all" ? data.questions.slice() : questionsForChapter(selected);
      title = selected === "all" ? "All chapters quiz" : `Chapter ${selected} quiz`;
      items = shuffle(items).slice(0, count);
    } else if (mode === "numeric") {
      items = data.questions.filter((question) => question.numeric);
      title = "Numericals drill";
      items = shuffle(items).slice(0, count);
    } else if (mode === "wrong") {
      items = data.questions.filter((question) => state.mistakes.has(question.id));
      title = "Wrong answers quiz";
      items = shuffle(items).slice(0, count);
    } else {
      items = getWeightedQuestions(count);
    }

    if (!items.length) {
      $("#quizStage").className = "quiz-stage empty-state";
      $("#quizStage").textContent = mode === "wrong" ? "No wrong answers saved yet." : "No questions available for this selection.";
      switchView("quiz");
      return;
    }

    state.quiz = {
      title,
      items,
      index: 0,
      answers: new Array(items.length).fill(null)
    };
    switchView("quiz");
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const quiz = state.quiz;
    if (!quiz) return;
    const question = quiz.items[quiz.index];
    const answered = quiz.answers[quiz.index];
    const locked = typeof answered === "number" && answered >= 0;
    const chapter = chapterById(question.chapter);
    const caselet = question.caselet ? data.caselets[question.caselet] : "";

    $("#quizStage").className = "quiz-stage";
    $("#quizStage").innerHTML = `
      <div class="question-top">
        <div class="quiz-meta">
          <span class="tag">${escapeHtml(quiz.title)}</span>
          <span class="tag">Question ${quiz.index + 1} of ${quiz.items.length}</span>
          <span class="tag">Ch ${chapter.id}</span>
          <span class="tag">${escapeHtml(question.difficulty)}</span>
        </div>
      </div>
      ${caselet ? `<div class="caselet">${escapeHtml(caselet)}</div>` : ""}
      <p class="question-text">${escapeHtml(question.question)}</p>
      <ul class="option-list">
        ${question.options.map((option, optionIndex) => {
          let cls = "";
          if (locked && optionIndex === question.answer) cls = "is-correct";
          if (locked && answered === optionIndex && answered !== question.answer) cls = "is-wrong";
          return `
            <li>
              <button class="option-button ${cls}" data-option="${optionIndex}" ${locked ? "disabled" : ""}>
                ${escapeHtml(option)}
              </button>
            </li>
          `;
        }).join("")}
      </ul>
      ${locked ? `<div class="explanation">${escapeHtml(question.explain)}</div>` : ""}
      <div class="quiz-footer">
        <button class="ghost-button" id="skipQuestionBtn" type="button" ${locked ? "disabled" : ""}>Skip</button>
        <div class="button-row">
          <button class="secondary-button" id="prevQuestionBtn" type="button" ${quiz.index === 0 ? "disabled" : ""}>Previous</button>
          <button class="primary-button" id="nextQuestionBtn" type="button">${quiz.index === quiz.items.length - 1 ? "Finish" : "Next"}</button>
        </div>
      </div>
    `;

    $$(".option-button").forEach((button) => {
      button.addEventListener("click", () => selectAnswer(Number(button.dataset.option)));
    });
    $("#skipQuestionBtn").addEventListener("click", () => selectAnswer(-1));
    $("#prevQuestionBtn").addEventListener("click", () => {
      if (quiz.index > 0) {
        quiz.index -= 1;
        renderQuizQuestion();
      }
    });
    $("#nextQuestionBtn").addEventListener("click", () => {
      if (quiz.index === quiz.items.length - 1) finishQuiz();
      else {
        if (quiz.answers[quiz.index] === null) quiz.answers[quiz.index] = -1;
        quiz.index += 1;
        renderQuizQuestion();
      }
    });
  }

  function selectAnswer(optionIndex) {
    const quiz = state.quiz;
    const question = quiz.items[quiz.index];
    quiz.answers[quiz.index] = optionIndex;
    if (optionIndex === question.answer) {
      state.mistakes.delete(question.id);
    } else if (optionIndex !== -1) {
      state.mistakes.add(question.id);
    }
    writeList(storage.mistakes, state.mistakes);
    renderQuizQuestion();
  }

  function finishQuiz() {
    const quiz = state.quiz;
    const total = quiz.items.length;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    quiz.items.forEach((question, index) => {
      const answer = quiz.answers[index];
      if (answer === question.answer) correct += 1;
      else if (answer === -1 || answer === null) skipped += 1;
      else wrong += 1;
    });

    const score = correct - wrong * 0.25;
    const result = {
      date: new Date().toISOString(),
      title: quiz.title,
      total,
      correct,
      wrong,
      skipped,
      score
    };
    state.scores.push(result);
    writeScores();
    renderDashboard();
    renderMistakes();

    $("#quizStage").innerHTML = `
      <div class="result-grid">
        <div class="result-tile"><span>Score</span><strong>${score.toFixed(2)}</strong></div>
        <div class="result-tile"><span>Correct</span><strong>${correct}</strong></div>
        <div class="result-tile"><span>Wrong</span><strong>${wrong}</strong></div>
        <div class="result-tile"><span>Skipped</span><strong>${skipped}</strong></div>
      </div>
      <p class="subtle">NISM scoring applied: +1 for correct, -0.25 for wrong, 0 for skipped.</p>
      <div class="button-row">
        <button class="primary-button" id="retryWrongNowBtn" type="button">Retry wrong answers</button>
        <button class="secondary-button" id="newWeightedNowBtn" type="button">New weighted quiz</button>
      </div>
    `;

    $("#retryWrongNowBtn").addEventListener("click", () => startQuiz("wrong"));
    $("#newWeightedNowBtn").addEventListener("click", () => startQuiz("weighted"));
    state.quiz = null;
  }

  function renderFormulaList() {
    const query = $("#formulaSearch").value.trim().toLowerCase();
    const formulas = data.formulas.filter((item) => {
      const chapter = chapterById(item.chapter);
      const haystack = `${item.name} ${item.formula} ${item.note} ${chapter.title}`.toLowerCase();
      return !query || haystack.includes(query);
    });

    $("#formulaList").innerHTML = formulas.map((item) => {
      const chapter = chapterById(item.chapter);
      const where = Array.isArray(item.where) && item.where.length
        ? `<div class="formula-where"><span class="formula-tag">Where</span><ul>${item.where.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul></div>`
        : "";
      const example = item.example
        ? `<div class="formula-example"><span class="formula-tag">Worked example</span><p>${escapeHtml(item.example)}</p></div>`
        : "";
      const use = item.use
        ? `<div class="formula-use"><span class="formula-tag">When &amp; meaning</span><p>${escapeHtml(item.use)}</p></div>`
        : "";
      const trap = item.trap
        ? `<div class="formula-trap"><span class="formula-tag">Trap</span><p>${escapeHtml(item.trap)}</p></div>`
        : "";
      const note = !item.where && item.note ? `<p>${escapeHtml(item.note)}</p>` : "";
      return `
        <article class="formula-card">
          <div class="tag-row">
            <span class="tag">Ch ${item.chapter}</span>
            <span class="tag">${chapter.weight} marks</span>
          </div>
          <h3>${escapeHtml(item.name)}</h3>
          <code>${escapeHtml(item.formula)}</code>
          ${where}
          ${example}
          ${use}
          ${trap}
          ${note}
        </article>
      `;
    }).join("") || '<div class="empty-state">No formula matched.</div>';
  }

  function renderMistakes() {
    const mistakes = data.questions.filter((question) => state.mistakes.has(question.id));
    $("#mistakeList").innerHTML = mistakes.map((question) => {
      const chapter = chapterById(question.chapter);
      return `
        <article class="mistake-item">
          <strong>Ch ${chapter.id}: ${escapeHtml(question.question)}</strong>
          <span class="tag">${escapeHtml(chapter.title)}</span>
          <p>Correct: ${escapeHtml(question.options[question.answer])}</p>
          <p>${escapeHtml(question.explain)}</p>
        </article>
      `;
    }).join("") || '<div class="empty-state">No saved mistakes yet.</div>';
  }

  function drawTechnicalCanvas() {
    const canvas = $("#technicalCanvas");
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const width = rect.width;
    const height = rect.height;
    const pad = 28;
    const dark = isDarkTheme();
    const palette = {
      bg: dark ? "#161d1a" : "#fbfcfa",
      grid: dark ? "#2b3733" : "#e1e6e0",
      up: dark ? "#3fae73" : "#287653",
      down: dark ? "#d65a5a" : "#b43d3d",
      ma: dark ? "#5a9bd6" : "#255f99",
      text: dark ? "#9caea5" : "#63706a"
    };
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = palette.bg;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = palette.grid;
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i += 1) {
      const y = pad + ((height - pad * 2) / 4) * i;
      ctx.beginPath();
      ctx.moveTo(pad, y);
      ctx.lineTo(width - pad, y);
      ctx.stroke();
    }

    const candles = [
      [102, 108, 99, 106], [106, 110, 103, 104], [104, 105, 97, 99], [99, 103, 95, 101],
      [101, 107, 100, 106], [106, 112, 105, 111], [111, 116, 109, 114], [114, 115, 106, 108],
      [108, 112, 105, 111], [111, 118, 110, 117], [117, 124, 116, 122], [122, 126, 119, 121],
      [121, 123, 115, 117], [117, 121, 113, 120], [120, 128, 119, 127], [127, 133, 126, 131],
      [131, 136, 129, 134], [134, 135, 127, 129], [129, 132, 124, 126], [126, 130, 122, 128],
      [128, 136, 127, 135], [135, 141, 134, 139], [139, 144, 137, 143], [143, 145, 138, 140]
    ];
    const lows = candles.map((candle) => candle[2]);
    const highs = candles.map((candle) => candle[1]);
    const min = Math.min(...lows) - 3;
    const max = Math.max(...highs) + 3;
    const chartW = width - pad * 2;
    const chartH = height - pad * 2;
    const step = chartW / candles.length;
    const scaleY = (price) => pad + (max - price) / (max - min) * chartH;

    candles.forEach((candle, index) => {
      const [open, high, low, close] = candle;
      const x = pad + step * index + step / 2;
      const up = close >= open;
      ctx.strokeStyle = up ? palette.up : palette.down;
      ctx.fillStyle = up ? palette.up : palette.down;
      ctx.beginPath();
      ctx.moveTo(x, scaleY(high));
      ctx.lineTo(x, scaleY(low));
      ctx.stroke();
      const bodyTop = scaleY(Math.max(open, close));
      const bodyBottom = scaleY(Math.min(open, close));
      ctx.fillRect(x - step * 0.26, bodyTop, step * 0.52, Math.max(3, bodyBottom - bodyTop));
    });

    ctx.strokeStyle = palette.ma;
    ctx.lineWidth = 2;
    ctx.beginPath();
    candles.forEach((_, index) => {
      const slice = candles.slice(Math.max(0, index - 4), index + 1);
      const avg = slice.reduce((sum, candle) => sum + candle[3], 0) / slice.length;
      const x = pad + step * index + step / 2;
      const y = scaleY(avg);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    ctx.fillStyle = palette.text;
    ctx.font = "12px Inter, system-ui, sans-serif";
    ctx.fillText("support", pad + 8, scaleY(118) - 8);
    ctx.strokeStyle = "rgba(176, 107, 20, 0.7)";
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(pad, scaleY(118));
    ctx.lineTo(width - pad, scaleY(118));
    ctx.stroke();
    ctx.setLineDash([]);
  }

  init();
})();
