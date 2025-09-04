// Components
import { type BaseCustomData, DataTable } from '../DataTable'

// Utils
import { getColumns } from './utils'

// Types
import type { Props } from './types'

// Styles
import { Container } from './styles'

export * from './types'

export const TableView = <T extends BaseCustomData>(props: Props<T>) => {
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
