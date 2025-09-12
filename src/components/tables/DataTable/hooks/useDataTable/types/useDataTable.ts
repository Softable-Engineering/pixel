import type { CustomColumnDef, CustomData } from '../../../types'

export interface UseDataTableParams<T> {
  data: CustomData<T>[]
  enableRowReordering?: boolean
  enableColumnOrdering?: boolean
  columns: CustomColumnDef<CustomData<T>>[]
  onReorder?: (ids: string[]) => Promise<void>
  onReorderRows?: (ids: string[]) => Promise<void>
}
