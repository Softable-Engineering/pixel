// Components
import { AddColumnButton } from './components/AddColumnButton'

// Types
import {
  type Props,
  type Actions,
  ColumnActions,
  type ColumnType,
  type ManagementHeaderParams
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
      typeColumn,
      type: ColumnActions.AddColumn
    }

    onManagementHeader(data)
  }

  function getAction(action: Actions) {
    if (action === 'new-column') {
      return (
        <AddColumnButton key={`action_${action}`} onClick={addColumnClick} />
      )
    }

    return null
  }

  function renderActions() {
    if (!actions) return

    return actions.map(getAction)
  }

  return <Container>{renderActions()}</Container>
}
