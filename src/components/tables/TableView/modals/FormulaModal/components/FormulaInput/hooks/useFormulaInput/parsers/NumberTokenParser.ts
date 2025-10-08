// Utils
import { BaseTokenParser } from './BaseTokenParser'
import { TOKEN_PATTERNS } from '../constants/tokenPatterns'

// Types
import type { ParseResult } from '../types'

export class NumberTokenParser extends BaseTokenParser {
  canParse(text: string, index: number): boolean {
    return TOKEN_PATTERNS.NUMBER.test(text[index])
  }

  parse(text: string, startIndex: number): ParseResult {
    let value = ''
    let i = startIndex

    while (i < text.length && TOKEN_PATTERNS.NUMBER_DIGIT.test(text[i])) {
      value += text[i]
      i++
    }

    return { token: { type: 'number', value }, nextIndex: i }
  }
}
