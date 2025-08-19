/**
 * Represents a generic mask.
 *
 * A mask is responsible for formatting and unformatting (removing formatting) from a value.
 */
export interface Mask {
  /**
   * Optional minimum length of the masked string.
   */
  minLength?: number

  /**
   * Optional maximum length of the masked string.
   */
  maxLength?: number

  /**
   * Formats a plain string into a masked format.
   * @param value - Raw string (e.g., "12345678901").
   * @returns Masked string (e.g., "123.456.789-01").
   */
  format(value: string): string

  /**
   * Removes all mask characters from a formatted string.
   * @param value - Masked string (e.g., "123.456.789-01").
   * @returns Unmasked string (e.g., "12345678901").
   */
  unmask(value: string): string
}

/**
 * Represents a validator for a masked value.
 *
 * A validator checks whether a masked value is valid based on rules.
 */
export interface Validator {
  /**
   * Validates whether the input value is valid.
   * @param value - Masked string.
   * @returns `true` if valid, `false` otherwise.
   */
  validate(value: string): boolean
}

/**
 * Mode of document mask and validator.
 *
 * - AUTO: Automatically detect based on length.
 * - CPF: Force CPF.
 * - CNPJ: Force CNPJ.
 */
export enum DocumentMode {
  CPF = 'cpf',
  CNPJ = 'cnpj',
  AUTO = 'auto'
}
