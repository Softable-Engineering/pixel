// External Libraries
import { format } from 'date-fns'
import { Cell } from '@tanstack/react-table'
// Utils
import { maskThousands } from '@utils/functions'

// Types
import type { ColumnType } from '@components/nodes/TableNode/types'

// Functions
export function getCellValue<T>(
  cell: Cell<T, unknown>,
  type: ColumnType,
  columnType: string
) {
  if (!type) return cell.getValue() as string

  const value = cell.getValue()

  if (type === 'text' || type === 'boolean') return value as string

  if (type === 'numeric') return maskThousands(value as number)

  if (type === 'time') return (value as string) ?? '-'

  if (type === 'date' || type === 'datetime') {
    const date = value ? new Date(value as string) : null
    if (!date || isNaN(date.getTime())) return '-'

    const formatString =
      type === 'datetime' ? 'dd/MM/yyyy HH:mm:ss' : 'dd/MM/yyyy'
    return format(date, formatString)
  }

  if (columnType.startsWith('formula:') && typeof value === 'number') {
    return maskThousands(value)
  }

  return value as string
}
