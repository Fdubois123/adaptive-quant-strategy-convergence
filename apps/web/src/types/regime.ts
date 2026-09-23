export type RegimeDataSource = "demo" | "live";

export type MarketRegimeId =
  | "risk-on"
  | "risk-off"
  | "high-volatility"
  | "low-volatility"
  | "transition";

export type RegimeSignalDirection =
  | "positive"
  | "negative"
  | "neutral"
  | "warning";

export type RegimeProbability = {
  id: MarketRegimeId;
  label: string;
  probability: number;
  displayProbability: string;
  description: string;
};

export type RegimeState = {
  currentRegime: MarketRegimeId;
  currentLabel: string;
  confidence: number;
  confidenceDisplay: string;
  transitionRisk: number;
  transitionRiskDisplay: string;
  persistenceScore: number;
  persistenceDisplay: string;
  duration: string;
  source: RegimeDataSource;
  asOf: string;
};

export type RegimeHistoryPoint = {
  period: string;
  regime: MarketRegimeId;
  label: string;
  confidence: number;
};

export type RegimeDriver = {
  id: string;
  label: string;
  value: string;
  score: number;
  direction: RegimeSignalDirection;
  interpretation: string;
};

export type RegimeTransitionCell = {
  from: MarketRegimeId;
  to: MarketRegimeId;
  probability: number;
};

export type RegimeTransitionRow = {
  regime: MarketRegimeId;
  label: string;
  transitions: RegimeTransitionCell[];
};

export type RegimeSignal = {
  id: string;
  label: string;
  value: string;
  direction: RegimeSignalDirection;
  detail: string;
};

export type RegimeIntelligenceData = {
  state: RegimeState;
  probabilities: RegimeProbability[];
  history: RegimeHistoryPoint[];
  drivers: RegimeDriver[];
  transitionMatrix: RegimeTransitionRow[];
  signals: RegimeSignal[];
};