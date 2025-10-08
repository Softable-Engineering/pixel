// Utils
import {
  normalizeArray,
  normalizeNumber,
  normalizeString
} from './normalizeValues'
import { type Locale, MaskModule, MaskType } from 'src/services/MaskModule'

// Types
import type { CustomData } from '@components/tables/DataTable'
import { type ColumnDef, ColumnType } from '../types'
import type { Column } from '../modals/FormulaModal/types'

interface Params<T> {
  locale: Locale
  row: CustomData<T>
  columns: ColumnDef<T>[]
}

interface ParamsResolveColumn<T> {
  locale: Locale
  row: CustomData<T>
  column: ColumnDef<T>
}

export function resolveRow<T>({ row, locale, columns }: Params<T>): Column[] {
  return columns.map(column => resolveColumn({ column, row, locale }))
}

function resolveColumn<T>({
  column,
  row,
  locale
}: ParamsResolveColumn<T>): Column {
  const value = column.accessorFn(row.data)

  const isSelect =
    column.type === ColumnType.MULTI_SELECT || column.type === ColumnType.SELECT

  if (column.type === ColumnType.NUMBER) {
    const numberMask = MaskModule.getMask(locale, MaskType.INTEGER)
    const newValue = numberMask?.format(value as string) ?? value

    return {
      id: column.id,
      label: column.header,
      type: ColumnType.NUMBER,
      value: normalizeNumber(newValue)
    }
  }

  if (column.type === ColumnType.PHONE) {
    const phoneMask = MaskModule.getMask(locale, MaskType.PHONE)
    const newValue = phoneMask?.format(value as string) ?? value

    return {
      id: column.id,
      label: column.header,
      type: ColumnType.PHONE,
      text: normalizeString(newValue)
    }
  }

  if (isSelect) {
    const options = column.select.options
    const normalizedValue = normalizeArray(value)
    const newValue = normalizedValue
      .map(item => options.find(o => o.id === item)?.name)
      .filter(x => x !== undefined)

    return {
      id: column.id,
      select: newValue,
      type: column.type,
      label: column.header
    }
  }

  if (column.type === ColumnType.CHECKBOX) {
    return {
      id: column.id,
      label: column.header,
      type: ColumnType.CHECKBOX,
      checked: value as boolean
    }
  }

  return {
    id: column.id,
    type: column.type,
    label: column.header,
    text: normalizeString(value as string)
  }
}
