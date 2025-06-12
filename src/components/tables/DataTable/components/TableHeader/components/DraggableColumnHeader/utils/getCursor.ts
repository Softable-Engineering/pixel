interface Params {
  canResetResize: boolean
  enableResizeColumns: boolean
  enableColumnOrdering: boolean
}

export function getCursor({
  canResetResize,
  enableResizeColumns,
  enableColumnOrdering
}: Params) {
  if (enableColumnOrdering) return 'move'
  if (canResetResize && enableResizeColumns) return 'pointer'
  return 'default'
}
