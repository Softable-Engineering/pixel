// Types
import { ColumnType, type TablePermissions } from '../types'

function getAllTypeColumns(): ColumnType[] {
  return Object.values(ColumnType) as ColumnType[]
}

export const DEFAULT_PERMISSIONS: TablePermissions = {
  columns: {
    create: { enabled: true, types: true },
    name: { enabled: true, types: true },
    edit: {
      enabled: true,
      types: true,
      properties: {
        format: true,
        options: true,
        formula: true,
        decimals: true,
        dateFormat: true,
        richText: true
      }
    },
    changeType: {
      enabled: true,
      rules: {
        date: getAllTypeColumns(),
        page: getAllTypeColumns(),
        phone: getAllTypeColumns(),
        email: getAllTypeColumns(),
        number: getAllTypeColumns(),
        select: getAllTypeColumns(),
        formula: getAllTypeColumns(),
        checkbox: getAllTypeColumns(),
        rich_text: getAllTypeColumns(),
        multi_select: getAllTypeColumns()
      }
    },
    hide: { enabled: true, types: true },
    filter: { enabled: true, types: true },
    delete: { enabled: true, types: true },
    freeze: { enabled: true, types: true },
    expand: { enabled: true, types: true },
    duplicate: { enabled: true, types: true },
    calculate: { enabled: true, types: true }
  },
  rows: {
    create: { enabled: true },
    edit: { enabled: true, columnTypes: true },
    delete: { enabled: true }
  }
}
