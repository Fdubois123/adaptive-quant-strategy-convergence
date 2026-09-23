export type IntelligenceDataSource =
  | "demo"
  | "live"
  | "derived";

export type IntelligenceSeverity =
  | "info"
  | "low"
  | "moderate"
  | "high"
  | "critical";

export type IntelligenceDirection =
  | "positive"
  | "negative"
  | "neutral"
  | "warning";

export type IntelligenceStatus =
  | "active"
  | "monitoring"
  | "acknowledged"
  | "resolved";

export type IntelligenceFreshness =
  | "live"
  | "fresh"
  | "stale";

export type IntelligenceCategory =
  | "portfolio"
  | "risk"
  | "regime"
  | "strategy"
  | "market"
  | "correlation"
  | "model"
  | "system";

export type IntelligenceEventType =
  | "risk-alert"
  | "regime-shift"
  | "strategy-signal"
  | "correlation-event"
  | "market-event"
  | "model-event"
  | "system-event";

export type IntelligencePriority =
  | "routine"
  | "elevated"
  | "urgent";

export type IntelligenceState = {
  source: IntelligenceDataSource;
  asOf: string;

  activeAlerts: number;
  criticalAlerts: number;
  monitoringEvents: number;
  acknowledgedEvents: number;

  intelligenceScore: number;
  freshnessScore: number;

  dominantTheme: string;
  operatingState: string;
};

export type IntelligenceMetric = {
  id: string;
  label: string;

  value: string;
  detail: string;

  direction: IntelligenceDirection;

  delta?: string;
};

export type IntelligenceEvent = {
  id: string;

  timestamp: string;

  category: IntelligenceCategory;
  type: IntelligenceEventType;

  severity: IntelligenceSeverity;
  priority: IntelligencePriority;
  status: IntelligenceStatus;
  freshness: IntelligenceFreshness;

  title: string;
  summary: string;

  metric?: string;
  metricValue?: string;

  sourceLabel: string;

  confidence?: number;

  affectedAreas: string[];

  analystContext: string;

  recommendedAction: string;
};

export type IntelligenceAlert = {
  id: string;

  timestamp: string;

  severity: IntelligenceSeverity;
  status: IntelligenceStatus;

  category: IntelligenceCategory;

  title: string;
  description: string;

  trigger: string;
  currentValue: string;
  threshold: string;

  affectedArea: string;

  recommendedAction: string;
};

export type IntelligenceSignal = {
  id: string;

  label: string;
  category: IntelligenceCategory;

  value: string;
  score: number;

  direction: IntelligenceDirection;

  description: string;
};

export type IntelligenceModelEvent = {
  id: string;

  model: string;
  timestamp: string;

  event: string;

  confidence: number;

  severity: IntelligenceSeverity;
  status: IntelligenceStatus;

  detail: string;
};

export type IntelligenceFreshnessItem = {
  id: string;

  source: string;

  freshness: IntelligenceFreshness;

  lastUpdate: string;

  latency: string;

  coverage: number;
};

export type IntelligenceAnalystNote = {
  id: string;

  timestamp: string;

  title: string;

  context: string;

  implication: string;

  priority: IntelligencePriority;
};

export type IntelligenceCategorySummary = {
  category: IntelligenceCategory;

  label: string;

  activeEvents: number;

  severity: IntelligenceSeverity;

  score: number;

  direction: IntelligenceDirection;
};

export type IntelligenceTimelinePoint = {
  label: string;

  portfolio: number;
  risk: number;
  regime: number;
  market: number;
  strategy: number;
};

export type IntelligenceCommandData = {
  state: IntelligenceState;

  metrics: IntelligenceMetric[];

  events: IntelligenceEvent[];

  alerts: IntelligenceAlert[];

  signals: IntelligenceSignal[];

  modelEvents: IntelligenceModelEvent[];

  freshness: IntelligenceFreshnessItem[];

  analystNotes: IntelligenceAnalystNote[];

  categorySummary: IntelligenceCategorySummary[];

  timeline: IntelligenceTimelinePoint[];
};