// Utils
import {
  getTodayPreset,
  getThisWeekPreset,
  getThisYearPreset,
  getLastYearPreset,
  getThisMonthPreset
} from '../../utils/shortcuts/shortcuts'

export const SINGLE_PRESETS = {
  today: getTodayPreset(),
  thisWeek: getThisWeekPreset(),
  thisMonth: getThisMonthPreset(),
  lastMonth: getLastYearPreset(),
  thisYear: getThisYearPreset()
}
