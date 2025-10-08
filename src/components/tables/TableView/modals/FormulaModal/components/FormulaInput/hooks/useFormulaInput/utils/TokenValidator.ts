// Types
import type { Token } from '../types'
import type { FunctionDescriptor } from '../../../types'

export class TokenValidator {
  private validFunctions: Map<string, FunctionDescriptor>

  constructor(functions: FunctionDescriptor[]) {
    this.validFunctions = new Map(
      functions.map(func => [func.value.toLowerCase(), func])
    )
  }

  public isFunctionValid(functionName: string): boolean {
    return this.validFunctions.has(functionName.toLowerCase())
  }

  public validateFunction(token: Token): Token {
    const isValid = this.isFunctionValid(token.value)
    return { ...token, isError: !isValid }
  }

  public validateTextToken(
    token: Token,
    tokens: Token[],
    index: number
  ): Token {
    const nextIndex = index + 1

    if (this.isFollowedByOpenParen(tokens, nextIndex)) {
      const isValid = this.isFunctionValid(token.value)
      return { ...token, type: 'function', isError: !isValid }
    }

    if (this.isInsideValidFunction(tokens, index)) {
      return { ...token, isError: false }
    }

    return token
  }

  private findNextNonSpaceTokenIndex(
    tokens: Token[],
    startIndex: number
  ): number {
    let i = startIndex + 1
    while (i < tokens.length && tokens[i].type === 'space') {
      i++
    }
    return i
  }

  private isFollowedByOpenParen(tokens: Token[], index: number): boolean {
    return (
      index < tokens.length &&
      tokens[index].type === 'punctuation' &&
      tokens[index].value === '('
    )
  }

  private isInsideValidFunction(
    tokens: Token[],
    currentIndex: number
  ): boolean {
    let parenDepth = 0

    for (let i = currentIndex - 1; i >= 0; i--) {
      const token = tokens[i]

      if (token.type === 'punctuation') {
        if (token.value === ')') {
          parenDepth++
        } else if (token.value === '(') {
          parenDepth--

          if (parenDepth < 0) {
            const funcIndex = this.findPreviousNonSpaceTokenIndex(tokens, i)
            return (
              funcIndex >= 0 &&
              tokens[funcIndex].type === 'function' &&
              !tokens[funcIndex].isError
            )
          }
        }
      }
    }

    return false
  }

  private findPreviousNonSpaceTokenIndex(
    tokens: Token[],
    startIndex: number
  ): number {
    let i = startIndex - 1
    while (i >= 0 && tokens[i].type === 'space') {
      i--
    }
    return i
  }
}
