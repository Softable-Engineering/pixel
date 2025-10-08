// Utils
import {
  COLUMN_TOKEN_PREFIX,
  COLUMN_PLACEHOLDER_REGEX
} from '../constants/tokenizer'
import { BaseTokenParser } from './BaseTokenParser'

// Types
import type { ParseResult, Token } from '../types'

export class ColumnTokenParser extends BaseTokenParser {
  canParse(text: string, index: number): boolean {
    return text.slice(index, index + 5) === COLUMN_TOKEN_PREFIX
  }

  parse(text: string, startIndex: number): ParseResult {
    let value = '['
    let i = startIndex + 1

    while (i < text.length && text[i] !== ']') {
      value += text[i]
      i++
    }

    if (i < text.length) value += ']'
    i++

    const match = value.match(COLUMN_PLACEHOLDER_REGEX)
    const token: Token = match
      ? { type: 'column', value, columnId: match[1] }
      : { type: 'text', value, isError: true }

    return { token, nextIndex: i }
  }
}
