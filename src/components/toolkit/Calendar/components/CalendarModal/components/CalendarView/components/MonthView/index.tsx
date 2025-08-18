// External Libraries
import type React from 'react'
import { useMemo, type ReactNode } from 'react'

// Components
import { Day } from './components/Day'
import { Typography } from '@components/toolkit/Typography'

// Hooks
import { useCalendarView } from './hooks/useCalendarView'

// Utils
import { MONTH_NAMES, WEEK_DAYS } from './constants'

// Styles
import { Container, ContainerDays } from './styles'

interface Props {
  year: number
  month: number
  value: number
  onChange?: (date: Date) => void
}

export const MonthView: React.FC<Props> = ({
  year,
  month,
  value,
  onChange
}) => {
  // Hooks
  const { monthCells } = useCalendarView(month, year)

  const days = useMemo(() => {
    return monthCells.map(
      ({ key, day, year: y, month: m, disabled, isOtherMonth }) => {
        return (
          <Day
            year={y}
            month={m}
            key={key}
            day={day}
            disabled={disabled}
            isOtherMonth={isOtherMonth}
            onChange={!disabled && onChange ? onChange : undefined}
          />
        )
      }
    )
  }, [monthCells, onChange])

  // Functions
  function getTitle() {
    return `${MONTH_NAMES[month]} de ${year}`
  }

  function renderWeekDays(): ReactNode[] {
    return WEEK_DAYS.map(day => (
      <Typography
        key={`week_day_${day}`}
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
