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
  const normalizedColumns = getColumns(props)

  return (
    <Container id="table-column-actions-panel">
      <DataTable<T>
        cellPadding="1px"
        {...props}
        columns={normalizedColumns}
        tableStyles={{ border: 0 }}
      />
    </Container>
  )
}
