// External Libraries
import type React from 'react'

// Components
import { DateCell } from './components/DateCell'
import { SelectCell } from './components/SelectCell'
import { RichTextCell } from './components/RichTextCell'
import { Typography } from '@components/toolkit/Typography'

// Utils
import {
  isBaseDate,
  isBaseMultiSelect,
  isBaseSelect,
  isBaseText
} from './utils'

// Types
import type { Props } from './types'

// Styles
import { Container } from './styles'

export const CellValue: React.FC<Props> = props => {
  if (isBaseSelect(props)) return <SelectCell {...props} />

  if (isBaseText(props)) {
    return <RichTextCell {...props} />
  }

  if (isBaseDate(props)) {
    return <DateCell {...props} />
  }

  if (isBaseMultiSelect(props)) {
    return <SelectCell {...props} />
  }

  return (
    <Container>
      <Typography variant="b2">Tipo de celula não encontrado!</Typography>
    </Container>
  )
}
