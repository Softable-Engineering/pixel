// Components
import { GroupPicker } from '../components/GroupPicker'
import { ColumnTypePicker } from '../components/ColumnTypePicker'

// Assets
import { Type } from '@assets/icons/general/Type'
import { Hide } from '@assets/icons/general/Hide'
import { Calc } from '@assets/icons/general/Calc'
import { Trash } from '@assets/icons/general/Trash'
import { Freeze } from '@assets/icons/general/Freeze'
import { Filter } from '@assets/icons/general/Filter'
import { PencilIcon } from '@assets/icons/tables/Pencil'
import { Settings } from '@assets/icons/general/Settings'
import { Expanded } from '@assets/icons/general/Expanded'
import { Duplicate } from '@assets/icons/general/Duplicate'

// Types
import { ColumnActions, ColumnType } from '@components/tables/TableView/types'
import type { DropdownActionsGroup } from '@components/commons/toolkit/ActionsPanel/types'

interface Params {
  type: ColumnType
  onChangeTypeColumn: (type: ColumnType) => void
  onOpenFormulaModal: () => void
}

export function getActionsGroups({
  type,
  onChangeTypeColumn,
  onOpenFormulaModal
}: Params): DropdownActionsGroup<ColumnActions>[] {
  return [
    {
      actions: [
        {
          id: ColumnActions.UpdateProperty,
          label: 'Editar propriedade',
          icon: <Settings color="var(--text-color)" />,
          type: 'group',
          children: getGroupModal(type, onOpenFormulaModal)
        },
        {
          id: ColumnActions.UpdateTypeColumn,
          label: 'Alterar tipo',
          icon: <Type color="var(--text-color)" />,
          type: 'group',
          children: <ColumnTypePicker onClick={onChangeTypeColumn} />
        }
      ]
    },
    {
      actions: [
        {
          id: ColumnActions.AddFilter,
          label: 'Filtrar',
          icon: <Filter color="var(--text-color)" />,
          type: 'button'
        },
        {
          id: ColumnActions.Calculate,
          label: 'Calcular',
          icon: <Calc color="var(--text-color)" />,
          type: 'button'
        },
        {
          id: ColumnActions.Freeze,
          label: 'Congelar',
          icon: <Freeze color="var(--text-color)" />,
          type: 'button'
        },
        {
          id: ColumnActions.HideColumn,
          label: 'Esconder',
          icon: <Hide color="var(--text-color)" />,
          type: 'button'
        },
        {
          id: ColumnActions.ExpandedColumn,
          label: 'Expandir',
          icon: <Expanded color="var(--text-color)" />,
          type: 'button'
        }
      ]
    },
    {
      actions: [
        {
          id: ColumnActions.DuplicateColumn,
          label: 'Duplicar propriedade',
          icon: <Duplicate color="var(--text-color)" />,
          type: 'button'
        },
        {
          id: ColumnActions.DeleteColumn,
          label: 'Excluir',
          icon: <Trash color="var(--text-color)" />,
          type: 'button',
          destructive: true
        }
      ]
    }
  ]
}

function getGroupModal(typeColumn: ColumnType, onOpenFormulaModal: () => void) {
  if (typeColumn === ColumnType.FORMULA)
    return (
      <GroupPicker
        options={[
          {
            id: 'formula',
            label: 'Editar fórmula',
            startIcon: <PencilIcon color="var(--text-color)" />
          }
        ]}
        onClick={onOpenFormulaModal}
      />
    )
}
