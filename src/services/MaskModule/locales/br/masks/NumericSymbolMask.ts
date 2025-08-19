import { BaseMask } from '../../../base/BaseMask'
import { limitLength } from '../../../base/maskUtils'

export class NumericSymbolMask extends BaseMask {
  constructor(maxLength = 25) {
    super(1, maxLength)
  }

  format(value: string): string {
    if (value == null) return ''

    const result = value.replace(/[^\d.,/-]/g, '')
    return limitLength(result, this.maxLength)
  }
}
