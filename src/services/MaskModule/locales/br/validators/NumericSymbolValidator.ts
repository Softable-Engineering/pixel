import { BaseValidator } from '../../../base/BaseValidator'

export class NumericSymbolValidator extends BaseValidator {
  constructor(minLength = 1, maxLength = 25) {
    super({
      pattern: /^[\d.,/-]+$/,
      minLength,
      maxLength
    })
  }
}
