import type { Validator } from '../types'

/**
 * Abstract class providing common validation utilities.
 * - Supports regex validation.
 * - Supports min and max length validation.
 */
export abstract class BaseValidator implements Validator {
  protected pattern?: RegExp
  protected minLength?: number
  protected maxLength?: number

  constructor(options?: {
    pattern?: RegExp
    minLength?: number
    maxLength?: number
  }) {
    this.pattern = options?.pattern
    this.minLength = options?.minLength
    this.maxLength = options?.maxLength
  }

  /**
   * Validates the input value based on:
   * - Pattern matching (if defined)
   * - Min length (if defined)
   * - Max length (if defined)
   *
   * Override this method if you need custom validation logic.
   *
   * @param value - Value to validate (usually masked string)
   * @returns true if valid, false otherwise
   */
  validate(value: string): boolean {
    if (value == null) return false

    const length = value.length

    if (this.minLength !== undefined && length < this.minLength) {
      return false
    }

    if (this.maxLength !== undefined && length > this.maxLength) {
      return false
    }

    if (this.pattern && !this.pattern.test(value)) return false

    return true
  }
}
