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

/**
 * GROUP_PRESETS
 *
 * Centralized collection of date filter shortcut groups.
 * Each property corresponds to a function that generates
 * specific kinds of date range shortcuts.
 *
 * - `relative` → relative ranges (Today, Yesterday, Tomorrow, This Month, This Year…)
 * - `lastDays` → last N days (7, 10, 14, 30, 60, 90, 120, 180, 365)
 * - `lastMonths` → months of the current year + last 5 years
 * - `lastBimesters` → 2-month periods (bimesters) of the current year + last 5 years
 * - `lastTrimesters` → 3-month periods (trimesters) of the current year + last 5 years
 * - `lastQuarter` → 4-month periods (quarters) of the current year + past years
 * - `lastSemesters` → 6-month periods (semesters) of the current year + last 5 years
 * - `lastYears` → last 5 full years
 */
export const GROUP_PRESETS = {
  /**
   * Generates the **Relative shortcuts** group.
   *
   * Includes:
   * - Today
   * - Yesterday
   * - Tomorrow
   * - Current Month
   * - Current Bimester
   * - Current Trimester
   * - Current Quarter
   * - Current Semester
   * - Current Year
   */
  relative: getRelativePreset(),

  /**
   * Generates the **Last N days** shortcuts group.
   *
   * Includes ranges like:
   * - Last 7 days
   * - Last 10 days
   * - Last 14 days
   * - Last 30 days
   * - Last 60 days
   * - Last 90 days
   * - Last 120 days
   * - Last 180 days
   * - Last 365 days
   *
   * Also includes an **action toggle**:
   * - "Include today" → defines whether the current day
   *   should be part of the calculation.
   */
  lastDays: getLastDaysPreset(),

  /**
   * Generates the **Months** shortcuts group.
   *
   * Includes:
   * - All 12 months of the current year
   * - + groups for the months of each of the last 5 years
   */
  lastMonths: getMonthsGroupPreset(),

  /**
   * Generates the **Bimesters** shortcuts group.
   *
   * Includes:
   * - 6 bimesters (2-month periods) of the current year
   * - + groups for the bimesters of the last 5 years
   */
  lastBimesters: getBimesterGroupPreset(),

  /**
   * Generates the **Trimesters** shortcuts group.
   *
   * Includes:
   * - 4 trimesters (3-month periods) of the current year
   * - + groups for the trimesters of the last 5 years
   */
  lastTrimesters: getTrimesterGroupPreset(),

  /**
   * Generates the **Quarters** shortcuts group.
   *
   * Includes:
   * - 3 quarters (4-month periods) of the current year
   * - + groups for quarters of the last ~4 years
   */
  lastQuarter: getQuarterGroupPreset(),

  /**
   * Generates the **Semesters** shortcuts group.
   *
   * Includes:
   * - 1st semester (Jan–Jun) of the current year
   * - 2nd semester (Jul–Dec) of the current year
   * - + groups for semesters of the last 5 years
   */
  lastSemesters: getSemesterGroupPreset(),

  /**
   * Generates the **Years** shortcuts group.
   *
   * Includes:
   * - The last 5 complete years
   *   (each covering January 1st to December 31st)
   */
  lastYears: getYearsPreset()
}
