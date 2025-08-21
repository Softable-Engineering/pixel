// Types
import type { DateAdapter } from './adapters'
import type {
  RangeDateFilter,
  AfterDateFilter,
  BeforeDateFilter,
  EqualsDateFilter
} from './dateFilter'

export type WeekdayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type Variant = 'single' | 'group'

export interface DateRange {
  start?: Date
  end?: Date
}

export interface DateRangeValue {
  start?: string
  end?: string
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
  items: (Shortcut | ShortcutGroup | ActionOption)[][]
}

export type TypeAction = 'SWITCH'

export type ActionOption = SwitchActionProps

export interface SwitchActionProps {
  id: string
  label: string
  type: 'SWITCH'
  checked: (ctx: BuildContext) => boolean
  action: (ctx: BuildContext, value: boolean) => void
}

export type ResolveFilterToRange = (
  filter: DateFilterValue,
  ctx: BuildContext
) => DateRange

export type Preset = Shortcut | ShortcutGroup | ActionOption

export type PresetGroup = Record<string, Preset>

export type DateFilterValue =
  | EqualsDateFilter
  | BeforeDateFilter
  | AfterDateFilter
  | RangeDateFilter

export type DateOperator = 'equals' | 'range' | 'before' | 'after'
