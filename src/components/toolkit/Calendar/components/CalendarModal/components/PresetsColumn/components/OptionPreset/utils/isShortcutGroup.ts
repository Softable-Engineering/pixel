// Types
import type { Preset, ShortcutGroup } from '@components/toolkit/Calendar/types'

export function isShortcutGroup(preset: Preset): preset is ShortcutGroup {
  return 'items' in preset
}
