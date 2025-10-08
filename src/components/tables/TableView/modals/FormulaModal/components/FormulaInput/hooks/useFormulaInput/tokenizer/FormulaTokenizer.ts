// Utils
import {
  ColumnTokenParser,
  NumberTokenParser,
  StringTokenParser,
  OperatorTokenParser,
  IdentifierTokenParser,
  type BaseTokenParser,
  WhitespaceTokenParser,
  PunctuationTokenParser
} from '../parsers'

// Types
import type { Token } from '../types'
import { TokenValidator } from '../utils'
import type { FunctionDescriptor } from '../../../types'

export class FormulaTokenizer {
  private validator: TokenValidator
  private parsers: BaseTokenParser[]

  constructor(functions: FunctionDescriptor[]) {
    this.validator = new TokenValidator(functions)
    this.parsers = [
      new ColumnTokenParser(),
      new WhitespaceTokenParser(),
      new StringTokenParser(),
      new NumberTokenParser(),
      new OperatorTokenParser(),
      new PunctuationTokenParser(),
      new IdentifierTokenParser()
    ]
  }

  public tokenize(text: string): Token[] {
    const tokens = this.parseTokens(text)
    return this.postProcessTokens(tokens)
  }

  private parseTokens(text: string): Token[] {
    const tokens: Token[] = []
    let i = 0

    while (i < text.length) {
      const parser = this.findParser(text, i)

      if (parser) {
        const result = parser.parse(text, i)
        tokens.push(result.token)
        i = result.nextIndex
      } else {
        i++
      }
    }

    return tokens
  }

  private findParser(text: string, index: number): BaseTokenParser | null {
    return this.parsers.find(parser => parser.canParse(text, index)) || null
  }

  private postProcessTokens(tokens: Token[]): Token[] {
    return tokens.map((token, index) => {
      if (token.type === 'function') {
        return this.validator.validateFunction(token)
      }

      if (token.type === 'text' && token.isError) {
        return this.validator.validateTextToken(token, tokens, index)
      }

      return token
    })
  }
}
