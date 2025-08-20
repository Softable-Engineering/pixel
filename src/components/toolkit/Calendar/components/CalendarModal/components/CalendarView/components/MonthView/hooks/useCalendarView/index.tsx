// Types
import type { Variant } from '../../components/Day/types'
import type { DayCell, UseCalendarViewParams } from './types'

const TOTAL_CELLS = 42

export function useCalendarView({
  context,
  dateRange,
  currentYear,
  currentMonth,
  onChangeValue
}: UseCalendarViewParams) {
  // Constants
  const monthCells = getCells(currentYear, currentMonth)

  // Functions
  function handleChangeValue(newDate: Date) {
    const isSameDate = dateRange.end.getDate() === dateRange.start.getDate()
    const isBeforeDate = newDate.getTime() < dateRange.start.getTime()
    const isAfterDate = newDate.getTime() > dateRange.end.getTime()

    if (context.filters.operator !== 'range') {
      return onChangeValue?.({ start: newDate, end: newDate })
    }

    if (isSameDate && isBeforeDate) {
      return onChangeValue?.({ start: newDate })
    }

    if (isSameDate && isAfterDate) {
      return onChangeValue?.({ end: newDate })
    }

    if (!isBeforeDate && !isAfterDate) {
      return onChangeValue?.({ start: newDate, end: newDate })
    }

    if (isBeforeDate) {
      return onChangeValue?.({ start: newDate, end: dateRange.end })
    }

    if (isAfterDate) {
      return onChangeValue?.({ start: dateRange.start, end: newDate })
    }
  }

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
        key: `day_${day}_${month}_${year}`,
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

  function getVariant(day: number, month: number, year: number): Variant {
    const startDate = new Date(
      dateRange.start.getFullYear(),
      dateRange.start.getMonth(),
      dateRange.start.getDate()
    )
    const endDate = new Date(
      dateRange.end.getFullYear(),
      dateRange.end.getMonth(),
      dateRange.end.getDate()
    )
    const currentDate = new Date(year, month, day)

    if (
      currentDate.getTime() === startDate.getTime() &&
      currentDate.getTime() === endDate.getTime()
    ) {
      return 'single'
    }

    if (currentDate.getTime() === startDate.getTime()) {
      return 'start'
    }

    if (currentDate.getTime() === endDate.getTime()) {
      return 'end'
    }

    if (
      currentDate.getTime() > startDate.getTime() &&
      currentDate.getTime() < endDate.getTime()
    ) {
      return 'middle'
    }

    return 'none'
  }

  return {
    monthCells,
    getCells,
    getVariant,
    handleChangeValue
  }
}
