import type { CommandShellData } from "@/types/command";

export const commandShellData: CommandShellData = {
  navigation: [
    {
      id: "primary",
      label: "Intelligence",
      items: [
        {
          id: "command-center",
          label: "Command Center",
          shortLabel: "Command",
          icon: "⌂",
          href: "#",
        },
        {
          id: "global-intelligence",
          label: "Global Intelligence",
          shortLabel: "Global",
          icon: "◎",
          href: "#",
        },
        {
          id: "market-regimes",
          label: "Market Regimes",
          shortLabel: "Regimes",
          icon: "⌁",
          href: "#",
        },
        {
          id: "strategy-convergence",
          label: "Strategy Convergence",
          shortLabel: "Strategy",
          icon: "◇",
          href: "#",
        },
        {
          id: "portfolio-lab",
          label: "Portfolio Lab",
          shortLabel: "Portfolio",
          icon: "▣",
          href: "#",
        },
        {
          id: "risk-architect",
          label: "Risk Architect",
          shortLabel: "Risk",
          icon: "⬡",
          href: "#",
        },
        {
          id: "performance-analytics",
          label: "Performance Analytics",
          shortLabel: "Performance",
          icon: "▥",
          href: "#",
        },
        {
          id: "correlation-lab",
          label: "Correlation Lab",
          shortLabel: "Correlation",
          icon: "⌘",
          href: "#",
        },
        {
          id: "stress-scenarios",
          label: "Stress & Scenarios",
          shortLabel: "Stress",
          icon: "△",
          href: "#",
        },
        {
          id: "global-risk-map",
          label: "Global Risk Map",
          shortLabel: "Risk Map",
          icon: "◉",
          href: "#",
        },
        {
          id: "alerts-insights",
          label: "Alerts & Insights",
          shortLabel: "Alerts",
          icon: "!",
          href: "#",
          badge: 5,
        },
      ],
    },
    {
      id: "research",
      label: "Research",
      items: [
        {
          id: "research-lab",
          label: "Research Lab",
          shortLabel: "Research",
          icon: "□",
          href: "#",
        },
        {
          id: "reports",
          label: "Reports",
          shortLabel: "Reports",
          icon: "≡",
          href: "#",
        },
      ],
    },
    {
      id: "system",
      label: "System",
      items: [
        {
          id: "settings",
          label: "Settings",
          shortLabel: "Settings",
          icon: "⚙",
          href: "#",
        },
      ],
    },
  ],

  /*
   * D2.1 uses deterministic DEMO values.
   * These values must not be represented as live market information.
   * Real data integrations will be introduced in a later phase.
   */
  marketTicker: [
    {
      id: "nifty",
      symbol: "NIFTY",
      name: "NIFTY 50",
      value: "24,612.30",
      change: "+1.23%",
      direction: "up",
      source: "demo",
    },
    {
      id: "sp500",
      symbol: "S&P 500",
      name: "S&P 500",
      value: "5,713.42",
      change: "-0.31%",
      direction: "down",
      source: "demo",
    },
    {
      id: "gold",
      symbol: "GOLD",
      name: "Gold",
      value: "2,494.10",
      change: "+0.84%",
      direction: "up",
      source: "demo",
    },
    {
      id: "brent",
      symbol: "BRENT",
      name: "Brent Crude",
      value: "82.31",
      change: "+1.12%",
      direction: "up",
      source: "demo",
    },
  ],

  systemStatus: [
    {
      id: "data",
      label: "Data",
      state: "online",
      detail: "Demo dataset ready",
    },
    {
      id: "api",
      label: "API",
      state: "online",
      detail: "FastAPI available",
    },
    {
      id: "models",
      label: "Models",
      state: "pending",
      detail: "Model integration pending",
    },
    {
      id: "engine",
      label: "Strategy Engine",
      state: "pending",
      detail: "Integration pending",
    },
  ],

  workspaceMode: "demo",
};