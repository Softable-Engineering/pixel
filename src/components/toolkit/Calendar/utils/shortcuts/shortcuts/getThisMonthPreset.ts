// Types
import type {
  Shortcut,
  BuildContext,
  DateFilterValue
} from '@components/toolkit/Calendar/types'

export function getThisMonthPreset(): Shortcut {
  return {
    id: 'this-month',
    label: 'Este mês',
    build: (_: BuildContext): DateFilterValue => {
      return {
        op: 'range',
        start: { type: 'token', token: 'startOfMonth' },
        end: { type: 'token', token: 'endOfMonth' }
      }
    }
  }
}
