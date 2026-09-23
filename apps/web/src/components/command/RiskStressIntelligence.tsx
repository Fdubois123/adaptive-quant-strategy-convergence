import { riskStressIntelligenceData } from "@/data/command/risk";
import type {
  RiskDirection,
  RiskSeverity,
} from "@/types/risk";

function directionClass(direction: RiskDirection) {
  return `risk-direction-${direction}`;
}

function severityClass(severity: RiskSeverity) {
  return `risk-severity-${severity}`;
}

export default function RiskStressIntelligence() {
  const {
    state,
    metrics,
    factorExposures,
    contributions,
    stressScenarios,
    limits,
    drawdownHistory,
    alerts,
    stressDistribution,
  } = riskStressIntelligenceData;

  const maxDrawdownMagnitude = Math.max(
    ...drawdownHistory.map((point) =>
      Math.abs(point.drawdown),
    ),
  );

  const maxStressProbability = Math.max(
    ...stressDistribution.map(
      (point) => point.probability,
    ),
  );

  return (
    <section
      className="risk-intelligence"
      aria-labelledby="risk-intelligence-title"
    >
      <header className="risk-intelligence-header">
        <div>
          <div className="risk-intelligence-eyebrow">
            <span>03</span>
            RISK + STRESS INTELLIGENCE
          </div>

          <h2 id="risk-intelligence-title">
            Portfolio Risk Architecture
          </h2>

          <p>
            Integrated risk-budget monitoring, tail-loss
            estimation, factor decomposition and deterministic
            portfolio stress testing.
          </p>
        </div>

        <div className="risk-intelligence-source">
          <span>RISK ENGINE</span>
          <strong>{state.source.toUpperCase()}</strong>
          <small>{state.asOf}</small>
        </div>
      </header>

      <div className="risk-state-grid">
        <article className="risk-overview-panel">
          <div className="risk-overview-top">
            <div>
              <span className="risk-panel-kicker">
                PORTFOLIO RISK STATE
              </span>

              <span
                className={`risk-state-badge ${severityClass(
                  state.severity,
                )}`}
              >
                {state.severity.toUpperCase()}
              </span>
            </div>

            <span className="risk-demo-tag">DEMO</span>
          </div>

          <div className="risk-overview-main">
            <div
              className={`risk-score-gauge ${severityClass(
                state.severity,
              )}`}
            >
              <div className="risk-score-gauge-ring">
                <span>RISK SCORE</span>
                <strong>
                  {state.overallRiskScore}
                </strong>
                <small>/ 100</small>
              </div>
            </div>

            <div className="risk-overview-copy">
              <span>CURRENT STATE</span>

              <strong>{state.stressState}</strong>

              <p>
                Portfolio risk remains inside the configured
                deterministic risk envelope, with drawdown and
                liquidity sensitivity under active monitoring.
              </p>

              <div className="risk-budget">
                <div className="risk-budget-heading">
                  <span>RISK BUDGET UTILIZATION</span>
                  <strong>
                    {state.riskBudgetDisplay}
                  </strong>
                </div>

                <div className="risk-budget-track">
                  <span
                    style={{
                      width: `${state.riskBudgetUsed}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="risk-metrics-grid">
          {metrics.map((metric) => (
            <article
              key={metric.id}
              className="risk-metric-card"
            >
              <div className="risk-metric-heading">
                <span>{metric.label}</span>

                {metric.change && (
                  <small
                    className={directionClass(
                      metric.direction,
                    )}
                  >
                    {metric.change}
                  </small>
                )}
              </div>

              <strong>{metric.value}</strong>

              <p>{metric.helper}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="risk-analysis-grid">
        <article className="risk-panel">
          <div className="risk-panel-header">
            <div>
              <span className="risk-panel-kicker">
                DRAWDOWN PATH
              </span>

              <h3>Portfolio Drawdown</h3>
            </div>

            <span className="risk-panel-tag">
              MAX -7.38%
            </span>
          </div>

          <div className="risk-drawdown-chart">
            <div className="risk-drawdown-zero">
              <span>0%</span>
            </div>

            <div className="risk-drawdown-bars">
              {drawdownHistory.map((point) => {
                const height =
                  (Math.abs(point.drawdown) /
                    maxDrawdownMagnitude) *
                  100;

                return (
                  <div
                    key={point.period}
                    className="risk-drawdown-column"
                  >
                    <div className="risk-drawdown-value">
                      {point.drawdown.toFixed(1)}%
                    </div>

                    <div className="risk-drawdown-bar-area">
                      <span
                        className={
                          Math.abs(point.drawdown) >= 6
                            ? "risk-drawdown-critical"
                            : Math.abs(point.drawdown) >= 4
                              ? "risk-drawdown-warning"
                              : ""
                        }
                        style={{
                          height: `${Math.max(
                            height,
                            6,
                          )}%`,
                        }}
                      />
                    </div>

                    <small>{point.period}</small>
                  </div>
                );
              })}
            </div>
          </div>
        </article>

        <article className="risk-panel">
          <div className="risk-panel-header">
            <div>
              <span className="risk-panel-kicker">
                LOSS DISTRIBUTION
              </span>

              <h3>Stress Distribution</h3>
            </div>

            <span className="risk-panel-tag">
              TAIL VIEW
            </span>
          </div>

          <div className="risk-distribution">
            <div className="risk-distribution-bars">
              {stressDistribution.map((point) => {
                const height =
                  (point.probability /
                    maxStressProbability) *
                  100;

                return (
                  <div
                    key={point.label}
                    className="risk-distribution-column"
                  >
                    <span
                      className={
                        point.loss <= -6
                          ? "risk-distribution-tail"
                          : point.loss < 0
                            ? "risk-distribution-loss"
                            : point.loss > 0
                              ? "risk-distribution-gain"
                              : "risk-distribution-center"
                      }
                      style={{
                        height: `${Math.max(
                          height,
                          5,
                        )}%`,
                      }}
                      title={`${point.label}: ${point.probability}%`}
                    />

                    <small>{point.label}</small>
                  </div>
                );
              })}
            </div>

            <div className="risk-distribution-legend">
              <span>
                <i className="risk-legend-tail" />
                Tail Loss
              </span>

              <span>
                <i className="risk-legend-loss" />
                Loss
              </span>

              <span>
                <i className="risk-legend-center" />
                Neutral
              </span>

              <span>
                <i className="risk-legend-gain" />
                Gain
              </span>
            </div>
          </div>
        </article>
      </div>

      <div className="risk-factor-grid">
        <article className="risk-panel">
          <div className="risk-panel-header">
            <div>
              <span className="risk-panel-kicker">
                FACTOR MODEL
              </span>

              <h3>Factor Exposure</h3>
            </div>

            <span className="risk-panel-tag">
              6 FACTORS
            </span>
          </div>

          <div className="risk-factor-list">
            {factorExposures.map((factor) => (
              <div
                key={factor.id}
                className="risk-factor-row"
              >
                <div className="risk-factor-heading">
                  <span>{factor.label}</span>

                  <div>
                    <strong
                      className={directionClass(
                        factor.direction,
                      )}
                    >
                      {factor.displayExposure}
                    </strong>

                    <small>
                      {factor.displayContribution} RISK
                    </small>
                  </div>
                </div>

                <div className="risk-factor-axis">
                  <div className="risk-factor-axis-line" />

                  <span
                    className={`risk-factor-bar ${directionClass(
                      factor.direction,
                    )}`}
                    style={{
                      width: `${Math.abs(
                        factor.exposure,
                      ) / 2}%`,
                      left:
                        factor.exposure >= 0
                          ? "50%"
                          : `${50 - Math.abs(
                              factor.exposure,
                            ) / 2}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="risk-panel">
          <div className="risk-panel-header">
            <div>
              <span className="risk-panel-kicker">
                RISK DECOMPOSITION
              </span>

              <h3>Contribution to Risk</h3>
            </div>

            <span className="risk-panel-tag">
              100%
            </span>
          </div>

          <div className="risk-contribution-list">
            {contributions.map(
              (contribution, index) => (
                <div
                  key={contribution.id}
                  className="risk-contribution-row"
                >
                  <div className="risk-contribution-heading">
                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <strong>
                      {contribution.label}
                    </strong>

                    <b>
                      {
                        contribution.displayContribution
                      }
                    </b>
                  </div>

                  <div className="risk-contribution-track">
                    <span
                      style={{
                        width: `${contribution.contribution}%`,
                      }}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </article>
      </div>

      <article className="risk-panel">
        <div className="risk-panel-header">
          <div>
            <span className="risk-panel-kicker">
              SCENARIO ENGINE
            </span>

            <h3>Portfolio Stress Tests</h3>
          </div>

          <span className="risk-panel-tag">
            4 SCENARIOS
          </span>
        </div>

        <div className="risk-scenario-grid">
          {stressScenarios.map((scenario) => (
            <article
              key={scenario.id}
              className={`risk-scenario-card ${severityClass(
                scenario.severity,
              )}`}
            >
              <div className="risk-scenario-top">
                <div>
                  <span>{scenario.category}</span>
                  <strong>{scenario.label}</strong>
                </div>

                <small>
                  {scenario.severity.toUpperCase()}
                </small>
              </div>

              <div className="risk-scenario-impact">
                <span>PORTFOLIO IMPACT</span>
                <strong>
                  {scenario.displayImpact}
                </strong>
              </div>

              <p>{scenario.description}</p>

              <div className="risk-scenario-footer">
                <span>EST. RECOVERY</span>
                <strong>
                  {scenario.recoveryEstimate}
                </strong>
              </div>
            </article>
          ))}
        </div>
      </article>

      <div className="risk-monitor-grid">
        <article className="risk-panel">
          <div className="risk-panel-header">
            <div>
              <span className="risk-panel-kicker">
                CONTROL FRAMEWORK
              </span>

              <h3>Risk Limit Monitor</h3>
            </div>

            <span className="risk-panel-tag">
              LIMITS
            </span>
          </div>

          <div className="risk-limit-list">
            {limits.map((limit) => (
              <div
                key={limit.id}
                className={`risk-limit-row risk-limit-${limit.state}`}
              >
                <div className="risk-limit-heading">
                  <div>
                    <span>{limit.label}</span>
                    <small>
                      CURRENT {limit.displayCurrent} /
                      LIMIT {limit.displayLimit}
                    </small>
                  </div>

                  <strong>
                    {limit.displayUtilization}
                  </strong>
                </div>

                <div className="risk-limit-track">
                  <span
                    style={{
                      width: `${Math.min(
                        limit.utilization,
                        100,
                      )}%`,
                    }}
                  />
                </div>

                <div className="risk-limit-state">
                  {limit.state.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="risk-panel">
          <div className="risk-panel-header">
            <div>
              <span className="risk-panel-kicker">
                ACTIVE INTELLIGENCE
              </span>

              <h3>Risk Alerts</h3>
            </div>

            <span className="risk-panel-tag">
              {alerts.length} ACTIVE
            </span>
          </div>

          <div className="risk-alert-list">
            {alerts.map((alert) => (
              <article
                key={alert.id}
                className={`risk-alert-card ${severityClass(
                  alert.severity,
                )}`}
              >
                <div className="risk-alert-indicator">
                  <span />
                </div>

                <div className="risk-alert-content">
                  <div className="risk-alert-heading">
                    <div>
                      <span>
                        {alert.status.toUpperCase()}
                      </span>

                      <strong>
                        {alert.title}
                      </strong>
                    </div>

                    <small>
                      {alert.severity.toUpperCase()}
                    </small>
                  </div>

                  <p>{alert.detail}</p>

                  <div className="risk-alert-metric">
                    {alert.metric}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </article>
      </div>

      <footer className="risk-intelligence-footer">
        <div>
          <span>RISK STATE</span>
          <strong>{state.stressState}</strong>
        </div>

        <div>
          <span>RISK BUDGET</span>
          <strong>{state.riskBudgetDisplay}</strong>
        </div>

        <div>
          <span>TAIL LOSS</span>
          <strong>- $326K CVaR</strong>
        </div>

        <div>
          <span>DATA MODE</span>
          <strong>DEMO</strong>
        </div>

        <p>
          Deterministic research interface. Values are not
          live market risk estimates.
        </p>
      </footer>
    </section>
  );
}