"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo, useState } from "react";

import type {
  RiskSurfaceLink,
  RiskSurfaceMode,
  RiskSurfaceNode,
  RiskSurfaceNodeId,
} from "@/types/risk-surface";

type PortfolioRiskSceneProps = {
  nodes: RiskSurfaceNode[];
  links: RiskSurfaceLink[];
  mode: RiskSurfaceMode;
  scenarioId: string;
  selectedNodeId: RiskSurfaceNodeId;
  onSelectNode: (
    nodeId: RiskSurfaceNodeId,
  ) => void;
};

type ScenarioId =
  | "normal"
  | "equity-shock"
  | "liquidity-stress"
  | "rates-shock";

type AssetClassId =
  | "equity"
  | "fixed-income"
  | "commodities"
  | "fx"
  | "alternatives";

type StrategyId =
  | "momentum"
  | "mean-reversion"
  | "trend"
  | "volatility"
  | "carry";

type HeatCell = {
  id: string;
  asset: AssetClassId;
  assetLabel: string;
  strategy: StrategyId;
  strategyLabel: string;
  value: number;
  normalValue: number;
  stressValue: number;
  x: number;
  z: number;
  sourceNodeId: RiskSurfaceNodeId;
};

const ASSETS: {
  id: AssetClassId;
  label: string;
}[] = [
  {
    id: "equity",
    label: "EQUITY",
  },
  {
    id: "fixed-income",
    label: "FIXED INCOME",
  },
  {
    id: "commodities",
    label: "COMMODITIES",
  },
  {
    id: "fx",
    label: "FX",
  },
  {
    id: "alternatives",
    label: "ALTERNATIVES",
  },
];

const STRATEGIES: {
  id: StrategyId;
  label: string;
}[] = [
  {
    id: "momentum",
    label: "MOMENTUM",
  },
  {
    id: "mean-reversion",
    label: "MEAN REV",
  },
  {
    id: "trend",
    label: "TREND",
  },
  {
    id: "volatility",
    label: "VOLATILITY",
  },
  {
    id: "carry",
    label: "CARRY",
  },
];

const BASE_MATRIX: Record<
  AssetClassId,
  Record<StrategyId, number>
> = {
  equity: {
    momentum: 78,
    "mean-reversion": 52,
    trend: 71,
    volatility: 64,
    carry: 34,
  },

  "fixed-income": {
    momentum: 38,
    "mean-reversion": 44,
    trend: 51,
    volatility: 36,
    carry: 58,
  },

  commodities: {
    momentum: 61,
    "mean-reversion": 47,
    trend: 69,
    volatility: 55,
    carry: 42,
  },

  fx: {
    momentum: 46,
    "mean-reversion": 57,
    trend: 53,
    volatility: 41,
    carry: 63,
  },

  alternatives: {
    momentum: 67,
    "mean-reversion": 43,
    trend: 59,
    volatility: 74,
    carry: 39,
  },
};

const NODE_MAPPING = [
  "equity-factor",
  "rates-factor",
  "commodity-factor",
  "fx-factor",
  "btc",
] as RiskSurfaceNodeId[];

function normalizeScenario(
  scenarioId: string,
): ScenarioId {
  if (
    scenarioId === "equity-shock" ||
    scenarioId === "liquidity-stress" ||
    scenarioId === "rates-shock"
  ) {
    return scenarioId;
  }

  return "normal";
}

function scenarioLabel(
  scenario: ScenarioId,
) {
  switch (scenario) {
    case "equity-shock":
      return "EQUITY SHOCK";

    case "liquidity-stress":
      return "LIQUIDITY STRESS";

    case "rates-shock":
      return "RATES +150BPS";

    case "normal":
    default:
      return "NORMAL STRUCTURE";
  }
}

function scenarioMultiplier(
  asset: AssetClassId,
  strategy: StrategyId,
  scenario: ScenarioId,
) {
  if (scenario === "normal") {
    return 1;
  }

  if (scenario === "equity-shock") {
    let multiplier =
      asset === "equity"
        ? 1.48
        : asset === "alternatives"
          ? 1.22
          : 1.08;

    if (
      strategy === "momentum" ||
      strategy === "trend"
    ) {
      multiplier += 0.12;
    }

    if (strategy === "volatility") {
      multiplier += 0.18;
    }

    return multiplier;
  }

  if (scenario === "rates-shock") {
    let multiplier =
      asset === "fixed-income"
        ? 1.55
        : asset === "equity"
          ? 1.18
          : asset === "fx"
            ? 1.24
            : 1.08;

    if (
      strategy === "carry" ||
      strategy === "trend"
    ) {
      multiplier += 0.13;
    }

    return multiplier;
  }

  let multiplier =
    asset === "alternatives"
      ? 1.4
      : asset === "equity"
        ? 1.3
        : asset === "commodities"
          ? 1.25
          : 1.18;

  if (
    strategy === "volatility" ||
    strategy === "mean-reversion"
  ) {
    multiplier += 0.2;
  }

  return multiplier;
}

