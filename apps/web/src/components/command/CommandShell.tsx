import type { ReactNode } from "react";
import CommandSidebar from "@/components/command/CommandSidebar";
import CommandTopbar from "@/components/command/CommandTopbar";
import SystemStatusBar from "@/components/command/SystemStatusBar";

type CommandShellProps = {
  children: ReactNode;
};

export default function CommandShell({
  children,
}: CommandShellProps) {
  return (
    <main className="regimeon-environment">
      <div className="command-shell">
        <aside
          className="command-shell-sidebar"
          aria-label="REGIMEON command navigation"
        >
          <div className="command-shell-brand">
            <div
              className="command-shell-brand-mark"
              aria-hidden="true"
            />

            <div>
              <p className="command-shell-brand-name">
                REGIMEON
              </p>

              <p className="command-shell-brand-subtitle">
                Adaptive Quant Intelligence
              </p>
            </div>
          </div>

          <CommandSidebar />
        </aside>

        <section className="command-shell-environment">
          <CommandTopbar />

          <div className="command-shell-workspace">
            {children}
          </div>

          <SystemStatusBar />
        </section>
      </div>
    </main>
  );
}