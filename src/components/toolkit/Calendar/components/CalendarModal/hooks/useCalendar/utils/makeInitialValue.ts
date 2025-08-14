// Types
import type { DateRange } from '@components/toolkit/Calendar/types'

export function makeInitialValue(): DateRange {
  return {
    start: new Date(),
    end: new Date()
  }
}
