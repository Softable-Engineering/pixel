// Types
import type { Column } from '../../types'

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
  insertColumnToken: (column: Column) => void
}

export interface FormulaInputProps {
  formula?: string
  columns: Column[]
  functions?: FunctionDescriptor[]
  onChangeSearch: (search: string) => void
}
