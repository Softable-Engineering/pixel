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
  const [context, setContext] = useState<BuildContext>(
    makeInitialContext(handleChangeFilters)
  )

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

  function handleChangeDateRange(change: Partial<DateRange>) {
    setValueRange(prev => ({
      ...prev,
      ...change
    }))
  }

  return {
    presets,
    context,
    valueRange,
    handleChangeFilters,
    handleChangeDateRange
  }
}