function riskColor(
  value: number,
) {
  if (value >= 90) {
    return "#ff304f";
  }

  if (value >= 75) {
    return "#ff5435";
  }

  if (value >= 60) {
    return "#ff9d2e";
  }

  if (value >= 45) {
    return "#e6cf3c";
  }

  if (value >= 30) {
    return "#39d77a";
  }

  return "#25b8de";
}

function riskEmissive(
  value: number,
) {
  if (value >= 75) {
    return 0.48;
  }

  if (value >= 60) {
    return 0.38;
  }

  if (value >= 45) {
    return 0.3;
  }

  return 0.24;
}

function buildCells(
  scenario: ScenarioId,
): HeatCell[] {
  const cells: HeatCell[] = [];

  ASSETS.forEach(
    (asset, assetIndex) => {
      STRATEGIES.forEach(
        (
          strategy,
          strategyIndex,
        ) => {
          const normalValue =
            BASE_MATRIX[asset.id][
              strategy.id
            ];

          const stressValue =
            Math.min(
              100,
              Math.round(
                normalValue *
                  scenarioMultiplier(
                    asset.id,
                    strategy.id,
                    scenario,
                  ),
              ),
            );

          cells.push({
            id: `${asset.id}-${strategy.id}`,

            asset: asset.id,

            assetLabel:
              asset.label,

            strategy:
              strategy.id,

            strategyLabel:
              strategy.label,

            normalValue,

            stressValue,

            value:
              scenario === "normal"
                ? normalValue
                : stressValue,

            /*
             * Tighter spacing creates a true
             * heat-map platform instead of
             * isolated towers.
             */
            x:
              (assetIndex -
                (ASSETS.length - 1) /
                  2) *
              1.44,

            z:
              (strategyIndex -
                (STRATEGIES.length -
                  1) /
                  2) *
              1.34,

            sourceNodeId:
              NODE_MAPPING[
                assetIndex
              ] ??
              NODE_MAPPING[0],
          });
        },
      );
    },
  );

  return cells;
}

