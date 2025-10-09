// Utils
import { getOptions } from './getOptions'
import { getVisibleActions } from './getVisibleActions'

// Types
import type {
  ColumnDef,
  ColumnType,
  TablePermissions
} from '@components/tables/TableView/types'
import type { DropdownActionsGroup } from '@components/toolkit/ActionsPanel/types'

export interface GetActionsParams<T> {
  permissions: TablePermissions
  column: ColumnDef<T>
  onChangeTypeColumn: (type: ColumnType) => void
  onOpenFormulaModal: () => void
}

export function getActions<T>(params: GetActionsParams<T>) {
  const ctx = {
    permissions: params.permissions,
    column: params.column
  }
  const options = getOptions<T>(params)
  const visibleActions = getVisibleActions<T>(ctx)

  return filterVisibleActions(options, visibleActions)
}

function filterVisibleActions<T extends string>(
  groups: DropdownActionsGroup<T>[],
  visibleIds: T[]
): DropdownActionsGroup<T>[] {
  return groups
    .map(group => {
      const filteredActions = group.actions.filter(action =>
        visibleIds.includes(action.id)
      )

      return { ...group, actions: filteredActions }
    })
    .filter(group => group.actions.length > 0)
}
