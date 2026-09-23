export type PortfolioDataSource = "demo" | "live";

export type PortfolioMetricDirection =
  | "positive"
  | "negative"
  | "neutral";

export type PortfolioMetric = {
  id: string;
  label: string;
  value: string;
  rawValue: number;
  change?: string;
  direction?: PortfolioMetricDirection;
  helper?: string;
};

export type PerformancePoint = {
  date: string;
  portfolio: number;
  benchmark: number;
};

export type AllocationItem = {
  id: string;
  label: string;
  value: number;
  displayValue: string;
};

export type PositionDirection = "long" | "short";

export type PortfolioPosition = {
  id: string;
  symbol: string;
  name: string;
  assetClass: string;
  direction: PositionDirection;
  weight: number;
  marketValue: string;
  pnl: string;
  pnlPercent: number;
};

export type ExposureItem = {
  id: string;
  label: string;
  value: number;
  displayValue: string;
};

export type PortfolioState = {
  name: string;
  currency: string;
  source: PortfolioDataSource;
  asOf: string;
  capitalStatus: "deployed" | "balanced" | "defensive";
};

export type PortfolioCommandData = {
  state: PortfolioState;
  metrics: PortfolioMetric[];
  performance: PerformancePoint[];
  allocation: AllocationItem[];
  exposures: ExposureItem[];
  positions: PortfolioPosition[];
};