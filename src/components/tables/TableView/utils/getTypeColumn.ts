// Utils
import { isDate, isNumber, isRichText, isSelect } from './normalizeType'

// Types
import { type ColumnDef, ColumnType } from '../types'

export function getTypeColumn<T>(column: ColumnDef<T>): ColumnType {
  if (isDate(column)) return ColumnType.DATE
  if (isSelect(column)) return ColumnType.SELECT
  if (isNumber(column)) return ColumnType.NUMBER
  if (isRichText(column)) return ColumnType.RICH_TEXT

  return ColumnType.RICH_TEXT
}
