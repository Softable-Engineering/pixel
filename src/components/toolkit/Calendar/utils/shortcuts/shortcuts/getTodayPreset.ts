// Types
import type {
  Shortcut,
  BuildContext,
  DateFilterValue
} from '@components/toolkit/Calendar/types'

export function getTodayPreset(): Shortcut {
  return {
    id: 'today',
    label: 'Hoje',
    build: (_: BuildContext): DateFilterValue => {
      return {
        op: 'equals',
        at: { type: 'token', token: 'today' }
      }
    }
  }
}
