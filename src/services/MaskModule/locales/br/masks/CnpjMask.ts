import { BaseMask } from '../../../base/BaseMask'
import { applyPattern, limitLength, onlyDigits } from '../../../base/maskUtils'

export const CNPJ_PATTERN = 'XX.XXX.XXX/XXXX-XX'

export class CnpjMask extends BaseMask {
  constructor() {
    const length = CNPJ_PATTERN.length
    super(length, length)
  }

  format(value: string): string {
    const digits = onlyDigits(value)
    const formatted = applyPattern(digits, CNPJ_PATTERN)

    return limitLength(formatted, this.maxLength)
  }
}
