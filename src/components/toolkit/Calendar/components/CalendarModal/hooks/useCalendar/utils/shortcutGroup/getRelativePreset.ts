// Utils
import { getTodayPreset } from '../shortcuts'
import { getRelative } from './relative/getRelative'

// Types
import { TypeRelative } from './relative/types'
import type {
  BuildContext,
  DateFilterValue,
  Shortcut,
  ShortcutGroup
} from '@components/toolkit/Calendar/types'

function getYesterdayPreset(): Shortcut {
  return {
    id: 'yesterday',
    label: 'Ontem',
    build: (_: BuildContext): DateFilterValue => {
      return {
        op: 'equals',
        at: { type: 'token', token: 'yesterday' }
      }
    }
  }
}

function getTomorrowPreset(): Shortcut {
  return {
    id: 'tomorrow',
    label: 'Amanha',
    build: (_: BuildContext): DateFilterValue => {
      return {
        op: 'equals',
        at: { type: 'token', token: 'tomorrow' }
      }
    }
  }
}

export function getRelativePreset(): ShortcutGroup {
  return {
    id: 'relative',
    label: 'Relativo',
    items: [
      [
        getTodayPreset(),
        getYesterdayPreset(),
        getTomorrowPreset(),
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
