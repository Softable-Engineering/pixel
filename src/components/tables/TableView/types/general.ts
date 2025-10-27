// Types
import type { CustomData } from '@components/tables/DataTable'
import type { DateColumnData, SelectColumnData, TextColumnData } from './rows'
import type {
  Actions,
  ColumnDef,
  DateColumn,
  TextColumn,
  NumberColumn,
  SelectColumn,
  FormulaColumn,
  CheckBoxColumn,
  MultiSelectColumn,
  ManagementHeaderParams
} from './columns'
import type { UpdateCellParams } from './cell'
import type { Locale } from 'src/services/MaskModule'
import type { TablePermissions } from './permission'
import type { DeepPartial } from './deepPartial'
import type { FormulaOptionColumn } from '../modals/FormulaModal/components/OptionsListPanel/types'

export type BaseColumn =
  | TextColumn
  | DateColumn
  | SelectColumn
  | NumberColumn
  | MultiSelectColumn
  | CheckBoxColumn
  | FormulaColumn

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
  enableResizeColumns?: boolean
  enableRowReordering?: boolean
  hasHorizontalDivider?: boolean
  enableColumnOrdering?: boolean
  // columns: CustomColumnDef<CustomData<T>>[]
  onReorder?: (ids: string[]) => Promise<void>
}

export type CustomColumnType<T> = ColumnDef<T> & {
  tableName?: string
}

export interface Props<T> extends DataTableProps<T> {
  locale: Locale
  viewOnly?: boolean
  actions?: Actions[]
  showResultsRow?: boolean
  columns: CustomColumnType<T>[]
  formulaColumns?: FormulaOptionColumn[]
  permissions?: DeepPartial<TablePermissions>
  onManagementHeader: (data: ManagementHeaderParams) => void
  onChangeCell?: (data: UpdateCellParams) => void
}
