import { BaseMask } from '../../../base/BaseMask'
import { onlyDigits } from '../../../base/maskUtils'

/**
 * Formats input as currency, with thousand separator, decimal comma,
 * optional prefix (e.g. R$, $), and support for negatives.
 *
 * Examples:
 * - "123456" → "R$ 1.234,56"
 * - "-123"   → "R$ -1,23"
 */
export class MoneyMask extends BaseMask {
  private maxDecimalPlaces: number
  private prefix: string
  private allowNegative: boolean

  constructor({
    prefix = 'R$',
    maxDecimalPlaces = 2,
    allowNegative = true,
    maxLength = 20
  }: {
    prefix?: string
    maxDecimalPlaces?: number
    allowNegative?: boolean
    maxLength?: number
  } = {}) {
    super(1, maxLength)
    this.prefix = prefix
    this.maxDecimalPlaces = maxDecimalPlaces
    this.allowNegative = allowNegative
  }

  format(value: string): string {
    if (!value) return ''

    const isNegative = this.allowNegative && value.trim().startsWith('-')
    const digits = onlyDigits(value).slice(0, this.maxLength)

    if (!digits) {
      return isNegative
        ? `${this.prefix} -0,${'0'.repeat(this.maxDecimalPlaces)}`
        : `${this.prefix} 0,${'0'.repeat(this.maxDecimalPlaces)}`
    }

    const len = digits.length

    // Ex: 3 digits, 2 decimals → '003' => '0,03'
    if (len <= this.maxDecimalPlaces) {
      const padded = digits.padStart(this.maxDecimalPlaces + 1, '0')
      const intPart = padded.slice(0, padded.length - this.maxDecimalPlaces)
      const decimalPart = padded.slice(-this.maxDecimalPlaces)
      return `${this.prefix} ${isNegative ? '-' : ''}${intPart},${decimalPart}`
    }

    const intRaw = digits.slice(0, len - this.maxDecimalPlaces)
    const decimal = digits.slice(-this.maxDecimalPlaces)
    const intFormatted = this.formatThousands(intRaw)

    return `${this.prefix} ${isNegative ? '-' : ''}${intFormatted},${decimal}`
  }

  private formatThousands(value: string): string {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
}
