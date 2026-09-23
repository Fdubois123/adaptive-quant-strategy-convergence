"use client";

import { useMemo, useState } from "react";
import { feature } from "topojson-client";
import countries110m from "world-atlas/countries-110m.json";
import countriesMetadata from "world-countries";

import { globalMarketIntelligenceData } from "@/data/command/global-market";

import type {
  GlobalMarketDirection,
  GlobalRegionId,
  GlobalRiskLevel,
} from "@/types/global-market";

type Coordinate = {
  x: number;
  y: number;
};

type MapNode = {
  id: string;
  label: string;
  city: string;
  subtitle: string;
  longitude: number;
  latitude: number;
  severity: GlobalRiskLevel;
  region?: GlobalRegionId;
  probability: string;
  value: string;
  labelOffsetX?: number;
  labelOffsetY?: number;
};

type MapConnection = {
  id: string;
  from: string;
  to: string;
  intensity: number;
  severity: GlobalRiskLevel;
};

type GeoGeometry = {
  type: string;
  coordinates: unknown;
};

type GeoFeature = {
  type: "Feature";
  id?: string | number;
  properties: Record<string, unknown>;
  geometry: GeoGeometry;
};

type GeoFeatureCollection = {
  type: "FeatureCollection";
  features: GeoFeature[];
};

type CountryMetadata = {
  cca2?: string;
  cca3?: string;
  ccn3?: string;
  name?: {
    common?: string;
    official?: string;
  };
  region?: string;
  subregion?: string;
  latlng?: number[];
};

type SelectedCountry = {
  id: string;
  name: string;
  officialName: string;
  region: string;
  subregion: string;
  latitude: number;
  longitude: number;
  riskLevel: GlobalRiskLevel;
  riskScore: number;
};

const VIEW_WIDTH = 1000;
const VIEW_HEIGHT = 500;

const nodes: MapNode[] = [
  {
    id: "new-york",
    label: "NORTH AMERICA",
    city: "NEW YORK",
    subtitle: "Rates repricing",
    longitude: -74.006,
    latitude: 40.7128,
    severity: "moderate",
    region: "north-america",
    probability: "58%",
    value: "32 / 100",
    labelOffsetX: -116,
    labelOffsetY: -12,
  },
  {
    id: "sao-paulo",
    label: "LATAM",
    city: "SÃO PAULO",
    subtitle: "FX sensitivity",
    longitude: -46.6333,
    latitude: -23.5505,
    severity: "moderate",
    region: "emerging-markets",
    probability: "48%",
    value: "58 / 100",
    labelOffsetX: 10,
    labelOffsetY: 4,
  },
  {
    id: "london",
    label: "EUROPE",
    city: "LONDON",
    subtitle: "Energy pressure",
    longitude: -0.1276,
    latitude: 51.5072,
    severity: "moderate",
    region: "europe",
    probability: "44%",
    value: "41 / 100",
    labelOffsetX: 10,
    labelOffsetY: -34,
  },
  {
    id: "johannesburg",
    label: "AFRICA",
    city: "JOHANNESBURG",
    subtitle: "Liquidity watch",
    longitude: 28.0473,
    latitude: -26.2041,
    severity: "moderate",
    region: "emerging-markets",
    probability: "46%",
    value: "58 / 100",
    labelOffsetX: 10,
    labelOffsetY: 4,
  },
  {
    id: "dubai",
    label: "MIDDLE EAST",
    city: "DUBAI",
    subtitle: "Commodity pressure",
    longitude: 55.2708,
    latitude: 25.2048,
    severity: "high",
    probability: "61%",
    value: "68 / 100",
    labelOffsetX: 10,
    labelOffsetY: -32,
  },
  {
    id: "mumbai",
    label: "INDIA",
    city: "MUMBAI",
    subtitle: "Growth / risk-on",
    longitude: 72.8777,
    latitude: 19.076,
    severity: "low",
    region: "asia-pacific",
    probability: "24%",
    value: "36 / 100",
    labelOffsetX: 10,
    labelOffsetY: -5,
  },
  {
    id: "hong-kong",
    label: "CHINA",
    city: "HONG KONG",
    subtitle: "Growth sensitivity",
    longitude: 114.1694,
    latitude: 22.3193,
    severity: "moderate",
    region: "asia-pacific",
    probability: "51%",
    value: "36 / 100",
    labelOffsetX: 10,
    labelOffsetY: -32,
  },
  {
    id: "singapore",
    label: "SOUTHEAST ASIA",
    city: "SINGAPORE",
    subtitle: "Flow intelligence",
    longitude: 103.8198,
    latitude: 1.3521,
    severity: "low",
    region: "asia-pacific",
    probability: "29%",
    value: "36 / 100",
    labelOffsetX: 10,
    labelOffsetY: 10,
  },
  {
    id: "tokyo",
    label: "JAPAN",
    city: "TOKYO",
    subtitle: "Policy transition",
    longitude: 139.6917,
    latitude: 35.6895,
    severity: "moderate",
    region: "asia-pacific",
    probability: "42%",
    value: "36 / 100",
    labelOffsetX: 12,
    labelOffsetY: -18,
  },
  {
    id: "sydney",
    label: "OCEANIA",
    city: "SYDNEY",
    subtitle: "Commodity linkage",
    longitude: 151.2093,
    latitude: -33.8688,
    severity: "low",
    region: "asia-pacific",
    probability: "26%",
    value: "36 / 100",
    labelOffsetX: 10,
    labelOffsetY: 4,
  },
];

