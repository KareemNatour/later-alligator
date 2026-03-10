import type { Interval } from "./types"
import { TIME_UNITS } from "./utils"

type Props = {
  interval: Interval
  onQuantityChange: (id: string, quantity: number) => void
  onUnitChange: (id: string, unit: Interval["unit"]) => void
  onRemove: (id: string) => void
}

export function IntervalRow({ interval, onQuantityChange, onUnitChange, onRemove }: Props) {
  return (
    <div className="interval-row">
      <input
        type="number"
        className="quantity-input"
        value={interval.quantity}
        min={1}
        onChange={(e) => {
          const val = parseInt(e.target.value, 10)
          if (!isNaN(val) && val >= 1) onQuantityChange(interval.id, val)
        }}
      />
      <select
        className="unit-select"
        value={interval.unit}
        onChange={(e) => onUnitChange(interval.id, e.target.value as Interval["unit"])}
      >
        {TIME_UNITS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <button className="remove-btn" onClick={() => onRemove(interval.id)} aria-label="Remove interval">
        ✕
      </button>
    </div>
  )
}
