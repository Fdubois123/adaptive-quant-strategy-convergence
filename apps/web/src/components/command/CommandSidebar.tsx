"use client";

import { useState } from "react";
import { commandShellData } from "@/data/command/shell";
import type { NavigationItem } from "@/types/command";

const navigationIcons: Record<string, string> = {
  "Command Center": "⌁",
  "Global Intelligence": "◎",
  "Market Regimes": "◈",
  "Strategy Convergence": "◇",
  "Portfolio Lab": "▦",
  "Risk Architect": "△",
  "Performance Analytics": "⌇",
  "Correlation Lab": "⊞",
  "Stress & Scenarios": "≋",
  "Global Risk Map": "⊕",
  "Alerts & Insights": "!",
  "Research Lab": "⌘",
  Reports: "▤",
  Settings: "⚙",
};

function NavigationEntry({
  item,
  active,
  onSelect,
}: {
  item: NavigationItem;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className={`command-nav-item ${
        active ? "command-nav-item-active" : ""
      }`}
      onClick={onSelect}
      disabled={item.disabled}
      aria-current={active ? "page" : undefined}
      title={item.label}
    >
      <span
        className="command-nav-active-rail"
        aria-hidden="true"
      />

      <span
        className="command-nav-icon"
        aria-hidden="true"
      >
        {navigationIcons[item.label] ?? item.icon}
      </span>

      <span className="command-nav-copy">
        <span className="command-nav-label">
          {item.label}
        </span>

        <span className="command-nav-short">
          {item.shortLabel}
        </span>
      </span>

      {typeof item.badge === "number" && (
        <span
          className="command-nav-badge"
          aria-label={`${item.badge} alerts`}
        >
          {item.badge}
        </span>
      )}
    </button>
  );
}

export default function CommandSidebar() {
  const [activeItem, setActiveItem] =
    useState("Command Center");

  return (
    <nav
      className="command-navigation"
      aria-label="Primary command navigation"
    >
      <div className="command-navigation-context">
        <span className="command-navigation-context-label">
          ACTIVE WORKSPACE
        </span>

        <div className="command-navigation-context-value">
          <span
            className="command-navigation-context-dot"
            aria-hidden="true"
          />

          QUANT RESEARCH
        </div>
      </div>

      <div className="command-navigation-groups">
        {commandShellData.navigation.map((group) => (
          <section
            key={group.id}
            className="command-navigation-group"
            aria-labelledby={`nav-group-${group.id}`}
          >
            <div
              id={`nav-group-${group.id}`}
              className="command-navigation-group-label"
            >
              <span>{group.label}</span>
              <span className="command-navigation-group-line" />
            </div>

            <div className="command-navigation-items">
              {group.items.map((item) => (
                <NavigationEntry
                  key={item.id}
                  item={item}
                  active={activeItem === item.label}
                  onSelect={() =>
                    setActiveItem(item.label)
                  }
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="command-navigation-footer">
        <div className="command-navigation-engine">
          <div className="command-navigation-engine-top">
            <span>
              SYSTEM STATE
            </span>

            <span className="command-navigation-engine-state">
              DEMO
            </span>
          </div>

          <div className="command-navigation-engine-row">
            <span
              className="command-navigation-engine-dot online"
              aria-hidden="true"
            />

            <span>DATA</span>
            <strong>READY</strong>
          </div>

          <div className="command-navigation-engine-row">
            <span
              className="command-navigation-engine-dot pending"
              aria-hidden="true"
            />

            <span>MODELS</span>
            <strong>PENDING</strong>
          </div>

          <div className="command-navigation-engine-row">
            <span
              className="command-navigation-engine-dot pending"
              aria-hidden="true"
            />

            <span>STRATEGIES</span>
            <strong>PENDING</strong>
          </div>
        </div>

        <div className="command-navigation-version">
          REGIMEON
          <span>D2 / RESEARCH BUILD</span>
        </div>
      </div>
    </nav>
  );
}