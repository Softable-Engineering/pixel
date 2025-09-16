// Components
import { Footer } from './components/Footer'
import { ActionsButtons } from './components/ActionsButtons'
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
  const normalizedColumns = getColumns(props)

  return (
    <Container id="table-column-actions-panel">
      <DataTable<T>
        cellPadding="1px"
        {...props}
        columns={normalizedColumns}
        actionsColumn={<ActionsButtons {...props} />}
        footer={<Footer onManagementHeader={props.onManagementHeader} />}
      />
    </Container>
  )
}
