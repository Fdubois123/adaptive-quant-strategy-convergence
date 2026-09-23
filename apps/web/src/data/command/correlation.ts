import type {
  CorrelationIntelligenceData,
  CorrelationMatrixRow,
} from "@/types/correlation";

const matrixValues = {
  spx: {
    spx: 1,
    ndx: 0.91,
    iwm: 0.82,
    us10y: -0.31,
    gold: 0.12,
    brent: 0.36,
    dxy: -0.42,
    btc: 0.48,
  },
  ndx: {
    spx: 0.91,
    ndx: 1,
    iwm: 0.76,
    us10y: -0.38,
    gold: 0.08,
    brent: 0.29,
    dxy: -0.46,
    btc: 0.57,
  },
  iwm: {
    spx: 0.82,
    ndx: 0.76,
    iwm: 1,
    us10y: -0.24,
    gold: 0.04,
    brent: 0.44,
    dxy: -0.35,
    btc: 0.41,
  },
  us10y: {
    spx: -0.31,
    ndx: -0.38,
    iwm: -0.24,
    us10y: 1,
    gold: 0.27,
    brent: -0.08,
    dxy: 0.34,
    btc: -0.21,
  },
  gold: {
    spx: 0.12,
    ndx: 0.08,
    iwm: 0.04,
    us10y: 0.27,
    gold: 1,
    brent: 0.18,
    dxy: -0.51,
    btc: 0.22,
  },
  brent: {
    spx: 0.36,
    ndx: 0.29,
    iwm: 0.44,
    us10y: -0.08,
    gold: 0.18,
    brent: 1,
    dxy: -0.17,
    btc: 0.26,
  },
  dxy: {
    spx: -0.42,
    ndx: -0.46,
    iwm: -0.35,
    us10y: 0.34,
    gold: -0.51,
    brent: -0.17,
    dxy: 1,
    btc: -0.39,
  },
  btc: {
    spx: 0.48,
    ndx: 0.57,
    iwm: 0.41,
    us10y: -0.21,
    gold: 0.22,
    brent: 0.26,
    dxy: -0.39,
    btc: 1,
  },
} as const;

const assetIds = [
  "spx",
  "ndx",
  "iwm",
  "us10y",
  "gold",
  "brent",
  "dxy",
  "btc",
] as const;

const matrix: CorrelationMatrixRow[] =
  assetIds.map((asset) => ({
    asset,
    cells: assetIds.map((assetY) => {
      const value =
        matrixValues[asset][assetY];

      return {
        assetX: asset,
        assetY,
        value,
        displayValue: value.toFixed(2),
      };
    }),
  }));

