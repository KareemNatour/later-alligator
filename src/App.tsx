import { useMemo } from "react"
import { useIntervals } from "./useIntervals"
import { IntervalRow } from "./IntervalRow"
import { AnalogClock } from "./AnalogClock"
import { AnimatedBackground } from "./AnimatedBackground"
import { calculateEndTime, formatDateTime } from "./utils"

function App() {
  const startTime = useMemo(() => new Date(), [])
  const { intervals, addInterval, removeInterval, updateQuantity, updateUnit } = useIntervals()

  const endTime = useMemo(
    () => calculateEndTime(startTime, intervals),
    [startTime, intervals],
  )

  return (
    <div className="app">
      <AnimatedBackground />
      <header className="app-header">
        <h1>🐊 Later Alligator</h1>
        <p className="tagline">How far away is "later"?</p>
      </header>

      <main className="app-main">
        <section className="time-card start-card">
          <div className="time-label">Start Time</div>
          <div className="time-value">{formatDateTime(startTime)}</div>
        </section>

        <section className="intervals-section">
          <div className="intervals-header">
            <h2>Add Intervals</h2>
            <button className="add-btn" onClick={addInterval}>
              + Add Interval
            </button>
          </div>

          {intervals.length === 0 ? (
            <p className="empty-hint">No intervals yet — end time matches start time.</p>
          ) : (
            <div className="intervals-list">
              {intervals.map((interval) => (
                <IntervalRow
                  key={interval.id}
                  interval={interval}
                  onQuantityChange={updateQuantity}
                  onUnitChange={updateUnit}
                  onRemove={removeInterval}
                />
              ))}
            </div>
          )}
        </section>

        <section className="time-card end-card">
          <div className="time-label">End Time</div>
          <div className="time-value">{formatDateTime(endTime)}</div>
          <AnalogClock date={endTime} />
        </section>
      </main>
    </div>
  )
}

export default App
