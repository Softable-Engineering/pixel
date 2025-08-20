// Types
import type { DateToken } from './adapters'
import type { DurationOffset } from './general'

export type DateOperator = 'equals' | 'range' | 'before' | 'after'

export interface LiteralDateEndpoint {
  type: 'literal'
  date: Date
}

export interface TokenDateEndpoint {
  type: 'token'
  token: DateToken
  offset?: DurationOffset
}

export type DateEndpoint = LiteralDateEndpoint | TokenDateEndpoint

export interface EqualsDateFilter {
  op: 'equals'
  at: DateEndpoint
}

export interface BeforeDateFilter {
  op: 'before'
  at: DateEndpoint
  inclusive?: boolean
}

export interface AfterDateFilter {
  op: 'after'
  at: DateEndpoint
  inclusive?: boolean
}

export interface RangeDateFilter {
  op: 'range'
  start: DateEndpoint
  end: DateEndpoint
  allowSameDay?: boolean
}
