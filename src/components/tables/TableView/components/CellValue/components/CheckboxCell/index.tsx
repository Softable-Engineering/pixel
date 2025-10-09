// External Libraries
/** biome-ignore-all lint/a11y/useSemanticElements: <Not needed> */
import type React from 'react'

// Types
import type { BaseCheckbox } from '../../types'

// Styles
import { Checkbox, Container } from './styles'
import { useTableViewContext } from '@components/tables/TableView/contexts/useTableViewContext'
import { ColumnType } from '@components/tables/TableView/types'

interface Props extends BaseCheckbox {
  viewOnly?: boolean
}

export const CheckboxCell: React.FC<Props> = ({
  checked,
  viewOnly,
  onChange
}) => {
  // Hooks
  const { permissions } = useTableViewContext()

  const canEdit = getCanEdit()

  // Functions
  function getCanEdit() {
    const rowPermissions = permissions.rows.edit

    if (!rowPermissions.enabled) return false
    if (rowPermissions.columnTypes === true) return true

    return rowPermissions.columnTypes.includes(ColumnType.CHECKBOX)
  }

  function toggleCheckbox() {
    if (!canEdit) return

    onChange(!checked)
  }

  return (
    <Container onClick={toggleCheckbox} tabIndex={0} role="button">
      <Checkbox type="checkbox" checked={checked} onChange={toggleCheckbox} />
    </Container>
  )
}
