export type RiskSurfaceDataSource =
  | "demo"
  | "live";

export type RiskSurfaceMode =
  | "normal"
  | "stress";

export type RiskSurfaceRiskLevel =
  | "low"
  | "moderate"
  | "high"
  | "critical";

export type RiskSurfaceDirection =
  | "positive"
  | "negative"
  | "neutral"
  | "warning";

export type RiskSurfaceNodeType =
  | "asset"
  | "factor"
  | "strategy";

export type RiskSurfaceAssetClass =
  | "equity"
  | "rates"
  | "commodity"
  | "fx"
  | "alternative";

export type RiskSurfaceNodeId =
  | "spx"
  | "ndx"
  | "iwm"
  | "us10y"
  | "gold"
  | "brent"
  | "dxy"
  | "btc"
  | "equity-factor"
  | "rates-factor"
  | "commodity-factor"
  | "fx-factor"
  | "volatility-factor";

export type RiskSurfaceVector3 = {
  x: number;
  y: number;
  z: number;
};

export type RiskSurfaceNode = {
  id: RiskSurfaceNodeId;

  symbol: string;
  label: string;

  nodeType: RiskSurfaceNodeType;
  assetClass: RiskSurfaceAssetClass | "factor";

  position: RiskSurfaceVector3;

  exposure: number;
  exposureDisplay: string;

  riskScore: number;
  riskScoreDisplay: string;

  contribution: number;
  contributionDisplay: string;

  volatility: number;
  volatilityDisplay: string;

  normalHeight: number;
  stressHeight: number;

  normalScale: number;
  stressScale: number;

  riskLevel: RiskSurfaceRiskLevel;
  direction: RiskSurfaceDirection;

  description: string;
};

export type RiskSurfaceLink = {
  id: string;

  source: RiskSurfaceNodeId;
  target: RiskSurfaceNodeId;

  relationship: string;

  strength: number;
  strengthDisplay: string;

  normalIntensity: number;
  stressIntensity: number;

  direction: RiskSurfaceDirection;
};

export type RiskSurfaceMetric = {
  id: string;
  label: string;

  value: string;
  rawValue: number;

  stressValue: string;
  stressRawValue: number;

  change: string;

  direction: RiskSurfaceDirection;
  helper: string;
};

export type RiskSurfaceState = {
  source: RiskSurfaceDataSource;
  asOf: string;

  mode: RiskSurfaceMode;

  portfolioRiskScore: number;
  portfolioRiskScoreDisplay: string;

  stressRiskScore: number;
  stressRiskScoreDisplay: string;

  grossExposure: number;
  grossExposureDisplay: string;

  netExposure: number;
  netExposureDisplay: string;

  factorConcentration: number;
  factorConcentrationDisplay: string;

  stressAmplification: number;
  stressAmplificationDisplay: string;

  activeNodes: number;
  activeNodesDisplay: string;

  activeLinks: number;
  activeLinksDisplay: string;

  dominantRisk: string;
  dominantCluster: string;
};

export type RiskSurfaceFactor = {
  id: RiskSurfaceNodeId;
  label: string;

  exposure: number;
  exposureDisplay: string;

  contribution: number;
  contributionDisplay: string;

  stressContribution: number;
  stressContributionDisplay: string;

  riskLevel: RiskSurfaceRiskLevel;
  direction: RiskSurfaceDirection;
};

export type RiskSurfaceScenario = {
  id: string;
  label: string;

  description: string;

  riskScore: number;
  riskScoreDisplay: string;

  portfolioImpact: number;
  portfolioImpactDisplay: string;

  volatility: number;
  volatilityDisplay: string;

  correlation: number;
  correlationDisplay: string;

  direction: RiskSurfaceDirection;
};

export type RiskSurfaceInspector = {
  nodeId: RiskSurfaceNodeId;

  headline: string;
  subline: string;

  exposureLabel: string;
  riskLabel: string;
  contributionLabel: string;

  interpretation: string;
};

export type RiskSurfaceLegendItem = {
  id: string;
  label: string;

  riskLevel: RiskSurfaceRiskLevel;
  description: string;
};

export type RiskSurfaceIntelligenceData = {
  state: RiskSurfaceState;

  metrics: RiskSurfaceMetric[];

  nodes: RiskSurfaceNode[];

  links: RiskSurfaceLink[];

  factors: RiskSurfaceFactor[];

  scenarios: RiskSurfaceScenario[];

  inspectors: RiskSurfaceInspector[];

  legend: RiskSurfaceLegendItem[];
};