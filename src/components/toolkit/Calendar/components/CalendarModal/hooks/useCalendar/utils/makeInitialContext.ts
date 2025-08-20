// Types
import type { Filters, BuildContext } from '@components/toolkit/Calendar/types'

// Utils
import { getAdapters } from './dateAdapter/getAdapters'

const MIN = new Date(-8640000000000000)
const MAX = new Date(8640000000000000)

function getFilters(): Filters {
  return {
    inclusive: true,
    operator: 'range'
  }
}

export function makeInitialContext(
  onChangeFilters: (change: Partial<Filters>) => void
): BuildContext {
  return {
    minDate: MIN,
    maxDate: MAX,
    now: new Date(),
    weekStartsOn: 0,
    utils: getAdapters(),
    filters: getFilters(),
    onChangeFilters
  }
}
