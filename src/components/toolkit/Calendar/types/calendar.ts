// External Libraries
import type { PropsWithChildren } from 'react'

// Types
import type { DateOperator } from './dateFilter'
import type { DateRangeValue, PresetGroup, Variant } from './general'
import type { UseFollowElementPositionOptions } from 'src/hooks/useFollowElementPosition/types'

export interface CalendarMethods {
  open: () => void
  close: () => void
}

export * from './general'

export interface CalendarProps
  extends PropsWithChildren,
    UseFollowElementPositionOptions {
  locale: string
  value: DateRangeValue
  variant?: Variant
  presets?: PresetGroup[]
  allowPeriodSelection?: boolean
  onChange: (range: DateRangeValue, operator: DateOperator) => void
}
