import { BaseMask } from '../../../base/BaseMask'
import { limitLength, onlyDigits } from '../../../base/maskUtils'

/**
 * Formats integers, allowing only digits.
 */
export class IntegerMask extends BaseMask {
  constructor(maxLength = 15) {
    super(1, maxLength)
  }

  format(value: string): string {
    const digits = onlyDigits(value)
    return limitLength(digits, this.maxLength)
  }
}
