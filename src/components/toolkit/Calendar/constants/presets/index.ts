// Utils
import { GROUP_PRESETS } from './groups'
import { SINGLE_PRESETS } from './single'

/**
 * DEFAULT_PRESETS
 *
 * Entry point that exposes both **single** and **group** date presets.
 * These are the **default building blocks** you can pick from when
 * assembling the preset list for your screen/component.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * HOW TO USE THE DEFAULT PRESETS (COMPOSE, DON'T MODIFY)
 * ──────────────────────────────────────────────────────────────────────────────
 * You should **not modify** these presets. Instead, **compose your own list** by
 * selecting what you need from `DEFAULT_PRESETS.single` and `DEFAULT_PRESETS.group`,
 * and optionally **add your own custom presets**.
 *
 * Examples:
 *
 * 1) Pick-and-choose a simple list (flat):
 * ```ts
 * import type { Preset } from '@components/toolkit/Calendar/types'
 *
 * export const MY_PRESETS: Preset[] = [
 *   DEFAULT_PRESETS.single.today,
 *   DEFAULT_PRESETS.single.thisWeek,
 *   DEFAULT_PRESETS.single.thisMonth,
 *   DEFAULT_PRESETS.group.lastDays,      // a whole group
 * ]
 * ```
 *
 * 2) Map style (easy to reference by key):
 * ```ts
 * import type { PresetGroup } from '@components/toolkit/Calendar/types'
 *
 * export const MY_PRESET_GROUP: PresetGroup = {
 *   today: DEFAULT_PRESETS.single.today,
 *   thisWeek: DEFAULT_PRESETS.single.thisWeek,
 *   lastDays: DEFAULT_PRESETS.group.lastDays,
 *   // add your own too (see "Creating your own" below)
 * }
 * ```
 *
 * 3) If your UI expects a grid (rows/columns), use a `ShortcutGroup.items` shape:
 * ```ts
 * import type { ShortcutGroup } from '@components/toolkit/Calendar/types'
 *
 * export const MY_GRID: ShortcutGroup = {
 *   id: 'home',
 *   label: 'Quick ranges',
 *   items: [
 *     [ DEFAULT_PRESETS.single.today, DEFAULT_PRESETS.single.thisWeek ],
 *     [ DEFAULT_PRESETS.single.thisMonth ],
 *     [ DEFAULT_PRESETS.group.lastDays ], // entire group in its own row
 *   ]
 * }
 * ```
 *
 * Running a preset always calls `.build(ctx)`:
 * ```ts
 * const value = DEFAULT_PRESETS.single.thisMonth.build({
 *   now: new Date(),
 *   filters: { inclusive: true, operator: 'range' },
 *   utils,                       // DateAdapter implementation
 *   onChangeFilters: () => {}
 * })
 * // -> DateFilterValue (see operators below)
 * ```
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * WHAT’S INSIDE
 * ──────────────────────────────────────────────────────────────────────────────
 * - `single` → common standalone ranges:
 *   Today, This Week, This Month, Last Year, This Year.
 *
 * - `group`  → structured collections:
 *   Relative (today/yesterday/tomorrow/this-*), Last N days (7…365),
 *   Months, Bimesters (2m), Trimesters (3m), Quarters (4m), Semesters (6m), Years.
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * CREATING YOUR OWN PRESETS (Shortcut / Action / Group)
 * ──────────────────────────────────────────────────────────────────────────────
 * You can add your own alongside the defaults:
 *
 * 1) **Shortcut** (single option)
 * ```ts
 * import type { Shortcut } from '@components/toolkit/Calendar/types'
 *
 * const last45Days: Shortcut = {
 *   id: 'last-45-days',
 *   label: 'Last 45 days',
 *   build: (ctx) => {
 *     const endOffset = ctx.filters.inclusive ? 0 : -1
 *     return {
 *       op: 'range',
 *       start: { type: 'token', token: 'today', offset: { days: -44 } },
 *       end:   { type: 'token', token: 'today', offset: { days: endOffset } }
 *     }
 *   }
 * }
 * ```
 *
 * 2) **Action** (interactive toggle)
 * ```ts
 * import type { ActionOption } from '@components/toolkit/Calendar/types'
 *
 * const includeToday: ActionOption = {
 *   id: 'toggle-include-today',
 *   label: 'Include today',
 *   type: 'SWITCH',
 *   checked: (ctx) => ctx.filters.inclusive,
 *   action:  (ctx, value) => ctx.onChangeFilters({ inclusive: value })
 * }
 * ```
 *
 * 3) **ShortcutGroup** (grid of shortcuts/actions/groups)
 * ```ts
 * import type { ShortcutGroup } from '@components/toolkit/Calendar/types'
 *
 * const customGroup: ShortcutGroup = {
 *   id: 'custom',
 *   label: 'Custom',
 *   items: [
 *     [ includeToday ],      // actions row
 *     [ last45Days ],        // shortcuts row
 *   ]
 * }
 * ```
 *
 * ──────────────────────────────────────────────────────────────────────────────
 * HOW DATE FILTERS WORK (operators & endpoints)
 * ──────────────────────────────────────────────────────────────────────────────
 * A preset’s `build(ctx)` must return a **DateFilterValue** using one of the
 * operators below, and **date endpoints** described next.
 *
 * Operators (`DateOperator`):
 * - **`equals`** — a single date.
 *   ```ts
 *   { op: 'equals', at: { type: 'token', token: 'today' } }
 *   ```
 *
 * - **`range`** — from `start` to `end` (can allow same day).
 *   ```ts
 *   {
 *     op: 'range',
 *     start: { type: 'token', token: 'startOfMonth' },
 *     end:   { type: 'token', token: 'endOfMonth' },
 *     allowSameDay?: boolean
 *   }
 *   ```
 *
 * - **`before`** — strictly before `at` (or inclusive if set).
 *   ```ts
 *   { op: 'before', at: { type: 'token', token: 'today' }, inclusive: false }
 *   ```
 *
 * - **`after`** — strictly after `at` (or inclusive if set).
 *   ```ts
 *   { op: 'after', at: { type: 'token', token: 'today' }, inclusive: true }
 *   ```
 *
 * Date endpoints (`DateEndpoint`):
 * - **Literal** — fixed `Date` value (does not move with time):
 *   ```ts
 *   { type: 'literal', date: new Date('2025-11-28T00:00:00') }
 *   ```
 *
 * - **Token** — dynamic reference resolved from `ctx.now` using `DateAdapter`,
 *   optionally with an **offset** (`DurationOffset`):
 *   ```ts
 *   { type: 'token', token: 'startOfYear', offset: { years: -1 } } // start of last year
 *   ```
 *
 * Common tokens (`DateToken`):
 * `today`, `yesterday`, `tomorrow`,
 * `startOfWeek`/`endOfWeek`, `startOfMonth`/`endOfMonth`,
 * `startOfQuarter`/`endOfQuarter`, `startOfBimester`/`endOfBimester`,
 * `startOfQuadmester`/`endOfQuadmester`, `startOfSemester`/`endOfSemester`,
 * `startOfYear`/`endOfYear`.
 *
 * Offsets (`DurationOffset`): `{ days?: number; weeks?: number; months?: number; years?: number }`
 * Examples:
 * - Previous month:
 *   ```ts
 *   start: { type: 'token', token: 'startOfMonth', offset: { months: -1 } }
 *   end:   { type: 'token', token: 'endOfMonth',   offset: { months: -1 } }
 *   ```
 * - Last 7 days (inclusive today):
 *   ```ts
 *   start: { type: 'token', token: 'today', offset: { days: -6 } }
 *   end:   { type: 'token', token: 'today', offset: { days: 0 } }
 *   ```
 *
 * Notes:
 * - Prefer **token endpoints** so presets adapt over time relative to `ctx.now`.
 * - Use `ctx.filters.inclusive` to decide whether “today” is included in “last N days”.
 * - Keep `id` stable/unique; it’s used for lookup/telemetry.
 */
export const DEFAULT_PRESETS = {
  /** Common standalone presets (Today, This Week, This Month, Last Year, This Year). */
  single: SINGLE_PRESETS,

  /** Grouped presets (Relative, Last N days, Months, Bimesters, Trimesters, Quarters, Semesters, Years). */
  group: GROUP_PRESETS
}
