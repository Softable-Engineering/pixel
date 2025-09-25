// Components
import { GroupActionItem } from './views/GroupActionItem'
import { ButtonActionItem } from './views/ButtonActionItem'

// Types
import type { DropdownAction } from '../../types'

interface Props<T extends string> {
  action: DropdownAction<T>
  onClick: (actionId: T) => void
}

export const ActionItem = <T extends string>({ action, onClick }: Props<T>) => {
  // Functions
  function renderContent() {
    if (action.type === 'button')
      return (
        <ButtonActionItem key={action.id} action={action} onClick={onClick} />
      )

    if (action.type === 'group')
      return <GroupActionItem key={action.id} action={action} />
  }

  return <>{renderContent()}</>
}
