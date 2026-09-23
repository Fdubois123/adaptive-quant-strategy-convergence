import { correlationIntelligenceData } from "@/data/command/correlation";
import type {
  CorrelationAssetId,
  CorrelationDirection,
  CorrelationRiskLevel,
} from "@/types/correlation";

function directionClass(
  direction: CorrelationDirection,
) {
  return `correlation-direction-${direction}`;
}

function riskClass(
  risk: CorrelationRiskLevel,
) {
  return `correlation-risk-${risk}`;
}

function correlationClass(value: number) {
  const absolute = Math.abs(value);

  if (value >= 0.75) {
    return "correlation-cell-positive-high";
  }

  if (value >= 0.45) {
    return "correlation-cell-positive-medium";
  }

  if (value > 0.15) {
    return "correlation-cell-positive-low";
  }

  if (value <= -0.45) {
    return "correlation-cell-negative-high";
  }

  if (value <= -0.2) {
    return "correlation-cell-negative-medium";
  }

  if (absolute <= 0.15) {
    return "correlation-cell-neutral";
  }

  return "correlation-cell-neutral";
}

function assetSymbol(assetId: CorrelationAssetId) {
  return (
    correlationIntelligenceData.assets.find(
      (asset) => asset.id === assetId,
    )?.symbol ?? assetId.toUpperCase()
  );
}

function clampPercent(value: number) {
  return Math.max(0, Math.min(100, value));
}

function rollingPointY(value: number) {
  /*
   * Correlations are plotted from +1 at the top
   * to -1 at the bottom.
   */
  return 12 + ((1 - value) / 2) * 116;
}

