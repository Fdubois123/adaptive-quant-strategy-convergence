import type { StrategyConvergenceData } from "@/types/strategy";

export const strategyConvergenceData: StrategyConvergenceData = {
  state: {
    state: "strong",
    label: "STRONG CONVERGENCE",

    score: 81,
    scoreDisplay: "81 / 100",

    confidence: 84,
    confidenceDisplay: "84%",

    activeStrategies: 5,

    dominantStrategy: "momentum",
    dominantStrategyLabel: "Momentum",

    regime: "RISK-ON EXPANSION",

    source: "demo",
    asOf: "DETERMINISTIC RESEARCH SNAPSHOT",
  },

  metrics: [
    {
      id: "convergence-score",
      label: "Convergence Score",
      value: "81 / 100",
      rawValue: 81,
      direction: "positive",
      helper:
        "Composite agreement across strategy signals, regime fit and risk-adjusted performance.",
    },
    {
      id: "allocation-confidence",
      label: "Allocation Confidence",
      value: "84%",
      rawValue: 84,
      direction: "positive",
      helper:
        "Confidence assigned to the current adaptive strategy allocation.",
    },
    {
      id: "regime-alignment",
      label: "Regime Alignment",
      value: "86%",
      rawValue: 86,
      direction: "positive",
      helper:
        "Weighted compatibility between active strategies and the current market regime.",
    },
    {
      id: "strategy-dispersion",
      label: "Strategy Dispersion",
      value: "21%",
      rawValue: 21,
      direction: "neutral",
      helper:
        "Difference between individual strategy scores inside the convergence framework.",
    },
    {
      id: "rebalance-intensity",
      label: "Rebalance Intensity",
      value: "MODERATE",
      rawValue: 46,
      direction: "warning",
      helper:
        "Magnitude of capital reallocation required by the deterministic allocation engine.",
    },
    {
      id: "active-models",
      label: "Active Strategies",
      value: "5 / 5",
      rawValue: 5,
      direction: "positive",
      helper:
        "Number of strategy models participating in the current convergence decision.",
    },
  ],

  strategies: [
    {
      id: "momentum",
      name: "Cross-Asset Momentum",
      shortName: "MOMENTUM",
      description:
        "Ranks persistent directional strength across the demonstration asset universe.",

      state: "active",
      signal: "strong-long",

      score: 91,
      scoreDisplay: "91",

      regimeCompatibility: 94,
      regimeCompatibilityDisplay: "94%",

      confidence: 89,
      confidenceDisplay: "89%",

      currentWeight: 30,
      currentWeightDisplay: "30%",

      previousWeight: 24,
      previousWeightDisplay: "24%",

      weightChange: 6,
      weightChangeDisplay: "+6%",

      returnContribution: 7.4,
      returnContributionDisplay: "+7.40%",

      sharpe: 2.12,
      volatility: 10.8,
      maxDrawdown: -5.2,
    },

    {
      id: "trend-following",
      name: "Trend Following",
      shortName: "TREND",
      description:
        "Captures persistent medium-horizon trends using directional confirmation.",

      state: "active",
      signal: "long",

      score: 86,
      scoreDisplay: "86",

      regimeCompatibility: 91,
      regimeCompatibilityDisplay: "91%",

      confidence: 85,
      confidenceDisplay: "85%",

      currentWeight: 26,
      currentWeightDisplay: "26%",

      previousWeight: 22,
      previousWeightDisplay: "22%",

      weightChange: 4,
      weightChangeDisplay: "+4%",

      returnContribution: 5.8,
      returnContributionDisplay: "+5.80%",

      sharpe: 1.94,
      volatility: 11.6,
      maxDrawdown: -6.1,
    },

    {
      id: "carry",
      name: "Cross-Asset Carry",
      shortName: "CARRY",
      description:
        "Targets compensated yield and roll differentials across supported markets.",

      state: "active",
      signal: "long",

      score: 74,
      scoreDisplay: "74",

      regimeCompatibility: 78,
      regimeCompatibilityDisplay: "78%",

      confidence: 76,
      confidenceDisplay: "76%",

      currentWeight: 18,
      currentWeightDisplay: "18%",

      previousWeight: 18,
      previousWeightDisplay: "18%",

      weightChange: 0,
      weightChangeDisplay: "0%",

      returnContribution: 2.9,
      returnContributionDisplay: "+2.90%",

      sharpe: 1.51,
      volatility: 8.4,
      maxDrawdown: -4.8,
    },

    {
      id: "mean-reversion",
      name: "Mean Reversion",
      shortName: "MEAN REV",
      description:
        "Trades deviations from estimated equilibrium when reversion conditions are favourable.",

      state: "reduced",
      signal: "neutral",

      score: 63,
      scoreDisplay: "63",

      regimeCompatibility: 58,
      regimeCompatibilityDisplay: "58%",

      confidence: 66,
      confidenceDisplay: "66%",

      currentWeight: 14,
      currentWeightDisplay: "14%",

      previousWeight: 20,
      previousWeightDisplay: "20%",

      weightChange: -6,
      weightChangeDisplay: "-6%",

      returnContribution: 1.4,
      returnContributionDisplay: "+1.40%",

      sharpe: 1.18,
      volatility: 9.7,
      maxDrawdown: -6.7,
    },

    {
      id: "volatility-breakout",
      name: "Volatility Breakout",
      shortName: "VOL BREAK",
      description:
        "Responds to volatility expansion and confirmed price-range breakouts.",

      state: "reduced",
      signal: "neutral",

      score: 57,
      scoreDisplay: "57",

      regimeCompatibility: 49,
      regimeCompatibilityDisplay: "49%",

      confidence: 61,
      confidenceDisplay: "61%",

      currentWeight: 12,
      currentWeightDisplay: "12%",

      previousWeight: 16,
      previousWeightDisplay: "16%",

      weightChange: -4,
      weightChangeDisplay: "-4%",

      returnContribution: 1.22,
      returnContributionDisplay: "+1.22%",

      sharpe: 1.07,
      volatility: 14.9,
      maxDrawdown: -7.1,
    },
  ],

  scoreComponents: [
    {
      id: "regime-fit",
      label: "Regime Fit",
      momentum: 94,
      meanReversion: 58,
      volatilityBreakout: 49,
      trendFollowing: 91,
      carry: 78,
    },
    {
      id: "signal-strength",
      label: "Signal Strength",
      momentum: 92,
      meanReversion: 61,
      volatilityBreakout: 55,
      trendFollowing: 88,
      carry: 72,
    },
    {
      id: "risk-adjusted",
      label: "Risk Adjusted",
      momentum: 88,
      meanReversion: 67,
      volatilityBreakout: 59,
      trendFollowing: 84,
      carry: 76,
    },
    {
      id: "stability",
      label: "Stability",
      momentum: 82,
      meanReversion: 71,
      volatilityBreakout: 52,
      trendFollowing: 80,
      carry: 84,
    },
    {
      id: "diversification",
      label: "Diversification",
      momentum: 76,
      meanReversion: 84,
      volatilityBreakout: 81,
      trendFollowing: 68,
      carry: 79,
    },
  ],

  allocationHistory: [
    {
      period: "T-7",
      momentum: 18,
      meanReversion: 24,
      volatilityBreakout: 20,
      trendFollowing: 20,
      carry: 18,
    },
    {
      period: "T-6",
      momentum: 20,
      meanReversion: 23,
      volatilityBreakout: 19,
      trendFollowing: 20,
      carry: 18,
    },
    {
      period: "T-5",
      momentum: 22,
      meanReversion: 22,
      volatilityBreakout: 18,
      trendFollowing: 21,
      carry: 17,
    },
    {
      period: "T-4",
      momentum: 24,
      meanReversion: 20,
      volatilityBreakout: 17,
      trendFollowing: 22,
      carry: 17,
    },
    {
      period: "T-3",
      momentum: 26,
      meanReversion: 18,
      volatilityBreakout: 15,
      trendFollowing: 24,
      carry: 17,
    },
    {
      period: "T-2",
      momentum: 27,
      meanReversion: 17,
      volatilityBreakout: 14,
      trendFollowing: 25,
      carry: 17,
    },
    {
      period: "T-1",
      momentum: 29,
      meanReversion: 15,
      volatilityBreakout: 13,
      trendFollowing: 25,
      carry: 18,
    },
    {
      period: "NOW",
      momentum: 30,
      meanReversion: 14,
      volatilityBreakout: 12,
      trendFollowing: 26,
      carry: 18,
    },
  ],

  signals: [
    {
      id: "strategy-agreement",
      label: "Strategy Agreement",
      value: "STRONG",
      direction: "positive",
      detail:
        "Momentum and trend-following models agree with the current Risk-On Expansion state.",
    },
    {
      id: "regime-fit",
      label: "Regime Compatibility",
      value: "86%",
      direction: "positive",
      detail:
        "Current weighted strategy allocation shows high compatibility with the active regime.",
    },
    {
      id: "allocation-shift",
      label: "Allocation Shift",
      value: "10% GROSS",
      direction: "warning",
      detail:
        "Capital is rotating from lower-fit mean-reversion and breakout strategies toward directional models.",
    },
    {
      id: "diversification",
      label: "Diversification",
      value: "HEALTHY",
      direction: "positive",
      detail:
        "All five strategies retain non-zero allocations to reduce dependence on a single model family.",
    },
  ],

  allocationDecisions: [
    {
      id: "increase-momentum",
      strategy: "momentum",
      label: "Momentum",

      previousWeight: 24,
      targetWeight: 30,
      change: 6,

      previousWeightDisplay: "24%",
      targetWeightDisplay: "30%",
      changeDisplay: "+6%",

      reason:
        "Highest composite score and strongest compatibility with the Risk-On Expansion regime.",

      direction: "positive",
    },
    {
      id: "increase-trend",
      strategy: "trend-following",
      label: "Trend Following",

      previousWeight: 22,
      targetWeight: 26,
      change: 4,

      previousWeightDisplay: "22%",
      targetWeightDisplay: "26%",
      changeDisplay: "+4%",

      reason:
        "Persistent directional signals and high regime compatibility support additional allocation.",

      direction: "positive",
    },
    {
      id: "hold-carry",
      strategy: "carry",
      label: "Carry",

      previousWeight: 18,
      targetWeight: 18,
      change: 0,

      previousWeightDisplay: "18%",
      targetWeightDisplay: "18%",
      changeDisplay: "0%",

      reason:
        "Stable risk-adjusted performance supports maintaining the existing allocation.",

      direction: "neutral",
    },
    {
      id: "reduce-mean-reversion",
      strategy: "mean-reversion",
      label: "Mean Reversion",

      previousWeight: 20,
      targetWeight: 14,
      change: -6,

      previousWeightDisplay: "20%",
      targetWeightDisplay: "14%",
      changeDisplay: "-6%",

      reason:
        "Persistent directional conditions reduce expected opportunity for short-horizon reversion.",

      direction: "warning",
    },
    {
      id: "reduce-volatility-breakout",
      strategy: "volatility-breakout",
      label: "Volatility Breakout",

      previousWeight: 16,
      targetWeight: 12,
      change: -4,

      previousWeightDisplay: "16%",
      targetWeightDisplay: "12%",
      changeDisplay: "-4%",

      reason:
        "Contained volatility lowers current compatibility with volatility-expansion signals.",

      direction: "warning",
    },
  ],
};