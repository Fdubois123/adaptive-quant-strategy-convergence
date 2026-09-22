const surfaces = [
  {
    type: "LEVEL 01 / RECESSED",
    title: "Recessed Surface",
    description:
      "Low-priority analytical regions, background controls and secondary information.",
    className: "d1-surface-recessed",
  },
  {
    type: "LEVEL 02 / STANDARD",
    title: "Primary Surface",
    description:
      "The default analytical container for portfolio, market and quantitative intelligence.",
    className: "d1-surface-standard",
  },
  {
    type: "LEVEL 03 / ELEVATED",
    title: "Intelligence Surface",
    description:
      "High-priority information, active analysis and decision-critical intelligence.",
    className: "d1-surface-elevated",
  },
];

const signals = [
  {
    name: "Primary Intelligence",
    value: "ACTIVE",
    caption: "Data • analytics • interaction",
    className: "d1-signal-primary",
  },
  {
    name: "Positive",
    value: "+2.84%",
    caption: "Constructive / favorable",
    className: "d1-signal-positive",
  },
  {
    name: "Warning",
    value: "ELEVATED",
    caption: "Attention required",
    className: "d1-signal-warning",
  },
  {
    name: "Critical Risk",
    value: "HIGH",
    caption: "Material risk condition",
    className: "d1-signal-danger",
  },
];

const spacingTokens = [
  {
    token: "S1",
    value: "4",
    usage: "Micro",
    className: "spacing-s1",
  },
  {
    token: "S2",
    value: "8",
    usage: "Tight",
    className: "spacing-s2",
  },
  {
    token: "S3",
    value: "12",
    usage: "Compact",
    className: "spacing-s3",
  },
  {
    token: "S4",
    value: "16",
    usage: "Standard",
    className: "spacing-s4",
  },
  {
    token: "S5",
    value: "24",
    usage: "Panel",
    className: "spacing-s5",
  },
  {
    token: "S6",
    value: "32",
    usage: "Section",
    className: "spacing-s6",
  },
  {
    token: "S7",
    value: "48",
    usage: "Structural",
    className: "spacing-s7",
  },
];

const densityModes = [
  {
    code: "01",
    name: "Compact",
    description: "Tables, matrices, feeds and dense quantitative data.",
    rows: ["NIFTY 50", "S&P 500", "GOLD", "BRENT"],
    className: "density-compact",
  },
  {
    code: "02",
    name: "Standard",
    description: "Default dashboard panels and analytical modules.",
    rows: ["Portfolio", "Regime", "Strategy"],
    className: "density-standard",
  },
  {
    code: "03",
    name: "Focus",
    description:
      "Decision-critical metrics, warnings and primary intelligence.",
    rows: ["RISK-OFF", "64%"],
    className: "density-focus",
  },
];

const layoutModules = [
  {
    label: "PORTFOLIO",
    className: "layout-module-a",
  },
  {
    label: "RISK + PERFORMANCE",
    className: "layout-module-b",
  },
  {
    label: "GLOBAL INTELLIGENCE",
    className: "layout-module-c",
  },
  {
    label: "REGIME",
    className: "layout-module-d",
  },
  {
    label: "STRESS PREDICTION",
    className: "layout-module-e",
  },
  {
    label: "CORRELATION",
    className: "layout-module-f",
  },
];

const borderStates = [
  {
    code: "B0",
    name: "Recessed",
    description: "Passive structure and background architecture.",
    className: "border-recessed",
  },
  {
    code: "B1",
    name: "Standard",
    description: "Default analytical container and dashboard surface.",
    className: "border-standard",
  },
  {
    code: "B2",
    name: "Elevated",
    description: "Important information requiring greater visual priority.",
    className: "border-elevated",
  },
  {
    code: "B3",
    name: "Focus",
    description: "Selected intelligence currently under inspection.",
    className: "border-focus",
  },
  {
    code: "B4",
    name: "Active",
    description: "Live intelligence, active models and streaming systems.",
    className: "border-active",
  },
  {
    code: "B5",
    name: "Warning",
    description: "Conditions requiring analyst attention or review.",
    className: "border-warning",
  },
  {
    code: "B6",
    name: "Critical",
    description: "Material risk, severe stress or urgent intelligence.",
    className: "border-critical",
  },
];

