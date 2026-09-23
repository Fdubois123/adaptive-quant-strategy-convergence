export type StrategyDataSource = "demo" | "live";

export type StrategyId =
  | "momentum"
  | "mean-reversion"
  | "volatility-breakout"
  | "trend-following"
  | "carry";

export type StrategyState =
  | "active"
  | "reduced"
  | "neutral"
  | "defensive";

export type StrategySignal =
  | "strong-long"
  | "long"
  | "neutral"
  | "short"
  | "strong-short";

export type StrategyDirection =
  | "positive"
  | "negative"
  | "neutral"
  | "warning";

export type ConvergenceState =
  | "strong"
  | "moderate"
  | "mixed"
  | "divergent";

export type StrategyMetric = {
  id: string;
  label: string;
  value: string;
  rawValue: number;
  direction: StrategyDirection;
  helper: string;
};

export type StrategyModel = {
  id: StrategyId;
  name: string;
  shortName: string;
  description: string;
  state: StrategyState;
  signal: StrategySignal;

  score: number;
  scoreDisplay: string;

  regimeCompatibility: number;
  regimeCompatibilityDisplay: string;

  confidence: number;
  confidenceDisplay: string;

  currentWeight: number;
  currentWeightDisplay: string;

  previousWeight: number;
  previousWeightDisplay: string;

  weightChange: number;
  weightChangeDisplay: string;

  returnContribution: number;
  returnContributionDisplay: string;

  sharpe: number;
  volatility: number;
  maxDrawdown: number;
};

export type StrategyScoreComponent = {
  id: string;
  label: string;
  momentum: number;
  meanReversion: number;
  volatilityBreakout: number;
  trendFollowing: number;
  carry: number;
};

export type StrategyAllocationPoint = {
  period: string;
  momentum: number;
  meanReversion: number;
  volatilityBreakout: number;
  trendFollowing: number;
  carry: number;
};

export type ConvergenceSignal = {
  id: string;
  label: string;
  value: string;
  direction: StrategyDirection;
  detail: string;
};

export type ConvergenceStateData = {
  state: ConvergenceState;
  label: string;

  score: number;
  scoreDisplay: string;

  confidence: number;
  confidenceDisplay: string;

  activeStrategies: number;

  dominantStrategy: StrategyId;
  dominantStrategyLabel: string;

  regime: string;

  source: StrategyDataSource;
  asOf: string;
};

export type AllocationDecision = {
  id: string;
  strategy: StrategyId;
  label: string;

  previousWeight: number;
  targetWeight: number;
  change: number;

  previousWeightDisplay: string;
  targetWeightDisplay: string;
  changeDisplay: string;

  reason: string;
  direction: StrategyDirection;
};

export type StrategyConvergenceData = {
  state: ConvergenceStateData;
  metrics: StrategyMetric[];
  strategies: StrategyModel[];
  scoreComponents: StrategyScoreComponent[];
  allocationHistory: StrategyAllocationPoint[];
  signals: ConvergenceSignal[];
  allocationDecisions: AllocationDecision[];
};