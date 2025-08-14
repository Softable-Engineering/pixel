// Types
import type { BuildContext } from '../types'

export function dayRange(date: Date, context: BuildContext) {
  const { utils } = context

  return {
    start: utils.startOfDay(date),
    end: utils.endOfDay(date)
  }
}
