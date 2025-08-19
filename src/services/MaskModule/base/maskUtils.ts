/**
 * Removes all non-numeric characters from a string.
 * @param value - Input string.
 * @returns String containing only digits.
 */
export function onlyDigits(value: string): string {
  if (value == null) return ''
  return value.replace(/\D/g, '')
}

/**
 * Applies the mask progressively according to the available characters.
 *
 * Alphanumeric characters (letters and digits) in the pattern will be replaced
 * by characters from the input `value`, in order. Non-alphanumeric characters
 * (e.g. `.`, `-`, `/`) are treated as static parts of the mask.
 *
 * Examples:
 *
 * applyPattern('12345', 'XXX.XXX.XXX-XX') -> '123.45'
 *
 * applyPattern('AB1234', 'AA-NN.NN')      -> 'AB-12.34'
 *
 * applyPattern('12345678901', 'XXX.XXX.XXX-XX') -> '123.456.789-01'
 *
 * @param value - raw input string (partial or complete)
 * @param pattern - mask pattern where alphanumeric characters are placeholders
 * @returns partially formatted string
 */
export function applyPattern(value: string, pattern: string): string {
  if (value == null) return ''
  if (pattern == null) return value

  let result = ''
  let digitIndex = 0

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]

    if (/[a-zA-Z0-9]/.test(char)) {
      if (digitIndex < value.length) {
        result += value[digitIndex++]
      } else {
        break // No more digits available, stop applying more mask
      }
    } else {
      // Fixed mask character
      if (digitIndex < value.length) result += char
    }
  }

  return result
}

/**
 * Checks whether a string matches a regular expression.
 * @param value - Input string.
 * @param regex - Regular expression to test.
 * @returns Boolean indicating whether it matches.
 */
export function matchesPattern(value: string, regex: RegExp): boolean {
  return regex.test(value)
}

/**
 * Limits the length of a string to a maximum.
 * @param value - Input string.
 * @param maxLength - Maximum length allowed.
 * @returns Truncated string if longer than maxLength.
 */
export function limitLength(value: string, maxLength?: number): string {
  if (value == null) return ''
  if (maxLength === undefined) return value
  return value.slice(0, maxLength)
}

/**
 * Checks if a string meets min and max length constraints.
 * @param value - Input string.
 * @param min - Minimum length (optional).
 * @param max - Maximum length (optional).
 * @returns Boolean indicating whether the length is valid.
 */
export function isValidLength(
  value: string,
  min?: number,
  max?: number
): boolean {
  if (value == null) return false

  if (min !== undefined && value.length < min) return false
  if (max !== undefined && value.length > max) return false
  return true
}
