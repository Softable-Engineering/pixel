/**
 * Returns the contrasting text color for a given background color.
 * @param backgroundColor hexadecimal color (i.e.: "#ffffff", "#000", "#ffcc00")
 */
export function getContrastingTextColor(
  backgroundColor: string
): 'black' | 'white' {
  let hex = backgroundColor.replace('#', '')

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(c => c + c)
      .join('')
  }

  if (hex.length === 8) {
    hex = hex.substring(0, 6)
  }

  if (hex.length !== 6) return 'black'

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  return luminance > 0.6 ? 'black' : 'white'
}
