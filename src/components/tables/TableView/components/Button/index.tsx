// External Libraries
import type React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Types
import type { Props } from './types'

// Styles
import { Container } from './styles'

export const Button: React.FC<Props> = ({ label, startIcon, onClick }) => {
  return (
    <Container onClick={onClick}>
      {startIcon}

      {label ? (
        <Typography variant="b2" color="var(--text-color-secondary)">
          {label}
        </Typography>
      ) : null}
    </Container>
  )
}
