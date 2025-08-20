// Types
import type { BuildContext } from '../types'

export function clampDateToBounds(
  targetDate: Date,
  context: BuildContext
): Date {
  const { utils, minDate, maxDate } = context

  if (minDate && utils.isBefore(targetDate, minDate)) return minDate
  if (maxDate && utils.isAfter(targetDate, maxDate)) return maxDate
  return targetDate
}
