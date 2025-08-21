// External Libraries
import { useEffect, useState } from 'react'

// Types
import type { MonthView, UseCalendarViewParams } from './types'

export function useCalendarView({
  context,
  variant,
  dateRange
}: UseCalendarViewParams) {
  // Constants
  const prevStepValue = -1
  const nextStepValue = variant === 'group' ? 0 : 1

  const qtdMonths = variant === 'group' ? 2 : 1
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
    return Array.from({ length: qtdMonths }, (_, index) => {
      const date = context.utils.addMonths(reference, index)

      return {
        year: date.getFullYear(),
        month: date.getMonth()
      }
    })
  }

  function handleNextMonths() {
    const lastMonthIndex = months.length - 1

    const date = new Date(
      months[lastMonthIndex].year,
      months[lastMonthIndex].month,
      1
    )
    const nextMonth = context.utils.addMonths(date, nextStepValue)

    setMonths(getMonthsView(nextMonth))
  }

  function handlePrevMonths() {
    const date = new Date(months[0].year, months[0].month, 1)
    const prevMonth = context.utils.addMonths(date, prevStepValue)

    setMonths(getMonthsView(prevMonth))
  }

  return { monthsView: months, handleNextMonths, handlePrevMonths }
}
