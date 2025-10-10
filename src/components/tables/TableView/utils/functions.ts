// Types
import { ColumnType } from '../types'

export function getAllTypeColumns(): ColumnType[] {
  return Object.values(ColumnType) as ColumnType[]
}
