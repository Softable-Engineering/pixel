// External Libraries
import type { ColumnType } from '@components/tables/TableView/types'
import type { PropsWithChildren } from 'react'

// Types

export interface FormulaOptionColumn {
  id: string
  label: string
  type: ColumnType
  tableName?: string
}

export interface OptionsGroup extends PropsWithChildren {
  name: string
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
  column: FormulaOptionColumn
}
