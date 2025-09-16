// External Libraries
/** biome-ignore-all lint/a11y/useSemanticElements: <Not needed> */
import type React from 'react'

// Components
import { Calendar } from '@components/toolkit/Calendar'
import { Typography } from '@components/toolkit/Typography'

// Types
import type { BaseDate } from '../../types'

// Styles
import { Container } from './styles'
import type {
  CalendarMethods,
  DateRangeValue
} from '@components/toolkit/Calendar/types'
import { useRef } from 'react'

interface Props extends BaseDate {}

export const DateCell: React.FC<Props> = ({ value, onChange }) => {
  // Refs
  const calendarRef = useRef<CalendarMethods>(null)

  // Constants
  const dateRange: DateRangeValue = {
    start: value,
    end: value
  }

  // Functions
  function handleOpenCalendar() {
    calendarRef.current?.open()
  }

  function handleChangeDate(range: DateRangeValue) {
    onChange(range.start ?? '')
  }

  return (
    <Calendar
      ref={calendarRef}
      locale="pt-BR"
      variant="single"
      value={dateRange}
      onChange={handleChangeDate}
    >
      <Container onClick={handleOpenCalendar} tabIndex={0} role="button">
        <Typography variant="b2" $align="left">
          {value}
        </Typography>
      </Container>
    </Calendar>
  )
}
