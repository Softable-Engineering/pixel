export interface Month {
  year: number
  month: number
}

export interface DayCell {
  key: string
  day: number
  year: number
  month: number
  disabled: boolean
  isOtherMonth: boolean
}
