// Types
import type { Column } from '../../../types'
import type { OptionsGroup } from '../../../components/OptionsListPanel/types'
import type { FunctionDescriptor } from '../../../components/FormulaInput/types'

interface AvailableItemsParams {
  search: string
  columns: Column[]
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
      options: properties.map(column => ({ type: 'column', column }))
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
