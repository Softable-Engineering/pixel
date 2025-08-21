// External Libraries
import { useEffect, useState } from 'react'

// Types
import type { MonthView, UseCalendarViewParams } from './types'

export function useCalendarView({
  context,
  variant,
  dateRange,
  visibleMonths
}: UseCalendarViewParams) {
  // Constants
  const prevStepValue = -1
  const nextStepValue = variant === 'group' ? 0 : 1

  const qtdMonthsValue = normalizeVisibleMonths()
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

  function normalizeVisibleMonths() {
    if (variant === 'group' && visibleMonths) {
      return visibleMonths >= 2 ? visibleMonths : 2
    }
    if (variant === 'single' && visibleMonths) {
      return visibleMonths >= 1 ? visibleMonths : 1
    }

    if (variant === 'single') return 1
    if (variant === 'group') return 2

    return 2
  }

  function getMonthsView(reference: Date) {
    return Array.from({ length: qtdMonthsValue }, (_, index) => {
      const date = context.utils.addMonths(reference, index)

      return {
        year: date.getFullYear(),
        month: date.getMonth()
      }
    })
  }

  function handleNextMonths() {
    const secondMonthIndex = months.length >= 2 ? 1 : 0

    const date = new Date(
      months[secondMonthIndex].year,
      months[secondMonthIndex].month,
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
