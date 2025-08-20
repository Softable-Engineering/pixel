// External Libraries
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <no> */
import type React from 'react'
import { useMemo, type ReactNode } from 'react'

// Components
import { Day } from './components/Day'
import { ArrowButton } from './components/ArrowButton'
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
import { Container, ContainerDays, DummyButton, Row } from './styles'

interface Props {
  year: number
  month: number
  dateRange: DateRange
  isLastMonth: boolean
  isStartMonth: boolean
  context: BuildContext
  handleNextMonths: () => void
  handlePrevMonths: () => void
  onChangeValue?: (range: Partial<DateRange>) => void
}

export const MonthView: React.FC<Props> = ({
  year,
  month,
  context,
  dateRange,
  isLastMonth,
  isStartMonth,
  onChangeValue,
  handleNextMonths,
  handlePrevMonths
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
      <Row>
        {isStartMonth ? (
          <ArrowButton variant="left" onClick={handlePrevMonths} />
        ) : (
          <DummyButton />
        )}

        <Typography
          variant="b2"
          fontWeight="bold"
          $align="center"
          color="var(--text-color)"
        >
          {getTitle()}
        </Typography>

        {isLastMonth ? (
          <ArrowButton variant="right" onClick={handleNextMonths} />
        ) : (
          <DummyButton />
        )}
      </Row>

      <ContainerDays>
        {renderWeekDays()}
        {days}
      </ContainerDays>
    </Container>
  )
}
