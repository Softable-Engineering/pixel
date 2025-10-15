import type { AccessorFnColumnDef } from '@tanstack/react-table'

export interface ColumnProps {
  columnId: string
}

export type CustomColumnDef<T> = AccessorFnColumnDef<T, unknown> & {
  result?: string
  onClick?: (row: T) => void
}

export interface BaseCustomData {
  id: string
}

export interface CustomData<T> {
  data: T extends BaseCustomData ? T : T & BaseCustomData
  onClick?: (row: T) => void
}

export interface Section<T> {
  name: string
  icon?: string
  data: CustomData<T>[]
}

interface BaseProps {
  height?: number
  hasVerticalDivider?: boolean
  hasHorizontalDivider?: boolean
  canResetResize?: boolean
  enableSelection?: boolean
  enableResizeColumns?: boolean
  enableColumnOrdering?: boolean
}

export interface SectionTableProps<T> extends BaseProps {
  sections: Section<T>[]
  columns: CustomColumnDef<Section<T>>
}

export interface DataTableProps<T> extends BaseProps {
  data: CustomData<T>[]
  columns: CustomColumnDef<CustomData<T>>
}

export type Props<T> = SectionTableProps<T> | DataTableProps<T>
