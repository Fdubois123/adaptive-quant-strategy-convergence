export type CorrelationDataSource =
  | "demo"
  | "live";

export type CorrelationDirection =
  | "positive"
  | "negative"
  | "neutral"
  | "warning";

export type CorrelationRiskLevel =
  | "low"
  | "moderate"
  | "high"
  | "critical";

export type CorrelationRegime =
  | "diversified"
  | "normal"
  | "concentrated"
  | "stress";

export type CorrelationAssetClass =
  | "equity"
  | "rates"
  | "commodity"
  | "fx"
  | "alternative";

export type CorrelationAssetId =
  | "spx"
  | "ndx"
  | "iwm"
  | "us10y"
  | "gold"
  | "brent"
  | "dxy"
  | "btc";

export type CorrelationAsset = {
  id: CorrelationAssetId;
  symbol: string;
  label: string;
  assetClass: CorrelationAssetClass;
  weight: number;
  weightDisplay: string;
};

export type CorrelationState = {
  source: CorrelationDataSource;
  asOf: string;
  regime: CorrelationRegime;
  regimeLabel: string;

  averageCorrelation: number;
  averageCorrelationDisplay: string;

  diversificationScore: number;
  diversificationScoreDisplay: string;

  concentrationRisk: number;
  concentrationRiskDisplay: string;

  stressCorrelation: number;
  stressCorrelationDisplay: string;

  clusterCount: number;
  clusterCountDisplay: string;

  dominantRelationship: string;
};

export type CorrelationMetric = {
  id: string;
  label: string;
  value: string;
  rawValue: number;
  change: string;
  direction: CorrelationDirection;
  helper: string;
};

export type CorrelationMatrixCell = {
  assetX: CorrelationAssetId;
  assetY: CorrelationAssetId;
  value: number;
  displayValue: string;
};

export type CorrelationMatrixRow = {
  asset: CorrelationAssetId;
  cells: CorrelationMatrixCell[];
};

export type RollingCorrelationPoint = {
  period: string;

  equityRates: number;
  equityGold: number;
  equityDollar: number;
  equityOil: number;
  equityCrypto: number;
};

export type CorrelationClusterId =
  | "growth-risk"
  | "defensive"
  | "macro"
  | "alternative";

export type CorrelationCluster = {
  id: CorrelationClusterId;
  label: string;

  members: CorrelationAssetId[];

  averageInternalCorrelation: number;
  averageInternalCorrelationDisplay: string;

  portfolioWeight: number;
  portfolioWeightDisplay: string;

  riskLevel: CorrelationRiskLevel;
  direction: CorrelationDirection;

  interpretation: string;
};

export type CorrelationPair = {
  id: string;

  assetA: CorrelationAssetId;
  assetB: CorrelationAssetId;

  correlation: number;
  correlationDisplay: string;

  previousCorrelation: number;
  previousCorrelationDisplay: string;

  change: number;
  changeDisplay: string;

  riskLevel: CorrelationRiskLevel;
  direction: CorrelationDirection;

  interpretation: string;
};

export type DiversificationComponent = {
  id: string;
  label: string;

  score: number;
  scoreDisplay: string;

  contribution: number;
  contributionDisplay: string;

  direction: CorrelationDirection;
  helper: string;
};

export type CorrelationBreakdown = {
  id: string;
  label: string;

  current: number;
  currentDisplay: string;

  baseline: number;
  baselineDisplay: string;

  direction: CorrelationDirection;
};

export type CorrelationAlert = {
  id: string;
  title: string;

  severity: CorrelationRiskLevel;
  status: "active" | "monitoring";

  metric: string;
  metricValue: string;

  detail: string;
};

export type CorrelationScenario = {
  id: string;
  label: string;

  averageCorrelation: number;
  averageCorrelationDisplay: string;

  diversificationScore: number;
  diversificationScoreDisplay: string;

  concentrationRisk: number;
  concentrationRiskDisplay: string;

  direction: CorrelationDirection;
};

export type CorrelationIntelligenceData = {
  state: CorrelationState;

  metrics: CorrelationMetric[];

  assets: CorrelationAsset[];

  matrix: CorrelationMatrixRow[];

  rollingHistory: RollingCorrelationPoint[];

  clusters: CorrelationCluster[];

  strongestPairs: CorrelationPair[];

  diversificationComponents:
    DiversificationComponent[];

  breakdown: CorrelationBreakdown[];

  scenarios: CorrelationScenario[];

  alerts: CorrelationAlert[];
};