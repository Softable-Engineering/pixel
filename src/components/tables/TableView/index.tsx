// Components
import { DataTable } from '../DataTable'

// Utils
import { getColumns } from './utils'

// Types
import type { BaseColumnData, Props } from './types'

// Styles
import { Container } from './styles'

export {
  Props,
  ColumnDef,
  BaseColumn,
  ColumnType,
  BaseColumnData,
  UpdateCellParams
} from './types'
export { Types } from './modals/CellModal/types'

export const TableView = <T extends BaseColumnData>(props: Props<T>) => {
  // Constants
  const { columns, onChangeCell, ...dataTableProps } = props
  const normalizedColumns = getColumns(columns, onChangeCell)

  return (
    <Container>
      <DataTable<T>
        cellPadding="1px"
        {...dataTableProps}
        columns={normalizedColumns}
      />
    </Container>
  )
}
