// Utils
import { MONTHS } from '@components/toolkit/Calendar/constants/monthRanges'

// Types
import type {
  Shortcut,
  BuildContext,
  DateFilterValue,
  ShortcutGroup
} from '@components/toolkit/Calendar/types'

export function getMonthPreset(
  indexMonth: number,
  offsetYear: number
): Shortcut {
  return {
    id: 'last-month',
    label: MONTHS[indexMonth],
    build: (ctx: BuildContext): DateFilterValue => {
      return {
        op: 'range',
        start: {
          type: 'token',
          token: 'startOfMonth',
          offset: {
            years: offsetYear,
            months: -ctx.now.getMonth() + indexMonth
          }
        },
        end: {
          type: 'token',
          token: 'endOfMonth',
          offset: {
            years: offsetYear,
            months: -ctx.now.getMonth() + indexMonth
          }
        }
      }
    }
  }
}

function getYearGroup(year: number): ShortcutGroup {
  const currentYear = new Date().getFullYear()
  const offsetYear = year - currentYear

  return {
    id: 'years',
    label: `${currentYear + offsetYear}`,
    items: [getMonths(offsetYear)]
  }
}

function getMonths(offsetYear: number): Shortcut[] {
  return Array.from({ length: 12 }).map((_, index) => {
    return getMonthPreset(index, offsetYear)
  })
}

function getLastFiveYearsGroup(): ShortcutGroup[] {
  const currentYear = new Date().getFullYear() - 1

  return Array.from({ length: 5 }).map((_, index) => {
    return getYearGroup(currentYear - index)
  })
}

export function getMonthsGroupPreset(): ShortcutGroup {
  return {
    id: 'months',
    label: 'Mês',
    items: [[...getMonths(0)], [...getLastFiveYearsGroup()]]
  }
}
