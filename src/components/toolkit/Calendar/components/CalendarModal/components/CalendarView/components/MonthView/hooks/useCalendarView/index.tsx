// Types
import type { DayCell } from './types'

const TOTAL_CELLS = 42

export function useCalendarView(currentMonth: number, currentYear: number) {
  // Constants
  const monthCells = getCells(currentYear, currentMonth)

  // States
  function getCells(year: number, month: number): DayCell[] {
    const firstDayOfWeek = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const daysInPreviousMonth = new Date(year, month, 0).getDate()
    const result: DayCell[] = []

    for (let i = 0; i < firstDayOfWeek; i++) {
      const prevMonth = month === 0 ? 11 : month - 1
      const prevYear = month === 0 ? year - 1 : year
      const day = daysInPreviousMonth - firstDayOfWeek + i + 1
      result.push({
        key: `empty_day_before_month_${i}`,
        day,
        year: prevYear,
        month: prevMonth,
        disabled: true,
        isOtherMonth: true
      })
    }

    for (let day = 1; day <= daysInMonth; day++) {
      result.push({
        key: `day_${day}`,
        day,
        year,
        month,
        disabled: false,
        isOtherMonth: false
      })
    }

    while (result.length < TOTAL_CELLS) {
      const nextDay = result.length - (firstDayOfWeek + daysInMonth) + 1
      const nextMonth = month === 11 ? 0 : month + 1
      const nextYear = month === 11 ? year + 1 : year
      result.push({
        key: `empty_day_after_month_${nextDay}`,
        day: nextDay,
        year: nextYear,
        month: nextMonth,
        disabled: true,
        isOtherMonth: true
      })
    }

    return result
  }

  return { monthCells, getCells }
}
