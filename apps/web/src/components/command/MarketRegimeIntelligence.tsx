import { regimeIntelligenceData } from "@/data/command/regime";
import type {
  MarketRegimeId,
  RegimeDriver,
  RegimeSignal,
} from "@/types/regime";

function regimeClass(regime: MarketRegimeId) {
  return `regime-${regime}`;
}

function DriverRow({
  driver,
}: {
  driver: RegimeDriver;
}) {
  return (
    <div className="regime-driver-row">
      <div className="regime-driver-heading">
        <div>
          <span>{driver.label}</span>
          <small>{driver.interpretation}</small>
        </div>

        <strong
          className={`regime-direction-${driver.direction}`}
        >
          {driver.value}
        </strong>
      </div>

      <div className="regime-driver-track">
        <span
          className={`regime-direction-${driver.direction}`}
          style={{
            width: `${Math.min(driver.score, 100)}%`,
          }}
        />
      </div>

      <div className="regime-driver-score">
        SIGNAL SCORE
        <strong>{driver.score}</strong>
      </div>
    </div>
  );
}

function SignalCard({
  signal,
}: {
  signal: RegimeSignal;
}) {
  return (
    <article
      className={`regime-signal-card regime-signal-${signal.direction}`}
    >
      <div className="regime-signal-top">
        <span>{signal.label}</span>

        <strong>{signal.value}</strong>
      </div>

      <p>{signal.detail}</p>
    </article>
  );
}

