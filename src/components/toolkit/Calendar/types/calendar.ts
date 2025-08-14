// External Libraries
import type { PropsWithChildren } from 'react'

// Types
import type { DateRange } from './general'
import type { UseFollowElementPositionOptions } from 'src/hooks/useFollowElementPosition/types'

export interface CalendarMethods {
  open: () => void
  close: () => void
}

export interface CalendarProps
  extends PropsWithChildren,
    UseFollowElementPositionOptions {
  value: DateRange
  allowPeriodSelection?: boolean
  onChange: (range: DateRange) => void
}
