import { BaseMask } from '../../../base/BaseMask'
import { applyPattern, limitLength, onlyDigits } from '../../../base/maskUtils'

export const CPF_PATTERN = 'XXX.XXX.XXX-XX'

export class CpfMask extends BaseMask {
  constructor() {
    const length = CPF_PATTERN.length
    super(length, length)
  }

  format(value: string): string {
    const digits = onlyDigits(value)
    const formatted = applyPattern(digits, CPF_PATTERN)

    return limitLength(formatted, this.maxLength)
  }
}
