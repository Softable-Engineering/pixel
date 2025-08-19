// Utils
import { BIMESTERS } from '../../constants'

// Types
import type {
  Shortcut,
  BuildContext,
  DateFilterValue,
  ShortcutGroup
} from '@components/toolkit/Calendar/types'

export function getBimesterPreset(
  indexBimester: number,
  offsetYear: number
): Shortcut {
  return {
    id: 'last-bimester',
    label: BIMESTERS[indexBimester],
    build: (ctx: BuildContext): DateFilterValue => {
      return {
        op: 'range',
        start: {
          type: 'token',
          token: 'startOfMonth',
          offset: {
            years: offsetYear,
            months: -ctx.now.getMonth() + indexBimester * 2
          }
        },
        end: {
          type: 'token',
          token: 'endOfMonth',
          offset: {
            years: offsetYear,
            months: -ctx.now.getMonth() + indexBimester * 2 + 1
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
    items: [getBimesters(offsetYear)]
  }
}

function getBimesters(offsetYear: number): Shortcut[] {
  return Array.from({ length: 6 }).map((_, index) => {
    return getBimesterPreset(index, offsetYear)
  })
}

function getLastFiveYearsGroup(): ShortcutGroup[] {
  const currentYear = new Date().getFullYear() - 1

  return Array.from({ length: 5 }).map((_, index) => {
    return getYearGroup(currentYear - index)
  })
}

export function getBimesterGroupPreset(): ShortcutGroup {
  return {
    id: 'months',
    label: 'Bimestre',
    items: [[...getBimesters(0)], [...getLastFiveYearsGroup()]]
  }
}
