// Types
import type { BaseColumn } from './general'

export type Actions = 'new-column'

export enum ColumnType {
  DATE = 'date',
  PAGE = 'page',
  NUMBER = 'number',
  SELECT = 'select',
  RICH_TEXT = 'rich_text'
}

export type Column<T> = {
  id: string
  header: string
  accessorFn: (row: T) => string
}

export type ColumnDef<T> = BaseColumn & Column<T>

export interface RichTextFormat {
  bold?: boolean
  italic?: boolean
}

export interface DateFormat {
  format?: string
}

export interface NumberFormat {
  decimals?: number
}

export interface SelectOption {
  id: string
  name: string
  color: string
}

export interface Select {
  options: SelectOption[]
}

export interface TextColumn {
  type: ColumnType.RICH_TEXT
  rich_text: RichTextFormat
}

export interface DateColumn {
  type: ColumnType.DATE
  date: DateFormat
}

export interface SelectColumn {
  type: ColumnType.SELECT
  select: Select
}

export interface NumberColumn {
  type: ColumnType.NUMBER
  number: NumberFormat
}
