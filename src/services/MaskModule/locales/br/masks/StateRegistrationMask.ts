import { BaseMask } from '../../../base/BaseMask'
import { StateIePatterns } from '../../../data/iePatterns'
import { applyPattern, onlyDigits } from '../../../base/maskUtils'

export class StateRegistrationMask extends BaseMask {
  private uf: string

  constructor(uf: string) {
    const pattern = StateIePatterns[uf]
    const length = pattern?.length ?? 0
    super(length, length)
    this.uf = uf
  }

  format(value: string): string {
    const pattern = StateIePatterns[this.uf]
    if (!pattern) return value

    const digits = onlyDigits(value)
    return applyPattern(digits, pattern)
  }
}
