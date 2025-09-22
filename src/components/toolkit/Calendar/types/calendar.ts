// External Libraries
import type { PropsWithChildren } from 'react'

// Types
import type {
  Variant,
  PresetGroup,
  DateOperator,
  DateRangeValue
} from './general'
import type { UseFollowElementPositionOptions } from '@hooks/useFollowElementPosition/types'

/**
 * Public methods exposed by the Calendar component.
 * Can be accessed through `ref`.
 */
export interface CalendarMethods {
  /** Opens the calendar (in a popover/dropdown, if applicable). */
  open: () => void
  /** Closes the calendar. */
  close: () => void
}

export * from './general'

/**
 * Props for the `Calendar` component.
 *
 * @example Basic usage
 * ```tsx
 * const [range, setRange] = useState<DateRangeValue>({ start: '', end: '' })
 *
 * <Calendar
 *   locale="en-US"
 *   value={range}
 *   onChange={(next, operator) => setRange(next)}
 * />
 * ```
 */
export interface CalendarProps
  extends PropsWithChildren,
    UseFollowElementPositionOptions {
  /**
   * Locale (BCP-47) used for month/day names,
   * formatting and week start.
   * Examples: "en-US", "pt-BR".
   */
  locale: string

  /**
   * Currently selected date range (controlled).
   * Values should be strings (ISO 8601 recommended).
   */
  value: DateRangeValue

  /**
   * Visual or behavioral variant of the calendar.
   * Examples: "single" or "group".
   * @default "single"
   */
  variant?: Variant

  /**
   * Number of months displayed side by side.
   * Useful for selecting longer ranges.
   *
   * - If `variant` is `"single"`, the minimum is **1**.
   * - If `variant` is `"group"`, the minimum is **2**.
   *
   * @default 1
   */
  visibleMonths?: number

  /**
   * List of preset groups (date shortcuts).
   * Example: Today, Last 7 days, This month.
   */
  presets?: PresetGroup[]

  /**
   * Callback fired whenever the date range changes.
   *
   * @param range New selected range.
   * @param operator The operation that triggered the change
   * (e.g., "equals", "after", "before", "range").
   */
  onChange: (range: DateRangeValue, operator: DateOperator) => void
}
