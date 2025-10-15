// Components
import { Typography } from '@components/toolkit/Typography'
import { CellValue } from '@components/tables/TableView/components/CellValue'
import { HeaderCell } from '@components/tables/TableView/components/HeaderCell'

// Utils
import {
  getIcon,
  normalizeArray,
  normalizeString,
  normalizeBoolean
} from '@components/tables/TableView/utils'

// Types
import {
  ColumnType,
  type Props,
  type ColumnDef,
  type ManagementHeaderParams
} from '@components/tables/TableView/types'
import type { GetColumnsParams } from '../types'
import { MaskModule, MaskType } from 'src/services/MaskModule'
import type { CustomColumnDef, CustomData } from '@components/tables/DataTable'

export function getContent<T>(
  column: ColumnDef<T>,
  onManagementHeader: (params: ManagementHeaderParams) => void,
  onOpenFormulaModal: (columnId: string, formula?: string) => void,
  viewOnly?: boolean
) {
  const typeColumn = column.type
  const icon = getIcon(typeColumn)
  const title = column.header

  return (
    <HeaderCell<T>
      icon={icon}
      title={title}
      column={column}
      viewOnly={viewOnly}
      onManagementHeader={onManagementHeader}
      onOpenFormulaModal={onOpenFormulaModal}
    />
  )
}

export function renderCell<T>({
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
  const value = column.accessorFn(row?.data)

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
        rich_text={{ ...column.rich_text }}
        text={normalizeString(value)}
        onChange={v =>
          onChangeCell?.({ ...commonsParams, type: ColumnType.EMAIL, text: v })
        }
      />
    )
  }

  if (column.type === ColumnType.PHONE) {
    const phoneMask = MaskModule.getMask(locale, MaskType.PHONE)

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
    const numberMask = MaskModule.getMask(locale, MaskType.INTEGER)

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

  if (column.type === ColumnType.FORMULA) {
  }

  return <Typography variant="b2">{value}</Typography>
}

export function getColumns<T>(
  props: GetColumnsParams<T>
): CustomColumnDef<CustomData<T>>[] {
  const { columns, onManagementHeader } = props

  return columns.map(column => ({
    id: column.header,
    result: column.result,
    cell: info => info.getValue(),
    header: () =>
      getContent<T>(
        column,
        onManagementHeader,
        props.onOpenFormulaModal,
        props?.viewOnly
      ),
    accessorFn: row => renderCell<T>({ ...props, row, column })
  }))
}
