// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'

export const EmptyMessage: React.FC = () => {
  return (
    <Container>
      <Typography variant="b2">Nenhuma opção encontrada</Typography>
    </Container>
  )
}
