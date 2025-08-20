import { BaseMask } from '../../../base/BaseMask'
import { limitLength, onlyDigits } from '../../../base/maskUtils'

const DATE_PATTERN = 'DD/MM/YYYY'

export class DateMask extends BaseMask {
  constructor() {
    const length = DATE_PATTERN.length
    super(length, length)
  }

  format(value: string): string {
    const digits = onlyDigits(value)

    let day = digits.slice(0, 2)
    let month = digits.slice(2, 4)
    let year = digits.slice(4, 8)

    // Clamp day (01–31)
    if (day.length === 2) {
      const parsed = parseInt(day)
      if (parsed > 31) day = '31'
      else if (parsed < 1) day = '01'
    }

    // Clamp month (01–12)
    if (month.length === 2) {
      const parsed = parseInt(month)
      if (parsed > 12) month = '12'
      else if (parsed < 1) month = '01'
    }

    // Clamp year (>= 0000)
    if (year.length === 4) {
      const parsed = parseInt(year)
      if (parsed < 0) year = '0000'
    }

    // Rebuild progressively
    let result = ''
    if (day) result += day
    if (month) result += `/${month}`
    if (year) result += `/${year}`

    return limitLength(result, this.maxLength)
  }
}
