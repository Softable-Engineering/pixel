// Types
import type { ColumnType } from './columns'

export type AllowedItems<T> = true | T[]

export interface ColumnEditPermissions {
  enabled: boolean
  types: AllowedItems<ColumnType>

  properties: {
    format: AllowedItems<ColumnType>
    options: AllowedItems<ColumnType>
    formula: AllowedItems<ColumnType>
    decimals: AllowedItems<ColumnType>
    dateFormat: AllowedItems<ColumnType>
    richText: AllowedItems<ColumnType>
  }
}

export interface ColumnTypeConversionPermissions {
  enabled: boolean
  rules: {
    [K in ColumnType]: AllowedItems<ColumnType>
  }
}

export interface CommonColumnPermissions {
  enabled: boolean
  types: AllowedItems<ColumnType>
}

export interface ColumnPermissions {
  edit: ColumnEditPermissions
  name: CommonColumnPermissions
  hide: CommonColumnPermissions
  filter: CommonColumnPermissions
  create: CommonColumnPermissions
  freeze: CommonColumnPermissions
  delete: CommonColumnPermissions
  expand: CommonColumnPermissions
  calculate: CommonColumnPermissions
  duplicate: CommonColumnPermissions
  changeType: ColumnTypeConversionPermissions
}

export interface RowCreatePermissions {
  enabled: boolean
}

export interface RowEditPermissions {
  enabled: boolean
  columnTypes: AllowedItems<ColumnType>
}

export interface RowDeletePermissions {
  enabled: boolean
}

export interface RowPermissions {
  create: RowCreatePermissions
  edit: RowEditPermissions
  delete: RowDeletePermissions
}

export interface TablePermissions {
  columns: ColumnPermissions
  rows: RowPermissions
}
