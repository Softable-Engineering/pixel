import { BaseValidator } from '../../../base/BaseValidator'

export class FloatValidator extends BaseValidator {
  constructor(maxDecimalPlaces = 3, minLength = 1, maxLength = 20) {
    const decimalRegex = new RegExp(`^\\d+(,\\d{1,${maxDecimalPlaces}})?$`)

    super({
      pattern: decimalRegex,
      minLength,
      maxLength
    })
  }
}
