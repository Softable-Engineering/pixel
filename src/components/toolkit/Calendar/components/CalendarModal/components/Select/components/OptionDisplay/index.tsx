// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'

interface Props {
  value: string
  onClick: () => void
}

export const OptionDisplay: React.FC<Props> = ({ value, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Typography variant="b2" color="var(--text-color)">
        {value}
      </Typography>
    </Container>
  )
}
