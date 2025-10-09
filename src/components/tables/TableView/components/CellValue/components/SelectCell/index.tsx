// External Libraries
/** biome-ignore-all lint/a11y/useSemanticElements: <Not needed> */
import type React from 'react'
import { useMemo } from 'react'

// Components
import { Label } from '../../../Label'
import { CellModal } from '../../../../modals/CellModal'

// Hooks
import { useTableViewContext } from '@components/tables/TableView/contexts/useTableViewContext'

// Types
import type { BaseSelect } from '../../types'
import { ColumnType } from '@components/tables/TableView/types'
import { CellTypes } from '@components/tables/TableView/modals/CellModal/types'

// Styles
import { Container } from './styles'

type Variant = BaseSelect

type Props = Variant & {
  viewOnly?: boolean
}

export const SelectCell: React.FC<Props> = props => {
  // Constants
  const { selected, select, onChange } = props
  const labels = useMemo(() => {
    return select.options.filter(option => selected.includes(option.id))
  }, [select.options, selected])

  // Hooks
  const { permissions } = useTableViewContext()

  const canEdit = getCanEdit()

  // Functions
  function getCanEdit() {
    const rowPermissions = permissions.rows.edit

    if (!rowPermissions.enabled) return false
    if (rowPermissions.columnTypes === true) return true

    return rowPermissions.columnTypes.includes(ColumnType.SELECT)
  }

  function renderLabels() {
    if (labels.length === 0) return null

    return labels.map((option, index) => {
      return (
        <Label
          key={`options_${option.id}_${index}`}
          value={option.name}
          color={option.color}
        />
      )
    })
  }

  return (
    <CellModal
      minHeight={5 * 16}
      selected={selected}
      type={CellTypes.SELECT}
      options={select.options}
      viewOnly={!canEdit}
      multiple={select.multiple}
      onChange={onChange}
    >
      <Container>{renderLabels()}</Container>
    </CellModal>
  )
}