export default function MarketRegimeIntelligence() {
  const {
    state,
    probabilities,
    history,
    drivers,
    transitionMatrix,
    signals,
  } = regimeIntelligenceData;

  const transitionLabels = transitionMatrix.map(
    (row) => row.label,
  );

  return (
    <section
      className="regime-intelligence"
      aria-labelledby="regime-intelligence-title"
    >
      <header className="regime-intelligence-header">
        <div>
          <div className="regime-intelligence-eyebrow">
            <span>02</span>
            MARKET REGIME INTELLIGENCE
          </div>

          <h2 id="regime-intelligence-title">
            Regime Detection &amp; Transition Analysis
          </h2>

          <p>
            Multi-state market classification, persistence
            analysis and transition intelligence for adaptive
            strategy selection.
          </p>
        </div>

        <div className="regime-intelligence-source">
          <span>MODEL OUTPUT</span>
          <strong>
            {state.source.toUpperCase()}
          </strong>
          <small>{state.asOf}</small>
        </div>
      </header>

      <div className="regime-state-grid">
        <article className="regime-current-state">
          <div className="regime-current-top">
            <div>
              <span className="regime-panel-kicker">
                DOMINANT STATE
              </span>

              <span className="regime-current-status">
                <span
                  className="regime-current-status-dot"
                  aria-hidden="true"
                />

                ACTIVE REGIME
              </span>
            </div>

            <span className="regime-demo-tag">
              DEMO
            </span>
          </div>

          <div className="regime-current-main">
            <div
              className={`regime-current-orb ${regimeClass(
                state.currentRegime,
              )}`}
              aria-hidden="true"
            >
              <div className="regime-current-orb-core">
                <span>CONF</span>
                <strong>
                  {state.confidenceDisplay}
                </strong>
              </div>
            </div>

            <div className="regime-current-copy">
              <span>CURRENT REGIME</span>

              <strong>{state.currentLabel}</strong>

              <p>
                Current deterministic signals favour a
                growth-sensitive risk-on environment while
                maintaining a moderate transition watch.
              </p>
            </div>
          </div>

          <div className="regime-state-metrics">
            <div>
              <span>CONFIDENCE</span>
              <strong>
                {state.confidenceDisplay}
              </strong>
            </div>

            <div>
              <span>PERSISTENCE</span>
              <strong>
                {state.persistenceDisplay}
              </strong>
            </div>

            <div>
              <span>TRANSITION RISK</span>
              <strong className="regime-warning">
                {state.transitionRiskDisplay}
              </strong>
            </div>

            <div>
              <span>DURATION</span>
              <strong>{state.duration}</strong>
            </div>
          </div>
        </article>

        <article className="regime-panel regime-probability-panel">
          <div className="regime-panel-header">
            <div>
              <span className="regime-panel-kicker">
                STATE DISTRIBUTION
              </span>

              <h3>Regime Probability</h3>
            </div>

            <span className="regime-panel-tag">
              5 STATES
            </span>
          </div>

          <div className="regime-probability-list">
            {probabilities.map((regime) => (
              <div
                key={regime.id}
                className="regime-probability-row"
              >
                <div className="regime-probability-copy">
                  <span
                    className={`regime-probability-dot ${regimeClass(
                      regime.id,
                    )}`}
                    aria-hidden="true"
                  />

                  <div>
                    <strong>{regime.label}</strong>
                    <span>{regime.description}</span>
                  </div>

                  <b>
                    {regime.displayProbability}
                  </b>
                </div>

                <div className="regime-probability-track">
                  <span
                    className={regimeClass(regime.id)}
                    style={{
                      width: `${regime.probability}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="regime-panel regime-history-panel">
        <div className="regime-panel-header">
          <div>
            <span className="regime-panel-kicker">
              TEMPORAL STATE
            </span>

            <h3>Regime History</h3>
          </div>

          <span className="regime-panel-tag">
            12 OBSERVATIONS
          </span>
        </div>

        <div className="regime-history">
          {history.map((point, index) => (
            <div
              key={`${point.period}-${index}`}
              className="regime-history-point"
            >
              <span className="regime-history-period">
                {point.period}
              </span>

              <div
                className={`regime-history-block ${regimeClass(
                  point.regime,
                )}`}
                title={`${point.label}: ${point.confidence}% confidence`}
              >
                <strong>{point.confidence}</strong>
              </div>

              <span className="regime-history-label">
                {point.label}
              </span>
            </div>
          ))}
        </div>

        <div className="regime-history-legend">
          {probabilities.map((regime) => (
            <span key={regime.id}>
              <i
                className={regimeClass(regime.id)}
                aria-hidden="true"
              />
              {regime.label}
            </span>
          ))}
        </div>
      </article>

      <div className="regime-analysis-grid">
        <article className="regime-panel">
          <div className="regime-panel-header">
            <div>
              <span className="regime-panel-kicker">
                FACTOR INTELLIGENCE
              </span>

              <h3>Regime Drivers</h3>
            </div>

            <span className="regime-panel-tag">
              6 SIGNALS
            </span>
          </div>

          <div className="regime-driver-list">
            {drivers.map((driver) => (
              <DriverRow
                key={driver.id}
                driver={driver}
              />
            ))}
          </div>
        </article>

        <article className="regime-panel">
          <div className="regime-panel-header">
            <div>
              <span className="regime-panel-kicker">
                MARKOV STATE MODEL
              </span>

              <h3>Transition Matrix</h3>
            </div>

            <span className="regime-panel-tag">
              DEMO
            </span>
          </div>

          <div className="regime-matrix-wrapper">
            <table className="regime-transition-matrix">
              <thead>
                <tr>
                  <th>FROM / TO</th>

                  {transitionLabels.map((label) => (
                    <th key={label}>
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {transitionMatrix.map((row) => (
                  <tr key={row.regime}>
                    <th>{row.label}</th>

                    {row.transitions.map(
                      (transition) => (
                        <td
                          key={`${transition.from}-${transition.to}`}
                        >
                          <span
                            className={
                              transition.from ===
                              transition.to
                                ? "regime-matrix-diagonal"
                                : ""
                            }
                            style={{
                              opacity:
                                0.35 +
                                transition.probability /
                                  120,
                            }}
                          >
                            {transition.probability}%
                          </span>
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="regime-matrix-note">
            <span>INTERPRETATION</span>

            <p>
              Diagonal values represent regime persistence.
              Off-diagonal values represent deterministic
              transition probabilities used for the D2
              interface demonstration.
            </p>
          </div>
        </article>
      </div>

      <article className="regime-panel">
        <div className="regime-panel-header">
          <div>
            <span className="regime-panel-kicker">
              REGIME WATCH
            </span>

            <h3>Market State Signals</h3>
          </div>

          <span className="regime-panel-tag">
            MONITORING
          </span>
        </div>

        <div className="regime-signal-grid">
          {signals.map((signal) => (
            <SignalCard
              key={signal.id}
              signal={signal}
            />
          ))}
        </div>
      </article>
    </section>
  );
}