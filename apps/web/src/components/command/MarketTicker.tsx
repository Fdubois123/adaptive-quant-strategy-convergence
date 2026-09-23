import { commandShellData } from "@/data/command/shell";
import type { MarketTickerItem } from "@/types/command";

function directionSymbol(
  direction: MarketTickerItem["direction"],
) {
  if (direction === "up") {
    return "▲";
  }

  if (direction === "down") {
    return "▼";
  }

  return "—";
}

function MarketTickerEntry({
  item,
}: {
  item: MarketTickerItem;
}) {
  return (
    <div className="market-ticker-item">
      <div className="market-ticker-identity">
        <span className="market-ticker-symbol">
          {item.symbol}
        </span>

        <span className="market-ticker-source">
          {item.source.toUpperCase()}
        </span>
      </div>

      <div className="market-ticker-quote">
        <span className="market-ticker-value">
          {item.value}
        </span>

        <span
          className={`market-ticker-change market-ticker-${item.direction}`}
        >
          <span
            className="market-ticker-direction"
            aria-hidden="true"
          >
            {directionSymbol(item.direction)}
          </span>

          {item.change}
        </span>
      </div>

      <span className="market-ticker-name">
        {item.name}
      </span>
    </div>
  );
}

export default function MarketTicker() {
  return (
    <section
      className="market-ticker"
      aria-label="Market overview"
    >
      <div className="market-ticker-heading">
        <span
          className="market-ticker-live-dot"
          aria-hidden="true"
        />

        <div>
          <span className="market-ticker-heading-label">
            MARKET PULSE
          </span>

          <span className="market-ticker-heading-source">
            DETERMINISTIC DEMO DATA
          </span>
        </div>
      </div>

      <div className="market-ticker-stream">
        {commandShellData.marketTicker.map((item) => (
          <MarketTickerEntry
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}