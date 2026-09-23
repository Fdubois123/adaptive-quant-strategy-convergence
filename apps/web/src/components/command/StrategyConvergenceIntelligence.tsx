import { strategyConvergenceData } from "@/data/command/strategy";
import type {
  StrategyDirection,
  StrategyModel,
} from "@/types/strategy";

function directionClass(direction: StrategyDirection) {
  return `strategy-direction-${direction}`;
}

function strategyStateClass(strategy: StrategyModel) {
  return `strategy-state-${strategy.state}`;
}

function signalLabel(signal: StrategyModel["signal"]) {
  switch (signal) {
    case "strong-long":
      return "STRONG LONG";
    case "long":
      return "LONG";
    case "short":
      return "SHORT";
    case "strong-short":
      return "STRONG SHORT";
    default:
      return "NEUTRAL";
  }
}

export default function StrategyConvergenceIntelligence() {
  const {
    state,
    metrics,
    strategies,
    scoreComponents,
    allocationHistory,
    signals,
    allocationDecisions,
  } = strategyConvergenceData;

  return (
    <section
      className="strategy-intelligence"
      aria-labelledby="strategy-intelligence-title"
    >
      <header className="strategy-intelligence-header">
        <div>
          <div className="strategy-intelligence-eyebrow">
            <span>04</span>
            STRATEGY CONVERGENCE
          </div>

          <h2 id="strategy-intelligence-title">
            Adaptive Strategy Convergence Engine
          </h2>

          <p>
            Regime-aware strategy scoring, model agreement and adaptive
            capital allocation across quantitative strategy families.
          </p>
        </div>

        <div className="strategy-intelligence-source">
          <span>CONVERGENCE ENGINE</span>
          <strong>{state.source.toUpperCase()}</strong>
          <small>{state.asOf}</small>
        </div>
      </header>

      <div className="strategy-overview-grid">
        <article className="strategy-convergence-hero">
          <div className="strategy-hero-top">
            <div>
              <span className="strategy-panel-kicker">
                CONVERGENCE STATE
              </span>

              <span className="strategy-convergence-status">
                <i aria-hidden="true" />
                {state.label}
              </span>
            </div>

            <span className="strategy-demo-tag">DEMO</span>
          </div>

          <div className="strategy-hero-main">
            <div className="strategy-convergence-gauge">
              <div className="strategy-convergence-ring">
                <span>CONVERGENCE</span>
                <strong>{state.score}</strong>
                <small>/ 100</small>
              </div>
            </div>

            <div className="strategy-hero-copy">
              <span>DOMINANT STRATEGY</span>

              <strong>{state.dominantStrategyLabel}</strong>

              <p>
                Directional strategies currently receive the strongest
                allocation support under the active {state.regime}{" "}
                demonstration regime.
              </p>

              <div className="strategy-hero-meta">
                <div>
                  <span>CONFIDENCE</span>
                  <strong>{state.confidenceDisplay}</strong>
                </div>

                <div>
                  <span>ACTIVE MODELS</span>
                  <strong>{state.activeStrategies}</strong>
                </div>

                <div>
                  <span>REGIME</span>
                  <strong>{state.regime}</strong>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="strategy-metrics-grid">
          {metrics.map((metric) => (
            <article
              key={metric.id}
              className="strategy-metric-card"
            >
              <div className="strategy-metric-heading">
                <span>{metric.label}</span>

                <i
                  className={directionClass(metric.direction)}
                  aria-hidden="true"
                />
              </div>

              <strong>{metric.value}</strong>
              <p>{metric.helper}</p>
            </article>
          ))}
        </div>
      </div>

      <article className="strategy-panel">
        <div className="strategy-panel-header">
          <div>
            <span className="strategy-panel-kicker">
              MODEL RANKING
            </span>
            <h3>Strategy Intelligence</h3>
          </div>

          <span className="strategy-panel-tag">
            5 ACTIVE MODELS
          </span>
        </div>

        <div className="strategy-model-grid">
          {strategies.map((strategy, index) => (
            <article
              key={strategy.id}
              className={`strategy-model-card ${strategyStateClass(
                strategy,
              )}`}
            >
              <div className="strategy-model-top">
                <div className="strategy-model-rank">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="strategy-model-state">
                  {strategy.state.toUpperCase()}
                </div>
              </div>

              <div className="strategy-model-name">
                <span>{strategy.shortName}</span>
                <strong>{strategy.name}</strong>
              </div>

              <p>{strategy.description}</p>

              <div className="strategy-score-row">
                <div className="strategy-score-primary">
                  <span>SCORE</span>
                  <strong>{strategy.scoreDisplay}</strong>
                </div>

                <div>
                  <span>REGIME FIT</span>
                  <strong>
                    {strategy.regimeCompatibilityDisplay}
                  </strong>
                </div>

                <div>
                  <span>CONFIDENCE</span>
                  <strong>{strategy.confidenceDisplay}</strong>
                </div>
              </div>

              <div className="strategy-score-track">
                <span
                  style={{
                    width: `${strategy.score}%`,
                  }}
                />
              </div>

              <div className="strategy-allocation-row">
                <div>
                  <span>CURRENT WEIGHT</span>
                  <strong>
                    {strategy.currentWeightDisplay}
                  </strong>
                </div>

                <div>
                  <span>CHANGE</span>
                  <strong
                    className={
                      strategy.weightChange > 0
                        ? "strategy-direction-positive"
                        : strategy.weightChange < 0
                          ? "strategy-direction-warning"
                          : "strategy-direction-neutral"
                    }
                  >
                    {strategy.weightChangeDisplay}
                  </strong>
                </div>

                <div>
                  <span>SIGNAL</span>
                  <strong>
                    {signalLabel(strategy.signal)}
                  </strong>
                </div>
              </div>

              <div className="strategy-model-performance">
                <div>
                  <span>SHARPE</span>
                  <strong>{strategy.sharpe.toFixed(2)}</strong>
                </div>

                <div>
                  <span>VOL</span>
                  <strong>
                    {strategy.volatility.toFixed(1)}%
                  </strong>
                </div>

                <div>
                  <span>MAX DD</span>
                  <strong>
                    {strategy.maxDrawdown.toFixed(1)}%
                  </strong>
                </div>

                <div>
                  <span>CONTRIBUTION</span>
                  <strong className="strategy-direction-positive">
                    {strategy.returnContributionDisplay}
                  </strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </article>

      <div className="strategy-analysis-grid">
        <article className="strategy-panel">
          <div className="strategy-panel-header">
            <div>
              <span className="strategy-panel-kicker">
                MULTI-FACTOR SCORING
              </span>
              <h3>Strategy Score Matrix</h3>
            </div>

            <span className="strategy-panel-tag">
              0–100
            </span>
          </div>

          <div className="strategy-score-matrix-wrapper">
            <table className="strategy-score-matrix">
              <thead>
                <tr>
                  <th>COMPONENT</th>
                  <th>MOM</th>
                  <th>MEAN REV</th>
                  <th>VOL BRK</th>
                  <th>TREND</th>
                  <th>CARRY</th>
                </tr>
              </thead>

              <tbody>
                {scoreComponents.map((component) => {
                  const values = [
                    component.momentum,
                    component.meanReversion,
                    component.volatilityBreakout,
                    component.trendFollowing,
                    component.carry,
                  ];

                  return (
                    <tr key={component.id}>
                      <th>{component.label}</th>

                      {values.map((value, index) => (
                        <td
                          key={`${component.id}-${index}`}
                        >
                          <span
                            className={
                              value >= 85
                                ? "strategy-matrix-strong"
                                : value >= 70
                                  ? "strategy-matrix-good"
                                  : value >= 55
                                    ? "strategy-matrix-neutral"
                                    : "strategy-matrix-weak"
                            }
                            style={{
                              opacity: 0.45 + value / 190,
                            }}
                          >
                            {value}
                          </span>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </article>

        <article className="strategy-panel">
          <div className="strategy-panel-header">
            <div>
              <span className="strategy-panel-kicker">
                CURRENT CAPITAL
              </span>
              <h3>Adaptive Allocation</h3>
            </div>

            <span className="strategy-panel-tag">
              100% ALLOCATED
            </span>
          </div>

          <div className="strategy-allocation-stack">
            {strategies.map((strategy) => (
              <div
                key={strategy.id}
                className={`strategy-allocation-segment strategy-allocation-${strategy.id}`}
                style={{
                  width: `${strategy.currentWeight}%`,
                }}
                title={`${strategy.name}: ${strategy.currentWeightDisplay}`}
              >
                <span>{strategy.shortName}</span>
                <strong>{strategy.currentWeightDisplay}</strong>
              </div>
            ))}
          </div>

          <div className="strategy-allocation-list">
            {strategies.map((strategy) => (
              <div
                key={strategy.id}
                className="strategy-allocation-item"
              >
                <div>
                  <i
                    className={`strategy-allocation-dot strategy-allocation-${strategy.id}`}
                    aria-hidden="true"
                  />

                  <span>{strategy.name}</span>
                </div>

                <strong>
                  {strategy.currentWeightDisplay}
                </strong>
              </div>
            ))}
          </div>

          <div className="strategy-allocation-summary">
            <span>
              Allocation remains fully normalized to 100%.
            </span>
            <strong>REGIME-AWARE</strong>
          </div>
        </article>
      </div>

      <article className="strategy-panel">
        <div className="strategy-panel-header">
          <div>
            <span className="strategy-panel-kicker">
              ALLOCATION EVOLUTION
            </span>
            <h3>Strategy Weight Transition</h3>
          </div>

          <span className="strategy-panel-tag">
            T-7 → NOW
          </span>
        </div>

        <div className="strategy-history">
          {allocationHistory.map((point) => (
            <div
              key={point.period}
              className="strategy-history-period"
            >
              <div className="strategy-history-bars">
                <span
                  className="strategy-allocation-momentum"
                  style={{
                    height: `${point.momentum * 2.2}px`,
                  }}
                  title={`Momentum ${point.momentum}%`}
                />

                <span
                  className="strategy-allocation-mean-reversion"
                  style={{
                    height: `${point.meanReversion * 2.2}px`,
                  }}
                  title={`Mean Reversion ${point.meanReversion}%`}
                />

                <span
                  className="strategy-allocation-volatility-breakout"
                  style={{
                    height: `${point.volatilityBreakout * 2.2}px`,
                  }}
                  title={`Volatility Breakout ${point.volatilityBreakout}%`}
                />

                <span
                  className="strategy-allocation-trend-following"
                  style={{
                    height: `${point.trendFollowing * 2.2}px`,
                  }}
                  title={`Trend Following ${point.trendFollowing}%`}
                />

                <span
                  className="strategy-allocation-carry"
                  style={{
                    height: `${point.carry * 2.2}px`,
                  }}
                  title={`Carry ${point.carry}%`}
                />
              </div>

              <strong>{point.period}</strong>
            </div>
          ))}
        </div>

        <div className="strategy-history-legend">
          {strategies.map((strategy) => (
            <span key={strategy.id}>
              <i
                className={`strategy-allocation-${strategy.id}`}
              />
              {strategy.shortName}
            </span>
          ))}
        </div>
      </article>

      <div className="strategy-decision-grid">
        <article className="strategy-panel">
          <div className="strategy-panel-header">
            <div>
              <span className="strategy-panel-kicker">
                EXPLAINABLE ALLOCATION
              </span>
              <h3>Reallocation Decisions</h3>
            </div>

            <span className="strategy-panel-tag">
              WHY CAPITAL MOVED
            </span>
          </div>

          <div className="strategy-decision-list">
            {allocationDecisions.map((decision) => (
              <article
                key={decision.id}
                className="strategy-decision-card"
              >
                <div className="strategy-decision-main">
                  <div>
                    <span>{decision.label}</span>

                    <strong
                      className={directionClass(
                        decision.direction,
                      )}
                    >
                      {decision.changeDisplay}
                    </strong>
                  </div>

                  <div className="strategy-decision-flow">
                    <span>
                      {decision.previousWeightDisplay}
                    </span>
                    <b>→</b>
                    <strong>
                      {decision.targetWeightDisplay}
                    </strong>
                  </div>
                </div>

                <p>{decision.reason}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="strategy-panel">
          <div className="strategy-panel-header">
            <div>
              <span className="strategy-panel-kicker">
                CONVERGENCE MONITOR
              </span>
              <h3>Decision Signals</h3>
            </div>

            <span className="strategy-panel-tag">
              ACTIVE
            </span>
          </div>

          <div className="strategy-signal-list">
            {signals.map((signal) => (
              <article
                key={signal.id}
                className={`strategy-signal-card ${directionClass(
                  signal.direction,
                )}`}
              >
                <div>
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>

                <p>{signal.detail}</p>
              </article>
            ))}
          </div>
        </article>
      </div>

      <footer className="strategy-intelligence-footer">
        <div>
          <span>CONVERGENCE</span>
          <strong>{state.label}</strong>
        </div>

        <div>
          <span>DOMINANT</span>
          <strong>
            {state.dominantStrategyLabel.toUpperCase()}
          </strong>
        </div>

        <div>
          <span>CONFIDENCE</span>
          <strong>{state.confidenceDisplay}</strong>
        </div>

        <div>
          <span>REGIME</span>
          <strong>{state.regime}</strong>
        </div>

        <p>
          Deterministic demonstration of regime-aware strategy
          scoring and adaptive capital allocation.
        </p>
      </footer>
    </section>
  );
}