export const correlationIntelligenceData: CorrelationIntelligenceData =
  {
    state: {
      source: "demo",
      asOf: "DETERMINISTIC RESEARCH SNAPSHOT",

      regime: "normal",
      regimeLabel: "CONTROLLED DEPENDENCE",

      averageCorrelation: 0.24,
      averageCorrelationDisplay: "0.24",

      diversificationScore: 76,
      diversificationScoreDisplay: "76 / 100",

      concentrationRisk: 34,
      concentrationRiskDisplay: "34 / 100",

      stressCorrelation: 0.68,
      stressCorrelationDisplay: "0.68",

      clusterCount: 4,
      clusterCountDisplay: "4",

      dominantRelationship:
        "US EQUITY GROWTH CLUSTER",
    },

    metrics: [
      {
        id: "average-correlation",
        label: "AVG CORRELATION",
        value: "0.24",
        rawValue: 0.24,
        change: "-0.04",
        direction: "positive",
        helper:
          "Cross-asset dependence remains controlled.",
      },
      {
        id: "diversification",
        label: "DIVERSIFICATION",
        value: "76 / 100",
        rawValue: 76,
        change: "+5",
        direction: "positive",
        helper:
          "Portfolio retains meaningful cross-asset diversification.",
      },
      {
        id: "concentration",
        label: "CONCENTRATION RISK",
        value: "34 / 100",
        rawValue: 34,
        change: "-3",
        direction: "positive",
        helper:
          "Concentration is elevated inside the equity growth cluster.",
      },
      {
        id: "stress-correlation",
        label: "STRESS CORRELATION",
        value: "0.68",
        rawValue: 0.68,
        change: "+0.09",
        direction: "warning",
        helper:
          "Dependence increases materially during simulated stress.",
      },
      {
        id: "clusters",
        label: "ACTIVE CLUSTERS",
        value: "4",
        rawValue: 4,
        change: "STABLE",
        direction: "neutral",
        helper:
          "Four primary dependence groups detected.",
      },
      {
        id: "highest-pair",
        label: "HIGHEST PAIR",
        value: "0.91",
        rawValue: 0.91,
        change: "SPX / NDX",
        direction: "warning",
        helper:
          "US large-cap and growth equity remain tightly coupled.",
      },
    ],

    assets: [
      {
        id: "spx",
        symbol: "SPX",
        label: "S&P 500",
        assetClass: "equity",
        weight: 24,
        weightDisplay: "24%",
      },
      {
        id: "ndx",
        symbol: "NDX",
        label: "Nasdaq 100",
        assetClass: "equity",
        weight: 18,
        weightDisplay: "18%",
      },
      {
        id: "iwm",
        symbol: "IWM",
        label: "Russell 2000",
        assetClass: "equity",
        weight: 12,
        weightDisplay: "12%",
      },
      {
        id: "us10y",
        symbol: "US10Y",
        label: "US 10Y Treasury",
        assetClass: "rates",
        weight: 15,
        weightDisplay: "15%",
      },
      {
        id: "gold",
        symbol: "GOLD",
        label: "Gold",
        assetClass: "commodity",
        weight: 10,
        weightDisplay: "10%",
      },
      {
        id: "brent",
        symbol: "BRENT",
        label: "Brent Crude",
        assetClass: "commodity",
        weight: 8,
        weightDisplay: "8%",
      },
      {
        id: "dxy",
        symbol: "DXY",
        label: "US Dollar Index",
        assetClass: "fx",
        weight: 7,
        weightDisplay: "7%",
      },
      {
        id: "btc",
        symbol: "BTC",
        label: "Bitcoin",
        assetClass: "alternative",
        weight: 6,
        weightDisplay: "6%",
      },
    ],

    matrix,

    rollingHistory: [
      {
        period: "T-11",
        equityRates: -0.18,
        equityGold: 0.22,
        equityDollar: -0.31,
        equityOil: 0.28,
        equityCrypto: 0.34,
      },
      {
        period: "T-10",
        equityRates: -0.21,
        equityGold: 0.19,
        equityDollar: -0.34,
        equityOil: 0.31,
        equityCrypto: 0.37,
      },
      {
        period: "T-9",
        equityRates: -0.24,
        equityGold: 0.17,
        equityDollar: -0.36,
        equityOil: 0.35,
        equityCrypto: 0.39,
      },
      {
        period: "T-8",
        equityRates: -0.27,
        equityGold: 0.15,
        equityDollar: -0.38,
        equityOil: 0.37,
        equityCrypto: 0.42,
      },
      {
        period: "T-7",
        equityRates: -0.29,
        equityGold: 0.13,
        equityDollar: -0.41,
        equityOil: 0.39,
        equityCrypto: 0.46,
      },
      {
        period: "T-6",
        equityRates: -0.33,
        equityGold: 0.11,
        equityDollar: -0.43,
        equityOil: 0.41,
        equityCrypto: 0.49,
      },
      {
        period: "T-5",
        equityRates: -0.36,
        equityGold: 0.09,
        equityDollar: -0.45,
        equityOil: 0.43,
        equityCrypto: 0.52,
      },
      {
        period: "T-4",
        equityRates: -0.34,
        equityGold: 0.1,
        equityDollar: -0.44,
        equityOil: 0.42,
        equityCrypto: 0.54,
      },
      {
        period: "T-3",
        equityRates: -0.32,
        equityGold: 0.11,
        equityDollar: -0.43,
        equityOil: 0.4,
        equityCrypto: 0.55,
      },
      {
        period: "T-2",
        equityRates: -0.3,
        equityGold: 0.12,
        equityDollar: -0.42,
        equityOil: 0.38,
        equityCrypto: 0.56,
      },
      {
        period: "T-1",
        equityRates: -0.31,
        equityGold: 0.12,
        equityDollar: -0.42,
        equityOil: 0.37,
        equityCrypto: 0.57,
      },
      {
        period: "NOW",
        equityRates: -0.31,
        equityGold: 0.12,
        equityDollar: -0.42,
        equityOil: 0.36,
        equityCrypto: 0.48,
      },
    ],

    clusters: [
      {
        id: "growth-risk",
        label: "GROWTH / RISK",
        members: ["spx", "ndx", "iwm", "btc"],
        averageInternalCorrelation: 0.66,
        averageInternalCorrelationDisplay:
          "0.66",
        portfolioWeight: 60,
        portfolioWeightDisplay: "60%",
        riskLevel: "moderate",
        direction: "warning",
        interpretation:
          "Equity and crypto risk exposures form the dominant portfolio dependence cluster.",
      },
      {
        id: "defensive",
        label: "DEFENSIVE",
        members: ["us10y", "gold"],
        averageInternalCorrelation: 0.27,
        averageInternalCorrelationDisplay:
          "0.27",
        portfolioWeight: 25,
        portfolioWeightDisplay: "25%",
        riskLevel: "low",
        direction: "positive",
        interpretation:
          "Rates and gold provide a comparatively independent defensive allocation.",
      },
      {
        id: "macro",
        label: "MACRO",
        members: ["brent", "dxy"],
        averageInternalCorrelation: -0.17,
        averageInternalCorrelationDisplay:
          "-0.17",
        portfolioWeight: 15,
        portfolioWeightDisplay: "15%",
        riskLevel: "low",
        direction: "positive",
        interpretation:
          "Oil and dollar exposure retain useful inverse macro behaviour.",
      },
      {
        id: "alternative",
        label: "ALTERNATIVE LINKAGE",
        members: ["btc", "gold"],
        averageInternalCorrelation: 0.22,
        averageInternalCorrelationDisplay:
          "0.22",
        portfolioWeight: 16,
        portfolioWeightDisplay: "16%",
        riskLevel: "moderate",
        direction: "neutral",
        interpretation:
          "Alternative assets remain only partially coupled despite shared macro sensitivity.",
      },
    ],

    strongestPairs: [
      {
        id: "spx-ndx",
        assetA: "spx",
        assetB: "ndx",
        correlation: 0.91,
        correlationDisplay: "0.91",
        previousCorrelation: 0.87,
        previousCorrelationDisplay: "0.87",
        change: 0.04,
        changeDisplay: "+0.04",
        riskLevel: "high",
        direction: "warning",
        interpretation:
          "Large-cap equity and technology exposure provide limited diversification from each other.",
      },
      {
        id: "spx-iwm",
        assetA: "spx",
        assetB: "iwm",
        correlation: 0.82,
        correlationDisplay: "0.82",
        previousCorrelation: 0.79,
        previousCorrelationDisplay: "0.79",
        change: 0.03,
        changeDisplay: "+0.03",
        riskLevel: "high",
        direction: "warning",
        interpretation:
          "US equity beta remains strongly shared across capitalization segments.",
      },
      {
        id: "ndx-iwm",
        assetA: "ndx",
        assetB: "iwm",
        correlation: 0.76,
        correlationDisplay: "0.76",
        previousCorrelation: 0.72,
        previousCorrelationDisplay: "0.72",
        change: 0.04,
        changeDisplay: "+0.04",
        riskLevel: "moderate",
        direction: "warning",
        interpretation:
          "Technology and small-cap risk are converging under the current risk-on regime.",
      },
      {
        id: "ndx-btc",
        assetA: "ndx",
        assetB: "btc",
        correlation: 0.57,
        correlationDisplay: "0.57",
        previousCorrelation: 0.49,
        previousCorrelationDisplay: "0.49",
        change: 0.08,
        changeDisplay: "+0.08",
        riskLevel: "moderate",
        direction: "warning",
        interpretation:
          "Crypto sensitivity to growth-style risk assets has increased.",
      },
      {
        id: "gold-dxy",
        assetA: "gold",
        assetB: "dxy",
        correlation: -0.51,
        correlationDisplay: "-0.51",
        previousCorrelation: -0.47,
        previousCorrelationDisplay: "-0.47",
        change: -0.04,
        changeDisplay: "-0.04",
        riskLevel: "low",
        direction: "positive",
        interpretation:
          "Gold continues to provide useful inverse sensitivity to US dollar strength.",
      },
    ],

    diversificationComponents: [
      {
        id: "cross-asset",
        label: "CROSS-ASSET MIX",
        score: 84,
        scoreDisplay: "84 / 100",
        contribution: 28,
        contributionDisplay: "+28",
        direction: "positive",
        helper:
          "Rates, commodities and FX reduce dependence on equity beta.",
      },
      {
        id: "cluster-balance",
        label: "CLUSTER BALANCE",
        score: 68,
        scoreDisplay: "68 / 100",
        contribution: 18,
        contributionDisplay: "+18",
        direction: "neutral",
        helper:
          "Growth-risk remains the largest dependence cluster.",
      },
      {
        id: "negative-correlation",
        label: "INVERSE RELATIONSHIPS",
        score: 79,
        scoreDisplay: "79 / 100",
        contribution: 17,
        contributionDisplay: "+17",
        direction: "positive",
        helper:
          "Dollar, rates and gold relationships improve portfolio offset capacity.",
      },
      {
        id: "stress-resilience",
        label: "STRESS RESILIENCE",
        score: 57,
        scoreDisplay: "57 / 100",
        contribution: 13,
        contributionDisplay: "+13",
        direction: "warning",
        helper:
          "Diversification weakens as correlations rise during simulated stress.",
      },
    ],

    breakdown: [
      {
        id: "equity-equity",
        label: "EQUITY / EQUITY",
        current: 0.83,
        currentDisplay: "0.83",
        baseline: 0.76,
        baselineDisplay: "0.76",
        direction: "warning",
      },
      {
        id: "equity-rates",
        label: "EQUITY / RATES",
        current: -0.31,
        currentDisplay: "-0.31",
        baseline: -0.18,
        baselineDisplay: "-0.18",
        direction: "positive",
      },
      {
        id: "equity-commodity",
        label: "EQUITY / COMMODITY",
        current: 0.22,
        currentDisplay: "0.22",
        baseline: 0.19,
        baselineDisplay: "0.19",
        direction: "neutral",
      },
      {
        id: "equity-fx",
        label: "EQUITY / FX",
        current: -0.42,
        currentDisplay: "-0.42",
        baseline: -0.29,
        baselineDisplay: "-0.29",
        direction: "positive",
      },
      {
        id: "equity-alternative",
        label: "EQUITY / ALTERNATIVE",
        current: 0.48,
        currentDisplay: "0.48",
        baseline: 0.34,
        baselineDisplay: "0.34",
        direction: "warning",
      },
    ],

    scenarios: [
      {
        id: "current",
        label: "CURRENT",
        averageCorrelation: 0.24,
        averageCorrelationDisplay: "0.24",
        diversificationScore: 76,
        diversificationScoreDisplay:
          "76 / 100",
        concentrationRisk: 34,
        concentrationRiskDisplay: "34 / 100",
        direction: "positive",
      },
      {
        id: "risk-off",
        label: "RISK-OFF",
        averageCorrelation: 0.46,
        averageCorrelationDisplay: "0.46",
        diversificationScore: 61,
        diversificationScoreDisplay:
          "61 / 100",
        concentrationRisk: 52,
        concentrationRiskDisplay: "52 / 100",
        direction: "warning",
      },
      {
        id: "liquidity-stress",
        label: "LIQUIDITY STRESS",
        averageCorrelation: 0.68,
        averageCorrelationDisplay: "0.68",
        diversificationScore: 43,
        diversificationScoreDisplay:
          "43 / 100",
        concentrationRisk: 71,
        concentrationRiskDisplay: "71 / 100",
        direction: "negative",
      },
      {
        id: "deflation",
        label: "DEFLATION",
        averageCorrelation: 0.31,
        averageCorrelationDisplay: "0.31",
        diversificationScore: 72,
        diversificationScoreDisplay:
          "72 / 100",
        concentrationRisk: 39,
        concentrationRiskDisplay: "39 / 100",
        direction: "neutral",
      },
    ],

    alerts: [
      {
        id: "equity-cluster",
        title: "Equity Cluster Concentration",
        severity: "high",
        status: "active",
        metric: "SPX / NDX",
        metricValue: "0.91",
        detail:
          "Large-cap and technology equity exposures are exhibiting very high dependence.",
      },
      {
        id: "crypto-linkage",
        title: "Growth / Crypto Linkage",
        severity: "moderate",
        status: "monitoring",
        metric: "NDX / BTC",
        metricValue: "0.57",
        detail:
          "Bitcoin correlation with technology risk has increased relative to the prior observation.",
      },
      {
        id: "stress-convergence",
        title: "Stress Correlation Expansion",
        severity: "high",
        status: "monitoring",
        metric: "STRESS AVG",
        metricValue: "0.68",
        detail:
          "Simulated liquidity stress materially increases cross-asset dependence and reduces diversification.",
      },
      {
        id: "dollar-offset",
        title: "Dollar Hedge Relationship",
        severity: "low",
        status: "monitoring",
        metric: "GOLD / DXY",
        metricValue: "-0.51",
        detail:
          "The inverse gold-dollar relationship remains a useful portfolio offset in the current snapshot.",
      },
    ],
  };