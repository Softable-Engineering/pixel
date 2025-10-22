// Types
import type { FormulaOptionColumn } from '../OptionsListPanel/types'

export type FunctionDescriptor = {
  value: string
  params: string[]
  displayName: string
  description?: string
  evaluateForPreview: (...args: any[]) => any
}

export type FormulaInputMethods = {
  focus: () => void
  reset: () => void
  serialize: () => string
  deserialize: (formula: string) => void
  insertFunctionText: (text: string) => void
  insertColumnToken: (column: FormulaOptionColumn) => void
}

export interface FormulaInputProps {
  formula?: string
  columns: FormulaOptionColumn[]
  functions?: FunctionDescriptor[]
  onChangeSearch: (search: string) => void
}
