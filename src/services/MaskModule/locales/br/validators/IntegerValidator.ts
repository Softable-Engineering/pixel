import { BaseValidator } from '../../../base/BaseValidator'

export class IntegerValidator extends BaseValidator {
  constructor(minLength = 1, maxLength = 15) {
    super({
      pattern: /^\d+$/,
      minLength,
      maxLength
    })
  }
}
