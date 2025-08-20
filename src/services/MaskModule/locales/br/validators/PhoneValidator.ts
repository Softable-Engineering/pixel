import { BaseValidator } from '../../../base/BaseValidator'

/**
 * Validates a Brazilian phone number with optional mobile or landline support.
 */
export class PhoneValidator extends BaseValidator {
  private allowedDDDs: string[]

  constructor({
    allowMobile = true,
    allowLandline = true,
    allowedDDDs = Array.from({ length: 89 }, (_, i) => `${i + 11}`), // 11–99
    minLength,
    maxLength
  }: {
    allowMobile?: boolean
    allowLandline?: boolean
    allowedDDDs?: string[]
    minLength?: number
    maxLength?: number
  } = {}) {
    const mobileRegex = /^\(?(\d{2})\)?\s?\d{5}-?\d{4}$/ // (11) 98765-4321
    const landlineRegex = /^\(?(\d{2})\)?\s?\d{4}-?\d{4}$/ // (11) 3456-7890

    const pattern =
      allowMobile && allowLandline
        ? /^\(?\d{2}\)?\s?(\d{4,5})-?\d{4}$/
        : allowMobile
          ? mobileRegex
          : landlineRegex

    super({ pattern, minLength, maxLength })

    this.allowedDDDs = allowedDDDs
  }

  validate(value: string): boolean {
    if (!super.validate(value)) return false

    const digits = value.replace(/\D/g, '')
    if (digits.length !== 10 && digits.length !== 11) return false

    const ddd = digits.slice(0, 2)
    return this.allowedDDDs.includes(ddd)
  }
}
