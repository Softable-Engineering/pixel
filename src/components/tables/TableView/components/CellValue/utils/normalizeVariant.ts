// Types
import type {
  Variant,
  BaseDate,
  BaseText,
  BaseNumber,
  BaseSelect,
  BaseMultiSelect
} from '../types'
import { ColumnType } from '@components/tables/TableView/types'

export function isBaseText(cell: Variant): cell is BaseText {
  return cell.type === ColumnType.RICH_TEXT
}

export function isBaseNumber(cell: Variant): cell is BaseNumber {
  return cell.type === ColumnType.NUMBER
}

export function isBaseSelect(cell: Variant): cell is BaseSelect {
  return cell.type === ColumnType.SELECT
}

export function isBaseDate(cell: Variant): cell is BaseDate {
  return cell.type === ColumnType.DATE
}

export function isBaseMultiSelect(cell: Variant): cell is BaseMultiSelect {
  return cell.type === ColumnType.MULTI_SELECT
}
