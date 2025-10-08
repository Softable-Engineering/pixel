/**
 * Supported locales (country + language region).
 *
 * Extend this enum as needed for new countries.
 */
export enum Locale {
  BR = 'pt-BR', // Brazil
  US = 'en-US', // United States
  AR = 'es-AR' // Argentina
}

/**
 * Types of masks supported in the system.
 *
 * Add new types as needed for different data formats.
 */
export enum MaskType {
  CPF = 'CPF',
  CNPJ = 'CNPJ',
  DOCUMENT = 'DOCUMENT',
  PHONE = 'PHONE',
  DATE = 'DATE',
  FLOAT = 'FLOAT',
  INTEGER = 'INTEGER',
  MONEY = 'MONEY',
  ZIP_CODE = 'ZIP_CODE',
  NUMERIC_SYMBOL = 'NUMERIC_SYMBOL'
}
