// External Libraries
import type {
  Shortcut,
  BuildContext,
  DateFilterValue
} from '@components/toolkit/Calendar/types'

export function getThisYearPreset(): Shortcut {
  return {
    id: 'this-year',
    label: 'Este ano',
    build: (_: BuildContext): DateFilterValue => {
      return {
        op: 'range',
        start: { type: 'token', token: 'startOfYear' },
        end: { type: 'token', token: 'endOfYear' }
      }
    }
  }
}
