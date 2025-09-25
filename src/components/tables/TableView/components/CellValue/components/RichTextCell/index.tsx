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
      viewOnly={viewOnly}
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
