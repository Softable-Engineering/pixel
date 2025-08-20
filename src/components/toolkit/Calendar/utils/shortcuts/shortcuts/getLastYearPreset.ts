// Types
import type {
  Shortcut,
  BuildContext,
  DateFilterValue
} from '@components/toolkit/Calendar/types'

export function getLastYearPreset(): Shortcut {
  return {
    id: 'last-year',
    label: 'Último ano',
    build: (_: BuildContext): DateFilterValue => {
      return {
        op: 'range',
        start: { type: 'token', token: 'startOfYear', offset: { years: -1 } },
        end: { type: 'token', token: 'endOfYear', offset: { years: -1 } }
      }
    }
  }
}
