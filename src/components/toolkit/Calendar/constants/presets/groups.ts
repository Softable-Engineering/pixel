// Utils
import {
  getYearsPreset,
  getRelativePreset,
  getLastDaysPreset,
  getMonthsGroupPreset,
  getQuarterGroupPreset,
  getBimesterGroupPreset,
  getSemesterGroupPreset,
  getTrimesterGroupPreset
} from '../../utils/shortcuts/shortcutGroup'

export const GROUP_PRESETS = {
  relative: getRelativePreset(),
  lastDays: getLastDaysPreset(),
  lastMonths: getMonthsGroupPreset(),
  lastBimesters: getBimesterGroupPreset(),
  lastTrimesters: getTrimesterGroupPreset(),
  lastQuarter: getQuarterGroupPreset(),
  lastSemesters: getSemesterGroupPreset(),
  lastYears: getYearsPreset()
}
