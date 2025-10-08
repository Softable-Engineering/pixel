import type { PropsWithChildren } from 'react'
import type { Column } from '../../types'

interface Teste {
  name: string
}

export interface OptionsGroup extends PropsWithChildren<Teste> {
  title: string
  options: FormulaOption[]
}

export type FormulaOption = FunctionOption | ColumnOption

export interface FunctionOption {
  mode: 'common' | 'date'
  type: 'function'
  value: string
  displayValue: string
}

export interface ColumnOption {
  type: 'column'
  column: Column
}
