// Assets
import { TextIcon } from '@assets/icons/tables/Text'
import { SelectIcon } from '@assets/icons/tables/Select'
import { NumberIcon } from '@assets/icons/tables/Number'

// Components
import { CellValue } from '../components/CellValue'
import { HeaderCell } from '../components/HeaderCell'
import { Typography } from '@components/toolkit/Typography'

// Utils
import { isDate, isRichText, isSelect } from './normalizeType'

// Types
import type { UpdateCellParams } from '../types/cell'
import { type ColumnDef, ColumnType } from '../types'
import type { CustomColumnDef, CustomData } from '@components/tables/DataTable'
import { Types } from '../modals/CellModal/types'

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

function renderCell<T>(
  row: CustomData<T>,
  column: ColumnDef<T>,
  onChange?: (params: UpdateCellParams) => void
) {
  const commonsParams = { columnId: column.id, rowId: row.data.id }
  const value = column.accessorFn(row.data)

  if (isSelect(column)) {
    return (
      <CellValue
        selected={[value]}
        select={column.select}
        type={ColumnType.SELECT}
        onChange={v =>
          onChange?.({ ...commonsParams, type: Types.SELECT, select: v })
        }
      />
    )
  }

  if (isRichText(column)) {
    return (
      <CellValue
        text={value}
        type={ColumnType.RICH_TEXT}
        rich_text={column.rich_text}
        onChange={v =>
          onChange?.({ ...commonsParams, type: Types.TEXT, text: v })
        }
      />
    )
  }

  if (isDate(column)) {
    return (
      <CellValue
        value={value}
        date={column.date}
        type={ColumnType.DATE}
        onChange={v =>
          onChange?.({ ...commonsParams, type: Types.DATE, date: v })
        }
      />
    )
  }

  return <Typography variant="b2">{value}</Typography>
}

export function getColumns<T>(
  data: ColumnDef<T>[],
  onChange?: (params: UpdateCellParams) => void
): CustomColumnDef<CustomData<T>>[] {
  return data.map(column => ({
    id: column.header,
    cell: info => info.getValue(),
    header: () => getContent<T>(column),
    accessorFn: row => renderCell<T>(row, column, onChange)
  }))
}
