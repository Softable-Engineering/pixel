// External Libraries
import type { PropsWithChildren } from 'react'

// Types
import type { DateRangeValue, PresetGroup } from './general'
import type { UseFollowElementPositionOptions } from 'src/hooks/useFollowElementPosition/types'

export interface CalendarMethods {
  open: () => void
  close: () => void
}

export interface CalendarProps
  extends PropsWithChildren,
    UseFollowElementPositionOptions {
  locale: string
  value: DateRangeValue
  presets?: PresetGroup[]
  allowPeriodSelection?: boolean
  onChange: (range: DateRangeValue) => void
}
