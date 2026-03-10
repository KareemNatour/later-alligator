type Props = {
  date: Date
}

export function AnalogClock({ date }: Props) {
  const hours = date.getHours() % 12
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const secondDeg = seconds * 6
  const minuteDeg = minutes * 6 + seconds * 0.1
  const hourDeg = hours * 30 + minutes * 0.5

  const cx = 50
  const cy = 50
  const r = 46

  return (
    <svg viewBox="0 0 100 100" className="analog-clock" aria-label="Analog clock">
      {/* Face */}
      <circle cx={cx} cy={cy} r={r} className="clock-face" />
      <circle cx={cx} cy={cy} r={r} className="clock-rim" />

      {/* Hour ticks */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const inner = 38
        const outer = 43
        return (
          <line
            key={i}
            x1={cx + inner * Math.sin(angle)}
            y1={cy - inner * Math.cos(angle)}
            x2={cx + outer * Math.sin(angle)}
            y2={cy - outer * Math.cos(angle)}
            className="tick-major"
          />
        )
      })}

      {/* Minute ticks */}
      {Array.from({ length: 60 }, (_, i) => {
        if (i % 5 === 0) return null
        const angle = (i * 6 * Math.PI) / 180
        const inner = 40
        const outer = 43
        return (
          <line
            key={i}
            x1={cx + inner * Math.sin(angle)}
            y1={cy - inner * Math.cos(angle)}
            x2={cx + outer * Math.sin(angle)}
            y2={cy - outer * Math.cos(angle)}
            className="tick-minor"
          />
        )
      })}

      {/* Hour hand */}
      <line
        x1={cx}
        y1={cy}
        x2={cx + 24 * Math.sin((hourDeg * Math.PI) / 180)}
        y2={cy - 24 * Math.cos((hourDeg * Math.PI) / 180)}
        className="hand hand-hour"
      />

      {/* Minute hand */}
      <line
        x1={cx}
        y1={cy}
        x2={cx + 34 * Math.sin((minuteDeg * Math.PI) / 180)}
        y2={cy - 34 * Math.cos((minuteDeg * Math.PI) / 180)}
        className="hand hand-minute"
      />

      {/* Second hand */}
      <line
        x1={cx + 8 * Math.sin(((secondDeg + 180) * Math.PI) / 180)}
        y1={cy - 8 * Math.cos(((secondDeg + 180) * Math.PI) / 180)}
        x2={cx + 36 * Math.sin((secondDeg * Math.PI) / 180)}
        y2={cy - 36 * Math.cos((secondDeg * Math.PI) / 180)}
        className="hand hand-second"
      />

      {/* Center cap */}
      <circle cx={cx} cy={cy} r={2} className="clock-center" />
    </svg>
  )
}
