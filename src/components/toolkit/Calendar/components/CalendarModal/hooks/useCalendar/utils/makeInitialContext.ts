// Types
import type {
  Filters,
  Variant,
  BuildContext
} from '@components/toolkit/Calendar/types'

// Utils
import { getAdapters } from './dateAdapter/getAdapters'

const MIN = new Date(-8640000000000000)
const MAX = new Date(8640000000000000)

function getFilters(variant: Variant): Filters {
  const operator = variant === 'single' ? 'equals' : 'range'

  return {
    inclusive: true,
    operator
  }
}

interface MakeInitialContextOptions {
  disableFutureDates?: boolean
  disablePastDates?: boolean
}

export function makeInitialContext(
  onChangeFilters: (change: Partial<Filters>) => void,
  variant: Variant,
  options?: MakeInitialContextOptions
): BuildContext {
  const today = new Date()
  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  )

  return {
    minDate: options?.disablePastDates ? startOfToday : MIN,
    maxDate: options?.disableFutureDates ? startOfToday : MAX,
    now: today,
    weekStartsOn: 0,
    utils: getAdapters(),
    filters: getFilters(variant),
    onChangeFilters
  }
}
