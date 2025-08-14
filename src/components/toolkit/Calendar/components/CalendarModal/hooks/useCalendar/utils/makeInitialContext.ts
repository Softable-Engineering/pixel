// Types
import type { BuildContext, Filters } from '@components/toolkit/Calendar/types'

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

export function makeInitialContext(): BuildContext {
  return {
    minDate: MIN,
    maxDate: MAX,
    now: new Date(),
    weekStartsOn: 0,
    utils: getAdapters(),
    filters: getFilters()
  }
}
