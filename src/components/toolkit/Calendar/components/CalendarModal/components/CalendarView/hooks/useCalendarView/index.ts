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
  const [months, setMonths] = useState<MonthView[]>(getMonthsView)

  // UseEffects
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setMonths(getMonthsView)
  }, [dateRange])

  // Functions
  function getMonthsView() {
    const currentMonth = startOfMonth(referenceDate)
    const nextMonth = startOfMonth(context.utils.addMonths(referenceDate, 1))

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

  return { monthsView: months }
}
