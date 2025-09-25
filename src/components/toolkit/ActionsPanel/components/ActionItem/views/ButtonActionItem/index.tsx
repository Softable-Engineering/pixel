// Components
import { KeyboardShortcutButton } from '@components/commons/buttons/KeyboardShortcutButton'

// Types
import type { ButtonAction } from '@components/toolkit/ActionsPanel/types'

interface Props<T extends string> {
  action: ButtonAction<T>
  onClick: (actionId: T) => void
}

export const ButtonActionItem = <T extends string>({
  action,
  onClick
}: Props<T>) => {
  return (
    <KeyboardShortcutButton
      label={action.label}
      startIcon={action.icon}
      destructive={action.destructive}
      keyboardShortcut={action.shortcut}
      onClick={() => onClick(action.id)}
    />
  )
}
