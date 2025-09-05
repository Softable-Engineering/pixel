// Assets
import { TextIcon } from '@assets/icons/tables/Text'
import { SelectIcon } from '@assets/icons/tables/Select'
import { NumberIcon } from '@assets/icons/tables/Number'

// Components
import { CellValue } from '../components/CellValue'
import { HeaderCell } from '../components/HeaderCell'
import { Typography } from '@components/toolkit/Typography'

// Types
import type { UpdateCellParams } from '../types/cell'
import { type ColumnDef, ColumnType } from '../types'
import { type Locale, MaskModule, MaskType } from 'src/services/MaskModule'
import type { CustomColumnDef, CustomData } from '@components/tables/DataTable'

function getIcon(type: ColumnType) {
  if (type === ColumnType.DATE) return <TextIcon />
  if (type === ColumnType.SELECT) return <SelectIcon />
  if (type === ColumnType.NUMBER) return <NumberIcon />
  if (type === ColumnType.RICH_TEXT) return <TextIcon />

  return null
}

function getContent<T>(column: ColumnDef<T>) {
  const typeColumn = column.type
  const icon = getIcon(typeColumn)
  const title = column.header

  return <HeaderCell icon={icon} title={title} />
}

function normalizeString(value: string | string[]) {
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value === 'string') return value

  return ''
}

function normalizeArray(value: string | string[]) {
  if (Array.isArray(value)) return value
  if (typeof value === 'string') return [value]

  return []
}

function renderCell<T>(
  row: CustomData<T>,
  column: ColumnDef<T>,
  locale: Locale,
  onChange?: (params: UpdateCellParams) => void
) {
  // Constants
  const commonsParams = { columnId: column.id, rowId: row.data.id }
  const value = column.accessorFn(row.data)

  const phoneMask = MaskModule.getMask(locale, MaskType.PHONE)
  const numberMask = MaskModule.getMask(locale, MaskType.INTEGER)
  const emailMask = MaskModule.getMask(locale, MaskType.EMAIL)

  if (column.type === ColumnType.SELECT) {
    return (
      <CellValue
        select={column.select}
        type={ColumnType.SELECT}
        selected={normalizeArray(value)}
        onChange={v =>
          onChange?.({ ...commonsParams, type: ColumnType.SELECT, select: v })
        }
      />
    )
  }

  if (column.type === ColumnType.RICH_TEXT) {
    return (
      <CellValue
        type={ColumnType.RICH_TEXT}
        rich_text={column.rich_text}
        text={normalizeString(value)}
        onChange={v =>
          onChange?.({ ...commonsParams, type: ColumnType.RICH_TEXT, text: v })
        }
      />
    )
  }

  if (column.type === ColumnType.EMAIL) {
    return (
      <CellValue
        type={ColumnType.RICH_TEXT}
        rich_text={{ ...column.rich_text, mask: emailMask?.format }}
        text={normalizeString(value)}
        onChange={v =>
          onChange?.({ ...commonsParams, type: ColumnType.EMAIL, text: v })
        }
      />
    )
  }

  if (column.type === ColumnType.PHONE) {
    return (
      <CellValue
        type={ColumnType.RICH_TEXT}
        rich_text={{ ...column.rich_text, mask: phoneMask?.format }}
        text={normalizeString(value)}
        onChange={v =>
          onChange?.({ ...commonsParams, type: ColumnType.PHONE, text: v })
        }
      />
    )
  }

  if (column.type === ColumnType.NUMBER) {
    return (
      <CellValue
        type={ColumnType.RICH_TEXT}
        rich_text={{ ...column.number, mask: numberMask?.format }}
        text={normalizeString(value)}
        onChange={v =>
          onChange?.({ ...commonsParams, type: ColumnType.NUMBER, text: v })
        }
      />
    )
  }

  if (column.type === ColumnType.DATE) {
    return (
      <CellValue
        date={column.date}
        type={ColumnType.DATE}
        value={normalizeString(value)}
        onChange={v =>
          onChange?.({ ...commonsParams, type: ColumnType.DATE, date: v })
        }
      />
    )
  }

  if (column.type === ColumnType.MULTI_SELECT) {
    return (
      <CellValue
        type={ColumnType.SELECT}
        selected={normalizeArray(value)}
        select={{ ...column.select, multiple: true }}
        onChange={v =>
          onChange?.({
            ...commonsParams,
            type: ColumnType.MULTI_SELECT,
            select: v
          })
        }
      />
    )
  }

  return <Typography variant="b2">{value}</Typography>
}

export function getColumns<T>(
  data: ColumnDef<T>[],
  locale: Locale,
  onChange?: (params: UpdateCellParams) => void
): CustomColumnDef<CustomData<T>>[] {
  return data.map(column => ({
    id: column.header,
    cell: info => info.getValue(),
    header: () => getContent<T>(column),
    accessorFn: row => renderCell<T>(row, column, locale, onChange)
  }))
}
