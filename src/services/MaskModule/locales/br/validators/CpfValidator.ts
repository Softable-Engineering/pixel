import { CPF_PATTERN } from '../masks/CpfMask'
import { BaseValidator } from '../../../base/BaseValidator'

export class CpfValidator extends BaseValidator {
  constructor() {
    const length = CPF_PATTERN.length
    super({ minLength: length, maxLength: length })
  }

  validate(value: string): boolean {
    if (value == null) return false

    return isCpfValid(value)
  }
}

/**
 * Validates if a CPF (Brazilian tax ID) is valid.
 *
 * This function:
 * - Removes any non-digit characters (dots, dashes, spaces).
 * - Checks if CPF has 11 digits.
 * - Rejects CPFs where all digits are the same (e.g., '11111111111').
 * - Performs CPF check digit validation (standard algorithm).
 *
 * @param inputCPF - CPF as a string, can be formatted (e.g., "123.456.789-09").
 * @returns true if CPF is valid, false otherwise.
 */
function isCpfValid(inputCPF: string): boolean {
  // Remove dots, dashes, and spaces
  const cpfOnlyNumbers = inputCPF.replace(/[\s.-]/g, '')

  // CPF must be exactly 11 digits
  if (cpfOnlyNumbers.length !== 11) return false

  // Check if all digits are the same (invalid CPF)
  if (/^(\d)\1{10}$/.test(cpfOnlyNumbers)) return false

  // Validate first check digit
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpfOnlyNumbers.charAt(i)) * (10 - i)
  }

  let firstCheckDigit = (sum * 10) % 11
  if (firstCheckDigit === 10 || firstCheckDigit === 11) firstCheckDigit = 0
  if (firstCheckDigit !== parseInt(cpfOnlyNumbers.charAt(9))) return false

  // Validate second check digit
  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpfOnlyNumbers.charAt(i)) * (11 - i)
  }

  let secondCheckDigit = (sum * 10) % 11
  if (secondCheckDigit === 10 || secondCheckDigit === 11) secondCheckDigit = 0
  if (secondCheckDigit !== parseInt(cpfOnlyNumbers.charAt(10))) return false

  return true
}
