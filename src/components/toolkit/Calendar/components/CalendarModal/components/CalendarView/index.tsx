// External Libraries
import type React from 'react'

// Components
import { MonthView } from './components/MonthView'

// Hooks
import { useCalendarView } from './hooks/useCalendarView'

// Types
import type {
  Variant,
  DateRange,
  BuildContext
} from '@components/toolkit/Calendar/types'

// Styles
import { Container } from './styles'

interface Props {
  variant: Variant
  dateRange: DateRange
  context: BuildContext
  onChangeValue: (range: Partial<DateRange>) => void
}

export const CalendarView: React.FC<Props> = ({
  context,
  variant,
  dateRange,
  onChangeValue
}) => {
  // Hooks
  const { monthsView, handleNextMonths, handlePrevMonths } = useCalendarView({
    context,
    variant,
    dateRange
  })

  // Functions
  function renderMonthsView() {
    return monthsView.map(({ month, year }, index) => {
      const isStartMonth = index === 0
      const isLastMonth = index === monthsView.length - 1

      return (
        <MonthView
          key={`${month}_${year}`}
          year={year}
          month={month}
          context={context}
          dateRange={dateRange}
          isLastMonth={isLastMonth}
          isStartMonth={isStartMonth}
          onChangeValue={onChangeValue}
          handleNextMonths={handleNextMonths}
          handlePrevMonths={handlePrevMonths}
        />
      )
    })
  }

  return <Container>{renderMonthsView()}</Container>
}
