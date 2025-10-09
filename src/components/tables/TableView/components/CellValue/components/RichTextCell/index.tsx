// External Libraries
/** biome-ignore-all lint/a11y/useSemanticElements: <Not needed> */
import type React from 'react'

// Components
import { CellModal } from '../../../../modals/CellModal'
import { Typography } from '@components/toolkit/Typography'

// Types
import type { BaseText } from '../../types'
import { CellTypes } from '@components/tables/TableView/modals/CellModal/types'

// Styles
import { Container } from './styles'
import { useTableViewContext } from '@components/tables/TableView/contexts/useTableViewContext'
import { ColumnType } from '@components/tables/TableView/types'

interface Props extends BaseText {
  text: string
  viewOnly?: boolean
}

export const RichTextCell: React.FC<Props> = ({
  text,
  viewOnly,
  rich_text,
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

    return rowPermissions.columnTypes.includes(ColumnType.RICH_TEXT)
  }

  // Functions
  function handleChangeValue(value: string) {
    if (!rich_text.mask) return onChange?.(value)

    const maskedValue = rich_text.mask(value)
    onChange?.(maskedValue)
  }

  return (
    <CellModal
      text={text}
      minHeight={20 * 16}
      viewOnly={!canEdit}
      type={CellTypes.TEXT}
      onChange={handleChangeValue}
    >
      <Container>
        <Typography variant="b2" $align="left">
          {text}
        </Typography>
      </Container>
    </CellModal>
  )
}
