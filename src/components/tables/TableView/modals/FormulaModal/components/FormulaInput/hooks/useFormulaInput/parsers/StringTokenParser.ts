// Utils
import { BaseTokenParser } from './BaseTokenParser'

// Types
import type { ParseResult } from '../types'

export class StringTokenParser extends BaseTokenParser {
  canParse(text: string, index: number): boolean {
    return text[index] === '"' || text[index] === "'"
  }

  parse(text: string, startIndex: number): ParseResult {
    const characterString = text[startIndex]
    let value = text[startIndex]
    let i = startIndex + 1

    while (i < text.length && text[i] !== characterString) {
      value += text[i]
      i++
    }

    if (i < text.length) value += text[i]
    i++

    return { token: { type: 'string', value }, nextIndex: i }
  }
}
