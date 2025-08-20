// Types
import type {
  Shortcut,
  ActionOption,
  BuildContext,
  ShortcutGroup,
  DateFilterValue
} from '@components/toolkit/Calendar/types'

const DEFAULT_LAST_DAYS: ReadonlyArray<number> = Object.freeze([
  7, 10, 14, 30, 60, 90, 120, 180, 365
])

function buildValueForLastNDays(
  days: number,
  offsetEndDay: number
): DateFilterValue {
  var startOffset = -(days - 1)

  return {
    op: 'range',
    start: { type: 'token', token: 'today', offset: { days: startOffset } },
    end: { type: 'token', token: 'today', offset: { days: offsetEndDay } }
  }
}

function getLastDaysShortcut(days: number): Shortcut {
  return {
    id: `last-${days}-days`,
    label: `Últimos ${days} dias`,
    build: (ctx: BuildContext): DateFilterValue => {
      const offsetEndDay = ctx.filters.inclusive ? 0 : -1

      return buildValueForLastNDays(days, offsetEndDay)
    }
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

function getActions(): ActionOption {
  return {
    id: 'toggle-include-operator',
    label: 'Incluir dia de hoje',
    type: 'SWITCH',
    checked: (ctx: BuildContext) => ctx.filters.inclusive,
    action(ctx: BuildContext, value: boolean) {
      ctx.onChangeFilters({ inclusive: value })
    }
  }
}

export function getLastDaysPreset(): ShortcutGroup {
  return {
    id: 'last-days',
    label: 'Últimos dias',
    items: [[getActions()], createItems()]
  }
}
