// Types
import type { ColumnType } from './columns'

export interface TextColumnData {
  type: ColumnType.RICH_TEXT
  rich_text: string
}

export interface DateColumnData {
  type: ColumnType.DATE
  date: string
}

export interface SelectColumnData {
  type: ColumnType.SELECT
  select: string[]
}
