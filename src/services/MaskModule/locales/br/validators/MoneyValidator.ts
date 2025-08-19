import { BaseValidator } from '../../../base/BaseValidator'

/**
 * Validates formatted currency strings.
 *
 * Supports optional prefix, negative values, and comma decimal separator.
 */
export class MoneyValidator extends BaseValidator {
  constructor({
    prefix = 'R$',
    maxDecimalPlaces = 2,
    allowNegative = true,
    minLength,
    maxLength
  }: {
    prefix?: string
    maxDecimalPlaces?: number
    allowNegative?: boolean
    minLength?: number
    maxLength?: number
  } = {}) {
    // Escape prefix for regex (if it has symbols)
    const escapedPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

    // Matches: R$ -1.234,56
    const pattern = new RegExp(
      `^${escapedPrefix}\\s?${allowNegative ? '-?' : ''}\\d{1,3}(\\.\\d{3})*(,\\d{1,${maxDecimalPlaces}})?$`
    )

    super({
      pattern,
      minLength,
      maxLength
    })
  }
}
