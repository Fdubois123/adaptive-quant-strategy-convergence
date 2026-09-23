import type { RegimeIntelligenceData } from "@/types/regime";

export const regimeIntelligenceData: RegimeIntelligenceData = {
  state: {
    currentRegime: "risk-on",
    currentLabel: "RISK-ON EXPANSION",
    confidence: 78,
    confidenceDisplay: "78%",
    transitionRisk: 24,
    transitionRiskDisplay: "24%",
    persistenceScore: 82,
    persistenceDisplay: "82%",
    duration: "18 SESSIONS",
    source: "demo",
    asOf: "DETERMINISTIC RESEARCH SNAPSHOT",
  },

  probabilities: [
    {
      id: "risk-on",
      label: "Risk-On",
      probability: 78,
      displayProbability: "78%",
      description:
        "Positive growth-sensitive asset participation with supportive momentum.",
    },
    {
      id: "low-volatility",
      label: "Low Volatility",
      probability: 9,
      displayProbability: "9%",
      description:
        "Compressed volatility environment with stable cross-asset conditions.",
    },
    {
      id: "transition",
      label: "Transition",
      probability: 6,
      displayProbability: "6%",
      description:
        "Mixed signals indicating potential movement between dominant regimes.",
    },
    {
      id: "risk-off",
      label: "Risk-Off",
      probability: 4,
      displayProbability: "4%",
      description:
        "Defensive positioning with weakening growth and risk-asset participation.",
    },
    {
      id: "high-volatility",
      label: "High Volatility",
      probability: 3,
      displayProbability: "3%",
      description:
        "Elevated dispersion and volatility with unstable market relationships.",
    },
  ],

  history: [
    {
      period: "T-11",
      regime: "risk-off",
      label: "Risk-Off",
      confidence: 61,
    },
    {
      period: "T-10",
      regime: "transition",
      label: "Transition",
      confidence: 58,
    },
    {
      period: "T-09",
      regime: "transition",
      label: "Transition",
      confidence: 64,
    },
    {
      period: "T-08",
      regime: "risk-on",
      label: "Risk-On",
      confidence: 67,
    },
    {
      period: "T-07",
      regime: "risk-on",
      label: "Risk-On",
      confidence: 70,
    },
    {
      period: "T-06",
      regime: "risk-on",
      label: "Risk-On",
      confidence: 72,
    },
    {
      period: "T-05",
      regime: "risk-on",
      label: "Risk-On",
      confidence: 75,
    },
    {
      period: "T-04",
      regime: "low-volatility",
      label: "Low Vol",
      confidence: 62,
    },
    {
      period: "T-03",
      regime: "risk-on",
      label: "Risk-On",
      confidence: 73,
    },
    {
      period: "T-02",
      regime: "risk-on",
      label: "Risk-On",
      confidence: 76,
    },
    {
      period: "T-01",
      regime: "risk-on",
      label: "Risk-On",
      confidence: 77,
    },
    {
      period: "NOW",
      regime: "risk-on",
      label: "Risk-On",
      confidence: 78,
    },
  ],

  drivers: [
    {
      id: "equity-momentum",
      label: "Equity Momentum",
      value: "+1.42σ",
      score: 82,
      direction: "positive",
      interpretation:
        "Broad equity momentum supports continuation of the expansion regime.",
    },
    {
      id: "volatility",
      label: "Volatility Structure",
      value: "0.71σ",
      score: 74,
      direction: "positive",
      interpretation:
        "Volatility remains contained relative to the demo observation window.",
    },
    {
      id: "credit",
      label: "Credit Conditions",
      value: "+0.84σ",
      score: 69,
      direction: "positive",
      interpretation:
        "Credit conditions remain supportive of risk-sensitive assets.",
    },
    {
      id: "rates",
      label: "Rates Pressure",
      value: "-0.36σ",
      score: 43,
      direction: "warning",
      interpretation:
        "Rate pressure introduces moderate resistance to continued expansion.",
    },
    {
      id: "liquidity",
      label: "Liquidity",
      value: "+0.61σ",
      score: 67,
      direction: "positive",
      interpretation:
        "Liquidity conditions remain constructive in the demonstration state.",
    },
    {
      id: "dispersion",
      label: "Cross-Asset Dispersion",
      value: "0.48σ",
      score: 55,
      direction: "neutral",
      interpretation:
        "Dispersion is moderate and does not currently dominate regime classification.",
    },
  ],

  transitionMatrix: [
    {
      regime: "risk-on",
      label: "Risk-On",
      transitions: [
        {
          from: "risk-on",
          to: "risk-on",
          probability: 76,
        },
        {
          from: "risk-on",
          to: "risk-off",
          probability: 5,
        },
        {
          from: "risk-on",
          to: "high-volatility",
          probability: 4,
        },
        {
          from: "risk-on",
          to: "low-volatility",
          probability: 9,
        },
        {
          from: "risk-on",
          to: "transition",
          probability: 6,
        },
      ],
    },
    {
      regime: "risk-off",
      label: "Risk-Off",
      transitions: [
        {
          from: "risk-off",
          to: "risk-on",
          probability: 10,
        },
        {
          from: "risk-off",
          to: "risk-off",
          probability: 62,
        },
        {
          from: "risk-off",
          to: "high-volatility",
          probability: 13,
        },
        {
          from: "risk-off",
          to: "low-volatility",
          probability: 5,
        },
        {
          from: "risk-off",
          to: "transition",
          probability: 10,
        },
      ],
    },
    {
      regime: "high-volatility",
      label: "High Vol",
      transitions: [
        {
          from: "high-volatility",
          to: "risk-on",
          probability: 8,
        },
        {
          from: "high-volatility",
          to: "risk-off",
          probability: 18,
        },
        {
          from: "high-volatility",
          to: "high-volatility",
          probability: 55,
        },
        {
          from: "high-volatility",
          to: "low-volatility",
          probability: 6,
        },
        {
          from: "high-volatility",
          to: "transition",
          probability: 13,
        },
      ],
    },
    {
      regime: "low-volatility",
      label: "Low Vol",
      transitions: [
        {
          from: "low-volatility",
          to: "risk-on",
          probability: 24,
        },
        {
          from: "low-volatility",
          to: "risk-off",
          probability: 5,
        },
        {
          from: "low-volatility",
          to: "high-volatility",
          probability: 7,
        },
        {
          from: "low-volatility",
          to: "low-volatility",
          probability: 56,
        },
        {
          from: "low-volatility",
          to: "transition",
          probability: 8,
        },
      ],
    },
    {
      regime: "transition",
      label: "Transition",
      transitions: [
        {
          from: "transition",
          to: "risk-on",
          probability: 31,
        },
        {
          from: "transition",
          to: "risk-off",
          probability: 19,
        },
        {
          from: "transition",
          to: "high-volatility",
          probability: 14,
        },
        {
          from: "transition",
          to: "low-volatility",
          probability: 12,
        },
        {
          from: "transition",
          to: "transition",
          probability: 24,
        },
      ],
    },
  ],

  signals: [
    {
      id: "breadth",
      label: "Market Breadth",
      value: "71%",
      direction: "positive",
      detail:
        "Broad participation supports the dominant risk-on demonstration state.",
    },
    {
      id: "trend",
      label: "Trend Strength",
      value: "STRONG",
      direction: "positive",
      detail:
        "Momentum structure remains constructive across the demo observation window.",
    },
    {
      id: "stress",
      label: "Stress State",
      value: "LOW",
      direction: "positive",
      detail:
        "Current deterministic stress indicators remain below elevated thresholds.",
    },
    {
      id: "transition",
      label: "Transition Watch",
      value: "MODERATE",
      direction: "warning",
      detail:
        "Rates pressure and dispersion create a moderate transition watch condition.",
    },
  ],
};