const elevationLevels = [
  {
    code: "E0",
    name: "Flush",
    purpose:
      "Embedded information living directly within the command environment.",
    depth: "ZERO SEPARATION",
    className: "elevation-e0",
  },
  {
    code: "E1",
    name: "Recessed",
    purpose:
      "Passive analytical regions and secondary system infrastructure.",
    depth: "INSET DEPTH",
    className: "elevation-e1",
  },
  {
    code: "E2",
    name: "Standard",
    purpose:
      "Default portfolio, market, strategy and quantitative intelligence modules.",
    depth: "BASE ELEVATION",
    className: "elevation-e2",
  },
  {
    code: "E3",
    name: "Raised",
    purpose:
      "Important analytical modules requiring stronger spatial priority.",
    depth: "RAISED SURFACE",
    className: "elevation-e3",
  },
  {
    code: "E4",
    name: "Floating",
    purpose:
      "Contextual intelligence, tooltips, inspectors and temporary overlays.",
    depth: "DETACHED LAYER",
    className: "elevation-e4",
  },
  {
    code: "E5",
    name: "Focus",
    purpose:
      "Selected analytical objects receiving direct operator attention.",
    depth: "FOCUSED LAYER",
    className: "elevation-e5",
  },
  {
    code: "E6",
    name: "Command",
    purpose:
      "Highest-priority decision intelligence and command-level surfaces.",
    depth: "MAXIMUM PRIORITY",
    className: "elevation-e6",
  },
];


const interactionStates = [
  { code: "S0", name: "Rest", description: "The neutral analytical state. Present, readable and deliberately quiet.", behavior: "BASELINE", className: "interaction-state-rest" },
  { code: "S1", name: "Hover", description: "Signals that an analytical object is inspectable without implying selection.", behavior: "DISCOVER", className: "interaction-state-hover" },
  { code: "S2", name: "Focus", description: "Keyboard-visible operator focus with an explicit accessibility ring.", behavior: "NAVIGATE", className: "interaction-state-focus" },
  { code: "S3", name: "Selected", description: "The analytical object currently chosen for inspection or manipulation.", behavior: "INSPECT", className: "interaction-state-selected" },
  { code: "S4", name: "Active / Live", description: "A running model, streaming feed or executing analytical process.", behavior: "LIVE", className: "interaction-state-active" },
  { code: "S5", name: "Disabled", description: "Unavailable functionality remains visible without competing for attention.", behavior: "LOCKED", className: "interaction-state-disabled" },
  { code: "S6", name: "Loading", description: "Computation or retrieval is underway while structural context remains stable.", behavior: "PROCESSING", className: "interaction-state-loading" },
  { code: "S7", name: "Stale", description: "Information remains usable but its freshness no longer meets system expectations.", behavior: "REFRESH", className: "interaction-state-stale" },
];

const interactionRules = [
  { code: "R01", title: "Hover ≠ Selected", description: "Discovery never masquerades as an operator decision." },
  { code: "R02", title: "Selected ≠ Active", description: "Selection describes attention. Active describes system execution." },
  { code: "R03", title: "Active ≠ Positive", description: "A live model may produce favorable, neutral or adverse intelligence." },
  { code: "R04", title: "Warning ≠ Stale", description: "Risk severity and information freshness remain separate concepts." },
  { code: "R05", title: "Disabled ≠ Hidden", description: "Unavailable capabilities remain discoverable and structurally predictable." },
  { code: "R06", title: "Loading ≠ Frozen", description: "Processing must communicate progress while preserving interface context." },
];

