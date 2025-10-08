// Utils
import { BaseTokenParser } from './BaseTokenParser'
import { TOKEN_PATTERNS } from '../constants/tokenPatterns'

// Types
import type { ParseResult } from '../types'

export class OperatorTokenParser extends BaseTokenParser {
  canParse(text: string, index: number): boolean {
    return TOKEN_PATTERNS.OPERATOR.test(text[index])
  }

  parse(text: string, startIndex: number): ParseResult {
    let value = text[startIndex]
    let i = startIndex + 1

    if (i < text.length && TOKEN_PATTERNS.OPERATOR_EXTENDED.test(text[i])) {
      value += text[i]
      i++
    }

    return { token: { type: 'operator', value }, nextIndex: i }
  }
}
