export type RiskDataSource = "demo" | "live";

export type RiskSeverity =
  | "low"
  | "moderate"
  | "high"
  | "critical";

export type RiskDirection =
  | "positive"
  | "negative"
  | "neutral"
  | "warning";

export type RiskLimitState =
  | "normal"
  | "watch"
  | "breach";

export type RiskMetric = {
  id: string;
  label: string;
  value: string;
  rawValue: number;
  unit?: string;
  change?: string;
  direction: RiskDirection;
  helper: string;
};

export type RiskState = {
  source: RiskDataSource;
  asOf: string;
  overallRiskScore: number;
  overallRiskDisplay: string;
  severity: RiskSeverity;
  riskBudgetUsed: number;
  riskBudgetDisplay: string;
  stressState: string;
};

export type FactorExposure = {
  id: string;
  label: string;
  exposure: number;
  displayExposure: string;
  contribution: number;
  displayContribution: string;
  direction: RiskDirection;
};

export type RiskContribution = {
  id: string;
  label: string;
  contribution: number;
  displayContribution: string;
};

export type StressScenario = {
  id: string;
  label: string;
  category: string;
  portfolioImpact: number;
  displayImpact: string;
  recoveryEstimate: string;
  severity: RiskSeverity;
  description: string;
};

export type RiskLimit = {
  id: string;
  label: string;
  current: number;
  limit: number;
  displayCurrent: string;
  displayLimit: string;
  utilization: number;
  displayUtilization: string;
  state: RiskLimitState;
};

export type DrawdownPoint = {
  period: string;
  drawdown: number;
};

export type RiskAlert = {
  id: string;
  title: string;
  severity: RiskSeverity;
  status: "active" | "monitoring";
  metric: string;
  detail: string;
};

export type StressDistributionPoint = {
  label: string;
  probability: number;
  loss: number;
};

export type RiskStressIntelligenceData = {
  state: RiskState;
  metrics: RiskMetric[];
  factorExposures: FactorExposure[];
  contributions: RiskContribution[];
  stressScenarios: StressScenario[];
  limits: RiskLimit[];
  drawdownHistory: DrawdownPoint[];
  alerts: RiskAlert[];
  stressDistribution: StressDistributionPoint[];
};