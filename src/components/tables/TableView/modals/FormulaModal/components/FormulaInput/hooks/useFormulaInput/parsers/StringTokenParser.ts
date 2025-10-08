// Utils
import { BaseTokenParser } from './BaseTokenParser'

// Types
import type { ParseResult } from '../types'

export class StringTokenParser extends BaseTokenParser {
  canParse(text: string, index: number): boolean {
    return text[index] === '"'
  }

  parse(text: string, startIndex: number): ParseResult {
    let value = '"'
    let i = startIndex + 1

    while (i < text.length && text[i] !== '"') {
      value += text[i]
      i++
    }

    if (i < text.length) value += '"'
    i++

    return { token: { type: 'string', value }, nextIndex: i }
  }
}
