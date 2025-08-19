import { BaseMask } from '../../../base/BaseMask'
import { applyPattern, limitLength, onlyDigits } from '../../../base/maskUtils'

export const ZIP_CODE_PATTERN = 'XXXXX-XXX'

export class ZipCodeMask extends BaseMask {
  constructor() {
    const length = ZIP_CODE_PATTERN.length
    super(length, length)
  }

  format(value: string): string {
    const digits = onlyDigits(value)
    const formatted = applyPattern(digits, ZIP_CODE_PATTERN)

    return limitLength(formatted, this.maxLength)
  }
}
