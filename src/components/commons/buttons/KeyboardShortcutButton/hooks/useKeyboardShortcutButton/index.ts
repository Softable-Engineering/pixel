// Utils
import { KEYBOARD_SHORTCUT_MAPPER } from '../../constants'

// Types
import { useEffect } from 'react'
import { UseKeyboardShortcutButtonParams } from './types'

export function useKeyboardShortcutButton({
  keyboardShortcut,
  onClick
}: UseKeyboardShortcutButtonParams) {
  // Functions
  function formatShortcut(shortcutItem: string): string {
    return KEYBOARD_SHORTCUT_MAPPER[shortcutItem] ?? shortcutItem
  }

  function renderShortcut() {
    const shortcutList = keyboardShortcut?.split('+')

    return shortcutList?.map(formatShortcut).join('')
  }

  // UseEffects
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (!keyboardShortcut) return

      const keys = keyboardShortcut
        .toLowerCase()
        .split('+')
        .map(k => k.trim())

      const isMatch =
        (!keys.includes('ctrl') || e.ctrlKey) &&
        (!keys.includes('alt') || e.altKey) &&
        (!keys.includes('shift') || e.shiftKey) &&
        keys.some(k => k.length === 1 && e.key.toLowerCase() === k)

      if (isMatch) {
        e.preventDefault()
        onClick()
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [keyboardShortcut, onClick])

  return {
    displayShortcut: renderShortcut()
  }
}
