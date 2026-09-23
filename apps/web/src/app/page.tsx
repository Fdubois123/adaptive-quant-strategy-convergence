import CommandShell from "@/components/command/CommandShell";
import CorrelationIntelligence from "@/components/command/CorrelationIntelligence";
import GlobalMarketIntelligence from "@/components/command/GlobalMarketIntelligence";
import IntelligenceAlerts from "@/components/command/IntelligenceAlerts";
import MarketRegimeIntelligence from "@/components/command/MarketRegimeIntelligence";
import PortfolioCommandCenter from "@/components/command/PortfolioCommandCenter";
import PortfolioRiskSurface from "@/components/command/PortfolioRiskSurface";
import RiskStressIntelligence from "@/components/command/RiskStressIntelligence";
import StrategyConvergenceIntelligence from "@/components/command/StrategyConvergenceIntelligence";

export default function Home() {
  return (
    <CommandShell>
      <section className="command-workspace-intro">
        <div>
          <p className="command-workspace-kicker">
            COMMAND CENTER / D2
          </p>

          <h1 className="command-workspace-title">
            Adaptive Quant Intelligence
          </h1>

          <p className="command-workspace-description">
            A multi-regime quantitative command environment for
            portfolio intelligence, market regime analysis, risk
            modelling and adaptive strategy convergence.
          </p>
        </div>

        <div className="command-workspace-state">
          <span
            className="command-workspace-state-dot"
            aria-hidden="true"
          />
          ENVIRONMENT READY
        </div>
      </section>

      <section
        className="command-workspace-stage"
        aria-label="REGIMEON command workspace"
      >
        <PortfolioCommandCenter />

        <MarketRegimeIntelligence />

        <RiskStressIntelligence />

        <StrategyConvergenceIntelligence />

        <GlobalMarketIntelligence />

        <CorrelationIntelligence />

        <PortfolioRiskSurface />

        <IntelligenceAlerts />
      </section>
    </CommandShell>
  );
}