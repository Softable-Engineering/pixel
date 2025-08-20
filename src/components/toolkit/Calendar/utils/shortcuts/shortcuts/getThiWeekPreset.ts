// Types
import type {
  Shortcut,
  BuildContext,
  DateFilterValue
} from '@components/toolkit/Calendar/types'

export function getThisWeekPreset(): Shortcut {
  return {
    id: 'this-week',
    label: 'Esta semana',
    build: (_: BuildContext): DateFilterValue => {
      return {
        op: 'range',
        start: { type: 'token', token: 'startOfWeek' },
        end: { type: 'token', token: 'endOfWeek' }
      }
    }
  }
}
