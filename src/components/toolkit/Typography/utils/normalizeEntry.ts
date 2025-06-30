export function normalizeEntry<T>(value: T | T[] | undefined) {
  if (!value) return undefined
  else if (typeof value === 'string') return [value]
  else return value
}
