"use client";

import { useMemo, useState } from "react";
import PortfolioRiskScene from "@/components/command/PortfolioRiskScene";
import { riskSurfaceIntelligenceData } from "@/data/command/risk-surface";
import type {
  RiskSurfaceDirection,
  RiskSurfaceMode,
  RiskSurfaceNodeId,
  RiskSurfaceRiskLevel,
} from "@/types/risk-surface";

function directionClass(
  direction: RiskSurfaceDirection,
) {
  return `risk-surface-direction-${direction}`;
}

function riskClass(
  riskLevel: RiskSurfaceRiskLevel,
) {
  return `risk-surface-risk-${riskLevel}`;
}

function clampPercent(value: number) {
  return Math.max(0, Math.min(100, value));
}

export default function PortfolioRiskSurface() {
  const {
    state,
    metrics,
    nodes,
    links,
    factors,
    scenarios,
    inspectors,
    legend,
  } = riskSurfaceIntelligenceData;

  const [mode, setMode] =
    useState<RiskSurfaceMode>("normal");

  const [selectedNodeId, setSelectedNodeId] =
    useState<RiskSurfaceNodeId>("equity-factor");

  const [selectedScenarioId, setSelectedScenarioId] =
    useState("normal");

  const selectedNode = useMemo(
    () =>
      nodes.find(
        (node) => node.id === selectedNodeId,
      ) ?? nodes[0],
    [nodes, selectedNodeId],
  );

  const selectedInspector = useMemo(
    () =>
      inspectors.find(
        (inspector) =>
          inspector.nodeId === selectedNodeId,
      ) ?? inspectors[0],
    [inspectors, selectedNodeId],
  );

  const selectedScenario = useMemo(
    () =>
      scenarios.find(
        (scenario) =>
          scenario.id === selectedScenarioId,
      ) ?? scenarios[0],
    [scenarios, selectedScenarioId],
  );

  const activeRiskScore =
    mode === "stress"
      ? selectedScenario.riskScore
      : state.portfolioRiskScore;

  function activateNormalMode() {
    setMode("normal");
    setSelectedScenarioId("normal");
  }

  function activateStressMode() {
    setMode("stress");

    if (selectedScenarioId === "normal") {
      setSelectedScenarioId("liquidity-stress");
    }
  }

  function selectScenario(
    scenarioId: string,
  ) {
    setSelectedScenarioId(scenarioId);

    if (scenarioId === "normal") {
      setMode("normal");
      return;
    }

    setMode("stress");
  }

  return (
    <section
      className={`risk-surface-intelligence risk-surface-environment-${mode}`}
      aria-labelledby="risk-surface-title"
    >
      <header className="risk-surface-header">
        <div>
          <div className="risk-surface-eyebrow">
            <span>07</span>
            3D PORTFOLIO RISK HEAT MAP / D2.8
          </div>

          <h2 id="risk-surface-title">
            Interactive Portfolio Risk Heat Map
          </h2>

          <p>
            Interactive three-dimensional portfolio
            intelligence mapping risk contribution across
            asset classes and quantitative strategies under
            normal and stressed market conditions.
          </p>
        </div>

        <div className="risk-surface-header-controls">
          <div className="risk-surface-provenance">
            <span>DATA PROVENANCE</span>

            <strong>
              {state.source.toUpperCase()}
            </strong>

            <small>{state.asOf}</small>
          </div>

          <div
            className="risk-surface-mode-switch"
            role="group"
            aria-label="Risk surface mode"
          >
            <button
              type="button"
              className={
                mode === "normal"
                  ? "is-active"
                  : ""
              }
              aria-pressed={
                mode === "normal"
              }
              onClick={activateNormalMode}
            >
              NORMAL
            </button>

            <button
              type="button"
              className={
                mode === "stress"
                  ? "is-active"
                  : ""
              }
              aria-pressed={
                mode === "stress"
              }
              onClick={activateStressMode}
            >
              STRESS
            </button>
          </div>
        </div>
      </header>

      <div className="risk-surface-overview">
        <article className="risk-surface-state-card">
          <div className="risk-surface-state-heading">
            <div>
              <span>PORTFOLIO RISK STATE</span>

              <strong>
                {mode === "stress"
                  ? selectedScenario.label
                  : "CONTROLLED STRUCTURE"}
              </strong>
            </div>

            <span
              className={`risk-surface-state-mode risk-surface-state-mode-${mode}`}
            >
              {mode.toUpperCase()}
            </span>
          </div>

          <div className="risk-surface-state-body">
            <div
              className="risk-surface-score"
              style={{
                ["--risk-surface-score" as string]:
                  `${clampPercent(
                    activeRiskScore,
                  )}%`,
              }}
            >
              <span>RISK SCORE</span>

              <strong>
                {activeRiskScore}
              </strong>

              <small>/ 100</small>
            </div>

            <div className="risk-surface-state-copy">
              <span>DOMINANT RISK</span>

              <strong>
                {state.dominantRisk}
              </strong>

              <p>
                {mode === "stress"
                  ? selectedScenario.description
                  : "Current heat-map geometry represents the deterministic baseline portfolio with risk contribution encoded through vertical elevation across asset-class and strategy intersections."}
              </p>

              <div className="risk-surface-state-stats">
                <div>
                  <span>GROSS</span>

                  <strong>
                    {state.grossExposureDisplay}
                  </strong>
                </div>

                <div>
                  <span>NET</span>

                  <strong>
                    {state.netExposureDisplay}
                  </strong>
                </div>

                <div>
                  <span>CLUSTER</span>

                  <strong>
                    {state.dominantCluster}
                  </strong>
                </div>

                <div>
                  <span>AMPLIFICATION</span>

                  <strong>
                    {mode === "stress"
                      ? state.stressAmplificationDisplay
                      : "1.00×"}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="risk-surface-metrics">
          {metrics.map((metric) => {
            const value =
              mode === "stress"
                ? metric.stressValue
                : metric.value;

            return (
              <article
                key={metric.id}
                className={`risk-surface-metric ${directionClass(
                  metric.direction,
                )}`}
              >
                <div className="risk-surface-metric-top">
                  <span>
                    {metric.label}
                  </span>

                  <i aria-hidden="true" />
                </div>

                <strong>
                  {value}
                </strong>

                <div className="risk-surface-metric-change">
                  {metric.change}
                </div>

                <p>
                  {metric.helper}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="risk-surface-main-grid">
        <article className="risk-surface-scene-panel">
          <div className="risk-surface-panel-header">
            <div>
              <span className="risk-surface-panel-kicker">
                WEBGL RISK ENGINE
              </span>

              <h3>
                Portfolio Risk Heat Map (3D)
              </h3>

              <p>
                X = asset class · Z = strategy ·
                Y = risk contribution
              </p>
            </div>

            <div className="risk-surface-scene-status">
              <span>
                {state.activeNodesDisplay} NODES
              </span>

              <span>
                {state.activeLinksDisplay} LINKS
              </span>

              <strong>
                INTERACTIVE
              </strong>
            </div>
          </div>

          <div className="risk-surface-scene-frame">
            <PortfolioRiskScene
              nodes={nodes}
              links={links}
              mode={mode}
              scenarioId={
                selectedScenarioId
              }
              selectedNodeId={
                selectedNodeId
              }
              onSelectNode={
                setSelectedNodeId
              }
            />

            <div className="risk-surface-axis-key">
              <span>
                <i className="risk-surface-axis-height" />
                Y / RISK CONTRIBUTION
              </span>

              <span>
                <i className="risk-surface-axis-size" />
                X / ASSET CLASS
              </span>

              <span>
                <i className="risk-surface-axis-link" />
                Z / STRATEGY
              </span>
            </div>
          </div>

          <div className="risk-surface-legend">
            {legend.map((item) => (
              <div key={item.id}>
                <i
                  className={riskClass(
                    item.riskLevel,
                  )}
                />

                <span>
                  {item.label}
                </span>

                <small>
                  {item.description}
                </small>
              </div>
            ))}
          </div>
        </article>

        <aside className="risk-surface-inspector">
          <div className="risk-surface-panel-header">
            <div>
              <span className="risk-surface-panel-kicker">
                RISK INSPECTOR
              </span>

              <h3>
                Selected Exposure
              </h3>

              <p>
                Click a heat-map cell inside the 3D
                surface to inspect its associated
                portfolio exposure.
              </p>
            </div>

            <span
              className={`risk-surface-inspector-risk ${riskClass(
                selectedNode.riskLevel,
              )}`}
            >
              {selectedNode.riskLevel.toUpperCase()}
            </span>
          </div>

          <div className="risk-surface-inspector-body">
            <div className="risk-surface-inspector-identity">
              <span>
                {selectedInspector.subline}
              </span>

              <strong>
                {selectedInspector.headline}
              </strong>

              <small>
                {selectedNode.symbol} /{" "}
                {selectedNode.nodeType.toUpperCase()}
              </small>
            </div>

            <div className="risk-surface-inspector-score">
              <div>
                <span>RISK</span>

                <strong>
                  {selectedNode.riskScoreDisplay}
                </strong>
              </div>

              <div>
                <span>EXPOSURE</span>

                <strong>
                  {selectedNode.exposureDisplay}
                </strong>
              </div>

              <div>
                <span>CONTRIBUTION</span>

                <strong>
                  {selectedNode.contributionDisplay}
                </strong>
              </div>

              <div>
                <span>VOLATILITY</span>

                <strong>
                  {selectedNode.volatilityDisplay}
                </strong>
              </div>
            </div>

            <div className="risk-surface-inspector-geometry">
              <div>
                <span>
                  NORMAL HEIGHT
                </span>

                <strong>
                  {selectedNode.normalHeight.toFixed(
                    2,
                  )}
                </strong>
              </div>

              <div>
                <span>
                  STRESS HEIGHT
                </span>

                <strong>
                  {selectedNode.stressHeight.toFixed(
                    2,
                  )}
                </strong>
              </div>

              <div>
                <span>
                  NORMAL SCALE
                </span>

                <strong>
                  {selectedNode.normalScale.toFixed(
                    2,
                  )}
                </strong>
              </div>

              <div>
                <span>
                  STRESS SCALE
                </span>

                <strong>
                  {selectedNode.stressScale.toFixed(
                    2,
                  )}
                </strong>
              </div>
            </div>

            <div className="risk-surface-inspector-analysis">
              <span>
                MODEL INTERPRETATION
              </span>

              <p>
                {selectedInspector.interpretation}
              </p>
            </div>

            <div className="risk-surface-inspector-tags">
              <span>
                {selectedInspector.exposureLabel}
              </span>

              <span>
                {selectedInspector.riskLabel}
              </span>

              <span>
                {selectedInspector.contributionLabel}
              </span>
            </div>
          </div>
        </aside>
      </div>

      <div className="risk-surface-secondary-grid">
        <article className="risk-surface-panel">
          <div className="risk-surface-panel-header">
            <div>
              <span className="risk-surface-panel-kicker">
                FACTOR STRUCTURE
              </span>

              <h3>
                Risk Contribution by Factor
              </h3>

              <p>
                Baseline versus stress contribution
                across systematic portfolio factors.
              </p>
            </div>

            <span className="risk-surface-panel-tag">
              {factors.length} FACTORS
            </span>
          </div>

          <div className="risk-surface-factor-list">
            {factors.map((factor) => {
              const contribution =
                mode === "stress"
                  ? factor.stressContribution
                  : factor.contribution;

              const contributionDisplay =
                mode === "stress"
                  ? factor.stressContributionDisplay
                  : factor.contributionDisplay;

              return (
                <button
                  type="button"
                  key={factor.id}
                  className={`risk-surface-factor-row ${
                    selectedNodeId ===
                    factor.id
                      ? "is-selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedNodeId(
                      factor.id,
                    )
                  }
                >
                  <div className="risk-surface-factor-heading">
                    <div>
                      <strong>
                        {factor.label}
                      </strong>

                      <span>
                        EXPOSURE{" "}
                        {factor.exposureDisplay}
                      </span>
                    </div>

                    <strong
                      className={directionClass(
                        factor.direction,
                      )}
                    >
                      {contributionDisplay}
                    </strong>
                  </div>

                  <div className="risk-surface-factor-track">
                    <span
                      className={riskClass(
                        factor.riskLevel,
                      )}
                      style={{
                        width: `${clampPercent(
                          contribution * 2,
                        )}%`,
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </article>

        <article className="risk-surface-panel">
          <div className="risk-surface-panel-header">
            <div>
              <span className="risk-surface-panel-kicker">
                SCENARIO ENGINE
              </span>

              <h3>
                Stress Transformation
              </h3>

              <p>
                Select a deterministic scenario to
                transform the 3D risk heat map.
              </p>
            </div>

            <span className="risk-surface-panel-tag">
              {scenarios.length} STATES
            </span>
          </div>

          <div className="risk-surface-scenarios">
            {scenarios.map((scenario) => (
              <button
                type="button"
                key={scenario.id}
                className={`risk-surface-scenario ${
                  selectedScenarioId ===
                  scenario.id
                    ? "is-selected"
                    : ""
                } ${directionClass(
                  scenario.direction,
                )}`}
                aria-pressed={
                  selectedScenarioId ===
                  scenario.id
                }
                onClick={() =>
                  selectScenario(
                    scenario.id,
                  )
                }
              >
                <div className="risk-surface-scenario-heading">
                  <span>
                    SCENARIO
                  </span>

                  <strong>
                    {scenario.label}
                  </strong>
                </div>

                <div className="risk-surface-scenario-values">
                  <div>
                    <span>RISK</span>

                    <strong>
                      {scenario.riskScoreDisplay}
                    </strong>
                  </div>

                  <div>
                    <span>IMPACT</span>

                    <strong>
                      {scenario.portfolioImpactDisplay}
                    </strong>
                  </div>

                  <div>
                    <span>VOL</span>

                    <strong>
                      {scenario.volatilityDisplay}
                    </strong>
                  </div>

                  <div>
                    <span>CORR</span>

                    <strong>
                      {scenario.correlationDisplay}
                    </strong>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="risk-surface-scenario-analysis">
            <span>
              ACTIVE SCENARIO
            </span>

            <strong>
              {selectedScenario.label}
            </strong>

            <p>
              {selectedScenario.description}
            </p>

            <div className="risk-surface-scenario-summary">
              <div>
                <span>
                  RISK SCORE
                </span>

                <strong>
                  {selectedScenario.riskScoreDisplay}
                </strong>
              </div>

              <div>
                <span>
                  PORTFOLIO IMPACT
                </span>

                <strong>
                  {selectedScenario.portfolioImpactDisplay}
                </strong>
              </div>

              <div>
                <span>
                  VOLATILITY
                </span>

                <strong>
                  {selectedScenario.volatilityDisplay}
                </strong>
              </div>

              <div>
                <span>
                  CORRELATION
                </span>

                <strong>
                  {selectedScenario.correlationDisplay}
                </strong>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="risk-surface-model-note">
        <div>
          <span>
            3D ENCODING MODEL
          </span>

          <strong>
            ASSET CLASS → X · STRATEGY → Z ·
            RISK CONTRIBUTION → Y
          </strong>
        </div>

        <p>
          The current D2.8 environment uses
          deterministic DEMO inputs. Scenario-specific
          heat-map transformations are interactive
          research visualisations and are not
          presented as live portfolio measurements or
          calibrated forecasts.
        </p>
      </div>

      <footer className="risk-surface-footer">
        <span>
          WEBGL /{" "}
          <strong>
            REACT THREE FIBER
          </strong>
        </span>

        <span>
          {state.activeNodesDisplay} NODES ·{" "}
          {state.activeLinksDisplay} LINKS ·{" "}
          {factors.length} FACTORS ·{" "}
          {scenarios.length} SCENARIOS
        </span>

        <span>
          D2.8 / PORTFOLIO RISK HEAT MAP (3D)
        </span>
      </footer>
    </section>
  );
}