function rollingPolyline(
  values: number[],
) {
  if (values.length <= 1) {
    return "";
  }

  return values
    .map((value, index) => {
      const x =
        12 +
        (index / (values.length - 1)) *
          476;

      const y = rollingPointY(value);

      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

export default function CorrelationIntelligence() {
  const {
    state,
    metrics,
    assets,
    matrix,
    rollingHistory,
    clusters,
    strongestPairs,
    diversificationComponents,
    breakdown,
    scenarios,
    alerts,
  } = correlationIntelligenceData;

  const rollingSeries = [
    {
      id: "equity-rates",
      label: "EQUITY / RATES",
      className:
        "correlation-rolling-equity-rates",
      values: rollingHistory.map(
        (point) => point.equityRates,
      ),
    },
    {
      id: "equity-gold",
      label: "EQUITY / GOLD",
      className:
        "correlation-rolling-equity-gold",
      values: rollingHistory.map(
        (point) => point.equityGold,
      ),
    },
    {
      id: "equity-dollar",
      label: "EQUITY / USD",
      className:
        "correlation-rolling-equity-dollar",
      values: rollingHistory.map(
        (point) => point.equityDollar,
      ),
    },
    {
      id: "equity-oil",
      label: "EQUITY / OIL",
      className:
        "correlation-rolling-equity-oil",
      values: rollingHistory.map(
        (point) => point.equityOil,
      ),
    },
    {
      id: "equity-crypto",
      label: "EQUITY / CRYPTO",
      className:
        "correlation-rolling-equity-crypto",
      values: rollingHistory.map(
        (point) => point.equityCrypto,
      ),
    },
  ];

  return (
    <section
      className="correlation-intelligence"
      aria-labelledby="correlation-intelligence-title"
    >
      <header className="correlation-intelligence-header">
        <div>
          <div className="correlation-intelligence-eyebrow">
            <span>06</span>
            CORRELATION INTELLIGENCE / D2.7
          </div>

          <h2 id="correlation-intelligence-title">
            Cross-Asset Dependence Intelligence
          </h2>

          <p>
            Portfolio correlation structure,
            diversification quality, dependence
            clustering and simulated stress convergence
            across major asset exposures.
          </p>
        </div>

        <div className="correlation-intelligence-source">
          <span>DATA PROVENANCE</span>
          <strong>
            {state.source.toUpperCase()}
          </strong>
          <small>{state.asOf}</small>
        </div>
      </header>

      <div className="correlation-overview-grid">
        <article className="correlation-state-panel">
          <div className="correlation-state-top">
            <div>
              <span>CORRELATION REGIME</span>
              <strong>
                {state.regimeLabel}
              </strong>
            </div>

            <span className="correlation-demo-tag">
              DEMO
            </span>
          </div>

          <div className="correlation-state-main">
            <div className="correlation-score-ring">
              <span>DIVERSIFICATION</span>
              <strong>
                {state.diversificationScore}
              </strong>
              <small>/ 100</small>
            </div>

            <div className="correlation-state-copy">
              <span>DOMINANT DEPENDENCE</span>

              <strong>
                {state.dominantRelationship}
              </strong>

              <p>
                Cross-asset dependence remains
                controlled in the current snapshot,
                although the equity-growth cluster
                continues to carry the largest
                concentration of shared risk.
              </p>

              <div className="correlation-state-meta">
                <div>
                  <span>AVG CORR</span>
                  <strong>
                    {
                      state.averageCorrelationDisplay
                    }
                  </strong>
                </div>

                <div>
                  <span>STRESS CORR</span>
                  <strong>
                    {
                      state.stressCorrelationDisplay
                    }
                  </strong>
                </div>

                <div>
                  <span>CLUSTERS</span>
                  <strong>
                    {state.clusterCountDisplay}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="correlation-metrics-grid">
          {metrics.map((metric) => (
            <article
              key={metric.id}
              className={`correlation-metric-card ${directionClass(
                metric.direction,
              )}`}
            >
              <div className="correlation-metric-heading">
                <span>{metric.label}</span>
                <i aria-hidden="true" />
              </div>

              <strong>{metric.value}</strong>

              <div className="correlation-metric-change">
                {metric.change}
              </div>

              <p>{metric.helper}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="correlation-primary-grid">
        <article className="correlation-panel correlation-matrix-panel">
          <div className="correlation-panel-header">
            <div>
              <span className="correlation-panel-kicker">
                DEPENDENCE STRUCTURE
              </span>

              <h3>Cross-Asset Correlation Matrix</h3>

              <p>
                Pairwise deterministic correlation
                snapshot across portfolio assets.
              </p>
            </div>

            <span className="correlation-panel-tag">
              8 × 8 MATRIX
            </span>
          </div>

          <div className="correlation-matrix-wrapper">
            <table className="correlation-matrix">
              <thead>
                <tr>
                  <th>ASSET</th>

                  {assets.map((asset) => (
                    <th key={asset.id}>
                      {asset.symbol}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {matrix.map((row) => (
                  <tr key={row.asset}>
                    <th>
                      {assetSymbol(row.asset)}
                    </th>

                    {row.cells.map((cell) => (
                      <td
                        key={`${cell.assetX}-${cell.assetY}`}
                        className={correlationClass(
                          cell.value,
                        )}
                        title={`${assetSymbol(
                          cell.assetX,
                        )} / ${assetSymbol(
                          cell.assetY,
                        )}: ${
                          cell.displayValue
                        }`}
                      >
                        {cell.displayValue}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="correlation-matrix-legend">
            <span>
              <i className="correlation-legend-negative" />
              NEGATIVE
            </span>

            <span>
              <i className="correlation-legend-neutral" />
              NEUTRAL
            </span>

            <span>
              <i className="correlation-legend-positive" />
              POSITIVE
            </span>

            <span>
              <i className="correlation-legend-high" />
              HIGH DEPENDENCE
            </span>
          </div>
        </article>

        <article className="correlation-panel">
          <div className="correlation-panel-header">
            <div>
              <span className="correlation-panel-kicker">
                PORTFOLIO STRUCTURE
              </span>

              <h3>Asset Exposure</h3>

              <p>
                Portfolio weight represented inside
                the dependence model.
              </p>
            </div>

            <span className="correlation-panel-tag">
              100% ALLOCATED
            </span>
          </div>

          <div className="correlation-asset-list">
            {assets.map((asset) => (
              <div
                key={asset.id}
                className="correlation-asset-row"
              >
                <div className="correlation-asset-heading">
                  <div>
                    <strong>
                      {asset.symbol}
                    </strong>
                    <span>{asset.label}</span>
                  </div>

                  <span>
                    {asset.weightDisplay}
                  </span>
                </div>

                <div className="correlation-asset-track">
                  <span
                    style={{
                      width: `${clampPercent(
                        asset.weight * 3.4,
                      )}%`,
                    }}
                  />
                </div>

                <small>
                  {asset.assetClass.toUpperCase()}
                </small>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="correlation-analysis-grid">
        <article className="correlation-panel correlation-rolling-panel">
          <div className="correlation-panel-header">
            <div>
              <span className="correlation-panel-kicker">
                TEMPORAL DEPENDENCE
              </span>

              <h3>Rolling Correlation Behaviour</h3>

              <p>
                Evolution of major cross-asset
                relationships across twelve
                observations.
              </p>
            </div>

            <span className="correlation-panel-tag">
              T-11 → NOW
            </span>
          </div>

          <div className="correlation-rolling-chart">
            <div className="correlation-chart-scale">
              <span>+1.0</span>
              <span>+0.5</span>
              <span>0.0</span>
              <span>-0.5</span>
              <span>-1.0</span>
            </div>

            <svg
              viewBox="0 0 500 150"
              role="img"
              aria-label="Rolling correlation relationships"
              preserveAspectRatio="none"
            >
              <line
                x1="12"
                y1="12"
                x2="488"
                y2="12"
                className="correlation-chart-grid"
              />

              <line
                x1="12"
                y1="41"
                x2="488"
                y2="41"
                className="correlation-chart-grid"
              />

              <line
                x1="12"
                y1="70"
                x2="488"
                y2="70"
                className="correlation-chart-zero"
              />

              <line
                x1="12"
                y1="99"
                x2="488"
                y2="99"
                className="correlation-chart-grid"
              />

              <line
                x1="12"
                y1="128"
                x2="488"
                y2="128"
                className="correlation-chart-grid"
              />

              {rollingSeries.map((series) => (
                <polyline
                  key={series.id}
                  points={rollingPolyline(
                    series.values,
                  )}
                  className={`correlation-rolling-line ${series.className}`}
                  fill="none"
                />
              ))}
            </svg>

            <div className="correlation-chart-periods">
              {rollingHistory.map((point) => (
                <span key={point.period}>
                  {point.period}
                </span>
              ))}
            </div>
          </div>

          <div className="correlation-rolling-legend">
            {rollingSeries.map((series) => (
              <span key={series.id}>
                <i
                  className={series.className}
                />
                {series.label}
              </span>
            ))}
          </div>
        </article>

        <article className="correlation-panel">
          <div className="correlation-panel-header">
            <div>
              <span className="correlation-panel-kicker">
                DEPENDENCE CLUSTERS
              </span>

              <h3>Cluster Intelligence</h3>

              <p>
                Groups of exposures sharing common
                dependence characteristics.
              </p>
            </div>

            <span className="correlation-panel-tag">
              {state.clusterCountDisplay} GROUPS
            </span>
          </div>

          <div className="correlation-cluster-list">
            {clusters.map((cluster) => (
              <article
                key={cluster.id}
                className={`correlation-cluster-card ${riskClass(
                  cluster.riskLevel,
                )}`}
              >
                <div className="correlation-cluster-heading">
                  <div>
                    <span>CLUSTER</span>
                    <strong>
                      {cluster.label}
                    </strong>
                  </div>

                  <span>
                    {
                      cluster.averageInternalCorrelationDisplay
                    }
                  </span>
                </div>

                <div className="correlation-cluster-members">
                  {cluster.members.map(
                    (member) => (
                      <span key={member}>
                        {assetSymbol(member)}
                      </span>
                    ),
                  )}
                </div>

                <div className="correlation-cluster-meta">
                  <div>
                    <span>PORTFOLIO</span>
                    <strong>
                      {
                        cluster.portfolioWeightDisplay
                      }
                    </strong>
                  </div>

                  <div>
                    <span>RISK</span>
                    <strong>
                      {cluster.riskLevel.toUpperCase()}
                    </strong>
                  </div>
                </div>

                <p>
                  {cluster.interpretation}
                </p>
              </article>
            ))}
          </div>
        </article>
      </div>

      <div className="correlation-analysis-grid">
        <article className="correlation-panel">
          <div className="correlation-panel-header">
            <div>
              <span className="correlation-panel-kicker">
                DIVERSIFICATION ENGINE
              </span>

              <h3>Diversification Intelligence</h3>

              <p>
                Contribution of structural factors to
                portfolio diversification quality.
              </p>
            </div>

            <span className="correlation-panel-tag">
              SCORE{" "}
              {state.diversificationScoreDisplay}
            </span>
          </div>

          <div className="correlation-diversification-list">
            {diversificationComponents.map(
              (component) => (
                <div
                  key={component.id}
                  className="correlation-diversification-row"
                >
                  <div className="correlation-diversification-heading">
                    <div>
                      <strong>
                        {component.label}
                      </strong>
                      <span>
                        {component.helper}
                      </span>
                    </div>

                    <strong
                      className={directionClass(
                        component.direction,
                      )}
                    >
                      {component.scoreDisplay}
                    </strong>
                  </div>

                  <div className="correlation-diversification-track">
                    <span
                      className={directionClass(
                        component.direction,
                      )}
                      style={{
                        width: `${clampPercent(
                          component.score,
                        )}%`,
                      }}
                    />
                  </div>

                  <div className="correlation-diversification-contribution">
                    CONTRIBUTION{" "}
                    <strong>
                      {
                        component.contributionDisplay
                      }
                    </strong>
                  </div>
                </div>
              ),
            )}
          </div>
        </article>

        <article className="correlation-panel">
          <div className="correlation-panel-header">
            <div>
              <span className="correlation-panel-kicker">
                RELATIONSHIP BREAKDOWN
              </span>

              <h3>Current vs Baseline</h3>

              <p>
                Structural relationship changes
                against the deterministic baseline.
              </p>
            </div>

            <span className="correlation-panel-tag">
              RELATIVE STATE
            </span>
          </div>

          <div className="correlation-breakdown-list">
            {breakdown.map((item) => (
              <div
                key={item.id}
                className="correlation-breakdown-row"
              >
                <div>
                  <span>{item.label}</span>

                  <strong
                    className={directionClass(
                      item.direction,
                    )}
                  >
                    {item.currentDisplay}
                  </strong>
                </div>

                <div className="correlation-breakdown-track">
                  <span
                    className={directionClass(
                      item.direction,
                    )}
                    style={{
                      width: `${Math.max(
                        4,
                        Math.abs(item.current) *
                          100,
                      )}%`,
                    }}
                  />
                </div>

                <small>
                  BASELINE{" "}
                  {item.baselineDisplay}
                </small>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="correlation-panel">
        <div className="correlation-panel-header">
          <div>
            <span className="correlation-panel-kicker">
              PAIR INTELLIGENCE
            </span>

            <h3>Material Correlation Relationships</h3>

            <p>
              Highest-impact dependence and hedge
              relationships currently present in the
              portfolio structure.
            </p>
          </div>

          <span className="correlation-panel-tag">
            TOP RELATIONSHIPS
          </span>
        </div>

        <div className="correlation-pair-grid">
          {strongestPairs.map((pair) => (
            <article
              key={pair.id}
              className={`correlation-pair-card ${riskClass(
                pair.riskLevel,
              )}`}
            >
              <div className="correlation-pair-top">
                <div>
                  <span>PAIR</span>
                  <strong>
                    {assetSymbol(pair.assetA)}
                    {" / "}
                    {assetSymbol(pair.assetB)}
                  </strong>
                </div>

                <strong>
                  {pair.correlationDisplay}
                </strong>
              </div>

              <div className="correlation-pair-meta">
                <div>
                  <span>PREVIOUS</span>
                  <strong>
                    {
                      pair.previousCorrelationDisplay
                    }
                  </strong>
                </div>

                <div>
                  <span>CHANGE</span>
                  <strong
                    className={directionClass(
                      pair.direction,
                    )}
                  >
                    {pair.changeDisplay}
                  </strong>
                </div>

                <div>
                  <span>RISK</span>
                  <strong>
                    {pair.riskLevel.toUpperCase()}
                  </strong>
                </div>
              </div>

              <p>{pair.interpretation}</p>
            </article>
          ))}
        </div>
      </article>

      <div className="correlation-analysis-grid">
        <article className="correlation-panel">
          <div className="correlation-panel-header">
            <div>
              <span className="correlation-panel-kicker">
                SCENARIO ENGINE
              </span>

              <h3>Correlation Regime Scenarios</h3>

              <p>
                Simulated diversification behaviour
                under alternative market states.
              </p>
            </div>

            <span className="correlation-panel-tag">
              DETERMINISTIC
            </span>
          </div>

          <div className="correlation-scenario-grid">
            {scenarios.map((scenario) => (
              <article
                key={scenario.id}
                className={`correlation-scenario-card ${directionClass(
                  scenario.direction,
                )}`}
              >
                <div className="correlation-scenario-heading">
                  <span>SCENARIO</span>
                  <strong>
                    {scenario.label}
                  </strong>
                </div>

                <div className="correlation-scenario-stats">
                  <div>
                    <span>AVG CORR</span>
                    <strong>
                      {
                        scenario.averageCorrelationDisplay
                      }
                    </strong>
                  </div>

                  <div>
                    <span>DIVERSIFICATION</span>
                    <strong>
                      {
                        scenario.diversificationScoreDisplay
                      }
                    </strong>
                  </div>

                  <div>
                    <span>CONCENTRATION</span>
                    <strong>
                      {
                        scenario.concentrationRiskDisplay
                      }
                    </strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="correlation-panel">
          <div className="correlation-panel-header">
            <div>
              <span className="correlation-panel-kicker">
                RISK MONITOR
              </span>

              <h3>Correlation Alerts</h3>

              <p>
                Dependence conditions requiring
                portfolio or research attention.
              </p>
            </div>

            <span className="correlation-panel-tag">
              {alerts.length} SIGNALS
            </span>
          </div>

          <div className="correlation-alert-list">
            {alerts.map((alert) => (
              <article
                key={alert.id}
                className={`correlation-alert-card ${riskClass(
                  alert.severity,
                )}`}
              >
                <div className="correlation-alert-heading">
                  <div>
                    <span>
                      {alert.status.toUpperCase()}
                    </span>

                    <strong>
                      {alert.title}
                    </strong>
                  </div>

                  <span>
                    {alert.severity.toUpperCase()}
                  </span>
                </div>

                <div className="correlation-alert-metric">
                  <span>{alert.metric}</span>
                  <strong>
                    {alert.metricValue}
                  </strong>
                </div>

                <p>{alert.detail}</p>
              </article>
            ))}
          </div>
        </article>
      </div>

      <footer className="correlation-intelligence-footer">
        <span>
          CORRELATION ENGINE /{" "}
          <strong>DEMO MODEL</strong>
        </span>

        <span>
          MATRIX 8×8 · ROLLING WINDOW 12
          OBSERVATIONS · STRESS SCENARIOS 4
        </span>

        <span>
          D2.7 / CORRELATION INTELLIGENCE
        </span>
      </footer>
    </section>
  );
}