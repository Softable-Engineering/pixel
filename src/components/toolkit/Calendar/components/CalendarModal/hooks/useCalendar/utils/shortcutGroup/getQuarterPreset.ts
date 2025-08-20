// Utils
import { QUARTERS } from '../../constants'

// Types
import type {
  Shortcut,
  BuildContext,
  DateFilterValue,
  ShortcutGroup
} from '@components/toolkit/Calendar/types'

export function getQuarterPreset(
  indexBimester: number,
  offsetYear: number
): Shortcut {
  return {
    id: 'last-quarter',
    label: QUARTERS[indexBimester],
    build: (ctx: BuildContext): DateFilterValue => {
      return {
        op: 'range',
        start: {
          type: 'token',
          token: 'startOfMonth',
          offset: {
            years: offsetYear,
            months: -ctx.now.getMonth() + indexBimester * 4
          }
        },
        end: {
          type: 'token',
          token: 'endOfMonth',
          offset: {
            years: offsetYear,
            months: -ctx.now.getMonth() + indexBimester * 4 + 3
          }
        }
      }
    }
  }
}

function getQuarterGroup(year: number): ShortcutGroup {
  const currentYear = new Date().getFullYear()
  const offsetYear = year - currentYear

  return {
    id: 'quarters',
    label: `${currentYear + offsetYear}`,
    items: [getQuarter(offsetYear)]
  }
}

function getQuarter(offsetYear: number): Shortcut[] {
  return Array.from({ length: 3 }).map((_, index) => {
    return getQuarterPreset(index, offsetYear)
  })
}

function getLastFiveYearsGroup(): ShortcutGroup[] {
  const currentYear = new Date().getFullYear() - 1

  return Array.from({ length: 4 }).map((_, index) => {
    return getQuarterGroup(currentYear - index)
  })
}

export function getQuarterGroupPreset(): ShortcutGroup {
  return {
    id: 'quarters',
    label: 'Quadrimestre',
    items: [[...getQuarter(0)], [...getLastFiveYearsGroup()]]
  }
}
