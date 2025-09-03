// Types
import type { Types } from '../modals/CellModal/types'

export interface TextUpdateParams {
  type: Types.TEXT
  text: string
}

export interface DateUpdateParams {
  type: Types.DATE
  date: string
}

export interface SelectUpdateParams {
  type: Types.SELECT
  select: string[]
}

export type VariantUpdateParams =
  | TextUpdateParams
  | DateUpdateParams
  | SelectUpdateParams

export interface CommonsUpdateParams {
  rowId: string
  columnId: string
}

export type UpdateCellParams = VariantUpdateParams & CommonsUpdateParams