export default function Home() {
  return (
    <main className="regimeon-environment">
      <div className="d1-showcase">
        <header className="d1-brand">
          <div className="d1-brand-mark" aria-hidden="true" />

          <div>
            <p className="d1-brand-name">REGIMEON</p>
            <p className="d1-brand-subtitle">
              Adaptive Quant Intelligence
            </p>
          </div>
        </header>

        <section className="d1-hero">
          <div>
            <div className="d1-kicker">Design System / D1</div>

            <h1 className="d1-title">
              Intelligence should feel{" "}
              <span className="d1-title-accent">engineered.</span>
            </h1>

            <p className="d1-description">
              The visual foundation for a multi-regime quantitative
              intelligence environment. Built for dense financial
              information, risk visualization, portfolio analytics and
              adaptive decision systems without sacrificing clarity.
            </p>
          </div>

          <div className="d1-environment-state">
            <span
              className="d1-environment-state-dot"
              aria-hidden="true"
            />
            Environment Stable
          </div>
        </section>

        {/* =========================================================
            01 — SURFACE ARCHITECTURE
        ========================================================= */}

        <section className="d1-section">
          <div className="d1-section-heading">
            <span className="d1-section-index">01</span>
            <span className="d1-section-title">
              Surface Architecture
            </span>
            <span className="d1-section-line" />
          </div>

          <div className="d1-surface-grid">
            {surfaces.map((surface) => (
              <article
                key={surface.title}
                className={`d1-surface ${surface.className}`}
              >
                <div className="d1-surface-type">
                  {surface.type}
                </div>

                <h3>{surface.title}</h3>
                <p>{surface.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
            02 — INTELLIGENCE SIGNALS
        ========================================================= */}

        <section className="d1-section">
          <div className="d1-section-heading">
            <span className="d1-section-index">02</span>
            <span className="d1-section-title">
              Intelligence Signals
            </span>
            <span className="d1-section-line" />
          </div>

          <div className="d1-signal-grid">
            {signals.map((signal) => (
              <article
                key={signal.name}
                className={`d1-signal ${signal.className}`}
              >
                <div className="d1-signal-top">
                  <span className="d1-signal-name">
                    {signal.name}
                  </span>

                  <span
                    className="d1-signal-light"
                    aria-hidden="true"
                  />
                </div>

                <p className="d1-signal-value">
                  {signal.value}
                </p>

                <p className="d1-signal-caption">
                  {signal.caption}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
            03 — INFORMATION DEPTH
        ========================================================= */}

        <section className="d1-section">
          <div className="d1-section-heading">
            <span className="d1-section-index">03</span>
            <span className="d1-section-title">
              Information Depth
            </span>
            <span className="d1-section-line" />
          </div>

          <div className="d1-depth-stage">
            <div className="d1-depth-stack">
              <div className="d1-depth-card d1-depth-card-one" />
              <div className="d1-depth-card d1-depth-card-two" />
              <div className="d1-depth-card d1-depth-card-three" />
            </div>
          </div>
        </section>

        {/* =========================================================
            04 — FINANCIAL TYPOGRAPHY
        ========================================================= */}

        <section className="d1-section">
          <div className="d1-section-heading">
            <span className="d1-section-index">04</span>
            <span className="d1-section-title">
              Financial Typography
            </span>
            <span className="d1-section-line" />
          </div>

          <div className="type-lab">
            <div className="type-lab-primary">
              <div className="type-eyebrow">
                PORTFOLIO / NET ASSET VALUE
              </div>

              <div className="type-hero-number">
                ₹12,78,432
              </div>

              <div className="type-performance-positive">
                +₹23,412
                <span>+1.86%</span>
              </div>

              <div className="type-meta">
                UPDATED 14:32:08 IST
              </div>
            </div>

            <div className="type-metric-grid">
              <div className="type-metric">
                <div className="type-metric-label">
                  SHARPE RATIO
                </div>

                <div className="type-metric-value">
                  1.42
                </div>

                <div className="type-metric-delta positive">
                  +0.08
                </div>
              </div>

              <div className="type-metric">
                <div className="type-metric-label">
                  MAX DRAWDOWN
                </div>

                <div className="type-metric-value">
                  −8.74%
                </div>

                <div className="type-metric-delta danger">
                  RISK
                </div>
              </div>

              <div className="type-metric">
                <div className="type-metric-label">
                  MODEL CONFIDENCE
                </div>

                <div className="type-metric-value">
                  91.7%
                </div>

                <div className="type-metric-delta intelligence">
                  HIGH
                </div>
              </div>
            </div>

            <div className="type-intelligence-row">
              <div>
                <div className="type-eyebrow">
                  CURRENT REGIME
                </div>

                <div className="type-regime">
                  RISK-OFF
                </div>
              </div>

              <div className="type-probability-block">
                <div className="type-eyebrow">
                  REGIME PROBABILITY
                </div>

                <div className="type-probability">
                  64<span>%</span>
                </div>
              </div>

              <div className="type-alert-block">
                <div className="type-eyebrow">
                  MARKET STRESS
                </div>

                <div className="type-alert-value">
                  ELEVATED
                </div>

                <div className="type-alert-caption">
                  Multi-factor stress signals require attention.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            05 — GRID, SPACING & DENSITY
        ========================================================= */}

        <section className="d1-section">
          <div className="d1-section-heading">
            <span className="d1-section-index">05</span>
            <span className="d1-section-title">
              Grid, Spacing & Density
            </span>
            <span className="d1-section-line" />
          </div>

          <div className="grid-system">
            <div className="grid-system-block">
              <div className="grid-system-header">
                <div>
                  <p className="grid-system-kicker">
                    SPACING SCALE
                  </p>

                  <h3>One rhythm. Every surface.</h3>
                </div>

                <div className="grid-system-code">
                  4PX BASE
                </div>
              </div>

              <div className="spacing-token-grid">
                {spacingTokens.map((token) => (
                  <div
                    key={token.token}
                    className="spacing-token"
                  >
                    <div className="spacing-token-meta">
                      <span>{token.token}</span>
                      <strong>{token.value}px</strong>
                    </div>

                    <div className="spacing-token-track">
                      <span
                        className={`spacing-token-bar ${token.className}`}
                      />
                    </div>

                    <p>{token.usage}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid-system-block grid-system-block-divided">
              <div className="grid-system-header">
                <div>
                  <p className="grid-system-kicker">
                    ANALYTICAL GRID
                  </p>

                  <h3>12-column command architecture.</h3>
                </div>

                <div className="grid-system-code">
                  12 COL / 16 GAP
                </div>
              </div>

              <div className="column-laboratory">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="column-laboratory-cell"
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="layout-blueprint">
                {layoutModules.map((module) => (
                  <div
                    key={module.label}
                    className={`layout-module ${module.className}`}
                  >
                    <span>{module.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid-system-note">
                <span className="grid-system-note-dot" />

                Modules may span the grid without abandoning the
                underlying alignment system.
              </div>
            </div>

            <div className="grid-system-block grid-system-block-divided">
              <div className="grid-system-header">
                <div>
                  <p className="grid-system-kicker">
                    INFORMATION DENSITY
                  </p>

                  <h3>Density follows decision priority.</h3>
                </div>

                <div className="grid-system-code">
                  3 MODES
                </div>
              </div>

              <div className="density-grid">
                {densityModes.map((mode) => (
                  <article
                    key={mode.name}
                    className={`density-card ${mode.className}`}
                  >
                    <div className="density-card-top">
                      <span className="density-code">
                        {mode.code}
                      </span>

                      <span className="density-name">
                        {mode.name}
                      </span>
                    </div>

                    <p className="density-description">
                      {mode.description}
                    </p>

                    <div className="density-preview">
                      {mode.rows.map((row, index) => (
                        <div
                          key={row}
                          className="density-preview-row"
                        >
                          <span>{row}</span>

                          <strong>
                            {index === 0
                              ? "ACTIVE"
                              : index === 1
                                ? "64%"
                                : "+1.42"}
                          </strong>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid-system-block grid-system-block-divided">
              <div className="grid-system-header">
                <div>
                  <p className="grid-system-kicker">
                    COMMAND CANVAS
                  </p>

                  <h3>
                    Designed for information without visual collapse.
                  </h3>
                </div>

                <div className="grid-system-code">
                  DENSE / ORDERED
                </div>
              </div>

              <div className="command-canvas">
                <div className="command-canvas-sidebar">
                  <span className="command-canvas-logo" />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="command-canvas-workspace">
                  <div className="command-canvas-topbar">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="command-canvas-main">
                    <div className="command-preview preview-one">
                      <span>PORTFOLIO</span>
                    </div>

                    <div className="command-preview preview-two">
                      <span>RISK</span>
                    </div>

                    <div className="command-preview preview-three">
                      <span>GLOBAL</span>
                    </div>

                    <div className="command-preview preview-four">
                      <span>REGIME</span>
                    </div>

                    <div className="command-preview preview-five">
                      <span>STRESS</span>
                    </div>

                    <div className="command-preview preview-six">
                      <span>CORRELATION</span>
                    </div>

                    <div className="command-preview preview-seven">
                      <span>STRATEGY</span>
                    </div>

                    <div className="command-preview preview-eight">
                      <span>3D RISK SURFACE</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="command-canvas-caption">
                This is a structural preview only — not the dashboard.
                D2 will transform these regions into the actual REGIMEON
                command environment.
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            06 — BORDER HIERARCHY
        ========================================================= */}

        <section className="d1-section">
          <div className="d1-section-heading">
            <span className="d1-section-index">06</span>

            <span className="d1-section-title">
              Border Hierarchy
            </span>

            <span className="d1-section-line" />
          </div>

          <div className="grid-system">
            <div className="grid-system-block">
              <div className="grid-system-header">
                <div>
                  <p className="grid-system-kicker">
                    STRUCTURAL PRIORITY
                  </p>

                  <h3>
                    Boundaries communicate intelligence.
                  </h3>
                </div>

                <div className="grid-system-code">
                  B0 → B6
                </div>
              </div>

              <div className="border-laboratory">
                {borderStates.map((state) => (
                  <article
                    key={state.code}
                    className={`border-specimen ${state.className}`}
                  >
                    <span
                      className="border-state-indicator"
                      aria-hidden="true"
                    />

                    <div className="border-specimen-code">
                      {state.code} / {state.name.toUpperCase()}
                    </div>

                    <div className="border-specimen-content">
                      <h4>{state.name}</h4>
                      <p>{state.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="border-hierarchy-scale">
                <div className="border-scale-recessed">
                  <span>B0</span>
                </div>

                <div className="border-scale-standard">
                  <span>B1</span>
                </div>

                <div className="border-scale-elevated">
                  <span>B2</span>
                </div>

                <div className="border-scale-focus">
                  <span>B3</span>
                </div>

                <div className="border-scale-active">
                  <span>B4</span>
                </div>

                <div className="border-scale-warning">
                  <span>B5</span>
                </div>

                <div className="border-scale-critical">
                  <span>B6</span>
                </div>
              </div>
            </div>

            <div className="grid-system-block grid-system-block-divided">
              <div className="grid-system-header">
                <div>
                  <p className="grid-system-kicker">
                    APPLICATION LOGIC
                  </p>

                  <h3>
                    Visual intensity follows decision importance.
                  </h3>
                </div>

                <div className="grid-system-code">
                  CONTROLLED EMPHASIS
                </div>
              </div>

              <div className="density-grid">
                <article className="density-card border-recessed">
                  <div className="density-card-top">
                    <span className="density-code">01</span>

                    <span className="density-name">
                      Background
                    </span>
                  </div>

                  <p className="density-description">
                    Passive controls, supporting information and
                    low-priority analytical structure.
                  </p>

                  <div className="density-preview">
                    <div className="density-preview-row">
                      <span>System Metadata</span>
                      <strong>B0</strong>
                    </div>

                    <div className="density-preview-row">
                      <span>Secondary Controls</span>
                      <strong>B1</strong>
                    </div>
                  </div>
                </article>

                <article className="density-card border-active">
                  <div className="density-card-top">
                    <span className="density-code">02</span>

                    <span className="density-name">
                      Intelligence
                    </span>
                  </div>

                  <p className="density-description">
                    Selected analytics, active models and live
                    decision-support intelligence.
                  </p>

                  <div className="density-preview">
                    <div className="density-preview-row">
                      <span>Selected Analysis</span>
                      <strong>B3</strong>
                    </div>

                    <div className="density-preview-row">
                      <span>Live Model</span>
                      <strong>B4</strong>
                    </div>
                  </div>
                </article>

                <article className="density-card border-critical">
                  <div className="density-card-top">
                    <span className="density-code">03</span>

                    <span className="density-name">
                      Risk Escalation
                    </span>
                  </div>

                  <p className="density-description">
                    Increasing visual urgency for warnings,
                    stress conditions and material risk.
                  </p>

                  <div className="density-preview">
                    <div className="density-preview-row">
                      <span>Elevated Stress</span>
                      <strong>B5</strong>
                    </div>

                    <div className="density-preview-row">
                      <span>Critical Risk</span>
                      <strong>B6</strong>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="grid-system-block grid-system-block-divided">
              <div className="grid-system-header">
                <div>
                  <p className="grid-system-kicker">
                    HIERARCHY PRINCIPLE
                  </p>

                  <h3>
                    More important does not mean more decoration.
                  </h3>
                </div>

                <div className="grid-system-code">
                  SIGNAL / NOT NOISE
                </div>
              </div>

              <div className="border-principle-grid">
                <div className="border-principle-card border-recessed">
                  <span className="border-principle-index">
                    01
                  </span>

                  <h4>Structure first.</h4>

                  <p>
                    Most surfaces remain quiet so the interface can
                    support large volumes of quantitative information
                    without becoming visually exhausting.
                  </p>
                </div>

                <div className="border-principle-card border-focus">
                  <span className="border-principle-index">
                    02
                  </span>

                  <h4>Focus is intentional.</h4>

                  <p>
                    Cyan emphasis is reserved for selected analysis,
                    active intelligence and user-directed inspection.
                  </p>
                </div>

                <div className="border-principle-card border-warning">
                  <span className="border-principle-index">
                    03
                  </span>

                  <h4>Warnings earn attention.</h4>

                  <p>
                    Amber communicates conditions that deserve
                    examination without falsely implying immediate
                    system failure.
                  </p>
                </div>

                <div className="border-principle-card border-critical">
                  <span className="border-principle-index">
                    04
                  </span>

                  <h4>Critical means critical.</h4>

                  <p>
                    Red is deliberately scarce and reserved for
                    material risk, severe market stress and genuinely
                    urgent analytical states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            07 — ELEVATION & SPATIAL HIERARCHY
        ========================================================= */}

        <section className="d1-section">
          <div className="d1-section-heading">
            <span className="d1-section-index">07</span>

            <span className="d1-section-title">
              Elevation &amp; Spatial Hierarchy
            </span>

            <span className="d1-section-line" />
          </div>

          <div className="elevation-laboratory">
            <div className="elevation-laboratory-header">
              <div>
                <p className="elevation-laboratory-kicker">
                  Z-AXIS INTELLIGENCE
                </p>

                <h3 className="elevation-laboratory-title">
                  Priority occupies physical depth.
                </h3>

                <p className="elevation-laboratory-description">
                  REGIMEON uses elevation as analytical language.
                  Background information remains embedded, normal
                  modules occupy the working plane, and
                  decision-critical intelligence rises toward the
                  operator.
                </p>
              </div>

              <div className="elevation-laboratory-code">
                E0 → E6
              </div>
            </div>

            {/* ELEVATION SCALE */}

            <div className="elevation-scale">
              {elevationLevels.map((level) => (
                <article
                  key={level.code}
                  className={`elevation-card ${level.className}`}
                >
                  <div className="elevation-card-level">
                    {level.code}
                  </div>

                  <div className="elevation-card-content">
                    <h4 className="elevation-card-name">
                      {level.name}
                    </h4>

                    <p className="elevation-card-purpose">
                      {level.purpose}
                    </p>
                  </div>

                  <div className="elevation-card-depth">
                    {level.depth}
                  </div>
                </article>
              ))}
            </div>

            {/* PHYSICAL DEPTH DEMONSTRATOR */}

            <div className="elevation-depth-demo">
              <div className="elevation-depth-stage">
                <div className="elevation-depth-stack">
                  <div
                    className="elevation-plane elevation-plane-one"
                    aria-hidden="true"
                  />

                  <div
                    className="elevation-plane elevation-plane-two"
                    aria-hidden="true"
                  />

                  <div
                    className="elevation-plane elevation-plane-three"
                    aria-hidden="true"
                  />

                  <div
                    className="elevation-plane elevation-plane-four"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* SEMANTIC ELEVATION */}

            <div className="elevation-semantic-section">
              <div className="elevation-semantic-heading">
                Semantic illumination
              </div>

              <div className="elevation-semantic-grid">
                <article className="elevation-semantic-card elevation-semantic-primary">
                  <div className="elevation-semantic-label">
                    INTELLIGENCE
                  </div>

                  <div className="elevation-semantic-value">
                    ACTIVE MODEL
                  </div>
                </article>

                <article className="elevation-semantic-card elevation-semantic-positive">
                  <div className="elevation-semantic-label">
                    CONSTRUCTIVE
                  </div>

                  <div className="elevation-semantic-value">
                    +2.84%
                  </div>
                </article>

                <article className="elevation-semantic-card elevation-semantic-warning">
                  <div className="elevation-semantic-label">
                    ATTENTION
                  </div>

                  <div className="elevation-semantic-value">
                    ELEVATED
                  </div>
                </article>

                <article className="elevation-semantic-card elevation-semantic-danger">
                  <div className="elevation-semantic-label">
                    MATERIAL RISK
                  </div>

                  <div className="elevation-semantic-value">
                    CRITICAL
                  </div>
                </article>
              </div>
            </div>

            {/* ELEVATION PRINCIPLE */}

            <div className="elevation-principle">
              <div className="elevation-principle-copy">
                <div className="elevation-principle-label">
                  ELEVATION PRINCIPLE
                </div>

                <p className="elevation-principle-text">
                  Depth is scarce. REGIMEON does not raise a surface
                  because it looks impressive; it raises a surface
                  because the information has earned greater decision
                  priority.
                </p>
              </div>

              <div
                className="elevation-principle-scale"
                aria-label="Elevation increases from E0 to E6"
              >
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>



        {/* =========================================================
            08 — INTERACTION & STATE HIERARCHY
        ========================================================= */}

        <section className="d1-section">
          <div className="d1-section-heading">
            <span className="d1-section-index">08</span>
            <span className="d1-section-title">Interaction &amp; State Hierarchy</span>
            <span className="d1-section-line" />
          </div>

          <div className="interaction-laboratory">
            <div className="interaction-laboratory-header">
              <div>
                <p className="interaction-laboratory-kicker">OPERATOR STATE LANGUAGE</p>
                <h3 className="interaction-laboratory-title">Interaction communicates system truth.</h3>
                <p className="interaction-laboratory-description">
                  REGIMEON separates attention, selection, execution, availability, processing and data freshness into explicit states. Interaction must reveal what the system is doing without introducing ambiguity into financial intelligence.
                </p>
              </div>
              <div className="interaction-laboratory-code">S0 → S7</div>
            </div>

            <div className="interaction-state-grid">
              {interactionStates.map((state) => (
                <article key={state.code} className={`interaction-state-card ${state.className}`}>
                  <div className="interaction-state-code">
                    <span>{state.code} / {state.name.toUpperCase()}</span>
                    <span className="interaction-state-indicator" aria-hidden="true" />
                  </div>
                  <h4 className="interaction-state-name">{state.name}</h4>
                  <p className="interaction-state-description">{state.description}</p>
                  <div className="interaction-state-meta"><span>Behavior</span><strong>{state.behavior}</strong></div>
                </article>
              ))}
            </div>

            <div className="interaction-demo">
              <div className="interaction-demo-heading">QUANTITATIVE STATE DEMONSTRATOR</div>
              <div className="interaction-demo-shell">
                {[
                  ["Momentum Composite", "SELECTED", "0.78", "91.7%", "S3", "interaction-demo-selected"],
                  ["Regime Engine", "LIVE", "RISK-OFF", "64%", "S4", "interaction-demo-live"],
                  ["Correlation Matrix", "REST", "60D", "24", "S0", ""],
                  ["Macro Risk Feed", "STALE", "18M", "REFRESH", "S7", "interaction-demo-stale"],
                  ["Execution Gateway", "DISABLED", "RESEARCH", "LOCKED", "S5", "interaction-demo-disabled"],
                ].map(([name, state, signal, confidence, code, className]) => (
                  <div key={name} className={`interaction-demo-row ${className}`}>
                    <div className="interaction-demo-symbol"><span className="interaction-demo-dot" aria-hidden="true" />{name}</div>
                    <div className="interaction-demo-cell">STATE <strong>{state}</strong></div>
                    <div className="interaction-demo-cell">VALUE <strong>{signal}</strong></div>
                    <div className="interaction-demo-cell">META <strong>{confidence}</strong></div>
                    <div className="interaction-demo-cell">{code}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="interaction-transition-section">
              <div className="interaction-transition-heading">PRIMARY INTERACTION PATH</div>
              <div className="interaction-transition-flow">
                {[
                  ["S0", "Rest"], ["S1", "Hover"], ["S2", "Focus"], ["S3", "Selected"], ["S4", "Active"], ["S6", "Loading"], ["S7", "Stale"],
                ].map(([code, label], index, items) => (
                  <div key={code} className="interaction-transition-node">
                    <div><strong>{code}</strong><span>{label}</span></div>
                    {index < items.length - 1 && <span className="interaction-transition-arrow" aria-hidden="true" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="interaction-rules">
              {interactionRules.map((rule) => (
                <article key={rule.code} className="interaction-rule">
                  <div className="interaction-rule-code">{rule.code}</div>
                  <strong>{rule.title}</strong>
                  <p>{rule.description}</p>
                </article>
              ))}
            </div>

            <div className="interaction-demo">
              <div className="interaction-demo-heading">ACCESSIBLE CONTROL BEHAVIOR</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px" }}>
                <button type="button" className="interaction-control">Inspect Portfolio Risk</button>
                <button type="button" className="interaction-control">Open Regime Analysis</button>
                <button type="button" className="interaction-control" disabled>Execution Unavailable</button>
              </div>
            </div>

            <div className="interaction-principle">
              <div className="interaction-principle-copy">
                <div className="interaction-principle-label">INTERACTION PRINCIPLE</div>
                <p className="interaction-principle-text">
                  State is information. Every transition must explain whether the operator is discovering, focusing, selecting or acting — and whether the underlying intelligence is live, processing, unavailable or stale.
                </p>
              </div>
              <div className="interaction-principle-status">STATE SYSTEM READY</div>
            </div>
          </div>
        </section>


        {/* =========================================================
            FOOTER
        ========================================================= */}

        <footer className="d1-footer">
          <span>REGIMEON / VISUAL SYSTEM / D1.4C</span>

          <span className="d1-footer-status">
            Interaction state system under evaluation
          </span>
        </footer>
      </div>
    </main>
  );
}