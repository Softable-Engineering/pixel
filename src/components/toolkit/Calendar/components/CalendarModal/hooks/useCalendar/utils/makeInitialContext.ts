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

export function makeInitialContext(
  onChangeFilters: (change: Partial<Filters>) => void,
  variant: Variant
): BuildContext {
  return {
    minDate: MIN,
    maxDate: MAX,
    now: new Date(),
    weekStartsOn: 0,
    utils: getAdapters(),
    filters: getFilters(variant),
    onChangeFilters
  }
}
