import { CNPJ_PATTERN } from '../masks/CnpjMask'
import { BaseValidator } from '../../../base/BaseValidator'

export class CnpjValidator extends BaseValidator {
  constructor() {
    const length = CNPJ_PATTERN.length
    super({ minLength: length, maxLength: length })
  }

  validate(value: string): boolean {
    if (value == null) return false

    return isCnpjValid(value)
  }
}

/**
 * Validates whether a given CNPJ number is valid.
 * @param cnpj The CNPJ number as a string.
 * @returns True if valid, false otherwise.
 */
function isCnpjValid(cnpj: string): boolean {
  if (!cnpj) return false

  // Remove any non-digit characters
  const cleanedCnpj = cnpj.replace(/[^\d]+/g, '')

  // CNPJ must be exactly 14 digits
  if (cleanedCnpj.length !== 14) return false

  // Reject CNPJs with all identical digits (e.g., 00000000000000)
  if (/^(\d)\1{13}$/.test(cleanedCnpj)) return false

  // Extract the base CNPJ and the two check digits
  const baseCnpj = cleanedCnpj.slice(0, 12)
  const checkDigits = cleanedCnpj.slice(12)

  // Calculate first check digit
  const firstSum = calculateCnpjWeightedSum(baseCnpj, 12, 5)
  const firstCheckDigit = calculateCnpjCheckDigit(firstSum)

  if (firstCheckDigit !== Number(checkDigits.charAt(0))) {
    return false
  }

  // Calculate second check digit (base + first check digit)
  const secondSum = calculateCnpjWeightedSum(baseCnpj + firstCheckDigit, 13, 6)
  const secondCheckDigit = calculateCnpjCheckDigit(secondSum)

  if (secondCheckDigit !== Number(checkDigits.charAt(1))) {
    return false
  }

  return true
}

/**
 * Calculates the weighted sum for CNPJ verification digits.
 * @param numbers The numeric string of the CNPJ.
 * @param size The number of digits to consider for the calculation.
 * @param position The starting multiplier position (5 or 6).
 * @returns The weighted sum.
 */
function calculateCnpjWeightedSum(
  numbers: string,
  size: number,
  position: number
): number {
  let sum = 0

  for (let i = 0; i < size; i++) {
    sum += Number(numbers.charAt(i)) * position
    position--

    if (position < 2) {
      position = 9
    }
  }

  return sum
}

/**
 * Calculates the verification digit based on the weighted sum.
 * @param sum The weighted sum.
 * @returns The verification digit (0-9).
 */
function calculateCnpjCheckDigit(sum: number): number {
  const remainder = sum % 11
  return remainder < 2 ? 0 : 11 - remainder
}
