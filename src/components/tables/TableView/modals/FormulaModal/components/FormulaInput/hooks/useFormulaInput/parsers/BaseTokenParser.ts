// Types
import type { ParseResult } from '../types'

export abstract class BaseTokenParser {
  abstract canParse(text: string, index: number): boolean
  abstract parse(text: string, startIndex: number): ParseResult
}
