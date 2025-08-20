import { BaseMask } from '../../../base/BaseMask'
import { limitLength, onlyDigits } from '../../../base/maskUtils'

/**
 * Formats a Brazilian phone number progressively:
 * (XX) XXXXX-XXXX or (XX) XXXX-XXXX depending on length.
 */
export class PhoneMask extends BaseMask {
  constructor(maxLength = 15) {
    super(14, maxLength) // 14 (fixo) or 15 (celular)
  }

  format(value: string): string {
    const digits = limitLength(onlyDigits(value), this.maxLength)
    if (!digits) return ''

    // DDD
    if (digits.length < 3) return `(${digits}`

    const ddd = digits.slice(0, 2)
    const rest = digits.slice(2)

    // Fixo: 8 dígitos / Celular: 9 dígitos
    if (rest.length <= 4) {
      return `(${ddd}) ${rest}`
    } else if (rest.length <= 8) {
      const part1 = rest.slice(0, 4)
      const part2 = rest.slice(4)
      return `(${ddd}) ${part1}${part2 ? `-${part2}` : ''}`
    } else {
      const part1 = rest.slice(0, 5)
      const part2 = rest.slice(5)
      return `(${ddd}) ${part1}-${part2}`
    }
  }
}
