// Utils
import { DEFAULT_SCROLL_END_THRESHOLD } from '../constants'

// Types
import type { Pagination } from '@components/toolkit/ScrollPaginationContainer/types'

export function getPaginationParams(pagination?: Pagination): Pagination {
  if (!pagination) return makeDefaultPagination()

  return pagination
}

function makeDefaultPagination(): Pagination {
  return {
    page: 1,
    endReached: true,
    isLoadingMore: false,
    scrollEndThreshold: DEFAULT_SCROLL_END_THRESHOLD
  }
}
