import type { ColumnType } from './columns'

export type TextTypes =
  | ColumnType.RICH_TEXT
  | ColumnType.EMAIL
  | ColumnType.PHONE
  | ColumnType.NUMBER

export type TextUpdateParams = {
  type: TextTypes
  text: string
}

export interface DateUpdateParams {
  type: ColumnType.DATE
  date: string
}

export interface SelectUpdateParams {
  type: ColumnType.SELECT
  select: string[]
}

export interface MultipleSelectUpdateParams {
  type: ColumnType.MULTI_SELECT
  select: string[]
}

export type VariantUpdateParams =
  | TextUpdateParams
  | DateUpdateParams
  | SelectUpdateParams
  | MultipleSelectUpdateParams

export interface CommonsUpdateParams {
  rowId: string
  columnId: string
}

export type UpdateCellParams = VariantUpdateParams & CommonsUpdateParams
