// Types
import type { FormulaInputProps } from '../../../types'

export interface Token {
  type: TokenType
  value: string
  isError?: boolean
  columnId?: string
}

export type TokenType =
  | 'function'
  | 'operator'
  | 'punctuation'
  | 'number'
  | 'text'
  | 'string'
  | 'space'
  | 'column'

export interface ColumnPosition {
  position: number
  node: HTMLElement
}

export interface ParseResult {
  token: Token
  nextIndex: number
}

export interface ColumnPosition {
  position: number
  node: HTMLElement
}

export interface ParseResult {
  token: Token
  nextIndex: number
}

export type UseFormulaInputParams = FormulaInputProps
