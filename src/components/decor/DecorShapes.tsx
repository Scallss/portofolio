interface ShapeProps {
  className?: string
  color?: string
  size?: number
}

/** A dashed-outline circle — decorative only, sits in otherwise-empty
 * margin space. Position it with the className (absolute + inset utilities). */
export function DashedCircle({ className, color = 'var(--chart-5)', size = 96 }: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="48"
        cy="48"
        r="46"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="5 6"
        opacity="0.35"
      />
    </svg>
  )
}

/** A small ring of dots — decorative only. */
export function RingDots({ className, color = 'var(--accent-amber)', size = 64 }: ShapeProps) {
  const dots = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2
    const r = size / 2 - 4
    return {
      cx: size / 2 + r * Math.cos(angle),
      cy: size / 2 + r * Math.sin(angle),
    }
  })
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r="2" fill={color} opacity="0.35" />
      ))}
    </svg>
  )
}
