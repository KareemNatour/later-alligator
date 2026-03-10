const BUBBLES = Array.from({ length: 12 }, (_, i) => i)

export function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      {BUBBLES.map((i) => (
        <span key={i} className={`bubble bubble-${i}`} />
      ))}
    </div>
  )
}
