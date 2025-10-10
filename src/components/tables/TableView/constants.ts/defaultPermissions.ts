// Types
import type { TablePermissions } from '../types'

export const DEFAULT_PERMISSIONS: TablePermissions = {
  columns: {
    create: { enabled: false, types: [] },
    name: { enabled: false, types: [] },
    edit: {
      enabled: false,
      types: [],
      properties: {
        format: [],
        options: [],
        formula: [],
        decimals: [],
        dateFormat: [],
        richText: []
      }
    },
    changeType: {
      enabled: false,
      rules: {
        date: [],
        page: [],
        phone: [],
        email: [],
        number: [],
        select: [],
        formula: [],
        checkbox: [],
        rich_text: [],
        multi_select: []
      }
    },
    hide: { enabled: false, types: [] },
    filter: { enabled: false, types: [] },
    delete: { enabled: false, types: [] },
    freeze: { enabled: false, types: [] },
    expand: { enabled: false, types: [] },
    duplicate: { enabled: false, types: [] },
    calculate: { enabled: false, types: [] }
  },
  rows: {
    create: { enabled: false },
    edit: { enabled: false, columnTypes: [] },
    delete: { enabled: false }
  }
}
