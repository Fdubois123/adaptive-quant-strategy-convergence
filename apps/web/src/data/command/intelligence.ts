import type {
  IntelligenceCommandData,
} from "@/types/intelligence";

export const intelligenceCommandData: IntelligenceCommandData = {
  state: {
    source: "demo",
    asOf: "DETERMINISTIC RESEARCH SNAPSHOT",

    activeAlerts: 5,
    criticalAlerts: 1,
    monitoringEvents: 7,
    acknowledgedEvents: 3,

    intelligenceScore: 74,
    freshnessScore: 96,

    dominantTheme:
      "RISK-ON WITH SELECTIVE CONCENTRATION PRESSURE",

    operatingState:
      "HEIGHTENED MONITORING",
  },

  metrics: [
    {
      id: "active-alerts",
      label: "Active Alerts",
      value: "5",
      detail:
        "Events currently requiring monitoring or review.",
      direction: "warning",
      delta: "+2",
    },

    {
      id: "critical-events",
      label: "Critical Events",
      value: "1",
      detail:
        "Highest-severity intelligence event in the current snapshot.",
      direction: "negative",
      delta: "+1",
    },

    {
      id: "intelligence-score",
      label: "Intelligence Score",
      value: "74 / 100",
      detail:
        "Composite environment assessment across portfolio, market and model signals.",
      direction: "positive",
      delta: "+4",
    },

    {
      id: "freshness",
      label: "Data Freshness",
      value: "96%",
      detail:
        "Deterministic source coverage available to the intelligence layer.",
      direction: "positive",
      delta: "+1%",
    },

    {
      id: "monitoring",
      label: "Monitoring",
      value: "7",
      detail:
        "Events retained under active observation.",
      direction: "neutral",
      delta: "+1",
    },

    {
      id: "acknowledged",
      label: "Acknowledged",
      value: "3",
      detail:
        "Events reviewed by the command workflow.",
      direction: "neutral",
      delta: "STABLE",
    },
  ],

  events: [
    {
      id: "evt-equity-concentration",

      timestamp: "14:32",

      category: "correlation",
      type: "correlation-event",

      severity: "high",
      priority: "urgent",
      status: "active",
      freshness: "fresh",

      title:
        "US Equity Growth Cluster Concentration",

      summary:
        "SPX and NDX dependence has moved into a high-correlation state, reducing effective diversification inside the growth allocation.",

      metric: "SPX / NDX",
      metricValue: "0.91",

      sourceLabel:
        "Correlation Intelligence",

      confidence: 92,

      affectedAreas: [
        "US Equity",
        "Growth",
        "Momentum",
      ],

      analystContext:
        "The portfolio remains diversified across asset classes, but intra-equity diversification has weakened as large-cap growth exposures increasingly move together.",

      recommendedAction:
        "Review incremental growth exposure and monitor whether correlation remains above the concentration threshold.",
    },

    {
      id: "evt-drawdown-watch",

      timestamp: "14:24",

      category: "risk",
      type: "risk-alert",

      severity: "moderate",
      priority: "elevated",
      status: "monitoring",
      freshness: "fresh",

      title:
        "Drawdown Limit Utilization Elevated",

      summary:
        "Historical maximum drawdown utilization remains close to the portfolio watch threshold.",

      metric: "Limit Utilization",
      metricValue: "74%",

      sourceLabel:
        "Risk & Stress Intelligence",

      confidence: 88,

      affectedAreas: [
        "Portfolio Risk",
        "Risk Budget",
      ],

      analystContext:
        "The portfolio has recovered from the deterministic maximum drawdown observation, but remaining distance to the configured limit is narrower than normal.",

      recommendedAction:
        "Maintain drawdown monitoring and avoid unnecessary concentration increases during elevated volatility.",
    },

    {
      id: "evt-regime",

      timestamp: "14:17",

      category: "regime",
      type: "regime-shift",

      severity: "low",
      priority: "routine",
      status: "monitoring",
      freshness: "fresh",

      title:
        "Risk-On Regime Persistence Confirmed",

      summary:
        "The regime model continues to classify the environment as Risk-On Expansion with high persistence.",

      metric: "Confidence",
      metricValue: "78%",

      sourceLabel:
        "Market Regime Intelligence",

      confidence: 78,

      affectedAreas: [
        "Regime Model",
        "Strategy Allocation",
      ],

      analystContext:
        "Momentum, trend and cross-asset breadth remain supportive, while rates pressure prevents the environment from being classified as uniformly benign.",

      recommendedAction:
        "Maintain pro-cyclical allocation while retaining protection against rates and volatility shocks.",
    },

    {
      id: "evt-strategy",

      timestamp: "14:08",

      category: "strategy",
      type: "strategy-signal",

      severity: "moderate",
      priority: "elevated",
      status: "active",
      freshness: "fresh",

      title:
        "Strategy Convergence Strengthening",

      summary:
        "Momentum and trend-following models have increased agreement under the current regime.",

      metric: "Convergence",
      metricValue: "81 / 100",

      sourceLabel:
        "Strategy Convergence",

      confidence: 84,

      affectedAreas: [
        "Momentum",
        "Trend Following",
        "Adaptive Allocation",
      ],

      analystContext:
        "The current strategy mix favors directional models while reducing mean-reversion and volatility-breakout allocations.",

      recommendedAction:
        "Retain adaptive overweight while monitoring crowding and equity-factor concentration.",
    },

    {
      id: "evt-global-rates",

      timestamp: "13:56",

      category: "market",
      type: "market-event",

      severity: "moderate",
      priority: "elevated",
      status: "monitoring",
      freshness: "fresh",

      title:
        "Rates Pressure Remains Elevated",

      summary:
        "Global rates conditions continue to represent the principal macro counterweight to the Risk-On environment.",

      metric: "Rates Pressure",
      metricValue: "62 / 100",

      sourceLabel:
        "Global Market Intelligence",

      confidence: 81,

      affectedAreas: [
        "Rates",
        "Duration",
        "Equity Valuation",
      ],

      analystContext:
        "Risk assets remain supported, but higher rates can compress valuation multiples and increase sensitivity in duration-heavy growth exposure.",

      recommendedAction:
        "Monitor duration exposure and test the portfolio against the +150bps rates scenario.",
    },

    {
      id: "evt-liquidity",

      timestamp: "13:41",

      category: "portfolio",
      type: "risk-alert",

      severity: "critical",
      priority: "urgent",
      status: "active",
      freshness: "fresh",

      title:
        "Liquidity Stress Tail Sensitivity",

      summary:
        "The deterministic liquidity-compression scenario produces one of the largest modeled portfolio losses.",

      metric: "Stress Impact",
      metricValue: "-6.40%",

      sourceLabel:
        "Stress Transformation",

      confidence: 90,

      affectedAreas: [
        "Alternatives",
        "Equity",
        "Volatility",
        "Liquidity",
      ],

      analystContext:
        "Normal-state portfolio risk remains controlled, but dependence increases materially when liquidity conditions deteriorate.",

      recommendedAction:
        "Review liquidity-sensitive exposures and preserve sufficient portfolio flexibility for stress conditions.",
    },

    {
      id: "evt-model",

      timestamp: "13:28",

      category: "model",
      type: "model-event",

      severity: "info",
      priority: "routine",
      status: "acknowledged",
      freshness: "fresh",

      title:
        "Regime Model Snapshot Completed",

      summary:
        "Deterministic regime inference completed successfully for the current research snapshot.",

      metric: "Model State",
      metricValue: "READY",

      sourceLabel:
        "REGIMEON Model Layer",

      confidence: 94,

      affectedAreas: [
        "Regime Model",
      ],

      analystContext:
        "No model execution fault is represented in the deterministic demonstration state.",

      recommendedAction:
        "No intervention required.",
    },

    {
      id: "evt-system",

      timestamp: "13:16",

      category: "system",
      type: "system-event",

      severity: "info",
      priority: "routine",
      status: "acknowledged",
      freshness: "fresh",

      title:
        "Research Environment Operational",

      summary:
        "Frontend command environment and API foundation are available for the demonstration workflow.",

      metric: "Environment",
      metricValue: "READY",

      sourceLabel:
        "REGIMEON Core",

      confidence: 100,

      affectedAreas: [
        "Command Environment",
      ],

      analystContext:
        "Advanced engines remain represented by deterministic demonstration datasets unless explicitly connected to backend computation.",

      recommendedAction:
        "Continue demonstration in DEMO data mode.",
    },
  ],

  alerts: [
    {
      id: "alert-liquidity",

      timestamp: "13:41",

      severity: "critical",
      status: "active",

      category: "risk",

      title:
        "Liquidity Stress Sensitivity",

      description:
        "Portfolio loss increases materially under the deterministic liquidity-compression scenario.",

      trigger:
        "Scenario loss exceeds stress watch threshold",

      currentValue:
        "-6.40%",

      threshold:
        "-5.00%",

      affectedArea:
        "Portfolio / Liquidity",

      recommendedAction:
        "Review liquidity-sensitive exposures and stress resilience.",
    },

    {
      id: "alert-correlation",

      timestamp: "14:32",

      severity: "high",
      status: "active",

      category: "correlation",

      title:
        "Equity Correlation Concentration",

      description:
        "SPX and NDX correlation is elevated relative to the portfolio diversification objective.",

      trigger:
        "Pair correlation > 0.85",

      currentValue:
        "0.91",

      threshold:
        "0.85",

      affectedArea:
        "US Equity Growth",

      recommendedAction:
        "Review incremental growth concentration.",
    },

    {
      id: "alert-drawdown",

      timestamp: "14:24",

      severity: "moderate",
      status: "monitoring",

      category: "risk",

      title:
        "Drawdown Limit Watch",

      description:
        "Drawdown limit utilization remains elevated despite recovery.",

      trigger:
        "Limit utilization > 70%",

      currentValue:
        "74%",

      threshold:
        "70%",

      affectedArea:
        "Portfolio Risk",

      recommendedAction:
        "Maintain enhanced drawdown monitoring.",
    },

    {
      id: "alert-rates",

      timestamp: "13:56",

      severity: "moderate",
      status: "monitoring",

      category: "market",

      title:
        "Rates Pressure",

      description:
        "Rates remain the principal macro pressure against the current Risk-On regime.",

      trigger:
        "Rates pressure score > 60",

      currentValue:
        "62 / 100",

      threshold:
        "60 / 100",

      affectedArea:
        "Rates / Duration",

      recommendedAction:
        "Review duration sensitivity and rates stress scenarios.",
    },

    {
      id: "alert-allocation",

      timestamp: "14:08",

      severity: "low",
      status: "monitoring",

      category: "strategy",

      title:
        "Adaptive Allocation Shift",

      description:
        "Momentum and trend allocations increased while mean-reversion and volatility-breakout weights declined.",

      trigger:
        "Gross strategy reallocation >= 10%",

      currentValue:
        "10%",

      threshold:
        "10%",

      affectedArea:
        "Strategy Allocation",

      recommendedAction:
        "Monitor convergence persistence before further reallocation.",
    },
  ],

  signals: [
    {
      id: "signal-regime",

      label:
        "Regime Confidence",

      category: "regime",

      value: "78%",

      score: 78,

      direction: "positive",

      description:
        "Risk-On Expansion remains the dominant deterministic regime.",
    },

    {
      id: "signal-convergence",

      label:
        "Strategy Convergence",

      category: "strategy",

      value: "81 / 100",

      score: 81,

      direction: "positive",

      description:
        "Directional strategies remain strongly aligned.",
    },

    {
      id: "signal-diversification",

      label:
        "Diversification",

      category: "correlation",

      value: "76 / 100",

      score: 76,

      direction: "positive",

      description:
        "Cross-asset diversification remains healthy despite equity clustering.",
    },

    {
      id: "signal-risk",

      label:
        "Portfolio Risk",

      category: "risk",

      value: "42 / 100",

      score: 42,

      direction: "neutral",

      description:
        "Normal-state portfolio risk remains controlled.",
    },

    {
      id: "signal-stress",

      label:
        "Stress Sensitivity",

      category: "risk",

      value: "68 / 100",

      score: 68,

      direction: "warning",

      description:
        "Cross-asset dependence increases under liquidity stress.",
    },

    {
      id: "signal-global",

      label:
        "Global Breadth",

      category: "market",

      value: "68%",

      score: 68,

      direction: "positive",

      description:
        "Participation remains supportive across major regions.",
    },
  ],

  modelEvents: [
    {
      id: "model-regime",

      model:
        "Market Regime Classifier",

      timestamp: "14:17",

      event:
        "Risk-On Expansion classification retained",

      confidence: 78,

      severity: "low",
      status: "monitoring",

      detail:
        "Persistence remains high while transition risk stays contained.",
    },

    {
      id: "model-convergence",

      model:
        "Strategy Convergence Engine",

      timestamp: "14:08",

      event:
        "Strong convergence state detected",

      confidence: 84,

      severity: "moderate",
      status: "active",

      detail:
        "Momentum and trend-following models provide the strongest regime alignment.",
    },

    {
      id: "model-correlation",

      model:
        "Correlation Intelligence",

      timestamp: "14:32",

      event:
        "Equity concentration threshold exceeded",

      confidence: 92,

      severity: "high",
      status: "active",

      detail:
        "SPX/NDX dependence reached 0.91 in the deterministic snapshot.",
    },

    {
      id: "model-stress",

      model:
        "Stress Transformation Engine",

      timestamp: "13:41",

      event:
        "Liquidity scenario tail sensitivity detected",

      confidence: 90,

      severity: "critical",
      status: "active",

      detail:
        "Liquidity compression produces a modeled portfolio impact of -6.40%.",
    },
  ],

  freshness: [
    {
      id: "fresh-portfolio",

      source:
        "Portfolio Snapshot",

      freshness: "fresh",

      lastUpdate:
        "14:34",

      latency:
        "DEMO",

      coverage: 100,
    },

    {
      id: "fresh-regime",

      source:
        "Regime Intelligence",

      freshness: "fresh",

      lastUpdate:
        "14:17",

      latency:
        "DEMO",

      coverage: 100,
    },

    {
      id: "fresh-risk",

      source:
        "Risk Engine",

      freshness: "fresh",

      lastUpdate:
        "14:24",

      latency:
        "DEMO",

      coverage: 98,
    },

    {
      id: "fresh-strategy",

      source:
        "Strategy Engine",

      freshness: "fresh",

      lastUpdate:
        "14:08",

      latency:
        "DEMO",

      coverage: 96,
    },

    {
      id: "fresh-global",

      source:
        "Global Markets",

      freshness: "fresh",

      lastUpdate:
        "13:56",

      latency:
        "DEMO",

      coverage: 94,
    },

    {
      id: "fresh-correlation",

      source:
        "Correlation Engine",

      freshness: "fresh",

      lastUpdate:
        "14:32",

      latency:
        "DEMO",

      coverage: 100,
    },
  ],

  analystNotes: [
    {
      id: "note-1",

      timestamp: "14:35",

      title:
        "Risk-On, But Not Risk-Free",

      context:
        "Regime persistence, global breadth and strategy convergence remain constructive.",

      implication:
        "Portfolio posture can remain pro-cyclical, but equity concentration and rates sensitivity should constrain aggressive risk expansion.",

      priority: "elevated",
    },

    {
      id: "note-2",

      timestamp: "14:20",

      title:
        "Diversification Quality Requires Monitoring",

      context:
        "Overall diversification remains healthy while correlation inside US growth exposure has increased.",

      implication:
        "Nominal position count may overstate effective diversification when highly correlated equity exposures dominate risk.",

      priority: "elevated",
    },

    {
      id: "note-3",

      timestamp: "13:45",

      title:
        "Liquidity Is the Primary Tail Watch",

      context:
        "The liquidity-compression scenario generates a material loss and stronger cross-asset dependence.",

      implication:
        "Stress resilience depends not only on normal volatility but also on maintaining flexibility during liquidity deterioration.",

      priority: "urgent",
    },
  ],

  categorySummary: [
    {
      category: "portfolio",
      label: "Portfolio",

      activeEvents: 1,

      severity: "moderate",

      score: 72,

      direction: "neutral",
    },

    {
      category: "risk",
      label: "Risk",

      activeEvents: 3,

      severity: "critical",

      score: 58,

      direction: "warning",
    },

    {
      category: "regime",
      label: "Regime",

      activeEvents: 1,

      severity: "low",

      score: 78,

      direction: "positive",
    },

    {
      category: "strategy",
      label: "Strategy",

      activeEvents: 2,

      severity: "moderate",

      score: 81,

      direction: "positive",
    },

    {
      category: "market",
      label: "Markets",

      activeEvents: 2,

      severity: "moderate",

      score: 68,

      direction: "neutral",
    },

    {
      category: "correlation",
      label: "Correlation",

      activeEvents: 2,

      severity: "high",

      score: 64,

      direction: "warning",
    },

    {
      category: "model",
      label: "Models",

      activeEvents: 4,

      severity: "moderate",

      score: 86,

      direction: "positive",
    },

    {
      category: "system",
      label: "System",

      activeEvents: 0,

      severity: "info",

      score: 96,

      direction: "positive",
    },
  ],

  timeline: [
    {
      label: "T-7",
      portfolio: 42,
      risk: 38,
      regime: 61,
      market: 57,
      strategy: 54,
    },

    {
      label: "T-6",
      portfolio: 45,
      risk: 41,
      regime: 63,
      market: 59,
      strategy: 58,
    },

    {
      label: "T-5",
      portfolio: 49,
      risk: 44,
      regime: 66,
      market: 61,
      strategy: 62,
    },

    {
      label: "T-4",
      portfolio: 52,
      risk: 47,
      regime: 69,
      market: 63,
      strategy: 67,
    },

    {
      label: "T-3",
      portfolio: 57,
      risk: 51,
      regime: 72,
      market: 64,
      strategy: 72,
    },

    {
      label: "T-2",
      portfolio: 61,
      risk: 55,
      regime: 74,
      market: 66,
      strategy: 76,
    },

    {
      label: "T-1",
      portfolio: 66,
      risk: 61,
      regime: 77,
      market: 67,
      strategy: 79,
    },

    {
      label: "NOW",
      portfolio: 72,
      risk: 68,
      regime: 78,
      market: 68,
      strategy: 81,
    },
  ],
};