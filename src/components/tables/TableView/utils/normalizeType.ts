// Types
import {
  ColumnType,
  type Column,
  type ColumnDef,
  type TextColumn,
  type DateColumn,
  type SelectColumn,
  type NumberColumn
} from '../types'

export function isRichText<T>(
  column: ColumnDef<T>
): column is Column<T> & TextColumn {
  return column.type === ColumnType.RICH_TEXT
}

export function isDate<T>(
  column: ColumnDef<T>
): column is Column<T> & DateColumn {
  return column.type === ColumnType.DATE
}

export function isSelect<T>(
  column: ColumnDef<T>
): column is Column<T> & SelectColumn {
  return column.type === ColumnType.SELECT
}

export function isNumber<T>(
  column: ColumnDef<T>
): column is ColumnDef<T> & NumberColumn {
  return column.type === ColumnType.NUMBER
}
