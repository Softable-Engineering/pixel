// External Libraries
import type React from 'react'

// Components
import { MonthView } from './components/MonthView'

// Hooks
import { useCalendarView } from './hooks/useCalendarView'

// Types
import type {
  DateRange,
  BuildContext
} from '@components/toolkit/Calendar/types'

// Styles
import { Container } from './styles'

interface Props {
  dateRange: DateRange
  context: BuildContext
  onChangeValue: (range: Partial<DateRange>) => void
}

export const CalendarView: React.FC<Props> = ({
  dateRange,
  context,
  onChangeValue
}) => {
  // Hooks
  const { monthsView } = useCalendarView({ context, dateRange })

  // Functions
  function renderMonthsView() {
    return monthsView.map(({ month, year }) => {
      return (
        <MonthView
          key={`${month}_${year}`}
          year={year}
          month={month}
          context={context}
          dateRange={dateRange}
          onChangeValue={onChangeValue}
        />
      )
    })
  }

  return <Container>{renderMonthsView()}</Container>
}
