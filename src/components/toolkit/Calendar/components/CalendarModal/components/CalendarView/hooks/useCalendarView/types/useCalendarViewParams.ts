// Types
import type {
  Variant,
  DateRange,
  BuildContext
} from '@components/toolkit/Calendar/types'

export interface UseCalendarViewParams {
  variant: Variant
  dateRange: DateRange
  context: BuildContext
  visibleMonths?: number
}
