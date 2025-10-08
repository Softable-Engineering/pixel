// Types
import type { ResponseAccessor } from '../types'

export function normalizeString(value: ResponseAccessor) {
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value === 'string') return value
  if (typeof value === 'boolean') return String(value)
  if (typeof value === 'number') return String(value)
  if (value == null) return ''

  return ''
}

export function normalizeArray(value: ResponseAccessor) {
  if (Array.isArray(value)) return value
  if (typeof value === 'string') return [value]
  if (typeof value === 'boolean') return [String(value)]
  if (typeof value === 'number') return [String(value)]
  if (value == null) return []

  return []
}

export function normalizeNumber(value: ResponseAccessor) {
  if (Array.isArray(value)) return value.length
  if (typeof value === 'string') return Number(value)
  if (typeof value === 'boolean') return Number(value)
  if (typeof value === 'number') return value
  if (value == null) return 0

  return 0
}

export function normalizeBoolean(value: ResponseAccessor) {
  if (typeof value === 'boolean') return value
  if (typeof value === 'string') return value === 'true'
  if (Array.isArray(value)) return value.length > 0
  if (typeof value === 'number') return value > 0
  if (value == null) return false

  return false
}
