/**
 * Regular expressions to validate IE (Inscrição Estadual) by UF.
 * These are based on known formatting patterns. Some UFs may require
 * specific checksum validation which can be added later.
 */
export const StateIeRegex: Record<string, RegExp> = {
  AC: /^\d{2}\.\d{3}\.\d{3}\/\d{3}-\d{2}$/,
  AL: /^\d{9}$/,
  AP: /^\d{9}$/,
  AM: /^\d{2}\.\d{3}\.\d{3}-\d{1}$/,
  BA: /^\d{7}-\d{2}$/,
  CE: /^\d{8}-\d{1}$/,
  DF: /^\d{11}-\d{2}$/,
  ES: /^\d{8}-\d{1}$/,
  GO: /^\d{2}\.\d{3}\.\d{3}-\d{1}$/,
  MA: /^\d{8}-\d{1}$/,
  MT: /^\d{10}-\d{1}$/,
  MS: /^\d{8}-\d{1}$/,
  MG: /^\d{3}\.\d{3}\.\d{3}\/\d{4}$/,
  PA: /^\d{2}-\d{7}-\d{1}$/,
  PB: /^\d{8}-\d{1}$/,
  PR: /^\d{3}\.\d{5}-\d{2}$/,
  PE: /^\d{7}-\d{2}$/,
  PI: /^\d{8}-\d{1}$/,
  RJ: /^\d{2}\.\d{2}\.\d{2}-\d{2}$/,
  RN: /^\d{2}\.\d{3}\.\d{3}-\d{1}$/,
  RS: /^\d{3}\/\d{7}$/,
  RO: /^\d{13}-\d{1}$/,
  RR: /^\d{8}-\d{1}$/,
  SP: /^\d{3}\.\d{3}\.\d{3}\.\d{3}$/,
  SC: /^\d{3}\.\d{3}\.\d{3}$/,
  SE: /^\d{8}-\d{1}$/,
  TO: /^\d{9,11}$/ // TO can have 9 or 11 digits without punctuation
}
