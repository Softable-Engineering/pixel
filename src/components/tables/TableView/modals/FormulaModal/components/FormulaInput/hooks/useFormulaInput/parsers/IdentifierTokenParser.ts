// Utils
import { BaseTokenParser } from './BaseTokenParser'
import { TOKEN_PATTERNS } from '../constants/tokenPatterns'

// Types
import type { ParseResult, Token, TokenType } from '../types'

export class IdentifierTokenParser extends BaseTokenParser {
  canParse(text: string, index: number): boolean {
    return TOKEN_PATTERNS.IDENTIFIER.test(text[index])
  }

  parse(text: string, startIndex: number): ParseResult {
    let value = ''
    let i = startIndex

    while (
      i < text.length &&
      TOKEN_PATTERNS.IDENTIFIER_EXTENDED.test(text[i])
    ) {
      value += text[i]
      i++
    }

    const nextChar = i
    // const nextNonSpace = this.findNextNonSpaceIndex(text, i)
    const isFunction = nextChar < text.length && text[nextChar] === '('

    const tokenType: TokenType = isFunction ? 'function' : 'text'

    const token: Token = {
      type: tokenType,
      value,
      isError: !isFunction
    }

    return { token, nextIndex: i }
  }

  private findNextNonSpaceIndex(text: string, startIndex: number): number {
    let i = startIndex
    while (i < text.length && TOKEN_PATTERNS.WHITESPACE.test(text[i])) {
      i++
    }
    return i
  }
}
