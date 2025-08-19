// Types
import type {
  Shortcut,
  BuildContext,
  ShortcutGroup,
  DateFilterValue
} from '@components/toolkit/Calendar/types'

const DEFAULT_LAST_DAYS: ReadonlyArray<number> = Object.freeze([
  7, 10, 14, 30, 60, 90, 120, 180, 365
])

function buildValueForLastNDays(days: number): DateFilterValue {
  var startOffset = -(days - 1)

  return {
    op: 'range',
    start: { type: 'token', token: 'today', offset: { days: startOffset } },
    end: { type: 'token', token: 'today' }
  }
}

function getLastDaysShortcut(days: number): Shortcut {
  return {
    id: `last-${days}-days`,
    label: `Últimos ${days} dias`,
    build: (_: BuildContext): DateFilterValue => buildValueForLastNDays(days)
  }
}

function createItems(): Shortcut[] {
  var items: Shortcut[] = []
  var i: number
  for (i = 0; i < DEFAULT_LAST_DAYS.length; i++) {
    items.push(getLastDaysShortcut(DEFAULT_LAST_DAYS[i]))
  }
  return items
}

export function getLastDaysPreset(): ShortcutGroup {
  return {
    id: 'last-days',
    label: 'Últimos dias',
    items: [createItems()]
  }
}
