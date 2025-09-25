// Assets
import { TextIcon } from '@assets/icons/tables/Text'
import { ListIcon } from '@assets/icons/tables/List'
import { EmailIcon } from '@assets/icons/tables/Email'
import { PhoneIcon } from '@assets/icons/tables/Phone'
import { SelectIcon } from '@assets/icons/tables/Select'
import { NumberIcon } from '@assets/icons/tables/Number'
import { CalendarIcon } from '@assets/icons/tables/Calendar'

// Components
import { CellValue } from '../components/CellValue'
import { HeaderCell } from '../components/HeaderCell'
import { Typography } from '@components/toolkit/Typography'
import { CheckboxIcon } from '@assets/icons/tables/Checkbox'

// Types
import {
  ColumnType,
  type Props,
  type ColumnDef,
  type ManagementHeaderParams,
  type ResponseAccessor
} from '../types'
import { MaskModule, MaskType } from 'src/services/MaskModule'
import type { CustomColumnDef, CustomData } from '@components/tables/DataTable'

function getIcon(type: ColumnType) {
  if (type === ColumnType.PAGE) return <TextIcon color="var(--text-color)" />
  if (type === ColumnType.EMAIL) return <EmailIcon color="var(--text-color)" />
  if (type === ColumnType.PHONE) return <PhoneIcon color="var(--text-color)" />
  if (type === ColumnType.DATE)
    return <CalendarIcon color="var(--text-color)" />
  if (type === ColumnType.SELECT)
    return <SelectIcon color="var(--text-color)" />
  if (type === ColumnType.NUMBER)
    return <NumberIcon color="var(--text-color)" />
  if (type === ColumnType.RICH_TEXT)
    return <TextIcon color="var(--text-color)" />
  if (type === ColumnType.MULTI_SELECT)
    return <ListIcon color="var(--text-color)" />
  if (type === ColumnType.CHECKBOX)
    return <CheckboxIcon color="var(--text-color)" />

  return null
}

function getContent<T>(
  column: ColumnDef<T>,
  onManagementHeader: (params: ManagementHeaderParams) => void,
  viewOnly?: boolean
) {
  const typeColumn = column.type
  const icon = getIcon(typeColumn)
  const title = column.header

  return (
    <HeaderCell
      icon={icon}
      title={title}
      viewOnly={viewOnly}
      columnId={column.id}
      onClickOption={onManagementHeader}
    />
  )
}

function normalizeString(value: ResponseAccessor) {
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value === 'string') return value
  if (typeof value === 'boolean') return String(value)
  if (typeof value === 'number') return String(value)
  if (value == null) return ''

  return ''
}

function normalizeArray(value: ResponseAccessor) {
  if (Array.isArray(value)) return value
  if (typeof value === 'string') return [value]
  if (typeof value === 'boolean') return [String(value)]
  if (typeof value === 'number') return [String(value)]
  if (value == null) return []

  return []
}

function normalizeBoolean(value: ResponseAccessor) {
  if (typeof value === 'boolean') return value
  if (typeof value === 'string') return value === 'true'
  if (Array.isArray(value)) return value.length > 0
  if (typeof value === 'number') return value > 0
  if (value == null) return false

  return false
}

function renderCell<T>({
  row,
  column,
  locale,
  viewOnly,
  onChangeCell
}: Props<T> & {
  row: CustomData<T>
  column: ColumnDef<T>
}) {
  // Constants
  const commonsParams = { columnId: column.id, rowId: row.data.id }
  const value = column.accessorFn(row.data)

  const phoneMask = MaskModule.getMask(locale, MaskType.PHONE)
  const numberMask = MaskModule.getMask(locale, MaskType.INTEGER)
  const emailMask = MaskModule.getMask(locale, MaskType.EMAIL)

  if (column.type === ColumnType.SELECT) {
    return (
      <CellValue
        viewOnly={viewOnly}
        select={column.select}
        type={ColumnType.SELECT}
        selected={normalizeArray(value)}
        onChange={v =>
          onChangeCell?.({
            ...commonsParams,
            type: ColumnType.SELECT,
            select: v
          })
        }
      />
    )
  }

  if (column.type === ColumnType.RICH_TEXT) {
    return (
      <CellValue
        viewOnly={viewOnly}
        type={ColumnType.RICH_TEXT}
        rich_text={column.rich_text}
        text={normalizeString(value)}
        onChange={v =>
          onChangeCell?.({
            ...commonsParams,
            type: ColumnType.RICH_TEXT,
            text: v
          })
        }
      />
    )
  }

  if (column.type === ColumnType.EMAIL) {
    return (
      <CellValue
        viewOnly={viewOnly}
        type={ColumnType.RICH_TEXT}
        rich_text={{ ...column.rich_text, mask: emailMask?.format }}
        text={normalizeString(value)}
        onChange={v =>
          onChangeCell?.({ ...commonsParams, type: ColumnType.EMAIL, text: v })
        }
      />
    )
  }

  if (column.type === ColumnType.PHONE) {
    return (
      <CellValue
        viewOnly={viewOnly}
        type={ColumnType.RICH_TEXT}
        rich_text={{ ...column.rich_text, mask: phoneMask?.format }}
        text={normalizeString(value)}
        onChange={v =>
          onChangeCell?.({ ...commonsParams, type: ColumnType.PHONE, text: v })
        }
      />
    )
  }

  if (column.type === ColumnType.NUMBER) {
    return (
      <CellValue
        viewOnly={viewOnly}
        type={ColumnType.RICH_TEXT}
        rich_text={{ ...column.number, mask: numberMask?.format }}
        text={normalizeString(value)}
        onChange={v =>
          onChangeCell?.({ ...commonsParams, type: ColumnType.NUMBER, text: v })
        }
      />
    )
  }

  if (column.type === ColumnType.DATE) {
    return (
      <CellValue
        viewOnly={viewOnly}
        date={column.date}
        type={ColumnType.DATE}
        value={normalizeString(value)}
        onChange={v =>
          onChangeCell?.({ ...commonsParams, type: ColumnType.DATE, date: v })
        }
      />
    )
  }

  if (column.type === ColumnType.MULTI_SELECT) {
    return (
      <CellValue
        viewOnly={viewOnly}
        type={ColumnType.SELECT}
        selected={normalizeArray(value)}
        select={{ ...column.select, multiple: true }}
        onChange={v =>
          onChangeCell?.({
            ...commonsParams,
            type: ColumnType.MULTI_SELECT,
            select: v
          })
        }
      />
    )
  }

  if (column.type === ColumnType.CHECKBOX) {
    return (
      <CellValue
        viewOnly={viewOnly}
        type={ColumnType.CHECKBOX}
        checked={normalizeBoolean(value)}
        onChange={v =>
          onChangeCell?.({
            ...commonsParams,
            type: ColumnType.CHECKBOX,
            checked: v
          })
        }
      />
    )
  }

  return <Typography variant="b2">{value}</Typography>
}

export function getColumns<T>(
  props: Props<T>
): CustomColumnDef<CustomData<T>>[] {
  const { columns, onManagementHeader } = props

  return columns.map(column => ({
    id: column.header,
    cell: info => info.getValue(),
    header: () => getContent<T>(column, onManagementHeader, props?.viewOnly),
    accessorFn: row => renderCell<T>({ ...props, row, column })
  }))
}
