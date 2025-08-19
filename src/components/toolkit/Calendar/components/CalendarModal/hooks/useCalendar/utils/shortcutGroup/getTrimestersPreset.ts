// Utils
import { TRIMESTERS } from '../../constants'

// Types
import type {
  Shortcut,
  BuildContext,
  DateFilterValue,
  ShortcutGroup
} from '@components/toolkit/Calendar/types'

export function getTrimesterPreset(
  indexBimester: number,
  offsetYear: number
): Shortcut {
  return {
    id: 'last-trimester',
    label: TRIMESTERS[indexBimester],
    build: (ctx: BuildContext): DateFilterValue => {
      return {
        op: 'range',
        start: {
          type: 'token',
          token: 'startOfMonth',
          offset: {
            years: offsetYear,
            months: -ctx.now.getMonth() + indexBimester * 3
          }
        },
        end: {
          type: 'token',
          token: 'endOfMonth',
          offset: {
            years: offsetYear,
            months: -ctx.now.getMonth() + indexBimester * 3 + 2
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
    items: [getTrimester(offsetYear)]
  }
}

function getTrimester(offsetYear: number): Shortcut[] {
  return Array.from({ length: 4 }).map((_, index) => {
    return getTrimesterPreset(index, offsetYear)
  })
}

function getLastFiveYearsGroup(): ShortcutGroup[] {
  const currentYear = new Date().getFullYear() - 1

  return Array.from({ length: 5 }).map((_, index) => {
    return getYearGroup(currentYear - index)
  })
}

export function getTrimesterGroupPreset(): ShortcutGroup {
  return {
    id: 'months',
    label: 'Trimestre',
    items: [[...getTrimester(0)], [...getLastFiveYearsGroup()]]
  }
}
