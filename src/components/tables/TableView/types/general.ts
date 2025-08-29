// Types
import type { CustomData } from '@components/tables/DataTable'
import type { DateColumnData, SelectColumnData, TextColumnData } from './rows'
import type {
  ColumnDef,
  DateColumn,
  TextColumn,
  NumberColumn,
  SelectColumn
} from './columns'

export type BaseColumn = TextColumn | DateColumn | SelectColumn | NumberColumn
export type BaseColumnData = TextColumnData | DateColumnData | SelectColumnData

export interface DataTableProps<T> {
  height?: number
  loading?: boolean
  fitWidth?: boolean
  borderColor?: string
  headerColor?: string
  data: CustomData<T>[]
  textColorHeader?: string
  canResetResize?: boolean
  enableSelection?: boolean
  hasVerticalDivider?: boolean
  hasHorizontalDivider?: boolean
  enableResizeColumns?: boolean
  enableColumnOrdering?: boolean
  // columns: CustomColumnDef<CustomData<T>>[]
  onReorder?: (ids: string[]) => Promise<void>
}

export interface Props<T> extends DataTableProps<T> {
  columns: ColumnDef<T>[]
}
