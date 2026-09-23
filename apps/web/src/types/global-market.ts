export type GlobalMarketDataSource = "demo" | "live";

export type GlobalMarketDirection =
  | "positive"
  | "negative"
  | "neutral"
  | "warning";

export type GlobalRiskLevel =
  | "low"
  | "moderate"
  | "high"
  | "critical";

export type GlobalRegionId =
  | "north-america"
  | "europe"
  | "asia-pacific"
  | "emerging-markets";

export type GlobalAssetClass =
  | "equity"
  | "rates"
  | "fx"
  | "commodity"
  | "credit"
  | "volatility";

export type GlobalMarketState = {
  source: GlobalMarketDataSource;
  asOf: string;

  riskScore: number;
  riskScoreDisplay: string;

  riskLevel: GlobalRiskLevel;

  breadth: number;
  breadthDisplay: string;

  stressIndex: number;
  stressIndexDisplay: string;

  crossAssetMomentum: number;
  crossAssetMomentumDisplay: string;

  dominantTheme: string;
};

export type GlobalMarketMetric = {
  id: string;
  label: string;

  value: string;
  rawValue: number;

  change: string;
  direction: GlobalMarketDirection;

  helper: string;
};

export type GlobalMarketIndex = {
  id: string;
  symbol: string;
  name: string;
  region: GlobalRegionId;

  value: string;
  change: number;
  changeDisplay: string;

  momentum: number;
  volatility: number;

  direction: GlobalMarketDirection;
};

export type GlobalRegion = {
  id: GlobalRegionId;
  label: string;
  shortLabel: string;

  riskScore: number;
  riskDisplay: string;
  riskLevel: GlobalRiskLevel;

  marketChange: number;
  marketChangeDisplay: string;

  breadth: number;
  breadthDisplay: string;

  volatility: number;
  volatilityDisplay: string;

  signal: string;
  direction: GlobalMarketDirection;
};

export type CrossAssetMarket = {
  id: string;
  label: string;
  symbol: string;

  assetClass: GlobalAssetClass;

  value: string;
  change: number;
  changeDisplay: string;

  score: number;
  direction: GlobalMarketDirection;
};

export type GlobalStressDriver = {
  id: string;
  label: string;

  value: string;

  score: number;
  scoreDisplay: string;

  direction: GlobalMarketDirection;

  detail: string;
};

export type GlobalRiskEvent = {
  id: string;
  region: GlobalRegionId;

  title: string;
  category: string;

  severity: GlobalRiskLevel;

  probability: number;
  probabilityDisplay: string;

  impact: number;
  impactDisplay: string;

  status: "active" | "monitoring";

  detail: string;
};

export type GlobalMarketHeatCell = {
  id: string;
  region: GlobalRegionId;
  assetClass: GlobalAssetClass;

  score: number;
  displayScore: string;

  direction: GlobalMarketDirection;
};

export type GlobalBreadthPoint = {
  period: string;

  northAmerica: number;
  europe: number;
  asiaPacific: number;
  emergingMarkets: number;
};

export type MacroIndicator = {
  id: string;
  label: string;

  value: string;
  previous: string;

  trend: "rising" | "falling" | "stable";

  direction: GlobalMarketDirection;

  interpretation: string;
};

export type GlobalFlow = {
  id: string;

  from: string;
  to: string;

  amount: number;
  amountDisplay: string;

  intensity: number;

  direction: GlobalMarketDirection;
};

export type GlobalMarketIntelligenceData = {
  state: GlobalMarketState;

  metrics: GlobalMarketMetric[];

  indices: GlobalMarketIndex[];

  regions: GlobalRegion[];

  crossAssetMarkets: CrossAssetMarket[];

  stressDrivers: GlobalStressDriver[];

  riskEvents: GlobalRiskEvent[];

  heatMap: GlobalMarketHeatCell[];

  breadthHistory: GlobalBreadthPoint[];

  macroIndicators: MacroIndicator[];

  capitalFlows: GlobalFlow[];
};