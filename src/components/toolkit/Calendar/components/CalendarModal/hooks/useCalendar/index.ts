// External Libraries
import { useState } from 'react'

// Utils
import { getPresets, makeInitialContext } from './utils'

// Types
import type { BuildContext } from '@components/toolkit/Calendar/types'

export function useCalendar() {
  // Constants
  const presets = getPresets()

  // States
  const [context, setContext] = useState<BuildContext>(makeInitialContext)

  // Functions

  return {
    presets,
    context
  }
}
