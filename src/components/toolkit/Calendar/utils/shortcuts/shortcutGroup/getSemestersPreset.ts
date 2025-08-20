// Utils
import { SEMESTERS } from '@components/toolkit/Calendar/constants/monthRanges'

// Types
import type {
  Shortcut,
  BuildContext,
  DateFilterValue,
  ShortcutGroup
} from '@components/toolkit/Calendar/types'

export function getSemesterPreset(
  indexBimester: number,
  offsetYear: number
): Shortcut {
  return {
    id: `last-semester-${SEMESTERS[indexBimester]}`,
    label: SEMESTERS[indexBimester],
    build: (ctx: BuildContext): DateFilterValue => {
      return {
        op: 'range',
        start: {
          type: 'token',
          token: 'startOfMonth',
          offset: {
            years: offsetYear,
            months: -ctx.now.getMonth() + indexBimester * 6
          }
        },
        end: {
          type: 'token',
          token: 'endOfMonth',
          offset: {
            years: offsetYear,
            months: -ctx.now.getMonth() + indexBimester * 6 + 5
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
    id: `years-group-semester-${year}`,
    label: `${currentYear + offsetYear}`,
    items: [getSemester(offsetYear)]
  }
}

function getSemester(offsetYear: number): Shortcut[] {
  return Array.from({ length: 2 }).map((_, index) => {
    return getSemesterPreset(index, offsetYear)
  })
}

function getLastFiveYearsGroup(): ShortcutGroup[] {
  const currentYear = new Date().getFullYear() - 1

  return Array.from({ length: 5 }).map((_, index) => {
    return getYearGroup(currentYear - index)
  })
}

export function getSemesterGroupPreset(): ShortcutGroup {
  return {
    id: 'months',
    label: 'Semestre',
    items: [[...getSemester(0)], [...getLastFiveYearsGroup()]]
  }
}
