// Types
import type { PresetGroup } from '@components/toolkit/Calendar/types'

// Utils
import {
  getTodayPreset,
  getLastYearPreset,
  getThisWeekPreset,
  getThisYearPreset,
  getThisMonthPreset
} from './shortcuts'
import {
  getYearsPreset,
  getRelativePreset,
  getLastDaysPreset,
  getMonthsGroupPreset,
  getSemesterGroupPreset,
  getBimesterGroupPreset,
  getTrimesterGroupPreset
} from './shortcutGroup'

export function getPresets(): PresetGroup[] {
  return [
    {
      today: getTodayPreset(),
      thisWeek: getThisWeekPreset(),
      thisMonth: getThisMonthPreset(),
      lastMonth: getLastYearPreset(),
      thisYear: getThisYearPreset()
    },
    {
      relative: getRelativePreset(),
      lastDays: getLastDaysPreset(),
      lastMonths: getMonthsGroupPreset(),
      lastBimesters: getBimesterGroupPreset(),
      lastTrimesters: getTrimesterGroupPreset(),
      lastSemesters: getSemesterGroupPreset(),
      lastYears: getYearsPreset()
    }
  ]
}
