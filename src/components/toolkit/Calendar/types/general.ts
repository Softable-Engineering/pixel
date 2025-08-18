// Types
import type { DateAdapter } from './adapters'
import type { DateFilterValue, DateOperator } from './dateFilter'

export type WeekdayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface DateRange {
  start: Date
  end: Date
}

export interface DurationOffset {
  days?: number
  weeks?: number
  months?: number
  years?: number
}

export interface Filters {
  inclusive: boolean
  operator: DateOperator
}

export interface BuildContext {
  now: Date
  minDate?: Date
  maxDate?: Date
  filters: Filters
  utils: DateAdapter
  weekStartsOn?: WeekdayIndex
  onChangeFilters: (change: Partial<Filters>) => void
}

export interface Shortcut {
  id: string
  label: string
  description?: string
  build: (ctx: BuildContext) => DateFilterValue
}

export interface ShortcutGroup {
  id: string
  label: string
  items: Array<Shortcut | ShortcutGroup>
}

export type ResolveFilterToRange = (
  filter: DateFilterValue,
  ctx: BuildContext
) => DateRange

export type Preset = Shortcut | ShortcutGroup

export type PresetGroup = Record<string, Preset>
