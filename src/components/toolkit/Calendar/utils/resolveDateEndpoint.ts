// Utils
import { dayRange } from './dayRange'
import { applyOffset } from './applyOffset'
import { getBaseToken } from './getBaseToken'
import { clampDateToBounds } from './clampDateToBounds'

// Types
import type {
  BuildContext,
  DateEndpoint,
  RangeDateFilter,
  AfterDateFilter,
  BeforeDateFilter,
  EqualsDateFilter,
  ResolveFilterToRange
} from '../types'

export function resolveDateEndpoint(ep: DateEndpoint, ctx: BuildContext): Date {
  if (ep.type === 'literal') return ep.date

  const base = getBaseToken(ctx, ep.token)

  return applyOffset(ctx, base, ep.offset)
}

export const resolveFilterToRange: ResolveFilterToRange = (filter, ctx) => {
  const MIN = new Date(-8640000000000000)
  const MAX = new Date(8640000000000000)

  const { minDate = MIN, maxDate = MAX } = ctx

  switch (filter.op) {
    case 'equals':
      return resolveEqualsOperator(filter, ctx)

    case 'before':
      return resolveBeforeOperator(filter, ctx, minDate)

    case 'after':
      return resolveAfterOperator(filter, ctx, maxDate)

    case 'range':
      return resolveRangeOperator(filter, ctx)
  }
}

function resolveEqualsOperator(
  filter: EqualsDateFilter,
  context: BuildContext
) {
  const date = resolveDateEndpoint(filter.at, context)
  const { start, end } = dayRange(date, context)

  return {
    start: clampDateToBounds(start, context),
    end: clampDateToBounds(end, context)
  }
}

function resolveBeforeOperator(
  filter: BeforeDateFilter,
  ctx: BuildContext,
  minDate: Date
) {
  const { utils } = ctx

  const at = resolveDateEndpoint(filter.at, ctx)
  const end = filter.inclusive
    ? utils.endOfDay(at)
    : utils.endOfDay(utils.addDays(at, -1))

  return {
    start: clampDateToBounds(utils.startOfDay(minDate), ctx),
    end: clampDateToBounds(end, ctx)
  }
}

function resolveAfterOperator(
  filter: AfterDateFilter,
  ctx: BuildContext,
  maxDate: Date
) {
  const { utils } = ctx
  const at = resolveDateEndpoint(filter.at, ctx)
  const start = filter.inclusive
    ? utils.startOfDay(at)
    : utils.startOfDay(utils.addDays(at, 1))

  return {
    start: clampDateToBounds(start, ctx),
    end: clampDateToBounds(utils.endOfDay(maxDate), ctx)
  }
}

function resolveRangeOperator(filter: RangeDateFilter, ctx: BuildContext) {
  const { utils } = ctx
  const startDate = resolveDateEndpoint(filter.start, ctx)
  const endDate = resolveDateEndpoint(filter.end, ctx)

  let start = utils.startOfDay(startDate)
  let end = utils.endOfDay(endDate)

  if (utils.isAfter(start, end)) [start, end] = [end, start]

  start = clampDateToBounds(start, ctx)
  end = clampDateToBounds(end, ctx)
  return { start, end }
}
