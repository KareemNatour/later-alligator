import { useState, useCallback } from "react"
import { v4 as uuidv4 } from "uuid"
import type { Interval, TimeUnit } from "./types"

export function useIntervals() {
  const [intervals, setIntervals] = useState<Interval[]>([])

  const addInterval = useCallback(() => {
    setIntervals((prev) => [
      ...prev,
      { id: uuidv4(), quantity: 1, unit: "hours" as TimeUnit },
    ])
  }, [])

  const removeInterval = useCallback((id: string) => {
    setIntervals((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setIntervals((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i)),
    )
  }, [])

  const updateUnit = useCallback((id: string, unit: TimeUnit) => {
    setIntervals((prev) => prev.map((i) => (i.id === id ? { ...i, unit } : i)))
  }, [])

  return { intervals, addInterval, removeInterval, updateQuantity, updateUnit }
}
