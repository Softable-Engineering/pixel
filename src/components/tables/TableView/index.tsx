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
  BaseColumnData
} from './types'

export const TableView = <T extends BaseColumnData>({
  columns,
  ...dataTableProps
}: Props<T>) => {
  // Utils
  const normalizedColumns = getColumns(columns)

  return (
    <Container>
      <DataTable<T> {...dataTableProps} columns={normalizedColumns} />
    </Container>
  )
}
