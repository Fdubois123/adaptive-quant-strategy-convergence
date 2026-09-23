import type {
  RiskSurfaceIntelligenceData,
  RiskSurfaceNodeId,
} from "@/types/risk-surface";

export const riskSurfaceIntelligenceData: RiskSurfaceIntelligenceData =
  {
    state: {
      source: "demo",
      asOf: "DETERMINISTIC RESEARCH SNAPSHOT",

      mode: "normal",

      portfolioRiskScore: 42,
      portfolioRiskScoreDisplay: "42 / 100",

      stressRiskScore: 74,
      stressRiskScoreDisplay: "74 / 100",

      grossExposure: 134,
      grossExposureDisplay: "134%",

      netExposure: 76,
      netExposureDisplay: "76%",

      factorConcentration: 61,
      factorConcentrationDisplay: "61 / 100",

      stressAmplification: 1.76,
      stressAmplificationDisplay: "1.76×",

      activeNodes: 13,
      activeNodesDisplay: "13",

      activeLinks: 20,
      activeLinksDisplay: "20",

      dominantRisk: "EQUITY BETA",

      dominantCluster: "GROWTH / RISK",
    },

    metrics: [
      {
        id: "portfolio-risk",
        label: "PORTFOLIO RISK",
        value: "42 / 100",
        rawValue: 42,
        stressValue: "74 / 100",
        stressRawValue: 74,
        change: "+32 STRESS",
        direction: "warning",
        helper:
          "Composite portfolio risk intensity across active exposures.",
      },
      {
        id: "gross-exposure",
        label: "GROSS EXPOSURE",
        value: "134%",
        rawValue: 134,
        stressValue: "134%",
        stressRawValue: 134,
        change: "UNCHANGED",
        direction: "neutral",
        helper:
          "Absolute long and short portfolio exposure represented in the surface.",
      },
      {
        id: "net-exposure",
        label: "NET EXPOSURE",
        value: "76%",
        rawValue: 76,
        stressValue: "76%",
        stressRawValue: 76,
        change: "UNCHANGED",
        direction: "neutral",
        helper:
          "Directional portfolio exposure after offsetting positions.",
      },
      {
        id: "factor-concentration",
        label: "FACTOR CONCENTRATION",
        value: "61 / 100",
        rawValue: 61,
        stressValue: "79 / 100",
        stressRawValue: 79,
        change: "+18",
        direction: "warning",
        helper:
          "Shared factor dependence increases under the stress transformation.",
      },
      {
        id: "stress-amplification",
        label: "STRESS AMPLIFICATION",
        value: "1.00×",
        rawValue: 1,
        stressValue: "1.76×",
        stressRawValue: 1.76,
        change: "+76%",
        direction: "negative",
        helper:
          "Relative amplification of portfolio risk under the simulated stress state.",
      },
      {
        id: "network-density",
        label: "RISK NETWORK",
        value: "20 LINKS",
        rawValue: 20,
        stressValue: "20 LINKS",
        stressRawValue: 20,
        change: "13 NODES",
        direction: "positive",
        helper:
          "Asset and factor relationships represented by the interactive network.",
      },
    ],

    nodes: [
      {
        id: "spx",
        symbol: "SPX",
        label: "S&P 500",
        nodeType: "asset",
        assetClass: "equity",

        position: {
          x: -3.8,
          y: 0,
          z: 0.8,
        },

        exposure: 24,
        exposureDisplay: "24%",

        riskScore: 58,
        riskScoreDisplay: "58 / 100",

        contribution: 18,
        contributionDisplay: "18%",

        volatility: 13.8,
        volatilityDisplay: "13.8%",

        normalHeight: 1.8,
        stressHeight: 3.6,

        normalScale: 1.15,
        stressScale: 1.42,

        riskLevel: "moderate",
        direction: "warning",

        description:
          "Core US equity beta exposure with strong linkage to growth and volatility factors.",
      },
      {
        id: "ndx",
        symbol: "NDX",
        label: "Nasdaq 100",
        nodeType: "asset",
        assetClass: "equity",

        position: {
          x: -2.1,
          y: 0,
          z: -1.7,
        },

        exposure: 18,
        exposureDisplay: "18%",

        riskScore: 72,
        riskScoreDisplay: "72 / 100",

        contribution: 21,
        contributionDisplay: "21%",

        volatility: 17.6,
        volatilityDisplay: "17.6%",

        normalHeight: 2.5,
        stressHeight: 4.8,

        normalScale: 1.08,
        stressScale: 1.48,

        riskLevel: "high",
        direction: "negative",

        description:
          "Growth-heavy equity exposure carrying elevated volatility and concentration sensitivity.",
      },
      {
        id: "iwm",
        symbol: "IWM",
        label: "Russell 2000",
        nodeType: "asset",
        assetClass: "equity",

        position: {
          x: -4.2,
          y: 0,
          z: -2.6,
        },

        exposure: 12,
        exposureDisplay: "12%",

        riskScore: 66,
        riskScoreDisplay: "66 / 100",

        contribution: 13,
        contributionDisplay: "13%",

        volatility: 20.4,
        volatilityDisplay: "20.4%",

        normalHeight: 2.2,
        stressHeight: 4.2,

        normalScale: 0.94,
        stressScale: 1.28,

        riskLevel: "high",
        direction: "negative",

        description:
          "Small-cap equity exposure with greater cyclical and liquidity sensitivity.",
      },
      {
        id: "us10y",
        symbol: "US10Y",
        label: "US 10Y Treasury",
        nodeType: "asset",
        assetClass: "rates",

        position: {
          x: 0.8,
          y: 0,
          z: 3.4,
        },

        exposure: 15,
        exposureDisplay: "15%",

        riskScore: 38,
        riskScoreDisplay: "38 / 100",

        contribution: 9,
        contributionDisplay: "9%",

        volatility: 8.7,
        volatilityDisplay: "8.7%",

        normalHeight: 1.25,
        stressHeight: 2.25,

        normalScale: 0.98,
        stressScale: 1.12,

        riskLevel: "moderate",
        direction: "neutral",

        description:
          "Duration exposure providing diversification while retaining sensitivity to rates repricing.",
      },
      {
        id: "gold",
        symbol: "GOLD",
        label: "Gold",
        nodeType: "asset",
        assetClass: "commodity",

        position: {
          x: 3.6,
          y: 0,
          z: 2.5,
        },

        exposure: 10,
        exposureDisplay: "10%",

        riskScore: 29,
        riskScoreDisplay: "29 / 100",

        contribution: 7,
        contributionDisplay: "7%",

        volatility: 12.1,
        volatilityDisplay: "12.1%",

        normalHeight: 1,
        stressHeight: 1.45,

        normalScale: 0.9,
        stressScale: 1,

        riskLevel: "low",
        direction: "positive",

        description:
          "Defensive commodity exposure providing partial offset to dollar and equity risk.",
      },
      {
        id: "brent",
        symbol: "BRENT",
        label: "Brent Crude",
        nodeType: "asset",
        assetClass: "commodity",

        position: {
          x: 4.2,
          y: 0,
          z: -0.6,
        },

        exposure: 8,
        exposureDisplay: "8%",

        riskScore: 54,
        riskScoreDisplay: "54 / 100",

        contribution: 8,
        contributionDisplay: "8%",

        volatility: 24.3,
        volatilityDisplay: "24.3%",

        normalHeight: 1.75,
        stressHeight: 3.1,

        normalScale: 0.84,
        stressScale: 1.08,

        riskLevel: "moderate",
        direction: "warning",

        description:
          "Energy exposure sensitive to inflation, geopolitical shocks and cyclical demand.",
      },
      {
        id: "dxy",
        symbol: "DXY",
        label: "US Dollar Index",
        nodeType: "asset",
        assetClass: "fx",

        position: {
          x: 2.6,
          y: 0,
          z: -3.2,
        },

        exposure: 7,
        exposureDisplay: "7%",

        riskScore: 31,
        riskScoreDisplay: "31 / 100",

        contribution: 6,
        contributionDisplay: "6%",

        volatility: 7.9,
        volatilityDisplay: "7.9%",

        normalHeight: 1.05,
        stressHeight: 1.8,

        normalScale: 0.78,
        stressScale: 0.92,

        riskLevel: "low",
        direction: "positive",

        description:
          "Dollar exposure provides partial inverse sensitivity to equity and commodity risk.",
      },
      {
        id: "btc",
        symbol: "BTC",
        label: "Bitcoin",
        nodeType: "asset",
        assetClass: "alternative",

        position: {
          x: 0.3,
          y: 0,
          z: -4.3,
        },

        exposure: 6,
        exposureDisplay: "6%",

        riskScore: 81,
        riskScoreDisplay: "81 / 100",

        contribution: 10,
        contributionDisplay: "10%",

        volatility: 46.8,
        volatilityDisplay: "46.8%",

        normalHeight: 3,
        stressHeight: 5.6,

        normalScale: 0.82,
        stressScale: 1.24,

        riskLevel: "critical",
        direction: "negative",

        description:
          "High-volatility alternative exposure with increasing linkage to growth-style risk assets.",
      },

      /* FACTOR NODES */

      {
        id: "equity-factor",
        symbol: "EQ",
        label: "Equity Beta",
        nodeType: "factor",
        assetClass: "factor",

        position: {
          x: -1.9,
          y: 0,
          z: 0.6,
        },

        exposure: 72,
        exposureDisplay: "+0.72",

        riskScore: 74,
        riskScoreDisplay: "74 / 100",

        contribution: 34,
        contributionDisplay: "34%",

        volatility: 0,
        volatilityDisplay: "FACTOR",

        normalHeight: 2.8,
        stressHeight: 5,

        normalScale: 1.28,
        stressScale: 1.65,

        riskLevel: "high",
        direction: "warning",

        description:
          "Dominant systematic factor connecting the portfolio's primary equity exposures.",
      },
      {
        id: "rates-factor",
        symbol: "RATES",
        label: "Rates Factor",
        nodeType: "factor",
        assetClass: "factor",

        position: {
          x: 0.2,
          y: 0,
          z: 1.6,
        },

        exposure: 28,
        exposureDisplay: "-0.28",

        riskScore: 43,
        riskScoreDisplay: "43 / 100",

        contribution: 14,
        contributionDisplay: "14%",

        volatility: 0,
        volatilityDisplay: "FACTOR",

        normalHeight: 1.5,
        stressHeight: 2.9,

        normalScale: 1.02,
        stressScale: 1.25,

        riskLevel: "moderate",
        direction: "warning",

        description:
          "Interest-rate sensitivity linking duration, growth equity and macro exposures.",
      },
      {
        id: "commodity-factor",
        symbol: "CMDTY",
        label: "Commodity Factor",
        nodeType: "factor",
        assetClass: "factor",

        position: {
          x: 2.5,
          y: 0,
          z: 0.9,
        },

        exposure: 37,
        exposureDisplay: "+0.37",

        riskScore: 49,
        riskScoreDisplay: "49 / 100",

        contribution: 13,
        contributionDisplay: "13%",

        volatility: 0,
        volatilityDisplay: "FACTOR",

        normalHeight: 1.65,
        stressHeight: 2.75,

        normalScale: 1.02,
        stressScale: 1.22,

        riskLevel: "moderate",
        direction: "neutral",

        description:
          "Shared commodity sensitivity linking energy, inflation and defensive real-asset exposure.",
      },
      {
        id: "fx-factor",
        symbol: "FX",
        label: "FX Factor",
        nodeType: "factor",
        assetClass: "factor",

        position: {
          x: 1.3,
          y: 0,
          z: -1.8,
        },

        exposure: 18,
        exposureDisplay: "-0.18",

        riskScore: 34,
        riskScoreDisplay: "34 / 100",

        contribution: 11,
        contributionDisplay: "11%",

        volatility: 0,
        volatilityDisplay: "FACTOR",

        normalHeight: 1.15,
        stressHeight: 2.1,

        normalScale: 0.94,
        stressScale: 1.08,

        riskLevel: "low",
        direction: "positive",

        description:
          "Currency factor providing offset capacity while transmitting global liquidity conditions.",
      },
      {
        id: "volatility-factor",
        symbol: "VOL",
        label: "Volatility Factor",
        nodeType: "factor",
        assetClass: "factor",

        position: {
          x: -0.2,
          y: 0,
          z: -0.6,
        },

        exposure: 61,
        exposureDisplay: "0.61",

        riskScore: 69,
        riskScoreDisplay: "69 / 100",

        contribution: 19,
        contributionDisplay: "19%",

        volatility: 0,
        volatilityDisplay: "FACTOR",

        normalHeight: 2.35,
        stressHeight: 4.9,

        normalScale: 1.16,
        stressScale: 1.55,

        riskLevel: "high",
        direction: "negative",

        description:
          "Central risk transmission factor that expands materially during simulated market stress.",
      },
    ],

    links: [
      {
        id: "spx-equity",
        source: "spx",
        target: "equity-factor",
        relationship: "EQUITY BETA",
        strength: 0.88,
        strengthDisplay: "0.88",
        normalIntensity: 0.72,
        stressIntensity: 0.94,
        direction: "warning",
      },
      {
        id: "ndx-equity",
        source: "ndx",
        target: "equity-factor",
        relationship: "GROWTH BETA",
        strength: 0.94,
        strengthDisplay: "0.94",
        normalIntensity: 0.82,
        stressIntensity: 1,
        direction: "negative",
      },
      {
        id: "iwm-equity",
        source: "iwm",
        target: "equity-factor",
        relationship: "CYCLICAL BETA",
        strength: 0.81,
        strengthDisplay: "0.81",
        normalIntensity: 0.67,
        stressIntensity: 0.92,
        direction: "warning",
      },
      {
        id: "btc-equity",
        source: "btc",
        target: "equity-factor",
        relationship: "RISK APPETITE",
        strength: 0.57,
        strengthDisplay: "0.57",
        normalIntensity: 0.48,
        stressIntensity: 0.81,
        direction: "warning",
      },

      {
        id: "us10y-rates",
        source: "us10y",
        target: "rates-factor",
        relationship: "DURATION",
        strength: 0.92,
        strengthDisplay: "0.92",
        normalIntensity: 0.8,
        stressIntensity: 0.96,
        direction: "neutral",
      },
      {
        id: "ndx-rates",
        source: "ndx",
        target: "rates-factor",
        relationship: "DURATION SENSITIVITY",
        strength: 0.63,
        strengthDisplay: "0.63",
        normalIntensity: 0.5,
        stressIntensity: 0.82,
        direction: "warning",
      },
      {
        id: "spx-rates",
        source: "spx",
        target: "rates-factor",
        relationship: "DISCOUNT RATE",
        strength: 0.42,
        strengthDisplay: "0.42",
        normalIntensity: 0.36,
        stressIntensity: 0.64,
        direction: "neutral",
      },

      {
        id: "gold-commodity",
        source: "gold",
        target: "commodity-factor",
        relationship: "REAL ASSET",
        strength: 0.61,
        strengthDisplay: "0.61",
        normalIntensity: 0.46,
        stressIntensity: 0.58,
        direction: "positive",
      },
      {
        id: "brent-commodity",
        source: "brent",
        target: "commodity-factor",
        relationship: "ENERGY BETA",
        strength: 0.89,
        strengthDisplay: "0.89",
        normalIntensity: 0.76,
        stressIntensity: 0.93,
        direction: "warning",
      },
      {
        id: "gold-rates",
        source: "gold",
        target: "rates-factor",
        relationship: "REAL YIELD",
        strength: 0.49,
        strengthDisplay: "0.49",
        normalIntensity: 0.38,
        stressIntensity: 0.55,
        direction: "neutral",
      },

      {
        id: "dxy-fx",
        source: "dxy",
        target: "fx-factor",
        relationship: "USD BETA",
        strength: 0.91,
        strengthDisplay: "0.91",
        normalIntensity: 0.78,
        stressIntensity: 0.96,
        direction: "positive",
      },
      {
        id: "gold-fx",
        source: "gold",
        target: "fx-factor",
        relationship: "USD HEDGE",
        strength: 0.51,
        strengthDisplay: "-0.51",
        normalIntensity: 0.42,
        stressIntensity: 0.62,
        direction: "positive",
      },
      {
        id: "brent-fx",
        source: "brent",
        target: "fx-factor",
        relationship: "USD PRICING",
        strength: 0.37,
        strengthDisplay: "-0.37",
        normalIntensity: 0.31,
        stressIntensity: 0.49,
        direction: "neutral",
      },

      {
        id: "spx-vol",
        source: "spx",
        target: "volatility-factor",
        relationship: "VOLATILITY",
        strength: 0.68,
        strengthDisplay: "0.68",
        normalIntensity: 0.56,
        stressIntensity: 0.91,
        direction: "warning",
      },
      {
        id: "ndx-vol",
        source: "ndx",
        target: "volatility-factor",
        relationship: "GROWTH VOL",
        strength: 0.77,
        strengthDisplay: "0.77",
        normalIntensity: 0.65,
        stressIntensity: 0.97,
        direction: "negative",
      },
      {
        id: "iwm-vol",
        source: "iwm",
        target: "volatility-factor",
        relationship: "SMALL CAP VOL",
        strength: 0.74,
        strengthDisplay: "0.74",
        normalIntensity: 0.62,
        stressIntensity: 0.96,
        direction: "negative",
      },
      {
        id: "btc-vol",
        source: "btc",
        target: "volatility-factor",
        relationship: "TAIL VOL",
        strength: 0.86,
        strengthDisplay: "0.86",
        normalIntensity: 0.76,
        stressIntensity: 1,
        direction: "negative",
      },

      {
        id: "equity-vol",
        source: "equity-factor",
        target: "volatility-factor",
        relationship: "RISK TRANSMISSION",
        strength: 0.79,
        strengthDisplay: "0.79",
        normalIntensity: 0.7,
        stressIntensity: 1,
        direction: "negative",
      },
      {
        id: "rates-vol",
        source: "rates-factor",
        target: "volatility-factor",
        relationship: "MACRO VOL",
        strength: 0.52,
        strengthDisplay: "0.52",
        normalIntensity: 0.41,
        stressIntensity: 0.73,
        direction: "warning",
      },
      {
        id: "commodity-vol",
        source: "commodity-factor",
        target: "volatility-factor",
        relationship: "INFLATION VOL",
        strength: 0.47,
        strengthDisplay: "0.47",
        normalIntensity: 0.39,
        stressIntensity: 0.69,
        direction: "warning",
      },
    ],

    factors: [
      {
        id: "equity-factor",
        label: "Equity Beta",

        exposure: 0.72,
        exposureDisplay: "+0.72",

        contribution: 34,
        contributionDisplay: "34%",

        stressContribution: 43,
        stressContributionDisplay: "43%",

        riskLevel: "high",
        direction: "warning",
      },
      {
        id: "volatility-factor",
        label: "Volatility",

        exposure: 0.61,
        exposureDisplay: "+0.61",

        contribution: 19,
        contributionDisplay: "19%",

        stressContribution: 29,
        stressContributionDisplay: "29%",

        riskLevel: "high",
        direction: "negative",
      },
      {
        id: "rates-factor",
        label: "Rates",

        exposure: -0.28,
        exposureDisplay: "-0.28",

        contribution: 14,
        contributionDisplay: "14%",

        stressContribution: 17,
        stressContributionDisplay: "17%",

        riskLevel: "moderate",
        direction: "warning",
      },
      {
        id: "commodity-factor",
        label: "Commodity",

        exposure: 0.37,
        exposureDisplay: "+0.37",

        contribution: 13,
        contributionDisplay: "13%",

        stressContribution: 16,
        stressContributionDisplay: "16%",

        riskLevel: "moderate",
        direction: "neutral",
      },
      {
        id: "fx-factor",
        label: "FX",

        exposure: -0.18,
        exposureDisplay: "-0.18",

        contribution: 11,
        contributionDisplay: "11%",

        stressContribution: 13,
        stressContributionDisplay: "13%",

        riskLevel: "low",
        direction: "positive",
      },
    ],

    scenarios: [
      {
        id: "normal",
        label: "NORMAL",

        description:
          "Current deterministic portfolio structure under controlled market conditions.",

        riskScore: 42,
        riskScoreDisplay: "42 / 100",

        portfolioImpact: 0,
        portfolioImpactDisplay: "BASELINE",

        volatility: 11.26,
        volatilityDisplay: "11.26%",

        correlation: 0.24,
        correlationDisplay: "0.24",

        direction: "positive",
      },
      {
        id: "equity-shock",
        label: "EQUITY SHOCK",

        description:
          "Simulated broad equity drawdown with increased volatility and dependence.",

        riskScore: 71,
        riskScoreDisplay: "71 / 100",

        portfolioImpact: -8.7,
        portfolioImpactDisplay: "-8.70%",

        volatility: 21.4,
        volatilityDisplay: "21.40%",

        correlation: 0.58,
        correlationDisplay: "0.58",

        direction: "negative",
      },
      {
        id: "rates-shock",
        label: "RATES +150BPS",

        description:
          "Parallel rates repricing stressing duration-sensitive and growth exposures.",

        riskScore: 63,
        riskScoreDisplay: "63 / 100",

        portfolioImpact: -4.2,
        portfolioImpactDisplay: "-4.20%",

        volatility: 16.8,
        volatilityDisplay: "16.80%",

        correlation: 0.41,
        correlationDisplay: "0.41",

        direction: "warning",
      },
      {
        id: "liquidity-stress",
        label: "LIQUIDITY STRESS",

        description:
          "Cross-asset liquidity compression producing the strongest network convergence.",

        riskScore: 74,
        riskScoreDisplay: "74 / 100",

        portfolioImpact: -6.4,
        portfolioImpactDisplay: "-6.40%",

        volatility: 24.7,
        volatilityDisplay: "24.70%",

        correlation: 0.68,
        correlationDisplay: "0.68",

        direction: "negative",
      },
    ],

    inspectors: [
      {
        nodeId: "spx",
        headline: "S&P 500",
        subline: "CORE EQUITY BETA",

        exposureLabel: "24% PORTFOLIO",
        riskLabel: "58 / 100 RISK",
        contributionLabel: "18% RISK CONTRIBUTION",

        interpretation:
          "SPX anchors broad equity beta and transmits both systematic equity and volatility risk.",
      },
      {
        nodeId: "ndx",
        headline: "Nasdaq 100",
        subline: "GROWTH CONCENTRATION",

        exposureLabel: "18% PORTFOLIO",
        riskLabel: "72 / 100 RISK",
        contributionLabel: "21% RISK CONTRIBUTION",

        interpretation:
          "NDX is the highest-contributing traditional asset exposure because growth concentration combines with duration and volatility sensitivity.",
      },
      {
        nodeId: "iwm",
        headline: "Russell 2000",
        subline: "CYCLICAL / LIQUIDITY BETA",

        exposureLabel: "12% PORTFOLIO",
        riskLabel: "66 / 100 RISK",
        contributionLabel: "13% RISK CONTRIBUTION",

        interpretation:
          "Small-cap exposure becomes materially more vulnerable when liquidity conditions deteriorate.",
      },
      {
        nodeId: "us10y",
        headline: "US 10Y Treasury",
        subline: "DURATION EXPOSURE",

        exposureLabel: "15% PORTFOLIO",
        riskLabel: "38 / 100 RISK",
        contributionLabel: "9% RISK CONTRIBUTION",

        interpretation:
          "Treasury duration provides diversification but remains sensitive to abrupt rates repricing.",
      },
      {
        nodeId: "gold",
        headline: "Gold",
        subline: "DEFENSIVE REAL ASSET",

        exposureLabel: "10% PORTFOLIO",
        riskLabel: "29 / 100 RISK",
        contributionLabel: "7% RISK CONTRIBUTION",

        interpretation:
          "Gold provides defensive diversification through partial inverse dollar and equity relationships.",
      },
      {
        nodeId: "brent",
        headline: "Brent Crude",
        subline: "ENERGY / INFLATION",

        exposureLabel: "8% PORTFOLIO",
        riskLabel: "54 / 100 RISK",
        contributionLabel: "8% RISK CONTRIBUTION",

        interpretation:
          "Brent transmits commodity, inflation and geopolitical stress into the portfolio surface.",
      },
      {
        nodeId: "dxy",
        headline: "US Dollar Index",
        subline: "FX DEFENSIVE LINK",

        exposureLabel: "7% PORTFOLIO",
        riskLabel: "31 / 100 RISK",
        contributionLabel: "6% RISK CONTRIBUTION",

        interpretation:
          "Dollar exposure offsets portions of equity and commodity sensitivity in the deterministic snapshot.",
      },
      {
        nodeId: "btc",
        headline: "Bitcoin",
        subline: "ALTERNATIVE TAIL RISK",

        exposureLabel: "6% PORTFOLIO",
        riskLabel: "81 / 100 RISK",
        contributionLabel: "10% RISK CONTRIBUTION",

        interpretation:
          "BTC is the highest-risk asset node because high volatility combines with increasing growth-risk dependence.",
      },
      {
        nodeId: "equity-factor",
        headline: "Equity Beta",
        subline: "DOMINANT SYSTEMATIC FACTOR",

        exposureLabel: "+0.72 EXPOSURE",
        riskLabel: "74 / 100 RISK",
        contributionLabel: "34% FACTOR CONTRIBUTION",

        interpretation:
          "Equity beta is the dominant portfolio factor and the principal transmission channel connecting SPX, NDX and IWM.",
      },
      {
        nodeId: "rates-factor",
        headline: "Rates Factor",
        subline: "MACRO DURATION CHANNEL",

        exposureLabel: "-0.28 EXPOSURE",
        riskLabel: "43 / 100 RISK",
        contributionLabel: "14% FACTOR CONTRIBUTION",

        interpretation:
          "Rates risk connects Treasury duration with growth-equity valuation sensitivity.",
      },
      {
        nodeId: "commodity-factor",
        headline: "Commodity Factor",
        subline: "REAL-ASSET CHANNEL",

        exposureLabel: "+0.37 EXPOSURE",
        riskLabel: "49 / 100 RISK",
        contributionLabel: "13% FACTOR CONTRIBUTION",

        interpretation:
          "Commodity exposure connects energy and defensive real assets to the inflation environment.",
      },
      {
        nodeId: "fx-factor",
        headline: "FX Factor",
        subline: "GLOBAL LIQUIDITY CHANNEL",

        exposureLabel: "-0.18 EXPOSURE",
        riskLabel: "34 / 100 RISK",
        contributionLabel: "11% FACTOR CONTRIBUTION",

        interpretation:
          "FX risk remains comparatively contained while contributing useful offset characteristics.",
      },
      {
        nodeId: "volatility-factor",
        headline: "Volatility Factor",
        subline: "RISK TRANSMISSION HUB",

        exposureLabel: "+0.61 EXPOSURE",
        riskLabel: "69 / 100 RISK",
        contributionLabel: "19% FACTOR CONTRIBUTION",

        interpretation:
          "Volatility is the central stress-transmission node and expands sharply when the portfolio enters stress mode.",
      },
    ],

    legend: [
      {
        id: "low",
        label: "LOW",
        riskLevel: "low",
        description:
          "Contained risk contribution and relatively stable behaviour.",
      },
      {
        id: "moderate",
        label: "MODERATE",
        riskLevel: "moderate",
        description:
          "Material exposure requiring routine monitoring.",
      },
      {
        id: "high",
        label: "HIGH",
        riskLevel: "high",
        description:
          "Elevated portfolio or factor contribution.",
      },
      {
        id: "critical",
        label: "CRITICAL",
        riskLevel: "critical",
        description:
          "Highest-intensity risk node in the current surface.",
      },
    ],
  };

export function getRiskSurfaceNode(
  nodeId: RiskSurfaceNodeId,
) {
  return riskSurfaceIntelligenceData.nodes.find(
    (node) => node.id === nodeId,
  );
}

export function getRiskSurfaceInspector(
  nodeId: RiskSurfaceNodeId,
) {
  return riskSurfaceIntelligenceData.inspectors.find(
    (inspector) =>
      inspector.nodeId === nodeId,
  );
}