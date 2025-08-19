// Types
import type {
  DateRange,
  BuildContext
} from '@components/toolkit/Calendar/types'

export interface UseCalendarViewParams {
  currentYear: number
  dateRange: DateRange
  currentMonth: number
  context: BuildContext
  onChangeValue?: (range: Partial<DateRange>) => void
}

export interface Month {
  year: number
  month: number
}

export interface DayCell {
  key: string
  day: number
  year: number
  month: number
  disabled: boolean
  isOtherMonth: boolean
}
