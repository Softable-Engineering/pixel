// External Libraries
import type React from 'react'

// Components
import { DateCell } from './components/DateCell'
import { SelectCell } from './components/SelectCell'
import { RichTextCell } from './components/RichTextCell'
import { CheckboxCell } from './components/CheckboxCell'
import { Typography } from '@components/toolkit/Typography'

// Types
import type { Props } from './types'
import { ColumnType } from '../../types'

// Styles
import { Container } from './styles'

export const CellValue: React.FC<Props> = props => {
  if (props.type === ColumnType.SELECT) return <SelectCell {...props} />

  if (props.type === ColumnType.RICH_TEXT) {
    return <RichTextCell {...props} />
  }

  if (props.type === ColumnType.DATE) {
    return <DateCell {...props} />
  }

  if (props.type === ColumnType.CHECKBOX) {
    return <CheckboxCell {...props} />
  }

  if (props.type === ColumnType.FORMULA) {
  }

  return (
    <Container>
      <Typography variant="b2">Tipo de celula não encontrado!</Typography>
    </Container>
  )
}
