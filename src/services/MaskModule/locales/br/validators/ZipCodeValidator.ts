import { ZIP_CODE_PATTERN } from '../masks/ZipCodeMask'
import { BaseValidator } from '../../../base/BaseValidator'

export class ZipCodeValidator extends BaseValidator {
  constructor() {
    const length = ZIP_CODE_PATTERN.length
    super({ minLength: length, maxLength: length })
  }

  validate(value: string): boolean {
    if (value == null) return false

    if (this.minLength !== undefined && value.length < this.minLength)
      return false

    if (this.maxLength !== undefined && value.length > this.maxLength)
      return false

    return true
  }
}
