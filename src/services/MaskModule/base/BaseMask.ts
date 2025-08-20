import type { Mask } from '../types'
import { onlyDigits } from './maskUtils'

/**
 * Abstract class that provides default behavior for most masks.
 * - Implements unmask() by removing all non-numeric characters.
 * - Supports optional maxLength and minLength constraints.
 */
export abstract class BaseMask implements Mask {
  /**
   * Maximum length of the masked string (optional).
   */
  maxLength?: number

  /**
   * Minimum length of the masked string (optional).
   */
  minLength?: number

  constructor(minLength?: number, maxLength?: number) {
    this.maxLength = maxLength
    this.minLength = minLength
  }

  /**
   * Removes all non-numeric characters from a string.
   * @param value - Masked or unmasked string.
   * @returns Plain string with digits only.
   */
  unmask(value: string): string {
    return onlyDigits(value)
  }

  /**
   * Must be implemented by each concrete mask class.
   * Applies the mask format to the input string.
   * @param value - Raw string.
   * @returns Masked string.
   */
  abstract format(value: string): string
}
