import {
  ColumnActions,
  type ColumnPermissions,
  type ColumnDef,
  type TablePermissions
} from '@components/tables/TableView/types'

interface VisibleActionContext<T> {
  permissions: TablePermissions
  column: ColumnDef<T>
}

type ActionVisibilityResolver<T> = (ctx: VisibleActionContext<T>) => boolean

type ActionVisibilityMap<T> = Partial<
  Record<ColumnActions, ActionVisibilityResolver<T>>
>

export function getVisibleActions<T>(ctx: VisibleActionContext<T>) {
  const actionsMap = createActionMap<T>()

  return Object.entries(actionsMap)
    .filter(([_, resolver]) => resolver?.(ctx))
    .map(([action]) => action as ColumnActions)
}

function createActionMap<T>(): ActionVisibilityMap<T> {
  return {
    [ColumnActions.AddFilter]: ctx => canShowOption<T>(ctx, 'filter'),
    [ColumnActions.Calculate]: ctx => canShowOption<T>(ctx, 'calculate'),
    [ColumnActions.HideColumn]: ctx => canShowOption<T>(ctx, 'hide'),
    [ColumnActions.DeleteColumn]: ctx => canShowOption<T>(ctx, 'delete'),
    [ColumnActions.UpdateColumnName]: ctx => canShowOption<T>(ctx, 'name'),
    [ColumnActions.UpdateProperty]: ctx => canShowOption<T>(ctx, 'edit'),
    [ColumnActions.UpdateTypeColumn]: ctx =>
      canShowOption<T>(ctx, 'changeType'),
    [ColumnActions.Freeze]: ctx => canShowOption<T>(ctx, 'freeze'),
    [ColumnActions.DuplicateColumn]: ctx => canShowOption<T>(ctx, 'duplicate'),
    [ColumnActions.ExpandedColumn]: ctx => canShowOption<T>(ctx, 'expand')
  }
}

function canShowOption<T>(
  ctx: VisibleActionContext<T>,
  action: keyof ColumnPermissions
): boolean {
  switch (action) {
    case 'name':
    case 'hide':
    case 'filter':
    case 'delete':
    case 'create':
    case 'freeze':
    case 'expand':
    case 'calculate':
    case 'duplicate': {
      const typeAvailable = Array.isArray(ctx.permissions.columns[action].types)
        ? ctx.permissions.columns[action].types.includes(ctx.column.type)
        : ctx.permissions.columns[action].types === true

      return ctx.permissions.columns[action].enabled && typeAvailable
    }

    case 'edit': {
      const typeAvailable = Array.isArray(ctx.permissions.columns[action].types)
        ? ctx.permissions.columns[action].types.includes(ctx.column.type)
        : ctx.permissions.columns[action].types === true
      const hasPropertie =
        !!ctx.permissions.columns[action].properties.dateFormat ||
        !!ctx.permissions.columns[action].properties.decimals ||
        !!ctx.permissions.columns[action].properties.format ||
        !!ctx.permissions.columns[action].properties.formula ||
        !!ctx.permissions.columns[action].properties.options ||
        !!ctx.permissions.columns[action].properties.richText

      return (
        ctx.permissions.columns[action].enabled && typeAvailable && hasPropertie
      )
    }

    case 'changeType': {
      const canChangeType = ctx.permissions.columns[action].enabled

      return canChangeType
    }

    default:
      return false
  }
}
