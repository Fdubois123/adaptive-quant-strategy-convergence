import type { RiskStressIntelligenceData } from "@/types/risk";

export const riskStressIntelligenceData: RiskStressIntelligenceData = {
  state: {
    source: "demo",
    asOf: "DETERMINISTIC RESEARCH SNAPSHOT",
    overallRiskScore: 42,
    overallRiskDisplay: "42 / 100",
    severity: "moderate",
    riskBudgetUsed: 63,
    riskBudgetDisplay: "63%",
    stressState: "CONTROLLED",
  },

  metrics: [
    {
      id: "var-95",
      label: "95% VaR",
      value: "-$214K",
      rawValue: -214000,
      change: "+3.8%",
      direction: "warning",
      helper: "Estimated one-day loss threshold at 95% confidence.",
    },
    {
      id: "cvar-95",
      label: "95% CVaR",
      value: "-$326K",
      rawValue: -326000,
      change: "+5.2%",
      direction: "warning",
      helper: "Expected loss beyond the 95% VaR threshold.",
    },
    {
      id: "volatility",
      label: "Annualized Volatility",
      value: "11.26%",
      rawValue: 11.26,
      unit: "%",
      change: "-0.82%",
      direction: "positive",
      helper: "Annualized portfolio volatility in the demo snapshot.",
    },
    {
      id: "max-drawdown",
      label: "Max Drawdown",
      value: "-7.38%",
      rawValue: -7.38,
      unit: "%",
      change: "RECOVERED",
      direction: "positive",
      helper: "Maximum peak-to-trough decline across the observation window.",
    },
    {
      id: "beta",
      label: "Portfolio Beta",
      value: "0.84",
      rawValue: 0.84,
      change: "-0.06",
      direction: "neutral",
      helper: "Demo sensitivity relative to the reference equity benchmark.",
    },
    {
      id: "risk-budget",
      label: "Risk Budget Used",
      value: "63%",
      rawValue: 63,
      unit: "%",
      change: "+4%",
      direction: "warning",
      helper: "Current utilization of the configured portfolio risk budget.",
    },
  ],

  factorExposures: [
    {
      id: "equity",
      label: "Equity Market",
      exposure: 72,
      displayExposure: "+0.72",
      contribution: 34,
      displayContribution: "34%",
      direction: "positive",
    },
    {
      id: "rates",
      label: "Rates",
      exposure: -28,
      displayExposure: "-0.28",
      contribution: 14,
      displayContribution: "14%",
      direction: "negative",
    },
    {
      id: "momentum",
      label: "Momentum",
      exposure: 61,
      displayExposure: "+0.61",
      contribution: 19,
      displayContribution: "19%",
      direction: "positive",
    },
    {
      id: "value",
      label: "Value",
      exposure: 24,
      displayExposure: "+0.24",
      contribution: 9,
      displayContribution: "9%",
      direction: "neutral",
    },
    {
      id: "commodity",
      label: "Commodity",
      exposure: 37,
      displayExposure: "+0.37",
      contribution: 13,
      displayContribution: "13%",
      direction: "positive",
    },
    {
      id: "fx",
      label: "FX",
      exposure: -18,
      displayExposure: "-0.18",
      contribution: 11,
      displayContribution: "11%",
      direction: "negative",
    },
  ],

  contributions: [
    {
      id: "equities",
      label: "Equities",
      contribution: 38,
      displayContribution: "38%",
    },
    {
      id: "fixed-income",
      label: "Fixed Income",
      contribution: 16,
      displayContribution: "16%",
    },
    {
      id: "commodities",
      label: "Commodities",
      contribution: 15,
      displayContribution: "15%",
    },
    {
      id: "fx",
      label: "FX",
      contribution: 12,
      displayContribution: "12%",
    },
    {
      id: "alternatives",
      label: "Alternatives",
      contribution: 11,
      displayContribution: "11%",
    },
    {
      id: "cash",
      label: "Cash / Residual",
      contribution: 8,
      displayContribution: "8%",
    },
  ],

  stressScenarios: [
    {
      id: "equity-shock",
      label: "Global Equity Shock",
      category: "MARKET",
      portfolioImpact: -8.7,
      displayImpact: "-8.70%",
      recoveryEstimate: "38 SESSIONS",
      severity: "high",
      description:
        "Simulated broad equity sell-off with simultaneous volatility expansion.",
    },
    {
      id: "rates-shock",
      label: "Rates +150 bps",
      category: "RATES",
      portfolioImpact: -4.2,
      displayImpact: "-4.20%",
      recoveryEstimate: "21 SESSIONS",
      severity: "moderate",
      description:
        "Parallel upward shift in the deterministic interest-rate stress curve.",
    },
    {
      id: "liquidity-shock",
      label: "Liquidity Compression",
      category: "LIQUIDITY",
      portfolioImpact: -6.4,
      displayImpact: "-6.40%",
      recoveryEstimate: "31 SESSIONS",
      severity: "high",
      description:
        "Simulated widening spreads, reduced liquidity and higher execution costs.",
    },
    {
      id: "fx-shock",
      label: "USD +10%",
      category: "FX",
      portfolioImpact: -2.8,
      displayImpact: "-2.80%",
      recoveryEstimate: "14 SESSIONS",
      severity: "moderate",
      description:
        "Deterministic dollar appreciation shock across portfolio FX exposures.",
    },
  ],

  limits: [
    {
      id: "gross-exposure",
      label: "Gross Exposure",
      current: 134,
      limit: 175,
      displayCurrent: "134%",
      displayLimit: "175%",
      utilization: 77,
      displayUtilization: "77%",
      state: "normal",
    },
    {
      id: "net-exposure",
      label: "Net Exposure",
      current: 76,
      limit: 100,
      displayCurrent: "76%",
      displayLimit: "100%",
      utilization: 76,
      displayUtilization: "76%",
      state: "normal",
    },
    {
      id: "var-limit",
      label: "VaR Limit",
      current: 214,
      limit: 300,
      displayCurrent: "$214K",
      displayLimit: "$300K",
      utilization: 71,
      displayUtilization: "71%",
      state: "normal",
    },
    {
      id: "drawdown-limit",
      label: "Drawdown Limit",
      current: 7.38,
      limit: 10,
      displayCurrent: "7.38%",
      displayLimit: "10.00%",
      utilization: 74,
      displayUtilization: "74%",
      state: "watch",
    },
  ],

  drawdownHistory: [
    {
      period: "JAN",
      drawdown: -0.4,
    },
    {
      period: "FEB",
      drawdown: -1.1,
    },
    {
      period: "MAR",
      drawdown: -3.8,
    },
    {
      period: "APR",
      drawdown: -2.2,
    },
    {
      period: "MAY",
      drawdown: -1.4,
    },
    {
      period: "JUN",
      drawdown: -4.7,
    },
    {
      period: "JUL",
      drawdown: -2.1,
    },
    {
      period: "AUG",
      drawdown: -1.3,
    },
    {
      period: "SEP",
      drawdown: -5.2,
    },
    {
      period: "OCT",
      drawdown: -7.38,
    },
    {
      period: "NOV",
      drawdown: -3.4,
    },
    {
      period: "DEC",
      drawdown: -0.9,
    },
  ],

  alerts: [
    {
      id: "drawdown-watch",
      title: "Drawdown Limit Watch",
      severity: "moderate",
      status: "active",
      metric: "74% LIMIT UTILIZATION",
      detail:
        "Historical maximum drawdown is approaching the configured demonstration risk threshold.",
    },
    {
      id: "equity-concentration",
      title: "Equity Factor Concentration",
      severity: "moderate",
      status: "monitoring",
      metric: "+0.72 EXPOSURE",
      detail:
        "Equity market factor remains the largest directional factor exposure.",
    },
    {
      id: "liquidity-stress",
      title: "Liquidity Stress Sensitivity",
      severity: "high",
      status: "monitoring",
      metric: "-6.40% STRESS",
      detail:
        "Liquidity compression produces the second-largest loss across configured scenarios.",
    },
  ],

  stressDistribution: [
    {
      label: "-10%",
      probability: 2,
      loss: -10,
    },
    {
      label: "-8%",
      probability: 5,
      loss: -8,
    },
    {
      label: "-6%",
      probability: 9,
      loss: -6,
    },
    {
      label: "-4%",
      probability: 16,
      loss: -4,
    },
    {
      label: "-2%",
      probability: 28,
      loss: -2,
    },
    {
      label: "0%",
      probability: 38,
      loss: 0,
    },
    {
      label: "+2%",
      probability: 30,
      loss: 2,
    },
    {
      label: "+4%",
      probability: 18,
      loss: 4,
    },
    {
      label: "+6%",
      probability: 10,
      loss: 6,
    },
    {
      label: "+8%",
      probability: 5,
      loss: 8,
    },
    {
      label: "+10%",
      probability: 2,
      loss: 10,
    },
  ],
};