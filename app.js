(() => {
  const DATA = window.CM_DATA || {};
  const CASES = DATA.cases || [];
  const CURRICULUM = DATA.curriculum || {};
  const REF = DATA.reference || {};

  const STORAGE_KEY = 'casemaster_pro_state_v1';

  const defaultState = {
    uiVersion: 2,
    theme: 'paper',
    fontScale: 'normal',
    sidebarCollapsed: false,
    focusMode: false,
    mockDurationMins: 25,
    view: 'dashboard',
    academyTab: 'algorithm',
    academyFocusStep: 0,
    academyShowAllSteps: false,
    wizardSubTab: 'wizard',
    memorizeTab: 'cheatsheet',
    primersSubTab: 'primers',
    mockRightTab: 'clarify',
    dashShowAllStarters: false,
    dashOpenStages: null,
    libMoreFiltersOpen: false,
    caseReaderMode: 'full',
    showConvoReasoning: true,
    showConvoCauses: true,
    convoHighlightsOnly: false,
    selectedCaseId: CASES[0] ? CASES[0].id : null,
    studyRevealStep: 99,
    progressiveMode: false,
    filters: {
      search: '',
      track: 'All',
      category: 'All',
      difficulty: 'All',
      status: 'All'
    },
    roadmapDone: {},
    masteredIds: {},
    bookmarkedIds: {},
    flashcardStatus: {},
    scenarioAnswers: {},
    bestDrillScore: 0,
    mocksCompleted: 0,
    guided: {
      caseId: CASES[0] ? CASES[0].id : null,
      step: 1,
      clarifyRevealed: {},
      selectedCategory: null,
      selectedStructIdx: null,
      selectedQuizIdx: null,
      notesInput: '',
      synthInput: ''
    }
  };

  function normalizeTheme(val) {
    if (val === 'midnight' || val === 'dark') return 'midnight';
    return 'paper';
  }

  function migrateCaseId(id) {
    if (!id || typeof id !== 'string') return id;
    return id
      .replace(/^sj-/, 'cm-core-')
      .replace(/^ecell-/, 'cm-pm-')
      .replace(/^ktc-/, 'cm-cons-')
      .replace(/^srcrc-/, 'cm-strat-');
  }

  function migrateIdMap(map) {
    const out = {};
    if (map && typeof map === 'object') {
      for (const [k, v] of Object.entries(map)) {
        if (v) out[migrateCaseId(k)] = v;
      }
    }
    return out;
  }

  function applyStateMigrations(base) {
    base.selectedCaseId = migrateCaseId(base.selectedCaseId);
    if (base.guided) base.guided.caseId = migrateCaseId(base.guided.caseId);
    base.masteredIds = migrateIdMap(base.masteredIds);
    base.bookmarkedIds = migrateIdMap(base.bookmarkedIds);
    return base;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(defaultState);
      const parsed = JSON.parse(raw);
      const base = applyStateMigrations({
        ...structuredClone(defaultState),
        ...parsed,
        filters: { ...defaultState.filters, ...(parsed.filters || {}) },
        guided: { ...defaultState.guided, ...(parsed.guided || {}) }
      });
      delete base.filters.source;
      if (!parsed.uiVersion || Number(parsed.uiVersion) < 2) {
        base.uiVersion = 2;
        base.theme = 'paper';
        base.fontScale = 'normal';
        base.sidebarCollapsed = false;
        base.focusMode = false;
      } else {
        base.theme = normalizeTheme(base.theme);
      }
      return base;
    } catch {
      return structuredClone(defaultState);
    }
  }

  let state = loadState();
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }

  let saveTimerId = null;
  function saveStateDebounced(delay = 250) {
    clearTimeout(saveTimerId);
    saveTimerId = setTimeout(() => { saveState(); }, delay);
  }

  let flashState = { category: 'All', onlyReview: false, index: 0, flipped: false };

  function createEmptyDrillState() {
    return {
      active: false,
      completed: false,
      timeLeft: 60,
      timerId: null,
      advanceTimeoutId: null,
      score: 0,
      answered: 0,
      correctCount: 0,
      streak: 0,
      bestStreak: 0,
      currentIdx: 0,
      questions: [],
      history: [],
      reviewFilter: 'all',
      lockedChoice: null,
      beatBest: false
    };
  }
  let drillState = createEmptyDrillState();
  let lastDrillLeadPrompt = '';

  function hasDrillSessionData() {
    return drillState.active || drillState.completed || drillState.history.length > 0;
  }

  function abortRapidDrill() {
    clearInterval(drillState.timerId);
    clearTimeout(drillState.advanceTimeoutId);
    drillState = createEmptyDrillState();
  }

  const MOCK_TEMPLATES = {
    rca: [
      { id: 1, title: 'Data Sanity & Metric Scope', status: 'Exploring', note: 'Sudden vs gradual? Single geo/OS?' },
      { id: 2, title: 'User Journey Funnel Drop', status: 'Exploring', note: 'Identify steepest step drop' },
      { id: 3, title: 'Internal (Tech / UX / Ops / Policy)', status: 'Exploring', note: 'Releases, stockouts, fees' },
      { id: 4, title: 'External (Rivals / Weather / Macro)', status: 'Exploring', note: 'Competitor promo, holidays' }
    ],
    gtm: [
      { id: 1, title: 'Beachhead ICP & Positioning', status: 'Exploring', note: 'Target segment + differentiator' },
      { id: 2, title: '4Ps (Product MVP, Price, Place, Promo)', status: 'Exploring', note: 'Channels + pricing tier' },
      { id: 3, title: 'Pre-Launch & Launch Plan', status: 'Exploring', note: 'Seed supply/waitlist -> activation' },
      { id: 4, title: 'Post-Launch Retention & KPIs', status: 'Exploring', note: 'North Star + guardrails' }
    ],
    design: [
      { id: 1, title: 'Target Persona Selection', status: 'Exploring', note: 'Pick 1 primary persona for v1' },
      { id: 2, title: 'Core Pain Points (P0 vs P1)', status: 'Exploring', note: 'Frequency x Severity' },
      { id: 3, title: 'MVP + Delighter Solutions', status: 'Exploring', note: 'Core workflow + trade-offs' },
      { id: 4, title: 'North Star & Guardrails', status: 'Exploring', note: 'Success + abuse/latency check' }
    ],
    profitability: [
      { id: 1, title: 'Revenue (Price x Volume x Mix)', status: 'Exploring', note: 'Check industry vs company-specific' },
      { id: 2, title: 'Procurement & Raw Materials', status: 'Exploring', note: 'Input costs, vendor terms' },
      { id: 3, title: 'Manufacturing / Operations', status: 'Exploring', note: 'Utilization, scrap, yield' },
      { id: 4, title: 'Distribution, SG&A & Returns', status: 'Exploring', note: 'Freight, CAC, RTO/markdowns' }
    ],
    marketentry: [
      { id: 1, title: 'Market Attractiveness (TAM/SAM/SOM)', status: 'Exploring', note: 'Size, growth, margin pool' },
      { id: 2, title: 'Competition & Macro Barriers', status: 'Exploring', note: 'Porter 5 Forces + PESTEL' },
      { id: 3, title: 'Capabilities & Breakeven Math', status: 'Exploring', note: 'BEP = Fixed / (P - VC)' },
      { id: 4, title: 'Entry Mode (Build / Buy / Partner)', status: 'Exploring', note: 'Go/No-Go + rollout plan' }
    ]
  };

  let mockState = {
    caseId: CASES[0] ? CASES[0].id : null,
    durationSec: 1500,
    timeLeft: 1500,
    running: false,
    completed: false,
    timerId: null,
    clarifiedIdx: {},
    revealedWalkthroughCount: 0,
    showVariation: false,
    showSolutionRef: false,
    recsNote: '',
    northStarNote: '',
    guardrailNote: '',
    buckets: structuredClone(MOCK_TEMPLATES.rca)
  };

  let wizardAnswers = { q1: null, q2: null };
  let cheatSearch = '';
  let primerSearch = '';
  let libResizeObserver = null;
  let cmdActiveIdx = 0;

  function esc(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getCase(id) {
    return CASES.find(c => c.id === id) || CASES[0];
  }

  function diffDots(level) {
    const cls = level >= 5 ? 'expert' : level >= 4 ? 'hard' : '';
    let html = '<span class="diff-dots" title="Difficulty ' + level + '/5">';
    for (let i = 1; i <= 5; i++) {
      html += `<span class="diff-dot ${i <= level ? 'on ' + cls : ''}"></span>`;
    }
    html += ` <span style="font-size:0.82rem;color:var(--text-dim);margin-left:2px;">L${level}</span></span>`;
    return html;
  }

  function computeProgress() {
    const totalTasks = (CURRICULUM.roadmap || []).reduce((acc, s) => acc + s.tasks.length, 0) || 1;
    const doneTasks = Object.values(state.roadmapDone).filter(Boolean).length;
    const roadmapPct = Math.round((doneTasks / totalTasks) * 100);

    const masteredCount = Object.values(state.masteredIds).filter(Boolean).length;
    const bookmarkedCount = Object.values(state.bookmarkedIds).filter(Boolean).length;
    const cardsMastered = Object.values(state.flashcardStatus).filter(v => v === 'mastered').length;
    const totalCards = (REF.flashcards || []).length || 1;

    const readiness = Math.min(100, Math.round(
      roadmapPct * 0.30 +
      Math.min(1, masteredCount / 16) * 40 +
      Math.min(1, cardsMastered / 30) * 20 +
      Math.min(1, state.mocksCompleted / 3) * 10
    ));

    return { roadmapPct, doneTasks, totalTasks, masteredCount, bookmarkedCount, cardsMastered, totalCards, readiness };
  }

  function updateSidebarStats() {
    const p = computeProgress();
    const badgeRoadmap = document.getElementById('badge-roadmap');
    const badgeCards = document.getElementById('badge-cards');
    const badgeLib = document.getElementById('badge-library');
    const rPct = document.getElementById('readiness-pct');
    const rFill = document.getElementById('readiness-fill');
    const rSum = document.getElementById('readiness-summary');

    if (badgeRoadmap) badgeRoadmap.textContent = `${p.roadmapPct}%`;
    if (badgeCards) badgeCards.textContent = `${p.cardsMastered}/${p.totalCards}`;
    if (badgeLib) badgeLib.textContent = `${p.masteredCount}/${CASES.length}`;
    if (rPct) rPct.textContent = `${p.readiness}%`;
    if (rFill) rFill.style.width = `${p.readiness}%`;
    if (rSum) rSum.textContent = `${p.masteredCount}/${CASES.length} mastered · ${p.cardsMastered} cards`;
  }

  function applyTheme() {
    state.theme = normalizeTheme(state.theme);
    const isMidnight = state.theme === 'midnight';
    const isCompact = state.fontScale === 'compact';
    const isComfortable = state.fontScale === 'comfortable';

    document.body.classList.toggle('midnight-theme', isMidnight);
    document.body.classList.toggle('focus-mode', !!state.focusMode);
    document.documentElement.classList.toggle('font-compact', isCompact);
    document.documentElement.classList.toggle('font-comfortable', isComfortable);
    document.body.classList.toggle('font-compact', isCompact);
    document.body.classList.toggle('font-comfortable', isComfortable);

    document.querySelectorAll('[data-set-theme]').forEach(el => {
      el.classList.toggle('active', el.dataset.setTheme === state.theme);
    });
    document.querySelectorAll('[data-set-font]').forEach(el => {
      el.classList.toggle('btn-primary', el.dataset.setFont === (state.fontScale || 'normal'));
    });
    document.querySelectorAll('[data-set-mockmins]').forEach(el => {
      el.classList.toggle('btn-primary', Number(el.dataset.setMockmins) === (state.mockDurationMins || 25));
    });

    const themeColorMeta = document.getElementById('meta-theme-color');
    if (themeColorMeta) themeColorMeta.setAttribute('content', isMidnight ? '#10141d' : '#f6f4ef');
  }

  function applySidebarState() {
    const shell = document.getElementById('app-shell');
    const sidebar = document.getElementById('sidebar');
    const scrim = document.getElementById('sidebar-scrim');
    const sideBtn = document.getElementById('sidebar-brand-toggle');
    const topBtn = document.getElementById('topbar-brand-toggle');

    if (window.innerWidth > 820) {
      if (shell) shell.classList.toggle('sidebar-collapsed', !!state.sidebarCollapsed);
      if (sidebar) sidebar.classList.remove('open');
      if (scrim) scrim.classList.remove('open');
      if (sideBtn) sideBtn.setAttribute('aria-expanded', String(!state.sidebarCollapsed));
      if (topBtn) topBtn.setAttribute('aria-expanded', String(!state.sidebarCollapsed));
    } else {
      if (shell) shell.classList.remove('sidebar-collapsed');
      const isOpen = sidebar ? sidebar.classList.contains('open') : false;
      if (sideBtn) sideBtn.setAttribute('aria-expanded', String(isOpen));
      if (topBtn) topBtn.setAttribute('aria-expanded', String(isOpen));
    }
  }

  function toggleSidebar(forceOpen) {
    if (window.innerWidth <= 820) {
      const sidebar = document.getElementById('sidebar');
      const scrim = document.getElementById('sidebar-scrim');
      const open = typeof forceOpen === 'boolean' ? forceOpen : !(sidebar && sidebar.classList.contains('open'));
      if (sidebar) sidebar.classList.toggle('open', open);
      if (scrim) scrim.classList.toggle('open', open);
      applySidebarState();
    } else {
      state.sidebarCollapsed = typeof forceOpen === 'boolean' ? !forceOpen : !state.sidebarCollapsed;
      saveState();
      applySidebarState();
      if (state.view === 'library' && typeof window.__cmSyncLibraryListHeight === 'function') {
        setTimeout(() => window.__cmSyncLibraryListHeight(), 240);
      }
    }
  }

  function toggleTheme() {
    state.theme = state.theme === 'midnight' ? 'paper' : 'midnight';
    saveState();
    applyTheme();
  }

  function toggleFocusMode() {
    state.focusMode = !state.focusMode;
    if (state.focusMode && window.innerWidth > 820) {
      state.sidebarCollapsed = true;
    }
    saveState();
    applyTheme();
    applySidebarState();
  }

  function syncNavUI() {
    document.querySelectorAll('.nav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.view === state.view);
    });
    const meta = {
      dashboard: { k: 'Foundations', t: '4-Day Sprint' },
      academy: { k: 'Foundations', t: 'Approach & Frameworks' },
      memorize: { k: 'Foundations', t: 'Memorize & Reference' },
      library: { k: 'Workshop', t: `Case Dossiers (${CASES.length})` },
      practice: { k: 'Workshop', t: 'Guided Case Coach' },
      mock: { k: 'Workshop', t: 'Mock Studio' }
    }[state.view] || { k: 'CaseMaster', t: 'Strategy Studio' };

    const kickerEl = document.getElementById('topbar-kicker');
    const titleEl = document.getElementById('topbar-title');
    if (kickerEl) kickerEl.textContent = meta.k;
    if (titleEl) titleEl.textContent = meta.t;

    const gs = document.getElementById('global-search');
    if (gs && gs.value !== (state.filters.search || '')) {
      gs.value = state.filters.search || '';
    }
  }

  function setView(view, opts = {}) {
    if (hasDrillSessionData() && (view !== 'memorize' || (opts.memorizeTab && opts.memorizeTab !== 'drill'))) {
      abortRapidDrill();
    }
    if (view !== 'library' && libResizeObserver) {
      libResizeObserver.disconnect();
      libResizeObserver = null;
    }
    state.view = view;
    if (opts.academyTab) state.academyTab = opts.academyTab;
    if (opts.memorizeTab) state.memorizeTab = opts.memorizeTab;
    if (opts.trackFilter) state.filters.track = opts.trackFilter;
    if (opts.caseId) {
      state.selectedCaseId = opts.caseId;
      if (view === 'library' && !getFilteredCases().some(c => c.id === opts.caseId)) {
        state.filters = { ...defaultState.filters };
      }
    }
    saveState();

    syncNavUI();
    if (window.innerWidth <= 820) toggleSidebar(false);
    if (!opts.preserveFocus && typeof window.scrollTo === 'function') {
      window.scrollTo(0, 0);
    }
    render();
  }

  // ==================== VIEW 1: DASHBOARD (CALM SPRINT) ====================
  function ensureOpenStages() {
    if (state.dashOpenStages && typeof state.dashOpenStages === 'object') return state.dashOpenStages;
    const roadmap = CURRICULUM.roadmap || [];
    const firstOpen = roadmap.find(st => st.tasks.some(t => !state.roadmapDone[t.id])) || roadmap[0];
    const map = {};
    if (firstOpen) map[firstOpen.stageNum] = true;
    state.dashOpenStages = map;
    return map;
  }

  function renderDashboard() {
    const p = computeProgress();
    const starters = CASES.filter(c => c.isStarter);
    const orderedRec = [
      ...starters.sort((a, b) => a.difficulty - b.difficulty),
      ...CASES.filter(c => !c.isStarter).sort((a, b) => a.difficulty - b.difficulty)
    ];
    const nextRec = orderedRec.find(c => !state.masteredIds[c.id]) || orderedRec[0] || CASES[0];
    const visibleStarters = state.dashShowAllStarters ? starters.slice(0, 6) : starters.slice(0, 3);
    const openMap = ensureOpenStages();

    const stagesHtml = (CURRICULUM.roadmap || []).map(stage => {
      const doneInStage = stage.tasks.filter(t => state.roadmapDone[t.id]).length;
      const allDone = doneInStage === stage.tasks.length;
      const isOpen = !!openMap[stage.stageNum];
      return `
        <div class="accordion-stage">
          <button type="button" class="accordion-head" data-toggle-stage="${stage.stageNum}" aria-expanded="${isOpen}">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;min-width:0;flex:1;">
              <span class="stage-num">${stage.stageNum}</span>
              <strong style="font-size:1rem;">${esc(stage.title)}</strong>
              <span class="pill ${allDone ? 'pill-green' : 'pill-blue'}">${doneInStage}/${stage.tasks.length}</span>
              <span class="pill">~${esc(stage.duration)}</span>
            </div>
            <span style="font-family:var(--mono);font-size:0.86rem;color:var(--text-dim);flex-shrink:0;">${isOpen ? 'Collapse −' : 'Expand +'}</span>
          </button>
          ${isOpen ? `
            <div class="accordion-body">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;padding-top:10px;">
                <p style="margin:0;color:var(--text-muted);font-size:0.9rem;flex:1 1 240px;">${esc(stage.goal)}</p>
                <button type="button" class="btn btn-sm ${allDone ? '' : 'btn-primary'}" data-jump-view="${stage.actionView}" data-jump-tab="${stage.actionTab || ''}">Open Module →</button>
              </div>
              <div style="display:flex;flex-direction:column;gap:5px;">
                ${stage.tasks.map(t => {
                  const checked = !!state.roadmapDone[t.id];
                  return `
                    <label class="task-item ${checked ? 'done' : ''}">
                      <input type="checkbox" data-roadmap-task="${t.id}" ${checked ? 'checked' : ''} />
                      <span>${esc(t.text)}</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    return `
      <div class="brief-banner">
        <div>
          <span class="pill pill-blue" style="margin-bottom:5px;">0-Experience Interview Sprint · 4–5 Days</span>
          <h1>Structured Thinking for Product &amp; Consulting Cases</h1>
          <p>Master the 6-step case loop first, then drill <strong>${CASES.length} solved dossiers</strong> across RCA, GTM, Product Design, Pricing, Profitability &amp; Market Entry.</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="button" class="btn btn-primary" data-jump-view="academy" data-jump-tab="algorithm">1. Learn 6-Step Method →</button>
          ${nextRec ? `<button type="button" class="btn btn-secondary" data-practice-id="${esc(nextRec.id)}">Practice Starter (L${nextRec.difficulty})</button>` : ''}
        </div>
      </div>

      <div class="kpi-strip">
        <div class="kpi-cell">
          <span class="stat-label">Readiness</span>
          <span class="stat-value" style="color:var(--accent-bright);">${p.readiness}%</span>
          <span class="stat-sub">Target: 80%+ before day 4</span>
        </div>
        <div class="kpi-cell">
          <span class="stat-label">Cases Mastered</span>
          <span class="stat-value">${p.masteredCount} <span style="font-size:0.86rem;color:var(--text-dim);font-weight:400;">/ ${CASES.length}</span></span>
          <span class="stat-sub">${p.bookmarkedCount} bookmarked for review</span>
        </div>
        <div class="kpi-cell">
          <span class="stat-label">Cards &amp; Reflex</span>
          <span class="stat-value">${p.cardsMastered} <span style="font-size:0.86rem;color:var(--text-dim);font-weight:400;">/ ${p.totalCards}</span></span>
          <span class="stat-sub">Best 60s drill: ${state.bestDrillScore} pts</span>
        </div>
        <div class="kpi-cell">
          <span class="stat-label">Up Next</span>
          <div style="font-weight:600;font-size:0.9rem;line-height:1.3;margin:2px 0;">${esc(nextRec ? nextRec.title : '—')}</div>
          ${nextRec ? `
            <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap;margin-top:auto;">
              <span class="pill pill-purple">${esc(nextRec.category)}</span>
              <button type="button" class="btn btn-sm" data-open-case="${esc(nextRec.id)}" style="margin-left:auto;">Open</button>
            </div>
          ` : ''}
        </div>
      </div>

      ${starters.length ? `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">
          <h2 style="font-size:1.08rem;margin:0;">Starter Dossiers (0 → 1 Warmup)</h2>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            ${starters.length > 3 ? `<button type="button" class="btn btn-sm" id="dash-toggle-starters-btn">${state.dashShowAllStarters ? 'Show Top 3' : `Show All ${Math.min(6, starters.length)}`}</button>` : ''}
            <button type="button" class="btn btn-sm btn-secondary" id="dash-view-starters-btn">Browse ${starters.length} Starters →</button>
          </div>
        </div>
        <div class="starter-grid">
          ${visibleStarters.map(c => `
            <div class="starter-card">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:5px;flex-wrap:wrap;">
                <span class="pill pill-purple">${esc(c.category)}</span>
                <span class="pill pill-blue">${esc(c.company)}</span>
              </div>
              <strong style="font-size:0.94rem;line-height:1.32;">${esc(c.title)}</strong>
              <div style="font-size:0.82rem;color:var(--text-dim);margin-top:auto;">${esc(c.track)} · ${diffDots(c.difficulty)}</div>
              <div style="display:flex;gap:6px;margin-top:3px;">
                <button type="button" class="btn btn-sm" style="flex:1;" data-open-case="${esc(c.id)}">Read Dossier</button>
                <button type="button" class="btn btn-sm btn-primary" style="flex:1;" data-practice-id="${esc(c.id)}">Guided Solve</button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin:6px 0 9px;">
        <h2 style="font-size:1.08rem;margin:0;">4-Day Preparation Plan</h2>
        <span style="font-size:0.82rem;color:var(--text-dim);">Click any day below to expand or fold checklist</span>
      </div>
      ${stagesHtml}
    `;
  }

  // ==================== VIEW 2: ACADEMY (CALM FOCUSED READER) ====================
  function renderAcademy() {
    const tab = state.academyTab || 'algorithm';
    const tabsHtml = `
      <div class="page-header">
        <div>
          <h1>Approach Guide &amp; Frameworks</h1>
          <p>Read one concept at a time: the universal 6-step loop, case router wizard, 10 blueprints, and firm playbooks.</p>
        </div>
      </div>
      <div class="editorial-tabs">
        <button type="button" class="tab-btn ${tab === 'algorithm' ? 'active' : ''}" data-acad-tab="algorithm">1. 6-Step Method</button>
        <button type="button" class="tab-btn ${tab === 'wizard' ? 'active' : ''}" data-acad-tab="wizard">2. Wizard &amp; Drills</button>
        <button type="button" class="tab-btn ${tab === 'blueprints' ? 'active' : ''}" data-acad-tab="blueprints">3. 10 Blueprints</button>
        <button type="button" class="tab-btn ${tab === 'toolkit' ? 'active' : ''}" data-acad-tab="toolkit">4. Toolkit (18)</button>
        <button type="button" class="tab-btn ${tab === 'secrets' ? 'active' : ''}" data-acad-tab="secrets">5. Firm Styles &amp; Traps</button>
      </div>
    `;

    let body = '';
    if (tab === 'algorithm') {
      const steps = CURRICULUM.sixSteps || [];
      const curIdx = Math.max(0, Math.min(steps.length - 1, state.academyFocusStep || 0));
      const renderStepCard = (s) => `
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:8px;">
            <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1 1 220px;">
              <span class="stage-num">0${s.stepNum}</span>
              <div style="min-width:0;">
                <h3 style="margin:0;font-size:1.08rem;">${esc(s.name)}</h3>
                <div style="font-size:0.88rem;color:var(--text-muted);">${esc(s.tagline)}</div>
              </div>
            </div>
            <span class="pill pill-blue">Time budget: ${esc(s.timeBudget)}</span>
          </div>
          <p style="font-size:0.93rem;margin:0 0 8px;"><strong>Why interviewers grade this:</strong> ${esc(s.whyInterviewersCare)}</p>
          <ul style="margin:0 0 10px;padding-left:18px;font-size:0.92rem;color:var(--text-muted);">
            ${s.checklist.map(c => `<li style="margin-bottom:3px;">${esc(c)}</li>`).join('')}
          </ul>
          <div style="margin-bottom:10px;">
            <div style="font-size:0.78rem;font-family:var(--mono);font-weight:600;color:var(--accent-bright);margin-bottom:4px;text-transform:uppercase;">Word-for-Word Script</div>
            <div class="script-box">${esc(s.wordForWordScript)}</div>
          </div>
          <div class="compare-grid">
            <div class="bad-box"><strong>Trap to avoid:</strong><br/>${esc(s.badExample)}</div>
            <div class="good-box"><strong>Strong move:</strong><br/>${esc(s.goodExample)}</div>
          </div>
        </div>
      `;

      const focusStep = steps[curIdx];
      body = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
          <div class="tip-box" style="flex:1 1 300px;">
            <strong>Golden Rule:</strong> Never rush into solutions. Interviewers grade 4 habits: (1) Clarify scope, (2) Present a MECE tree, (3) Prioritize P0 drivers, and (4) Synthesize with metrics &amp; guardrails.
          </div>
          <button type="button" class="btn btn-sm" id="acad-toggle-all-steps">
            ${state.academyShowAllSteps ? 'Focus 1 Step at a Time' : 'View All 6 Steps'}
          </button>
        </div>

        ${state.academyShowAllSteps ? `
          <div style="display:flex;flex-direction:column;gap:12px;">
            ${steps.map(renderStepCard).join('')}
          </div>
        ` : (focusStep ? `
          <div class="step-rail">
            ${steps.map((st, i) => `
              <button type="button" class="step-rail-btn ${i === curIdx ? 'active' : ''}" data-acad-step="${i}">
                <span class="step-rail-num">STEP 0${st.stepNum}</span>
                <span class="step-rail-label">${esc(st.name)}</span>
              </button>
            `).join('')}
          </div>
          ${renderStepCard(focusStep)}
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px;gap:8px;">
            <button type="button" class="btn btn-sm" id="acad-prev-step" ${curIdx === 0 ? 'disabled style="opacity:0.45;"' : ''}>← Previous Step</button>
            <span style="font-family:var(--mono);font-size:0.82rem;color:var(--text-dim);">Use ← / → keys · Step ${curIdx + 1} of ${steps.length}</span>
            <button type="button" class="btn btn-sm btn-primary" id="acad-next-step" ${curIdx >= steps.length - 1 ? 'disabled style="opacity:0.45;"' : ''}>Next Step →</button>
          </div>
        ` : '')}
      `;
    } else if (tab === 'wizard') {
      const wiz = CURRICULUM.decisionWizard || {};
      const apps = wiz.approaches || [];
      let rec = null;
      if (wizardAnswers.q1 === 'rca') rec = apps[0];
      else if (wizardAnswers.q1 === 'gtm') rec = apps[1];
      else if (wizardAnswers.q1 === 'design') rec = apps[2];
      else if (wizardAnswers.q1 === 'metrics') rec = apps[3];
      else if (wizardAnswers.q1 === 'pricing') rec = apps[4];
      else if (wizardAnswers.q1 === 'profit') rec = apps[5];
      else if (wizardAnswers.q1 === 'entry') rec = apps[6];
      else if (wizardAnswers.q1 === 'growth') rec = apps[7];

      const scDone = Object.keys(state.scenarioAnswers).length;
      const scCorrect = (wiz.scenarios || []).filter(s => state.scenarioAnswers[s.id] === s.correctIndex).length;
      const sub = state.wizardSubTab || 'wizard';

      body = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
          <div class="sub-seg">
            <button type="button" class="sub-seg-btn ${sub === 'wizard' ? 'active' : ''}" data-wiz-sub="wizard">Framework Decision Router</button>
            <button type="button" class="sub-seg-btn ${sub === 'drills' ? 'active' : ''}" data-wiz-sub="drills">16 Spot-the-Case Drills (${scCorrect}/${(wiz.scenarios || []).length})</button>
          </div>
          <span class="pill pill-green">${scDone}/${(wiz.scenarios || []).length} drills answered</span>
        </div>

        ${sub === 'wizard' ? `
          <div class="card">
            <h3 style="margin:0 0 4px;font-size:1.05rem;">Match the Prompt to the Right Framework</h3>
            <p style="margin:0 0 10px;font-size:0.92rem;color:var(--text-muted);">Choose the symptom asked in Q1 to reveal the core formula, opening questions, and traps:</p>
            <div class="grid-2" style="margin-bottom:10px;">
              <div class="section-block">
                <strong class="block-label" style="margin-bottom:6px;">Q1. Core symptom or prompt ask</strong>
                <div style="display:flex;flex-direction:column;gap:5px;">
                  <button type="button" class="btn btn-sm btn-block-left ${wizardAnswers.q1 === 'rca' ? 'btn-primary' : ''}" data-wiz-q="q1" data-wiz-v="rca">Metric dropped or failures spiked (Orders / Retention / Errors)</button>
                  <button type="button" class="btn btn-sm btn-block-left ${wizardAnswers.q1 === 'gtm' ? 'btn-primary' : ''}" data-wiz-q="q1" data-wiz-v="gtm">Launch a new product / feature into a market (GTM)</button>
                  <button type="button" class="btn btn-sm btn-block-left ${wizardAnswers.q1 === 'design' ? 'btn-primary' : ''}" data-wiz-q="q1" data-wiz-v="design">Design a 0-to-1 feature or improve Activation/UX</button>
                  <button type="button" class="btn btn-sm btn-block-left ${wizardAnswers.q1 === 'metrics' ? 'btn-primary' : ''}" data-wiz-q="q1" data-wiz-v="metrics">Define success metrics, dashboard, or critique a product</button>
                  <button type="button" class="btn btn-sm btn-block-left ${wizardAnswers.q1 === 'pricing' ? 'btn-primary' : ''}" data-wiz-q="q1" data-wiz-v="pricing">Set or change prices / subscription monetization</button>
                  <button type="button" class="btn btn-sm btn-block-left ${wizardAnswers.q1 === 'profit' ? 'btn-primary' : ''}" data-wiz-q="q1" data-wiz-v="profit">Profits or margins fell / costs spiked (Profitability)</button>
                  <button type="button" class="btn btn-sm btn-block-left ${wizardAnswers.q1 === 'entry' ? 'btn-primary' : ''}" data-wiz-q="q1" data-wiz-v="entry">Should Company X enter a new country or vertical?</button>
                  <button type="button" class="btn btn-sm btn-block-left ${wizardAnswers.q1 === 'growth' ? 'btn-primary' : ''}" data-wiz-q="q1" data-wiz-v="growth">2x Growth, M&amp;A Acquisition, or Unconventional Puzzle</button>
                </div>
              </div>
              <div class="section-block">
                <strong class="block-label" style="margin-bottom:6px;">Q2. Interview track lens</strong>
                <div style="display:flex;flex-direction:column;gap:5px;">
                  <button type="button" class="btn btn-sm btn-block-left ${wizardAnswers.q2 === 'pm' ? 'btn-primary' : ''}" data-wiz-q="q2" data-wiz-v="pm">Product Management (User Journey, Persona, North Star + Guardrails, A/B Test)</button>
                  <button type="button" class="btn btn-sm btn-block-left ${wizardAnswers.q2 === 'consulting' ? 'btn-primary' : ''}" data-wiz-q="q2" data-wiz-v="consulting">Management Consulting (Value Chain, Revenue/Cost Math, Market Sizing, Entry Mode)</button>
                </div>
                <div class="tip-box" style="margin-top:10px;">
                  <strong>Context lens:</strong> ${wizardAnswers.q2 === 'pm' ? 'Emphasize User Personas, Funnel Drop-offs, North Star + Counter-Metrics, and Experimentation.' : wizardAnswers.q2 === 'consulting' ? 'Emphasize P&L/Value Chain math, Industry vs Company-specific checks, Breakeven, and Pyramid synthesis.' : 'Pick your track to tailor what you emphasize first.'}
                </div>
              </div>
            </div>
            ${rec ? `
              <div class="good-box">
                <div style="font-size:0.78rem;font-family:var(--mono);text-transform:uppercase;font-weight:600;">Recommended Strategy</div>
                <h4 style="margin:3px 0;font-size:1.06rem;">${esc(rec.name)} <span class="pill pill-green">${esc(rec.badge)}</span></h4>
                <p style="margin:3px 0 6px;">${esc(rec.whenToUse)}</p>
                <div class="formula-banner">${esc(rec.coreFormula)}</div>
                <div style="margin:7px 0 0;font-size:0.9rem;">
                  <strong>First 3 Questions to Ask:</strong>
                  <ul style="margin:3px 0 5px;padding-left:18px;">
                    ${(rec.firstQuestions || []).map(q => `<li>${esc(q)}</li>`).join('')}
                  </ul>
                  <strong>Watch out for:</strong> ${esc(rec.watchOutFor)}
                </div>
              </div>
            ` : '<div class="tip-box">Select Q1 on the left to reveal the tailored framework, first 3 clarifying questions, and common trap.</div>'}
          </div>
        ` : `
          <div class="card">
            <h3 style="margin:0 0 4px;font-size:1.05rem;">Spot the Case Type &amp; First Move (16 Mini-Drills)</h3>
            <p style="margin:0 0 12px;font-size:0.9rem;color:var(--text-muted);">Practice 10-second pattern recognition before committing to a tree.</p>
            <div class="grid-2">
              ${(wiz.scenarios || []).map((sc, idx) => {
                const chosen = state.scenarioAnswers[sc.id];
                const hasChosen = chosen !== undefined;
                return `
                  <div class="section-block">
                    <div style="font-weight:600;font-size:0.94rem;margin-bottom:6px;">${idx + 1}. ${esc(sc.question)}</div>
                    <div>
                      ${sc.options.map((opt, oi) => {
                        let cls = 'quiz-opt';
                        if (hasChosen) {
                          if (oi === sc.correctIndex) cls += ' correct';
                          else if (oi === chosen) cls += ' wrong';
                        }
                        return `<button type="button" class="${cls}" data-sc-id="${sc.id}" data-sc-opt="${oi}">${esc(opt)}</button>`;
                      }).join('')}
                    </div>
                    ${hasChosen ? `<div style="font-size:0.88rem;color:var(--text-muted);margin-top:5px;">Note: ${esc(sc.explanation)}</div>` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `}
      `;
    } else if (tab === 'blueprints') {
      body = `
        <div class="grid-2">
          ${(CURRICULUM.masterBlueprints || []).map(t => `
            <div class="card">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:6px;">
                <span class="pill pill-purple">Blueprint #${t.num} · ${esc(t.category)}</span>
              </div>
              <h3 style="margin:0 0 6px;font-size:1.06rem;">${esc(t.name)}</h3>
              <div class="formula-banner" style="margin-bottom:8px;">${esc(t.formula)}</div>
              <p style="font-size:0.92rem;margin:0 0 8px;"><strong>When to use:</strong> ${esc(t.whenToUse)}</p>
              <div style="font-size:0.9rem;color:var(--text-muted);margin-bottom:8px;">
                <strong>Standard Tree Anatomy:</strong>
                <ul style="margin:3px 0 0;padding-left:16px;">
                  ${t.anatomy.map(a => `<li>${esc(a)}</li>`).join('')}
                </ul>
              </div>
              <div class="good-box" style="margin-bottom:9px;font-size:0.89rem;"><strong>Insider tip:</strong> ${esc(t.proTip)}</div>
              <div style="display:flex;flex-wrap:wrap;gap:5px;">
                ${(t.exampleIds || []).map(eid => {
                  const ep = CASES.find(x => x.id === eid);
                  return ep ? `<button type="button" class="btn btn-sm" data-open-case="${esc(ep.id)}">${esc(ep.title.slice(0, 34))}${ep.title.length > 34 ? '…' : ''}</button>` : '';
                }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tab === 'toolkit') {
      const groups = [...new Set((CURRICULUM.toolkit || []).map(t => t.group))];
      body = groups.map(grp => `
        <h3 style="margin:10px 0 7px;font-size:1.04rem;">${esc(grp)}</h3>
        <div class="grid-2" style="margin-bottom:12px;">
          ${(CURRICULUM.toolkit || []).filter(t => t.group === grp).map(t => `
            <div class="card-flat">
              <strong style="font-size:0.96rem;color:var(--accent-bright);">${esc(t.name)}</strong>
              <p style="font-size:0.9rem;margin:4px 0 6px;">${esc(t.summary)}</p>
              <div class="tip-box"><strong>When to use:</strong> ${esc(t.whenToUse)}</div>
            </div>
          `).join('')}
        </div>
      `).join('');
    } else {
      body = `
        <h3 style="margin:0 0 8px;font-size:1.05rem;">How Different Firms &amp; Teams Evaluate Candidates</h3>
        <div class="grid-2" style="margin-bottom:16px;">
          ${(CURRICULUM.firmPlaybooks || []).map(sec => `
            <div class="card-flat" style="display:flex;flex-direction:column;gap:5px;">
              <strong style="font-size:0.98rem;color:var(--accent-2);">${esc(sec.firm)}</strong>
              <div style="font-size:0.89rem;"><strong>Style:</strong> ${esc(sec.style)}</div>
              <p style="font-size:0.9rem;color:var(--text-muted);margin:0;">${esc(sec.whatTheyLookFor)}</p>
              <div class="tip-box tip-box-green" style="margin-top:auto;">${esc(sec.proTip)}</div>
            </div>
          `).join('')}
        </div>

        <h3 style="margin:0 0 8px;font-size:1.05rem;">Top 10 Mistakes That Cost Offers</h3>
        <div class="card">
          ${(CURRICULUM.fatalMistakes || []).map(fm => `
            <div class="cs-item" style="flex-direction:column;align-items:flex-start;gap:3px;">
              <strong style="color:var(--danger);font-size:0.93rem;">${esc(fm.mistake)}</strong>
              <span style="font-size:0.89rem;color:var(--text-muted);"><strong>Fix:</strong> ${esc(fm.fix)}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    return tabsHtml + body;
  }

  // ==================== VIEW 3: CASE DOSSIERS (CALM PROGRESSIVE READER) ====================
  function getFilteredCases() {
    const f = state.filters;
    const q = f.search.trim().toLowerCase();
    return CASES.filter(c => {
      if (f.track === 'Starter' && !c.isStarter) return false;
      if (f.track !== 'All' && f.track !== 'Starter' && c.track !== f.track) return false;
      if (f.category !== 'All' && c.category !== f.category) return false;
      if (f.difficulty !== 'All' && String(c.difficulty) !== String(f.difficulty)) return false;
      if (f.status === 'Mastered' && !state.masteredIds[c.id]) return false;
      if (f.status === 'Unread' && state.masteredIds[c.id]) return false;
      if (f.status === 'Bookmarked' && !state.bookmarkedIds[c.id]) return false;
      if (q) {
        const hay = `${c.title} ${c.company} ${c.category} ${c.track} ${c.prompt} ${(c.tags || []).join(' ')}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function renderTreeNode(node) {
    if (!node) return '';
    const boxCls = node.highlight ? 'highlight' : node.muted ? 'muted' : '';
    const childrenHtml = (node.children && node.children.length)
      ? `<div class="tree-children">${node.children.map(renderTreeNode).join('')}</div>`
      : '';
    return `
      <div class="tree-node">
        <div class="tree-node-box ${boxCls}">
          <span>${esc(node.label)}</span>
          ${node.valueText ? `<span class="tree-node-val">${esc(node.valueText)}</span>` : ''}
        </div>
        ${childrenHtml}
      </div>
    `;
  }

  function formatConvoKind(kind) {
    const labels = {
      prompt: 'Case Brief',
      data: 'Data Reveal',
      probe: 'Interviewer Probe',
      question: 'Clarify',
      framework: 'MECE Structure',
      hypothesis: 'Hypothesis',
      'root-cause': 'Root Cause',
      recommendation: 'Recommendation',
      synthesis: '30s Pitch'
    };
    return labels[kind] || '';
  }

  function renderConversationFeed(walkthrough, opts = {}) {
    const list = walkthrough || [];
    const showToolbar = opts.showToolbar !== false;
    const showReasoning = opts.forceAll ? true : state.showConvoReasoning !== false;
    const showCauses = opts.forceAll ? true : state.showConvoCauses !== false;
    const skimOnly = opts.forceAll ? false : !!state.convoHighlightsOnly;

    const visibleTurns = skimOnly
      ? list.filter(w => (w.reasoning && w.reasoning.trim()) || (Array.isArray(w.causes) && w.causes.length))
      : list;

    let lastPhase = '';
    const turnsHtml = visibleTurns.map(w => {
      const sp = (w.speaker || 'Candidate').toLowerCase();
      const isInt = sp.includes('interviewer');
      const phase = (w.phase || '').trim();
      let phaseHtml = '';
      if (phase && phase !== lastPhase) {
        lastPhase = phase;
        phaseHtml = `<div class="convo-phase-divider">${esc(phase)}</div>`;
      }
      const kindLabel = formatConvoKind(w.kind);
      const detail = (w.detail || '').trim();
      const promptNorm = (w.prompt || '').trim();
      const showSubHead = promptNorm && detail && !detail.toLowerCase().startsWith(promptNorm.slice(0, 32).toLowerCase());
      const reasoningHtml = (showReasoning && w.reasoning && w.reasoning.trim())
        ? `<div class="convo-reasoning"><span class="convo-tag">Reasoning</span>${esc(w.reasoning)}</div>`
        : '';
      const causesHtml = (showCauses && Array.isArray(w.causes) && w.causes.length)
        ? `<div class="convo-causes"><span class="convo-tag">Root Cause / Key Driver</span><ul class="convo-cause-list">${w.causes.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`
        : '';

      return `
        ${phaseHtml}
        <div class="convo-row ${isInt ? 'is-interviewer' : 'is-candidate'}">
          <div class="convo-header">
            <span class="convo-speaker-group">
              <span class="convo-avatar">${isInt ? 'IV' : 'YOU'}</span>
              <span class="convo-speaker-name">${isInt ? 'Interviewer' : 'Candidate'}</span>
            </span>
            ${kindLabel ? `<span class="convo-kind-tag">${esc(kindLabel)}</span>` : ''}
          </div>
          ${showSubHead ? `<div style="font-weight:600;font-size:0.9rem;margin-bottom:4px;">${esc(promptNorm)}</div>` : ''}
          <div class="convo-speech">${esc(detail)}</div>
          ${reasoningHtml}
          ${causesHtml}
        </div>
      `;
    }).join('') || '<div class="tip-box">No turns match the current highlight filter. Toggle "Highlights Only" off to view all turns.</div>';

    const toolbarHtml = showToolbar ? `
      <div class="convo-toolbar">
        <div class="convo-legend">
          <span><span class="convo-legend-dot" style="background:var(--accent-2);"></span>Interviewer</span>
          <span><span class="convo-legend-dot" style="background:var(--accent);"></span>Candidate</span>
          <span><span class="convo-legend-dot" style="background:var(--sage);"></span>Root Causes</span>
        </div>
        <div class="convo-toggles">
          <button type="button" class="convo-toggle-pill ${showReasoning ? 'active-reasoning' : ''}" data-toggle-convo="reasoning">Reasoning</button>
          <button type="button" class="convo-toggle-pill ${showCauses ? 'active-causes' : ''}" data-toggle-convo="causes">Causes &amp; Drivers</button>
          <button type="button" class="convo-toggle-pill ${skimOnly ? 'active-skim' : ''}" data-toggle-convo="skim">Highlights Only</button>
        </div>
      </div>
    ` : '';

    return `${toolbarHtml}<div class="dialogue-feed">${turnsHtml}</div>`;
  }

  function renderCaseDetail(c) {
    if (!c) return '<div class="card">No cases matched your filters. Click Reset Filters.</div>';
    const isMastered = !!state.masteredIds[c.id];
    const isBookmarked = !!state.bookmarkedIds[c.id];
    const mode = state.caseReaderMode || (state.progressiveMode ? 'step' : 'full');
    const stepLimit = mode === 'step' ? state.studyRevealStep : mode === 'brief' ? 3 : 99;
    const mg = c.metricsAndGuardrails || {};

    return `
      <div class="problem-detail-panel" id="detail-panel" data-case-id="${esc(c.id)}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">
          <div style="min-width:0;flex:1 1 240px;">
            <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:6px;">
              ${c.isStarter ? '<span class="pill pill-green">Starter</span>' : ''}
              <span class="pill pill-purple">${esc(c.category)}</span>
              <span class="pill pill-blue">${esc(c.track)} · ${esc(c.company)}</span>
              ${diffDots(c.difficulty)}
            </div>
            <h2 style="margin:0;font-size:1.22rem;letter-spacing:-0.015em;">${esc(c.title)}</h2>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:5px;">
            <button type="button" class="btn btn-sm ${isMastered ? 'btn-primary' : ''}" data-toggle-master="${esc(c.id)}" aria-pressed="${isMastered}" title="Shortcut: m">
              ${isMastered ? '✓ Mastered' : 'Mark Mastered'}
            </button>
            <button type="button" class="btn btn-sm ${isBookmarked ? 'btn-warn' : ''}" data-toggle-bookmark="${esc(c.id)}" aria-pressed="${isBookmarked}" title="Shortcut: s">
              ${isBookmarked ? '★ Saved' : '☆ Save'}
            </button>
            <button type="button" class="btn btn-sm btn-secondary" data-practice-id="${esc(c.id)}">Guided Solve</button>
            <button type="button" class="btn btn-sm" data-mock-id="${esc(c.id)}">Mock Test</button>
          </div>
        </div>

        <div class="brief-banner" style="margin:0;padding:11px 14px;">
          <div style="min-width:0;flex:1 1 240px;">
            <div style="font-size:0.74rem;font-family:var(--mono);text-transform:uppercase;font-weight:600;color:var(--accent-2);">Interviewer Prompt</div>
            <div style="font-size:1.02rem;font-weight:600;margin-top:2px;">“${esc(c.prompt)}”</div>
          </div>
          <div style="display:flex;align-items:center;flex-wrap:wrap;gap:6px;">
            <div class="sub-seg" title="Switch reading density (Shortcut: p)">
              <button type="button" class="sub-seg-btn ${mode === 'brief' ? 'active' : ''}" data-reader-mode="brief">Brief (1–3)</button>
              <button type="button" class="sub-seg-btn ${mode === 'full' ? 'active' : ''}" data-reader-mode="full">Full (1–6)</button>
              <button type="button" class="sub-seg-btn ${mode === 'step' ? 'active' : ''}" data-reader-mode="step">Step-by-Step</button>
            </div>
            ${mode === 'step' && stepLimit < 6 ? `<button type="button" class="btn btn-sm btn-primary" id="reveal-next-step-btn" title="Shortcut: n">Reveal ${stepLimit + 1}/6 →</button>` : ''}
          </div>
        </div>

        <!-- Step 1 -->
        <details class="dossier-step" open>
          <summary><span>1. Clarifying Questions &amp; Scope</span></summary>
          <div class="dossier-step-body">
            ${(c.clarifyingQuestions || []).map(cq => `
              <div style="padding:7px 0;border-bottom:1px solid var(--border);">
                <div style="font-weight:600;font-size:0.92rem;">Ask: “${esc(cq.q)}”</div>
                <div style="font-size:0.9rem;color:var(--accent-bright);margin-top:2px;">Interviewer: ${esc(cq.a)}</div>
                <div style="font-size:0.86rem;color:var(--text-muted);margin-top:2px;">Why it matters: ${esc(cq.why)}</div>
              </div>
            `).join('')}
          </div>
        </details>

        <!-- Step 2 -->
        ${stepLimit >= 2 ? `
        <details class="dossier-step" open>
          <summary><span>2. Framework &amp; Strategic Lens</span></summary>
          <div class="dossier-step-body">
            <div style="margin:8px 0 6px;"><span class="pill pill-blue">${esc(c.frameworkUsed)}</span></div>
            <p style="margin:0 0 8px;font-size:0.92rem;">${esc(c.strategyOverview)}</p>
            <div class="formula-banner">${esc(c.coreEquation)}</div>
          </div>
        </details>` : ''}

        <!-- Step 3 -->
        ${stepLimit >= 3 ? `
        <details class="dossier-step" open>
          <summary><span>3. Visual MECE Issue Tree</span></summary>
          <div class="dossier-step-body">
            <div class="issue-tree-wrap">${renderTreeNode(c.tree)}</div>
          </div>
        </details>` : ''}

        <!-- Step 4 -->
        ${stepLimit >= 4 ? `
        <details class="dossier-step" open>
          <summary><span>4. Interview Conversation, Reasoning &amp; Root Causes</span></summary>
          <div class="dossier-step-body">
            ${renderConversationFeed(c.walkthrough, { showToolbar: true })}
            ${(c.prioritization && c.prioritization.length) ? `
              <h4 style="margin:12px 0 4px;font-size:0.95rem;">Prioritization Matrix</h4>
              <div class="table-scroll">
                <table class="priority-table">
                  <thead>
                    <tr><th>Issue / Initiative</th><th>Impact</th><th>Effort</th><th>Priority</th><th>Rationale</th></tr>
                  </thead>
                  <tbody>
                    ${c.prioritization.map(row => `
                      <tr>
                        <td><strong>${esc(row.item)}</strong></td>
                        <td>${esc(row.impact)}</td>
                        <td>${esc(row.effort)}</td>
                        <td><span class="pill ${row.priority === 'P0' ? 'pill-green' : row.priority === 'Reject' ? 'pill-danger' : 'pill-blue'}">${esc(row.priority)}</span></td>
                        <td style="color:var(--text-muted);">${esc(row.rationale)}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : ''}
          </div>
        </details>` : ''}

        <!-- Step 5 -->
        ${stepLimit >= 5 ? `
        <details class="dossier-step" open>
          <summary><span>5. Recommendations, North Star &amp; Guardrails</span></summary>
          <div class="dossier-step-body">
            <ul style="margin:8px 0 10px;padding-left:18px;font-size:0.92rem;">
              ${(c.recommendations || []).map(r => `<li style="margin-bottom:4px;">${esc(r)}</li>`).join('')}
            </ul>
            <div class="metric-grid">
              <div class="metric-box">
                <h4 style="color:var(--sage);">North Star</h4>
                <div style="font-size:0.89rem;">${esc(mg.northStar || 'Core value & revenue outcome')}</div>
              </div>
              <div class="metric-box">
                <h4 style="color:var(--accent-bright);">Leading Drivers</h4>
                <ul style="margin:0;padding-left:15px;font-size:0.88rem;color:var(--text-muted);">
                  ${(mg.leading || []).map(l => `<li>${esc(l)}</li>`).join('')}
                </ul>
              </div>
              <div class="metric-box">
                <h4 style="color:var(--danger);">Guardrails</h4>
                <ul style="margin:0;padding-left:15px;font-size:0.88rem;color:var(--text-muted);">
                  ${(mg.guardrails || []).map(g => `<li>${esc(g)}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        </details>` : ''}

        <!-- Step 6 -->
        ${stepLimit >= 6 ? `
        <details class="dossier-step" open>
          <summary><span>6. 30-Second Pyramid Synthesis, Traps &amp; Curveballs</span></summary>
          <div class="dossier-step-body">
            <div class="script-box" style="margin:8px 0;">${esc(c.synthesisScript)}</div>
            <div class="bad-box" style="margin-bottom:8px;">
              <strong>Common Interviewer Trap:</strong> ${esc(c.interviewerTrap)}
            </div>
            ${(c.variations || []).map(vr => `
              <div style="margin-bottom:5px;font-size:0.9rem;">
                <strong>Curveball: ${esc(vr.question)}</strong>
                <div style="color:var(--text-muted);font-size:0.88rem;">Hint: ${esc(vr.hint)}</div>
              </div>
            `).join('')}
          </div>
        </details>` : ''}
      </div>
    `;
  }

  function renderLibraryListHtml(filtered, activeCase) {
    return filtered.map(c => `
      <div class="problem-list-item ${activeCase && activeCase.id === c.id ? 'selected' : ''}" data-select-case="${esc(c.id)}">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:4px;">
          <span class="pill pill-purple">${esc(c.category)}</span>
          <div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;">
            ${c.isStarter ? '<span class="pill pill-green">Starter</span>' : ''}
            ${state.bookmarkedIds[c.id] ? '<span title="Saved">★</span>' : ''}
            ${state.masteredIds[c.id] ? '<span class="pill pill-green">✓</span>' : ''}
            ${diffDots(c.difficulty)}
          </div>
        </div>
        <h4>${esc(c.title)}</h4>
        <div style="font-size:0.82rem;color:var(--text-dim);">${esc(c.company)} · ${esc(c.track)}</div>
      </div>
    `).join('') || '<div class="card-flat">No matching cases. Click Reset Filters.</div>';
  }

  function renderLibrary() {
    const categories = ['All', ...new Set(CASES.map(c => c.category))];

    const filtered = getFilteredCases();
    if (!filtered.some(c => c.id === state.selectedCaseId) && filtered.length) {
      state.selectedCaseId = filtered[0].id;
    }
    const activeCase = filtered.find(c => c.id === state.selectedCaseId) || filtered[0] || null;
    const extraCount = [state.filters.difficulty !== 'All', state.filters.status !== 'All'].filter(Boolean).length;

    return `
      <div class="page-header">
        <div>
          <h1>Case Dossiers</h1>
          <p>${CASES.length} solved Product &amp; Consulting cases — use <kbd class="keycap">j</kbd>/<kbd class="keycap">k</kbd> to step, <kbd class="keycap">p</kbd> for Brief vs Full.</p>
        </div>
        <span id="lib-count-text" style="font-size:0.88rem;color:var(--text-muted);">Showing <strong>${filtered.length}</strong> of ${CASES.length}</span>
      </div>

      <div class="filter-bar-compact">
        <input type="text" class="input" id="lib-search" placeholder="Search company, topic, keyword..." value="${esc(state.filters.search)}" />
        <select class="select" id="lib-track">
          <option value="All" ${state.filters.track === 'All' ? 'selected' : ''}>Track: All</option>
          <option value="Starter" ${state.filters.track === 'Starter' ? 'selected' : ''}>Starter Pack</option>
          <option value="Product" ${state.filters.track === 'Product' ? 'selected' : ''}>Product (PM)</option>
          <option value="Consulting" ${state.filters.track === 'Consulting' ? 'selected' : ''}>Consulting</option>
        </select>
        <select class="select" id="lib-category">
          <option value="All" ${state.filters.category === 'All' ? 'selected' : ''}>Category: All</option>
          ${categories.filter(a => a !== 'All').map(a => `<option value="${esc(a)}" ${state.filters.category === a ? 'selected' : ''}>${esc(a)}</option>`).join('')}
        </select>
        <button type="button" class="btn btn-sm ${state.libMoreFiltersOpen || extraCount ? 'btn-secondary' : ''}" id="toggle-more-filters-btn">
          More Filters${extraCount ? ` (${extraCount})` : ''}
        </button>
        <button type="button" class="btn btn-sm" id="clear-filters-btn">Reset</button>
      </div>

      ${state.libMoreFiltersOpen ? `
        <div class="filter-bar-extra">
          <select class="select" id="lib-diff">
            <option value="All" ${state.filters.difficulty === 'All' ? 'selected' : ''}>Level: All</option>
            ${[1, 2, 3, 4, 5].map(d => `<option value="${d}" ${String(state.filters.difficulty) === String(d) ? 'selected' : ''}>Level ${d}</option>`).join('')}
          </select>
          <select class="select" id="lib-status">
            <option value="All" ${state.filters.status === 'All' ? 'selected' : ''}>Status: All</option>
            ${['Unread', 'Mastered', 'Bookmarked'].map(st => `<option value="${st}" ${state.filters.status === st ? 'selected' : ''}>${st}</option>`).join('')}
          </select>
        </div>
      ` : ''}

      <div class="library-split">
        <div class="problem-list-panel" id="lib-list-panel">
          ${renderLibraryListHtml(filtered, activeCase)}
        </div>
        <div id="lib-detail-wrap">
          ${renderCaseDetail(activeCase)}
        </div>
      </div>
    `;
  }

  // ==================== VIEW 4: GUIDED CASE COACH ====================
  function renderPractice() {
    const c = getCase(state.guided.caseId);
    const g = state.guided;
    const allCats = [...new Set(CASES.map(x => x.category))];

    const selectorHtml = `
      <div class="page-header">
        <div>
          <h1>Guided Case Coach</h1>
          <p>Active sparring one stage at a time — use <kbd class="keycap">←</kbd>/<kbd class="keycap">→</kbd> to step through stages 1–5.</p>
        </div>
      </div>
      <div class="card-flat" style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;flex:1 1 240px;min-width:0;">
          <strong style="font-size:0.9rem;">Active Case:</strong>
          <select class="select" id="guided-case-select" style="width:100%;max-width:420px;min-width:0;">
            ${CASES.map(p => `<option value="${esc(p.id)}" ${p.id === c.id ? 'selected' : ''}>[L${p.difficulty}] ${esc(p.title)} · ${esc(p.category)}</option>`).join('')}
          </select>
        </div>
        <div style="display:flex;gap:5px;flex-wrap:wrap;">
          <button type="button" class="btn btn-sm btn-primary" id="guided-rand-starter">Starter L1–2</button>
          <button type="button" class="btn btn-sm" id="guided-rand-rca">RCA</button>
          <button type="button" class="btn btn-sm" id="guided-rand-gtm">GTM</button>
          <button type="button" class="btn btn-sm" id="guided-rand-pm">Design/Metrics</button>
          <button type="button" class="btn btn-sm" id="guided-rand-cons">Consulting</button>
        </div>
      </div>
    `;

    const progressStepper = `
      <div class="editorial-tabs" style="margin-bottom:14px;">
        ${['1. Clarify', '2. Framework', '3. MECE Tree', '4. Diagnose & Draft', '5. Synthesis'].map((lbl, idx) => `
          <button type="button" class="tab-btn ${g.step === idx + 1 ? 'active' : ''}" data-guided-step="${idx + 1}">${lbl}</button>
        `).join('')}
      </div>
    `;

    let stepContent = '';
    if (g.step === 1) {
      stepContent = `
        <div class="card">
          <div class="pill pill-blue" style="margin-bottom:6px;">Stage 1 of 5 · Clarify Scope</div>
          <h3 style="margin:0 0 6px;font-size:1.06rem;">“${esc(c.prompt)}”</h3>
          <p style="font-size:0.91rem;color:var(--text-muted);margin:0 0 10px;">Ask clarifying questions before committing to any framework:</p>
          ${(c.clarifyingQuestions || []).map((cq, idx) => {
            const open = !!g.clarifyRevealed[idx];
            return `
              <div class="section-block" style="margin-bottom:8px;">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
                  <strong style="flex:1 1 200px;min-width:0;font-size:0.92rem;">“${esc(cq.q)}”</strong>
                  <button type="button" class="btn btn-sm ${open ? '' : 'btn-primary'}" data-clarify-idx="${idx}">${open ? 'Asked ✓' : 'Ask Interviewer'}</button>
                </div>
                ${open ? `
                  <div style="margin-top:6px;font-size:0.9rem;color:var(--accent-bright);">Interviewer: ${esc(cq.a)}</div>
                  <div style="font-size:0.86rem;color:var(--text-muted);margin-top:2px;">Why this matters: ${esc(cq.why)}</div>
                ` : ''}
              </div>
            `;
          }).join('')}
          <div style="margin-top:10px;text-align:right;">
            <button type="button" class="btn btn-primary" data-guided-step="2">Next: Pick Case Type →</button>
          </div>
        </div>
      `;
    } else if (g.step === 2) {
      const targetCat = (c.guidedPractice && c.guidedPractice.correctCategory) || c.category;
      stepContent = `
        <div class="card">
          <div class="pill pill-blue" style="margin-bottom:6px;">Stage 2 of 5 · Spot Case Category</div>
          <h3 style="margin:0 0 8px;font-size:1.06rem;">Which primary category fits “${esc(c.title)}”?</h3>
          <div class="grid-3" style="margin-top:8px;">
            ${allCats.map(cat => {
              let cls = 'quiz-opt';
              if (g.selectedCategory) {
                if (cat === targetCat) cls += ' correct';
                else if (cat === g.selectedCategory) cls += ' wrong';
              }
              return `<button type="button" class="${cls}" style="margin-bottom:0;" data-guided-cat="${esc(cat)}">${esc(cat)}</button>`;
            }).join('')}
          </div>
          ${g.selectedCategory ? `
            <div class="${g.selectedCategory === targetCat ? 'good-box' : 'bad-box'}" style="margin-top:10px;">
              <strong>${g.selectedCategory === targetCat ? 'Spot on!' : 'Primary Category: ' + esc(targetCat)}</strong>
              <div style="margin-top:4px;">Recommended Framework: <strong>${esc(c.frameworkUsed)}</strong></div>
              <div style="margin-top:4px;font-size:0.9rem;">${esc(c.strategyOverview)}</div>
            </div>
          ` : ''}
          <div style="margin-top:10px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;">
            <button type="button" class="btn" data-guided-step="1">← Back</button>
            <button type="button" class="btn btn-primary" data-guided-step="3">Next: Choose MECE Structure →</button>
          </div>
        </div>
      `;
    } else if (g.step === 3) {
      const opts = (c.guidedPractice && c.guidedPractice.structureOptions) || [];
      stepContent = `
        <div class="card">
          <div class="pill pill-blue" style="margin-bottom:6px;">Stage 3 of 5 · Choose Cleanest MECE Structure</div>
          <h3 style="margin:0 0 8px;font-size:1.06rem;">Pick the winning upfront issue tree:</h3>
          <div>
            ${opts.map((o, idx) => {
              let cls = 'quiz-opt';
              if (g.selectedStructIdx !== null) {
                if (o.correct) cls += ' correct';
                else if (idx === g.selectedStructIdx) cls += ' wrong';
              }
              return `<button type="button" class="${cls}" data-guided-struct="${idx}">${esc(o.label)}</button>`;
            }).join('')}
          </div>
          ${g.selectedStructIdx !== null && opts[g.selectedStructIdx] ? `
            <div class="${opts[g.selectedStructIdx].correct ? 'good-box' : 'bad-box'}" style="margin-top:8px;">
              ${esc(opts[g.selectedStructIdx].feedback)}
              <div class="formula-banner" style="margin-top:6px;">${esc(c.coreEquation)}</div>
            </div>
          ` : ''}
          <div style="margin-top:10px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;">
            <button type="button" class="btn" data-guided-step="2">← Back</button>
            <button type="button" class="btn btn-primary" data-guided-step="4">Next: Diagnose &amp; Draft →</button>
          </div>
        </div>
      `;
    } else if (g.step === 4) {
      const dq = (c.guidedPractice && c.guidedPractice.decisionQuiz) || null;
      stepContent = `
        <div class="card">
          <div class="pill pill-blue" style="margin-bottom:6px;">Stage 4 of 5 · Diagnostic Judgment &amp; Notes</div>
          ${dq ? `
            <div class="section-block" style="margin-bottom:10px;">
              <strong style="font-size:0.94rem;">Judgment Check: ${esc(dq.question)}</strong>
              <div style="margin-top:7px;">
                ${(dq.options || []).map((o, idx) => {
                  let cls = 'quiz-opt';
                  if (g.selectedQuizIdx !== null) {
                    if (o.correct) cls += ' correct';
                    else if (idx === g.selectedQuizIdx) cls += ' wrong';
                  }
                  return `<button type="button" class="${cls}" data-guided-quiz="${idx}">${esc(o.label)}</button>`;
                }).join('')}
              </div>
              ${g.selectedQuizIdx !== null && dq.options[g.selectedQuizIdx] ? `
                <div class="${dq.options[g.selectedQuizIdx].correct ? 'good-box' : 'bad-box'}" style="margin-top:6px;">
                  ${esc(dq.options[g.selectedQuizIdx].feedback)}
                </div>
              ` : ''}
            </div>
          ` : ''}
          <div class="section-block">
            <strong style="font-size:0.92rem;">Draft Your Top 2 Recommendations &amp; Guardrail Metrics:</strong>
            <textarea class="input" id="guided-notes-txt" rows="3" style="margin-top:6px;" placeholder="Write your P0 fix, North Star metric, and guardrail against side-effects...">${esc(g.notesInput)}</textarea>
          </div>
          <div style="margin-top:10px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;">
            <button type="button" class="btn" data-guided-step="3">← Back</button>
            <button type="button" class="btn btn-primary" data-guided-step="5">Next: Synthesis &amp; Debrief →</button>
          </div>
        </div>
      `;
    } else {
      const isMastered = !!state.masteredIds[c.id];
      const mg = c.metricsAndGuardrails || {};
      stepContent = `
        <div class="card">
          <div class="pill pill-green" style="margin-bottom:6px;">Stage 5 of 5 · Pyramid Synthesis &amp; Full Debrief</div>
          <div class="section-block" style="margin-bottom:9px;">
            <strong style="font-size:0.92rem;">Draft Your 30-Second Pyramid Summary (Recommendation first → 2–3 reasons → Risk/Guardrail):</strong>
            <textarea class="input" id="guided-synth-txt" rows="2" style="margin-top:5px;" placeholder="I recommend... because (1)... (2)... while guarding against...">${esc(g.synthInput)}</textarea>
          </div>
          <div class="good-box" style="margin-bottom:9px;">
            <strong>Model 30-Sec Pyramid Synthesis:</strong><br/>${esc(c.synthesisScript)}
          </div>
          <div class="bad-box" style="margin-bottom:9px;">
            <strong>Interviewer Trap to Avoid:</strong> ${esc(c.interviewerTrap)}
          </div>
          <div class="section-block" style="margin-bottom:9px;">
            <h3>Reference MECE Tree &amp; Metrics</h3>
            <div class="issue-tree-wrap">${renderTreeNode(c.tree)}</div>
            <div style="margin-top:8px;font-size:0.89rem;"><strong>North Star:</strong> ${esc(mg.northStar || '')} · <strong>Guardrails:</strong> ${(mg.guardrails || []).map(x => esc(x)).join(' | ')}</div>
          </div>
          <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;">
            <button type="button" class="btn" data-guided-step="4">← Back</button>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">
              <button type="button" class="btn ${isMastered ? 'btn-primary' : 'btn-secondary'}" data-toggle-master="${esc(c.id)}" aria-pressed="${isMastered}">
                ${isMastered ? '✓ Mastered' : '✓ Mark Mastered'}
              </button>
              <button type="button" class="btn btn-primary" id="guided-next-unmastered">Next Unsolved Case →</button>
            </div>
          </div>
        </div>
      `;
    }

    return `<div class="coach-stage">${selectorHtml + progressStepper + stepContent}</div>`;
  }

  // ==================== VIEW 5: MOCK STUDIO (TABBED INTERVIEWER CONSOLE) ====================
  function getMockPhaseLabel() {
    const elapsed = mockState.durationSec - mockState.timeLeft;
    const pct = mockState.durationSec ? (elapsed / mockState.durationSec) : 0;
    if (pct > 0.78) return 'Phase 4: Metrics, Guardrails & 30s Pitch';
    if (pct > 0.30) return 'Phase 3: Drill Down & Prioritize P0';
    if (pct > 0.12) return 'Phase 2: Build MECE Issue Tree';
    return 'Phase 1: Clarify Goal & Scope';
  }

  function formatMockPitchHtml() {
    const c = getCase(mockState.caseId);
    const p0s = mockState.buckets.filter(b => b.status === 'Priority P0').map(b => `${esc(b.title)}${b.note ? ' (' + esc(b.note) + ')' : ''}`);
    const exploring = mockState.buckets.slice(0, 2).map(b => esc(b.title));
    const focusText = p0s.length ? p0s.join(' and ') : (exploring.join(' and ') || 'core drivers');
    return `“For <strong>${esc(c ? c.company : 'the client')}</strong>, I recommend ${mockState.recsNote ? '<strong>' + esc(mockState.recsNote) + '</strong>' : 'targeting our prioritized P0 lever'} focused on <strong>${focusText}</strong>. We will measure success via <strong>${esc(mockState.northStarNote || 'our primary North Star metric')}</strong> while enforcing <strong>${esc(mockState.guardrailNote || 'strict margin, quality, and UX guardrails')}</strong>.”`;
  }

  function updateMockTimerUI() {
    const timerEl = document.getElementById('mock-timer-display');
    if (timerEl) {
      const mins = Math.floor(mockState.timeLeft / 60);
      const secs = String(mockState.timeLeft % 60).padStart(2, '0');
      timerEl.textContent = `${mins}:${secs}`;
      timerEl.style.color = mockState.timeLeft <= 60 ? 'var(--danger)' : '';
      timerEl.style.borderColor = mockState.timeLeft <= 60 ? 'var(--danger)' : '';
    }
    const phaseEl = document.getElementById('mock-phase-badge');
    if (phaseEl) phaseEl.textContent = getMockPhaseLabel();
    const startBtn = document.getElementById('mock-start-pause');
    if (startBtn) startBtn.textContent = mockState.running ? 'Pause (t)' : 'Start Timer (t)';
  }

  function updateMockPitchInPlace() {
    const el = document.getElementById('wb-pitch-box');
    if (el) el.innerHTML = formatMockPitchHtml();
  }

  function renderMock() {
    const c = getCase(mockState.caseId);
    const mins = Math.floor(mockState.timeLeft / 60);
    const secs = String(mockState.timeLeft % 60).padStart(2, '0');
    const wt = c.walkthrough || [];
    const shownWt = wt.slice(0, mockState.revealedWalkthroughCount);
    const rTab = state.mockRightTab || 'clarify';

    let rightTabBody = '';
    if (rTab === 'clarify') {
      rightTabBody = `
        <p style="font-size:0.89rem;color:var(--text-muted);margin:0 0 8px;">Ask opening questions to narrow metric, timeline, segment, and constraints:</p>
        <div style="display:flex;flex-direction:column;gap:5px;">
          ${(c.clarifyingQuestions || []).map((cq, idx) => {
            const asked = !!mockState.clarifiedIdx[idx];
            return `
              <div>
                <button type="button" class="btn btn-sm btn-block-left ${asked ? 'btn-secondary' : ''}" data-mock-clarify="${idx}">
                  ${asked ? '✓' : '?'} ${esc(cq.q)}
                </button>
                ${asked ? `<div style="font-size:0.89rem;color:var(--accent-bright);padding:4px 8px;">“${esc(cq.a)}”</div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else if (rTab === 'clues') {
      rightTabBody = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:8px;">
          <span style="font-size:0.89rem;color:var(--text-muted);">Reveal interviewer turns progressively (Shortcut: <kbd class="keycap">c</kbd>)</span>
          ${mockState.revealedWalkthroughCount < wt.length ? `<button type="button" class="btn btn-sm btn-primary" id="mock-next-clue-btn">Reveal Clue (${shownWt.length}/${wt.length}) →</button>` : '<span class="pill pill-green">All clues revealed</span>'}
        </div>
        ${shownWt.length ? renderConversationFeed(shownWt, { showToolbar: false, forceAll: true }) : '<div class="tip-box">Structure your MECE buckets on the left first, then reveal clues one step at a time.</div>'}
      `;
    } else if (rTab === 'curveball') {
      rightTabBody = `
        <p style="font-size:0.89rem;color:var(--text-muted);margin:0 0 8px;">Stress-test your structure with a sudden constraint from the interviewer:</p>
        <div class="bad-box" style="font-size:0.91rem;">
          <strong>Interviewer interrupts:</strong> “${esc((c.variations && c.variations[0]) ? c.variations[0].question : 'How would your recommendation change under half the budget?')}”
          <div style="margin-top:6px;font-size:0.88rem;color:var(--text-muted);"><strong>Coach Hint:</strong> ${esc((c.variations && c.variations[0]) ? c.variations[0].hint : 'Focus strictly on P0 high-impact low-effort fixes.')}</div>
        </div>
      `;
    } else {
      rightTabBody = `
        <div class="good-box" style="margin-bottom:9px;">
          <strong>Pyramid Synthesis:</strong> ${esc(c.synthesisScript)}
        </div>
        <div class="issue-tree-wrap">${renderTreeNode(c.tree)}</div>
      `;
    }

    return `
      <div class="page-header">
        <div>
          <h1>Mock Interview Studio</h1>
          <p>Press <kbd class="keycap">t</kbd> to start/pause timer, <kbd class="keycap">c</kbd> to pull next clue — structure out loud cleanly.</p>
        </div>
      </div>

      <div class="card" style="margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
          <div style="min-width:0;flex:1 1 260px;">
            <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap;margin-bottom:5px;">
              <span class="pill pill-purple">${esc(c.category)}</span>
              <span class="pill pill-blue">${esc(c.company)} · ${diffDots(c.difficulty)}</span>
              <span class="pill pill-warn" id="mock-phase-badge">${esc(getMockPhaseLabel())}</span>
            </div>
            <h2 style="margin:0;font-size:1.12rem;">“${esc(c.prompt)}”</h2>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
            <span class="timer-pill" id="mock-timer-display" style="${mockState.timeLeft <= 60 ? 'color:var(--danger);border-color:var(--danger);' : ''}">${mins}:${secs}</span>
            <button type="button" class="btn btn-primary btn-sm" id="mock-start-pause">${mockState.running ? 'Pause (t)' : 'Start Timer (t)'}</button>
            <button type="button" class="btn btn-sm" id="mock-reset-timer">Reset (${state.mockDurationMins || 25}m)</button>
            <button type="button" class="btn btn-sm btn-secondary" id="mock-random-btn">New Case</button>
          </div>
        </div>
      </div>

      <div class="grid-2" style="align-items:start;">
        <!-- Left: Interactive MECE Scratchpad -->
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:6px;">
            <h3 style="margin:0;font-size:1.02rem;">MECE Issue-Tree Scratchpad</h3>
            <button type="button" class="btn btn-sm btn-primary" id="wb-add-bucket">+ Branch</button>
          </div>
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px;">
            <span style="font-size:0.82rem;color:var(--text-dim);align-self:center;">Templates:</span>
            <button type="button" class="btn btn-sm" data-load-tpl="rca">RCA</button>
            <button type="button" class="btn btn-sm" data-load-tpl="gtm">GTM</button>
            <button type="button" class="btn btn-sm" data-load-tpl="design">Design</button>
            <button type="button" class="btn btn-sm" data-load-tpl="profitability">Profit</button>
            <button type="button" class="btn btn-sm" data-load-tpl="marketentry">Entry</button>
          </div>

          <div id="wb-buckets-container">
            ${mockState.buckets.map((b, idx) => `
              <div class="bucket-row" data-b-idx="${idx}">
                <input type="text" class="bucket-title-inp" data-b-idx="${idx}" value="${esc(b.title)}" placeholder="MECE Branch" />
                <select class="bucket-status-sel" data-b-idx="${idx}">
                  <option value="Exploring" ${b.status === 'Exploring' ? 'selected' : ''}>Exploring</option>
                  <option value="Priority P0" ${b.status === 'Priority P0' ? 'selected' : ''}>Priority P0</option>
                  <option value="Ruled Out" ${b.status === 'Ruled Out' ? 'selected' : ''}>Ruled Out</option>
                </select>
                <input type="text" class="bucket-note-inp" data-b-idx="${idx}" value="${esc(b.note)}" placeholder="Hypothesis / insight..." />
                ${mockState.buckets.length > 1 ? `<button type="button" class="btn btn-sm btn-danger b-del" data-b-idx="${idx}" style="padding:3px 7px;">✕</button>` : ''}
              </div>
            `).join('')}
          </div>

          <div class="section-block" style="margin-top:8px;">
            <strong class="block-label" style="font-size:0.89rem;">Final Recommendation &amp; Auto-Drafted Pitch</strong>
            <input type="text" class="input" id="mock-recs-input" style="margin-top:6px;" placeholder="P0 recommendation (e.g. launch doorstep cash refund + bonus wallet)..." value="${esc(mockState.recsNote)}" />
            <div class="grid-2" style="margin-top:6px;">
              <input type="text" class="input" id="mock-ns-input" placeholder="North Star metric..." value="${esc(mockState.northStarNote)}" />
              <input type="text" class="input" id="mock-gr-input" placeholder="Guardrail metric..." value="${esc(mockState.guardrailNote)}" />
            </div>
            <div class="script-box" style="margin-top:8px;font-size:0.89rem;" id="wb-pitch-box">${formatMockPitchHtml()}</div>
          </div>

          <div class="live-result-bar">
            <div>
              <div style="font-size:0.76rem;font-family:var(--mono);text-transform:uppercase;font-weight:600;color:var(--sage);">Mock Status</div>
              <div style="font-size:0.94rem;font-weight:600;">${mockState.completed ? 'Completed & Saved' : 'Active Practice'}</div>
            </div>
            <button type="button" class="btn btn-sm ${mockState.completed ? 'btn-secondary' : 'btn-primary'}" id="mock-complete-btn">${mockState.completed ? '✓ Completed' : 'Complete Mock'}</button>
          </div>
        </div>

        <!-- Right: 4-Tab Interviewer Console -->
        <div class="card">
          <div class="editorial-tabs" style="margin-bottom:12px;">
            <button type="button" class="tab-btn ${rTab === 'clarify' ? 'active' : ''}" data-mock-rtab="clarify">1. Clarify</button>
            <button type="button" class="tab-btn ${rTab === 'clues' ? 'active' : ''}" data-mock-rtab="clues">2. Clues (${shownWt.length}/${wt.length})</button>
            <button type="button" class="tab-btn ${rTab === 'curveball' ? 'active' : ''}" data-mock-rtab="curveball">3. Curveball</button>
            <button type="button" class="tab-btn ${rTab === 'reference' ? 'active' : ''}" data-mock-rtab="reference">4. Reference</button>
          </div>
          ${rightTabBody}
        </div>
      </div>
    `;
  }

  // ==================== VIEW 6: MEMORIZE & REFERENCE ====================
  function renderCheatSheetCards(qText) {
    const q = (qText || '').trim().toLowerCase();
    const cardsHtml = (REF.cheatSheetSections || []).map(sec => {
      const items = sec.items.filter(it => !q || `${it.label} ${it.value} ${it.note}`.toLowerCase().includes(q));
      if (!items.length) return '';
      return `
        <div class="card">
          <h3 style="margin:0 0 2px;font-size:1.04rem;">${esc(sec.title)}</h3>
          <div style="font-size:0.86rem;color:var(--text-muted);margin-bottom:8px;">${esc(sec.subtitle)}</div>
          ${items.map(it => `
            <div class="cs-item">
              <div>
                <div class="cs-label">${esc(it.label)}</div>
                <div class="cs-note">${esc(it.note)}</div>
              </div>
              <div class="cs-val">${esc(it.value)}</div>
            </div>
          `).join('')}
        </div>
      `;
    }).join('');
    return cardsHtml || `<div class="card-flat" style="grid-column:1/-1;">No items match “${esc(qText)}”.</div>`;
  }

  function renderPrimersAndFlowsHtml(qText) {
    const q = (qText || '').trim().toLowerCase();
    const sub = state.primersSubTab || 'primers';
    const primers = (REF.industryPrimers || []).filter(p => !q || `${p.industry} ${p.valueChain} ${p.revenueDrivers} ${p.costDrivers} ${p.keyKPIs.join(' ')} ${p.caseTwists}`.toLowerCase().includes(q));
    const flows = (REF.userFlows || []).filter(f => !q || `${f.app} ${f.sector} ${f.goal} ${f.steps.join(' ')}`.toLowerCase().includes(q));

    if (sub === 'flows') {
      return `
        <div class="grid-2">
          ${flows.map(f => `
            <div class="card">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:5px;">
                <strong style="font-size:1rem;">${esc(f.app)}</strong>
                <span class="pill pill-purple">${esc(f.sector)}</span>
              </div>
              <div style="font-size:0.88rem;color:var(--text-muted);margin-bottom:5px;"><strong>Goal:</strong> ${esc(f.goal)}</div>
              <div class="flow-strip">
                ${f.steps.map((st, idx) => `<span class="flow-step">${esc(st)}</span>${idx < f.steps.length - 1 ? '<span class="flow-arrow">→</span>' : ''}`).join('')}
              </div>
              <div style="font-size:0.86rem;margin-top:6px;"><strong>Drop-Offs:</strong> ${f.keyDropOffPoints.map(x => esc(x)).join(' · ')}</div>
              <div style="font-size:0.86rem;color:var(--accent-bright);margin-top:3px;"><strong>Monetization:</strong> ${f.monetizationTouchpoints.map(x => esc(x)).join(' · ')}</div>
            </div>
          `).join('') || '<div class="card-flat">No matching app user flows.</div>'}
        </div>
      `;
    }

    return `
      <div class="grid-2">
        ${primers.map(p => `
          <div class="card">
            <strong style="font-size:1.02rem;color:var(--accent-bright);">${esc(p.industry)}</strong>
            <div style="font-size:0.88rem;margin:5px 0;"><strong>Value Chain:</strong> <span style="color:var(--text-muted);">${esc(p.valueChain)}</span></div>
            <div style="font-size:0.88rem;margin:4px 0;"><strong>Revenue Drivers:</strong> <span style="color:var(--text-muted);">${esc(p.revenueDrivers)}</span></div>
            <div style="font-size:0.88rem;margin:4px 0;"><strong>Cost Drivers:</strong> <span style="color:var(--text-muted);">${esc(p.costDrivers)}</span></div>
            <div style="display:flex;flex-wrap:wrap;gap:4px;margin:6px 0;">
              ${(p.keyKPIs || []).map(k => `<span class="pill pill-blue">${esc(k)}</span>`).join('')}
            </div>
            <div class="tip-box tip-box-green"><strong>Case Twist:</strong> ${esc(p.caseTwists)}</div>
          </div>
        `).join('') || '<div class="card-flat">No matching industry primers.</div>'}
      </div>
    `;
  }

  function renderDrillOptionsHtml(qObj) {
    if (!qObj) return '';
    const letters = ['A', 'B', 'C', 'D'];
    return qObj.options.map((opt, idx) => `
      <button type="button" class="quiz-opt" data-drill-opt="${idx}">
        <span>${esc(opt)}</span>
        <span class="drill-key-hint">${letters[idx] || idx + 1}</span>
      </button>
    `).join('');
  }

  function renderDrillReviewListHtml() {
    const history = drillState.history || [];
    if (!history.length) return '<div style="font-size:0.89rem;color:var(--text-muted);padding:6px 2px;">No questions answered before time ran out.</div>';
    const filter = drillState.reviewFilter || 'all';
    const filtered = history.filter(item => filter === 'wrong' ? !item.isCorrect : filter === 'correct' ? item.isCorrect : true);
    if (!filtered.length) return '<div style="font-size:0.89rem;color:var(--text-muted);padding:6px 2px;">No items in this filter.</div>';
    return filtered.map(item => `
      <div class="drill-review-item ${item.isCorrect ? 'is-correct' : 'is-wrong'}">
        <div class="drill-review-head">
          <div class="drill-review-q">Q${item.num}. ${esc(item.q)}</div>
          <span class="pill ${item.isCorrect ? 'pill-green' : 'pill-danger'}">${item.isCorrect ? `+${item.pts} pts` : 'Wrong'}</span>
        </div>
        <div class="drill-review-answers">
          <span>Your Answer: <span class="${item.isCorrect ? 'drill-ans-right' : 'drill-ans-wrong'}">${esc(item.chosenText)}</span></span>
          ${!item.isCorrect ? `<span>Correct: <span class="drill-ans-right">${esc(item.correctText)}</span></span>` : ''}
        </div>
        <div class="drill-review-exp">${esc(item.exp)}</div>
      </div>
    `).join('');
  }

  function renderMemorize() {
    const tab = state.memorizeTab || 'cheatsheet';
    const tabsHtml = `
      <div class="page-header">
        <div>
          <h1>Memorize &amp; Rapid Reference</h1>
          <p>Cheat sheets, 20 Industry Primers, 8 App User Flows, 60 Flashcards, and 60s Reflex Drills.</p>
        </div>
      </div>
      <div class="editorial-tabs">
        <button type="button" class="tab-btn ${tab === 'cheatsheet' ? 'active' : ''}" data-mem-tab="cheatsheet">Cheat Sheet</button>
        <button type="button" class="tab-btn ${tab === 'primers' ? 'active' : ''}" data-mem-tab="primers">Industry &amp; Flows</button>
        <button type="button" class="tab-btn ${tab === 'flashcards' ? 'active' : ''}" data-mem-tab="flashcards">Flashcards (${(REF.flashcards || []).length})</button>
        <button type="button" class="tab-btn ${tab === 'drill' ? 'active' : ''}" data-mem-tab="drill">60s Reflex Drill</button>
      </div>
    `;

    let body = '';
    if (tab === 'cheatsheet') {
      body = `
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;" class="no-print">
          <input type="text" class="input" id="cs-search" style="width:100%;max-width:320px;flex:1 1 200px;min-width:0;" placeholder="Filter formulas, RCA, GTM, A/B..." value="${esc(cheatSearch)}" />
          <button type="button" class="btn btn-secondary btn-sm" id="print-cs-btn">Print Cheat Sheet</button>
        </div>
        <div class="grid-2" id="cs-grid-container">${renderCheatSheetCards(cheatSearch)}</div>
      `;
    } else if (tab === 'primers') {
      const sub = state.primersSubTab || 'primers';
      body = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:12px;">
          <div class="sub-seg">
            <button type="button" class="sub-seg-btn ${sub === 'primers' ? 'active' : ''}" data-primer-sub="primers">Industry Primers (${(REF.industryPrimers || []).length})</button>
            <button type="button" class="sub-seg-btn ${sub === 'flows' ? 'active' : ''}" data-primer-sub="flows">App User Flows (${(REF.userFlows || []).length})</button>
          </div>
          <input type="text" class="input" id="primer-search" style="width:100%;max-width:300px;" placeholder="Filter industries or apps..." value="${esc(primerSearch)}" />
        </div>
        <div id="primers-flows-container">${renderPrimersAndFlowsHtml(primerSearch)}</div>
      `;
    } else if (tab === 'flashcards') {
      const cards = REF.flashcards || [];
      const cats = ['All', ...new Set(cards.map(c => c.category))];
      const filtered = cards.filter(c => {
        if (flashState.category !== 'All' && c.category !== flashState.category) return false;
        if (flashState.onlyReview && state.flashcardStatus[c.id] === 'mastered') return false;
        return true;
      });
      if (flashState.index >= filtered.length) flashState.index = 0;
      const card = filtered[flashState.index];
      const cardStatus = card ? state.flashcardStatus[card.id] : null;
      const masteredTotal = cards.filter(c => state.flashcardStatus[c.id] === 'mastered').length;

      body = `
        <div class="flashcard-stage">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
              <select class="select" id="fc-cat" style="width:150px;max-width:100%;">
                ${cats.map(c => `<option ${flashState.category === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}
              </select>
              <label style="font-size:0.9rem;display:flex;align-items:center;gap:5px;cursor:pointer;">
                <input type="checkbox" id="fc-only-review" ${flashState.onlyReview ? 'checked' : ''} /> Needs Review Only
              </label>
            </div>
            <span class="pill pill-green">${masteredTotal}/${cards.length} Mastered</span>
          </div>
          ${card ? `
            <div class="flashcard" id="fc-card-box">
              <div class="flashcard-header">
                <span class="flashcard-face-label">${flashState.flipped ? 'ANSWER' : 'QUESTION'} · ${flashState.index + 1}/${filtered.length}</span>
                <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap;">
                  ${cardStatus === 'mastered' ? '<span class="pill pill-green">✓ Mastered</span>' : cardStatus === 'review' ? '<span class="pill pill-warn">Needs Review</span>' : ''}
                  <span class="pill pill-blue">${esc(card.category)}</span>
                </div>
              </div>
              <div class="flashcard-body">
                ${!flashState.flipped ? `
                  <h2 style="margin:0;font-size:1.22rem;max-width:520px;width:100%;">${esc(card.front)}</h2>
                  <div style="margin-top:6px;font-size:0.86rem;color:var(--text-dim);">Click card or press <kbd class="keycap">Space</kbd> / <kbd class="keycap">f</kbd> to flip</div>
                ` : `
                  <div style="font-size:1.12rem;font-weight:600;color:var(--accent-bright);white-space:pre-line;max-width:520px;width:100%;">${esc(card.back)}</div>
                  <div class="tip-box" style="max-width:520px;text-align:left;">${esc(card.tip)}</div>
                `}
              </div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;gap:8px;flex-wrap:wrap;">
              <button type="button" class="btn btn-sm" id="fc-prev" title="ArrowLeft">← Prev</button>
              <div style="display:flex;gap:6px;flex-wrap:wrap;">
                <button type="button" class="btn btn-sm btn-warn" id="fc-mark-review" title="Shortcut: r">Need Review (r)</button>
                <button type="button" class="btn btn-sm btn-primary" id="fc-mark-mastered" title="Shortcut: g">Got It (g)</button>
              </div>
              <button type="button" class="btn btn-sm" id="fc-next" title="ArrowRight">Next →</button>
            </div>
          ` : '<div class="card">All cards in this filter are mastered! Uncheck "Needs Review Only" to browse all.</div>'}
        </div>
      `;
    } else {
      const qObj = drillState.questions[drillState.currentIdx];
      const accPct = drillState.answered ? Math.round((drillState.correctCount / drillState.answered) * 100) : 0;
      const wrongCount = Math.max(0, drillState.answered - drillState.correctCount);
      const rf = drillState.reviewFilter || 'all';
      body = `
        <div class="drill-stage">
          <div class="card" id="drill-card-box">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
              <div>
                <h3 style="margin:0;font-size:1.05rem;">60-Second Case Reflex Drill</h3>
                <div style="font-size:0.89rem;color:var(--text-muted);">Fast pattern training across RCA, GTM, Product &amp; Consulting — keys <kbd class="keycap">A</kbd> <kbd class="keycap">B</kbd> <kbd class="keycap">C</kbd> <kbd class="keycap">D</kbd>.</div>
              </div>
              <span class="pill pill-purple">Best: ${state.bestDrillScore} pts</span>
            </div>

            ${!drillState.active ? `
              <div style="text-align:center;padding:10px 6px;">
                ${drillState.completed ? `
                  <div class="good-box" style="margin-bottom:10px;text-align:left;">
                    <h2 style="margin:0 0 4px;font-size:1.14rem;">Time’s Up — Score: ${drillState.score} pts ${drillState.beatBest ? '(New Best!)' : ''}</h2>
                    <div>Answered <strong>${drillState.answered}</strong> · <span style="color:var(--sage);font-weight:600;">${drillState.correctCount} correct</span> · <span style="color:var(--danger);font-weight:600;">${wrongCount} wrong</span> · ${accPct}% accuracy · Best Streak: ${drillState.bestStreak}</div>
                  </div>
                ` : ''}
                <button type="button" class="btn btn-primary" id="start-drill-btn" style="padding:7px 18px;">${drillState.completed ? 'Play Again' : 'Start 60-Second Drill'}</button>
                <p style="margin:8px auto 0;max-width:460px;font-size:0.86rem;color:var(--text-muted);">${drillState.completed ? 'Review every question and explanation below before switching views.' : 'Shuffled prompts every round. Answer with clicks or keys A–D (or 1–4); explanations unlock after 60s.'}</p>
              </div>
              ${drillState.completed ? `
                <div class="drill-review-section" id="drill-review-section">
                  <div class="drill-review-toolbar">
                    <strong style="font-size:0.95rem;">Round Review (${drillState.history.length})</strong>
                    <div class="drill-review-filters">
                      <button type="button" class="btn btn-sm ${rf === 'all' ? 'btn-primary' : ''}" data-drill-filter="all">All (${drillState.history.length})</button>
                      <button type="button" class="btn btn-sm ${rf === 'wrong' ? 'btn-primary' : ''}" data-drill-filter="wrong">Wrong (${wrongCount})</button>
                      <button type="button" class="btn btn-sm ${rf === 'correct' ? 'btn-primary' : ''}" data-drill-filter="correct">Correct (${drillState.correctCount})</button>
                    </div>
                  </div>
                  <div class="drill-review-list" id="drill-review-list">
                    ${renderDrillReviewListHtml()}
                  </div>
                </div>
              ` : ''}
            ` : `
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:10px;">
                <span class="timer-pill" id="drill-timer-pill" style="${drillState.timeLeft <= 10 ? 'color:var(--danger);border-color:var(--danger);' : ''}">${drillState.timeLeft}s</span>
                <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap;">
                  <span class="pill pill-green" id="drill-score-pill">Score: ${drillState.score}</span>
                  <span class="pill pill-warn" id="drill-streak-pill">Streak: ${drillState.streak}</span>
                  <span class="pill" id="drill-count-pill">Q: ${drillState.answered}</span>
                  <button type="button" class="btn btn-sm btn-danger" id="quit-drill-btn">Quit</button>
                </div>
              </div>
              ${qObj ? `
                <div class="section-block">
                  <div id="drill-question-text" style="font-size:1.02rem;font-weight:600;margin-bottom:8px;">${esc(qObj.q)}</div>
                  <div class="drill-feedback-slot" id="drill-feedback-slot">Press keys A–D (or 1–4) — explanations unlock after 60s</div>
                  <div class="drill-options-grid" id="drill-options-grid">
                    ${renderDrillOptionsHtml(qObj)}
                  </div>
                </div>
              ` : ''}
            `}
          </div>
        </div>
      `;
    }

    return tabsHtml + body;
  }

  // ==================== COMMAND PALETTE (CTRL+K) ====================
  function getCommandEntries(query) {
    const q = (query || '').trim().toLowerCase();
    const actions = [
      { kind: 'Action', title: state.sidebarCollapsed ? 'Expand Sidebar Rail' : 'Collapse Sidebar Rail', hint: '[ or Ctrl+B', run: () => toggleSidebar() },
      { kind: 'Action', title: `Switch Palette (${state.theme === 'midnight' ? 'Warm Paper' : 'Midnight Slate'})`, hint: 'Shift+T', run: () => toggleTheme() },
      { kind: 'Action', title: state.focusMode ? 'Exit Zen Reading Mode' : 'Enter Zen Reading Mode', hint: 'Shift+D', run: () => toggleFocusMode() },
      { kind: 'View', title: '4-Day Sprint Dashboard', hint: 'Alt+1', run: () => setView('dashboard') },
      { kind: 'View', title: 'Approach Guide & Frameworks', hint: 'Alt+2', run: () => setView('academy') },
      { kind: 'View', title: 'Memorize, Primers & 60s Drill', hint: 'Alt+3', run: () => setView('memorize') },
      { kind: 'View', title: `Case Dossiers Library (${CASES.length})`, hint: 'Alt+4', run: () => setView('library') },
      { kind: 'View', title: 'Guided 5-Step Case Coach', hint: 'Alt+5', run: () => setView('practice') },
      { kind: 'View', title: 'Timed Mock Interview Studio', hint: 'Alt+6', run: () => setView('mock') },
      { kind: 'Action', title: 'Start 60-Second Case Reflex Drill', hint: 'Drill', run: () => setView('memorize', { memorizeTab: 'drill' }) },
      { kind: 'Action', title: 'Open Random Starter Case (Guided)', hint: 'Starter', run: () => {
        const pool = CASES.filter(c => c.isStarter);
        const pick = (pool.length ? pool : CASES)[Math.floor(Math.random() * (pool.length || CASES.length))];
        if (pick) { startGuidedCase(pick.id); setView('practice'); }
      }}
    ];

    const matchedActions = actions.filter(a => !q || `${a.kind} ${a.title} ${a.hint}`.toLowerCase().includes(q));
    const matchedCases = CASES
      .filter(c => !q || `${c.title} ${c.company} ${c.category} ${c.track}`.toLowerCase().includes(q))
      .slice(0, q ? 12 : 6)
      .map(c => ({
        kind: c.category,
        title: c.title,
        hint: `${c.company} · L${c.difficulty}`,
        run: () => setView('library', { caseId: c.id })
      }));

    return [...matchedActions, ...matchedCases].slice(0, 14);
  }

  let currentCmdEntries = [];
  function renderCommandResults(query) {
    const resEl = document.getElementById('cmd-results');
    if (!resEl) return;
    currentCmdEntries = getCommandEntries(query);
    if (cmdActiveIdx >= currentCmdEntries.length) cmdActiveIdx = 0;
    if (!currentCmdEntries.length) {
      resEl.innerHTML = '<div style="padding:12px;color:var(--text-dim);font-size:0.9rem;">No matching commands or case dossiers.</div>';
      return;
    }
    resEl.innerHTML = currentCmdEntries.map((item, i) => `
      <button type="button" class="cmd-item ${i === cmdActiveIdx ? 'active' : ''}" data-cmd-idx="${i}">
        <span style="min-width:0;display:flex;align-items:center;gap:8px;">
          <span class="pill">${esc(item.kind)}</span>
          <span style="font-weight:500;">${esc(item.title)}</span>
        </span>
        <span class="cmd-item-sub">${esc(item.hint)}</span>
      </button>
    `).join('');
    resEl.querySelectorAll('[data-cmd-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const entry = currentCmdEntries[Number(btn.dataset.cmdIdx)];
        closeCommandPalette();
        if (entry) entry.run();
      });
    });
  }

  function openCommandPalette() {
    const modal = document.getElementById('cmd-modal');
    const inp = document.getElementById('cmd-input');
    if (!modal || !inp) return;
    modal.classList.add('open');
    cmdActiveIdx = 0;
    inp.value = '';
    renderCommandResults('');
    setTimeout(() => inp.focus(), 10);
  }

  function closeCommandPalette() {
    const modal = document.getElementById('cmd-modal');
    if (modal) modal.classList.remove('open');
  }

  // ==================== MAIN RENDER & EVENT WIRING ====================
  function render() {
    applyTheme();
    applySidebarState();
    updateSidebarStats();
    syncNavUI();
    const container = document.getElementById('main-content');
    if (!container) return;

    if (state.view === 'dashboard') container.innerHTML = renderDashboard();
    else if (state.view === 'academy') container.innerHTML = renderAcademy();
    else if (state.view === 'library') container.innerHTML = renderLibrary();
    else if (state.view === 'practice') container.innerHTML = renderPractice();
    else if (state.view === 'mock') container.innerHTML = renderMock();
    else if (state.view === 'memorize') container.innerHTML = renderMemorize();

    attachDynamicListeners();
  }

  function attachDynamicListeners() {
    document.querySelectorAll('[data-toggle-stage]').forEach(btn => {
      btn.addEventListener('click', () => {
        const map = ensureOpenStages();
        const k = btn.dataset.toggleStage;
        map[k] = !map[k];
        saveState();
        render();
      });
    });

    document.querySelectorAll('[data-roadmap-task]').forEach(cb => {
      cb.addEventListener('change', (e) => {
        state.roadmapDone[e.target.dataset.roadmapTask] = e.target.checked;
        saveState();
        render();
      });
    });

    document.querySelectorAll('[data-jump-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.dataset.jumpView;
        const t = btn.dataset.jumpTab;
        setView(v, {
          academyTab: v === 'academy' && t ? t : undefined,
          memorizeTab: v === 'memorize' && t ? t : undefined
        });
      });
    });

    const dashToggleStarters = document.getElementById('dash-toggle-starters-btn');
    if (dashToggleStarters) {
      dashToggleStarters.addEventListener('click', () => {
        state.dashShowAllStarters = !state.dashShowAllStarters;
        saveState();
        render();
      });
    }

    const dashStBtn = document.getElementById('dash-view-starters-btn');
    if (dashStBtn) {
      dashStBtn.addEventListener('click', () => setView('library', { trackFilter: 'Starter' }));
    }

    document.querySelectorAll('[data-open-case]').forEach(btn => {
      btn.addEventListener('click', () => setView('library', { caseId: btn.dataset.openCase }));
    });
    document.querySelectorAll('[data-practice-id]').forEach(btn => {
      btn.addEventListener('click', () => { startGuidedCase(btn.dataset.practiceId); setView('practice'); });
    });

    function attachLibraryDetailListeners(root = document) {
      root.querySelectorAll('[data-practice-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          startGuidedCase(btn.dataset.practiceId);
          setView('practice');
        });
      });

      root.querySelectorAll('[data-mock-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          initMockCase(btn.dataset.mockId);
          setView('mock');
        });
      });

      root.querySelectorAll('[data-reader-mode]').forEach(btn => {
        btn.addEventListener('click', () => {
          const mode = btn.dataset.readerMode;
          state.caseReaderMode = mode;
          state.progressiveMode = mode === 'step';
          state.studyRevealStep = mode === 'step' ? 1 : mode === 'brief' ? 3 : 99;
          saveState();
          renderCaseDetailInPlace();
        });
      });

      root.querySelectorAll('[data-toggle-convo]').forEach(btn => {
        btn.addEventListener('click', () => {
          const kind = btn.dataset.toggleConvo;
          if (kind === 'reasoning') state.showConvoReasoning = state.showConvoReasoning === false;
          else if (kind === 'causes') state.showConvoCauses = state.showConvoCauses === false;
          else if (kind === 'skim') state.convoHighlightsOnly = !state.convoHighlightsOnly;
          saveState();
          renderCaseDetailInPlace();
        });
      });

      const revNextBtn = root.querySelector('#reveal-next-step-btn');
      if (revNextBtn) {
        revNextBtn.addEventListener('click', () => {
          state.studyRevealStep = Math.min(6, (state.studyRevealStep || 1) + 1);
          saveState();
          renderCaseDetailInPlace();
        });
      }

      root.querySelectorAll('[data-toggle-master]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.toggleMaster;
          state.masteredIds[id] = !state.masteredIds[id];
          saveState();
          if (state.view === 'library') {
            updateSidebarStats();
            updateLibraryResults(true);
          } else {
            render();
          }
        });
      });

      root.querySelectorAll('[data-toggle-bookmark]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.toggleBookmark;
          state.bookmarkedIds[id] = !state.bookmarkedIds[id];
          saveState();
          if (state.view === 'library') {
            updateSidebarStats();
            updateLibraryResults(true);
          } else {
            render();
          }
        });
      });
    }

    function syncLibraryListHeight() {
      const listPanel = document.getElementById('lib-list-panel');
      const detailWrap = document.getElementById('lib-detail-wrap');
      if (!listPanel || !detailWrap) return;
      if (window.innerWidth <= 980) {
        listPanel.style.maxHeight = '';
        listPanel.style.removeProperty('--lib-sticky-top');
        return;
      }
      const topbar = document.querySelector('.topbar');
      const stickyTop = (topbar ? Math.ceil(topbar.getBoundingClientRect().height) : 44) + 12;
      listPanel.style.setProperty('--lib-sticky-top', `${stickyTop}px`);
      const viewportCap = Math.max(220, window.innerHeight - stickyTop - 16);
      const rightH = Math.ceil(detailWrap.getBoundingClientRect().height);
      const hasItems = !!listPanel.querySelector('.problem-list-item');
      if (rightH > 0) {
        const targetMax = hasItems
          ? (rightH < 180 ? Math.min(viewportCap, Math.max(120, rightH)) : Math.max(180, Math.min(viewportCap, rightH)))
          : Math.min(viewportCap, Math.max(80, rightH));
        listPanel.style.maxHeight = `${targetMax}px`;
      } else {
        listPanel.style.maxHeight = `${viewportCap}px`;
      }
    }

    function observeLibraryDetailHeight() {
      if (libResizeObserver) {
        libResizeObserver.disconnect();
        libResizeObserver = null;
      }
      syncLibraryListHeight();
      const detailWrap = document.getElementById('lib-detail-wrap');
      if (typeof ResizeObserver === 'function' && detailWrap) {
        libResizeObserver = new ResizeObserver(() => syncLibraryListHeight());
        libResizeObserver.observe(detailWrap);
      }
    }

    function renderCaseDetailInPlace() {
      const wrap = document.getElementById('lib-detail-wrap');
      if (!wrap) return;
      const filtered = getFilteredCases();
      const activeCase = filtered.find(c => c.id === state.selectedCaseId) || filtered[0] || null;
      wrap.innerHTML = renderCaseDetail(activeCase);
      attachLibraryDetailListeners(wrap);
      syncLibraryListHeight();
    }
    window.__cmRenderCaseDetailInPlace = renderCaseDetailInPlace;

    function bindLibraryListClicks() {
      document.querySelectorAll('[data-select-case]').forEach(el => {
        el.addEventListener('click', () => {
          state.selectedCaseId = el.dataset.selectCase;
          state.studyRevealStep = (state.caseReaderMode === 'step') ? 1 : (state.caseReaderMode === 'brief' ? 3 : 99);
          saveState();
          document.querySelectorAll('#lib-list-panel .problem-list-item.selected').forEach(x => x.classList.remove('selected'));
          el.classList.add('selected');
          renderCaseDetailInPlace();
          if (window.innerWidth > 980) {
            const detailWrap = document.getElementById('lib-detail-wrap');
            const topbar = document.querySelector('.topbar');
            const stickyTop = (topbar ? Math.ceil(topbar.getBoundingClientRect().height) : 48) + 12;
            if (detailWrap && detailWrap.getBoundingClientRect().top < stickyTop) {
              window.scrollTo({ top: Math.max(0, window.scrollY + detailWrap.getBoundingClientRect().top - stickyTop), behavior: 'smooth' });
            }
          }
        });
      });
    }

    function updateLibraryResults(forceDetail = false) {
      const listPanel = document.getElementById('lib-list-panel');
      const countEl = document.getElementById('lib-count-text');
      const detailWrap = document.getElementById('lib-detail-wrap');
      if (!listPanel || !detailWrap) return;

      const prevSelectedId = state.selectedCaseId;
      const prevScrollTop = listPanel.scrollTop;
      const filtered = getFilteredCases();
      if (!filtered.some(c => c.id === state.selectedCaseId)) {
        state.selectedCaseId = filtered[0] ? filtered[0].id : null;
      }
      const activeCase = filtered.find(c => c.id === state.selectedCaseId) || filtered[0] || null;

      if (countEl) countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of ${CASES.length}`;
      listPanel.innerHTML = renderLibraryListHtml(filtered, activeCase);
      bindLibraryListClicks();
      if (activeCase && prevSelectedId === activeCase.id) {
        listPanel.scrollTop = prevScrollTop;
      }
      if (forceDetail || prevSelectedId !== (activeCase && activeCase.id)) {
        detailWrap.innerHTML = renderCaseDetail(activeCase);
        attachLibraryDetailListeners(detailWrap);
      }
      syncLibraryListHeight();
    }
    window.__cmUpdateLibraryResults = updateLibraryResults;
    window.__cmSyncLibraryListHeight = syncLibraryListHeight;

    attachLibraryDetailListeners(document);
    bindLibraryListClicks();
    if (state.view === 'library') observeLibraryDetailHeight();

    // Academy listeners
    document.querySelectorAll('[data-acad-tab]').forEach(btn => {
      btn.addEventListener('click', () => { state.academyTab = btn.dataset.acadTab; saveState(); render(); });
    });
    document.querySelectorAll('[data-acad-step]').forEach(btn => {
      btn.addEventListener('click', () => { state.academyFocusStep = Number(btn.dataset.acadStep); saveState(); render(); });
    });
    const acadToggleAll = document.getElementById('acad-toggle-all-steps');
    if (acadToggleAll) {
      acadToggleAll.addEventListener('click', () => { state.academyShowAllSteps = !state.academyShowAllSteps; saveState(); render(); });
    }
    const acadPrev = document.getElementById('acad-prev-step');
    if (acadPrev) {
      acadPrev.addEventListener('click', () => { state.academyFocusStep = Math.max(0, (state.academyFocusStep || 0) - 1); saveState(); render(); });
    }
    const acadNext = document.getElementById('acad-next-step');
    if (acadNext) {
      const maxStep = Math.max(0, (CURRICULUM.sixSteps || []).length - 1);
      acadNext.addEventListener('click', () => { state.academyFocusStep = Math.min(maxStep, (state.academyFocusStep || 0) + 1); saveState(); render(); });
    }
    document.querySelectorAll('[data-wiz-sub]').forEach(btn => {
      btn.addEventListener('click', () => { state.wizardSubTab = btn.dataset.wizSub; saveState(); render(); });
    });
    document.querySelectorAll('[data-wiz-q]').forEach(btn => {
      btn.addEventListener('click', () => { wizardAnswers[btn.dataset.wizQ] = btn.dataset.wizV; render(); });
    });
    document.querySelectorAll('[data-sc-id]').forEach(btn => {
      btn.addEventListener('click', () => { state.scenarioAnswers[btn.dataset.scId] = Number(btn.dataset.scOpt); saveState(); render(); });
    });

    // Library filters
    const bindFilter = (id, key) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', (e) => {
          state.filters[key] = e.target.value;
          if (id === 'lib-search') {
            saveStateDebounced();
            const gs = document.getElementById('global-search');
            if (gs) gs.value = e.target.value;
            if (typeof window.__cmUpdateLibraryResults === 'function') window.__cmUpdateLibraryResults(false);
          } else {
            saveState();
            if (typeof window.__cmUpdateLibraryResults === 'function') window.__cmUpdateLibraryResults(true);
          }
        });
      }
    };
    bindFilter('lib-search', 'search');
    bindFilter('lib-track', 'track');
    bindFilter('lib-category', 'category');
    bindFilter('lib-diff', 'difficulty');
    bindFilter('lib-status', 'status');

    const moreFiltersBtn = document.getElementById('toggle-more-filters-btn');
    if (moreFiltersBtn) {
      moreFiltersBtn.addEventListener('click', () => {
        state.libMoreFiltersOpen = !state.libMoreFiltersOpen;
        saveState();
        render();
      });
    }

    const clearBtn = document.getElementById('clear-filters-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.filters = { ...defaultState.filters };
        const gs = document.getElementById('global-search'); if (gs) gs.value = '';
        ['lib-search', 'lib-track', 'lib-category', 'lib-diff', 'lib-status'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = id === 'lib-search' ? '' : 'All';
        });
        saveState();
        if (typeof window.__cmUpdateLibraryResults === 'function') window.__cmUpdateLibraryResults(true);
      });
    }

    // Guided Coach listeners
    const gcSel = document.getElementById('guided-case-select');
    if (gcSel) gcSel.addEventListener('change', (e) => { startGuidedCase(e.target.value); render(); });

    const pickRandomWhere = (pred) => {
      const pool = CASES.filter(pred);
      const alt = pool.length > 1 ? pool.filter(x => x.id !== state.guided.caseId) : pool;
      const pick = alt[Math.floor(Math.random() * alt.length)] || CASES[0];
      if (pick) { startGuidedCase(pick.id); render(); }
    };
    const rSt = document.getElementById('guided-rand-starter');
    const rRca = document.getElementById('guided-rand-rca');
    const rGtm = document.getElementById('guided-rand-gtm');
    const rPm = document.getElementById('guided-rand-pm');
    const rCons = document.getElementById('guided-rand-cons');
    if (rSt) rSt.addEventListener('click', () => pickRandomWhere(c => c.isStarter || c.difficulty <= 2));
    if (rRca) rRca.addEventListener('click', () => pickRandomWhere(c => c.category === 'RCA'));
    if (rGtm) rGtm.addEventListener('click', () => pickRandomWhere(c => c.category === 'GTM'));
    if (rPm) rPm.addEventListener('click', () => pickRandomWhere(c => ['Product Design', 'Product Metrics', 'Product Improvement', 'Product Critique', 'Pricing'].includes(c.category)));
    if (rCons) rCons.addEventListener('click', () => pickRandomWhere(c => c.track === 'Consulting'));

    document.querySelectorAll('[data-guided-step]').forEach(btn => {
      btn.addEventListener('click', () => { state.guided.step = Number(btn.dataset.guidedStep); saveState(); render(); });
    });
    document.querySelectorAll('[data-clarify-idx]').forEach(btn => {
      btn.addEventListener('click', () => { state.guided.clarifyRevealed[btn.dataset.clarifyIdx] = true; saveState(); render(); });
    });
    document.querySelectorAll('[data-guided-cat]').forEach(btn => {
      btn.addEventListener('click', () => { state.guided.selectedCategory = btn.dataset.guidedCat; saveState(); render(); });
    });
    document.querySelectorAll('[data-guided-struct]').forEach(btn => {
      btn.addEventListener('click', () => { state.guided.selectedStructIdx = Number(btn.dataset.guidedStruct); saveState(); render(); });
    });
    document.querySelectorAll('[data-guided-quiz]').forEach(btn => {
      btn.addEventListener('click', () => { state.guided.selectedQuizIdx = Number(btn.dataset.guidedQuiz); saveState(); render(); });
    });

    const gNotes = document.getElementById('guided-notes-txt');
    if (gNotes) gNotes.addEventListener('input', (e) => { state.guided.notesInput = e.target.value; saveStateDebounced(); });
    const gSynth = document.getElementById('guided-synth-txt');
    if (gSynth) gSynth.addEventListener('input', (e) => { state.guided.synthInput = e.target.value; saveStateDebounced(); });

    const nextUnmasteredBtn = document.getElementById('guided-next-unmastered');
    if (nextUnmasteredBtn) {
      nextUnmasteredBtn.addEventListener('click', () => {
        const next = CASES.find(c => !state.masteredIds[c.id] && c.id !== state.guided.caseId) || CASES[0];
        if (next) { startGuidedCase(next.id); render(); }
      });
    }

    // Mock Studio listeners
    document.querySelectorAll('[data-mock-rtab]').forEach(btn => {
      btn.addEventListener('click', () => { state.mockRightTab = btn.dataset.mockRtab; saveState(); render(); });
    });

    const mockStartBtn = document.getElementById('mock-start-pause');
    if (mockStartBtn) mockStartBtn.addEventListener('click', toggleMockTimer);

    const mockResetBtn = document.getElementById('mock-reset-timer');
    if (mockResetBtn) {
      mockResetBtn.addEventListener('click', () => {
        clearInterval(mockState.timerId);
        mockState.running = false;
        mockState.timeLeft = mockState.durationSec;
        updateMockTimerUI();
      });
    }

    const mockRandBtn = document.getElementById('mock-random-btn');
    if (mockRandBtn) {
      mockRandBtn.addEventListener('click', () => {
        const pool = CASES.length > 1 ? CASES.filter(c => c.id !== mockState.caseId) : CASES;
        const pick = pool[Math.floor(Math.random() * pool.length)];
        if (pick) { initMockCase(pick.id); render(); }
      });
    }

    const mockCompBtn = document.getElementById('mock-complete-btn');
    if (mockCompBtn) {
      mockCompBtn.addEventListener('click', () => {
        clearInterval(mockState.timerId);
        mockState.running = false;
        if (!mockState.completed) {
          mockState.completed = true;
          state.mocksCompleted++;
        }
        state.masteredIds[mockState.caseId] = true;
        saveState();
        state.mockRightTab = 'reference';
        render();
      });
    }

    document.querySelectorAll('[data-mock-clarify]').forEach(btn => {
      btn.addEventListener('click', () => {
        mockState.clarifiedIdx[btn.dataset.mockClarify] = !mockState.clarifiedIdx[btn.dataset.mockClarify];
        render();
      });
    });

    const nextClueBtn = document.getElementById('mock-next-clue-btn');
    if (nextClueBtn) {
      nextClueBtn.addEventListener('click', () => {
        mockState.revealedWalkthroughCount++;
        render();
      });
    }

    document.querySelectorAll('[data-load-tpl]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tpl = MOCK_TEMPLATES[btn.dataset.loadTpl];
        if (tpl) {
          mockState.buckets = structuredClone(tpl);
          render();
        }
      });
    });

    const wbAddBucket = document.getElementById('wb-add-bucket');
    if (wbAddBucket) {
      wbAddBucket.addEventListener('click', () => {
        mockState.buckets.push({ id: Date.now(), title: 'New MECE Branch', status: 'Exploring', note: '' });
        render();
      });
    }
    document.querySelectorAll('.b-del').forEach(btn => {
      btn.addEventListener('click', () => {
        mockState.buckets.splice(Number(btn.dataset.bIdx), 1);
        render();
      });
    });
    document.querySelectorAll('.bucket-title-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = Number(e.target.dataset.bIdx);
        if (mockState.buckets[idx]) { mockState.buckets[idx].title = e.target.value; updateMockPitchInPlace(); }
      });
    });
    document.querySelectorAll('.bucket-status-sel').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const idx = Number(e.target.dataset.bIdx);
        if (mockState.buckets[idx]) { mockState.buckets[idx].status = e.target.value; updateMockPitchInPlace(); }
      });
    });
    document.querySelectorAll('.bucket-note-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = Number(e.target.dataset.bIdx);
        if (mockState.buckets[idx]) { mockState.buckets[idx].note = e.target.value; updateMockPitchInPlace(); }
      });
    });

    const mRecs = document.getElementById('mock-recs-input');
    if (mRecs) mRecs.addEventListener('input', (e) => { mockState.recsNote = e.target.value; updateMockPitchInPlace(); });
    const mNs = document.getElementById('mock-ns-input');
    if (mNs) mNs.addEventListener('input', (e) => { mockState.northStarNote = e.target.value; updateMockPitchInPlace(); });
    const mGr = document.getElementById('mock-gr-input');
    if (mGr) mGr.addEventListener('input', (e) => { mockState.guardrailNote = e.target.value; updateMockPitchInPlace(); });

    // Memorize & Reference listeners
    document.querySelectorAll('[data-mem-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const nextTab = btn.dataset.memTab;
        if (hasDrillSessionData() && nextTab !== 'drill') abortRapidDrill();
        state.memorizeTab = nextTab;
        saveState();
        render();
      });
    });

    document.querySelectorAll('[data-primer-sub]').forEach(btn => {
      btn.addEventListener('click', () => { state.primersSubTab = btn.dataset.primerSub; saveState(); render(); });
    });

    const printCsBtn = document.getElementById('print-cs-btn');
    if (printCsBtn) printCsBtn.addEventListener('click', () => window.print());

    const csSearch = document.getElementById('cs-search');
    if (csSearch) {
      csSearch.addEventListener('input', (e) => {
        cheatSearch = e.target.value;
        const grid = document.getElementById('cs-grid-container');
        if (grid) grid.innerHTML = renderCheatSheetCards(cheatSearch);
      });
    }
    const pSearch = document.getElementById('primer-search');
    if (pSearch) {
      pSearch.addEventListener('input', (e) => {
        primerSearch = e.target.value;
        const box = document.getElementById('primers-flows-container');
        if (box) box.innerHTML = renderPrimersAndFlowsHtml(primerSearch);
      });
    }

    const fcCat = document.getElementById('fc-cat');
    if (fcCat) fcCat.addEventListener('change', (e) => { flashState.category = e.target.value; flashState.index = 0; flashState.flipped = false; render(); });
    const fcRev = document.getElementById('fc-only-review');
    if (fcRev) fcRev.addEventListener('change', (e) => { flashState.onlyReview = e.target.checked; flashState.index = 0; flashState.flipped = false; render(); });
    const fcBox = document.getElementById('fc-card-box');
    if (fcBox) fcBox.addEventListener('click', () => { flashState.flipped = !flashState.flipped; render(); });
    const fcPrev = document.getElementById('fc-prev');
    if (fcPrev) fcPrev.addEventListener('click', () => { flashState.index = Math.max(0, flashState.index - 1); flashState.flipped = false; render(); });
    const fcNext = document.getElementById('fc-next');
    if (fcNext) fcNext.addEventListener('click', () => { flashState.index++; flashState.flipped = false; render(); });

    const fcMarkRev = document.getElementById('fc-mark-review');
    const fcMarkMast = document.getElementById('fc-mark-mastered');
    if (fcMarkRev) fcMarkRev.addEventListener('click', () => gradeCurrentFlashcard('review'));
    if (fcMarkMast) fcMarkMast.addEventListener('click', () => gradeCurrentFlashcard('mastered'));

    const startDrillBtn = document.getElementById('start-drill-btn');
    if (startDrillBtn) startDrillBtn.addEventListener('click', startRapidDrill);
    const quitDrillBtn = document.getElementById('quit-drill-btn');
    if (quitDrillBtn) quitDrillBtn.addEventListener('click', () => { abortRapidDrill(); render(); });

    document.querySelectorAll('[data-drill-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        drillState.reviewFilter = btn.dataset.drillFilter || 'all';
        document.querySelectorAll('[data-drill-filter]').forEach(b => b.classList.toggle('btn-primary', b.dataset.drillFilter === drillState.reviewFilter));
        const listEl = document.getElementById('drill-review-list');
        if (listEl) listEl.innerHTML = renderDrillReviewListHtml();
      });
    });

    bindDrillOptionListeners();
  }

  function gradeCurrentFlashcard(status) {
    const cards = (REF.flashcards || []).filter(c => {
      if (flashState.category !== 'All' && c.category !== flashState.category) return false;
      if (flashState.onlyReview && state.flashcardStatus[c.id] === 'mastered') return false;
      return true;
    });
    if (flashState.index >= cards.length) flashState.index = 0;
    const current = cards[flashState.index];
    if (current) { state.flashcardStatus[current.id] = status; saveState(); }
    if (!(flashState.onlyReview && status === 'mastered')) flashState.index++;
    flashState.flipped = false;
    render();
  }

  function toggleMockTimer() {
    if (mockState.running) {
      clearInterval(mockState.timerId);
      mockState.running = false;
      updateMockTimerUI();
    } else {
      clearInterval(mockState.timerId);
      if (mockState.timeLeft <= 0) mockState.timeLeft = mockState.durationSec;
      mockState.running = true;
      updateMockTimerUI();
      mockState.timerId = setInterval(() => {
        if (!mockState.running) return;
        if (mockState.timeLeft > 0) {
          mockState.timeLeft--;
          updateMockTimerUI();
          if (mockState.timeLeft <= 0) {
            clearInterval(mockState.timerId);
            mockState.running = false;
            updateMockTimerUI();
          }
        }
      }, 1000);
    }
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function buildShuffledDrillPool(avoidFirstPrompt = '') {
    const pool = shuffleArray(REF.drillQuestions || []).map(item => {
      const mappedOpts = item.options.map((text, idx) => ({ text, isCorrect: idx === item.answer }));
      const mixedOpts = shuffleArray(mappedOpts);
      return {
        q: item.q,
        options: mixedOpts.map(o => o.text),
        answer: mixedOpts.findIndex(o => o.isCorrect),
        exp: item.exp
      };
    });
    if (pool.length > 1 && avoidFirstPrompt && pool[0].q === avoidFirstPrompt) {
      const swapIdx = 1 + Math.floor(Math.random() * (pool.length - 1));
      [pool[0], pool[swapIdx]] = [pool[swapIdx], pool[0]];
    }
    return pool;
  }

  function updateDrillTimerUI() {
    const pill = document.getElementById('drill-timer-pill');
    if (!pill) return;
    pill.textContent = `${drillState.timeLeft}s`;
    pill.style.color = drillState.timeLeft <= 10 ? 'var(--danger)' : '';
    pill.style.borderColor = drillState.timeLeft <= 10 ? 'var(--danger)' : '';
  }

  function renderDrillQuestionInPlace() {
    const qObj = drillState.questions[drillState.currentIdx];
    const qEl = document.getElementById('drill-question-text');
    const fbEl = document.getElementById('drill-feedback-slot');
    const gridEl = document.getElementById('drill-options-grid');
    if (!qObj || !qEl || !fbEl || !gridEl) return;
    qEl.textContent = qObj.q;
    fbEl.className = 'drill-feedback-slot';
    fbEl.textContent = 'Press keys A–D (or 1–4) — explanations unlock after 60s';
    gridEl.innerHTML = renderDrillOptionsHtml(qObj);
    bindDrillOptionListeners();
  }

  function advanceDrillQuestion() {
    clearTimeout(drillState.advanceTimeoutId);
    drillState.advanceTimeoutId = null;
    if (!drillState.active) return;
    drillState.lockedChoice = null;
    const prevQ = drillState.questions[drillState.currentIdx];
    if (drillState.currentIdx + 1 >= drillState.questions.length) {
      drillState.questions = buildShuffledDrillPool(prevQ ? prevQ.q : '');
      drillState.currentIdx = 0;
    } else {
      drillState.currentIdx++;
    }
    renderDrillQuestionInPlace();
  }

  function handleDrillAnswer(chosenIdx) {
    if (!drillState.active || drillState.lockedChoice !== null) return;
    const q = drillState.questions[drillState.currentIdx];
    if (!q || chosenIdx < 0 || chosenIdx >= q.options.length) return;

    drillState.lockedChoice = chosenIdx;
    drillState.answered++;
    const isCorrect = chosenIdx === q.answer;
    let pts = 0;
    if (isCorrect) {
      drillState.correctCount++;
      drillState.streak++;
      if (drillState.streak > drillState.bestStreak) drillState.bestStreak = drillState.streak;
      pts = 10 + Math.min(10, drillState.streak * 2);
      drillState.score += pts;
    } else {
      drillState.streak = 0;
    }

    drillState.history.push({
      num: drillState.answered,
      q: q.q,
      chosenText: q.options[chosenIdx],
      correctText: q.options[q.answer],
      isCorrect,
      pts,
      exp: q.exp
    });

    const scoreEl = document.getElementById('drill-score-pill');
    const streakEl = document.getElementById('drill-streak-pill');
    const countEl = document.getElementById('drill-count-pill');
    if (scoreEl) scoreEl.textContent = `Score: ${drillState.score}`;
    if (streakEl) streakEl.textContent = `Streak: ${drillState.streak}`;
    if (countEl) countEl.textContent = `Q: ${drillState.answered}`;

    document.querySelectorAll('#drill-options-grid [data-drill-opt]').forEach(btn => {
      const idx = Number(btn.dataset.drillOpt);
      btn.disabled = true;
      if (idx === chosenIdx) {
        const hint = btn.querySelector('.drill-key-hint');
        if (isCorrect) { btn.classList.add('correct'); if (hint) hint.textContent = '✓'; }
        else { btn.classList.add('wrong'); if (hint) hint.textContent = '✕'; }
      }
    });

    const fbEl = document.getElementById('drill-feedback-slot');
    if (fbEl) {
      fbEl.className = isCorrect ? 'drill-feedback-slot good' : 'drill-feedback-slot bad';
      fbEl.textContent = isCorrect ? `Correct (+${pts} pts)` : 'Incorrect';
    }

    clearTimeout(drillState.advanceTimeoutId);
    drillState.advanceTimeoutId = setTimeout(advanceDrillQuestion, 260);
  }

  function bindDrillOptionListeners() {
    document.querySelectorAll('#drill-options-grid [data-drill-opt]').forEach(btn => {
      btn.addEventListener('click', () => handleDrillAnswer(Number(btn.dataset.drillOpt)));
    });
  }

  function finishRapidDrill() {
    clearInterval(drillState.timerId);
    clearTimeout(drillState.advanceTimeoutId);
    drillState.timerId = null;
    drillState.advanceTimeoutId = null;
    drillState.active = false;
    drillState.completed = true;
    drillState.timeLeft = 0;
    drillState.lockedChoice = null;
    if (drillState.score > state.bestDrillScore) {
      state.bestDrillScore = drillState.score;
      drillState.beatBest = true;
      saveState();
    }
    if (state.view === 'memorize' && state.memorizeTab === 'drill') render();
  }

  function startRapidDrill() {
    const prevLead = lastDrillLeadPrompt;
    abortRapidDrill();
    const pool = buildShuffledDrillPool(prevLead);
    lastDrillLeadPrompt = pool[0] ? pool[0].q : '';
    drillState = {
      ...createEmptyDrillState(),
      active: true,
      questions: pool,
      timerId: setInterval(() => {
        if (!drillState.active) return;
        if (drillState.timeLeft > 1) {
          drillState.timeLeft--;
          updateDrillTimerUI();
        } else {
          finishRapidDrill();
        }
      }, 1000)
    };
    render();
  }

  function startGuidedCase(caseId) {
    state.guided = {
      caseId,
      step: 1,
      clarifyRevealed: {},
      selectedCategory: null,
      selectedStructIdx: null,
      selectedQuizIdx: null,
      notesInput: '',
      synthInput: ''
    };
    saveState();
  }

  function initMockCase(caseId) {
    clearInterval(mockState.timerId);
    const c = getCase(caseId);
    const cat = (c && c.category || '').toLowerCase();
    let tplKey = 'rca';
    if (cat.includes('gtm')) tplKey = 'gtm';
    else if (cat.includes('design') || cat.includes('improv') || cat.includes('critique') || cat.includes('metric')) tplKey = 'design';
    else if (cat.includes('profit') || cat.includes('pricing')) tplKey = 'profitability';
    else if (cat.includes('market') || cat.includes('growth') || cat.includes('m&a')) tplKey = 'marketentry';

    mockState.caseId = caseId;
    mockState.durationSec = (state.mockDurationMins || 25) * 60;
    mockState.timeLeft = mockState.durationSec;
    mockState.running = false;
    mockState.completed = false;
    mockState.clarifiedIdx = {};
    mockState.revealedWalkthroughCount = 0;
    mockState.showVariation = false;
    mockState.showSolutionRef = false;
    mockState.recsNote = '';
    mockState.northStarNote = '';
    mockState.guardrailNote = '';
    mockState.buckets = structuredClone(MOCK_TEMPLATES[tplKey]);
  }

  // ==================== GLOBAL CONTROLS & MODALS ====================
  document.querySelectorAll('.nav-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', () => setView(btn.dataset.view));
  });

  const sideLogoBtn = document.getElementById('sidebar-brand-toggle');
  const topLogoBtn = document.getElementById('topbar-brand-toggle');
  const scrimEl = document.getElementById('sidebar-scrim');
  if (sideLogoBtn) sideLogoBtn.addEventListener('click', () => toggleSidebar());
  if (topLogoBtn) topLogoBtn.addEventListener('click', () => toggleSidebar());
  if (scrimEl) scrimEl.addEventListener('click', () => toggleSidebar(false));

  const topThemeBtn = document.getElementById('topbar-theme-btn');
  if (topThemeBtn) topThemeBtn.addEventListener('click', toggleTheme);
  const topFocusBtn = document.getElementById('topbar-focus-btn');
  if (topFocusBtn) topFocusBtn.addEventListener('click', toggleFocusMode);

  const settingsModal = document.getElementById('settings-modal');
  const shortcutsModal = document.getElementById('shortcuts-modal');
  const toggleSettings = (open) => { if (settingsModal) settingsModal.classList.toggle('open', open); };
  const toggleShortcuts = (open) => {
    if (!shortcutsModal) return;
    const next = typeof open === 'boolean' ? open : !shortcutsModal.classList.contains('open');
    shortcutsModal.classList.toggle('open', next);
  };

  document.querySelectorAll('[data-set-theme]').forEach(btn => {
    btn.addEventListener('click', () => { state.theme = normalizeTheme(btn.dataset.setTheme); saveState(); applyTheme(); });
  });
  document.querySelectorAll('[data-set-font]').forEach(btn => {
    btn.addEventListener('click', () => { state.fontScale = btn.dataset.setFont; saveState(); applyTheme(); });
  });
  document.querySelectorAll('[data-set-mockmins]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.mockDurationMins = Number(btn.dataset.setMockmins) || 25;
      if (!mockState.running) {
        mockState.durationSec = state.mockDurationMins * 60;
        mockState.timeLeft = mockState.durationSec;
      }
      saveState();
      applyTheme();
      if (state.view === 'mock') render();
    });
  });

  const openSettingsBtn = document.getElementById('open-settings-btn');
  const closeSettingsBtn = document.getElementById('close-settings-btn');
  const doneSettingsBtn = document.getElementById('done-settings-btn');
  if (openSettingsBtn) openSettingsBtn.addEventListener('click', () => toggleSettings(true));
  if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', () => toggleSettings(false));
  if (doneSettingsBtn) doneSettingsBtn.addEventListener('click', () => toggleSettings(false));
  if (settingsModal) settingsModal.addEventListener('click', (e) => { if (e.target === settingsModal) toggleSettings(false); });

  const openShortcutsBtn = document.getElementById('open-shortcuts-btn');
  const closeShortcutsBtn = document.getElementById('close-shortcuts-btn');
  if (openShortcutsBtn) openShortcutsBtn.addEventListener('click', () => toggleShortcuts(true));
  if (closeShortcutsBtn) closeShortcutsBtn.addEventListener('click', () => toggleShortcuts(false));
  if (shortcutsModal) shortcutsModal.addEventListener('click', (e) => { if (e.target === shortcutsModal) toggleShortcuts(false); });

  const cmdModal = document.getElementById('cmd-modal');
  const cmdInput = document.getElementById('cmd-input');
  const openCmdBtn = document.getElementById('open-cmd-btn');
  const closeCmdBtn = document.getElementById('close-cmd-btn');
  if (openCmdBtn) openCmdBtn.addEventListener('click', openCommandPalette);
  if (closeCmdBtn) closeCmdBtn.addEventListener('click', closeCommandPalette);
  if (cmdModal) cmdModal.addEventListener('click', (e) => { if (e.target === cmdModal) closeCommandPalette(); });
  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      cmdActiveIdx = 0;
      renderCommandResults(e.target.value);
    });
    cmdInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentCmdEntries.length) {
          cmdActiveIdx = (cmdActiveIdx + 1) % currentCmdEntries.length;
          renderCommandResults(cmdInput.value);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentCmdEntries.length) {
          cmdActiveIdx = (cmdActiveIdx - 1 + currentCmdEntries.length) % currentCmdEntries.length;
          renderCommandResults(cmdInput.value);
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const entry = currentCmdEntries[cmdActiveIdx];
        closeCommandPalette();
        if (entry) entry.run();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeCommandPalette();
      }
    });
  }

  const exportBtn = document.getElementById('export-progress-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `casemaster-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  const importInput = document.getElementById('import-progress-input');
  if (importInput) {
    importInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result || '{}'));
          state = applyStateMigrations({
            ...structuredClone(defaultState),
            ...parsed,
            uiVersion: 2,
            theme: normalizeTheme(parsed.theme),
            filters: { ...defaultState.filters, ...(parsed.filters || {}) },
            guided: { ...defaultState.guided, ...(parsed.guided || {}) }
          });
          delete state.filters.source;
          saveState();
          toggleSettings(false);
          render();
          alert('Progress imported successfully.');
        } catch {
          alert('Invalid backup JSON file.');
        }
      };
      reader.readAsText(file);
      e.target.value = '';
    });
  }

  const resetBtn = document.getElementById('reset-progress-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Reset all 4-day sprint checkmarks, mastered dossiers, and flashcards?')) {
        abortRapidDrill();
        clearInterval(mockState.timerId);
        wizardAnswers = { q1: null, q2: null };
        cheatSearch = '';
        primerSearch = '';
        localStorage.removeItem(STORAGE_KEY);
        state = loadState();
        initMockCase(CASES[0] ? CASES[0].id : null);
        toggleSettings(false);
        render();
      }
    });
  }

  const globalSearchEl = document.getElementById('global-search');
  if (globalSearchEl) {
    globalSearchEl.value = state.filters.search || '';
    globalSearchEl.addEventListener('input', (e) => {
      state.filters.search = e.target.value;
      saveStateDebounced();
      if (state.view !== 'library') {
        setView('library', { preserveFocus: true });
        if (document.activeElement !== globalSearchEl) globalSearchEl.focus();
      } else {
        const ls = document.getElementById('lib-search');
        if (ls) ls.value = e.target.value;
        if (typeof window.__cmUpdateLibraryResults === 'function') window.__cmUpdateLibraryResults(false);
      }
    });
    globalSearchEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        state.filters.search = e.target.value;
        if (state.view !== 'library') setView('library', { preserveFocus: true });
        else if (typeof window.__cmUpdateLibraryResults === 'function') window.__cmUpdateLibraryResults(false);
      }
    });
  }

  // ==================== DISTINCT KEYBOARD ENGINE ====================
  const VIEW_ORDER = ['dashboard', 'academy', 'memorize', 'library', 'practice', 'mock'];

  document.addEventListener('keydown', (e) => {
    const mod = e.ctrlKey || e.metaKey;
    const keyLower = (e.key || '').toLowerCase();

    if (e.key === 'Escape') {
      closeCommandPalette();
      toggleSettings(false);
      toggleShortcuts(false);
      if (window.innerWidth <= 820) toggleSidebar(false);
      return;
    }

    if (mod && keyLower === 'k') {
      e.preventDefault();
      if (cmdModal && cmdModal.classList.contains('open')) closeCommandPalette();
      else openCommandPalette();
      return;
    }

    if (mod && keyLower === 'b') {
      e.preventDefault();
      toggleSidebar();
      return;
    }

    if (e.altKey && !mod && ['1', '2', '3', '4', '5', '6'].includes(e.key)) {
      e.preventDefault();
      const targetView = VIEW_ORDER[Number(e.key) - 1];
      if (targetView) setView(targetView);
      return;
    }

    const activeTag = (document.activeElement && document.activeElement.tagName) || '';
    const inField = ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag);
    if (inField) return;

    if ((cmdModal && cmdModal.classList.contains('open')) ||
        (settingsModal && settingsModal.classList.contains('open')) ||
        (shortcutsModal && shortcutsModal.classList.contains('open'))) {
      return;
    }

    if (e.key === '[') {
      e.preventDefault();
      toggleSidebar();
      return;
    }
    if (e.key === '?') {
      e.preventDefault();
      toggleShortcuts();
      return;
    }
    if (e.shiftKey && keyLower === 't') {
      e.preventDefault();
      toggleTheme();
      return;
    }
    if (e.shiftKey && keyLower === 'd') {
      e.preventDefault();
      toggleFocusMode();
      return;
    }
    if (e.key === '/') {
      e.preventDefault();
      if (globalSearchEl) globalSearchEl.focus();
      return;
    }

    // View-specific shortcuts
    if (state.view === 'library') {
      const filtered = getFilteredCases();
      const curIdx = filtered.findIndex(c => c.id === state.selectedCaseId);
      if (e.key === 'j' || e.key === 'ArrowDown') {
        if (filtered.length) {
          e.preventDefault();
          const next = filtered[Math.min(filtered.length - 1, curIdx + 1)];
          if (next) {
            state.selectedCaseId = next.id;
            saveState();
            if (typeof window.__cmUpdateLibraryResults === 'function') window.__cmUpdateLibraryResults(true);
            const selEl = document.querySelector('#lib-list-panel .problem-list-item.selected');
            if (selEl) selEl.scrollIntoView({ block: 'nearest' });
          }
        }
        return;
      }
      if (e.key === 'k' || e.key === 'ArrowUp') {
        if (filtered.length) {
          e.preventDefault();
          const prev = filtered[Math.max(0, curIdx - 1)];
          if (prev) {
            state.selectedCaseId = prev.id;
            saveState();
            if (typeof window.__cmUpdateLibraryResults === 'function') window.__cmUpdateLibraryResults(true);
            const selEl = document.querySelector('#lib-list-panel .problem-list-item.selected');
            if (selEl) selEl.scrollIntoView({ block: 'nearest' });
          }
        }
        return;
      }
      const active = filtered[curIdx];
      if (active && keyLower === 'm') {
        e.preventDefault();
        state.masteredIds[active.id] = !state.masteredIds[active.id];
        saveState();
        updateSidebarStats();
        if (typeof window.__cmUpdateLibraryResults === 'function') window.__cmUpdateLibraryResults(true);
        return;
      }
      if (active && keyLower === 's') {
        e.preventDefault();
        state.bookmarkedIds[active.id] = !state.bookmarkedIds[active.id];
        saveState();
        updateSidebarStats();
        if (typeof window.__cmUpdateLibraryResults === 'function') window.__cmUpdateLibraryResults(true);
        return;
      }
      if (keyLower === 'p') {
        e.preventDefault();
        const cycle = ['brief', 'full', 'step'];
        const curMode = state.caseReaderMode || 'full';
        const nextMode = cycle[(cycle.indexOf(curMode) + 1) % cycle.length];
        state.caseReaderMode = nextMode;
        state.progressiveMode = nextMode === 'step';
        state.studyRevealStep = nextMode === 'step' ? 1 : nextMode === 'brief' ? 3 : 99;
        saveState();
        if (typeof window.__cmRenderCaseDetailInPlace === 'function') window.__cmRenderCaseDetailInPlace();
        return;
      }
      if (keyLower === 'n' && state.caseReaderMode === 'step') {
        e.preventDefault();
        state.studyRevealStep = Math.min(6, (state.studyRevealStep || 1) + 1);
        saveState();
        if (typeof window.__cmRenderCaseDetailInPlace === 'function') window.__cmRenderCaseDetailInPlace();
        return;
      }
    }

    if (state.view === 'academy' && (state.academyTab || 'algorithm') === 'algorithm' && !state.academyShowAllSteps) {
      const maxStep = Math.max(0, (CURRICULUM.sixSteps || []).length - 1);
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        state.academyFocusStep = Math.min(maxStep, (state.academyFocusStep || 0) + 1);
        saveState();
        render();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        state.academyFocusStep = Math.max(0, (state.academyFocusStep || 0) - 1);
        saveState();
        render();
        return;
      }
    }

    if (state.view === 'practice') {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        state.guided.step = Math.min(5, (state.guided.step || 1) + 1);
        saveState();
        render();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        state.guided.step = Math.max(1, (state.guided.step || 1) - 1);
        saveState();
        render();
        return;
      }
    }

    if (state.view === 'memorize' && state.memorizeTab === 'flashcards') {
      if (e.key === ' ' || keyLower === 'f') {
        e.preventDefault();
        flashState.flipped = !flashState.flipped;
        render();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        flashState.index = Math.max(0, flashState.index - 1);
        flashState.flipped = false;
        render();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        flashState.index++;
        flashState.flipped = false;
        render();
        return;
      }
      if (keyLower === 'g') {
        e.preventDefault();
        gradeCurrentFlashcard('mastered');
        return;
      }
      if (keyLower === 'r') {
        e.preventDefault();
        gradeCurrentFlashcard('review');
        return;
      }
    }

    if (state.view === 'memorize' && state.memorizeTab === 'drill' && drillState.active) {
      const optMap = { '1': 0, '2': 1, '3': 2, '4': 3, a: 0, b: 1, c: 2, d: 3 };
      if (Object.prototype.hasOwnProperty.call(optMap, keyLower) && drillState.lockedChoice === null) {
        e.preventDefault();
        handleDrillAnswer(optMap[keyLower]);
      } else if ((e.key === ' ' || e.key === 'Enter') && drillState.lockedChoice !== null) {
        e.preventDefault();
        advanceDrillQuestion();
      }
      return;
    }

    if (state.view === 'mock') {
      if (keyLower === 't') {
        e.preventDefault();
        toggleMockTimer();
        return;
      }
      if (keyLower === 'c') {
        e.preventDefault();
        const c = getCase(mockState.caseId);
        const total = (c && c.walkthrough) ? c.walkthrough.length : 0;
        if (mockState.revealedWalkthroughCount < total) {
          mockState.revealedWalkthroughCount++;
          state.mockRightTab = 'clues';
          saveState();
          render();
        }
        return;
      }
    }
  });

  window.addEventListener('resize', () => {
    applySidebarState();
    if (state.view === 'library' && typeof window.__cmSyncLibraryListHeight === 'function') window.__cmSyncLibraryListHeight();
  });
  window.addEventListener('pagehide', () => { if (hasDrillSessionData()) abortRapidDrill(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && hasDrillSessionData()) {
      abortRapidDrill();
      if (state.view === 'memorize' && state.memorizeTab === 'drill') render();
    }
  });

  document.getElementById('random-practice-btn').addEventListener('click', () => {
    const pool = (state.view === 'practice' && CASES.length > 1) ? CASES.filter(c => c.id !== state.guided.caseId) : CASES;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (pick) { startGuidedCase(pick.id); setView('practice'); }
  });

  if (state.mockDurationMins) {
    mockState.durationSec = state.mockDurationMins * 60;
    mockState.timeLeft = mockState.durationSec;
  }

  // ==================== PWA INSTALL & SERVICE WORKER ====================
  let deferredInstallPrompt = null;
  function isStandaloneMode() {
    return (typeof window.matchMedia === 'function' && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  }
  function updateInstallUI() {
    const sideBtn = document.getElementById('install-app-btn');
    const modalBtn = document.getElementById('settings-install-btn');
    const descEl = document.getElementById('pwa-install-desc');
    const standalone = isStandaloneMode();
    if (standalone) {
      if (sideBtn) sideBtn.style.display = 'none';
      if (modalBtn) modalBtn.style.display = 'none';
      if (descEl) descEl.textContent = 'Running as its own installed standalone CaseMaster window.';
      return;
    }
    const canPrompt = !!deferredInstallPrompt;
    if (sideBtn) sideBtn.style.display = canPrompt ? 'inline-flex' : 'none';
    if (modalBtn) modalBtn.style.display = canPrompt ? 'inline-flex' : 'none';
    if (descEl) {
      descEl.textContent = canPrompt
        ? 'Install CaseMaster as a standalone desktop app (completely separate from GuessMaster Pro).'
        : 'Click Install in the browser address bar when hosted over HTTPS to run CaseMaster in its own window.';
    }
  }
  async function triggerDesktopInstall() {
    if (!deferredInstallPrompt) return;
    try {
      await deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      if (choice && choice.outcome === 'accepted') deferredInstallPrompt = null;
    } catch {}
    updateInstallUI();
  }
  const installSideBtn = document.getElementById('install-app-btn');
  const installModalBtn = document.getElementById('settings-install-btn');
  if (installSideBtn) installSideBtn.addEventListener('click', triggerDesktopInstall);
  if (installModalBtn) installModalBtn.addEventListener('click', triggerDesktopInstall);

  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredInstallPrompt = e; updateInstallUI(); });
  window.addEventListener('appinstalled', () => { deferredInstallPrompt = null; updateInstallUI(); });

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    const regSw = () => navigator.serviceWorker.register('./sw.js', { scope: './' }).catch(() => {});
    if (document.readyState === 'complete') regSw();
    else window.addEventListener('load', regSw);
  }

  updateInstallUI();
  render();
})();
