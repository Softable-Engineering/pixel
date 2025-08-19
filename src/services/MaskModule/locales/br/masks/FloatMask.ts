import { BaseMask } from '../../../base/BaseMask'
import { onlyDigits, limitLength } from '../../../base/maskUtils'

/**
 * Automatically formats a numeric input as a float using comma as decimal separator.
 *
 * Ignores user-entered punctuation and inserts the comma based on configured decimal places.
 */
export class FloatMask extends BaseMask {
  private maxDecimalPlaces: number

  constructor(decimalDigits = 2, maxLength = 20) {
    super(1, maxLength)
    this.maxDecimalPlaces = decimalDigits
  }

  format(value: string): string {
    const rawDigits = onlyDigits(value)
    const digits = limitLength(rawDigits, this.maxLength)

    if (!digits) return ''

    const length = digits.length

    // If the string is shorter than or equal to the number of decimal places, prefix with zeros
    if (length <= this.maxDecimalPlaces) {
      const padded = digits.padStart(this.maxDecimalPlaces + 1, '0')
      const intPart = padded.slice(0, padded.length - this.maxDecimalPlaces)
      const decimalPart = padded.slice(-this.maxDecimalPlaces)
      return `${intPart},${decimalPart}`
    }

    const intPart = digits.slice(0, length - this.maxDecimalPlaces)
    const decimalPart = digits.slice(-this.maxDecimalPlaces)
    const intFormatted = this.formatThousands(intPart)

    return `${intFormatted},${decimalPart}`
  }

  /**
   * Adds dot thousand separators to a string of digits.
   * Example: "1234567" => "1.234.567"
   */
  private formatThousands(value: string): string {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
}
