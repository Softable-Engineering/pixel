// External Libraries
import { useEffect, useState } from 'react'

// Utils
import { startOfMonth } from '../../../../hooks/useCalendar/utils'

// Types
import type { MonthView, UseCalendarViewParams } from './types'

export function useCalendarView({ context, dateRange }: UseCalendarViewParams) {
  // Constants
  const referenceDate = dateRange.start || context.now

  // States
  const [months, setMonths] = useState<MonthView[]>(
    getMonthsView(referenceDate)
  )

  // UseEffects
  // biome-ignore lint/correctness/useExhaustiveDependencies: <no>
  useEffect(() => {
    setMonths(getMonthsView(referenceDate))
  }, [])

  // Functions
  function getMonthsView(reference: Date) {
    const currentMonth = startOfMonth(reference)
    const nextMonth = startOfMonth(context.utils.addMonths(reference, 1))

    return [
      {
        year: currentMonth.getFullYear(),
        month: currentMonth.getMonth()
      },
      {
        year: nextMonth.getFullYear(),
        month: nextMonth.getMonth()
      }
    ]
  }

  function handleNextMonths() {
    const date = new Date(months[1].year, months[1].month, 1)
    const nextMonth = context.utils.addMonths(date, 0)

    setMonths(getMonthsView(nextMonth))
  }

  function handlePrevMonths() {
    const date = new Date(months[0].year, months[0].month, 1)
    const prevMonth = context.utils.addMonths(date, -1)

    setMonths(getMonthsView(prevMonth))
  }

  return { monthsView: months, handleNextMonths, handlePrevMonths }
}
