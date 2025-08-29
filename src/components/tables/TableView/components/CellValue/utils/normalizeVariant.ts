// Types
import type {
  Variant,
  BaseDate,
  BaseText,
  BaseNumber,
  BaseSelect
} from '../types'

export function isBaseText(cell: Variant): cell is BaseText {
  return 'text' in cell
}

export function isBaseNumber(cell: Variant): cell is BaseNumber {
  return 'number' in cell
}

export function isBaseSelect(cell: Variant): cell is BaseSelect {
  return 'selected' in cell
}

export function isBaseDate(cell: Variant): cell is BaseDate {
  return 'date' in cell
}
