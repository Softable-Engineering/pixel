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
import { getLastDaysPreset } from './shortcutGroup'

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
      lastDays: getLastDaysPreset()
    }
  ]
}
