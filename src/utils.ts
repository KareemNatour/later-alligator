import type { Interval, TimeUnit } from "./types"

export function addInterval(date: Date, quantity: number, unit: TimeUnit): Date {
  const d = new Date(date)
  switch (unit) {
    case "minutes":
      d.setMinutes(d.getMinutes() + quantity)
      break
    case "hours":
      d.setHours(d.getHours() + quantity)
      break
    case "days":
      d.setDate(d.getDate() + quantity)
      break
    case "weeks":
      d.setDate(d.getDate() + quantity * 7)
      break
    case "months":
      d.setMonth(d.getMonth() + quantity)
      break
    case "years":
      d.setFullYear(d.getFullYear() + quantity)
      break
  }
  return d
}

export function calculateEndTime(startTime: Date, intervals: Interval[]): Date {
  return intervals.reduce(
    (acc, { quantity, unit }) => addInterval(acc, quantity, unit),
    new Date(startTime),
  )
}

export function formatDateTime(date: Date): string {
  return date.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

export const TIME_UNITS: { value: TimeUnit; label: string }[] = [
  { value: "minutes", label: "Minutes" },
  { value: "hours", label: "Hours" },
  { value: "days", label: "Days" },
  { value: "weeks", label: "Weeks" },
  { value: "months", label: "Months" },
  { value: "years", label: "Years" },
]
