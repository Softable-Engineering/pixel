// Types
import type {
  Shortcut,
  BuildContext,
  DateFilterValue
} from '@components/toolkit/Calendar/types'

export function getTodayPreset(): Shortcut {
  return {
    id: 'today',
    label: 'Hoje editado',
    build: (ctx: BuildContext): DateFilterValue => {
      return {
        op: 'equals',
        at: { type: 'literal', date: ctx.now }
      }
    }
  }
}
