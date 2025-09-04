// Types
export enum CellTypes {
  DATE = 'date',
  TEXT = 'text',
  SELECT = 'select',
  MULTI_SELECT = 'multi_select'
}

export interface TextUpdateParams {
  type: CellTypes.TEXT
  text: string
}

export interface DateUpdateParams {
  type: CellTypes.DATE
  date: string
}

export interface SelectUpdateParams {
  type: CellTypes.SELECT
  select: string[]
}

export interface MultipleSelectUpdateParams {
  type: CellTypes.MULTI_SELECT
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
