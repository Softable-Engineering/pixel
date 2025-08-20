import { BaseValidator } from '../../../base/BaseValidator'

/**
 * Validator for dates in the format dd/mm/yyyy.
 *
 * Ensures the format is correct and the date is valid in the calendar (e.g. 30/02 is invalid).
 */
export class DateValidator extends BaseValidator {
  constructor() {
    super({
      minLength: 10,
      maxLength: 10,
      pattern: /^\d{2}\/\d{2}\/\d{4}$/ // Strictly requires dd/mm/yyyy format
    })
  }

  override validate(value: string): boolean {
    if (!super.validate(value)) return false

    const [dayStr, monthStr, yearStr] = value.split('/')
    const day = parseInt(dayStr, 10)
    const month = parseInt(monthStr, 10)
    const year = parseInt(yearStr, 10)

    const date = new Date(year, month - 1, day)

    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    )
  }
}
