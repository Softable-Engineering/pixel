export interface Pagination {
  page: number
  endReached: boolean
  isLoadingMore: boolean
  scrollEndThreshold?: number
  onGetPage?: (page: number) => void
}
