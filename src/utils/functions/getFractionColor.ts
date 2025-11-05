/**
 * Retorna uma variação "10%" (conforme exemplo pedido) de uma cor hex.
 * A operação usada: aumenta a luminosidade aproximando-a do branco (por um fator)
 * e reduz a saturação alguns pontos. Esses parâmetros produzem o resultado
 * exato solicitado: '#43A798' -> '#BBDDD8'.
 */

/* helpers */
function normalizeHex(input: string): string {
  let hex = input.replace('#', '').trim()
  if (hex.length === 3)
    hex = hex
      .split('')
      .map(c => c + c)
      .join('')
  if (hex.length === 8) hex = hex.substring(0, 6)
  if (!/^[0-9a-fA-F]{6}$/.test(hex)) throw new Error('Invalid hex color')
  return hex.toLowerCase()
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = normalizeHex(hex)
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16)
  }
}

function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)))
  const toHex = (v: number) => clamp(v).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
}

/* RGB <-> HSL (valores: H 0..360, S 0..100, L 0..100) */
function rgbToHsl(
  r: number,
  g: number,
  b: number
): { h: number; s: number; l: number } {
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0)
        break
      case gn:
        h = (bn - rn) / d + 2
        break
      case bn:
        h = (rn - gn) / d + 4
        break
    }
    h = h * 60
  }

  return { h, s: s * 100, l: l * 100 }
}

function hslToRgb(
  h: number,
  s: number,
  l: number
): { r: number; g: number; b: number } {
  const hn = (((h % 360) + 360) % 360) / 360
  const sn = Math.max(0, Math.min(1, s / 100))
  const ln = Math.max(0, Math.min(1, l / 100))

  if (sn === 0) {
    const v = Math.round(ln * 255)
    return { r: v, g: v, b: v }
  }

  const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn
  const p = 2 * ln - q

  function hue2rgb(pv: number, qv: number, tv: number) {
    if (tv < 0) tv += 1
    if (tv > 1) tv -= 1
    if (tv < 1 / 6) return p + (q - p) * 6 * tv
    if (tv < 1 / 2) return q
    if (tv < 2 / 3) return p + (q - p) * (2 / 3 - tv) * 6
    return p
  }

  const r = hue2rgb(p, q, hn + 1 / 3)
  const g = hue2rgb(p, q, hn)
  const b = hue2rgb(p, q, hn - 1 / 3)

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  }
}

/**
 * Função principal:
 * - tintFactor: 0..1, quanto "do caminho" até o branco aplicar sobre a luminosidade
 * - desaturatePoints: quantos pontos percentuais reduzir da saturação (ex: 10 reduz S em 10).
 *
 * Para o exemplo solicitado, use tintFactor = 0.6307 e desaturatePoints = 10
 */
export function lightenAndDesaturate(
  hex: string,
  tintFactor = 0.6307,
  desaturatePoints = 10
): string {
  const { r, g, b } = hexToRgb(hex)
  const { h, s, l } = rgbToHsl(r, g, b)

  const newL = l + (100 - l) * Math.max(0, Math.min(1, tintFactor))
  const newS = Math.max(0, s - Math.abs(desaturatePoints))

  const { r: nr, g: ng, b: nb } = hslToRgb(h, newS, newL)
  return rgbToHex(nr, ng, nb)
}

/* Exemplo de uso:
   lightenAndDesaturate('#43A798') // -> '#BBDDD8' (com os defaults acima)
   lightenAndDesaturate('#43A798', 0.5, 5) // variação diferente
*/
