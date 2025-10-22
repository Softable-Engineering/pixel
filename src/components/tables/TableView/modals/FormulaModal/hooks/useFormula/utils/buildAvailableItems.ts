// Types
import type {
  OptionsGroup,
  FormulaOptionColumn
} from '../../../components/OptionsListPanel/types'
import type { FunctionDescriptor } from '../../../components/FormulaInput/types'

interface AvailableItemsParams {
  search: string
  columns: FormulaOptionColumn[]
  functions: FunctionDescriptor[]
}

export function buildAvailableItems({
  search,
  columns,
  functions
}: AvailableItemsParams): OptionsGroup[] {
  const properties = columns.filter(column =>
    column.label.toLowerCase().includes(search.toLowerCase())
  )

  const funcs = functions.filter(func =>
    func.displayName.toLowerCase().includes(search.toLowerCase())
  )

  const results: OptionsGroup[] = []

  if (properties.length) {
    results.push({
      name: 'Properties',
      title: 'Properties',
      options: properties.map(column => {
        return { type: 'column', column: parseColumn(column) }
      })
    })
  }

  if (funcs.length) {
    results.push({
      name: 'Functions',
      title: 'Functions',
      options: funcs.map(func => ({
        mode: 'common',
        type: 'function',
        value: func.value,
        displayValue: func.displayName
      }))
    })
  }

  return results
}

function parseColumn(column: FormulaOptionColumn) {
  if (column.tableName) {
    return { ...column, label: `${column.tableName}.${column.label}` }
  }

  return column
}
