interface Bar {
  label: string
  sublabel: string
  value: number
  /** part of this signal-based work (vs. the prior image-based baseline) */
  mine?: boolean
  highlight?: boolean
}

const bars: Bar[] = [
  { label: 'Prior baseline', sublabel: '2D CNN on ECG image', value: 0.588 },
  { label: 'Single model', sublabel: 'This work, hierarchical', value: 0.6201, mine: true },
  {
    label: 'Ensemble',
    sublabel: 'This work, cross-arch',
    value: 0.6354,
    mine: true,
    highlight: true,
  },
]

const AXIS_MAX = 0.7
const CHART_W = 480
const CHART_H = 300
const BAR_W = 88
const GAP = 48
const BASELINE_Y = 240
const TOP_Y = 40

/**
 * Static (non-interactive) results chart for the Mitral Valve Classification
 * research card — macro F1 across the prior baseline, the best single model,
 * and the final cross-architecture ensemble. No patient data is shown, only
 * aggregate metrics.
 */
export function MitralResultsChart() {
  const startX = (CHART_W - (bars.length * BAR_W + (bars.length - 1) * GAP)) / 2

  return (
    <svg
      viewBox={`0 0 ${CHART_W} ${CHART_H}`}
      role="img"
      aria-label="Macro F1 comparison: prior image-based baseline 0.588, this work's single model 0.6201, this work's final ensemble 0.6354"
      className="h-full w-full"
    >
      <title>Macro F1 — prior image-based baseline vs. this signal-based work's single model and ensemble</title>

      {/* recessive gridlines at 0.0 / 0.35 / 0.7 */}
      {[0, 0.35, 0.7].map((tick) => {
        const y = BASELINE_Y - (tick / AXIS_MAX) * (BASELINE_Y - TOP_Y)
        return (
          <line
            key={tick}
            x1={startX - 16}
            x2={CHART_W - (startX - 16)}
            y1={y}
            y2={y}
            stroke="var(--border)"
            strokeWidth={1}
          />
        )
      })}

      {bars.map((bar, i) => {
        const x = startX + i * (BAR_W + GAP)
        const barH = (bar.value / AXIS_MAX) * (BASELINE_Y - TOP_Y)
        const y = BASELINE_Y - barH
        const fill = bar.highlight ? 'var(--badge-blue)' : bar.mine ? 'var(--chart-5)' : 'var(--chart-4)'

        return (
          <g key={bar.label}>
            <rect x={x} y={y} width={BAR_W} height={barH} rx={4} fill={fill} />
            {/* square off the bottom corners of the rounded rect against the baseline */}
            <rect x={x} y={BASELINE_Y - 4} width={BAR_W} height={4} fill={fill} />

            <text
              x={x + BAR_W / 2}
              y={y - 12}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize={20}
              fontWeight={500}
              fill="var(--foreground)"
            >
              {bar.value.toFixed(3)}
            </text>

            <text
              x={x + BAR_W / 2}
              y={BASELINE_Y + 24}
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontSize={13}
              fontWeight={600}
              fill="var(--foreground)"
            >
              {bar.label}
            </text>
            <text
              x={x + BAR_W / 2}
              y={BASELINE_Y + 42}
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontSize={11}
              fill="var(--muted-foreground)"
            >
              {bar.sublabel}
            </text>
          </g>
        )
      })}

      <text
        x={startX - 16}
        y={24}
        fontFamily="var(--font-sans)"
        fontSize={12}
        fontWeight={600}
        fill="var(--muted-foreground)"
      >
        Macro F1, heldout test set (n = 3,617)
      </text>
    </svg>
  )
}
