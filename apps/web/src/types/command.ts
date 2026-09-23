export type NavigationItem = {
  id: string;
  label: string;
  shortLabel: string;
  icon: string;
  href: string;
  badge?: number;
  disabled?: boolean;
};

export type NavigationGroup = {
  id: string;
  label: string;
  items: NavigationItem[];
};

export type MarketDirection = "up" | "down" | "flat";

export type MarketTickerItem = {
  id: string;
  symbol: string;
  name: string;
  value: string;
  change: string;
  direction: MarketDirection;
  source: "demo" | "live";
};

export type SystemState =
  | "online"
  | "degraded"
  | "offline"
  | "pending";

export type SystemStatusItem = {
  id: string;
  label: string;
  state: SystemState;
  detail: string;
};

export type WorkspaceMode = "demo" | "live";

export type CommandShellData = {
  navigation: NavigationGroup[];
  marketTicker: MarketTickerItem[];
  systemStatus: SystemStatusItem[];
  workspaceMode: WorkspaceMode;
};