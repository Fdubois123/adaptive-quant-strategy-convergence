"use client";

import { useState } from "react";
import MarketTicker from "@/components/command/MarketTicker";

export default function CommandTopbar() {
  const [query, setQuery] = useState("");

  return (
    <header className="command-topbar">
      <div className="command-topbar-primary">
        <div className="command-topbar-identity">
          <span className="command-topbar-phase">
            D2
          </span>

          <div className="command-topbar-title">
            <strong>COMMAND CENTER</strong>
            <span>Adaptive Intelligence Environment</span>
          </div>
        </div>

        <div className="command-topbar-actions">
          <label className="command-search">
            <span
              className="command-search-icon"
              aria-hidden="true"
            >
              ⌕
            </span>

            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search assets, regimes, strategies..."
              aria-label="Search command environment"
            />

            <span className="command-search-shortcut">
              /
            </span>
          </label>

          <button
            type="button"
            className="command-topbar-action"
            aria-label="Open intelligence alerts"
            title="Intelligence alerts"
          >
            <span aria-hidden="true">!</span>

            <span className="command-topbar-alert-dot" />
          </button>

          <button
            type="button"
            className="command-topbar-action"
            aria-label="Open workspace controls"
            title="Workspace controls"
          >
            <span aria-hidden="true">⌘</span>
          </button>

          <div className="command-topbar-user">
            <div
              className="command-topbar-avatar"
              aria-hidden="true"
            >
              QM
            </div>

            <div className="command-topbar-user-copy">
              <strong>QUANT DESK</strong>
              <span>RESEARCH WORKSPACE</span>
            </div>
          </div>

          <div className="command-topbar-mode">
            <span
              className="command-topbar-mode-dot"
              aria-hidden="true"
            />

            DEMO
          </div>
        </div>
      </div>

      <MarketTicker />
    </header>
  );
}