const connections: MapConnection[] = [
  {
    id: "ny-london",
    from: "new-york",
    to: "london",
    intensity: 82,
    severity: "moderate",
  },
  {
    id: "ny-sao",
    from: "new-york",
    to: "sao-paulo",
    intensity: 51,
    severity: "moderate",
  },
  {
    id: "ny-dubai",
    from: "new-york",
    to: "dubai",
    intensity: 64,
    severity: "high",
  },
  {
    id: "london-dubai",
    from: "london",
    to: "dubai",
    intensity: 71,
    severity: "high",
  },
  {
    id: "london-mumbai",
    from: "london",
    to: "mumbai",
    intensity: 58,
    severity: "moderate",
  },
  {
    id: "dubai-mumbai",
    from: "dubai",
    to: "mumbai",
    intensity: 78,
    severity: "moderate",
  },
  {
    id: "dubai-singapore",
    from: "dubai",
    to: "singapore",
    intensity: 59,
    severity: "moderate",
  },
  {
    id: "mumbai-singapore",
    from: "mumbai",
    to: "singapore",
    intensity: 74,
    severity: "low",
  },
  {
    id: "mumbai-hongkong",
    from: "mumbai",
    to: "hong-kong",
    intensity: 67,
    severity: "moderate",
  },
  {
    id: "hongkong-tokyo",
    from: "hong-kong",
    to: "tokyo",
    intensity: 69,
    severity: "moderate",
  },
  {
    id: "singapore-sydney",
    from: "singapore",
    to: "sydney",
    intensity: 55,
    severity: "low",
  },
  {
    id: "johannesburg-dubai",
    from: "johannesburg",
    to: "dubai",
    intensity: 43,
    severity: "moderate",
  },
];

function project(
  longitude: number,
  latitude: number,
): Coordinate {
  const safeLatitude = Math.max(
    -84,
    Math.min(84, latitude),
  );

  const x =
    ((longitude + 180) / 360) * VIEW_WIDTH;

  const latitudeRadians =
    (safeLatitude * Math.PI) / 180;

  const mercator = Math.log(
    Math.tan(
      Math.PI / 4 + latitudeRadians / 2,
    ),
  );

  const maxMercator = Math.log(
    Math.tan(
      Math.PI / 4 + (85 * Math.PI) / 360,
    ),
  );

  const y =
    VIEW_HEIGHT / 2 -
    (mercator / maxMercator) *
      (VIEW_HEIGHT / 2) *
      0.86;

  return { x, y };
}

function severityColor(level: GlobalRiskLevel) {
  switch (level) {
    case "low":
      return "#34d399";
    case "moderate":
      return "#fbbf24";
    case "high":
      return "#fb923c";
    case "critical":
      return "#fb3f5c";
  }
}

function directionClass(
  direction: GlobalMarketDirection,
) {
  return `global-direction-${direction}`;
}

