// External Libraries
import { useState } from 'react'

// Utils
import { getPresets, makeInitialContext } from './utils'

// Types
import type {
  Filters,
  DateRange,
  BuildContext,
  CalendarProps
} from '@components/toolkit/Calendar/types'

export function useCalendar({ value, onChange }: CalendarProps) {
  // Constants
  const presets = getPresets()

  // States
  const [valueRange, setValueRange] = useState<DateRange>(value)
  const [context, setContext] = useState<BuildContext>(makeInitialContext)

  // Functions
  function handleChangeFilters(change: Partial<Filters>) {
    setContext(prev => ({
      ...prev,
      filters: {
        ...prev.filters,
        ...change
      }
    }))
  }

  return {
    presets,
    context,
    valueRange,
    handleChangeFilters,
    handleChangeValue: setValueRange
  }
}
