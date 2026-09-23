import GlobalRiskMap from "@/components/command/GlobalRiskMap";
import { globalMarketIntelligenceData } from "@/data/command/global-market";
import type {
  GlobalMarketDirection,
  GlobalRegionId,
} from "@/types/global-market";

function directionClass(direction: GlobalMarketDirection) {
  return `global-direction-${direction}`;
}

function riskClass(level: string) {
  return `global-risk-${level}`;
}

function regionLabel(region: GlobalRegionId) {
  switch (region) {
    case "north-america":
      return "N. AMERICA";
    case "europe":
      return "EUROPE";
    case "asia-pacific":
      return "ASIA PAC";
    case "emerging-markets":
      return "EMERGING";
  }
}

export default function GlobalMarketIntelligence() {
  const {
    state,
    metrics,
    indices,
    regions,
    crossAssetMarkets,
    stressDrivers,
    riskEvents,
    heatMap,
    breadthHistory,
    macroIndicators,
    capitalFlows,
  } = globalMarketIntelligenceData;

  const assetClasses = [
    "equity",
    "rates",
    "fx",
    "commodity",
    "credit",
    "volatility",
  ] as const;

  const regionIds: GlobalRegionId[] = [
    "north-america",
    "europe",
    "asia-pacific",
    "emerging-markets",
  ];

  return (
    <section
      className="global-intelligence"
      aria-labelledby="global-intelligence-title"
    >
      <header className="global-intelligence-header">
        <div>
          <div className="global-intelligence-eyebrow">
            <span>05</span>
            GLOBAL MARKET INTELLIGENCE
          </div>

          <h2 id="global-intelligence-title">
            Cross-Asset Global Intelligence
          </h2>

          <p>
            Regional market conditions, cross-asset momentum, macro
            pressure, capital rotation and global risk-event
            surveillance inside the REGIMEON research environment.
          </p>
        </div>

        <div className="global-intelligence-source">
          <span>GLOBAL INTELLIGENCE</span>
          <strong>{state.source.toUpperCase()}</strong>
          <small>{state.asOf}</small>
        </div>
      </header>

      <div className="global-overview-grid">
        <article className="global-state-panel">
          <div className="global-state-top">
            <div>
              <span className="global-panel-kicker">
                GLOBAL STATE
              </span>

              <strong className={riskClass(state.riskLevel)}>
                {state.riskLevel.toUpperCase()} RISK
              </strong>
            </div>

            <span className="global-demo-tag">DEMO</span>
          </div>

          <div className="global-state-main">
            <div className="global-risk-gauge">
              <div className="global-risk-ring">
                <span>GLOBAL RISK</span>
                <strong>{state.riskScore}</strong>
                <small>/ 100</small>
              </div>
            </div>

            <div className="global-state-copy">
              <span>DOMINANT GLOBAL THEME</span>

              <strong>{state.dominantTheme}</strong>

              <p>
                Global participation remains constructive while
                selected rates, commodity and emerging-market
                pressures remain under active observation.
              </p>

              <div className="global-state-meta">
                <div>
                  <span>BREADTH</span>
                  <strong>{state.breadthDisplay}</strong>
                </div>

                <div>
                  <span>STRESS</span>
                  <strong>{state.stressIndexDisplay}</strong>
                </div>

                <div>
                  <span>MOMENTUM</span>
                  <strong>
                    {state.crossAssetMomentumDisplay}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="global-metrics-grid">
          {metrics.map((metric) => (
            <article
              key={metric.id}
              className="global-metric-card"
            >
              <div className="global-metric-heading">
                <span>{metric.label}</span>

                <i
                  className={directionClass(metric.direction)}
                  aria-hidden="true"
                />
              </div>

              <strong>{metric.value}</strong>

              <div className="global-metric-change">
                <span className={directionClass(metric.direction)}>
                  {metric.change}
                </span>
              </div>

              <p>{metric.helper}</p>
            </article>
          ))}
        </div>
      </div>

      <article className="global-panel">
        <div className="global-panel-header">
          <div>
            <span className="global-panel-kicker">
              REGIONAL INTELLIGENCE
            </span>

            <h3>Regional Risk Overview</h3>
          </div>

          <span className="global-panel-tag">
            4 REGIONS
          </span>
        </div>

        <div className="global-region-grid">
          {regions.map((region) => (
            <article
              key={region.id}
              className={`global-region-card ${riskClass(
                region.riskLevel,
              )}`}
            >
              <div className="global-region-top">
                <div>
                  <span>{region.shortLabel}</span>
                  <strong>{region.label}</strong>
                </div>

                <span className={directionClass(region.direction)}>
                  {region.signal}
                </span>
              </div>

              <div className="global-region-risk">
                <div>
                  <span>RISK SCORE</span>
                  <strong>{region.riskDisplay}</strong>
                </div>

                <div className="global-region-risk-track">
                  <span
                    style={{
                      width: `${region.riskScore}%`,
                    }}
                  />
                </div>
              </div>

              <div className="global-region-stats">
                <div>
                  <span>MARKET</span>

                  <strong
                    className={directionClass(
                      region.direction,
                    )}
                  >
                    {region.marketChangeDisplay}
                  </strong>
                </div>

                <div>
                  <span>BREADTH</span>
                  <strong>{region.breadthDisplay}</strong>
                </div>

                <div>
                  <span>VOLATILITY</span>
                  <strong>{region.volatilityDisplay}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </article>

      <GlobalRiskMap />

      <div className="global-analysis-grid">
        <article className="global-panel">
          <div className="global-panel-header">
            <div>
              <span className="global-panel-kicker">
                EQUITY MONITOR
              </span>

              <h3>Major Market Indices</h3>
            </div>

            <span className="global-panel-tag">
              GLOBAL EQUITY
            </span>
          </div>

          <div className="global-index-table-wrapper">
            <table className="global-index-table">
              <thead>
                <tr>
                  <th>INDEX</th>
                  <th>REGION</th>
                  <th>LEVEL</th>
                  <th>CHANGE</th>
                  <th>MOMENTUM</th>
                  <th>VOL</th>
                </tr>
              </thead>

              <tbody>
                {indices.map((index) => (
                  <tr key={index.id}>
                    <td>
                      <div className="global-index-name">
                        <strong>{index.symbol}</strong>
                        <span>{index.name}</span>
                      </div>
                    </td>

                    <td>{regionLabel(index.region)}</td>

                    <td>{index.value}</td>

                    <td>
                      <strong
                        className={directionClass(
                          index.direction,
                        )}
                      >
                        {index.changeDisplay}
                      </strong>
                    </td>

                    <td>
                      <div className="global-table-score">
                        <span>
                          <i
                            style={{
                              width: `${index.momentum}%`,
                            }}
                          />
                        </span>

                        <strong>{index.momentum}</strong>
                      </div>
                    </td>

                    <td>{index.volatility.toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="global-panel">
          <div className="global-panel-header">
            <div>
              <span className="global-panel-kicker">
                CROSS-ASSET
              </span>

              <h3>Market Pulse</h3>
            </div>

            <span className="global-panel-tag">
              MULTI-ASSET
            </span>
          </div>

          <div className="global-cross-asset-list">
            {crossAssetMarkets.map((market) => (
              <article
                key={market.id}
                className="global-cross-asset-card"
              >
                <div>
                  <span>{market.symbol}</span>
                  <strong>{market.label}</strong>
                </div>

                <div className="global-cross-asset-value">
                  <strong>{market.value}</strong>

                  <span
                    className={directionClass(
                      market.direction,
                    )}
                  >
                    {market.changeDisplay}
                  </span>
                </div>

                <div className="global-cross-score">
                  <span>
                    <i
                      style={{
                        width: `${market.score}%`,
                      }}
                    />
                  </span>

                  <strong>{market.score}</strong>
                </div>
              </article>
            ))}
          </div>
        </article>
      </div>

      <article className="global-panel">
        <div className="global-panel-header">
          <div>
            <span className="global-panel-kicker">
              REGIONAL × ASSET CLASS
            </span>

            <h3>Global Market Heat Matrix</h3>
          </div>

          <span className="global-panel-tag">
            RELATIVE CONDITION SCORE
          </span>
        </div>

        <div className="global-heat-wrapper">
          <table className="global-heat-table">
            <thead>
              <tr>
                <th>REGION</th>

                {assetClasses.map((asset) => (
                  <th key={asset}>
                    {asset.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {regionIds.map((region) => (
                <tr key={region}>
                  <th>{regionLabel(region)}</th>

                  {assetClasses.map((asset) => {
                    const cell = heatMap.find(
                      (item) =>
                        item.region === region &&
                        item.assetClass === asset,
                    );

                    if (!cell) {
                      return <td key={asset}>—</td>;
                    }

                    return (
                      <td key={asset}>
                        <span
                          className={`global-heat-cell ${directionClass(
                            cell.direction,
                          )}`}
                          style={{
                            opacity: 0.5 + cell.score / 200,
                          }}
                        >
                          {cell.displayScore}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <div className="global-analysis-grid">
        <article className="global-panel">
          <div className="global-panel-header">
            <div>
              <span className="global-panel-kicker">
                PARTICIPATION
              </span>

              <h3>Global Breadth Evolution</h3>
            </div>

            <span className="global-panel-tag">
              T-7 → NOW
            </span>
          </div>

          <div className="global-breadth-chart">
            {breadthHistory.map((point) => {
              const series = [
                {
                  id: "north-america",
                  label: "North America",
                  value: point.northAmerica,
                  className: "global-breadth-na",
                },
                {
                  id: "europe",
                  label: "Europe",
                  value: point.europe,
                  className: "global-breadth-europe",
                },
                {
                  id: "asia-pacific",
                  label: "Asia Pacific",
                  value: point.asiaPacific,
                  className: "global-breadth-asia",
                },
                {
                  id: "emerging-markets",
                  label: "Emerging Markets",
                  value: point.emergingMarkets,
                  className: "global-breadth-em",
                },
              ];

              return (
                <div
                  key={point.period}
                  className="global-breadth-period"
                >
                  <div
                    className="global-breadth-bars"
                    aria-label={`${point.period} global breadth`}
                  >
                    {series.map((item) => {
                      const boundedValue = Math.max(
                        0,
                        Math.min(100, item.value),
                      );

                      /*
                       * Pixel heights are intentional here.
                       * Percentage heights depended on an inherited
                       * containing-block height and could collapse to
                       * zero. 108px is the usable plotting range.
                       */
                      const barHeight = Math.max(
                        4,
                        Math.round((boundedValue / 100) * 108),
                      );

                      return (
                        <span
                          key={item.id}
                          className={`global-breadth-bar ${item.className}`}
                          style={{
                            height: `${barHeight}px`,
                          }}
                          title={`${item.label} ${boundedValue}%`}
                          aria-label={`${item.label}: ${boundedValue}%`}
                        >
                          <i>{boundedValue}</i>
                        </span>
                      );
                    })}
                  </div>

                  <strong>{point.period}</strong>
                </div>
              );
            })}
          </div>

          <div className="global-breadth-legend">
            <span>
              <i className="global-breadth-na" />
              N. AMERICA
            </span>

            <span>
              <i className="global-breadth-europe" />
              EUROPE
            </span>

            <span>
              <i className="global-breadth-asia" />
              ASIA PAC
            </span>

            <span>
              <i className="global-breadth-em" />
              EMERGING
            </span>
          </div>
        </article>

        <article className="global-panel">
          <div className="global-panel-header">
            <div>
              <span className="global-panel-kicker">
                MACRO ENVIRONMENT
              </span>

              <h3>Macro Pulse</h3>
            </div>

            <span className="global-panel-tag">
              SYNTHETIC
            </span>
          </div>

          <div className="global-macro-list">
            {macroIndicators.map((indicator) => (
              <article
                key={indicator.id}
                className="global-macro-card"
              >
                <div className="global-macro-heading">
                  <span>{indicator.label}</span>

                  <strong
                    className={directionClass(
                      indicator.direction,
                    )}
                  >
                    {indicator.value}
                  </strong>
                </div>

                <div className="global-macro-meta">
                  <span>
                    PREV {indicator.previous}
                  </span>

                  <strong>
                    {indicator.trend === "rising"
                      ? "↑ RISING"
                      : indicator.trend === "falling"
                        ? "↓ FALLING"
                        : "→ STABLE"}
                  </strong>
                </div>

                <p>{indicator.interpretation}</p>
              </article>
            ))}
          </div>
        </article>
      </div>

      <div className="global-analysis-grid global-stress-grid">
        <article className="global-panel">
          <div className="global-panel-header">
            <div>
              <span className="global-panel-kicker">
                SYSTEMIC PRESSURE
              </span>

              <h3>Global Stress Drivers</h3>
            </div>

            <span className="global-panel-tag">
              6 FACTORS
            </span>
          </div>

          <div className="global-stress-list">
            {stressDrivers.map((driver) => (
              <article
                key={driver.id}
                className="global-stress-card"
              >
                <div className="global-stress-heading">
                  <div>
                    <span>{driver.label}</span>

                    <strong
                      className={directionClass(
                        driver.direction,
                      )}
                    >
                      {driver.value}
                    </strong>
                  </div>

                  <strong>{driver.scoreDisplay}</strong>
                </div>

                <div className="global-stress-track">
                  <span
                    className={directionClass(
                      driver.direction,
                    )}
                    style={{
                      width: `${driver.score}%`,
                    }}
                  />
                </div>

                <p>{driver.detail}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="global-panel">
          <div className="global-panel-header">
            <div>
              <span className="global-panel-kicker">
                CAPITAL ROTATION
              </span>

              <h3>Cross-Market Flows</h3>
            </div>

            <span className="global-panel-tag">
              DEMO FLOW MODEL
            </span>
          </div>

          <div className="global-flow-list">
            {capitalFlows.map((flow) => (
              <article
                key={flow.id}
                className="global-flow-card"
              >
                <div className="global-flow-route">
                  <span>{flow.from}</span>
                  <b>→</b>
                  <strong>{flow.to}</strong>
                </div>

                <div className="global-flow-value">
                  <strong
                    className={directionClass(
                      flow.direction,
                    )}
                  >
                    {flow.amountDisplay}
                  </strong>

                  <span>{flow.intensity}/100</span>
                </div>

                <div className="global-flow-track">
                  <span
                    style={{
                      width: `${flow.intensity}%`,
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </article>
      </div>

      <article className="global-panel">
        <div className="global-panel-header">
          <div>
            <span className="global-panel-kicker">
              EVENT INTELLIGENCE
            </span>

            <h3>Global Risk Event Monitor</h3>
          </div>

          <span className="global-panel-tag">
            {riskEvents.length} EVENTS
          </span>
        </div>

        <div className="global-event-grid">
          {riskEvents.map((event) => (
            <article
              key={event.id}
              className={`global-event-card ${riskClass(
                event.severity,
              )}`}
            >
              <div className="global-event-top">
                <div>
                  <span>{event.category}</span>
                  <strong>{event.title}</strong>
                </div>

                <span>
                  {event.status.toUpperCase()}
                </span>
              </div>

              <div className="global-event-region">
                {regionLabel(event.region)}
              </div>

              <div className="global-event-metrics">
                <div>
                  <span>PROBABILITY</span>
                  <strong>
                    {event.probabilityDisplay}
                  </strong>
                </div>

                <div>
                  <span>EST. IMPACT</span>

                  <strong className="global-direction-negative">
                    {event.impactDisplay}
                  </strong>
                </div>

                <div>
                  <span>SEVERITY</span>
                  <strong>
                    {event.severity.toUpperCase()}
                  </strong>
                </div>
              </div>

              <div className="global-event-probability">
                <span
                  style={{
                    width: `${event.probability}%`,
                  }}
                />
              </div>

              <p>{event.detail}</p>
            </article>
          ))}
        </div>
      </article>

      <footer className="global-intelligence-footer">
        <div>
          <span>GLOBAL RISK</span>
          <strong>{state.riskScoreDisplay}</strong>
        </div>

        <div>
          <span>BREADTH</span>
          <strong>{state.breadthDisplay}</strong>
        </div>

        <div>
          <span>STRESS</span>
          <strong>{state.stressIndexDisplay}</strong>
        </div>

        <div>
          <span>CROSS-ASSET</span>
          <strong>
            {state.crossAssetMomentumDisplay}
          </strong>
        </div>

        <p>
          Deterministic demonstration of global cross-asset,
          regional, macro and risk-event intelligence.
        </p>
      </footer>
    </section>
  );
}