function coordinatePath(
  coordinates: unknown,
): string {
  if (
    !Array.isArray(coordinates) ||
    coordinates.length === 0
  ) {
    return "";
  }

  const first = coordinates[0];

  if (
    Array.isArray(first) &&
    typeof first[0] === "number" &&
    typeof first[1] === "number"
  ) {
    const ring = coordinates as number[][];

    return ring
      .map((point, index) => {
        const [longitude, latitude] = point;

        const projected = project(
          longitude,
          latitude,
        );

        return `${index === 0 ? "M" : "L"} ${
          projected.x
        } ${projected.y}`;
      })
      .join(" ")
      .concat(" Z");
  }

  if (Array.isArray(first)) {
    return (coordinates as unknown[])
      .map((part) => coordinatePath(part))
      .filter(Boolean)
      .join(" ");
  }

  return "";
}

function geometryPath(
  geometry: GeoGeometry,
): string {
  return coordinatePath(geometry.coordinates);
}

function connectionPath(
  from: Coordinate,
  to: Coordinate,
) {
  const midpointX = (from.x + to.x) / 2;
  const distance = Math.abs(to.x - from.x);

  const lift = Math.max(
    25,
    Math.min(95, distance * 0.18),
  );

  const midpointY =
    Math.min(from.y, to.y) - lift;

  return `M ${from.x} ${from.y} Q ${midpointX} ${midpointY} ${to.x} ${to.y}`;
}

function normaliseCountryId(
  value: string | number | undefined,
) {
  if (value === undefined) {
    return "";
  }

  return String(value).padStart(3, "0");
}

function countryRisk(
  name: string,
  region: string,
  subregion: string,
) {
  const key = `${name} ${region} ${subregion}`.toLowerCase();

  if (
    key.includes("ukraine") ||
    key.includes("israel")
  ) {
    return {
      level: "high" as GlobalRiskLevel,
      score: 72,
    };
  }

  if (
    key.includes("middle east") ||
    key.includes("western asia")
  ) {
    return {
      level: "high" as GlobalRiskLevel,
      score: 64,
    };
  }

  if (
    key.includes("south america") ||
    key.includes("africa")
  ) {
    return {
      level: "moderate" as GlobalRiskLevel,
      score: 52,
    };
  }

  if (
    key.includes("europe") ||
    key.includes("asia")
  ) {
    return {
      level: "moderate" as GlobalRiskLevel,
      score: 42,
    };
  }

  return {
    level: "low" as GlobalRiskLevel,
    score: 31,
  };
}