function HeatColumn({
  cell,
  selected,
  hovered,
  onHover,
  onSelect,
}: {
  cell: HeatCell;
  selected: boolean;
  hovered: boolean;
  onHover: (
    cell: HeatCell | null,
  ) => void;
  onSelect: (
    cell: HeatCell,
  ) => void;
}) {
  const color =
    riskColor(cell.value);

  /*
   * Risk height is deliberately capped.
   * Even a 100/100 stress cell remains
   * inside the presentation camera.
   */
  const height =
    0.35 +
    (cell.value / 100) *
      3.95;

  const columnScale =
    selected
      ? 1.08
      : hovered
        ? 1.045
        : 1;

  const tileLift =
    selected
      ? 0.09
      : hovered
        ? 0.06
        : 0;

  function pointerEnter() {
    onHover(cell);
    document.body.style.cursor =
      "pointer";
  }

  function pointerLeave() {
    onHover(null);
    document.body.style.cursor =
      "default";
  }

  function selectCell() {
    onSelect(cell);
  }

  return (
    <group
      position={[
        cell.x,
        0,
        cell.z,
      ]}
    >
      {/* HEAT MAP FLOOR CELL */}
      <mesh
        position={[
          0,
          0.055 + tileLift,
          0,
        ]}
        onPointerEnter={(
          event,
        ) => {
          event.stopPropagation();
          pointerEnter();
        }}
        onPointerLeave={(
          event,
        ) => {
          event.stopPropagation();
          pointerLeave();
        }}
        onClick={(event) => {
          event.stopPropagation();
          selectCell();
        }}
      >
        <boxGeometry
          args={[
            1.34,
            selected
              ? 0.16
              : 0.1,
            1.24,
          ]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={
            selected
              ? 0.66
              : hovered
                ? 0.46
                : 0.23
          }
          roughness={0.48}
          metalness={0.24}
          transparent
          opacity={
            selected
              ? 0.98
              : 0.88
          }
        />
      </mesh>

      {/* RISK COLUMN */}
      <mesh
        position={[
          0,
          height / 2 +
            0.14,
          0,
        ]}
        scale={[
          columnScale,
          1,
          columnScale,
        ]}
        onPointerEnter={(
          event,
        ) => {
          event.stopPropagation();
          pointerEnter();
        }}
        onPointerLeave={(
          event,
        ) => {
          event.stopPropagation();
          pointerLeave();
        }}
        onClick={(event) => {
          event.stopPropagation();
          selectCell();
        }}
      >
        <boxGeometry
          args={[
            0.84,
            height,
            0.84,
          ]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={
            selected
              ? 0.82
              : hovered
                ? 0.66
                : riskEmissive(
                    cell.value,
                  )
          }
          roughness={0.3}
          metalness={0.28}
        />
      </mesh>

      {/* COLUMN TOP */}
      <mesh
        position={[
          0,
          height + 0.15,
          0,
        ]}
        scale={[
          columnScale,
          1,
          columnScale,
        ]}
      >
        <boxGeometry
          args={[
            0.85,
            0.055,
            0.85,
          ]}
        />

        <meshBasicMaterial
          color={
            selected
              ? "#ffffff"
              : color
          }
          transparent
          opacity={
            selected
              ? 0.92
              : hovered
                ? 0.72
                : 0.48
          }
        />
      </mesh>

      {/* SELECTED CELL OUTLINE */}
      {selected && (
        <mesh
          position={[
            0,
            0.145,
            0,
          ]}
        >
          <boxGeometry
            args={[
              1.42,
              0.035,
              1.32,
            ]}
          />

          <meshBasicMaterial
            color="#e7fbff"
            wireframe
            transparent
            opacity={0.9}
          />
        </mesh>
      )}
    </group>
  );
}

function PlatformBase() {
  return (
    <group>
      <mesh
        position={[
          0,
          -0.19,
          0,
        ]}
      >
        <boxGeometry
          args={[
            8.2,
            0.32,
            7.55,
          ]}
        />

        <meshStandardMaterial
          color="#04111c"
          roughness={0.62}
          metalness={0.42}
        />
      </mesh>

      <mesh
        position={[
          0,
          -0.015,
          0,
        ]}
      >
        <boxGeometry
          args={[
            7.65,
            0.055,
            7.02,
          ]}
        />

        <meshStandardMaterial
          color="#092334"
          emissive="#0d4258"
          emissiveIntensity={0.18}
          roughness={0.48}
          metalness={0.34}
        />
      </mesh>

      <gridHelper
        args={[
          7.4,
          20,
          "#24546a",
          "#102c3d",
        ]}
        position={[
          0,
          0.025,
          0,
        ]}
      />
    </group>
  );
}

function HeatMapScene({
  cells,
  scenario,
  selectedCellId,
  hoveredCellId,
  onHover,
  onSelect,
}: {
  cells: HeatCell[];
  scenario: ScenarioId;
  selectedCellId: string;
  hoveredCellId: string | null;
  onHover: (
    cell: HeatCell | null,
  ) => void;
  onSelect: (
    cell: HeatCell,
  ) => void;
}) {
  const stress =
    scenario !== "normal";

  return (
    <>
      <ambientLight
        intensity={
          stress
            ? 0.58
            : 0.68
        }
      />

      <hemisphereLight
        args={[
          "#9eefff",
          "#07111a",
          0.55,
        ]}
      />

      <directionalLight
        position={[
          5,
          10,
          7,
        ]}
        intensity={1.5}
        color="#e9fbff"
      />

      <pointLight
        position={[
          -4,
          6,
          3,
        ]}
        intensity={
          stress
            ? 1.3
            : 0.9
        }
        color={
          stress
            ? "#ff664f"
            : "#29d6f4"
        }
      />

      <pointLight
        position={[
          4,
          5,
          -3,
        ]}
        intensity={0.8}
        color="#8f86ff"
      />

      <PlatformBase />

      {cells.map(
        (cell) => (
          <HeatColumn
            key={cell.id}
            cell={cell}
            selected={
              cell.id ===
              selectedCellId
            }
            hovered={
              cell.id ===
              hoveredCellId
            }
            onHover={onHover}
            onSelect={onSelect}
          />
        ),
      )}
    </>
  );
}

export default function PortfolioRiskScene({
  nodes,
  links: _links,
  mode,
  scenarioId,
  selectedNodeId:
    _selectedNodeId,
  onSelectNode,
}: PortfolioRiskSceneProps) {
  /*
   * Keep props part of the public
   * D2.8 scene contract.
   */
  void _links;
  void _selectedNodeId;

  const activeScenario =
    mode === "normal"
      ? "normal"
      : normalizeScenario(
          scenarioId,
        );

  const cells = useMemo(
    () => {
      void nodes;

      return buildCells(
        activeScenario,
      );
    },
    [
      activeScenario,
      nodes,
    ],
  );

  const [
    selectedCellId,
    setSelectedCellId,
  ] = useState(
    "equity-momentum",
  );

  const [
    hoveredCell,
    setHoveredCell,
  ] =
    useState<HeatCell | null>(
      null,
    );

  const selectedCell =
    useMemo(
      () =>
        cells.find(
          (cell) =>
            cell.id ===
            selectedCellId,
        ) ??
        cells[0],
      [
        cells,
        selectedCellId,
      ],
    );

  const displayCell =
    hoveredCell ??
    selectedCell;

  function handleSelect(
    cell: HeatCell,
  ) {
    setSelectedCellId(
      cell.id,
    );

    const mappedNode =
      nodes.find(
        (node) =>
          node.id ===
          cell.sourceNodeId,
      );

    if (mappedNode) {
      onSelectNode(
        mappedNode.id,
      );
      return;
    }

    if (nodes[0]) {
      onSelectNode(
        nodes[0].id,
      );
    }
  }

  return (
    <div
      className={`risk-surface-canvas-shell risk-surface-mode-${mode}`}
    >
      <Canvas
        camera={{
          /*
           * Lower + substantially closer
           * than the previous camera.
           */
          position: [
            8.1,
            6.3,
            8.9,
          ],
          fov: 36,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
        onPointerMissed={() => {
          setHoveredCell(
            null,
          );

          document.body.style.cursor =
            "default";
        }}
      >
        <color
          attach="background"
          args={[
            "#020811",
          ]}
        />

        <fog
          attach="fog"
          args={[
            "#020811",
            18,
            34,
          ]}
        />

        <HeatMapScene
          cells={cells}
          scenario={
            activeScenario
          }
          selectedCellId={
            selectedCellId
          }
          hoveredCellId={
            hoveredCell?.id ??
            null
          }
          onHover={
            setHoveredCell
          }
          onSelect={
            handleSelect
          }
        />

        <OrbitControls
          makeDefault
          enablePan
          enableZoom
          enableRotate
          minDistance={7.2}
          maxDistance={20}
          minPolarAngle={0.5}
          maxPolarAngle={1.32}
          target={[
            0,
            1.35,
            0,
          ]}
          dampingFactor={0.08}
          enableDamping
        />
      </Canvas>

      <div className="risk-surface-canvas-hud risk-surface-canvas-hud-top">
        <span>
          PORTFOLIO RISK HEAT MAP / 3D
        </span>

        <strong>
          {scenarioLabel(
            activeScenario,
          )}
        </strong>
      </div>

      {displayCell && (
        <div className="risk-surface-node-label">
          <span>
            {hoveredCell
              ? "HOVERED CELL"
              : "SELECTED CELL"}
          </span>

          <strong>
            {
              displayCell.assetLabel
            }{" "}
            ×{" "}
            {
              displayCell.strategyLabel
            }
          </strong>

          <small>
            RISK CONTRIBUTION{" "}
            {displayCell.value}
            /100
          </small>

          <small>
            BASE{" "}
            {
              displayCell.normalValue
            }{" "}
            · SCENARIO{" "}
            {
              displayCell.stressValue
            }
          </small>
        </div>
      )}

      <div className="risk-surface-heat-axis risk-surface-heat-axis-y">
        <span>HIGH</span>

        <strong>
          RISK CONTRIBUTION
        </strong>

        <span>LOW</span>
      </div>

      <div className="risk-surface-heat-axis risk-surface-heat-axis-x">
        <strong>
          ASSET CLASSES
        </strong>

        {ASSETS.map(
          (asset) => (
            <span
              key={asset.id}
            >
              {asset.label}
            </span>
          ),
        )}
      </div>

      <div className="risk-surface-heat-axis risk-surface-heat-axis-z">
        <strong>
          STRATEGIES
        </strong>

        {STRATEGIES.map(
          (strategy) => (
            <span
              key={strategy.id}
            >
              {strategy.label}
            </span>
          ),
        )}
      </div>

      <div className="risk-surface-heat-scale">
        <span>LOW</span>
        <i />

        <span>MODERATE</span>
        <i />

        <span>ELEVATED</span>
        <i />

        <span>HIGH</span>
      </div>

      <div className="risk-surface-canvas-hud risk-surface-canvas-hud-bottom">
        <span>
          DRAG TO ROTATE
        </span>

        <span>
          SCROLL TO ZOOM
        </span>

        <span>
          CLICK CELL TO INSPECT
        </span>
      </div>
    </div>
  );
}