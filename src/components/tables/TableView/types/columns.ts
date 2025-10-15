// Types
import type { BaseColumn } from './general'

export type Actions = 'new-column'

export enum ColumnType {
  DATE = 'date',
  PAGE = 'page',
  EMAIL = 'email',
  PHONE = 'phone',
  NUMBER = 'number',
  SELECT = 'select',
  FORMULA = 'formula',
  CHECKBOX = 'checkbox',
  RICH_TEXT = 'rich_text',
  MULTI_SELECT = 'multi_select'
}

export type ResponseAccessor = string | string[] | boolean

export type Column<T> = {
  id: string
  header: string
  result?: string
  accessorFn: (row: T) => ResponseAccessor
}

export type ColumnDef<T> = BaseColumn & Column<T>

export interface RichTextFormat {
  bold?: boolean
  italic?: boolean
  mask?: (value: string) => string
}

export interface DateFormat {
  format?: string
}

export interface NumberFormat {
  decimals?: number
}

export interface SelectOption {
  id: string
  name: string
  color: string
}

export interface Select {
  multiple?: boolean
  options: SelectOption[]
}

export type TextTypes =
  | ColumnType.RICH_TEXT
  | ColumnType.EMAIL
  | ColumnType.PHONE

export interface TextColumn {
  type: TextTypes
  rich_text: RichTextFormat
}

export interface DateColumn {
  type: ColumnType.DATE
  date: DateFormat
}

export interface SelectColumn {
  type: ColumnType.SELECT
  select: Select
}

export interface MultiSelectColumn {
  type: ColumnType.MULTI_SELECT
  select: Select
}

export interface NumberColumn {
  type: ColumnType.NUMBER
  number: NumberFormat
}

export interface CheckBoxColumn {
  type: ColumnType.CHECKBOX
}

export interface FormulaColumn {
  type: ColumnType.FORMULA
  formula: string
}

export enum ColumnActions {
  ChangeFormula = 'update-formula',
  UpdateColumnName = 'update-column-name',
  UpdateProperty = 'update-property',
  UpdateTypeColumn = 'update-type-column',
  AddFilter = 'add-filter',
  Calculate = 'calculate',
  HideColumn = 'hide-column',
  DuplicateColumn = 'duplicate-column',
  DeleteColumn = 'delete-column',
  Freeze = 'freeze-column',
  ExpandedColumn = 'expanded-column',
  AddColumn = 'add-column',
  AddLine = 'add-line'
}

export type SimpleActions =
  | ColumnActions.HideColumn
  | ColumnActions.Freeze
  | ColumnActions.AddFilter
  | ColumnActions.ExpandedColumn
  | ColumnActions.DeleteColumn
  | ColumnActions.DuplicateColumn

export interface ManagementHeaderName {
  type: ColumnActions.UpdateColumnName
  columnId: string
  name: string
}

export interface ManagementAddLine {
  type: ColumnActions.AddLine
}

export interface ManagementHeaderSimpleAction {
  columnId: string
  type: SimpleActions
}

export interface ManagementHeaderType {
  columnId: string
  type: ColumnActions.UpdateTypeColumn
  typeColumn: ColumnType
}

export interface ManagementAddColumn {
  type: ColumnActions.AddColumn
  typeColumn: ColumnType
}

export interface ManagementPropertieChange {
  type: ColumnActions.ChangeFormula
  columnId: string
  formula: string
}

export type ManagementHeaderParams =
  | ManagementHeaderName
  | ManagementHeaderType
  | ManagementAddColumn
  | ManagementPropertieChange
  | ManagementHeaderSimpleAction
  | ManagementAddLine
