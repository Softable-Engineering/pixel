// Types
import type {
  BuildContext,
  DateFilterValue,
  Shortcut,
  ShortcutGroup
} from '@components/toolkit/Calendar/types'

function getYear(year: number): Shortcut {
  const currentYear = new Date().getFullYear()
  const offsetYear = year - currentYear

  return {
    id: `years-group-preset-${year}`,
    label: `${currentYear + offsetYear}`,
    build: (_: BuildContext): DateFilterValue => {
      return {
        op: 'range',
        start: {
          type: 'token',
          token: 'startOfYear',
          offset: { years: offsetYear }
        },
        end: {
          type: 'token',
          token: 'endOfYear',
          offset: { years: offsetYear }
        }
      }
    }
  }
}

function getYears(): Shortcut[] {
  const currentYear = new Date().getFullYear() - 1

  return Array.from({ length: 5 }).map((_, index) => {
    return getYear(currentYear - index)
  })
}

export function getYearsPreset(): ShortcutGroup {
  return {
    id: 'months',
    label: 'Ano',
    items: [getYears()]
  }
}
