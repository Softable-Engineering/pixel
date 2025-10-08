// Components
import { AddColumnButton } from './components/AddColumnButton'

// Types
import {
  ColumnActions,
  type Actions,
  type ColumnType,
  type ManagementHeaderParams,
  type Props
} from '../../types'

// Styles
import { Container } from './styles'

type ActionsProps<T> = Props<T>
export const ActionsButtons = <T,>({
  actions,
  onManagementHeader
}: ActionsProps<T>) => {
  // Functions
  function addColumnClick(typeColumn: ColumnType) {
    const data: ManagementHeaderParams = {
      type: ColumnActions.AddColumn,
      typeColumn
    }
    onManagementHeader(data)
  }

  function getAction(action: Actions) {
    if (action === 'new-column')
      return (
        <AddColumnButton key={`action_${action}`} onClick={addColumnClick} />
      )
  }

  function renderActions() {
    if (!actions) return

    return actions.map(getAction)
  }

  return <Container>{renderActions()}</Container>
}
