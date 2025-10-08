// Utils
import { BaseTokenParser } from './BaseTokenParser'
import { TOKEN_PATTERNS } from '../constants/tokenPatterns'

// Types
import type { ParseResult } from '../types'

export class PunctuationTokenParser extends BaseTokenParser {
  canParse(text: string, index: number): boolean {
    return TOKEN_PATTERNS.PUNCTUATION.test(text[index])
  }

  parse(text: string, startIndex: number): ParseResult {
    return {
      token: { type: 'punctuation', value: text[startIndex] },
      nextIndex: startIndex + 1
    }
  }
}
