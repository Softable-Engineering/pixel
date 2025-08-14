// Types
import type { BuildContext, DurationOffset } from '../types'

export function applyOffset(
  context: BuildContext,
  baseDate: Date,
  offset?: DurationOffset
): Date {
  const { utils } = context
  if (!offset) return baseDate

  const { years = 0, months = 0, weeks = 0, days = 0 } = offset

  let shiftedDate = baseDate

  if (years !== 0) shiftedDate = utils.addYears(shiftedDate, years)
  if (months !== 0) shiftedDate = utils.addMonths(shiftedDate, months)
  if (weeks !== 0) shiftedDate = utils.addWeeks(shiftedDate, weeks)
  if (days !== 0) shiftedDate = utils.addDays(shiftedDate, days)

  return shiftedDate
}
