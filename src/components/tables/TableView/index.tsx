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

  // Functions
  function getFooter() {
    if (props.viewOnly) return null

    return <Footer onManagementHeader={props.onManagementHeader} />
  }

  function renderActionsButtons() {
    if (props.viewOnly) return null

    return <ActionsButtons {...props} />
  }

  return (
    <Container id="table-column-actions-panel">
      <DataTable<T>
        {...props}
        cellPadding="1px"
        footer={getFooter()}
        columns={normalizedColumns}
        actionsColumn={renderActionsButtons()}
      />
    </Container>
  )
}
