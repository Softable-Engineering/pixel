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

interface Props extends CalendarProps {
  onClose: () => void
}

export function useCalendar({ value, presets, onClose, onChange }: Props) {
  // Constants
  const calendarPresets = presets ?? getPresets()

  // States
  const [valueRange, setValueRange] = useState<DateRange>(parseDateValue())
  const [context, setContext] = useState<BuildContext>(
    makeInitialContext(handleChangeFilters)
  )

  // Functions
  function parseDateValue() {
    return {
      start: value.start ? new Date(value.start) : undefined,
      end: value.end ? new Date(value.end) : undefined
    }
  }

  function handleChangeFilters(change: Partial<Filters>) {
    if (change.operator !== 'range')
      handleChangeDateRange({
        start: new Date(),
        end: new Date()
      })

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

  function clearValue() {
    setValueRange({
      start: undefined,
      end: undefined
    })
    setContext(makeInitialContext(handleChangeFilters))
  }

  function applyValue() {
    onChange?.({
      start: valueRange?.start?.toISOString(),
      end: valueRange?.end?.toISOString()
    })
    onClose()
  }

  return {
    context,
    valueRange,
    presets: calendarPresets,
    clearValue,
    applyValue,
    handleChangeFilters,
    handleChangeDateRange
  }
}
