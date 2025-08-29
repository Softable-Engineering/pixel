// External Libraries
import type React from 'react'

// Components
import { SelectCell } from './components/SelectCell'
import { Typography } from '@components/toolkit/Typography'

// Utils
import { isBaseSelect } from './utils'

// Types
import type { Props } from './types'

// Styles
import { Container } from './styles'

export const CellValue: React.FC<Props> = props => {
  if (isBaseSelect(props)) return <SelectCell {...props} />

  return (
    <Container>
      <Typography variant="b2">Tipo de celula não encontrado!</Typography>
    </Container>
  )
}
