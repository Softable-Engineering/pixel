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
}

export const RichTextCell: React.FC<Props> = ({
  text,
  rich_text,
  onChange
}) => {
  return (
    <CellModal
      text={text}
      minHeight="100%"
      type={CellTypes.TEXT}
      onChange={onChange}
    >
      <Container>
        <Typography variant="b2" $align="left">
          {text}
        </Typography>
      </Container>
    </CellModal>
  )
}