export default function GlobalRiskMap() {
  const [selectedNodeId, setSelectedNodeId] =
    useState("tokyo");

  const [hoveredNodeId, setHoveredNodeId] =
    useState<string | null>(null);

  const [selectedCountryId, setSelectedCountryId] =
    useState<string | null>(null);

  const [hoveredCountryId, setHoveredCountryId] =
    useState<string | null>(null);

  const geography = useMemo(() => {
    const topology =
      countries110m as unknown as {
        objects: {
          countries: object;
        };
      };

    return feature(
      countries110m as never,
      topology.objects.countries as never,
    ) as unknown as GeoFeatureCollection;
  }, []);

  const countryMetadata = useMemo(() => {
    const metadata = new Map<
      string,
      CountryMetadata
    >();

    (
      countriesMetadata as CountryMetadata[]
    ).forEach((country) => {
      if (!country.ccn3) {
        return;
      }

      metadata.set(
        normaliseCountryId(country.ccn3),
        country,
      );
    });

    return metadata;
  }, []);

  const selectableCountries = useMemo(
    () =>
      geography.features.map((country, index) => {
        const atlasId = normaliseCountryId(
          country.id,
        );

        const metadata =
          countryMetadata.get(atlasId);

        const name =
          metadata?.name?.common ??
          `Country ${atlasId || index + 1}`;

        const officialName =
          metadata?.name?.official ?? name;

        const region =
          metadata?.region ?? "Global";

        const subregion =
          metadata?.subregion ??
          "Unclassified";

        const latlng =
          metadata?.latlng ?? [0, 0];

        const latitude = latlng[0] ?? 0;
        const longitude = latlng[1] ?? 0;

        const risk = countryRisk(
          name,
          region,
          subregion,
        );

        /*
         * world-atlas IDs are useful for metadata lookup,
         * but they are not used directly as React keys.
         * Adding the feature index guarantees a unique,
         * stable render identity for every map path.
         */
        const uniqueId = `country-${
          atlasId || "unknown"
        }-${index}`;

        return {
          feature: country,
          id: uniqueId,
          atlasId,
          name,
          officialName,
          region,
          subregion,
          latitude,
          longitude,
          riskLevel: risk.level,
          riskScore: risk.score,
        };
      }),
    [geography, countryMetadata],
  );

  const projectedNodes = useMemo(
    () =>
      nodes.map((node) => ({
        ...node,
        point: project(
          node.longitude,
          node.latitude,
        ),
      })),
    [],
  );

  const nodeLookup = useMemo(
    () =>
      new Map(
        projectedNodes.map((node) => [
          node.id,
          node,
        ]),
      ),
    [projectedNodes],
  );

  const activeNode =
    nodeLookup.get(
      hoveredNodeId ?? selectedNodeId,
    ) ?? projectedNodes[0];

  const selectedCountry =
    selectableCountries.find(
      (country) =>
        country.id ===
        (hoveredCountryId ??
          selectedCountryId),
    ) ?? null;

  const selectedRegion = activeNode.region
    ? globalMarketIntelligenceData.regions.find(
        (region) =>
          region.id === activeNode.region,
      )
    : undefined;

  const selectedEvent = activeNode.region
    ? globalMarketIntelligenceData.riskEvents.find(
        (event) =>
          event.region === activeNode.region,
      )
    : undefined;

  const activeConnections = connections.filter(
    (connection) =>
      connection.from === activeNode.id ||
      connection.to === activeNode.id,
  );

  const inspectorCountry =
    selectedCountry as SelectedCountry | null;

  const inspectorSeverity =
    inspectorCountry?.riskLevel ??
    activeNode.severity;

  const inspectorRiskScore =
    inspectorCountry?.riskScore ??
    selectedRegion?.riskScore ??
    (activeNode.severity === "critical"
      ? 88
      : activeNode.severity === "high"
        ? 68
        : activeNode.severity ===
            "moderate"
          ? 48
          : 27);

  function selectNode(id: string) {
    setSelectedNodeId(id);
    setSelectedCountryId(null);
  }

  function selectCountry(id: string) {
    setSelectedCountryId(id);
    setSelectedNodeId("");
  }

  return (
    <article className="global-risk-map-panel">
      <header className="global-risk-map-header">
        <div>
          <span className="global-panel-kicker">
            GEOSPATIAL INTELLIGENCE
          </span>

          <h3>
            Global Risk Intelligence Network
          </h3>

          <p>
            Select any country or financial hub to
            inspect geographic market-risk context,
            regional stress and cross-border
            transmission.
          </p>
        </div>

        <div className="global-risk-map-status">
          <span className="global-risk-map-live-dot" />
          DEMO GEOSPATIAL MODEL
        </div>
      </header>

      <div className="global-risk-map-layout">
        <div className="global-risk-map-canvas">
          <div className="global-map-grid" />

          <div className="global-map-corner global-map-corner-tl" />
          <div className="global-map-corner global-map-corner-tr" />
          <div className="global-map-corner global-map-corner-bl" />
          <div className="global-map-corner global-map-corner-br" />

          <svg
            className="global-world-map"
            viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
            preserveAspectRatio="xMidYMid meet"
            aria-label="Interactive global market risk intelligence map"
          >
            <defs>
              <filter
                id="risk-node-glow"
                x="-200%"
                y="-200%"
                width="400%"
                height="400%"
              >
                <feGaussianBlur
                  stdDeviation="5"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter
                id="world-edge-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur
                  stdDeviation="0.8"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <radialGradient id="world-ocean">
                <stop
                  offset="0%"
                  stopColor="#0e7490"
                  stopOpacity="0.1"
                />

                <stop
                  offset="100%"
                  stopColor="#020617"
                  stopOpacity="0"
                />
              </radialGradient>

              <linearGradient
                id="world-land"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#0e3147"
                />

                <stop
                  offset="50%"
                  stopColor="#0a2639"
                />

                <stop
                  offset="100%"
                  stopColor="#071c2d"
                />
              </linearGradient>
            </defs>

            <rect
              width={VIEW_WIDTH}
              height={VIEW_HEIGHT}
              fill="url(#world-ocean)"
            />

            <g className="global-map-latitude-lines">
              {[100, 175, 250, 325, 400].map(
                (y) => (
                  <line
                    key={`h-${y}`}
                    x1="35"
                    y1={y}
                    x2="965"
                    y2={y}
                  />
                ),
              )}

              {[
                125, 250, 375, 500, 625,
                750, 875,
              ].map((x) => (
                <line
                  key={`v-${x}`}
                  x1={x}
                  y1="45"
                  x2={x}
                  y2="455"
                />
              ))}
            </g>

            <g
              className="global-map-countries"
              filter="url(#world-edge-glow)"
            >
              {selectableCountries.map(
                (country) => {
                  const selected =
                    selectedCountryId ===
                    country.id;

                  const hovered =
                    hoveredCountryId ===
                    country.id;

                  return (
                    <path
                      key={country.id}
                      d={geometryPath(
                        country.feature.geometry,
                      )}
                      className={`global-map-country ${
                        selected
                          ? "global-map-country-selected"
                          : ""
                      } ${
                        hovered
                          ? "global-map-country-hovered"
                          : ""
                      }`}
                      style={{
                        "--country-risk-color":
                          severityColor(
                            country.riskLevel,
                          ),
                      } as React.CSSProperties}
                      tabIndex={0}
                      role="button"
                      aria-label={`Select ${country.name}`}
                      onMouseEnter={() =>
                        setHoveredCountryId(
                          country.id,
                        )
                      }
                      onMouseLeave={() =>
                        setHoveredCountryId(
                          null,
                        )
                      }
                      onClick={() =>
                        selectCountry(country.id)
                      }
                      onKeyDown={(event) => {
                        if (
                          event.key ===
                            "Enter" ||
                          event.key === " "
                        ) {
                          event.preventDefault();
                          selectCountry(
                            country.id,
                          );
                        }
                      }}
                    >
                      <title>
                        {country.name} — DEMO risk{" "}
                        {country.riskScore}/100
                      </title>
                    </path>
                  );
                },
              )}
            </g>

            <g className="global-map-connections">
              {connections.map(
                (connection) => {
                  const from =
                    nodeLookup.get(
                      connection.from,
                    );

                  const to =
                    nodeLookup.get(
                      connection.to,
                    );

                  if (!from || !to) {
                    return null;
                  }

                  const active =
                    activeConnections.some(
                      (item) =>
                        item.id ===
                        connection.id,
                    );

                  return (
                    <g key={connection.id}>
                      <path
                        className="global-map-connection-shadow"
                        d={connectionPath(
                          from.point,
                          to.point,
                        )}
                      />

                      <path
                        className={
                          active
                            ? "global-map-connection global-map-connection-active"
                            : "global-map-connection"
                        }
                        d={connectionPath(
                          from.point,
                          to.point,
                        )}
                        stroke={severityColor(
                          connection.severity,
                        )}
                        strokeOpacity={
                          active
                            ? 0.88
                            : 0.2
                        }
                        strokeWidth={
                          active
                            ? 1.7
                            : Math.max(
                                0.7,
                                connection.intensity /
                                  100,
                              )
                        }
                      />
                    </g>
                  );
                },
              )}
            </g>

            <g className="global-map-nodes">
              {projectedNodes.map((node) => {
                const active =
                  !selectedCountry &&
                  activeNode.id === node.id;

                const selected =
                  !selectedCountry &&
                  selectedNodeId ===
                    node.id;

                return (
                  <g
                    key={node.id}
                    className={`global-map-node ${
                      active
                        ? "global-map-node-active"
                        : ""
                    }`}
                    transform={`translate(${node.point.x} ${node.point.y})`}
                    role="button"
                    tabIndex={0}
                    aria-label={`${node.city}: ${node.subtitle}`}
                    onMouseEnter={() =>
                      setHoveredNodeId(
                        node.id,
                      )
                    }
                    onMouseLeave={() =>
                      setHoveredNodeId(null)
                    }
                    onClick={() =>
                      selectNode(node.id)
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key ===
                          "Enter" ||
                        event.key === " "
                      ) {
                        event.preventDefault();
                        selectNode(node.id);
                      }
                    }}
                  >
                    <circle
                      className="global-map-node-halo"
                      r={active ? 23 : 16}
                      fill={severityColor(
                        node.severity,
                      )}
                    />

                    <circle
                      className="global-map-node-ring"
                      r={active ? 8 : 6}
                      fill="none"
                      stroke={severityColor(
                        node.severity,
                      )}
                    />

                    <circle
                      className="global-map-node-core"
                      r={
                        active ? 3.5 : 2.7
                      }
                      fill={severityColor(
                        node.severity,
                      )}
                      filter="url(#risk-node-glow)"
                    />

                    {selected && (
                      <circle
                        className="global-map-node-selected"
                        r="13"
                        fill="none"
                        stroke={severityColor(
                          node.severity,
                        )}
                      />
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {projectedNodes.map((node) => {
            const left =
              (node.point.x /
                VIEW_WIDTH) *
              100;

            const top =
              (node.point.y /
                VIEW_HEIGHT) *
              100;

            const active =
              !selectedCountry &&
              activeNode.id === node.id;

            return (
              <button
                key={`${node.id}-callout`}
                type="button"
                className={`global-map-callout ${
                  active
                    ? "global-map-callout-active"
                    : ""
                }`}
                style={{
                  left: `calc(${left}% + ${
                    node.labelOffsetX ?? 8
                  }px)`,
                  top: `calc(${top}% + ${
                    node.labelOffsetY ?? 0
                  }px)`,
                  borderColor: active
                    ? severityColor(
                        node.severity,
                      )
                    : undefined,
                }}
                onMouseEnter={() =>
                  setHoveredNodeId(node.id)
                }
                onMouseLeave={() =>
                  setHoveredNodeId(null)
                }
                onClick={() =>
                  selectNode(node.id)
                }
              >
                <span
                  className="global-map-callout-dot"
                  style={{
                    background:
                      severityColor(
                        node.severity,
                      ),
                    boxShadow: `0 0 10px ${severityColor(
                      node.severity,
                    )}`,
                  }}
                />

                <span className="global-map-callout-copy">
                  <strong>{node.city}</strong>
                  <small>
                    {node.subtitle}
                  </small>
                </span>
              </button>
            );
          })}

          {selectedCountry && (
            <div className="global-map-country-chip">
              <span>SELECTED COUNTRY</span>

              <strong>
                {selectedCountry.name}
              </strong>

              <small>
                {selectedCountry.subregion}
              </small>
            </div>
          )}

          <div className="global-map-title-overlay">
            <span>GLOBAL NETWORK</span>
            <strong>
              MARKET RISK TRANSMISSION
            </strong>
          </div>

          <div className="global-map-coordinate">
            SELECT COUNTRY OR MARKET NODE
          </div>

          <div className="global-map-provenance">
            DEMO / SYNTHETIC INTELLIGENCE
          </div>
        </div>

        <aside className="global-map-inspector">
          <div className="global-map-inspector-heading">
            <div>
              <span>
                {inspectorCountry
                  ? "SELECTED COUNTRY"
                  : "SELECTED MARKET NODE"}
              </span>

              <strong>
                {inspectorCountry?.name ??
                  activeNode.city}
              </strong>
            </div>

            <span
              className="global-map-inspector-severity"
              style={{
                color: severityColor(
                  inspectorSeverity,
                ),
              }}
            >
              {inspectorSeverity.toUpperCase()}
            </span>
          </div>

          <p className="global-map-inspector-theme">
            {inspectorCountry
              ? `${inspectorCountry.region.toUpperCase()} / ${inspectorCountry.subregion.toUpperCase()}`
              : `${activeNode.label} / ${activeNode.subtitle.toUpperCase()}`}
          </p>

          <div className="global-map-inspector-grid">
            <div>
              <span>RISK SCORE</span>
              <strong>
                {inspectorRiskScore} / 100
              </strong>
            </div>

            <div>
              <span>
                {inspectorCountry
                  ? "DATA MODE"
                  : "EVENT PROB."}
              </span>

              <strong>
                {inspectorCountry
                  ? "DEMO"
                  : activeNode.probability}
              </strong>
            </div>

            <div>
              <span>
                {inspectorCountry
                  ? "LATITUDE"
                  : "BREADTH"}
              </span>

              <strong>
                {inspectorCountry
                  ? `${inspectorCountry.latitude.toFixed(
                      1,
                    )}°`
                  : selectedRegion?.breadthDisplay ??
                    "GLOBAL"}
              </strong>
            </div>

            <div>
              <span>
                {inspectorCountry
                  ? "LONGITUDE"
                  : "VOLATILITY"}
              </span>

              <strong>
                {inspectorCountry
                  ? `${inspectorCountry.longitude.toFixed(
                      1,
                    )}°`
                  : selectedRegion?.volatilityDisplay ??
                    "MONITOR"}
              </strong>
            </div>
          </div>

          <div className="global-map-regime-state">
            <span>MARKET CONTEXT</span>

            <strong
              className={
                inspectorCountry
                  ? inspectorSeverity ===
                      "high" ||
                    inspectorSeverity ===
                      "critical"
                    ? "global-direction-warning"
                    : inspectorSeverity ===
                        "low"
                      ? "global-direction-positive"
                      : "global-direction-neutral"
                  : selectedRegion
                    ? directionClass(
                        selectedRegion.direction,
                      )
                    : "global-direction-neutral"
              }
            >
              {inspectorCountry
                ? inspectorCountry.riskLevel.toUpperCase()
                : selectedRegion?.signal ??
                  "ACTIVE WATCH"}
            </strong>
          </div>

          <div className="global-map-event-detail">
            <span>INTELLIGENCE CONTEXT</span>

            <p>
              {inspectorCountry
                ? `${inspectorCountry.officialName} is displayed as an interactive geographic research entity. The current risk classification is deterministic demonstration data and is not a live country-risk assessment.`
                : selectedEvent?.detail ??
                  `${activeNode.city} is represented as a deterministic research node for demonstrating geographic market-risk transmission and cross-border intelligence.`}
            </p>
          </div>

          <div className="global-map-inspector-track">
            <div>
              <span>RISK INTENSITY</span>
              <strong>
                {inspectorRiskScore}/100
              </strong>
            </div>

            <span>
              <i
                style={{
                  width: `${inspectorRiskScore}%`,
                  background:
                    severityColor(
                      inspectorSeverity,
                    ),
                }}
              />
            </span>
          </div>

          {!inspectorCountry && (
            <div className="global-map-network-panel">
              <div className="global-map-network-heading">
                <span>NETWORK EXPOSURE</span>

                <strong>
                  {
                    activeConnections.length
                  }
                </strong>
              </div>

              <div className="global-map-network-list">
                {activeConnections
                  .slice(0, 4)
                  .map((connection) => {
                    const counterpartId =
                      connection.from ===
                      activeNode.id
                        ? connection.to
                        : connection.from;

                    const counterpart =
                      nodeLookup.get(
                        counterpartId,
                      );

                    if (!counterpart) {
                      return null;
                    }

                    return (
                      <div
                        key={
                          connection.id
                        }
                        className="global-map-network-item"
                      >
                        <span>
                          {counterpart.city}
                        </span>

                        <div>
                          <i
                            style={{
                              width: `${connection.intensity}%`,
                              background:
                                severityColor(
                                  connection.severity,
                                ),
                            }}
                          />
                        </div>

                        <strong>
                          {
                            connection.intensity
                          }
                        </strong>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          <div className="global-map-inspector-note">
            <span>DEMO DATA</span>

            <p>
              Country classifications, geographic
              nodes, transmission relationships and
              risk signals are deterministic
              demonstration values. They are not live
              market or geopolitical alerts.
            </p>
          </div>
        </aside>
      </div>

      <footer className="global-risk-map-footer">
        <div className="global-risk-map-legend">
          <span>
            <i
              style={{
                background:
                  severityColor("low"),
              }}
            />
            LOW
          </span>

          <span>
            <i
              style={{
                background:
                  severityColor("moderate"),
              }}
            />
            MODERATE
          </span>

          <span>
            <i
              style={{
                background:
                  severityColor("high"),
              }}
            />
            HIGH
          </span>

          <span>
            <i
              style={{
                background:
                  severityColor("critical"),
              }}
            />
            CRITICAL
          </span>
        </div>

        <div className="global-risk-map-summary">
          <span>
            GLOBAL RISK
            <strong>
              {
                globalMarketIntelligenceData
                  .state.riskScoreDisplay
              }
            </strong>
          </span>

          <span>
            BREADTH
            <strong>
              {
                globalMarketIntelligenceData
                  .state.breadthDisplay
              }
            </strong>
          </span>

          <span>
            COUNTRIES
            <strong>
              {selectableCountries.length}
            </strong>
          </span>

          <span>
            HUBS
            <strong>
              {projectedNodes.length}
            </strong>
          </span>
        </div>
      </footer>
    </article>
  );
}