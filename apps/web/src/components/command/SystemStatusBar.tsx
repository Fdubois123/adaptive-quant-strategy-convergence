import { commandShellData } from "@/data/command/shell";
import type { SystemStatusItem } from "@/types/command";

function SystemStatusEntry({
  item,
}: {
  item: SystemStatusItem;
}) {
  return (
    <div
      className={`system-status-item system-status-${item.state}`}
      title={item.detail}
    >
      <span
        className="system-status-dot"
        aria-hidden="true"
      />

      <span className="system-status-label">
        {item.label}
      </span>

      <strong className="system-status-state">
        {item.state.toUpperCase()}
      </strong>
    </div>
  );
}

export default function SystemStatusBar() {
  return (
    <footer
      className="system-status-bar"
      aria-label="REGIMEON system status"
    >
      <div className="system-status-left">
        <div className="system-status-brand">
          <span className="system-status-brand-mark">
            R
          </span>

          <div>
            <strong>REGIMEON CORE</strong>
            <span>COMMAND ENVIRONMENT</span>
          </div>
        </div>

        <div className="system-status-divider" />

        <div className="system-status-stream">
          {commandShellData.systemStatus.map((item) => (
            <SystemStatusEntry
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>

      <div className="system-status-right">
        <div className="system-status-session">
          <span>SESSION</span>
          <strong>RESEARCH</strong>
        </div>

        <div className="system-status-session">
          <span>DATA MODE</span>
          <strong className="system-status-demo">
            {commandShellData.workspaceMode.toUpperCase()}
          </strong>
        </div>

        <div className="system-status-build">
          D2 / COMMAND BUILD
        </div>
      </div>
    </footer>
  );
}