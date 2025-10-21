export const TOKEN_PATTERNS = {
  NUMBER: /\d/,
  NUMBER_DIGIT: /[\d.]/,
  OPERATOR: /[+\-*/%=<>!]/,
  OPERATOR_EXTENDED: /[=<>]/,
  PUNCTUATION: /[(),.;:[\]/]/,
  IDENTIFIER: /[a-zA-Z]/,
  IDENTIFIER_EXTENDED: /[a-zA-Z0-9_]/,
  // IDENTIFIER_EXTENDED: /[a-zA-Z0-9_\s]/,
  WHITESPACE: /\s/
} as const
