import { portfolioCommandData } from "@/data/command/portfolio";
import type {
  AllocationItem,
  PerformancePoint,
  PortfolioMetric,
  PortfolioPosition,
} from "@/types/portfolio";

function MetricCard({
  metric,
}: {
  metric: PortfolioMetric;
}) {
  return (
    <article className="portfolio-metric-card">
      <div className="portfolio-metric-heading">
        <span>{metric.label}</span>

        <span className="portfolio-metric-source">
          DEMO
        </span>
      </div>

      <strong className="portfolio-metric-value">
        {metric.value}
      </strong>

      <div className="portfolio-metric-footer">
        {metric.change && (
          <span
            className={`portfolio-metric-change portfolio-metric-${metric.direction ?? "neutral"}`}
          >
            {metric.change}
          </span>
        )}

        {metric.helper && (
          <span className="portfolio-metric-helper">
            {metric.helper}
          </span>
        )}
      </div>
    </article>
  );
}

function PerformanceChart({
  data,
}: {
  data: PerformancePoint[];
}) {
  const width = 720;
  const height = 210;
  const paddingX = 16;
  const paddingY = 18;

  const values = data.flatMap((point) => [
    point.portfolio,
    point.benchmark,
  ]);

  const minValue = Math.min(...values) - 2;
  const maxValue = Math.max(...values) + 2;
  const range = maxValue - minValue || 1;

  const createPoints = (
    key: "portfolio" | "benchmark",
  ) =>
    data
      .map((point, index) => {
        const x =
          paddingX +
          (index / Math.max(data.length - 1, 1)) *
            (width - paddingX * 2);

        const normalized =
          (point[key] - minValue) / range;

        const y =
          height -
          paddingY -
          normalized * (height - paddingY * 2);

        return `${x},${y}`;
      })
      .join(" ");

  return (
    <div className="portfolio-performance-chart">
      <div
        className="portfolio-chart-grid"
        aria-hidden="true"
      />

      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Demo portfolio performance compared with benchmark"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="portfolioArea"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="currentColor"
              stopOpacity="0.16"
            />
            <stop
              offset="100%"
              stopColor="currentColor"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <polyline
          className="portfolio-chart-benchmark"
          points={createPoints("benchmark")}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />

        <polyline
          className="portfolio-chart-primary"
          points={createPoints("portfolio")}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="portfolio-chart-axis">
        {data.map((point) => (
          <span key={point.date}>
            {point.date}
          </span>
        ))}
      </div>
    </div>
  );
}

function AllocationRow({
  item,
  index,
}: {
  item: AllocationItem;
  index: number;
}) {
  return (
    <div className="portfolio-allocation-row">
      <div className="portfolio-allocation-copy">
        <span className="portfolio-allocation-index">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span>{item.label}</span>

        <strong>{item.displayValue}</strong>
      </div>

      <div
        className="portfolio-allocation-track"
        aria-label={`${item.label} ${item.displayValue}`}
      >
        <span
          style={{
            width: `${Math.min(item.value, 100)}%`,
          }}
        />
      </div>
    </div>
  );
}

function PositionRow({
  position,
}: {
  position: PortfolioPosition;
}) {
  const positive = position.pnlPercent >= 0;

  return (
    <tr>
      <td>
        <div className="portfolio-position-asset">
          <strong>{position.symbol}</strong>
          <span>{position.name}</span>
        </div>
      </td>

      <td>{position.assetClass}</td>

      <td>
        <span
          className={`portfolio-position-direction portfolio-position-${position.direction}`}
        >
          {position.direction.toUpperCase()}
        </span>
      </td>

      <td>{position.weight.toFixed(1)}%</td>

      <td>{position.marketValue}</td>

      <td
        className={
          positive
            ? "portfolio-position-positive"
            : "portfolio-position-negative"
        }
      >
        <strong>{position.pnl}</strong>
        <span>
          {positive ? "+" : ""}
          {position.pnlPercent.toFixed(2)}%
        </span>
      </td>
    </tr>
  );
}

