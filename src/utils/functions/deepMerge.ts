import type { DeepPartial } from '@components/tables/TableView/types/deepPartial'

export function deepMerge<T>(base: T, override?: DeepPartial<T>): T {
  if (override === undefined) return clone(base)

  if (!isPlainObject(base) || !isPlainObject(override)) {
    return clone(override as T)
  }

  const result: any = Array.isArray(base) ? [] : {}

  const baseKeys = Object.keys(base as any) as (keyof T)[]
  const overrideKeys = Object.keys(override as any) as (keyof T)[]

  const allKeys = Array.from(new Set([...baseKeys, ...overrideKeys]))

  for (const k of allKeys) {
    const baseVal = (base as any)[k]
    const overrideVal = (override as any)[k]

    if (overrideVal === undefined) {
      result[k] = clone(baseVal)
      continue
    }

    if (isPlainObject(baseVal) && isPlainObject(overrideVal)) {
      result[k] = deepMerge(baseVal, overrideVal)
      continue
    }

    result[k] = clone(overrideVal)
  }

  return result as T
}

function isPlainObject(x: any): x is Record<string, any> {
  return !!x && typeof x === 'object' && !Array.isArray(x)
}

function clone<T>(v: T): T {
  if (v === undefined || v === null) return v
  if (Array.isArray(v)) return v.map(item => clone(item)) as unknown as T
  if (isPlainObject(v)) {
    const out: any = {}
    for (const k of Object.keys(v)) out[k] = clone((v as any)[k])
    return out
  }
  return v
}
