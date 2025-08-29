// Assets
import { TextIcon } from '@assets/icons/tables/Text'
import { SelectIcon } from '@assets/icons/tables/Select'
import { NumberIcon } from '@assets/icons/tables/Number'

// Components
import { HeaderCell } from '../components/HeaderCell'
import { Typography } from '@components/toolkit/Typography'

// Utils
import { isSelect } from './normalizeType'

// Utils
import { getTypeColumn } from './getTypeColumn'

// Types
import { type ColumnDef, ColumnType } from '../types'
import type { CustomColumnDef, CustomData } from '@components/tables/DataTable'
import { CellValue } from '../components/CellValue'

function getIcon(type: ColumnType) {
  if (type === ColumnType.DATE) return <TextIcon />
  if (type === ColumnType.SELECT) return <SelectIcon />
  if (type === ColumnType.NUMBER) return <NumberIcon />
  if (type === ColumnType.RICH_TEXT) return <TextIcon />

  return null
}

function getContent<T>(column: ColumnDef<T>) {
  const typeColumn = getTypeColumn(column)
  const icon = getIcon(typeColumn)
  const title = column.header

  return <HeaderCell icon={icon} title={title} />
}

function renderCell<T>(row: CustomData<T>, column: ColumnDef<T>) {
  const value = column.accessorFn(row.data)

  if (isSelect(column)) {
    return (
      <CellValue
        selected={value}
        select={column.select}
        type={ColumnType.SELECT}
      />
    )
  }

  return <Typography variant="b2">{value}</Typography>
}

export function getColumns<T>(
  data: ColumnDef<T>[]
): CustomColumnDef<CustomData<T>>[] {
  return data.map(column => ({
    id: column.header,
    header: () => getContent<T>(column),
    cell: info => info.getValue(),
    accessorFn: row => renderCell<T>(row, column)
  }))
}
