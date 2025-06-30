import { FontWeights, weights } from '../config'

export function normalizeWeight(
  value: keyof FontWeights | (keyof FontWeights)[] | undefined
) {
  if (!value) return undefined
  else if (Array.isArray(value)) return value.map(item => weights[item])
  else return [value].map(item => weights[item])
}