export default function PortfolioCommandCenter() {
  const {
    state,
    metrics,
    performance,
    allocation,
    exposures,
    positions,
  } = portfolioCommandData;

  return (
    <section
      className="portfolio-command-center"
      aria-labelledby="portfolio-command-title"
    >
      <div className="portfolio-command-header">
        <div>
          <div className="portfolio-command-eyebrow">
            <span>01</span>
            PORTFOLIO COMMAND
          </div>

          <h2 id="portfolio-command-title">
            Portfolio Intelligence
          </h2>

          <p>
            Capital state, performance, allocation and
            exposure intelligence for the adaptive
            multi-strategy portfolio.
          </p>
        </div>

        <div className="portfolio-command-state">
          <div className="portfolio-command-state-top">
            <span
              className="portfolio-command-state-dot"
              aria-hidden="true"
            />

            {state.capitalStatus.toUpperCase()}
          </div>

          <strong>{state.name}</strong>

          <span>
            {state.currency} / {state.source.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="portfolio-demo-notice">
        <span>DEMO DATASET</span>

        <p>
          Deterministic research values for interface and
          analytics demonstration. No live brokerage or market
          feed is connected.
        </p>

        <strong>{state.asOf}</strong>
      </div>

      <div className="portfolio-metrics-grid">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            metric={metric}
          />
        ))}
      </div>

      <div className="portfolio-intelligence-grid">
        <article className="portfolio-panel portfolio-performance-panel">
          <div className="portfolio-panel-header">
            <div>
              <span className="portfolio-panel-kicker">
                PERFORMANCE
              </span>

              <h3>Portfolio vs Benchmark</h3>
            </div>

            <div className="portfolio-chart-legend">
              <span className="portfolio-chart-legend-primary">
                Portfolio
              </span>

              <span className="portfolio-chart-legend-benchmark">
                Benchmark
              </span>
            </div>
          </div>

          <PerformanceChart data={performance} />

          <div className="portfolio-performance-summary">
            <div>
              <span>START INDEX</span>
              <strong>100.00</strong>
            </div>

            <div>
              <span>PORTFOLIO</span>
              <strong className="portfolio-positive">
                118.72
              </strong>
            </div>

            <div>
              <span>BENCHMARK</span>
              <strong>112.41</strong>
            </div>

            <div>
              <span>EXCESS</span>
              <strong className="portfolio-positive">
                +6.31%
              </strong>
            </div>
          </div>
        </article>

        <article className="portfolio-panel portfolio-allocation-panel">
          <div className="portfolio-panel-header">
            <div>
              <span className="portfolio-panel-kicker">
                CAPITAL STRUCTURE
              </span>

              <h3>Asset Allocation</h3>
            </div>

            <span className="portfolio-panel-tag">
              100%
            </span>
          </div>

          <div className="portfolio-allocation-list">
            {allocation.map((item, index) => (
              <AllocationRow
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </article>
      </div>

      <div className="portfolio-secondary-grid">
        <article className="portfolio-panel">
          <div className="portfolio-panel-header">
            <div>
              <span className="portfolio-panel-kicker">
                EXPOSURE
              </span>

              <h3>Capital Exposure</h3>
            </div>

            <span className="portfolio-panel-tag">
              DEMO
            </span>
          </div>

          <div className="portfolio-exposure-list">
            {exposures.map((exposure) => (
              <div
                key={exposure.id}
                className="portfolio-exposure-row"
              >
                <div>
                  <span>{exposure.label}</span>
                  <strong>
                    {exposure.displayValue}
                  </strong>
                </div>

                <div className="portfolio-exposure-track">
                  <span
                    style={{
                      width: `${Math.min(
                        exposure.value / 1.5,
                        100,
                      )}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="portfolio-panel portfolio-capital-state">
          <div className="portfolio-panel-header">
            <div>
              <span className="portfolio-panel-kicker">
                CAPITAL STATE
              </span>

              <h3>Deployment Profile</h3>
            </div>
          </div>

          <div className="portfolio-capital-gauge">
            <div className="portfolio-capital-gauge-core">
              <span>NET</span>
              <strong>76%</strong>
              <small>EXPOSURE</small>
            </div>
          </div>

          <div className="portfolio-capital-details">
            <div>
              <span>GROSS</span>
              <strong>134%</strong>
            </div>

            <div>
              <span>CASH</span>
              <strong>7%</strong>
            </div>

            <div>
              <span>STATE</span>
              <strong>BALANCED</strong>
            </div>
          </div>
        </article>
      </div>

      <article className="portfolio-panel portfolio-positions-panel">
        <div className="portfolio-panel-header">
          <div>
            <span className="portfolio-panel-kicker">
              POSITION INTELLIGENCE
            </span>

            <h3>Leading Portfolio Positions</h3>
          </div>

          <div className="portfolio-position-count">
            <strong>{positions.length}</strong>
            <span>TRACKED</span>
          </div>
        </div>

        <div className="portfolio-table-wrapper">
          <table className="portfolio-positions-table">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Class</th>
                <th>Side</th>
                <th>Weight</th>
                <th>Market Value</th>
                <th>P&amp;L</th>
              </tr>
            </thead>

            <tbody>
              {positions.map((position) => (
                <PositionRow
                  key={position.id}
                  position={position}
                />
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}