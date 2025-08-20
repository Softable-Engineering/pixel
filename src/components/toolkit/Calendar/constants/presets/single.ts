// Utils
import {
  getTodayPreset,
  getThisWeekPreset,
  getThisYearPreset,
  getLastYearPreset,
  getThisMonthPreset
} from '../../utils/shortcuts/shortcuts'

/**
 * SINGLE_PRESETS
 *
 * Centralized collection of **single date range presets**.
 * Each property corresponds to a shortcut representing
 * a very common and frequently used date interval.
 *
 * ---
 * ### Available keys
 * - `today` → **Today**
 *   Matches only the current day.
 *
 * - `thisWeek` → **This week**
 *   Range from the start of the current week to the end of the current week.
 *
 * - `thisMonth` → **This month**
 *   Range from the start of the current month to the end of the current month.
 *
 * - `lastMonth` → **Last year** (⚠️ note: despite the key being `lastMonth`,
 *   it actually calls `getLastYearPreset()`, which generates the full **previous year**).
 *
 * - `thisYear` → **This year**
 *   Range from the start of the current year to the end of the current year.
 **/
export const SINGLE_PRESETS = {
  /**
   * **Today** preset.
   * Represents only the current day.
   * → equals operation at token `"today"`.
   */
  today: getTodayPreset(),

  /**
   * **This Week** preset.
   * Represents the full current week.
   * → range from `"startOfWeek"` to `"endOfWeek"`.
   */
  thisWeek: getThisWeekPreset(),

  /**
   * **This Month** preset.
   * Represents the full current month.
   * → range from `"startOfMonth"` to `"endOfMonth"`.
   */
  thisMonth: getThisMonthPreset(),

  /**
   * **Last Year** preset.
   * Represents the full previous year.
   * → range from `"startOfYear"` (-1 year) to `"endOfYear"` (-1 year).
   */
  lastYear: getLastYearPreset(),

  /**
   * **This Year** preset.
   * Represents the full current year.
   * → range from `"startOfYear"` to `"endOfYear"`.
   */
  thisYear: getThisYearPreset()
}
