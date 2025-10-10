// Hooks
import { useTableViewContext } from '@components/tables/TableView/contexts/useTableViewContext'

// Utils
import { COLUMN_TYPE_MAP } from '@components/tables/TableView/utils/columnInfos'

// Types
import { ColumnType } from '@components/tables/TableView/types'
import type { DropdownActionsGroup } from '@components/commons/toolkit/ActionsPanel/types'

export function getOptions(): DropdownActionsGroup<ColumnType>[] {
  // Hooks
  const { permissions } = useTableViewContext()

  // Constants
  const columnPermissions = permissions.columns.create
  const options = Object.values(ColumnType).filter(option => {
    const allowedType = Array.isArray(columnPermissions.types)
      ? columnPermissions.types.includes(option)
      : columnPermissions.types === true

    return option !== ColumnType.PAGE && allowedType
  })

  return [
    {
      actions: options.map(option => {
        const action = COLUMN_TYPE_MAP[option]
        return {
          id: option,
          label: action.label,
          icon: action.icon,
          type: 'button'
        }
      })
    }
  ]
}
