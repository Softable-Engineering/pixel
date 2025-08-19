// Utils
import { getRelative } from './relative/getRelative'

// Types
import { TypeRelative } from './relative/types'
import type { ShortcutGroup } from '@components/toolkit/Calendar/types'

export function getRelativePreset(): ShortcutGroup {
  return {
    id: 'relative',
    label: 'Relativo',
    items: [
      [
        getRelative(TypeRelative.MONTH),
        getRelative(TypeRelative.BIMESTER),
        getRelative(TypeRelative.TRIMESTER),
        getRelative(TypeRelative.QUARTER),
        getRelative(TypeRelative.SEMESTER),
        getRelative(TypeRelative.YEAR)
      ]
    ]
  }
}
