// External Libraries
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <no> */
import type React from 'react'
import { useMemo, type ReactNode } from 'react'

// Components
import { Day } from './components/Day'
import { Typography } from '@components/toolkit/Typography'

// Hooks
import { useCalendarView } from './hooks/useCalendarView'

// Utils
import { MONTH_NAMES, WEEK_DAYS } from './constants'

// Types
import type {
  DateRange,
  BuildContext
} from '@components/toolkit/Calendar/types'

// Styles
import { Container, ContainerDays } from './styles'

interface Props {
  year: number
  month: number
  dateRange: DateRange
  context: BuildContext
  onChangeValue?: (range: Partial<DateRange>) => void
}

export const MonthView: React.FC<Props> = ({
  year,
  month,
  context,
  dateRange,
  onChangeValue
}) => {
  // Hooks
  const { monthCells, getVariant, handleChangeValue } = useCalendarView({
    context,
    dateRange,
    currentYear: year,
    currentMonth: month,
    onChangeValue
  })

  // biome-ignore lint/correctness/useExhaustiveDependencies: <no>
  const days = useMemo(() => {
    return monthCells.map(
      ({ key, day, year: y, month: m, disabled, isOtherMonth }) => {
        const variant = getVariant(day, month, year)

        return (
          <Day
            year={y}
            month={m}
            key={key}
            day={day}
            variant={variant}
            disabled={disabled}
            isOtherMonth={isOtherMonth}
            onChange={handleChangeValue}
          />
        )
      }
    )
  }, [monthCells, onChangeValue])

  // Functions
  function getTitle() {
    return `${MONTH_NAMES[month]} de ${year}`
  }

  function renderWeekDays(): ReactNode[] {
    return WEEK_DAYS.map((day, index) => (
      <Typography
        key={`week_day_${day}_${month}_${year}_${index}`}
        variant="b2"
        fontWeight="bold"
        $align="center"
        color={'var(--text-color)'}
      >
        {day}
      </Typography>
    ))
  }
  return (
    <Container>
      <Typography
        variant="b2"
        fontWeight="bold"
        $align="center"
        color="var(--text-color)"
      >
        {getTitle()}
      </Typography>

      <ContainerDays>
        {renderWeekDays()}
        {days}
      </ContainerDays>
    </Container>
  )
}
