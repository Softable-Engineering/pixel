import { IconName } from '@assets/icons'

/**
 * Props for a button that supports triggering via keyboard shortcuts.
 */
export interface KeyboardShortcutButtonProps {
  /**
   * Visible label of the button.
   * This will also be used as the default accessible label.
   */
  label: string

  /**
   * Icon displayed at the end (right side) of the button content.
   * Optional — useful for visual cues like arrows or status icons.
   */
  endIcon?: IconName

  /**
   * Icon displayed at the start (left side) of the button content.
   * Optional — commonly used for action icons (e.g., magnifier, plus, etc).
   */
  startIcon?: IconName

  /**
   * Keyboard shortcut that triggers the button.
   * Format: `"ctrl+k"`, `"alt+shift+p"`, `"meta+s"` (case-insensitive).
   * Only one shortcut is supported per button.
   */
  keyboardShortcut?: string

  /**
   * Whether the button should be styled as a destructive action.
   * Optional — defaults to `false`.
   */
  destructive?: boolean

  /**
   * Function called when the button is clicked
   * or when the defined keyboard shortcut is triggered.
   */
  onClick: () => void
}
