import type { ManagementHeaderParams } from '../../types'

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

interface CommonColumn {
  type:
    | ColumnType.DATE
    | ColumnType.PAGE
    | ColumnType.EMAIL
    | ColumnType.PHONE
    | ColumnType.FORMULA
    | ColumnType.RICH_TEXT
  text: string
}

interface NumberColumn {
  type: ColumnType.NUMBER
  value: number
}

interface CheckboxColumn {
  type: ColumnType.CHECKBOX
  checked: boolean
}

interface SelectColumn {
  type: ColumnType.SELECT | ColumnType.MULTI_SELECT
  select: string[]
}

export type ColumnProperties =
  | NumberColumn
  | CheckboxColumn
  | SelectColumn
  | CommonColumn

export type BaseColumn = {
  id: string
  label: string
}

export type Column = BaseColumn & ColumnProperties

export interface FormulaModalMethods {
  open: (columnId: string, formula?: string) => void
  close: () => void
}

export interface FormulaModalProps {
  columns: Column[]
  onManagementHeader: (data: ManagementHeaderParams) => void
}
