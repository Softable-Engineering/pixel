// Types
import type { BuildContext, DateToken } from '../types'

export function getBaseToken(ctx: BuildContext, token: DateToken): Date {
  switch (token) {
    case 'today':
      return ctx.now
    case 'yesterday':
      return ctx.utils.addDays(ctx.now, -1)
    case 'tomorrow':
      return ctx.utils.addDays(ctx.now, 1)
    case 'startOfWeek':
      return ctx.utils.startOfWeek(ctx.now, ctx.weekStartsOn)
    case 'endOfWeek':
      return ctx.utils.endOfWeek(ctx.now, ctx.weekStartsOn)
    case 'startOfMonth':
      return ctx.utils.startOfMonth(ctx.now)
    case 'endOfMonth':
      return ctx.utils.endOfMonth(ctx.now)
    case 'startOfBimester':
      return ctx.utils.startOfBimester(ctx.now)
    case 'endOfBimester':
      return ctx.utils.endOfBimester(ctx.now)
    case 'startOfQuarter':
      return ctx.utils.startOfQuarter(ctx.now)
    case 'endOfQuarter':
      return ctx.utils.endOfQuarter(ctx.now)
    case 'startOfQuadmester':
      return ctx.utils.startOfQuadmester(ctx.now)
    case 'endOfQuadmester':
      return ctx.utils.endOfQuadmester(ctx.now)
    case 'startOfSemester':
      return ctx.utils.startOfSemester(ctx.now)
    case 'endOfSemester':
      return ctx.utils.endOfSemester(ctx.now)
    case 'startOfYear':
      return ctx.utils.startOfYear(ctx.now)
    case 'endOfYear':
      return ctx.utils.endOfYear(ctx.now)

    default:
      return ctx.now
  }
}
