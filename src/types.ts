export type TimeUnit = "minutes" | "hours" | "days" | "weeks" | "months" | "years"

export type Interval = {
  id: string
  quantity: number
  unit: TimeUnit
}
