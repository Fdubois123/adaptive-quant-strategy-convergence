import { intelligenceCommandData } from "@/data/command/intelligence";

import type {
  IntelligenceDirection,
  IntelligenceSeverity,
} from "@/types/intelligence";

function directionClass(
  direction: IntelligenceDirection,
) {
  return `intelligence-direction-${direction}`;
}

function severityClass(
  severity: IntelligenceSeverity,
) {
  return `intelligence-severity-${severity}`;
}

function clampScore(
  value: number,
) {
  return Math.min(
    100,
    Math.max(0, value),
  );
}

export default function IntelligenceAlerts() {
  const data =
    intelligenceCommandData;

  const criticalEvent =
    data.events.find(
      (event) =>
        event.severity ===
        "critical",
    );

  return (
    <section
      className="intelligence-command"
      aria-labelledby="intelligence-command-title"
    >
      <header className="intelligence-header">
        <div>
          <p className="intelligence-kicker">
            INTELLIGENCE ENGINE /
            D2.9
          </p>

          <h2
            id="intelligence-command-title"
            className="intelligence-title"
          >
            Intelligence &amp;
            Alerts
          </h2>

          <p className="intelligence-description">
            Cross-module event
            synthesis, alert
            prioritization, model
            intelligence and analyst
            context.
          </p>
        </div>

        <div className="intelligence-provenance">
          <span>
            DATA MODE
          </span>

          <strong>
            {data.state.source.toUpperCase()}
          </strong>

          <small>
            {data.state.asOf}
          </small>
        </div>
      </header>

      <div className="intelligence-state-grid">
        <article className="intelligence-state-card">
          <div className="intelligence-state-copy">
            <span>
              COMMAND STATE
            </span>

            <strong>
              {
                data.state
                  .operatingState
              }
            </strong>

            <p>
              {
                data.state
                  .dominantTheme
              }
            </p>
          </div>

          <div className="intelligence-score-ring">
            <div
              className="intelligence-score-ring-inner"
              style={{
                background: `conic-gradient(
                  #35d7f3
                  ${
                    clampScore(
                      data.state
                        .intelligenceScore,
                    ) * 3.6
                  }deg,
                  rgba(255,255,255,0.055) 0deg
                )`,
              }}
            >
              <div>
                <strong>
                  {
                    data.state
                      .intelligenceScore
                  }
                </strong>

                <span>
                  / 100
                </span>
              </div>
            </div>

            <small>
              INTELLIGENCE
            </small>
          </div>

          <div className="intelligence-state-counts">
            <div>
              <span>
                ACTIVE
              </span>

              <strong>
                {
                  data.state
                    .activeAlerts
                }
              </strong>
            </div>

            <div>
              <span>
                CRITICAL
              </span>

              <strong className="intelligence-critical-value">
                {
                  data.state
                    .criticalAlerts
                }
              </strong>
            </div>

            <div>
              <span>
                MONITORING
              </span>

              <strong>
                {
                  data.state
                    .monitoringEvents
                }
              </strong>
            </div>

            <div>
              <span>
                FRESHNESS
              </span>

              <strong>
                {
                  data.state
                    .freshnessScore
                }
                %
              </strong>
            </div>
          </div>
        </article>

        <article className="intelligence-critical-card">
          <div className="intelligence-critical-top">
            <span>
              HIGHEST PRIORITY
            </span>

            <strong>
              CRITICAL
            </strong>
          </div>

          {criticalEvent ? (
            <>
              <h3>
                {
                  criticalEvent.title
                }
              </h3>

              <p>
                {
                  criticalEvent.summary
                }
              </p>

              <div className="intelligence-critical-metric">
                <span>
                  {
                    criticalEvent.metric
                  }
                </span>

                <strong>
                  {
                    criticalEvent
                      .metricValue
                  }
                </strong>
              </div>

              <div className="intelligence-critical-action">
                <span>
                  ACTION
                </span>

                <p>
                  {
                    criticalEvent
                      .recommendedAction
                  }
                </p>
              </div>
            </>
          ) : (
            <p>
              No critical
              intelligence event is
              represented in the
              current snapshot.
            </p>
          )}
        </article>
      </div>

      <div className="intelligence-metrics">
        {data.metrics.map(
          (metric) => (
            <article
              key={metric.id}
              className={`intelligence-metric-card ${directionClass(
                metric.direction,
              )}`}
            >
              <div className="intelligence-metric-top">
                <span>
                  {metric.label}
                </span>

                {metric.delta && (
                  <small>
                    {metric.delta}
                  </small>
                )}
              </div>

              <strong>
                {metric.value}
              </strong>

              <p>
                {metric.detail}
              </p>
            </article>
          ),
        )}
      </div>

      <div className="intelligence-primary-grid">
        <article className="intelligence-panel intelligence-event-panel">
          <div className="intelligence-panel-heading">
            <div>
              <span>
                EVENT STREAM
              </span>

              <h3>
                Live Intelligence
                Feed
              </h3>
            </div>

            <small>
              {
                data.events.length
              }{" "}
              EVENTS
            </small>
          </div>

          <div className="intelligence-event-stream">
            {data.events.map(
              (event) => (
                <article
                  key={event.id}
                  className={`intelligence-event ${severityClass(
                    event.severity,
                  )}`}
                >
                  <div className="intelligence-event-time">
                    <strong>
                      {
                        event.timestamp
                      }
                    </strong>

                    <span>
                      {
                        event.freshness
                      }
                    </span>
                  </div>

                  <div className="intelligence-event-body">
                    <div className="intelligence-event-meta">
                      <span>
                        {
                          event.category
                        }
                      </span>

                      <span>
                        {
                          event.type
                        }
                      </span>

                      <span>
                        {
                          event.status
                        }
                      </span>
                    </div>

                    <h4>
                      {
                        event.title
                      }
                    </h4>

                    <p>
                      {
                        event.summary
                      }
                    </p>

                    <div className="intelligence-event-footer">
                      <span>
                        {
                          event.sourceLabel
                        }
                      </span>

                      {event.confidence !==
                        undefined && (
                        <strong>
                          {
                            event.confidence
                          }
                          % CONF
                        </strong>
                      )}
                    </div>
                  </div>

                  <div className="intelligence-event-value">
                    <span>
                      {
                        event.metric ??
                        "STATE"
                      }
                    </span>

                    <strong>
                      {
                        event.metricValue ??
                        event.priority
                          .toUpperCase()
                      }
                    </strong>
                  </div>
                </article>
              ),
            )}
          </div>
        </article>

        <aside className="intelligence-side-stack">
          <article className="intelligence-panel">
            <div className="intelligence-panel-heading">
              <div>
                <span>
                  SIGNAL FUSION
                </span>

                <h3>
                  Intelligence Pulse
                </h3>
              </div>
            </div>

            <div className="intelligence-signal-list">
              {data.signals.map(
                (signal) => (
                  <div
                    key={signal.id}
                    className={`intelligence-signal ${directionClass(
                      signal.direction,
                    )}`}
                  >
                    <div className="intelligence-signal-top">
                      <span>
                        {
                          signal.label
                        }
                      </span>

                      <strong>
                        {
                          signal.value
                        }
                      </strong>
                    </div>

                    <div className="intelligence-progress">
                      <i
                        style={{
                          width: `${clampScore(
                            signal.score,
                          )}%`,
                        }}
                      />
                    </div>

                    <p>
                      {
                        signal.description
                      }
                    </p>
                  </div>
                ),
              )}
            </div>
          </article>

          <article className="intelligence-panel">
            <div className="intelligence-panel-heading">
              <div>
                <span>
                  ANALYST LAYER
                </span>

                <h3>
                  Command Notes
                </h3>
              </div>
            </div>

            <div className="intelligence-note-list">
              {data.analystNotes.map(
                (note) => (
                  <article
                    key={note.id}
                    className={`intelligence-note intelligence-priority-${note.priority}`}
                  >
                    <div>
                      <span>
                        {
                          note.timestamp
                        }
                      </span>

                      <strong>
                        {
                          note.priority
                        }
                      </strong>
                    </div>

                    <h4>
                      {
                        note.title
                      }
                    </h4>

                    <p>
                      {
                        note.context
                      }
                    </p>

                    <small>
                      {
                        note.implication
                      }
                    </small>
                  </article>
                ),
              )}
            </div>
          </article>
        </aside>
      </div>

      <div className="intelligence-secondary-grid">
        <article className="intelligence-panel">
          <div className="intelligence-panel-heading">
            <div>
              <span>
                ALERT QUEUE
              </span>

              <h3>
                Active Risk Alerts
              </h3>
            </div>

            <small>
              {
                data.alerts.length
              }{" "}
              ALERTS
            </small>
          </div>

          <div className="intelligence-alert-list">
            {data.alerts.map(
              (alert) => (
                <article
                  key={alert.id}
                  className={`intelligence-alert ${severityClass(
                    alert.severity,
                  )}`}
                >
                  <div className="intelligence-alert-head">
                    <div>
                      <span>
                        {
                          alert.timestamp
                        }{" "}
                        /{" "}
                        {
                          alert.category
                        }
                      </span>

                      <h4>
                        {
                          alert.title
                        }
                      </h4>
                    </div>

                    <strong>
                      {
                        alert.severity
                      }
                    </strong>
                  </div>

                  <p>
                    {
                      alert.description
                    }
                  </p>

                  <div className="intelligence-alert-values">
                    <div>
                      <span>
                        CURRENT
                      </span>

                      <strong>
                        {
                          alert.currentValue
                        }
                      </strong>
                    </div>

                    <div>
                      <span>
                        THRESHOLD
                      </span>

                      <strong>
                        {
                          alert.threshold
                        }
                      </strong>
                    </div>

                    <div>
                      <span>
                        AREA
                      </span>

                      <strong>
                        {
                          alert.affectedArea
                        }
                      </strong>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </article>

        <article className="intelligence-panel">
          <div className="intelligence-panel-heading">
            <div>
              <span>
                MODEL MONITOR
              </span>

              <h3>
                Model Events
              </h3>
            </div>
          </div>

          <div className="intelligence-model-list">
            {data.modelEvents.map(
              (event) => (
                <article
                  key={event.id}
                  className={`intelligence-model-event ${severityClass(
                    event.severity,
                  )}`}
                >
                  <div className="intelligence-model-head">
                    <div>
                      <span>
                        {
                          event.timestamp
                        }
                      </span>

                      <strong>
                        {
                          event.model
                        }
                      </strong>
                    </div>

                    <b>
                      {
                        event.confidence
                      }
                      %
                    </b>
                  </div>

                  <h4>
                    {
                      event.event
                    }
                  </h4>

                  <p>
                    {
                      event.detail
                    }
                  </p>

                  <small>
                    STATUS /{" "}
                    {
                      event.status
                    }
                  </small>
                </article>
              ),
            )}
          </div>
        </article>
      </div>

      <div className="intelligence-tertiary-grid">
        <article className="intelligence-panel">
          <div className="intelligence-panel-heading">
            <div>
              <span>
                CROSS-MODULE STATE
              </span>

              <h3>
                Intelligence Matrix
              </h3>
            </div>
          </div>

          <div className="intelligence-category-grid">
            {data.categorySummary.map(
              (category) => (
                <article
                  key={
                    category.category
                  }
                  className={`intelligence-category ${directionClass(
                    category.direction,
                  )}`}
                >
                  <div>
                    <span>
                      {
                        category.label
                      }
                    </span>

                    <strong>
                      {
                        category.score
                      }
                    </strong>
                  </div>

                  <div className="intelligence-progress">
                    <i
                      style={{
                        width: `${clampScore(
                          category.score,
                        )}%`,
                      }}
                    />
                  </div>

                  <footer>
                    <span>
                      {
                        category.activeEvents
                      }{" "}
                      EVENTS
                    </span>

                    <strong>
                      {
                        category.severity
                      }
                    </strong>
                  </footer>
                </article>
              ),
            )}
          </div>
        </article>

        <article className="intelligence-panel">
          <div className="intelligence-panel-heading">
            <div>
              <span>
                DATA HEALTH
              </span>

              <h3>
                Source Freshness
              </h3>
            </div>
          </div>

          <div className="intelligence-freshness-list">
            {data.freshness.map(
              (item) => (
                <div
                  key={item.id}
                  className={`intelligence-freshness intelligence-freshness-${item.freshness}`}
                >
                  <div>
                    <span>
                      {
                        item.source
                      }
                    </span>

                    <small>
                      UPDATED{" "}
                      {
                        item.lastUpdate
                      }
                    </small>
                  </div>

                  <div className="intelligence-freshness-coverage">
                    <div className="intelligence-progress">
                      <i
                        style={{
                          width: `${clampScore(
                            item.coverage,
                          )}%`,
                        }}
                      />
                    </div>

                    <strong>
                      {
                        item.coverage
                      }
                      %
                    </strong>
                  </div>

                  <span>
                    {
                      item.latency
                    }
                  </span>
                </div>
              ),
            )}
          </div>
        </article>
      </div>

      <footer className="intelligence-footer">
        <div>
          <span className="intelligence-footer-dot" />

          <strong>
            DETERMINISTIC
            INTELLIGENCE
          </strong>

          <span>
            Reproducible research
            snapshot
          </span>
        </div>

        <p>
          Demonstration events are
          derived from REGIMEON&apos;s
          deterministic command
          datasets and do not
          represent a live production
          alert feed.
        </p>
      </footer>
    </section>
  );
}